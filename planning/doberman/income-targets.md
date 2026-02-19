# Income Targets: Pre-Tax Daily Requirements

## Overview

This document provides pre-tax daily income targets needed to achieve various after-tax income goals. These are the benchmarks for financial planning.

## Generation Details

| Item | Value |
|------|-------|
| **Commit** | `5e7f1c6` |
| **Script** | `planning/doberman/income_calculator.py` |
| **Tax Year** | 2026 |
| **Tax Treatment** | Short-term capital gains (ordinary income rates) |
| **NIIT** | 3.8% on income above $200,000 |
| **State Tax** | Washington (0% state income tax) |

---

## Summary Table: Daily Pre-Tax Income Needed

### 252 Trading Days (US Markets)

| After-Tax Target | $50K Deductions | $100K Deductions | $150K Deductions |
|------------------|-----------------|------------------|------------------|
| **$200K** | $952/day | $886/day | $825/day |
| **$300K** | $1,585/day | $1,472/day | $1,370/day |
| **$500K** | $2,889/day | $2,768/day | $2,655/day |
| **$750K** | $4,564/day | $4,440/day | $4,316/day |
| **$1.0M** | $6,240/day | $6,116/day | $5,992/day |
| **$10.0M** | $66,568/day | $66,444/day | $66,320/day |
| **$15.0M** | $100,084/day | $99,960/day | $99,836/day |
| **$20.0M** | $133,600/day | $133,476/day | $133,352/day |

### 365 Trading Days (Crypto/24-7 Markets)

| After-Tax Target | $50K Deductions | $100K Deductions | $150K Deductions |
|------------------|-----------------|------------------|------------------|
| **$200K** | $657/day | $612/day | $570/day |
| **$300K** | $1,094/day | $1,016/day | $946/day |
| **$500K** | $1,994/day | $1,911/day | $1,833/day |
| **$750K** | $3,151/day | $3,066/day | $2,980/day |
| **$1.0M** | $4,308/day | $4,223/day | $4,137/day |
| **$10.0M** | $45,959/day | $45,874/day | $45,788/day |
| **$15.0M** | $69,099/day | $69,013/day | $68,928/day |
| **$20.0M** | $92,239/day | $92,153/day | $92,067/day |

---

## Detailed Breakdown

### Scenario: 252 Trading Days, $100K Deductions

#### $200K After-Tax (Floor)
| Item | Amount |
|------|--------|
| Daily pre-tax | $886 |
| Annual pre-tax | $223,334 |
| Taxable income | $123,334 |
| Federal tax | $22,447 |
| NIIT | $887 |
| Total tax | $23,334 |
| Effective rate | 10.4% |

#### $300K After-Tax
| Item | Amount |
|------|--------|
| Daily pre-tax | $1,472 |
| Annual pre-tax | $370,829 |
| Taxable income | $270,829 |
| Federal tax | $64,337 |
| NIIT | $6,491 |
| Total tax | $70,829 |
| Effective rate | 19.1% |

#### $500K After-Tax
| Item | Amount |
|------|--------|
| Daily pre-tax | $2,768 |
| Annual pre-tax | $697,626 |
| Taxable income | $597,626 |
| Federal tax | $178,716 |
| NIIT | $18,910 |
| Total tax | $197,626 |
| Effective rate | 28.3% |

#### $750K After-Tax
| Item | Amount |
|------|--------|
| Daily pre-tax | $4,440 |
| Annual pre-tax | $1,118,953 |
| Taxable income | $1,018,953 |
| Federal tax | $334,033 |
| NIIT | $34,920 |
| Total tax | $368,953 |
| Effective rate | 33.0% |

#### $1.0M After-Tax
| Item | Amount |
|------|--------|
| Daily pre-tax | $6,116 |
| Annual pre-tax | $1,541,250 |
| Taxable income | $1,441,250 |
| Federal tax | $490,283 |
| NIIT | $50,968 |
| Total tax | $541,250 |
| Effective rate | 35.1% |

#### $10.0M After-Tax
| Item | Amount |
|------|--------|
| Daily pre-tax | $66,444 |
| Annual pre-tax | $16,743,953 |
| Taxable income | $16,643,953 |
| Federal tax | $6,115,283 |
| NIIT | $628,670 |
| Total tax | $6,743,953 |
| Effective rate | 40.3% |

#### $15.0M After-Tax
| Item | Amount |
|------|--------|
| Daily pre-tax | $99,960 |
| Annual pre-tax | $25,189,899 |
| Taxable income | $25,089,899 |
| Federal tax | $9,240,283 |
| NIIT | $949,616 |
| Total tax | $10,189,899 |
| Effective rate | 40.5% |

#### $20.0M After-Tax
| Item | Amount |
|------|--------|
| Daily pre-tax | $133,476 |
| Annual pre-tax | $33,635,845 |
| Taxable income | $33,535,845 |
| Federal tax | $12,365,283 |
| NIIT | $1,270,562 |
| Total tax | $13,635,845 |
| Effective rate | 40.5% |

