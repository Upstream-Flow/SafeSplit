import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('AddExpense')}
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6366f1',
  },
});
