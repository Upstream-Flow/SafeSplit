import { View, StyleSheet } from 'react-native';
import { List, Searchbar, Avatar, Chip } from 'react-native-paper';
import { useStore } from '../../store/store';
import { useState } from 'react';

interface FriendStepProps {
  selectedFriends: string[];
  onSelectFriend: (friendId: string) => void;
}

export function FriendStep({ selectedFriends, onSelectFriend }: FriendStepProps) {
  const { friends } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search friends"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
      
      <View style={styles.selectedContainer}>
        {selectedFriends.map(friendId => {
          const friend = friends.find(f => f.id === friendId);
          if (!friend) return null;
          return (
            <Chip 
              key={friend.id}
              onPress={() => onSelectFriend(friend.id)}
              style={styles.chip}
            >
              {friend.name}
            </Chip>
          );
        })}
      </View>

      {filteredFriends.map(friend => (
        <List.Item
          key={friend.id}
          title={friend.name}
          left={props => (
            <Avatar.Text {...props} label={friend.name[0]} size={40} />
          )}
          onPress={() => onSelectFriend(friend.id)}
          style={selectedFriends.includes(friend.id) ? styles.selected : null}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    marginBottom: 16,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
  },
  selected: {
    backgroundColor: '#f1f5f9',
  },
});