---

## Key Observations

### Deduction Impact

At lower income levels, deductions have more relative impact:

| After-Tax Target | Savings from $50K→$150K Deductions |
|------------------|-------------------------------------|
| $200K | $127/day (13.4% reduction) |
| $300K | $215/day (13.6% reduction) |
| $500K | $234/day (8.1% reduction) |
| $1.0M | $248/day (4.0% reduction) |
| $10.0M | $248/day (0.4% reduction) |

**Insight**: Deductions matter more at lower income levels. At $10M+, the 37% bracket dominates and deductions have minimal relative impact.

### Effective Tax Rate Progression

| After-Tax Target | Effective Tax Rate |
|------------------|-------------------|
| $200K | 10.4% |
| $300K | 19.1% |
| $500K | 28.3% |
| $750K | 33.0% |
| $1.0M | 35.1% |
| $10.0M | 40.3% |
| $15.0M | 40.5% |
| $20.0M | 40.5% |

**Insight**: Effective rate asymptotically approaches ~40.5% (37% federal + 3.8% NIIT on nearly all income).

### Trading Days Impact

| After-Tax Target | 252 Days | 365 Days | Reduction |
|------------------|----------|----------|-----------|
| $200K | $886/day | $612/day | 31% |
| $1.0M | $6,116/day | $4,223/day | 31% |
| $10.0M | $66,444/day | $45,874/day | 31% |

**Insight**: 365 trading days reduces daily requirement by ~31% across all targets.

---

## Target Categories

### Floor ($200K After-Tax)
- **Purpose**: Minimum viable income
- **Daily Pre-Tax**: $886 (252 days) / $612 (365 days)
- **Coverage of Living Costs**: 2.3x ($200K ÷ $88,800)
- **Feasibility**: Very achievable

### Comfortable ($500K After-Tax)
- **Purpose**: Comfortable lifestyle with savings
- **Daily Pre-Tax**: $2,768 (252 days) / $1,911 (365 days)
- **Coverage of Living Costs**: 5.6x
- **Feasibility**: Achievable with consistent performance

### Wealth Building ($1M After-Tax)
- **Purpose**: Significant wealth accumulation
- **Daily Pre-Tax**: $6,116 (252 days) / $4,223 (365 days)
- **Coverage of Living Costs**: 11.3x
- **Feasibility**: Requires strong, consistent performance

### Generational Wealth ($10M+ After-Tax)
- **Purpose**: Generational wealth transfer
- **Daily Pre-Tax**: $66,444+ (252 days) / $45,874+ (365 days)
- **Coverage of Living Costs**: 113x+
- **Feasibility**: Requires exceptional, sustained performance

---

## Quick Reference Card

### Daily Pre-Tax Targets (252 Days, $100K Deductions)

| Goal | Daily Target |
|------|-------------|
| Floor ($200K) | **$886/day** |
| Stable ($300K) | **$1,472/day** |
| Comfortable ($500K) | **$2,768/day** |
| Prosperous ($750K) | **$4,440/day** |
| Wealth Building ($1M) | **$6,116/day** |
| Affluent ($10M) | **$66,444/day** |
| Ultra-HNW ($15M) | **$99,960/day** |
| Billionaire Track ($20M) | **$133,476/day** |

---

## Methodology

### Tax Calculation

```
Gross Income
  - Deductions
  = Taxable Income
  
Taxable Income × Federal Brackets = Federal Tax
Gross Income × 3.8% (above $200K) = NIIT

Total Tax = Federal Tax + NIIT
After-Tax = Gross Income - Total Tax
```

### Federal Tax Brackets (2026)

| Income Range | Rate |
|--------------|------|
| $0 - $11,925 | 10% |
| $11,926 - $48,475 | 12% |
| $48,476 - $103,350 | 22% |
| $103,351 - $197,300 | 24% |
| $197,301 - $250,525 | 32% |
| $250,526 - $626,350 | 35% |
| $626,351+ | 37% |

### Assumptions

1. All income is short-term capital gains (taxed as ordinary income)
2. No Section 1256 treatment (futures would have lower rates)
3. No Section 475 election (would not change rates)
4. Single filer status
5. Washington state residence (0% state tax)
6. Deductions include: business expenses, home office, software, data feeds, etc.

---

## Regeneration Instructions

To regenerate this document with updated assumptions:

```bash
cd planning/doberman
uv run python -c "
from income_calculator import TaxCalculator
# Run calculation code from commit 5e7f1c6
"
```

Or use the calculator directly:

```bash
uv run income_calculator.py --daily 6116 --days 252
```

---

## Updates Log

| Date | Update |
|------|--------|
| 2026-02-19 | Initial document created from commit 5e7f1c6 |
