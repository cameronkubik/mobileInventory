// Library imports
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// Custom file imports
import NavigationService from './NavigationService';
import reducers from './reducers';
import { colors } from './components/util/CommonStyles';
import Login from './screens/Login';
import CreateProfile from './screens/CreateProfile';
import Profile from './screens/Profile';
import AvatarPicker from './screens/AvatarPicker';
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
        AvatarPicker,
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
            // header: null
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

export default class App extends Component {
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
