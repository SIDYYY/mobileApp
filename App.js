import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/pages/Home';
import CarsPage from './src/pages/CarPage';
import CarDetail from './src/pages/CarInfo';
import CompareCar from './src/pages/CompareCar';
import DisplayComparison from './src/pages/DisplayComparison';
import Dealer from './src/pages/Dealer';
import DealerDetail from './src/pages/DealerDetail';
import CalculatorLoan from './src/pages/LoanCalculator';
import LoadingScreen from './src/pages/LoadingScreen';
import AboutUs from './src/pages/AboutUS';
import { Ionicons } from 'react-native-vector-icons'; // For tab icons

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cars') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Dealers') {
            iconName = focused ? 'business' : 'business-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }
          else if (route.name === 'About Us') {
            iconName = focused ? 'information-circle' : 'information-circle-outline'; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        "tabBarActiveTintColor": "#000",
        "tabBarInactiveTintColor": "gray",
        "tabBarStyle": [
          {
            "display": "flex",
          },
          null
        ]
      })} 
    >
      {/* TABS MENU */}
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false}} />
      <Tab.Screen name="About Us" component={AboutUs} options={{ title: 'About Us'}} />
      <Tab.Screen name="Cars" component={CarsPage} options={{ title: 'Explore Cars' }} />
      <Tab.Screen name="Dealers" component={Dealer} options={{ title: 'Authorized Dealers' }} />
      <Tab.Screen name="Calculator" component={CalculatorLoan} options={{ title: 'Loan Calculator' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />

        <Stack.Screen name="CarInfo" component={CarDetail} options={{ title: 'Car Details' }} />
        <Stack.Screen name="CompareCar" component={CompareCar} options={{ title: 'Explore other Cars' }} />
        <Stack.Screen name="CarComparison" component={DisplayComparison} options={{ title: 'Comparison' }} />
        <Stack.Screen name="DealerDetails" component={DealerDetail} options={{ title: 'Dealer Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
