import React from 'react';
import AppNavigator from './Src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
};

export default App;
