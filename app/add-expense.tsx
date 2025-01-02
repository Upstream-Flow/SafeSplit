import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Searchbar, Chip, List, Avatar, SegmentedButtons } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useStore } from './store/store';
import { useState } from 'react';

export default function AddExpense() {
  const router = useRouter();
  const { friends, addTransaction } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [splitType, setSplitType] = useState<'equal' | 'custom'>('equal');
  const [customSplits, setCustomSplits] = useState<Record<string, string>>({});

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectFriend = (friendId: string) => {
    setSelectedFriends(prev => 
      prev.includes(friendId) 
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId]
    );
    if (!paidBy) setPaidBy(friendId);
  };

  const handleSubmit = () => {
    if (!amount || !description || !paidBy || selectedFriends.length === 0) return;

    const paidByFriend = friends.find(f => f.id === paidBy);
    const splitBetweenFriends = friends.filter(f => selectedFriends.includes(f.id));
    
    if (paidByFriend && splitBetweenFriends.length > 0) {
      addTransaction({
        amount: parseFloat(amount),
        description,
        paidBy: paidByFriend,
        splitBetween: splitBetweenFriends
      });
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Friend Selection */}
        <View style={styles.section}>
          <Searchbar
            placeholder="Search friends"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
          />
          
          <ScrollView horizontal style={styles.selectedContainer}>
            {selectedFriends.map(friendId => {
              const friend = friends.find(f => f.id === friendId);
              if (!friend) return null;
              return (
                <Chip 
                  key={friend.id}
                  onPress={() => handleSelectFriend(friend.id)}
                  style={styles.chip}
                >
                  {friend.name}
                </Chip>
              );
            })}
          </ScrollView>

          {filteredFriends.map(friend => (
            <List.Item
              key={friend.id}
              title={friend.name}
              left={props => (
                <Avatar.Text {...props} label={friend.name[0]} size={40} />
              )}
              onPress={() => handleSelectFriend(friend.id)}
              style={[
                styles.friendItem,
                selectedFriends.includes(friend.id) && styles.selectedFriend
              ]}
            />
          ))}
        </View>

        {/* Amount & Description */}
        <View style={styles.section}>
          <TextInput
            label="Description"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
            style={styles.input}
            mode="outlined"
          />
        </View>

        {/* Paid By & Split Options */}
        <View style={styles.section}>
          <List.Subheader>Paid by</List.Subheader>
          <ScrollView horizontal style={styles.paidByContainer}>
            {selectedFriends.map(friendId => {
              const friend = friends.find(f => f.id === friendId);
              if (!friend) return null;
              return (
                <Chip
                  key={friend.id}
                  selected={paidBy === friend.id}
                  onPress={() => setPaidBy(friend.id)}
                  style={styles.chip}
                >
                  {friend.name}
                </Chip>
              );
            })}
          </ScrollView>

          <List.Subheader>Split type</List.Subheader>
          <SegmentedButtons
            value={splitType}
            onValueChange={value => setSplitType(value as 'equal' | 'custom')}
            buttons={[
              { value: 'equal', label: 'Equal' },
              { value: 'custom', label: 'Custom' }
            ]}
            style={styles.splitButtons}
          />

          {splitType === 'custom' && selectedFriends.map(friendId => {
            const friend = friends.find(f => f.id === friendId);
            if (!friend) return null;
            return (
              <View key={friend.id} style={styles.customSplitRow}>
                <List.Item
                  title={friend.name}
                  left={props => (
                    <Avatar.Text {...props} label={friend.name[0]} size={40} />
                  )}
                />
                <TextInput
                  value={customSplits[friendId] || ''}
                  onChangeText={(text) => setCustomSplits(prev => ({
                    ...prev,
                    [friendId]: text
                  }))}
                  keyboardType="decimal-pad"
                  style={styles.splitInput}
                  mode="outlined"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Button 
        mode="contained" 
        onPress={handleSubmit}
        style={styles.submitButton}
        disabled={!amount || !description || !paidBy || selectedFriends.length === 0}
      >
        Add Expense
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  searchbar: {
    marginBottom: 16,
  },
  selectedContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
  },
  friendItem: {
    paddingVertical: 8,
  },
  selectedFriend: {
    backgroundColor: '#f1f5f9',
  },
  input: {
    marginBottom: 16,
  },
  paidByContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  splitButtons: {
    marginBottom: 16,
  },
  customSplitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  splitInput: {
    width: 100,
  },
  submitButton: {
    margin: 16,
  },
});