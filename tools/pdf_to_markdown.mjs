import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

function usageAndExit() {
  const msg = [
    "Usage:",
    "  node tools/pdf_to_markdown.mjs <input.pdf> [output.md] [--debug]",
    "",
    "Notes:",
    "- Pure Node.js (no external deps). Best-effort text extraction for text-based PDFs.",
  ].join("\n");
  console.error(msg);
  process.exit(2);
}

function toLatin1String(buf) {
  return buf.toString("latin1");
}

function hexToBytes(hex) {
  const clean = hex.replace(/\s+/g, "");
  const even = clean.length % 2 === 1 ? clean + "0" : clean;
  const out = Buffer.alloc(even.length / 2);
  for (let i = 0; i < even.length; i += 2) {
    out[i / 2] = parseInt(even.slice(i, i + 2), 16);
  }
  return out;
}

function decodePdfLiteralStringBytes(lit) {
  // Input without surrounding parentheses.
  const bytes = [];
  for (let i = 0; i < lit.length; i++) {
    const ch = lit[i];
    if (ch !== "\\") {
      bytes.push(ch.charCodeAt(0) & 0xff);
      continue;
    }
    i++;
    if (i >= lit.length) break;
    const esc = lit[i];
    if (esc === "n") bytes.push(0x0a);
    else if (esc === "r") bytes.push(0x0d);
    else if (esc === "t") bytes.push(0x09);
    else if (esc === "b") bytes.push(0x08);
    else if (esc === "f") bytes.push(0x0c);
    else if (esc === "\\" || esc === "(" || esc === ")") bytes.push(esc.charCodeAt(0) & 0xff);
    else if (esc === "\n") {
      // line continuation: backslash-newline is ignored
    } else if (esc === "\r") {
      // handle CRLF
      if (lit[i + 1] === "\n") i++;
    } else if (/[0-7]/.test(esc)) {
      // Octal: up to 3 digits, already have 1
      let oct = esc;
      if (i + 1 < lit.length && /[0-7]/.test(lit[i + 1])) {
        oct += lit[++i];
      }
      if (i + 1 < lit.length && /[0-7]/.test(lit[i + 1])) {
        oct += lit[++i];
      }
      bytes.push(parseInt(oct, 8) & 0xff);
    } else {
      bytes.push(esc.charCodeAt(0) & 0xff);
    }
  }
  return Buffer.from(bytes);
}

function utf16beBytesToString(buf) {
  // Assumes buf length even; ignores trailing odd byte.
  let out = "";
  for (let i = 0; i + 1 < buf.length; i += 2) {
    out += String.fromCharCode((buf[i] << 8) | buf[i + 1]);
  }
  return out;
}

function extractObjects(pdfLatin1) {
  // Returns Map("objNum genNum" => {start, end, body})
  const objects = new Map();
  const headerRe = /(^|\s)(\d+)\s+(\d+)\s+obj\b/g;
  while (true) {
    const m = headerRe.exec(pdfLatin1);
    if (!m) break;
    const objNum = m[2];
    const genNum = m[3];
    const headerIdx = m.index + m[1].length;
    const bodyStart = pdfLatin1.indexOf("\n", headerIdx);
    if (bodyStart === -1) continue;
    const endIdx = pdfLatin1.indexOf("endobj", bodyStart);
    if (endIdx === -1) continue;
    const body = pdfLatin1.slice(bodyStart + 1, endIdx);
    objects.set(`${objNum} ${genNum}`, { start: bodyStart + 1, end: endIdx, body });
    headerRe.lastIndex = endIdx + 5;
  }
  return objects;
}

function findStreamInObject(objBody) {
  const streamPos = objBody.indexOf("stream");
  if (streamPos === -1) return null;
  const endstreamPos = objBody.indexOf("endstream", streamPos);
  if (endstreamPos === -1) return null;
  const dictPart = objBody.slice(0, streamPos);
  // stream content begins after EOL following 'stream'
  let dataStart = streamPos + "stream".length;
  if (objBody[dataStart] === "\r" && objBody[dataStart + 1] === "\n") dataStart += 2;
  else if (objBody[dataStart] === "\n") dataStart += 1;
  else if (objBody[dataStart] === "\r") dataStart += 1;
  const dataEnd = endstreamPos;
  const streamDataLatin1 = objBody.slice(dataStart, dataEnd);
  return { dictPart, dataStart, dataEnd, streamDataLatin1 };
}

