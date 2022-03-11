//Ref from https://scottdomes.com/react-native-authentication/
import React from 'react';
import { View, Text, Button } from 'react-native';
import { getUsers } from '../util/mock';

export default class HomeScreen extends React.Component {
  state = { users: [], hasLoadedUsers: false, userLoadingErrorMessage: '' };

  loadUsers() {
    this.setState({ hasLoadedUsers: false, userLoadingErrorMessage: '' });
    getUsers()
      .then((res) =>
        this.setState({
          hasLoadedUsers: true,
          users: res.users,
        }),
      )
      .catch(this.handleUserLoadingError);
  }

  handleUserLoadingError = (res) => {
    if (res.error === 401) {
      this.props.navigation.navigate('Login');
    } else {
      this.setState({
        hasLoadedUsers: false,
        userLoadingErrorMessage: res.message,
      });
    }
  }

  componentDidMount() {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      () => {
        if (!this.state.hasLoadedUsers) {
          this.loadUsers();
        }
      },
    );
  }

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  logOut = async () => {
    this.setState({ hasLoadedUsers: false, users: [] })
    await setToken('');
    this.props.navigation.navigate('Login');
  };

 render() {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>HomeScreen</Text>
       {this.state.users.map((user) => (
         <Text key={user.email}>{user.email}</Text>
       ))}
       <Button title="Log out" onPress={() => this.props.navigation.navigate('Login')} />
     </View>
   );
 }
}
