import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryData';
import Scanner from '../screens/Scanner';
import ViewDetailsScreen from '../screens/ViewDetailScreen';
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="ViewDetailsScreen" component={ViewDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
