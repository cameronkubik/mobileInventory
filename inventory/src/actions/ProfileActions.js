import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import DatabaseManager from '../DatabaseManager';
import { 
    LOAD_USER_BEGIN,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOG_OUT,
} from './types';

export const loadUser = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_USER_BEGIN });

        DatabaseManager.loadUserData()
            .then(snapshot => loadUserSuccess(snapshot, dispatch))
            .catch(error => loadUserFail(error, dispatch));
    };
};

const loadUserSuccess = (querySnapshot, dispatch) => {
    const { firstName, lastName, position, avatar } = querySnapshot.data();

    dispatch({
        type: LOAD_USER_SUCCESS,
        payload: {
            name: `${firstName} ${lastName}`,
            position,
            avatar
        }
    });
};

const loadUserFail = (error, dispatch) => {
    console.log(error);
    
    dispatch({
        type: LOAD_USER_FAIL,
        payload: 'Failed to load user. Please try again...'
    });
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: LOG_OUT });

        firebase.auth().signOut();

        NavigationService.reset();
    };
};
