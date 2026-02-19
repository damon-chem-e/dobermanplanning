#!/usr/bin/env python3
"""
Doberman Income Calculator
Calculates and compares trading income to monthly costs for 222 Towhee Ln residence
Updated to handle PRE-TAX short-term gains and tax implications
"""

import argparse
from typing import Dict, List, Optional


class TaxCalculator:
    """Calculate federal income tax for single filer (2026 brackets)."""
    
    BRACKETS_2026 = [
        (11925, 0.10),
        (48475, 0.12),
        (103350, 0.22),
        (197300, 0.24),
        (250525, 0.32),
        (626350, 0.35),
        (float('inf'), 0.37),
    ]
    
    NIIT_THRESHOLD = 200000
    NIIT_RATE = 0.038
    
    @classmethod
    def calculate_federal_tax(cls, taxable_income: float) -> float:
        """Calculate federal income tax using 2026 brackets."""
        tax = 0.0
        prev_bracket = 0
        
        for bracket_limit, rate in cls.BRACKETS_2026:
            if taxable_income <= prev_bracket:
                break
            taxable_in_bracket = min(taxable_income, bracket_limit) - prev_bracket
            tax += taxable_in_bracket * rate
            prev_bracket = bracket_limit
            
        return tax
    
    @classmethod
    def calculate_niit(cls, modified_agi: float) -> float:
        """Calculate Net Investment Income Tax."""
        if modified_agi > cls.NIIT_THRESHOLD:
            return (modified_agi - cls.NIIT_THRESHOLD) * cls.NIIT_RATE
        return 0.0
    
    @classmethod
    def calculate_total_tax(cls, gross_income: float, deductions: float = 0) -> Dict:
        """Calculate total federal tax including NIIT."""
        taxable_income = max(0, gross_income - deductions)
        federal_tax = cls.calculate_federal_tax(taxable_income)
        niit = cls.calculate_niit(gross_income)
        total_tax = federal_tax + niit
        
        return {
            'gross_income': gross_income,
            'deductions': deductions,
            'taxable_income': taxable_income,
            'federal_tax': federal_tax,
            'niit': niit,
            'total_tax': total_tax,
            'effective_rate': total_tax / gross_income if gross_income > 0 else 0,
            'after_tax': gross_income - total_tax,
        }


