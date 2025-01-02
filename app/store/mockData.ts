import { Friend, Group, Transaction } from './types';

// Define 20 friends with diverse names and backgrounds
export const mockFriends: Friend[] = [
    { id: '1', name: 'Aryan Singh', email: 'aryan.singh@example.com', recentActivity: true, balance: 100.00 },
    { id: '2', name: 'Priya Patel', email: 'priya.patel@example.com', recentActivity: false, balance: -50.00 },
    { id: '3', name: 'Rohan Kapoor', email: 'rohan.kapoor@example.com', recentActivity: true, balance: 75.00 },
    { id: '4', name: 'Diya Sharma', email: 'diya.sharma@example.com', recentActivity: false, balance: 25.00 },
    { id: '5', name: 'Akash Mishra', email: 'akash.mishra@example.com', recentActivity: true, balance: -25.00 },
    { id: '6', name: 'Nisha Gupta', email: 'nisha.gupta@example.com', recentActivity: false, balance: 50.00 },
    { id: '7', name: 'Sahil Jain', email: 'sahil.jain@example.com', recentActivity: true, balance: 0.00 },
    { id: '8', name: 'Tanvi Desai', email: 'tanvi.desai@example.com', recentActivity: false, balance: 30.00 },
    { id: '9', name: 'Vedant Singh', email: 'vedant.singh@example.com', recentActivity: true, balance: -10.00 },
    { id: '10', name: 'Anjali Rao', email: 'anjali.rao@example.com', recentActivity: false, balance: 40.00 },
    { id: '11', name: 'Ethan Carter', email: 'ethan.carter@example.com', recentActivity: true, balance: 60.00 },
    { id: '12', name: 'Emily Johnson', email: 'emily.johnson@example.com', recentActivity: false, balance: -30.00 },
    { id: '13', name: 'Noah Brown', email: 'noah.brown@example.com', recentActivity: true, balance: 80.00 },
    { id: '14', name: 'Olivia Smith', email: 'olivia.smith@example.com', recentActivity: false, balance: 15.00 },
    { id: '15', name: 'Liam Wilson', email: 'liam.wilson@example.com', recentActivity: true, balance: -45.00 },
    { id: '16', name: 'Ava Taylor', email: 'ava.taylor@example.com', recentActivity: false, balance: 20.00 },
    { id: '17', name: 'Marco Martinez', email: 'marco.martinez@example.com', recentActivity: true, balance: 90.00 },
    { id: '18', name: 'Li Wei', email: 'li.wei@example.com', recentActivity: false, balance: -60.00 },
    { id: '19', name: 'Ahmed Khan', email: 'ahmed.khan@example.com', recentActivity: true, balance: 25.00 },
    { id: '20', name: 'Sofia Lopez', email: 'sofia.lopez@example.com', recentActivity: false, balance: 10.00 }
];

// Define 5 groups with diverse members
export const mockGroups: Group[] = [
    {
        id: '1',
        name: 'Book Club',
        members: [mockFriends[1], mockFriends[11], mockFriends[17]],
        balance: 150.00
    },
    {
        id: '2',
        name: 'Gym Buddies',
        members: [mockFriends[3], mockFriends[7], mockFriends[13]],
        balance: 200.00
    },
    {
        id: '3',
        name: 'Study Group',
        members: [mockFriends[5], mockFriends[9], mockFriends[15]],
        balance: 125.00
    },
    {
        id: '4',
        name: 'Cooking Enthusiasts',
        members: [mockFriends[2], mockFriends[6], mockFriends[19]],
        balance: 150.00
    },
    {
        id: '5',
        name: 'Travel Pals',
        members: [mockFriends[4], mockFriends[10], mockFriends[18]],
        balance: 225.00
    }
];

