/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/home';
import { HomeSecond } from './screens/homeSecond';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeSecond">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeSecond" component={HomeSecond} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