class IncomeCalculator:
    """Calculate income scenarios and compare to living costs."""
    
    def __init__(self):
        self.monthly_property_costs = 3450
        self.monthly_living_costs = 2450
        self.monthly_operating_costs = 1500
        self.total_monthly_costs = (
            self.monthly_property_costs + 
            self.monthly_living_costs + 
            self.monthly_operating_costs
        )
        self.annual_living_costs = self.total_monthly_costs * 12
        self.trading_days_standard = 252
        self.trading_days_extended = 365
        
    def calculate_scenario(
        self, 
        daily_income: float, 
        trading_days: int,
        use_borrow_for_living: bool = False,
        operating_costs_monthly: Optional[float] = None
    ) -> Dict:
        """Calculate income scenario with tax considerations."""
        
        if operating_costs_monthly is None:
            operating_costs_monthly = self.monthly_operating_costs
            
        annual_gross = daily_income * trading_days
        annual_operating = operating_costs_monthly * 12
        
        gross_trading_income = annual_gross - annual_operating
        
        tax_info = TaxCalculator.calculate_total_tax(gross_trading_income)
        
        if use_borrow_for_living:
            annual_savings = tax_info['after_tax']
            annual_living_from_savings = 0
            annual_living_borrowed = self.annual_living_costs
        else:
            annual_savings = tax_info['after_tax'] - self.annual_living_costs
            annual_living_from_savings = self.annual_living_costs
            annual_living_borrowed = 0
        
        coverage_ratio = tax_info['after_tax'] / self.annual_living_costs
        
        return {
            'daily_income': daily_income,
            'trading_days': trading_days,
            'annual_gross': annual_gross,
            'annual_operating': annual_operating,
            'gross_trading_income': gross_trading_income,
            'total_tax': tax_info['total_tax'],
            'effective_tax_rate': tax_info['effective_rate'],
            'after_tax_income': tax_info['after_tax'],
            'use_borrow_for_living': use_borrow_for_living,
            'annual_living_costs': self.annual_living_costs,
            'annual_living_from_savings': annual_living_from_savings,
            'annual_living_borrowed': annual_living_borrowed,
            'annual_savings': annual_savings,
            'coverage_ratio': coverage_ratio,
            'monthly_savings': annual_savings / 12,
        }
    
    def print_scenario(self, scenario: Dict) -> None:
        """Print scenario details."""
        print(f"\n{'='*70}")
        print(f"Daily Pre-Tax Income: ${scenario['daily_income']:,.0f}")
        print(f"Trading Days: {scenario['trading_days']}")
        print(f"Living Strategy: {'Borrow' if scenario['use_borrow_for_living'] else 'Use Savings'}")
        print(f"{'='*70}")
        print(f"\nAnnual Gross Trading:     ${scenario['annual_gross']:>14,.0f}")
        print(f"Less Operating Costs:    -${scenario['annual_operating']:>13,.0f}")
        print(f"Taxable Income:           ${scenario['gross_trading_income']:>14,.0f}")
        print(f"\nFederal Tax + NIIT:      -${scenario['total_tax']:>13,.0f}")
        print(f"Effective Tax Rate:       {scenario['effective_tax_rate']*100:>13.1f}%")
        print(f"\nAfter-Tax Income:         ${scenario['after_tax_income']:>14,.0f}")
        print(f"Annual Living Costs:     -${scenario['annual_living_costs']:>13,.0f}")
        if scenario['use_borrow_for_living']:
            print(f"  (Borrowed, not deducted)")
        print(f"\nAnnual Savings:           ${scenario['annual_savings']:>14,.0f}")
        print(f"Monthly Savings:          ${scenario['monthly_savings']:>14,.0f}")
        print(f"\nCoverage Ratio:           {scenario['coverage_ratio']:>13.2f}x")
        
    def print_comparison_table(self, scenarios: List[Dict]) -> None:
        """Print comparison table of multiple scenarios."""
        print(f"\n{'='*120}")
        print(f"{'Daily':<8} {'Days':<5} {'Pre-Tax':<12} {'Tax':<10} {'After-Tax':<12} {'Strategy':<10} {'Annual Save':<14} {'Coverage':<10}")
        print(f"{'='*120}")
        
        for s in scenarios:
            strategy = "Borrow" if s['use_borrow_for_living'] else "Savings"
            print(f"${s['daily_income']:>6,.0f}  {s['trading_days']:<5} "
                  f"${s['gross_trading_income']:>10,.0f}  "
                  f"${s['total_tax']:>8,.0f}  "
                  f"${s['after_tax_income']:>10,.0f}  "
                  f"{strategy:<10} "
                  f"${s['annual_savings']:>12,.0f}  "
                  f"{s['coverage_ratio']:>8.2f}x")
        
        print(f"{'='*120}")
    
    def calculate_break_even(self, trading_days: int) -> float:
        """Calculate break-even daily pre-tax income."""
        def net_after_tax(gross: float) -> float:
            return TaxCalculator.calculate_total_tax(gross)['after_tax']
        
        low, high = 0.0, 10000.0
        mid = 0.0
        for _ in range(100):
            mid = (low + high) / 2
            annual_gross = mid * trading_days
            if net_after_tax(annual_gross) > self.annual_living_costs:
                high = mid
            else:
                low = mid
        return mid
    
    def years_to_savings_goal(
        self, 
        annual_savings: float, 
        goal: float = 1_000_000
    ) -> float:
        """Calculate years to reach savings goal."""
        if annual_savings <= 0:
            return float('inf')
        return goal / annual_savings


