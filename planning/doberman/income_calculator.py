#!/usr/bin/env python3
"""
Doberman Income Calculator
Calculates and compares trading income to monthly costs for 222 Towhee Ln residence
"""

import argparse
from typing import Dict, List, Tuple, Optional


class IncomeCalculator:
    """Calculate income scenarios and compare to living costs."""
    
    def __init__(self):
        # Monthly costs (from financial analysis)
        self.monthly_property_costs = 3450  # midpoint of $3,334-3,564
        self.monthly_living_costs = 2450    # midpoint of $2,108-2,808
        self.monthly_operating_costs = 1500  # midpoint of $1,000-2,000
        self.total_monthly_costs = (
            self.monthly_property_costs + 
            self.monthly_living_costs + 
            self.monthly_operating_costs
        )
        
        # Trading day scenarios
        self.trading_days_standard = 252   # US market trading days
        self.trading_days_extended = 365   # Crypto/always-open markets
        
    def calculate_scenario(
        self, 
        daily_income: float, 
        trading_days: int,
        operating_costs_monthly: Optional[float] = None
    ) -> Dict:
        """Calculate income scenario."""
        
        if operating_costs_monthly is None:
            operating_costs_monthly = self.monthly_operating_costs
            
        annual_gross = daily_income * trading_days
        monthly_gross = annual_gross / 12
        annual_operating = operating_costs_monthly * 12
        
        annual_net = annual_gross - annual_operating
        monthly_net = annual_net / 12
        
        monthly_surplus = monthly_net - self.total_monthly_costs
        annual_surplus = monthly_surplus * 12
        
        coverage_ratio = monthly_net / self.total_monthly_costs
        
        return {
            'daily_income': daily_income,
            'trading_days': trading_days,
            'annual_gross': annual_gross,
            'monthly_gross': monthly_gross,
            'annual_operating': annual_operating,
            'annual_net': annual_net,
            'monthly_net': monthly_net,
            'monthly_surplus': monthly_surplus,
            'annual_surplus': annual_surplus,
            'coverage_ratio': coverage_ratio,
            'total_monthly_costs': self.total_monthly_costs
        }
    
    def print_scenario(self, scenario: Dict) -> None:
        """Print scenario details."""
        print(f"\n{'='*60}")
        print(f"Daily Income: ${scenario['daily_income']:,.0f}")
        print(f"Trading Days: {scenario['trading_days']}")
        print(f"{'='*60}")
        print(f"\nAnnual Gross Income:    ${scenario['annual_gross']:>12,.0f}")
        print(f"Monthly Gross Income:   ${scenario['monthly_gross']:>12,.0f}")
        print(f"Annual Operating Costs: ${scenario['annual_operating']:>12,.0f}")
        print(f"\nAnnual Net Income:      ${scenario['annual_net']:>12,.0f}")
        print(f"Monthly Net Income:     ${scenario['monthly_net']:>12,.0f}")
        print(f"\nMonthly Living Costs:   ${scenario['total_monthly_costs']:>12,.0f}")
        print(f"Monthly Surplus:        ${scenario['monthly_surplus']:>12,.0f}")
        print(f"Annual Surplus:         ${scenario['annual_surplus']:>12,.0f}")
        print(f"\nCoverage Ratio:         {scenario['coverage_ratio']:>12.2f}x")
        
    def print_comparison_table(self, scenarios: List[Dict]) -> None:
        """Print comparison table of multiple scenarios."""
        print(f"\n{'='*100}")
        print(f"{'Daily Income':<15} {'Days':<6} {'Annual Gross':<15} {'Monthly Net':<15} {'Monthly Surplus':<18} {'Coverage':<10}")
        print(f"{'='*100}")
        
        for s in scenarios:
            print(f"${s['daily_income']:>12,.0f}   {s['trading_days']:<6} "
                  f"${s['annual_gross']:>12,.0f}   ${s['monthly_net']:>12,.0f}   "
                  f"${s['monthly_surplus']:>15,.0f}   {s['coverage_ratio']:>8.2f}x")
        
        print(f"{'='*100}")
    
    def calculate_break_even(self, trading_days: int) -> float:
        """Calculate break-even daily income."""
        annual_costs = self.total_monthly_costs * 12
        break_even_daily = annual_costs / trading_days
        return break_even_daily
    
    def years_to_savings_goal(
        self, 
        annual_surplus: float, 
        goal: float = 1_000_000
    ) -> float:
        """Calculate years to reach savings goal."""
        if annual_surplus <= 0:
            return float('inf')
        return goal / annual_surplus


