import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import StoreManager from '../StoreManager';
import {
    AUTH_INPUT_CHANGE,
    AUTH_RESET,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_BEGIN
} from './types';
import DatabaseManager from '../DatabaseManager';

export const onInputChange = (field, value) => {
    return {
        type: AUTH_INPUT_CHANGE,
        payload: { field, value }
    };
}

export const loginUser = () => {
    return (dispatch) => {
        const credentialsModel = StoreManager.generateCredentialsModel(),
            { email, password } = credentialsModel;
        
        dispatch({ type: LOGIN_USER_BEGIN });

        if (!email && !password) {
            loginUserFail(dispatch, { code: 'custom/no-creds' });
            return;
        } else if (!email) {
            loginUserFail(dispatch, { code: 'custom/no-email' });
            return;
        } else if (!password) {
            loginUserFail(dispatch, { code: 'custom/no-password' });
            return;
        }

        DatabaseManager.AUTH.login(credentialsModel)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch, error));
    };
};

export const resetLogin = () => {
    return (dispatch) => {
        dispatch({ type: AUTH_RESET });

        NavigationService.push('CreateProfile');
    }
}

// Helper functions
const loginUserFail = (dispatch, error) => {
    console.log(error);
    let errorMsg = '';

    switch (error.code) {
        case 'auth/invalid-email':
            errorMsg = 'Invalid email address';
            break;
        case 'auth/user-disabled':
            errorMsg = 'That account has been disabled.';
            break;
        case 'auth/user-not-found':
            errorMsg = 'No account found with that email';
            break;
        case 'auth/wrong-password':
            errorMsg = 'Incorrect password, please try again';
            break;
        case 'custom/no-creds':
            errorMsg = 'No credentials provided';
            break;
        case 'custom/no-email':
            errorMsg = 'No email provided';
            break;
        case 'custom/no-password':
            errorMsg = 'No password provided';
            break;
        default:
            errorMsg = 'Authentication Failed. Please try again.';
    }

    dispatch({ 
        type: LOGIN_USER_FAIL,
        payload: errorMsg
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    NavigationService.replace('Profile');
};