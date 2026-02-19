# Borrow Strategy Mechanics & Trading Tax Reduction Options

## Overview

This document explains:
1. How the "borrow" strategy defers taxation (and what it doesn't defer)
2. Legitimate options for reducing tax burden on short-term trading income
3. Why corporate structures and "expense" strategies don't eliminate trading taxes

---

## Part 1: How Borrowing Defers Taxation

### The Core Principle

**Borrowing is not a taxable event.** When you borrow against assets, you receive cash without triggering capital gains.

### What Gets Taxed vs. What Doesn't

| Event | Tax Consequence |
|-------|-----------------|
| Earn trading gains | **TAXED** (ordinary income) |
| Buy Treasuries with after-tax $ | No tax |
| Treasuries pay interest | **TAXED** (annually) |
| Treasury price appreciates | NOT TAXD (unrealized) |
| Borrow against Treasuries | **NOT TAXED** (loan) |
| Use loan for living expenses | NOT TAXED |
| Die with unrealized gains | Eliminated (step-up basis) |

### The Deferral Mechanism Explained

The borrow strategy defers tax on **future appreciation**, not on initial trading gains.

#### Without Borrow Strategy

```
Year 1:  Earn $500K trading → Pay $130K tax → Have $370K
Year 10: Treasuries grew to $602K
         Need $200K for expenses → SELL Treasuries
         Capital gain on sale: $200K → Tax: ~$50K
         You receive: $150K after tax
```

**Result**: Paid tax TWICE (initial gains + capital gains on sale)

#### With Borrow Strategy

```
Year 1:  Earn $500K trading → Pay $130K tax → Have $370K
Year 10: Treasuries grew to $602K
         Need $200K for expenses → BORROW against Treasuries
         No sale → No tax event → Receive full $200K
         Interest cost: ~$11K/year (5.5% rate)
         Treasuries still earning: ~$33K/year (5.5% yield)
```

**Result**: Paid tax ONCE (initial gains only)

### The Mathematics of Deferral

**Assumptions**:
- Initial after-tax capital: $370,000
- Treasury yield: 5%
- Borrowing rate: 5.5%
- Annual borrowing for expenses: $50,000

| Year | Portfolio Value | Cumulative Borrowed | Net Position | Interest Paid | Interest Earned |
|------|-----------------|---------------------|--------------|---------------|-----------------|
| 1 | $388,500 | $50,000 | +$338,500 | $2,750 | $19,425 |
| 5 | $471,000 | $250,000 | +$221,000 | $13,750 | $23,550 |
| 10 | $603,000 | $500,000 | +$103,000 | $27,500 | $30,150 |
| 15 | $771,000 | $750,000 | +$21,000 | $41,250 | $38,550 |
| 20 | $986,000 | $1,000,000 | -$14,000 | $55,000 | $49,300 |

**Key Insight**: As long as portfolio yield approaches borrowing cost, the portfolio grows while you access tax-free liquidity.

### What Borrowing Does NOT Do

| Myth | Reality |
|------|---------|
| Defers tax on trading gains | NO - trading gains taxed when earned |
| Makes gains tax-free | NO - only defers tax on appreciation |
| Works for depreciating assets | NO - asset must appreciate |
| Eliminates all taxes | NO - Treasury interest still taxed annually |

### The Ultimate Benefit: Step-Up at Death

```
Portfolio at death: $1,000,000
Original basis: $370,000
Unrealized gain: $630,000
Tax on unrealized gain: $0 (eliminated by step-up)
Heirs' new basis: $1,000,000
```

**This is where the real tax savings occur** - the unrealized gains are never taxed.

---

## Part 2: Can Trading Profits Be Corporate Income with Expense Offsets?

### The Hypothetical Strategy

The idea:
1. Trading through a corporation (C-Corp)
2. Corporate tax rate: 21% (lower than personal 37%)
3. Offset trading profits with "expenses" (Treasuries?)
4. Lower taxable income

### Why This Doesn't Work

#### Problem 1: Personal Holding Company (PHC) Tax

A C-Corp becomes a Personal Holding Company if:

| Test | Threshold |
|------|-----------|
| **Ownership Test** | 5 or fewer individuals own >50% of stock |
| **Income Test** | 60%+ of income is "passive" |

**Passive income includes**:
- Dividends, interest, royalties
- Rents, annuities
- **Gains from securities trading** (in most cases)

**PHC Penalty**: Additional 20% tax on undistributed income.

**Reference**: IRC Sections 541-547

#### Problem 2: Treasuries Are Assets, Not Expenses

| Treasury Activity | Tax Classification |
|-------------------|-------------------|
| Buy Treasuries | Asset purchase (NOT deductible) |
| Treasury interest | INCOME (taxable) |
| Treasury appreciation | Capital gain when sold (taxable) |
| Borrow against Treasuries | Loan (not income, not expense) |

**You cannot deduct an asset purchase.** Only the interest on money borrowed to buy the asset may be deductible (subject to limitations).

#### Problem 3: Double Taxation Problem

```
Trading Profit:     $500,000
Corporate Tax:      ($105,000)  ← 21% tax
                    $395,000 remaining

Extracting the money:
Option A - Dividends:  $395,000 × 20% = $79,000 tax
                      You receive: $316,000

Option B - Salary:    $395,000 × 37% + 15.3% SE tax
                      You receive: ~$220,000

Option C - Leave in:  PHC tax may apply
                      Accumulated earnings tax may apply
```

**Result**: Corporate structure often results in MORE total tax, not less.

#### Problem 4: Trading Gains Are Often Still Passive

Even if structured as a corporation, the IRS may classify trading gains as:
- Portfolio income (passive)
- Subject to PHC rules
- Not "active business income"

---

## Part 3: Legitimate Options for Reducing Trading Taxes

### Option 1: Trader Tax Status (TTS)

#### What Is TTS?

The IRS recognizes a distinction between "investors" and "traders." Traders can deduct business expenses.

#### TTS Requirements (Not Codified, But IRS Applies These Tests)

| Factor | Requirement |
|--------|-------------|
| Trading frequency | High volume, regular pattern |
| Holding period | Very short (minutes to days) |
| Time commitment | Substantial (several hours/day) |
| Primary income source | Trading generates livelihood |
| Intent | Profit from short-term swings, not long-term appreciation |

#### TTS Benefits

| Benefit | Description |
|---------|-------------|
| Business expense deductions | Home office, equipment, data feeds, software |
| Section 475 election available | Mark-to-market accounting |
| QBI deduction | Potential 20% deduction on qualified income |
| No wash sale rules | If Section 475 elected |

#### TTS Limitations

- **Does NOT change tax rate on gains** - still ordinary income for short-term
- **Does NOT make Treasuries deductible** - asset purchases are never expenses
- **Requires genuine trading business** - not occasional trading

**Reference**: IRS Publication 550, Green Trader Tax TTS Guide

---

### Option 2: Section 475 Mark-to-Market Election

#### What Is Section 475?

An election to treat securities as sold at year-end fair market value, with all gains/losses treated as ordinary income/loss.

#### Key Benefits

| Benefit | Without 475 | With 475 |
|---------|-------------|----------|
| Loss treatment | $3,000 capital loss limit | Unlimited ordinary loss |
| Wash sale rules | Apply | Do NOT apply |
| QBI deduction | May not apply | May apply (20%) |
| Loss carryback | Not available | 3-year carryback available |

#### Example: Losing Year

| Scenario | Without 475 | With 475 |
|----------|-------------|----------|
| Trading loss | ($100,000) | ($100,000) |
| Deduction allowed | $3,000 | $100,000 |
| Carryforward | $97,000 | $0 (or 3-yr carryback) |
| Tax benefit year 1 | ~$700 | ~$37,000 |

#### Example: Profitable Year

| Item | Amount |
|------|--------|
| Trading profit | $500,000 |
| Ordinary income | $500,000 |
| QBI deduction (20%) | ($100,000) |
| Taxable income | $400,000 |
| Tax (single) | ~$95,000 |
| Effective rate | ~19% |

#### Important Caveats

1. **Election deadline**: April 15 of the tax year (or extended due date for new entities)
2. **Cannot be revoked** without IRS consent
3. **Applies to ALL securities** in the account (no cherry-picking)
4. **Gains still taxed** - this is about loss treatment and QBI, not eliminating gains

**Reference**: IRC Section 475(f), IRS Form 3115

---

### Option 3: Section 1256 Contracts (Futures)

#### What Are Section 1256 Contracts?

| Contract Type | Examples |
|---------------|----------|
| Regulated futures | S&P 500 futures, Treasury futures |
| Non-equity options | Commodity options, broad-based index options |
| Dealer equity options | Options held by dealers |
| Foreign currency contracts | Certain forex contracts |

#### The 60/40 Tax Advantage

| Component | Tax Treatment |
|-----------|---------------|
| 60% of gain | Long-term capital gain (max 20%) |
| 40% of gain | Short-term capital gain (ordinary rate) |
| Automatic mark-to-market | Year-end positions marked to market |

#### Effective Tax Rate Comparison

| Scenario | Ordinary Income (Stocks) | 60/40 Treatment (Futures) |
|----------|--------------------------|---------------------------|
| $500,000 gain at 37% bracket | $185,000 tax (37%) | $119,000 tax (23.8%) |
| $500,000 gain at 24% bracket | $120,000 tax (24%) | $97,000 tax (19.4%) |

**Savings**: 10-15% lower effective rate on futures vs. stocks

#### Example Calculation

```
Futures trading profit:     $500,000

60% Long-term capital gain: $300,000
  Tax at 20%:               $60,000

40% Short-term gain:        $200,000
  Tax at 37%:               $74,000

Total tax:                  $134,000
Effective rate:             26.8%

Compare to stocks (all ordinary):
  Tax at 37%:               $185,000
  Effective rate:           37.0%

Savings:                    $51,000 (10.2%)
```

#### Limitations

| Limitation | Detail |
|------------|--------|
| Only regulated futures | Not all crypto, not OTC derivatives |
| Year-end MTM | Cannot defer gains beyond year-end |
| Still taxed | Lower rate, but not eliminated |

**Reference**: IRC Section 1256, Form 6781

---

### Option 4: Business Expense Deductions (With TTS)

If you qualify for Trader Tax Status, you can deduct:

| Expense Category | Examples | Deductible? |
|------------------|----------|-------------|
| Home office | Dedicated trading space | Yes (if qualifying) |
| Equipment | Computers, monitors, desks | Yes |
| Software | Trading platforms, analysis tools | Yes |
| Data feeds | Market data, news services | Yes |
| Internet/phone | Portion used for trading | Yes (pro-rata) |
| Education | Trading courses, books | Yes |
| Professional fees | CPA, attorney for trading business | Yes |
| **Treasuries** | Buying Treasury securities | **NO - asset purchase** |
| **Margin interest** | Interest on borrowed funds | **LIMITED** - only to extent of investment income |

#### Margin Interest Deduction

| Rule | Detail |
|------|--------|
| Investment interest expense | Deductible up to net investment income |
| Investment income | Interest, dividends, capital gains |
| Excess | Carries forward |
| Trading gains count | Yes, for this purpose |

**Example**:
```
Trading gains:     $500,000
Margin interest:   $20,000
Investment income: $500,000

Deduction allowed: $20,000 (limited to investment income)
```

**Reference**: IRC Section 163(d), IRS Publication 550

---

### Option 5: Retirement Plan Contributions

If trading is a business (TTS), you may be able to contribute to:

| Plan Type | 2026 Contribution Limit |
|-----------|------------------------|
| Solo 401(k) | $69,000 (under 50) / $76,500 (50+) |
| SEP-IRA | Lesser of $69,000 or 25% of compensation |
| Defined Benefit Plan | $280,000+ (age-dependent) |

**Example**:
```
Trading profit:    $500,000
Solo 401(k) contribution: $69,000
Taxable income:    $431,000
Tax savings:       ~$16,000 - $26,000
```

**Limitation**: Only defers tax, doesn't eliminate it.

---

## Part 4: What Does NOT Work

### ❌ Corporate Structure with Treasury "Expenses"

| Why It Fails | Detail |
|--------------|--------|
| PHC tax | Trading income often classified as passive |
| Double taxation | Corporate + personal tax |
| Asset not expense | Treasuries are assets, not deductible expenses |
| Interest is income | Treasury interest adds to taxable income |

### ❌ Offshore Fund (Cayman/BVI)

| Why It Fails | Detail |
|--------------|--------|
| GILTI/NCTI | Taxes CFC income currently |
| PFIC rules | Punitive taxation if not CFC |
| Attribution | Your ownership = your tax |
| No deferral | Anti-deferral rules apply |

### ❌ Foreign Trust

| Why It Fails | Detail |
|--------------|--------|
| Grantor trust rules | You're taxed on trust income |
| Form 3520 required | Severe penalties for non-filing |
| Section 679 | Foreign trust with US beneficiary |

### ❌ Nominee Ownership

| Why It Fails | Detail |
|--------------|--------|
| Illegal | Tax evasion, criminal exposure |
| Constructive ownership | IRS attributes ownership anyway |
| FATCA/CRS | Automatic information exchange |

---

## Part 5: Summary Comparison

### Tax Reduction Options Ranked

| Rank | Option | Tax Benefit | Complexity | Notes |
|------|--------|-------------|------------|-------|
| 1 | **Section 1256 (futures)** | 10-15% rate reduction | Low | Must trade futures |
| 2 | **Section 475 + TTS** | QBI deduction, unlimited losses | Medium | Requires genuine trading business |
| 3 | **TTS expenses** | Deduct operating costs | Medium | Must qualify as trader |
| 4 | **Retirement plans** | Defer ~$69K/year | Medium | Only defers, not eliminates |
| 5 | **Borrow strategy** | Defer future appreciation | High | Best combined with above |

### What's NOT Possible

| Goal | Feasibility |
|------|-------------|
| Make trading gains tax-free | ❌ Impossible (without expatriation) |
| Deduct Treasury purchases | ❌ Asset purchases not deductible |
| Use corporate structure to avoid PHC | ❌ PHC tax applies to trading |
| Hide gains offshore | ❌ GILTI/NCTI taxes currently |

---

## The Honest Truth

For a US citizen/resident earning short-term trading gains:

1. **You will pay tax** in the year gains are realized
2. **Legitimate options exist** to reduce the rate:
   - Trade futures (Section 1256): 26.8% vs 37%
   - Elect Section 475: Get QBI deduction (20%)
   - Deduct business expenses: Lower taxable income
3. **The borrow strategy** helps with future appreciation, not initial gains
4. **No legal structure** eliminates tax on trading gains

### Best Combined Strategy

1. Trade **futures** where possible (Section 1256)
2. Establish **Trader Tax Status**
3. Elect **Section 475** (by April 15 deadline)
4. Deduct all **legitimate business expenses**
5. Maximize **retirement contributions**
6. Invest after-tax profits in **appreciating assets**
7. Use **SBLOC** for living expenses (defer future taxation)
8. **Step-up at death** eliminates remaining gains

---

## References

### Tax Code
- IRC Section 475: Mark-to-Market Accounting
- IRC Section 1256: Regulated Futures Contracts
- IRC Section 199A: Qualified Business Income Deduction
- IRC Section 541-547: Personal Holding Company Tax
- IRC Section 163(d): Investment Interest Expense
- IRC Section 1402: Self-Employment Income

### IRS Publications
- Publication 550: Investment Income and Expenses
- Publication 334: Tax Guide for Small Business
- Publication 535: Business Expenses

### Forms
- Form 3115: Application for Change in Accounting Method
- Form 6781: Gains and Losses from Section 1256 Contracts
- Form 8949: Sales and Other Dispositions of Capital Assets
- Schedule C: Profit or Loss from Business

### External Sources
- Green Trader Tax: Trader Tax Status Guide
- Charles Schwab: Mark-to-Market Trader Taxes
- Tax Foundation: 2026 Tax Brackets

---

## Next Steps

1. **Determine if you qualify for TTS** (consult tax professional)
2. **Evaluate Section 475 election** (deadline: April 15)
3. **Consider shifting to futures** for 60/40 treatment
4. **Track all expenses** meticulously
5. **Consult with CPA** who specializes in trader taxation

---

## Updates Log

| Date | Update |
|------|--------|
| 2026-02-19 | Initial document created |
