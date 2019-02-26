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
import ItemDetail from './screens/ItemDetail';
import ViewInventory from './screens/ViewInventory';
import ViewItems from './screens/ViewItems';
import EditButton from './screens/EditButton';

// ----- Navigation ----- //
const TopLevelNavigator = createStackNavigator(
    {
        Login,
        Profile,
        EditButton,
        CreateProfile,
        AvatarPicker,
        AddInventory,
        PicturePicker,
        ItemDetail,
        ViewInventory,
        ViewItems
    },
    {
        initialRouteName: 'ItemDetail',
        /* Shared navigationOptions across screens */
        defaultNavigationOptions: {
            // header: null
            headerStyle: {
                backgroundColor: '#606060',
            },
            headerTintColor: 'white'
        },
    }
);
const AppContainer = createAppContainer(TopLevelNavigator);
// --------------------- //

export default class App extends Component {
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
