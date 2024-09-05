import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/Home';
import CarsPage from './src/pages/CarPage';
import CarDetail from './src/pages/CarInfo'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Cars"
          component={CarsPage} 
          options={{ title: 'Explore Cars' }}
        />
        <Stack.Screen 
          name="CarInfo"
          component={CarDetail} 
          options={{ title: 'Car Information' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

