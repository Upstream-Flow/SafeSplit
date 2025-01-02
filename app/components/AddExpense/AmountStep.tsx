import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

interface AmountStepProps {
  amount: string;
  description: string;
  onChangeAmount: (text: string) => void;
  onChangeDescription: (text: string) => void;
}

export function AmountStep({ 
  amount, 
  description, 
  onChangeAmount, 
  onChangeDescription 
}: AmountStepProps) {
  return (
    <View style={styles.container}>
      <TextInput
        label="Amount"
        value={amount}
        onChangeText={onChangeAmount}
        keyboardType="decimal-pad"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={onChangeDescription}
        style={styles.input}
        mode="outlined"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 16,
  },
});