export const mockTransactions: Transaction[] = [
    {
        id: '1',
        amount: 150.00,
        description: 'Dinner at Italian Restaurant',
        paidBy: mockFriends[0], // Friend 1
        splitBetween: [mockFriends[0], mockFriends[1], mockFriends[2]], // Friend 1, 2, 3
        date: new Date('2024-01-01')
    },
    {
        id: '2',
        amount: 100.00,
        description: 'Groceries',
        paidBy: mockFriends[3], // Friend 4
        splitBetween: [mockFriends[3], mockFriends[4], mockFriends[5]], // Friend 4, 5, 6
        date: new Date('2024-01-02')
    },
    {
        id: '3',
        amount: 80.00,
        description: 'Movie Tickets',
        paidBy: mockFriends[6], // Friend 7
        splitBetween: [mockFriends[6], mockFriends[7], mockFriends[8]], // Friend 7, 8, 9
        date: new Date('2024-01-03')
    },
    {
        id: '4',
        amount: 70.00,
        description: 'Gas for the car',
        paidBy: mockFriends[9], // Friend 10
        splitBetween: [mockFriends[9], mockFriends[10]], // Friend 10, 11
        date: new Date('2024-01-04')
    },
    {
        id: '5',
        amount: 90.00,
        description: 'Lunch with colleagues',
        paidBy: mockFriends[11], // Friend 12
        splitBetween: [mockFriends[11], mockFriends[12], mockFriends[13]], // Friend 12, 13, 14
        date: new Date('2024-01-05')
    },
    {
        id: '6',
        amount: 60.00,
        description: 'Shopping',
        paidBy: mockFriends[14], // Friend 15
        splitBetween: [mockFriends[14], mockFriends[15]], // Friend 15, 16
        date: new Date('2024-01-06')
    },
    {
        id: '7',
        amount: 50.00,
        description: 'Book purchase',
        paidBy: mockFriends[16], // Friend 17
        splitBetween: [mockFriends[16], mockFriends[17], mockFriends[18]], // Friend 17, 18, 19
        date: new Date('2024-01-07')
    },
    {
        id: '8',
        amount: 40.00,
        description: 'Coffee with friends',
        paidBy: mockFriends[19], // Friend 20
        splitBetween: [mockFriends[19], mockFriends[0], mockFriends[1]], // Friend 20, 1, 2
        date: new Date('2024-01-08')
    },
    {
        id: '9',
        amount: 120.00,
        description: 'Electricity bill',
        paidBy: mockFriends[2], // Friend 3
        splitBetween: mockGroups[0].members, // Group 1 members
        groupId: '1',
        date: new Date('2024-01-09')
    },
    {
        id: '10',
        amount: 80.00,
        description: 'Internet bill',
        paidBy: mockFriends[4], // Friend 5
        splitBetween: mockGroups[1].members, // Group 2 members
        groupId: '2',
        date: new Date('2024-01-10')
    },
    {
        id: '11',
        amount: 110.00,
        description: 'Restaurant bill',
        paidBy: mockFriends[6], // Friend 7
        splitBetween: mockGroups[2].members, // Group 3 members
        groupId: '3',
        date: new Date('2024-01-11')
    },
    {
        id: '12',
        amount: 100.00,
        description: 'Party expenses',
        paidBy: mockFriends[8], // Friend 9
        splitBetween: mockGroups[3].members, // Group 4 members
        groupId: '4',
        date: new Date('2024-01-12')
    },
    {
        id: '13',
        amount: 150.00,
        description: 'Trip expenses',
        paidBy: mockFriends[10], // Friend 11
        splitBetween: mockGroups[4].members, // Group 5 members
        groupId: '5',
        date: new Date('2024-01-13')
    },
    {
        id: '14',
        amount: 130.00,
        description: 'Hotel stay',
        paidBy: mockFriends[12], // Friend 13
        splitBetween: [mockFriends[12], mockFriends[13], mockFriends[14]], // Friend 13, 14, 15
        date: new Date('2024-01-14')
    },
    {
        id: '15',
        amount: 70.00,
        description: 'Meal out',
        paidBy: mockFriends[16], // Friend 17
        splitBetween: [mockFriends[16], mockFriends[17]], // Friend 17, 18
        date: new Date('2024-01-15')
    },
    {
        id: '16',
        amount: 80.00,
        description: 'Shopping spree',
        paidBy: mockFriends[18], // Friend 19
        splitBetween: [mockFriends[18], mockFriends[19]], // Friend 19, 20
        date: new Date('2024-01-16')
    },
    {
        id: '17',
        amount: 60.00,
        description: 'Gifts',
        paidBy: mockFriends[1], // Friend 2
        splitBetween: [mockFriends[1], mockFriends[2], mockFriends[3]], // Friend 2, 3, 4
        date: new Date('2024-01-17')
    },
    {
        id: '18',
        amount: 90.00,
        description: 'Medical bills',
        paidBy: mockFriends[5], // Friend 6
        splitBetween: [mockFriends[5], mockFriends[6], mockFriends[7]], // Friend 6, 7, 8
        date: new Date('2024-01-18')
    },
    {
        id: '19',
        amount: 100.00,
        description: 'Fitness class',
        paidBy: mockFriends[9], // Friend 10
        splitBetween: [mockFriends[9], mockFriends[10], mockFriends[11]], // Friend 10, 11, 12
        date: new Date('2024-01-19')
    },
    {
        id: '20',
        amount: 120.00,
        description: 'Concert tickets',
        paidBy: mockFriends[13], // Friend 14
        splitBetween: [mockFriends[13], mockFriends[14], mockFriends[15]], // Friend 14, 15, 16
        date: new Date('2024-01-20')
    }
];
