# Tax Strategy Analysis for Trading Income

## Overview

This document analyzes three tax scenarios for trading income generated through Doberman, comparing their implications for a Washington state resident. The analysis covers federal tax treatment, Washington state rules, and strategic considerations for each approach.

**Important Disclaimer**: This document is for informational purposes only and does not constitute legal, tax, or financial advice. Consult with qualified tax professionals, CPAs, and attorneys before implementing any strategy.

## Scenario A: Short-Term Capital Gains

### Tax Treatment

When trading profits are treated as short-term capital gains (assets held less than one year):

| Income Level | Federal Tax Rate | Notes |
|--------------|------------------|-------|
| $0 - $11,925 | 10% | Single filer 2026 |
| $11,926 - $48,475 | 12% | |
| $48,476 - $103,350 | 22% | |
| $103,351 - $197,300 | 24% | |
| $197,301 - $250,525 | 32% | |
| $250,526 - $626,350 | 35% | |
| $626,351+ | 37% | Top marginal rate |

**References**:
- Tax Foundation 2026 Tax Brackets
- IRS Publication 550 (Investment Income and Expenses)

### Key Characteristics

1. **Ordinary Income Treatment**: Short-term gains are taxed as ordinary income at your marginal rate
2. **No Preferential Rates**: Unlike long-term gains (0%, 15%, 20%), short-term gains get no special treatment
3. **Washington State**: No state income tax - 0% at state level
4. **Net Investment Income Tax**: Additional 3.8% NIIT applies if modified AGI exceeds $200,000 (single)

### Example Calculations

| Annual Income | Federal Tax | Effective Rate | After-Tax Income |
|--------------|-------------|----------------|------------------|
| $250,000 | ~$52,000 | ~21% | ~$198,000 |
| $500,000 | ~$130,000 | ~26% | ~$370,000 |
| $750,000 | ~$222,000 | ~30% | ~$528,000 |
| $1,000,000 | ~$318,000 | ~32% | ~$682,000 |

### Pros and Cons

**Pros**:
- Simple and straightforward
- No entity structuring required
- Clear tax treatment
- No additional compliance burden

**Cons**:
- Highest effective tax rates
- No deferral opportunities
- Tax due immediately upon realization
- NIIT adds 3.8% for high earners

### Washington State Specifics

- **No State Income Tax**: Washington has no personal income tax
- **No Capital Gains Tax**: Short-term trading gains are not subject to WA capital gains tax
- **Estate Tax**: Washington has estate tax with $2.5M exemption (2026)

---

## Scenario B: LLC with Business Income (Self-Employed)

### Tax Treatment

When trading is conducted through an LLC and profits are treated as business income:

#### Single-Member LLC (Default Treatment)
- **Pass-Through Taxation**: LLC income flows to personal return (Schedule C)
- **Self-Employment Tax**: 15.3% on net earnings (12.4% SS + 2.9% Medicare)
- **Additional Medicare Tax**: 0.9% on earnings over $200,000
- **Social Security Wage Base**: $184,500 (2026) - only 12.4% applies up to this limit

#### Federal Tax Structure

| Income Component | Tax Rate | Notes |
|-----------------|----------|-------|
| Self-Employment Tax | 15.3% | On net self-employment income |
| Federal Income Tax | 10-37% | Based on taxable income brackets |
| QBI Deduction | Up to 20% | Qualified Business Income deduction |

**Reference**: IRS Schedule SE, Section 199A QBI Deduction

### Self-Employment Tax Calculation

For net self-employment income of $X:
1. Calculate net earnings: X × 0.9235 (92.35% of net income)
2. Apply SE tax: 15.3% on first $184,500, then 2.9% + 0.9% above $200,000
3. Deduct half of SE tax from gross income

### Example: $500,000 Net Trading Income

| Item | Amount |
|------|--------|
| Gross Trading Income | $500,000 |
| Less Operating Expenses | ($12,000) |
| Net Income | $488,000 |
| SE Tax (calc) | ~$20,800* |
| Half SE Tax Deduction | ($10,400) |
| QBI Deduction (20%) | ($97,600) |
| Taxable Income | ~$380,000 |
| Federal Income Tax | ~$90,000 |
| **Total Tax Burden** | ~$110,800 |
| **Effective Rate** | ~22.7% |

*SE tax capped at Social Security wage base plus Medicare

### Potential Entity Elections

#### S-Corp Election
- **Benefit**: Avoid SE tax on distributions (only salary subject to SE tax)
- **Requirement**: Must pay "reasonable salary" subject to payroll taxes
- **Risk**: IRS scrutiny on salary reasonableness
- **Limitation**: Trading businesses may not qualify for QBI deduction under "specified service trade or business" rules

