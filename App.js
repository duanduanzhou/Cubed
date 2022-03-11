import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Image,TouchableOpacity,StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './util/LoginScreen';
import HomeScreen from './util/HomeScreen';
import CreateAccountScreen from './util/CreateAccountScreen';
import DocumentSelectScreen from './util/DocumentSelectScreen';
import ProfileScreen from './util/ProfileScreen'

const IMAGES = {
  facebooklogo: require('./warn.png'),
};

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login"options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="DocumentSelect"
      options={{
          title: "",
          headerBackTitle:"Logout",
          headerStyle: {
            backgroundColor: '#2c2c2c',
            height: 100,
          },
          headerRight: () => (

            <TouchableOpacity style={styles.Button} onPress={() => alert('This is a button!')} >
              <Image
                style={styles.buttonLogo}
                source={IMAGES.facebooklogo}/>
            </TouchableOpacity>

          ),
        }}
      component={DocumentSelectScreen} />
      <Stack.Screen name="CreateAccount" options={{headerShown: false}} component={CreateAccountScreen} />
      <Stack.Screen name="Profile" 
      options={{
        title: "",
        headerBackTitle:"Home",
        headerStyle: {
          backgroundColor: '#2c2c2c',
          height: 100,
        },
      }}
      component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  buttonLogo: {
     width: 30,
     height: 30,
   },


});
