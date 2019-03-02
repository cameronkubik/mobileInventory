import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import DatabaseManager from '../DatabaseManager';
import ModelManager from '../ModelManager';
import { 
    LOAD_USER_BEGIN,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOG_OUT,
} from './types';

export const loadAccount = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_USER_BEGIN });

        DatabaseManager.GET.accountModel()
            .then(snapshot => loadAccountSuccess(snapshot, dispatch))
            .catch(error => loadAccountFail(error, dispatch));
    };
};

const loadAccountSuccess = (accountSnapshot, dispatch) => {
    const accountModel = ModelManager.__Account__(accountSnapshot.data());

    dispatch({
        type: LOAD_USER_SUCCESS,
        payload: accountModel
    });
};

const loadAccountFail = (error, dispatch) => {
    console.log(error);
    
    dispatch({
        type: LOAD_USER_FAIL,
        payload: 'Failed to load user. Please try again...'
    });
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: LOG_OUT });

        DatabaseManager.AUTH.logout();

        NavigationService.reset();
    };
};
