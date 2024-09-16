import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import HomePage from './src/pages/Home';
import Welcome from './src/pages/WelcomeScreen';
import Compare from './src/pages/CompareCar';
import List from './src/pages/GeneralList';
import Model from './src/pages/Models';
import Both from './src/pages/Compare';
import Variant from './src/pages/Variant';
import Details from './src/pages/CarDetails'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabIcon({ route, focused, color }) {
  let iconName;
  let backgroundColor = focused ? '#fff' : 'transparent'; // Background color for selected tab
  
  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Compare Car') {
    iconName = focused ? 'car' : 'car-outline';
  }

  return (
    <View style={[styles.iconContainer, { backgroundColor }]}>
      <Ionicons name={iconName} size={30} color={focused ? '#ECAE36' : '#888'} />
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => <TabIcon route={route} {...props} />,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#ECAE36',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Compare Car" component={Compare} options={{ title: 'Compare Car' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{title: 'Choose a Car Brand for Comparison'}}/>
        <Stack.Screen name="Model" component={Model} options={{title: 'Choose a Car Model for Comparison'}}/>
        <Stack.Screen name="Both" component={Both} options={{title: 'Choose Model for Comparison'}}/>
        <Stack.Screen name="Variant" component={Variant} options={{title: 'Choose Model Variant for Comparison'}}/>
        <Stack.Screen name="Details" component={Details} options={{title: 'Car Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // Background color of the tab bar
    paddingVertical: 15,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 40, // Adjusted size
    height: 40, // Adjusted size
    borderRadius: 20, // Circle
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#ECAE36', // Default background color
  },
});