#### C-Corp Election
- **Benefit**: 21% flat corporate tax rate
- **Drawback**: Double taxation (corporate + dividend)
- **Rarely advantageous** for trading businesses

### Washington State Business & Occupation (B&O) Tax

**Critical for Washington Traders**: Washington subjects traders to B&O tax on gross receipts.

| Gross Receipts | B&O Rate (2026) | Notes |
|----------------|-----------------|-------|
| Up to $1,000,000 | 1.5% | Service & Other Activities |
| $1,000,001 - $5,000,000 | 1.75% | |
| Over $5,000,000 | 2.1% | |

**Small Business Credit**: B&O tax fully offset by credit if annual B&O due is under $1,920 (approx. $128,000 gross receipts at 1.5% rate)

**Key Consideration**: Per RCW 82.04.080, gross income includes gains with NO deduction for losses. High-volume traders may exceed credit threshold even in net-loss years.

**Reference**: Washington Department of Revenue, Green Trader Tax analysis

### Pros and Cons

**Pros**:
- Liability protection (LLC)
- Potential QBI deduction (up to 20%)
- Deductible business expenses
- Professional structure for banking/credit

**Cons**:
- Self-employment tax (15.3%)
- More complex filing requirements
- Washington B&O tax on gross receipts
- Potential "specified service" limitation on QBI

---

## Scenario C: Buy, Borrow, Die Strategy (Preferred)

### Strategy Overview

The "Buy, Borrow, Die" strategy involves:
1. **Buy**: Generate trading profits inside LLC, invest in appreciating assets (Treasuries)
2. **Borrow**: Take securities-based line of credit (SBLOC) against pledged assets
3. **Die**: Heirs receive step-up in basis, eliminating unrealized gains

### Core Mechanism

```
Trading Profits → LLC → Treasuries → Pledge to Bank → Line of Credit → Living Expenses
     ↓
No Taxable Event
```

### Tax Treatment by Component

#### 1. Trading Profits Inside LLC

| Step | Tax Implication |
|------|-----------------|
| Generate trading profit | Taxable as ordinary income (or short-term gain) |
| Retain inside LLC | No additional tax until distributed |
| Invest in Treasuries | Interest income taxable |

**Key Insight**: Profits must first be realized and taxed before being deployed. The strategy minimizes FUTURE taxation, not the initial tax on trading gains.

#### 2. Treasury Investments

- **Interest Income**: Taxable as ordinary income at federal level
- **State Tax Exemption**: Treasury interest is exempt from state income tax
- **Washington State**: No state income tax applies
- **Capital Gains**: If Treasuries sold at gain, short-term gain rules apply

**Reference**: IRS Publication 550, 26 USC § 103 (State tax exemption)

#### 3. Securities-Based Line of Credit (SBLOC)

**Critical Tax Advantage**: Borrowing is NOT a taxable event.

| Action | Tax Status |
|--------|------------|
| Receive loan proceeds | Not taxable |
| Pledge assets as collateral | Not taxable |
| Interest payments | May be deductible (see below) |
| Repayment of principal | Not deductible |

**Reference**: IRS Code Section 1001, Tufts v. Commissioner

#### 4. Interest Deductibility

Interest deductibility depends on use of loan proceeds:

| Use of Loan Proceeds | Deductibility |
|---------------------|---------------|
| Personal expenses (living costs) | NOT deductible |
| Investment purposes | Investment interest deduction (limited to net investment income) |
| Business purposes | Business interest deduction |

**For Living Expenses**: Interest on SBLOC used for personal living expenses is generally NOT deductible under current tax law (TCJA eliminated miscellaneous itemized deductions).

**Reference**: IRS Publication 936, TCJA Section 11021

### Detailed Strategy Flow

#### Phase 1: Accumulation (Years 1-5)

1. **Generate trading income** → Taxed as ordinary income/short-term gain
2. **Pay taxes** → Federal income tax, possibly SE tax
3. **Retain after-tax profits in LLC** → Invest in Treasuries
4. **Treasury interest** → Taxable annually (federal only, exempt from state)
5. **Compound growth** → Reinvest after-tax interest

#### Phase 2: Borrowing (Ongoing)

1. **Accumulate sufficient Treasury portfolio** (e.g., $2-5M)
2. **Establish SBLOC** with bank (typically 50-70% loan-to-value on Treasuries)
3. **Borrow for living expenses** → No taxable event
4. **Pay interest only** → Interest not deductible for personal use
5. **Allow portfolio to grow** → Ideally faster than borrowing costs

#### Phase 3: Death and Step-Up

