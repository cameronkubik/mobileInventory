import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Profile, CreateProfile } from './screens';
import Login from './screens/Login';
import reducers from './reducers';

// ----- Navigation ----- //
const RootStack = createStackNavigator(
    {
        Login,
        Profile,
        CreateProfile
    },
    {
        initialRouteName: 'Login',
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
// --------------------- //

export default class App extends React.Component {
    // ----- Lifecycle ----- //
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyAHxzpsQutIfJqj0iVpBFXlETB3PLumY00',
            authDomain: 'sa-mobile-inventory.firebaseapp.com',
            databaseURL: 'https://sa-mobile-inventory.firebaseio.com',
            projectId: 'sa-mobile-inventory',
            storageBucket: 'sa-mobile-inventory.appspot.com',
            messagingSenderId: '1020733435614'
        };
        firebase.initializeApp(firebaseConfig);
    }
    // --------------------- //
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <AppContainer />
            </Provider>
        );
    }
}
