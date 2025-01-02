import { View, StyleSheet } from 'react-native';
import { List, SegmentedButtons, TextInput } from 'react-native-paper';
import { useStore } from '../../store/store';

interface SplitStepProps {
  splitType: 'equal' | 'custom';
  selectedFriends: string[];
  customSplits: Record<string, number>;
  onChangeSplitType: (type: 'equal' | 'custom') => void;
  onChangeCustomSplit: (friendId: string, amount: string) => void;
}

export function SplitStep({
  splitType,
  selectedFriends,
  customSplits,
  onChangeSplitType,
  onChangeCustomSplit
}: SplitStepProps) {
  const { friends } = useStore();
  
  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={splitType}
        onValueChange={onChangeSplitType}
        buttons={[
          { value: 'equal', label: 'Split Equally' },
          { value: 'custom', label: 'Custom Split' }
        ]}
        style={styles.buttons}
      />
      
      {selectedFriends.map(friendId => {
        const friend = friends.find(f => f.id === friendId);
        if (!friend) return null;
        
        return (
          <List.Item
            key={friend.id}
            title={friend.name}
            right={() => 
              splitType === 'custom' ? (
                <TextInput
                  value={customSplits[friendId]?.toString() || ''}
                  onChangeText={(text) => onChangeCustomSplit(friendId, text)}
                  keyboardType="decimal-pad"
                  style={styles.splitInput}
                />
              ) : null
            }
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    marginBottom: 16,
  },
  splitInput: {
    width: 100,
  },
});
