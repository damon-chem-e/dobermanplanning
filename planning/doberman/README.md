# Doberman Income Analysis

## Overview

This section analyzes income potential from trading operations through Doberman (personal trading firm) and compares it to the estimated costs of living at 222 Towhee Ln, Brinnon, WA.

## Files

- **income-analysis.md**: Detailed analysis of income scenarios, costs, and financial sustainability
- **income_calculator.py**: Interactive Python script for calculating pre-tax income, taxes, and savings
- **income-targets.md**: Pre-tax daily income needed for after-tax goals ($200K-$20M)
- **tax-strategy-analysis.md**: Comprehensive analysis of four tax treatment scenarios (A-D)
- **borrow-strategy-and-tax-reduction-options.md**: How borrowing defers tax and legitimate tax reduction options
- **borrow-vs-savings-strategy.md**: Compare using savings vs borrowing for living expenses
- **tts-deduction-optimization.md**: Maximize Trader Tax Status deductions, including self-developed software

## Quick Summary

### Monthly Costs
- Property Costs (mortgage, tax, insurance, utilities, maintenance): $3,334-3,564
- Living Costs (transportation, food, healthcare, entertainment): $2,108-2,808
- Operating Costs (servers, data, software): $1,000-2,000
- **Total Monthly**: $6,442-8,372 ($88,800/year midpoint)

### Pre-Tax Income Scenarios (Short-Term Gains)

| Daily Income | Days | Pre-Tax | Tax | After-Tax | Coverage |
|--------------|------|---------|-----|-----------|----------|
| $1,000 | 252 | $234,000 | $53,235 | $180,765 | 2.0x |
| $2,000 | 252 | $486,000 | $150,515 | $335,485 | 3.8x |
| $3,000 | 252 | $738,000 | $250,524 | $487,476 | 5.5x |

### Years to $1M (Net Worth)

| Daily Income | Days | Use Savings | Borrow for Living |
|--------------|------|-------------|-------------------|
| $1,000 | 252 | 10.9 years | 5.5 years |
| $2,000 | 252 | 4.1 years | 3.0 years |
| $3,000 | 252 | 2.5 years | 2.1 years |

## Using the Calculator

### Prerequisites
- Python 3.6 or higher

### Run All Scenarios
```bash
python3 income_calculator.py --all
```

### Calculate Specific Scenario
```bash
python3 income_calculator.py --daily 2000 --days 252
```

### Break-Even Analysis
```bash
python3 income_calculator.py --break-even
```

## Key Insights

1. **Strong Coverage**: Even at the conservative $1,000/day estimate, income covers costs by 3-5x
2. **Rapid Savings Potential**: At $2,000/day, could save $1M in 2.6 years
3. **Low Break-Even**: Only need $177-332/day to cover all expenses
4. **Risk Buffer**: Significant margin for income variability

## Tax Advantages

Washington State offers significant tax advantages for traders:
- No state income tax on trading income
- No capital gains tax on short-term trading
- Business & Occupation tax applies but at low rates

## Next Steps

1. Establish baseline trading performance metrics
2. Track actual daily income vs projections
3. Monitor operating costs monthly
4. Plan for federal tax obligations
5. Build 6-12 month emergency fund before relocating