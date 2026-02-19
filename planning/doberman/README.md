# Doberman Income Analysis

## Overview

This section analyzes income potential from trading operations through Doberman (personal trading firm) and compares it to the estimated costs of living at 222 Towhee Ln, Brinnon, WA.

## Files

- **income-analysis.md**: Detailed analysis of income scenarios, costs, and financial sustainability
- **income_calculator.py**: Interactive Python script for calculating and comparing income scenarios
- **tax-strategy-analysis.md**: Comprehensive analysis of three tax treatment scenarios for trading income

## Quick Summary

### Monthly Costs
- Property Costs (mortgage, tax, insurance, utilities, maintenance): $3,334-3,564
- Living Costs (transportation, food, healthcare, entertainment): $2,108-2,808
- Operating Costs (servers, data, software): $1,000-2,000
- **Total Monthly**: $6,442-8,372

### Break-Even Analysis
- Break-even daily income (252 trading days): $256-332/day
- Break-even daily income (365 days): $177-229/day

### Income Scenarios

| Daily Income | Trading Days | Annual Gross | Monthly Net | Monthly Surplus | Coverage |
|--------------|--------------|--------------|-------------|-----------------|----------|
| $1,000 | 252 | $252,000 | $19,500 | $12,958 | 2.97x |
| $1,000 | 365 | $365,000 | $29,417 | $22,875 | 4.49x |
| $2,000 | 252 | $504,000 | $40,500 | $33,958 | 6.19x |
| $2,000 | 365 | $730,000 | $60,833 | $54,291 | 9.30x |
| $3,000 | 252 | $756,000 | $61,000 | $54,458 | 9.32x |
| $3,000 | 365 | $1,095,000 | $91,250 | $84,708 | 13.94x |

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