function objectStreamBytes(pdfBuf, objMeta, streamInfo) {
  // objMeta.start is the index into the full pdf latin1 string; streamInfo offsets are within obj body.
  // Convert stream's latin1 slice back into bytes using 1:1 mapping.
  const objBodyStart = objMeta.start;
  const streamAbsStart = objBodyStart + streamInfo.dataStart;
  const streamAbsEnd = objBodyStart + streamInfo.dataEnd;
  return pdfBuf.subarray(streamAbsStart, streamAbsEnd);
}

function hasFlateDecode(dictPart) {
  if (dictPart.includes("/Filter /FlateDecode")) return true;
  if (dictPart.includes("/Filter[/FlateDecode") || dictPart.includes("/Filter [ /FlateDecode")) return true;
  return false;
}

function parseToUnicodeCMap(cmapText) {
  // Best-effort parsing of bfchar/bfrange sections.
  const mapping = new Map(); // key hex string (uppercase, even length) => unicode string
  const codeLengths = new Set();

  function normHexToken(tok) {
    const h = tok.replace(/[<>]/g, "").replace(/\s+/g, "").toUpperCase();
    if (h.length % 2 === 1) return h + "0";
    return h;
  }

  const lines = cmapText
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith("%"));

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const bfcharMatch = line.match(/^(\d+)\s+beginbfchar$/);
    if (bfcharMatch) {
      const n = parseInt(bfcharMatch[1], 10);
      for (let j = 0; j < n && i + 1 + j < lines.length; j++) {
        const l = lines[i + 1 + j];
        const m = l.match(/^(<[^>]+>)\s+(<[^>]+>)/);
        if (!m) continue;
        const src = normHexToken(m[1]);
        const dst = normHexToken(m[2]);
        const dstBytes = hexToBytes(dst);
        const dstStr = utf16beBytesToString(dstBytes);
        mapping.set(src, dstStr);
        codeLengths.add(src.length / 2);
      }
      i += 1 + n;
      continue;
    }

    const bfrangeMatch = line.match(/^(\d+)\s+beginbfrange$/);
    if (bfrangeMatch) {
      const n = parseInt(bfrangeMatch[1], 10);
      for (let j = 0; j < n && i + 1 + j < lines.length; j++) {
        const l = lines[i + 1 + j];
        // Forms:
        // <start> <end> <dstStart>
        // <start> <end> [<dst1> <dst2> ...]
        const m1 = l.match(/^(<[^>]+>)\s+(<[^>]+>)\s+(<[^>]+>)$/);
        if (m1) {
          const startHex = normHexToken(m1[1]);
          const endHex = normHexToken(m1[2]);
          const dstStartHex = normHexToken(m1[3]);
          const start = parseInt(startHex, 16);
          const end = parseInt(endHex, 16);
          const dstStart = parseInt(dstStartHex, 16);
          const width = startHex.length;
          for (let k = 0; k <= end - start; k++) {
            const src = (start + k).toString(16).toUpperCase().padStart(width, "0");
            const dst = (dstStart + k).toString(16).toUpperCase().padStart(dstStartHex.length, "0");
            const dstBytes = hexToBytes(dst);
            mapping.set(src, utf16beBytesToString(dstBytes));
          }
          codeLengths.add(startHex.length / 2);
          continue;
        }
        const m2 = l.match(/^(<[^>]+>)\s+(<[^>]+>)\s+\\[(.*)\\]$/);
        if (m2) {
          const startHex = normHexToken(m2[1]);
          const endHex = normHexToken(m2[2]);
          const arr = m2[3];
          const items = [];
          const itemRe = /<[^>]+>/g;
          let mm;
          while ((mm = itemRe.exec(arr))) items.push(normHexToken(mm[0]));
          const start = parseInt(startHex, 16);
          const end = parseInt(endHex, 16);
          const width = startHex.length;
          for (let k = 0; k <= end - start && k < items.length; k++) {
            const src = (start + k).toString(16).toUpperCase().padStart(width, "0");
            const dstBytes = hexToBytes(items[k]);
            mapping.set(src, utf16beBytesToString(dstBytes));
          }
          codeLengths.add(startHex.length / 2);
          continue;
        }
      }
      i += 1 + n;
      continue;
    }
    i++;
  }

  const preferredCodeBytes = codeLengths.size > 0 ? Math.max(...codeLengths) : null;
  return { mapping, preferredCodeBytes };
}

