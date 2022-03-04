import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './util/LoginScreen';
import HomeScreen from './util/HomeScreen';
import CreateAccountScreen from './util/CreateAccountScreen';
import DocumentSelectScreen from './util/DocumentSelectScreen';

/*const AppNavigator = createStackNavigator(
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
*/
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DocumentSelect" options={{title: 'Document Select',}} component={DocumentSelectScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
}

//export default createAppContainer(AppNavigator);

export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
}
