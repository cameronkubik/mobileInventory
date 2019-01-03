import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Profile from './screens/Profile';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