function tokenizeContentStream(s) {
  // Very small tokenizer for PDF content streams.
  const tokens = [];
  let i = 0;
  const isWs = (c) => c === " " || c === "\n" || c === "\r" || c === "\t" || c === "\f" || c === "\0";
  while (i < s.length) {
    while (i < s.length && isWs(s[i])) i++;
    if (i >= s.length) break;
    const c = s[i];
    if (c === "%") {
      // comment to end of line
      while (i < s.length && s[i] !== "\n" && s[i] !== "\r") i++;
      continue;
    }
    if (c === "(") {
      let depth = 1;
      let j = i + 1;
      while (j < s.length && depth > 0) {
        const ch = s[j];
        if (ch === "\\") {
          j += 2;
          continue;
        }
        if (ch === "(") depth++;
        else if (ch === ")") depth--;
        j++;
      }
      tokens.push({ type: "string", value: s.slice(i + 1, j - 1) });
      i = j;
      continue;
    }
    if (c === "<") {
      if (s[i + 1] === "<") {
        tokens.push({ type: "op", value: "<<" });
        i += 2;
        continue;
      }
      const j = s.indexOf(">", i + 1);
      if (j === -1) break;
      tokens.push({ type: "hex", value: s.slice(i + 1, j) });
      i = j + 1;
      continue;
    }
    if (c === ">") {
      if (s[i + 1] === ">") {
        tokens.push({ type: "op", value: ">>" });
        i += 2;
      } else {
        tokens.push({ type: "op", value: ">" });
        i += 1;
      }
      continue;
    }
    if (c === "[") {
      tokens.push({ type: "op", value: "[" });
      i++;
      continue;
    }
    if (c === "]") {
      tokens.push({ type: "op", value: "]" });
      i++;
      continue;
    }
    if (c === "/") {
      let j = i + 1;
      while (j < s.length && !isWs(s[j]) && !"[]<>()/%".includes(s[j])) j++;
      tokens.push({ type: "name", value: s.slice(i + 1, j) });
      i = j;
      continue;
    }
    // number or operator/keyword
    let j = i;
    while (j < s.length && !isWs(s[j]) && !"[]<>()/%".includes(s[j])) j++;
    const word = s.slice(i, j);
    if (/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(word)) tokens.push({ type: "number", value: word });
    else tokens.push({ type: "word", value: word });
    i = j;
  }
  return tokens;
}

