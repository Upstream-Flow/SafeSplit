import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function AddExpenseScreen({ navigation }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // TODO: Add expense logic
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.form}>
        <TextInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="decimal-pad"
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          mode="outlined"
        />
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
          buttonColor="#6366f1">
          Add Expense
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});
