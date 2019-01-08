import React from 'react';
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
        /* Shared navigationOptions across screens */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#d2d3db',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