1. **Assets pass to heirs** with stepped-up basis
2. **Unrealized gains eliminated** → Capital gains wiped out
3. **Estate tax consideration** → Washington has $2.5M exemption (2026)
4. **Heirs can liquidate** without capital gains tax

**Reference**: IRC Section 1014 (Step-up in basis)

### Mathematical Example

**Assumptions**:
- Annual trading profit after operating costs: $500,000
- Federal tax rate: ~25% effective
- After-tax capital: $375,000/year
- Treasury yield: 4.5%
- SBLOC rate: 5.5% (typically SOFR + spread)
- Loan-to-value: 65%

**Year 5 Projection**:

| Metric | Amount |
|--------|--------|
| After-tax capital accumulated | $1,875,000 |
| Treasury portfolio value (4.5% yield, reinvested) | ~$2,100,000 |
| Maximum SBLOC (65% LTV) | ~$1,365,000 |
| Available for living expenses | Significant liquidity |

**Annual Cash Flow (Year 5+)**:
- Treasury interest: ~$94,500/year (taxable)
- SBLOC interest: Variable based on draw
- Living expenses funded by: SBLOC draw (not taxable)

### Critical Considerations

#### Interest Rate Risk
- **Risk**: Treasury yields may fall below borrowing rates
- **Spread**: If Treasuries earn 4% but SBLOC costs 6%, you're losing 2%/year
- **Mitigation**: Maintain adequate spread, consider yield curve positioning

#### Market Risk
- **Treasury Price Volatility**: Rising rates cause Treasury prices to fall
- **LTV Maintenance**: May need to post additional collateral or reduce loan
- **Margin Call Risk**: Banks can require immediate repayment

#### Estate Tax (Washington)
- **Exemption**: $2.5M (2026)
- **Rate**: 10-20% on amounts over exemption
- **Planning**: May require trust structures for larger estates

#### Step-Up Basis Risk
- **Political Risk**: Congress has discussed eliminating or limiting step-up basis
- **Biden Proposals**: Various proposals to limit step-up basis for gains over $1M
- **Monitor**: This is an area of active policy debate

### Pros and Cons

**Pros**:
- Defers taxation on asset appreciation
- Access to liquidity without realizing gains
- Treasury interest exempt from state tax
- Step-up eliminates capital gains at death
- Professional asset management structure

**Cons**:
- Initial trading gains still taxed
- Interest expense not deductible for personal use
- Interest rate spread risk
- Market volatility affects collateral
- Estate tax exposure above $2.5M
- Political risk to step-up basis
- Complexity and professional fees

---

## Comparative Summary

| Factor | Scenario A | Scenario B | Scenario C |
|--------|-----------|-----------|-----------|
| Initial Tax Rate | Highest | Moderate | Same as A (initial) |
| Ongoing Tax | Annual | Annual | Treasury interest only |
| Deferral | None | None | Yes (on borrowed amounts) |
| Interest Deduction | N/A | Possible (business) | Not for personal use |
| Complexity | Low | Medium | High |
| Estate Planning | None | None | Step-up in basis |
| Washington Tax | None (income) | B&O on gross | None (income) |
| Political Risk | Low | Low | Medium (step-up) |
| Professional Fees | None | Low | High |

---

## Recommendations

### For Starting Phase
- **Begin with Scenario A or B**: Simpler while establishing trading track record
- **Track all expenses**: Critical for any scenario
- **Build reserves**: Maintain 6-12 months expenses before leverage strategies

### For Scale Phase ($500K+ annual)
- **Consider Scenario B with S-Corp election**: May reduce SE tax
- **Evaluate Scenario C foundation**: Begin Treasury accumulation
- **Engage professionals**: CPA, attorney, wealth advisor

### For Wealth Phase ($2M+ assets)
- **Implement Scenario C**: SBLOC with Treasury collateral
- **Estate planning**: Trust structures for Washington estate tax
- **Ongoing monitoring**: Interest rate spreads, policy changes

---

## Scenario D: Offshore Fund Structure (Cayman Islands / BVI)

### The Core Question

**Can a US person avoid initial taxation on trading gains by using an offshore fund structure (Cayman Islands or BVI domiciled)?**

**Short Answer: No.** For US citizens and residents, there is no practical way to defer taxation on trading income through an offshore structure. The US anti-deferral regimes are specifically designed to prevent this.

### Why It Doesn't Work

#### 1. US Citizens Taxed on Worldwide Income

US citizens and resident aliens are taxed on **worldwide income** regardless of:
- Where the income is earned
- Where the entity is located
- Whether the income is repatriated to the US

**Reference**: IRC Section 1, IRS Publication 54

#### 2. Controlled Foreign Corporation (CFC) Rules

If you own more than 50% (by vote or value) of a foreign corporation, it's a CFC.