def main():
    """Main function to run income calculator."""
    parser = argparse.ArgumentParser(description='Doberman Income Calculator')
    parser.add_argument('--daily', type=float, help='Daily income amount')
    parser.add_argument('--days', type=int, choices=[252, 365], 
                       help='Trading days per year (252 or 365)')
    parser.add_argument('--all', action='store_true', 
                       help='Run all scenarios')
    parser.add_argument('--break-even', action='store_true',
                       help='Calculate break-even daily income')
    
    args = parser.parse_args()
    
    calc = IncomeCalculator()
    
    # Print cost breakdown
    print("\n" + "="*60)
    print("MONTHLY COSTS BREAKDOWN")
    print("="*60)
    print(f"Property Costs:     ${calc.monthly_property_costs:>10,.0f}")
    print(f"Living Costs:       ${calc.monthly_living_costs:>10,.0f}")
    print(f"Operating Costs:    ${calc.monthly_operating_costs:>10,.0f}")
    print(f"{'-'*40}")
    print(f"TOTAL MONTHLY:      ${calc.total_monthly_costs:>10,.0f}")
    print(f"TOTAL ANNUAL:       ${calc.total_monthly_costs * 12:>10,.0f}")
    
    # Break-even analysis
    if args.break_even or args.all:
        print("\n" + "="*60)
        print("BREAK-EVEN ANALYSIS")
        print("="*60)
        be_standard = calc.calculate_break_even(252)
        be_extended = calc.calculate_break_even(365)
        print(f"Break-even daily income (252 days): ${be_standard:>10,.0f}")
        print(f"Break-even daily income (365 days): ${be_extended:>10,.0f}")
    
    # Single scenario
    if args.daily and args.days:
        scenario = calc.calculate_scenario(args.daily, args.days)
        calc.print_scenario(scenario)
        
        # Years to $1M
        years = calc.years_to_savings_goal(scenario['annual_surplus'])
        print(f"\nYears to save $1M:     {years:>12.1f}")
    
    # All scenarios
    elif args.all or not (args.daily or args.days):
        print("\n" + "="*60)
        print("ALL SCENARIOS")
        print("="*60)
        
        scenarios = [
            calc.calculate_scenario(1000, 252),
            calc.calculate_scenario(1000, 365),
            calc.calculate_scenario(2000, 252),
            calc.calculate_scenario(2000, 365),
            calc.calculate_scenario(3000, 252),
            calc.calculate_scenario(3000, 365),
        ]
        
        calc.print_comparison_table(scenarios)
        
        # Years to $1M for each scenario
        print("\n" + "="*60)
        print("YEARS TO SAVE $1,000,000")
        print("="*60)
        for s in scenarios:
            years = calc.years_to_savings_goal(s['annual_surplus'])
            print(f"${s['daily_income']:,.0f}/day ({s['trading_days']} days): "
                  f"{years:.1f} years")
    
    # Risk analysis
    if args.all:
        print("\n" + "="*60)
        print("RISK ANALYSIS")
        print("="*60)
        print(f"Emergency Fund (6 months): ${calc.total_monthly_costs * 6:>12,.0f}")
        print(f"Emergency Fund (12 months): ${calc.total_monthly_costs * 12:>12,.0f}")
        
        # Scenario with income reduction
        print("\nIncome Stress Test:")
        for reduction in [0.5, 0.3, 0.2]:
            reduced_income = 1000 * (1 - reduction)
            scenario = calc.calculate_scenario(reduced_income, 252)
            status = "COVERED" if scenario['monthly_surplus'] > 0 else "DEFICIT"
            print(f"  ${reduced_income:>6,.0f}/day (50% reduction): "
                  f"${scenario['monthly_surplus']:>8,.0f}/mo [{status}]")
    
    print()


if __name__ == '__main__':
    main()
