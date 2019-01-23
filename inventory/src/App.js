import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
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

const firebaseConfig = {
    apiKey: 'AIzaSyAHxzpsQutIfJqj0iVpBFXlETB3PLumY00',
    authDomain: 'sa-mobile-inventory.firebaseapp.com',
    databaseURL: 'https://sa-mobile-inventory.firebaseio.com',
    projectId: 'sa-mobile-inventory',
    storageBucket: 'sa-mobile-inventory.appspot.com',
    messagingSenderId: '1020733435614'
};

export default class App extends React.Component {
    render() {
        firebase.initializeApp(firebaseConfig);
        return <AppContainer />;
    }
}