| Ownership Test | Result |
|----------------|--------|
| > 50% by US shareholders | CFC status |
| US shareholder | Owns 10%+ and must report |
| Reporting | Form 5471 required annually |

**Key Anti-Deferral Mechanisms**:

| Regime | What It Taxes | Effective Rate |
|--------|---------------|----------------|
| Subpart F | Passive income, certain related-party income | Current taxation at ordinary rates |
| GILTI/NCTI (2026+) | Net CFC tested income | ~12.6% + state |
| PFIC | Passive foreign investment company income | Punitive rates with interest charges |

**Reference**: IRC Sections 951-965, Form 5471 Instructions

#### 3. Subpart F Income - Foreign Personal Holding Company Income (FPHCI)

For a trading entity, the critical question is whether trading gains are "passive" income.

**Foreign Personal Holding Company Income Includes**:
- Dividends, interest, rents, royalties
- Annuities
- Gains from property producing the above
- **Gains from commodities transactions** (unless hedging)
- Foreign currency gains

**Critical Analysis for Trading**:

| Trading Activity | Likely Classification |
|-----------------|----------------------|
| Securities trading (investor) | FPHCI - Passive income |
| Securities dealing (dealer) | Potentially active business income |
| Commodity trading | Generally FPHCI |
| Forex trading | FPHCI (foreign currency gains) |

**The Problem**: Even if trading income is classified as "active" (dealer status), it doesn't escape taxation:

1. **Subpart F**: May not apply if active business
2. **GILTI/NCTI**: Still applies to ALL CFC income (no QBAI deduction for 2026+)
3. **No Deferral**: GILTI/NCTI taxes CFC income currently

**Reference**: IRC Section 954, IRS Practice Unit on Subpart F

#### 4. GILTI/NCTI (2026+) - The "No Escape" Rule

Starting in 2026, GILTI was renamed Net CFC Tested Income (NCTI) with these changes:

| Feature | GILTI (Pre-2026) | NCTI (2026+) |
|---------|------------------|--------------|
| QBAI Deduction | 10% of tangible assets | **Eliminated** |
| Section 250 Deduction | 50% | 40% |
| Foreign Tax Credit | 80% | 90% |
| Effective US Tax Rate | ~10.5% | ~12.6% |

**Critical Implication**: Without the QBAI deduction, ALL net income of a CFC is subject to current US taxation at ~12.6% effective rate (after 40% deduction), regardless of whether it's "active" or "passive."

**Reference**: One Big Beautiful Bill Act (OBBBA), IRC Section 951A

#### 5. PFIC Rules - If Not a CFC

If the offshore entity is not a CFC (e.g., you own less than 50%), it may still be a PFIC:

**PFIC Tests (either one triggers)**:
- **Income Test**: 75%+ of gross income is passive
- **Asset Test**: 50%+ of assets produce passive income

**PFIC Tax Consequences**:

| Treatment | Tax Result |
|-----------|------------|
| Default (Section 1291) | Punitive taxation with interest charges on distributions/gains |
| QEF Election | Current taxation on share of income (like a partnership) |
| Mark-to-Market | Annual tax on unrealized gains (if marketable) |

**The Problem**: A trading fund would almost certainly be a PFIC (trading gains = passive income). Even with a QEF election, you're taxed currently on all income - no deferral.

**Reference**: IRC Sections 1291-1298, Form 8621 Instructions

### Structure Analysis

#### Hypothetical Offshore Fund Structure

```
                    ┌─────────────────────┐
                    │   US Person (You)   │
                    │   100% Owner        │
                    └─────────┬───────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │  Cayman Islands LP  │
                    │  (Trading Entity)   │
                    │                     │
                    │  - Generates gains  │
                    │  - No local tax     │
                    │  - CRS reporting    │
                    └─────────┬───────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │   US Bank SBLOC     │
                    │   (Collateral Issue)│
                    └─────────────────────┘
```

#### Tax Consequences Flow

| Step | What Happens | US Tax Consequence |
|------|--------------|-------------------|
| 1 | Fund generates trading gains | **CFC: GILTI/NCTI inclusion** |
| | | **or PFIC: QEF inclusion** |
| 2 | Fund earns Treasury interest | **CFC: GILTI/NCTI inclusion** |
| | | **Treasury interest = passive income** |
| 3 | Fund pledges assets to bank | No tax event (borrowing) |
| 4 | Bank provides SBLOC | No tax event (loan proceeds) |
| 5 | You borrow for living expenses | No tax event |
| 6 | Interest paid to bank | Not deductible (personal use) |

**Bottom Line**: Step 1 and 2 result in current US taxation. There is no deferral.

