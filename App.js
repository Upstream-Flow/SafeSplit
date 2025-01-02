// Screens
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import FriendsScreen from './screens/FriendsScreen';
import GroupsScreen from './screens/GroupsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6366f1',
        },
        headerTintColor: '#fff',
        tabBarStyle: { paddingBottom: 5 },
        tabBarActiveTintColor: '#6366f1',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Groups" component={GroupsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddExpense"
              component={AddExpenseScreen}
              options={{
                presentation: 'modal',
                title: 'Add Expense',
                headerStyle: {
                  backgroundColor: '#6366f1',
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