def main():
    """Main function to run income calculator."""
    parser = argparse.ArgumentParser(description='Doberman Income Calculator (Pre-Tax)')
    parser.add_argument('--daily', type=float, help='Daily PRE-TAX income amount')
    parser.add_argument('--days', type=int, choices=[252, 365], 
                       help='Trading days per year (252 or 365)')
    parser.add_argument('--borrow', action='store_true',
                       help='Borrow for living expenses (vs use savings)')
    parser.add_argument('--all', action='store_true', 
                       help='Run all scenarios')
    parser.add_argument('--break-even', action='store_true',
                       help='Calculate break-even daily income')
    
    args = parser.parse_args()
    
    calc = IncomeCalculator()
    
    print("\n" + "="*70)
    print("MONTHLY COSTS BREAKDOWN")
    print("="*70)
    print(f"Property Costs:       ${calc.monthly_property_costs:>10,.0f}")
    print(f"Living Costs:         ${calc.monthly_living_costs:>10,.0f}")
    print(f"Operating Costs:      ${calc.monthly_operating_costs:>10,.0f}")
    print(f"{'-'*50}")
    print(f"TOTAL MONTHLY:        ${calc.total_monthly_costs:>10,.0f}")
    print(f"TOTAL ANNUAL:         ${calc.annual_living_costs:>10,.0f}")
    
    if args.break_even or args.all:
        print("\n" + "="*70)
        print("BREAK-EVEN ANALYSIS (Pre-Tax Daily Income Needed)")
        print("="*70)
        be_standard = calc.calculate_break_even(252)
        be_extended = calc.calculate_break_even(365)
        print(f"Break-even (252 days): ${be_standard:>10,.0f}/day pre-tax")
        print(f"Break-even (365 days): ${be_extended:>10,.0f}/day pre-tax")
    
    if args.daily and args.days:
        scenario = calc.calculate_scenario(args.daily, args.days, args.borrow)
        calc.print_scenario(scenario)
        
        years = calc.years_to_savings_goal(scenario['annual_savings'])
        print(f"\nYears to $1M saved:      {years:>14.1f}")
    
    elif args.all or not (args.daily or args.days):
        print("\n" + "="*70)
        print("ALL SCENARIOS (Pre-Tax Income)")
        print("="*70)
        
        scenarios = []
        for daily in [1000, 2000, 3000]:
            for days in [252, 365]:
                for borrow in [False, True]:
                    scenarios.append(calc.calculate_scenario(daily, days, borrow))
        
        calc.print_comparison_table(scenarios)
        
        print("\n" + "="*70)
        print("YEARS TO SAVE $1,000,000")
        print("="*70)
        print(f"{'Scenario':<25} {'Strategy':<10} {'Annual Save':<15} {'Years':<10}")
        print("-"*70)
        
        for daily in [1000, 2000, 3000]:
            for days in [252, 365]:
                s_savings = calc.calculate_scenario(daily, days, False)
                s_borrow = calc.calculate_scenario(daily, days, True)
                y_savings = calc.years_to_savings_goal(s_savings['annual_savings'])
                y_borrow = calc.years_to_savings_goal(s_borrow['annual_savings'])
                
                label = f"${daily:,}/day × {days}"
                print(f"{label:<25} {'Savings':<10} ${s_savings['annual_savings']:>12,.0f}  {y_savings:>8.1f}")
                print(f"{label:<25} {'Borrow':<10} ${s_borrow['annual_savings']:>12,.0f}  {y_borrow:>8.1f}")
                print()
        
        print("\n" + "="*70)
        print("COVERAGE RATIO (After-Tax Income ÷ Living Costs)")
        print("="*70)
        print(f"Annual Living Costs: ${calc.annual_living_costs:,.0f}")
        print()
        for daily in [1000, 2000, 3000]:
            for days in [252]:
                s = calc.calculate_scenario(daily, days, False)
                print(f"${daily:,}/day ({days} days): {s['coverage_ratio']:.1f}x coverage")
    
    print()


if __name__ == '__main__':
    main()
