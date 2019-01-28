import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import {
    FIRST_CHANGED,
    LAST_CHANGED,
    CREATE_EMAIL_CHANGED,
    CREATE_PASSWORD_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    POSITION_CHANGED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CREATE_USER
} from './types';

export const firstChanged = (text) => {
    return {
        type: FIRST_CHANGED,
        payload: text
    };
};

export const lastChanged = (text) => {
    return {
        type: LAST_CHANGED,
        payload: text
    };
};

export const createEmailChanged = (text) => {
    return {
        type: CREATE_EMAIL_CHANGED,
        payload: text
    };
};

export const createPasswordChanged = (text) => {
    return {
        type: CREATE_PASSWORD_CHANGED,
        payload: text
    };
};

export const confirmedPasswordChanged = (text) => {
    return {
        type: CONFIRM_PASSWORD_CHANGED,
        payload: text
    };
};

export const positionChanged = (text) => {
    return {
        type: POSITION_CHANGED,
        payload: text
    };
};

export const createUser = ({first, last, email, password, position}) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER });

        const dataModel = {
            firstName: first,
            lastName: last, 
            email,
            role: position
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(dispatch, user, dataModel))
            .catch(error => createUserFail(dispatch, error));
    };
}

const createUserSuccess = (dispatch, userCredentials, dataModel) => {
    var userRef = firebase.firestore().collection('users').doc(userCredentials.user.uid);
    userRef.set(dataModel)
    .then(() => {
        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: userCredentials
        });
    
        NavigationService.replace('Profile');
    })
    .catch(error => createUserFail(dispatch, error));
};

const createUserFail = (dispatch, error) => {
    console.log(error);
    dispatch({ type: CREATE_USER_FAIL });
};