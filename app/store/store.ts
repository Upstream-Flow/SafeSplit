// app/store/store.ts
import { create } from 'zustand';
import { Friend, Group, Transaction } from './types';
import { mockFriends, mockGroups, mockTransactions } from './mockData';

interface SafeSplitStore {
 friends: Friend[];
 groups: Group[];
 transactions: Transaction[];
 addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
 addFriend: (friend: Omit<Friend, 'id'>) => void;
 addGroup: (group: Omit<Group, 'id'>) => void;
}

type NewTransaction = Omit<Transaction, 'id' | 'date'>;
type NewFriend = Omit<Friend, 'id'>;
type NewGroup = Omit<Group, 'id'>;

export const useStore = create<SafeSplitStore>((set) => ({
 friends: mockFriends,
 groups: mockGroups,
 transactions: mockTransactions,
 
 addTransaction: (transaction: NewTransaction) => set((state) => ({
   transactions: [...state.transactions, {
     ...transaction,
     id: (state.transactions.length + 1).toString(),
     date: new Date()
   }]
 })),

 addFriend: (friend: NewFriend) => set((state) => ({
   friends: [...state.friends, {
     ...friend,
     id: (state.friends.length + 1).toString()
   }]
 })),

 addGroup: (group: NewGroup) => set((state) => ({
   groups: [...state.groups, {
     ...group,
     id: (state.groups.length + 1).toString()
   }]
 }))
}));
