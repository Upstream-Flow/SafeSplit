// app/(tabs)/index.tsx
'use client';

import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, FAB, List, Avatar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useStore } from '../store/store';
import { format } from 'date-fns';

export default function HomeScreen() {
 const router = useRouter();
 const { transactions, friends } = useStore();
 const recentTransactions = transactions.slice(0, 5);
 const recentFriends = friends.filter(f => f.recentActivity);

 const totalBalance = friends.reduce((sum, friend) => sum + friend.balance, 0);

 return (
   <View style={styles.container}>
     <ScrollView>
       <Card style={styles.balanceCard}>
         <Card.Content>
           <Text variant="titleLarge">Total Balance</Text>
           <Text variant="displaySmall" style={totalBalance >= 0 ? styles.positive : styles.negative}>
             ${Math.abs(totalBalance).toFixed(2)}
           </Text>
         </Card.Content>
       </Card>

       <Text variant="titleMedium" style={styles.sectionTitle}>Recent Activity</Text>
       {recentTransactions.map(transaction => (
         <List.Item
           key={transaction.id}
           title={transaction.description}
           description={format(transaction.date, 'MMM d, yyyy')}
           left={props => (
             <Avatar.Text 
               {...props} 
               label={transaction.paidBy.name[0]} 
               size={40}
             />
           )}
           right={() => (
             <Text 
               variant="bodyLarge"
               style={styles.amount}
             >
               ${transaction.amount.toFixed(2)}
             </Text>
           )}
         />
       ))}

       <Text variant="titleMedium" style={styles.sectionTitle}>Recent Friends</Text>
       {recentFriends.map(friend => (
         <List.Item
           key={friend.id}
           title={friend.name}
           description={`Balance: $${Math.abs(friend.balance).toFixed(2)}`}
           left={props => (
             <Avatar.Text 
               {...props} 
               label={friend.name[0]} 
               size={40}
             />
           )}
         />
       ))}
     </ScrollView>
     
     <FAB
       icon="plus"
       style={styles.fab}
       onPress={() => router.push('/add-expense')}
       color="#fff"
     />
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
 },
 balanceCard: {
   margin: 16,
   backgroundColor: '#f8fafc',
 },
 sectionTitle: {
   padding: 16,
   paddingBottom: 8,
 },
 amount: {
   alignSelf: 'center',
   fontWeight: '600',
 },
 positive: {
   color: '#16a34a',
 },
 negative: {
   color: '#dc2626',
 },
 fab: {
   position: 'absolute',
   margin: 16,
   right: 0,
   bottom: 0,
   backgroundColor: '#6366f1',
 },
});