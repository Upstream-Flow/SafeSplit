// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: '#6366f1' },
      headerTintColor: '#fff',
      tabBarActiveTintColor: '#6366f1',
    }}>

      <Tabs.Screen 
        name="layout"
        options={{
          href: null, // This hides the tab
        }}
      />
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="friends"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="groups"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}