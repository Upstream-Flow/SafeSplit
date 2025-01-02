export interface Friend {
    id: string;
    name: string;
    email: string;
    recentActivity: boolean;
    balance: number;
  }
  
export interface Group {
    id: string;
    name: string;
    members: Friend[];
    balance: number;
}
  
export interface Transaction {
    id: string;
    amount: number;
    description: string;
    paidBy: Friend;
    splitBetween: Friend[];
    groupId?: string;
    date: Date;
}
