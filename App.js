import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './util/LoginScreen';
import HomeScreen from './util/HomeScreen';
import CreateAccountScreen from './util/CreateAccountScreen';
import DocumentSelectScreen from './util/DocumentSelectScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountScreen,
    DocumentSelect: DocumentSelectScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
