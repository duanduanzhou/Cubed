import React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';
import { createAccount } from '../util/mock';
import EmailForm from '../util/EmailForm';

const CreateAccount = ({ navigation }) => {
  return (

    <EmailForm
      UserText="Register"
      buttonText="Sign up"

      RegisterHint1={"*must be 6-14 Characters \n*cannot contain special characters"}
      RegisterHint2={"*must be at least 6 Characters \n*a mixture of uppercase and lower letters \n*contain at least 1 number"}
      onSubmit={createAccount}
      isRegister = "True"
      onAuthentication={() => navigation.navigate('Login')}
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
