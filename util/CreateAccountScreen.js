import React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';
import { createAccount } from '../util/mock';
import EmailForm from '../util/EmailForm';

const CreateAccount = ({ navigation }) => {
  return (

    <EmailForm
      UserText="Register"
      buttonText="Sign up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </EmailForm>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 2,
    backgroundColor: 'black'
  },

  textsmall2: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    color:"white",
  },

});
export default CreateAccount;