### Offshore Fund Collateral for US Bank SBLOC

**Can a US bank accept offshore fund assets as collateral for an SBLOC?**

| Issue | Consideration |
|-------|---------------|
| **Legal Structure** | Offshore entity would need to pledge assets directly |
| **Guarantee Issues** | Personal guarantee by US person may be required |
| **Deemed Distribution Risk** | Possible if US person guarantees or has other connections |
| **Bank Compliance** | KYC/AML requirements, FATCA compliance |
| **Practical Reality** | Most US banks won't accept offshore entity collateral easily |

**Reference**: FATCA (IRC Chapter 4), Bank Secrecy Act

### Why Hedge Funds Use Offshore Structures

If offshore structures don't provide deferral for US persons, why do hedge funds use them?

| Purpose | Beneficiary |
|---------|-------------|
| Tax-exempt US investors (pension funds, endowments) | Avoid UBTI |
| Non-US investors | No US tax filing, no FATCA withholding |
| US taxable investors | **No benefit** - still taxed currently via PFIC or CFC rules |

**Key Insight**: Offshore hedge fund structures benefit **non-US investors** and **tax-exempt US investors**, NOT US taxable investors.

### Scenario D Summary: What Would You Be Taxed On?

| Income Type | When Taxed | Rate |
|-------------|------------|------|
| Trading gains (CFC) | Year earned | GILTI/NCTI: ~12.6% + ordinary rates on inclusion |
| Trading gains (PFIC) | Year earned (QEF) | Ordinary income rates |
| Treasury interest (CFC) | Year earned | GILTI/NCTI: ~12.6% effective |
| Treasury interest (PFIC) | Year earned (QEF) | Ordinary income rates |
| SBLOC proceeds | Never | Not taxable |
| SBLOC interest | Not deductible | Personal use |

**Critical Point**: You are taxed on the trading gains AND Treasury interest in the year earned. The SBLOC provides tax-free access to liquidity, but only after the underlying income has been taxed.

### The "Double Tax" Problem

If structured incorrectly, you could face:

1. **CFC/PFIC inclusion** on trading gains (Year 1)
2. **Deemed distribution** when assets pledged or loan proceeds benefit you (Year 1 or later)
3. **Penalties** for failure to file Form 5471/8621 (up to $10,000+ per form per year)

### Scenario D: Pros and Cons

**Pros**:
- Asset protection (potentially)
- Professional fund structure
- Access to non-US investors (if fund has multiple investors)
- No Cayman/BVI local tax

**Cons**:
- **No US tax deferral** on trading income
- GILTI/NCTI taxes CFC income currently (~12.6% effective)
- PFIC rules apply if not CFC (punitive taxation)
- Complex compliance (Forms 5471, 8621, FBAR, FATCA)
- High professional fees ($25,000-100,000+/year)
- US bank unlikely to accept offshore collateral easily
- Political risk (IRS scrutiny of offshore structures)
- Potential deemed distribution issues

### The Hard Truth

**Scenario D does not achieve your goal.** You cannot avoid initial taxation on trading gains by using an offshore structure. The US anti-deferral regimes (CFC, PFIC, GILTI/NCTI) are specifically designed to prevent exactly this strategy.

**What DOES work in Scenario D**:
- SBLOC borrowing is still not taxable
- You can still access liquidity without selling
- Treasury interest is exempt from state tax (Washington has no state tax anyway)

**What DOESN'T work in Scenario D**:
- Trading gains are taxed currently (via GILTI/NCTI or PFIC rules)
- Treasury interest is taxed currently
- No deferral advantage over domestic structures
- Significantly more complex and expensive

### Regulatory Warning

The IRS and Treasury have increasingly focused on offshore structures:

| Enforcement | Status |
|-------------|--------|
| FATCA reporting | Required (CRS 2.0 in Cayman as of 2026) |
| FBAR filing | Required (FinCEN Form 114) |
| Form 5471 | Required for CFC shareholders |
| Form 8621 | Required for PFIC shareholders |
| Penalties | Up to $10,000+ per form per year for failure to file |
| Criminal exposure | Possible for willful non-compliance |

**Reference**: FATCA, FBAR, IRS Offshore Voluntary Disclosure Programs

---

## Why Do Offshore Funds Exist? Who Benefits?

### The Master-Feeder Structure Explained

Offshore hedge funds (Cayman, BVI) typically use a **master-feeder structure**:

