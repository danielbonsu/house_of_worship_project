import 'react-native-gesture-handler';
import {
  NavigationContainer,
  BaseRouter,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import React, { useState, Fragment } from 'react';
import LoginScreen from './components/Screens/LoginScreen';
import SignUpScreen from './components/Screens/SignUpScreen';
import PodcastScreen from './components/Screens/PodcastScreen';

import PastorDetails from './components/Staff/PastorDetailsCard';

import HomeScreen from './components/Screens/HomeScreen';
import ForgotPassword from './components/Screens/ForgotPasswordScreen';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name='Sign-Up'
            component={SignUpScreen}
          ></Stack.Screen>

          <Stack.Screen
            name='PastorDetails'
            component={PastorDetails}
            options={({ route }) => ({
              title: route.params.name,
            })}
          ></Stack.Screen>
          <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
          ></Stack.Screen>

          <Stack.Screen
            name='Podcast'
            component={PodcastScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
