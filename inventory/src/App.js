import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Login, Profile, CreateProfile } from './screens';

const RootStack = createStackNavigator(
    {
        Login,
        Profile,
        CreateProfile
    },
    {
        initialRouteName: 'Login',
        //initialRouteName: 'CreateProfile',
        /* Shared navigationOptions across screens */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#606060',
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