function decodeTextToken(token, fontCtx) {
  // fontCtx: { toUnicode: {mapping, preferredCodeBytes} | null }
  const toUnicode = fontCtx?.toUnicode ?? null;
  let bytes;
  if (token.type === "hex") bytes = hexToBytes(token.value);
  else if (token.type === "string") bytes = decodePdfLiteralStringBytes(token.value);
  else return "";

  // UTF-16BE BOM
  if (bytes.length >= 2 && bytes[0] === 0xfe && bytes[1] === 0xff) {
    return utf16beBytesToString(bytes.subarray(2));
  }

  if (toUnicode && toUnicode.mapping.size > 0) {
    const step = toUnicode.preferredCodeBytes ?? 1;
    let out = "";
    for (let i = 0; i < bytes.length; i += step) {
      const chunk = bytes.subarray(i, i + step);
      const hex = chunk.toString("hex").toUpperCase().padStart(step * 2, "0");
      out += toUnicode.mapping.get(hex) ?? "";
    }
    if (out.length > 0) return out;
  }

  // Fallbacks: try UTF-8 if it looks plausible; otherwise latin1.
  const utf8 = bytes.toString("utf8");
  if (!utf8.includes("\uFFFD")) {
    // If utf8 decoding yields mostly printable text, prefer it.
    const printable = utf8.replace(/[\s\p{L}\p{N}\p{P}]/gu, "");
    if (printable.length / Math.max(1, utf8.length) < 0.05) return utf8;
  }

  return bytes.toString("latin1").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

  function extractTextFromContentStream(streamText, fontByName) {
  const tokens = tokenizeContentStream(streamText);
  const stack = [];
  let inText = false;
  let currentFont = null;
  let out = "";

  function newline() {
    if (!out.endsWith("\n")) out += "\n";
  }

  function fontCtx() {
    if (!currentFont) return null;
    return fontByName.get(currentFont) ?? null;
  }

  function popN(n) {
    return stack.splice(Math.max(0, stack.length - n), n);
  }

  for (const t of tokens) {
    if (t.type === "word") {
      const op = t.value;
      if (op === "BT") {
        inText = true;
        currentFont = null;
        newline();
        continue;
      }
      if (op === "ET") {
        inText = false;
        newline();
        stack.length = 0;
        continue;
      }
      if (!inText) {
        stack.length = 0;
        continue;
      }

      if (op === "Tf") {
        const args = popN(2);
        const fontName = args[0]?.type === "name" ? args[0].value : null;
        currentFont = fontName;
        continue;
      }

      if (op === "Tj") {
        const args = popN(1);
        const tok = args[0];
        if (tok && (tok.type === "string" || tok.type === "hex")) out += decodeTextToken(tok, fontCtx());
        continue;
      }

      if (op === "TJ") {
        const args = popN(1);
        const arr = args[0];
        if (arr?.type === "array") {
          for (const el of arr.value) {
            if (el.type === "string" || el.type === "hex") out += decodeTextToken(el, fontCtx());
          }
        }
        continue;
      }

      if (op === "'" || op === "\"") {
        const args = popN(op === "\"" ? 3 : 1);
        const tok = args[args.length - 1];
        if (tok && (tok.type === "string" || tok.type === "hex")) out += decodeTextToken(tok, fontCtx());
        newline();
        continue;
      }

      if (op === "T*") {
        newline();
        stack.length = 0;
        continue;
      }

      if (op === "Td" || op === "TD") {
        const args = popN(2);
        const tx = args[0]?.type === "number" ? parseFloat(args[0].value) : 0;
        const ty = args[1]?.type === "number" ? parseFloat(args[1].value) : 0;
        // Only treat as a line break when Y changes meaningfully.
        if (Math.abs(ty) > 1e-3) newline();
        // If it is a big X jump within a line, insert a space separator.
        else if (Math.abs(tx) > 50 && !/\s$/.test(out)) out += " ";
        stack.length = 0;
        continue;
      }

      // Other text operators we ignore.
      stack.length = 0;
      continue;
    }

    if (t.type === "op" && t.value === "[") {
      // Parse array inline until matching ]
      // We rebuild a mini array here by peeking into tokens.
      // Tokenizer emitted '[' and ']' ops; build in a second pass:
      stack.push({ type: "op", value: "[" });
      continue;
    }
    if (t.type === "op" && t.value === "]") {
      // Pop until '['
      const arr = [];
      while (stack.length > 0) {
        const x = stack.pop();
        if (x.type === "op" && x.value === "[") break;
        arr.unshift(x);
      }
      stack.push({ type: "array", value: arr });
      continue;
    }

    stack.push(t);
  }

  return out;
}

function stripLikelyHeadersFooters(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const cleaned = [];
  for (const line of lines) {
    const t = line.trim();
    // Common print footer/header noise
    if (/^Page\s+\d+(\s+of\s+\d+)?$/i.test(t)) continue;
    if (/^https?:\/\/chatgpt\.com\b/i.test(t)) continue;
    const tight = t.replace(/\s+/g, "");
    if (tight.toLowerCase().includes("chat2pdf.org")) continue;
    if (/^Made by\b/i.test(t)) continue;
    if (t === "🎯") continue;
    if (/^ChatGPT$/i.test(t) && cleaned.length === 0) continue;
    cleaned.push(line);
  }
  return cleaned.join("\n");
}

function unwrapSoftLinebreaks(text) {
  // Join lines that are likely a wrapped paragraph (not lists/headings).
  const lines = text.replace(/\r/g, "").split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const cur = lines[i];
    const next = i + 1 < lines.length ? lines[i + 1] : null;
    if (next == null) {
      out.push(cur);
      continue;
    }
    const curTrim = cur.trimEnd();
    const nextTrim = next.trimStart();
    if (curTrim === "" || nextTrim === "") {
      out.push(cur);
      continue;
    }
    if (/^(\s*[-*+]\s+|\s*\d+\.\s+)/.test(curTrim)) {
      out.push(cur);
      continue;
    }
    if (/^#{1,6}\s+/.test(curTrim)) {
      out.push(cur);
      continue;
    }
    if (/^\s{4,}/.test(cur)) {
      out.push(cur);
      continue;
    }
    // Hyphenation
    if (/[A-Za-z]-$/.test(curTrim) && /^[a-z]/.test(nextTrim)) {
      out.push(curTrim.slice(0, -1) + nextTrim);
      i++;
      continue;
    }
    // Likely wrap: join with space.
    out.push(curTrim + " " + nextTrim);
    i++;
  }
  return out.join("\n");
}

