import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import { 
    LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOG_OUT 
} from './types';

export const loadUser = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: LOAD_USER });

        firebase.firestore().collection('users').doc(`${currentUser.uid}`).get()
            .then(snapshot => loadUserSuccess(snapshot, dispatch));
    };
};

const loadUserSuccess = (querySnapshot, dispatch) => {
    console.log(querySnapshot.data());
    const { firstName, lastName, position, avatar } = querySnapshot.data();

    //dispatch success or fail
    dispatch({
        type: LOAD_USER_SUCCESS,
        payload: {
            name: `${firstName} ${lastName}`,
            position,
            avatar
        }
    });
};

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: LOG_OUT });

        firebase.auth().signOut();

        NavigationService.reset();
    };
};