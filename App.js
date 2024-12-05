import React from 'react';
import AppNavigator from './Src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { RoleProvider } from './Src/context/RoleProvider';
const App = () => {
  return (
    <RoleProvider>
     <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </RoleProvider>
  
  )
};

export default App;
