# Capital Requirements by Daily Return Rate

## Overview

This document shows the trading capital required to achieve each after-tax income target based on daily percentage returns. This answers the question: "How much capital do I need to manage to hit my income goals?"

## Generation Details

| Item | Value |
|------|-------|
| **Commit** | `84e5cca` |
| **Script** | `planning/doberman/income_calculator.py` |
| **Trading Days** | 252 (US markets) |
| **Deductions** | $100K/year |
| **Compounding** | None (simple daily returns) |

---

## Main Results Table

### Capital Required by Daily Return Rate

| After-Tax | 10bps | 20bps | 30bps | 40bps | 50bps | 60bps | 70bps | 80bps | 90bps | 100bps |
|-----------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|
| **$200K** | $886K | $443K | $295K | $222K | $177K | $148K | $127K | $111K | $98K | $89K |
| **$300K** | $1.5M | $736K | $491K | $368K | $294K | $245K | $210K | $184K | $164K | $147K |
| **$500K** | $2.8M | $1.4M | $923K | $692K | $554K | $461K | $395K | $346K | $308K | $277K |
| **$750K** | $4.4M | $2.2M | $1.5M | $1.1M | $888K | $740K | $634K | $555K | $493K | $444K |
| **$1.0M** | $6.1M | $3.1M | $2.0M | $1.5M | $1.2M | $1.0M | $874K | $765K | $680K | $612K |
| **$10.0M** | $66.4M | $33.2M | $22.1M | $16.6M | $13.3M | $11.1M | $9.5M | $8.3M | $7.4M | $6.6M |
| **$15.0M** | $100M | $50M | $33.3M | $25M | $20M | $16.7M | $14.3M | $12.5M | $11.1M | $10M |
| **$20.0M** | $133.5M | $66.7M | $44.5M | $33.4M | $26.7M | $22.2M | $19.1M | $16.7M | $14.8M | $13.3M |

---

## Daily Return Interpretation

### Basis Points to Percentages

| Daily bps | Daily % | Annual % (no compound) | Difficulty |
|-----------|---------|------------------------|------------|
| **10 bps** | 0.1% | 25.2% | Conservative |
| **20 bps** | 0.2% | 50.4% | Modest |
| **30 bps** | 0.3% | 75.6% | Good |
| **40 bps** | 0.4% | 100.8% | Strong |
| **50 bps** | 0.5% | 126.0% | Excellent |
| **60 bps** | 0.6% | 151.2% | Exceptional |
| **70 bps** | 0.7% | 176.4% | Elite |
| **80 bps** | 0.8% | 201.6% | Very Elite |
| **90 bps** | 0.9% | 226.8% | Top Tier |
| **100 bps** | 1.0% | 252.0% | World Class |

---

## Calculation Method

### Formula

```
Capital Required = Daily Pre-Tax Income ÷ Daily Return Rate

Where:
- Daily Pre-Tax Income = Annual Pre-Tax Income ÷ 252
- Daily Return Rate = bps ÷ 10,000
```

### Example: $1M After-Tax at 50 bps

```
1. Daily Pre-Tax Needed: $6,116
2. Daily Return (50 bps): 0.5% = 0.005
3. Capital Required: $6,116 ÷ 0.005 = $1,223,215
```

---

## Practical Scenarios

### Scenario 1: Floor Income ($200K After-Tax)

| Daily Return | Capital Needed | Difficulty |
|--------------|----------------|------------|
| 10 bps (conservative) | $886K | Lower risk, larger capital |
| 30 bps (moderate) | $295K | Balanced |
| 50 bps (strong) | $177K | Higher skill needed |
| 100 bps (elite) | $89K | Exceptional returns required |

**Interpretation**: With $200K-300K capital and 30-50 bps/day returns, you can achieve a floor income.

### Scenario 2: Wealth Building ($1M After-Tax)

| Daily Return | Capital Needed | Difficulty |
|--------------|----------------|------------|
| 10 bps (conservative) | $6.1M | Requires significant capital |
| 30 bps (moderate) | $2.0M | Substantial capital |
| 50 bps (strong) | $1.2M | Achievable with skill |
| 100 bps (elite) | $612K | Exceptional returns required |

**Interpretation**: $1M-2M capital with 30-50 bps/day returns gets you to $1M after-tax.

### Scenario 3: Generational Wealth ($10M After-Tax)

