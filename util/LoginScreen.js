import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { login } from '../util/mock';
import EmailForm from '../util/EmailForm';




const LoginScreen = ({ navigation }) => {
  return (
    <EmailForm
      UserText={"Welcome \nBack"}
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('DocumentSelect')}
    >

      <Button
        title="New Here? Register"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </EmailForm>
  );
};





export default LoginScreen;
