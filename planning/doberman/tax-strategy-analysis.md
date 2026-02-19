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