function fixCp1252Utf8Mojibake(text) {
  // Some PDF producers effectively embed UTF-8 bytes but they arrive here as mojibake
  // (e.g., "â€”" for "—"). Try a conservative CP1252->bytes->UTF8 decode per line.
  const cp1252Reverse = new Map([
    ["€", 0x80],
    ["‚", 0x82],
    ["ƒ", 0x83],
    ["„", 0x84],
    ["…", 0x85],
    ["†", 0x86],
    ["‡", 0x87],
    ["ˆ", 0x88],
    ["‰", 0x89],
    ["Š", 0x8a],
    ["‹", 0x8b],
    ["Œ", 0x8c],
    ["Ž", 0x8e],
    ["‘", 0x91],
    ["’", 0x92],
    ["“", 0x93],
    ["”", 0x94],
    ["•", 0x95],
    ["–", 0x96],
    ["—", 0x97],
    ["˜", 0x98],
    ["™", 0x99],
    ["š", 0x9a],
    ["›", 0x9b],
    ["œ", 0x9c],
    ["ž", 0x9e],
    ["Ÿ", 0x9f],
  ]);

  function tryFixLine(line) {
    if (!/[ÂÃâð]/.test(line)) return line;
    const bytes = [];
    for (const ch of line) {
      const code = ch.codePointAt(0);
      if (code <= 0xff) {
        bytes.push(code);
        continue;
      }
      const b = cp1252Reverse.get(ch);
      if (b == null) return line; // don't risk corrupting genuine unicode
      bytes.push(b);
    }
    const decoded = Buffer.from(bytes).toString("utf8");
    if (decoded.includes("\uFFFD")) return line;
    const beforeBad = (line.match(/[ÂÃâð]/g) ?? []).length;
    const afterBad = (decoded.match(/[ÂÃâð]/g) ?? []).length;
    return afterBad <= beforeBad ? decoded : line;
  }

  return text
    .replace(/\r/g, "")
    .split("\n")
    .map(tryFixLine)
    .join("\n");
}

