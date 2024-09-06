import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/Home';
import CarsPage from './src/pages/CarPage';
import CarDetail from './src/pages/CarInfo'
import CompareCar from './src/pages/CompareCar'
import DisplayComparison from './src/pages/DisplayComparison'
import Dealer from './src/pages/Dealer'
import DealerDetail from './src/pages/DealerDetail'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="Home" component={HomePage} options={{ title: 'KOSHI Dealer - Home' }}/>
      <Stack.Screen name="Cars" component={CarsPage} options={{ title: 'Explore Cars' }}/>
      <Stack.Screen name="CarInfo" component={CarDetail} options={{ title: 'Car Details' }}/>
      <Stack.Screen name="CompareCar" component={CompareCar} options={{ title: 'Explore other Cars' }}/>
      <Stack.Screen name="CarComparison" component={DisplayComparison} options={{ title: 'Comparison' }}/>
      <Stack.Screen name="Dealer" component={Dealer} options={{ title: 'Authorized Dealers' }}/>
      <Stack.Screen name="DealerDetails" component={DealerDetail} options={{ title: 'Dealer Details' }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

