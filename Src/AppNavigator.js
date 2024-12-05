import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';

import Login from './Screen/Login';
import DeptHome from './Screen/DeptScreen/DeptHome';
import UserHome from './Screen/CustomerScreen/UserHome';
import Menubar from './Screen/CustomerScreen/Menubar';
import NocForm from './Screen/CustomerScreen/NocForm';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserHome" component={UserHome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="DeptHome" component={DeptHome} options={{ headerShown: false }} />
      <Stack.Screen name="Menubar" component={Menubar} options={{ headerShown: false }} />
      <Stack.Screen name="NocForm" component={NocForm} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default AppNavigator;