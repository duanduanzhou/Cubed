import React, { useState } from 'react';
import { SafeAreaView,ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../util/token';

const EmailForm = ({ UserText,buttonText, onSubmit, children, onAuthentication }) => {
  const [email, onChangeEmail] = useState('');
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

  return (
    <SafeAreaView style={styles.container}>

    <ScrollView contentContainerStyle={styles.scrollView}>
    <Text style={styles.textsmall2}>{UserText}</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor = "white"
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor = "white"
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title={buttonText} onPress={submit} />
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
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  container: {
    flex: 2,
    backgroundColor: 'black'
  },
  scrollView: {
    //backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textsmall2: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    color:"white",
  },

});

export default EmailForm;
