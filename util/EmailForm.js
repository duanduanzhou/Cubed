//Ref from https://scottdomes.com/react-native-authentication/
import React, { useState } from 'react';
import { TouchableOpacity,Image,SafeAreaView,ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../util/token';
import * as Google from "expo-google-app-auth";

const IMAGES = {
  applelogo: require('./images/apple.png'),
  facebooklogo: require('./images/facebook.png'),
  googlelogo: require('./images/google.png'),
  loginlogo: require('./images/loginButton.png'),
};

const EmailForm = ({ isRegister,RegisterHint1,RegisterHint2,UserText,buttonText, onSubmit, children, onAuthentication }) => {
  const [email, onChangeEmail] = useState('');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    onSubmit(email, password)
      .then(async (res) => {
        await setToken(res.auth_token);
        onAuthentication();
      })
      .catch((res) => setErrorMessage(res.error));
  };

  async function signInAsync () {
   //navigation.navigate("DocumentSelect");
   console.log(" loggin in");
   try {
     const { type, user } = await Google.logInAsync({
       iosClientId: `162943866485-rout8tv8klvfb1r3cq880me6r4f25s5h.apps.googleusercontent.com`,
     });

     if (type === "success") {
       // Then you can use the Google REST API
       submit();

     }
   } catch (error) {
     console.log(" error with login", error);
   }
 };

  return (
    <SafeAreaView style={styles.container}>

    <ScrollView contentContainerStyle={styles.scrollView}>
    <Text style={styles.textsmall2}>{UserText}</Text>
    {isRegister?(
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor = "#d1d1d1"
        onChangeText={(text) => onChangeUsername(text)}
        color="white"
        value={username}
        keyboardType="email-address"
      />
    ):(
      <>{}</>
    )}

    {isRegister?(
      <Text style={styles.texttiny}>{RegisterHint1}</Text>
    ):(
      <>{}</>
    )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor = "#d1d1d1"
        onChangeText={(text) => onChangeEmail(text)}
        color="white"
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor = "#d1d1d1"
        onChangeText={(text) => onChangePassword(text)}
        color="white"
        value={password}
        secureTextEntry
      />
      {isRegister?(
        <Text style={styles.texttiny}>{RegisterHint2}</Text>
      ):(
        <>{}</>
      )}
      <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
       <TouchableOpacity style={styles.Button} onPress={signInAsync} >
         <Image
           style={styles.buttonLogo}
           source={IMAGES.applelogo}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Button} onPress={signInAsync} >
         <Image
           style={styles.buttonLogo}
           source={IMAGES.facebooklogo}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Button} onPress={signInAsync} >
         <Image
           style={styles.buttonLogo}
           source={IMAGES.googlelogo}/>
       </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={submit} >
        <Image
          style={styles.tinyLogo}
          source={IMAGES.loginlogo}/>
      </TouchableOpacity>
      </ScrollView>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {children}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 330,
    borderColor: 'gray',
    backgroundColor:'rgba(52, 52, 52, 0.9)',
    //backgroundColor: 'red',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 8
  },
  container: {
    flex: 2,
    backgroundColor: '#2c2c2c'
  },
  scrollView: {
    //backgroundColor: 'pink',
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',

  },
  textsmall1: {
    fontSize: 40,
    marginTop: 220,
    marginBottom: 10,
    marginHorizontal: 20,
    color:"white",
  },
  textsmall2: {
    fontSize: 56,
    marginTop: 180,
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: "flex-start",
    color:"white",
  },
  texttiny: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 20,
    alignItems: "flex-start",
    color:"white",
  },
  buttonLogo: {
     width: 50,
     height: 50,
     resizeMode: 'contain',
     alignSelf: "flex-start",
     marginVertical: 20,
     marginLeft: 10,
     marginHorizontal: 10,
   },
   tinyLogo: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      alignSelf: "flex-end",
      marginVertical: 20,
      marginLeft: 90,
    },

});

export default EmailForm;