function toConversationMarkdown(text, title) {
  const lines = text.replace(/\r/g, "").split("\n");
  const roleLabels = new Set(["You", "User", "ChatGPT", "Assistant"]);
  const chunks = [];
  let curRole = null;
  let curLines = [];

  function flush() {
    if (!curRole && curLines.length === 0) return;
    const role = curRole ?? "Transcript";
    const body = curLines.join("\n").trim();
    if (body.length === 0) {
      curRole = null;
      curLines = [];
      return;
    }
    chunks.push({ role, body });
    curRole = null;
    curLines = [];
  }

  for (const line of lines) {
    const t = line.trim();
    if (roleLabels.has(t)) {
      flush();
      curRole = t === "User" ? "You" : t === "Assistant" ? "ChatGPT" : t;
      continue;
    }
    curLines.push(line);
  }
  flush();

  const md = [];
  md.push(`# ${title}`);
  md.push("");
  if (chunks.length === 1 && chunks[0].role === "Transcript") {
    md.push(chunks[0].body);
    md.push("");
    return md.join("\n");
  }

  for (const c of chunks) {
    md.push(`### ${c.role}`);
    md.push("");
    md.push(c.body);
    md.push("");
  }
  return md.join("\n");
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) usageAndExit();
  const debug = args.includes("--debug");
  const filtered = args.filter((a) => a !== "--debug");
  const inputPdf = filtered[0];
  const outMd = filtered[1] ?? inputPdf.replace(/\.pdf$/i, ".md");
  if (!fs.existsSync(inputPdf)) {
    console.error(`Input not found: ${inputPdf}`);
    process.exit(1);
  }

  const pdfBuf = fs.readFileSync(inputPdf);
  const pdfLatin1 = toLatin1String(pdfBuf);
  const objects = extractObjects(pdfLatin1);

  // Pre-decompress all streams we can, and index them by object ref.
  const streamByRef = new Map(); // "n g" => { dictPart, rawBytes, inflatedLatin1? }
  for (const [ref, meta] of objects.entries()) {
    const streamInfo = findStreamInObject(meta.body);
    if (!streamInfo) continue;
    const raw = objectStreamBytes(pdfBuf, meta, streamInfo);
    let inflated = null;
    if (hasFlateDecode(streamInfo.dictPart)) {
      try {
        inflated = zlib.inflateSync(raw);
      } catch {
        inflated = null;
      }
    }
    streamByRef.set(ref, { dictPart: streamInfo.dictPart, rawBytes: raw, inflated });
  }

  // Build ToUnicode maps by font object ref.
  const toUnicodeByFontRef = new Map(); // "n g" => {mapping, preferredCodeBytes}
  for (const [ref, meta] of objects.entries()) {
    const body = meta.body;
    const m = body.match(/\/ToUnicode\s+(\d+)\s+(\d+)\s+R/);
    if (!m) continue;
    const toUniRef = `${m[1]} ${m[2]}`;
    const s = streamByRef.get(toUniRef);
    if (!s?.inflated) continue;
    const text = toLatin1String(s.inflated);
    if (!text.includes("begincmap")) continue;
    toUnicodeByFontRef.set(ref, parseToUnicodeCMap(text));
  }

  function resolveObjectBody(ref) {
    const m = objects.get(ref);
    return m?.body ?? null;
  }

  function skipWs(s, i) {
    while (i < s.length && /\s/.test(s[i])) i++;
    return i;
  }

  function extractAngleDictAt(s, i) {
    // s[i..] starts with '<<'. Returns {text, endIdxExclusive} or null.
    if (s[i] !== "<" || s[i + 1] !== "<") return null;
    let depth = 0;
    let j = i;
    while (j < s.length - 1) {
      const two = s.slice(j, j + 2);
      if (two === "<<") {
        depth++;
        j += 2;
        continue;
      }
      if (two === ">>") {
        depth--;
        j += 2;
        if (depth === 0) return { text: s.slice(i, j), endIdxExclusive: j };
        continue;
      }
      j++;
    }
    return null;
  }

  function extractValueAfterKey(body, key) {
    const needle = `/${key}`;
    const idx = body.indexOf(needle);
    if (idx === -1) return null;
    let i = idx + needle.length;
    i = skipWs(body, i);
    const dict = extractAngleDictAt(body, i);
    if (dict) return { type: "dict", value: dict.text };
    const refMatch = body.slice(i).match(/^(\d+)\s+(\d+)\s+R\b/);
    if (refMatch) return { type: "ref", value: `${refMatch[1]} ${refMatch[2]}` };
    return null;
  }

  function parseFontMapFromResources(resourcesBody) {
    // Return Map(resourceName => fontRef)
    const fontMap = new Map();
    const fontVal = extractValueAfterKey(resourcesBody, "Font");
    if (!fontVal) return fontMap;

    let fontDictText = null;
    if (fontVal.type === "dict") {
      fontDictText = fontVal.value;
    } else if (fontVal.type === "ref") {
      const fontObjBody = resolveObjectBody(fontVal.value);
      if (fontObjBody) {
        const fontObjDict = extractValueAfterKey(fontObjBody, "Font");
        // Sometimes the font object body is itself a dict (no /Font key), so just use it directly.
        fontDictText = fontObjDict?.type === "dict" ? fontObjDict.value : fontObjBody;
      }
    }

    if (!fontDictText) return fontMap;
    const re = /\/([A-Za-z0-9_.+-]+)\s+(\d+)\s+(\d+)\s+R/g;
    let m;
    while ((m = re.exec(fontDictText))) fontMap.set(m[1], `${m[2]} ${m[3]}`);
    return fontMap;
  }

  function parsePageContentsRefs(pageBody) {
    const refs = [];
    const arrMatch = pageBody.match(/\/Contents\s*\[([\s\S]*?)\]/);
    if (arrMatch) {
      const re = /(\d+)\s+(\d+)\s+R/g;
      let m;
      while ((m = re.exec(arrMatch[1]))) refs.push(`${m[1]} ${m[2]}`);
      return refs;
    }
    const oneMatch = pageBody.match(/\/Contents\s+(\d+)\s+(\d+)\s+R/);
    if (oneMatch) refs.push(`${oneMatch[1]} ${oneMatch[2]}`);
    return refs;
  }

  function resolveResourcesBody(pageRef, maxDepth = 10) {
    let ref = pageRef;
    for (let depth = 0; depth < maxDepth && ref; depth++) {
      const body = resolveObjectBody(ref);
      if (!body) return null;
      const resVal = extractValueAfterKey(body, "Resources");
      if (resVal?.type === "dict") return resVal.value;
      if (resVal?.type === "ref") {
        const rb = resolveObjectBody(resVal.value);
        if (rb) return rb;
      }

      const parentVal = extractValueAfterKey(body, "Parent");
      if (parentVal?.type === "ref") {
        ref = parentVal.value;
        continue;
      }
      break;
    }
    return null;
  }

  // Enumerate pages in order of appearance.
  const pages = [];
  for (const [ref, meta] of objects.entries()) {
    if (/\/Type\s*\/Page\b/.test(meta.body)) pages.push(ref);
  }

  if (debug) {
    console.error(
      JSON.stringify(
        {
          inputPdf,
          objects: objects.size,
          streams: streamByRef.size,
          pages: pages.length,
          toUnicodeMaps: toUnicodeByFontRef.size,
        },
        null,
        2,
      ),
    );
  }

  const allText = [];
  for (const pageRef of pages) {
    const pageBody = resolveObjectBody(pageRef);
    if (!pageBody) continue;
    const resourcesBody = resolveResourcesBody(pageRef);
    const fontResToRef = resourcesBody ? parseFontMapFromResources(resourcesBody) : new Map();
    const fontByName = new Map(); // resourceName => {toUnicode}
    for (const [name, fontRef] of fontResToRef.entries()) {
      fontByName.set(name, { toUnicode: toUnicodeByFontRef.get(fontRef) ?? null });
    }

    if (debug && fontResToRef.size > 0) {
      const withMaps = [...fontResToRef.values()].filter((r) => toUnicodeByFontRef.has(r)).length;
      console.error(`page ${pageRef}: fonts=${fontResToRef.size}, fontsWithToUnicode=${withMaps}`);
    }

    const contentRefs = parsePageContentsRefs(pageBody);
    for (const cref of contentRefs) {
      const s = streamByRef.get(cref);
      if (!s?.inflated) continue;
      const contentLatin1 = toLatin1String(s.inflated);
      allText.push(extractTextFromContentStream(contentLatin1, fontByName));
    }
    allText.push("\n");
  }

  let text = allText.join("\n");
  text = stripLikelyHeadersFooters(text);
  text = text.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n");
  text = unwrapSoftLinebreaks(text);
  text = fixCp1252Utf8Mojibake(text);
  text = text.replace(/\n{3,}/g, "\n\n").trim() + "\n";

  const title = path.basename(inputPdf, path.extname(inputPdf));
  const md = toConversationMarkdown(text, title);
  fs.writeFileSync(outMd, md, "utf8");
  console.log(`Wrote: ${outMd}`);
}

main();
