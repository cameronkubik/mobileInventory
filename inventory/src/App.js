// Library imports
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// Custom file imports
import NavigationService from './NavigationService';
import reducers from './reducers';
import Login from './screens/Login';
import CreateProfile from './screens/CreateProfile';
import Profile from './screens/Profile';
import AvatarPicker from './screens/AvatarPicker';
import AddInventory from './screens/AddInventory';
import PicturePicker from './screens/PicturePicker';

// ----- Navigation ----- //
const TopLevelNavigator = createStackNavigator(
    {
        Login,
        Profile,
        CreateProfile,
        AvatarPicker,
        AddInventory,
        PicturePicker
    },
    {
        initialRouteName: 'AddInventory',
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
const AppContainer = createAppContainer(TopLevelNavigator);
// --------------------- //

export default class App extends Component {
    // ----- Lifecycle ----- //
    // componentWillMount() {
    //     const firebaseConfig = {
    //         apiKey: 'AIzaSyAHxzpsQutIfJqj0iVpBFXlETB3PLumY00',
    //         authDomain: 'sa-mobile-inventory.firebaseapp.com',
    //         databaseURL: 'https://sa-mobile-inventory.firebaseio.com',
    //         projectId: 'sa-mobile-inventory',
    //         storageBucket: 'sa-mobile-inventory.appspot.com',
    //         messagingSenderId: '1020733435614'
    //     };
    //     firebase.initializeApp(firebaseConfig);
    // }
    // --------------------- //
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <AppContainer 
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        );
    }
}
