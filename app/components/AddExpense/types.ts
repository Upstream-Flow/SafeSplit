export interface ExpenseData {
  amount: string;
  description: string;
  paidBy: string;
  splitBetween: string[];
  splitType: 'equal' | 'custom';
  customSplits?: Record<string, number>;
}