| Daily Return | Capital Needed | Difficulty |
|--------------|----------------|------------|
| 10 bps (conservative) | $66.4M | Institutional scale |
| 30 bps (moderate) | $22.1M | Major fund required |
| 50 bps (strong) | $13.3M | Significant fund |
| 100 bps (elite) | $6.6M | High-return strategy needed |

**Interpretation**: $10M-20M capital with 30-50 bps/day returns for generational wealth.

---

## Reality Check: What Returns Are Achievable?

### Industry Benchmarks

| Trader Type | Typical Daily Return | Annual Return |
|-------------|---------------------|---------------|
| Retail day trader | 10-30 bps | 25-75% |
| Professional prop trader | 20-50 bps | 50-125% |
| Elite prop firm | 30-80 bps | 75-200% |
| Top quantitative funds | 20-60 bps | 50-150% |
| **Sustained 100+ bps** | Rare | Requires exceptional edge |

### Risk-Adjusted Perspective

| Daily Return | Capital Needed for $1M | Risk Level |
|--------------|------------------------|------------|
| 20 bps | $3.1M | Lower risk |
| 40 bps | $1.5M | Moderate risk |
| 60 bps | $1.0M | Higher risk |
| 80 bps | $765K | High risk |
| 100 bps | $612K | Very high risk |

**Key Insight**: Higher returns require less capital but come with higher risk and skill requirements. The sweet spot is typically 30-50 bps/day for sustainable performance.

---

## Compounding vs. No Compounding

This analysis assumes **no compounding** (constant capital base). With compounding:

| Scenario | No Compound | With Compound (252 days) |
|----------|-------------|--------------------------|
| 50 bps/day, start with $1M | $1.26M profit | $2.52M profit (2.52×) |
| 100 bps/day, start with $1M | $2.52M profit | $12.0M profit (12×) |

**Note**: Compounding dramatically increases returns but also increases risk. Most professional traders withdraw profits regularly rather than compound indefinitely.

---

## Leverage Considerations

### Buying Power vs. Capital

| Capital | 4:1 Leverage | 10:1 Leverage | 20:1 Leverage |
|---------|--------------|---------------|---------------|
| $500K | $2M buying power | $5M buying power | $10M buying power |
| $1M | $4M buying power | $10M buying power | $20M buying power |
| $5M | $20M buying power | $50M buying power | $100M buying power |

**Note**: Leverage magnifies both returns AND losses. Higher leverage requires better risk management.

---

## Summary: Capital-Return Trade-offs

### For $1M After-Tax Income

| Strategy | Capital | Daily Return | Annual Return | Risk Profile |
|----------|---------|--------------|---------------|--------------|
| Conservative | $6.1M | 10 bps | 25% | Low |
| Moderate | $2.0M | 30 bps | 76% | Medium |
| Aggressive | $1.2M | 50 bps | 126% | High |
| Very Aggressive | $612K | 100 bps | 252% | Very High |

### Recommended Ranges

| Target | Recommended Capital | Target Daily Return |
|--------|---------------------|---------------------|
| $200K | $200K-400K | 30-50 bps |
| $500K | $500K-1M | 30-50 bps |
| $1M | $1M-2M | 30-50 bps |
| $10M | $10M-20M | 30-50 bps |

---

## Assumptions & Limitations

### Assumptions

1. **Constant capital**: No compounding, capital stays fixed
2. **Consistent returns**: Same daily return every trading day
3. **No drawdowns**: Assumes you can maintain the daily return
4. **252 trading days**: Standard US market calendar
5. **Short-term gains**: All income taxed as ordinary income
6. **$100K deductions**: Business expenses, home office, etc.

### Limitations

1. **Returns are not consistent**: Real trading has variance
2. **Drawdowns happen**: Capital may need replenishment
3. **Psychology matters**: Sustained high returns are rare
4. **Market conditions**: Returns vary with market regime
5. **Skill development**: Takes time to achieve consistent returns

---

## Quick Reference Card

### Capital Needed at 50 bps/day (0.5%)

| After-Tax Target | Capital Required |
|------------------|------------------|
| $200K | **$177K** |
| $300K | **$294K** |
| $500K | **$554K** |
| $750K | **$888K** |
| $1M | **$1.2M** |
| $10M | **$13.3M** |
| $15M | **$20M** |
| $20M | **$26.7M** |

### Rule of Thumb

```
Capital ≈ After-Tax Target × 1.2 (at 50 bps/day)
Capital ≈ After-Tax Target × 0.6 (at 100 bps/day)
```

---

## Updates Log

| Date | Update |
|------|--------|
| 2026-02-19 | Initial document created from commit 84e5cca |