```
                         ┌─────────────────────────────┐
                         │      Master Fund            │
                         │   (Cayman Islands LP)       │
                         │                             │
                         │   - All trading occurs here │
                         │   - Single portfolio        │
                         │   - Economies of scale      │
                         └─────────────┬───────────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
        ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐
        │   US Feeder LP    │ │  Offshore Feeder  │ │   Blocker Corp    │
        │   (Delaware)      │ │   (Cayman)        │ │   (Cayman)        │
        │                   │ │                   │ │                   │
        │ US TAXABLE        │ │ NON-US INVESTORS  │ │ US TAX-EXEMPT     │
        │ INVESTORS         │ │                   │ │ (pensions, etc.)  │
        │                   │ │ Tax-neutral       │ │ Avoids UBTI       │
        │ Taxed currently   │ │ structure         │ │                   │
        │ on income         │ │                   │ │                   │
        └───────────────────┘ └───────────────────┘ └───────────────────┘
```

### Who Benefits from Offshore Structures?

| Investor Type | Benefit | Why |
|--------------|---------|-----|
| **Non-US Investors** | Tax deferral | No US tax filing, no FATCA withholding, Cayman tax-neutral |
| **US Tax-Exempt (pensions, endowments)** | Avoid UBTI | Unrelated Business Taxable Income avoided via blocker |
| **US Taxable Investors** | **NO BENEFIT** | Taxed currently on pass-through income |

**Key Insight**: US taxable investors in a master-feeder structure invest through the **US Feeder LP**, which is a pass-through entity. They are taxed on their share of the Master Fund's income in the year earned - **exactly as if they owned the assets directly**.

### Why US Hedge Funds Still Use Offshore Structures

| Reason | Explanation |
|--------|-------------|
| **Attract non-US capital** | 60%+ of global hedge fund capital is non-US |
| **Tax-exempt investors** | Pensions, endowments need blocker to avoid UBTI |
| **Regulatory neutrality** | Cayman is recognized, efficient, well-understood |
| **Investor preference** | Non-US investors prefer familiar structures |
| **NOT for US tax avoidance** | US investors still taxed on all income |

**Bottom Line**: Offshore structures exist to serve **non-US investors and US tax-exempt investors**, not US taxable persons.

---

## "Ownership as a Service" - Nominee Arrangements

### The Question

Can someone else (a non-US person) own your foreign entity "for you" so you avoid CFC/PFIC status?

### The Answer: This is Illegal

**Nominee arrangements to hide beneficial ownership for tax purposes constitute tax evasion.**

| Arrangement | Status | Consequence |
|-------------|--------|-------------|
| Nominee shareholder | Illegal for tax avoidance | Criminal prosecution possible |
| Hidden beneficial ownership | Illegal | FATCA/CRS reporting defeats it |
| Undisclosed control | Illegal | Attribution rules apply anyway |
| "Trust" that you control | Illegal | Grantor trust rules apply |

### Why It Doesn't Work

#### 1. Attribution Rules (IRC Section 958)

The IRS attributes ownership from:
- Family members (spouse, children, grandchildren)
- Entities you control
- Partners and partnerships
- Certain trusts

**Even if someone else "owns" the shares on paper, if you have control, it's attributed to you.**

#### 2. Grantor Trust Rules (IRC Section 679)

If you transfer assets to a foreign trust and retain any benefit or control:
- You are treated as the owner of the trust assets
- All income is taxed to you currently
- Form 3520 filing required
- Severe penalties for non-filing

**Reference**: IRC Section 679, IRS Form 3520 Instructions

#### 3. Constructive Ownership

Courts look at **substance over form**:
- Who controls the entity?
- Who benefits from the income?
- Who makes investment decisions?
- Who can direct distributions?

If you answer "me" to these questions, you're the owner for tax purposes - regardless of what the paper documents say.

#### 4. FATCA and CRS Reporting

The Common Reporting Standard (CRS 2.0 in Cayman as of 2026) requires:
- Automatic exchange of financial account information
- Identification of beneficial owners
- Reporting of controlling persons

**The days of hiding ownership are over.**

### Real-World Example: Robert F. Smith (2020)

Robert F. Smith, billionaire founder of Vista Equity Partners, entered a **non-prosecution agreement** in 2020:
- Concealed ownership of offshore entities
- Failed to report foreign accounts and income
- Agreed to pay **$139 million** in back taxes and penalties
- Admitted to "willful failure to report"

**Reference**: DOJ Press Release, Robert F. Smith Non-Prosecution Agreement

### FATF Warning on Nominee Arrangements

The Financial Action Task Force (FATF) has specifically identified:
> "Limited liability corporations and nominee directorship services can be used to facilitate money laundering, tax evasion, and corruption."

**Reference**: FATF-Egmont Report on Concealment of Beneficial Ownership

### Corporate Transparency Act (2024)

The Corporate Transparency Act requires:
- Reporting of beneficial owners to FinCEN
- Identification of anyone exercising substantial control
- Criminal penalties for willful non-compliance

