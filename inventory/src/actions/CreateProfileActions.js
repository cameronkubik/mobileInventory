import firebase from 'react-native-firebase';
import { CameraRoll } from 'react-native';
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
    CREATE_USER,
    AVATAR_PRESS,
    AVATAR_SELECTED
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

export const createUser = ({first, last, email, password, position, avatar}) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER });

        const dataModel = {
            firstName: first,
            lastName: last, 
            email,
            position,
            avatar
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(dispatch, user, dataModel))
            .catch(error => createUserFail(dispatch, error));
    };
};

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

export const avatarPress = () => {
    NavigationService.navigate('AvatarPicker');

    return { type: AVATAR_PRESS };
};

export const avatarSelected = (imageArray) => {
    return (dispatch) => {
        console.log(imageArray);

        dispatch({ type: AVATAR_SELECTED, payload: imageArray[0]});

        NavigationService.back();
    }
}