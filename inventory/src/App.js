// Library imports
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'react-native-firebase';
// Custom file imports
import NavigationService from './Services/NavigationService';
import reducers from './reducers';
import { colors } from './components/util/CommonStyles';
import Login from './screens/Login';
import CreateProfile from './screens/CreateProfile';
import Profile from './screens/Profile';
import AddInventory from './screens/AddInventory';
import PicturePicker from './screens/PicturePicker';
import ItemDetail from './screens/ItemDetail';
import ViewInventory from './screens/ViewInventory';
import ViewItems from './screens/ViewItems';
import CameraGallery from './screens/CameraGallery';

// ----- Navigation ----- //
const TopLevelNavigator = createStackNavigator(
    {
        Login,
        Profile,
        CreateProfile,
        AddInventory,
        PicturePicker,
        ItemDetail,
        ViewInventory,
        ViewItems,
        CameraGallery
    },
    {
        initialRouteName: 'Login',
        /* Shared navigationOptions across screens */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.header,
            },
            headerTintColor: 'white'
        },
    }
);
const AppContainer = createAppContainer(TopLevelNavigator);
// --------------------- //

export const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const config = {
    apiKey: "AIzaSyAHxzpsQutIfJqj0iVpBFXlETB3PLumY00",
    authDomain: "sa-mobile-inventory.firebaseapp.com",
    databaseURL: "https://sa-mobile-inventory.firebaseio.com",
    projectId: "sa-mobile-inventory",
    storageBucket: "sa-mobile-inventory.appspot.com",
    messagingSenderId: "1020733435614"
};
export default class App extends Component {
    componentWillMount() {
        //firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={reduxStore}>
                <AppContainer 
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        );
    }
}