**Reference**: Corporate Transparency Act, 31 USC 5336

---

## The Only Real Escape: Expatriation

### Renouncing US Citizenship

If you truly want to escape US taxation on trading gains, the only legal option is to **renounce US citizenship**.

But there's a catch: **The Exit Tax**.

### Covered Expatriate Tests (2026)

You are a "covered expatriate" if ANY apply:

| Test | Threshold (2026) |
|------|------------------|
| Net Worth Test | $2 million or more |
| Tax Liability Test | Average $211,000+ tax liability over 5 years |
| Compliance Test | Failure to certify 5 years of tax compliance |

**Reference**: IRC Section 877, IRS Form 8854

### Exit Tax Consequences

If you're a covered expatriate:

| Asset Type | Tax Consequence |
|------------|-----------------|
| All assets | **Deemed sale** at fair market value |
| Exclusion amount | $887,000 (2026) |
| Tax rate | Ordinary income + capital gains rates |
| Retirement accounts | Deemed distribution (fully taxable) |
| Deferred compensation | Complex rules, often taxable |

### Exit Tax Example: $2M Portfolio

| Item | Calculation |
|------|-------------|
| Portfolio value | $2,000,000 |
| Basis | $500,000 |
| Built-in gain | $1,500,000 |
| Exclusion | ($887,000) |
| Taxable gain | $613,000 |
| Federal tax (est.) | ~$150,000-200,000 |

**Plus**: Future gifts/bequests to US persons subject to 40% tax under Section 2801.

### Expatriation Summary

| Factor | Consideration |
|--------|---------------|
| Exit tax | Significant - can be hundreds of thousands to millions |
| Future US gifts | 40% tax on gifts to US persons |
| Re-entry | May be barred from US |
| Citizenship | Cannot be regained easily |
| Timing | 5 years of tax compliance required |
| Cost | Very high - both financially and personally |

**Not recommended** unless you have already decided to permanently leave the US.

---

## Updated Scenario Analysis: All Income from Short-Term Gains

**Clarification**: All four scenarios assume that trading income consists entirely of short-term capital gains (holding periods of seconds, minutes, or days).

### Why This Matters

Short-term gains are **always** treated as ordinary income, regardless of the structure:

| Scenario | How Short-Term Gains Are Taxed |
|----------|--------------------------------|
| A (Direct) | Ordinary income rates (10-37%) |
| B (LLC) | Ordinary income + SE tax (15.3%) |
| C (Borrow) | Ordinary income rates on gains; SBLOC not taxed |
| D (Offshore) | Ordinary income via GILTI/NCTI or PFIC |

**No structure converts short-term gains into long-term gains or tax-exempt income.**

### Updated Scenario Comparison (Short-Term Gains Only)

#### Scenario A: Direct Short-Term Gains

| Annual Income | Federal Tax | Effective Rate | After-Tax |
|--------------|-------------|----------------|-----------|
| $250,000 | ~$52,000 | ~21% | ~$198,000 |
| $500,000 | ~$130,000 | ~26% | ~$370,000 |
| $750,000 | ~$222,000 | ~30% | ~$528,000 |
| $1,000,000 | ~$318,000 | ~32% | ~$682,000 |

**Plus**: 3.8% NIIT on income over $200,000.

#### Scenario B: LLC + Self-Employment

| Item | Calculation |
|------|-------------|
| Trading income | $500,000 |
| Operating expenses | ($12,000) |
| Net SE income | $488,000 |
| SE tax (15.3%) | ~$20,800 |
| Half SE tax deduction | ($10,400) |
| QBI deduction (20%) | ($97,600) |
| Taxable income | ~$380,000 |
| Federal tax | ~$90,000 |
| **Total tax** | ~$110,800 |
| **Effective rate** | ~22.7% |

**Note**: QBI deduction may be limited for "specified service trades or businesses." Trading may or may not qualify - consult CPA.

**Plus**: Washington B&O tax on gross receipts (1.5-2.1%).

#### Scenario C: Buy, Borrow, Die

| Phase | Tax |
|-------|-----|
| Trading gains (Year 1) | Taxed as ordinary income |
| Treasury interest (ongoing) | Taxed annually (federal only) |
| SBLOC proceeds | **NOT TAXED** |
| SBLOC interest | Not deductible (personal use) |
| Step-up at death | Eliminates capital gains |

**Key**: Deferral works on APPRECIATION after initial investment, not on initial gains.

**Example**:
1. Year 1: Earn $500K trading → Pay ~$130K tax → Invest $370K in Treasuries
2. Years 2-10: Treasuries grow to $600K → No tax until sold
3. Borrow against $600K → No tax
4. Die → Heirs get $600K basis step-up → No capital gains ever

