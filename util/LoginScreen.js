import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { login } from '../util/mock';
import EmailForm from '../util/EmailForm';

const LoginScreen = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('DocumentSelect')}
    >
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </EmailForm>
  );
};

export default LoginScreen;