**The deferral is on TREASURY GROWTH, not on initial trading gains.**

#### Scenario D: Offshore Fund

| Item | Tax |
|------|-----|
| Trading gains (CFC) | GILTI/NCTI inclusion (currently taxed) |
| Treasury interest (CFC) | GILTI/NCTI inclusion (currently taxed) |
| SBLOC proceeds | Not taxed |
| Compliance costs | $25K-100K+/year |

**Result**: Same or higher tax than domestic, plus massive complexity.

---

## Final Recommendations

### For Short-Term Trading Income

| Priority | Recommendation |
|----------|----------------|
| 1 | **Scenario C (Buy, Borrow, Die)** - Best for wealth accumulation |
| 2 | Scenario B (LLC) - Simpler, possible QBI deduction |
| 3 | Scenario A (Direct) - Simplest |
| 4 | Scenario D (Offshore) - No benefit, high cost |

### What Doesn't Work

| Approach | Why It Fails |
|----------|--------------|
| Offshore fund (Cayman/BVI) | GILTI/NCTI taxes income currently |
| Nominee ownership | Illegal, criminal exposure |
| Foreign trust | Grantor trust rules apply |
| "Ownership as a service" | Illegal, FATCA/CRS defeats it |
| Renouncing citizenship | Exit tax triggers on all gains |

### The Hard Truth

For a US citizen/resident:
1. **Short-term trading gains will be taxed** in the year earned
2. **No legal structure avoids this** (without expatriation)
3. **The "borrow" strategy defers future taxation**, not initial gains
4. **Offshore structures serve non-US investors**, not US taxable persons

---

## Comparative Summary (All Four Scenarios)

| Factor | Scenario A | Scenario B | Scenario C | Scenario D |
|--------|-----------|-----------|-----------|-----------|
| Initial Tax Rate | Highest | Moderate | Same as A | Same as A (GILTI/NCTI) |
| Ongoing Tax | Annual | Annual | Treasury interest only | Annual (GILTI/NCTI) |
| Deferral | None | None | Yes (borrowed amounts) | **None** |
| Interest Deduction | N/A | Possible | Not for personal use | Not for personal use |
| Complexity | Low | Medium | High | Very High |
| Estate Planning | None | None | Step-up in basis | Step-up in basis |
| Washington Tax | None (income) | B&O on gross | None (income) | None (income) |
| Political Risk | Low | Low | Medium (step-up) | High (offshore scrutiny) |
| Professional Fees | None | Low | High | Very High ($25K-100K+/yr) |
| Compliance Burden | Low | Medium | Medium | Very High (Forms 5471, 8621, FBAR, FATCA) |

### Scenario Ranking for Your Goals

| Rank | Scenario | Rationale |
|------|----------|-----------|
| 1 | **Scenario C** | Best combination of deferral and practicality |
| 2 | Scenario B | Simpler than C, potential QBI deduction |
| 3 | Scenario A | Simplest but highest ongoing tax |
| 4 | **Scenario D** | No tax advantage, high complexity and cost |

---

## References

### Federal Tax
- IRS Publication 550: Investment Income and Expenses
- IRS Publication 334: Tax Guide for Small Business
- IRS Publication 936: Home Mortgage Interest Deduction
- IRC Section 1014: Basis of Property Acquired from Decedent
- IRC Section 199A: Qualified Business Income Deduction
- Tax Foundation: 2026 Tax Brackets

### Washington State
- Washington Department of Revenue: B&O Tax Rates
- RCW 82.04.080: Investment Income Definition
- RCW 83.100: Estate and Transfer Taxes

### Strategy References
- SmartAsset: Buy, Borrow, Die Strategy
- Yale Budget Lab: Buy-Borrow-Die Reform Options
- Green Trader Tax: Washington B&O Analysis
- Morgan Stanley: Securities-Based Lending

### Legal Cases
- Tufts v. Commissioner: Borrowing not a taxable event

---

## Next Steps

1. **Consult Tax Professional**: This analysis is informational; verify with CPA
2. **Model Specific Scenarios**: Use actual income projections
3. **Review Quarterly**: Tax laws and rates may change
4. **Document Everything**: Critical for any chosen strategy
5. **Build Professional Team**: CPA, attorney, wealth advisor, banker

---

## Updates Log

| Date | Update |
|------|--------|
| 2026-02-19 | Initial analysis created |
| 2026-02-19 | Added Scenario D: Offshore fund structure analysis |
| 2026-02-19 | Added master-feeder explanation, nominee illegality, expatriation/exit tax |
| 2026-02-19 | Updated scenarios for all short-term gains income |

