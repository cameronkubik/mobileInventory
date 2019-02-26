import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import {
    CREATE_PROFILE_INPUT_CHANGE,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CREATE_USER_BEGIN,
    AVATAR_PRESS,
    AVATAR_SELECTED
} from './types';

export const createProfileInputChange = (field, value) => {
    return {
        type: CREATE_PROFILE_INPUT_CHANGE,
        payload: { field, value }
    };
}

export const createUser = ({first, last, email, password, confirmedPassword, position, avatar}) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER_BEGIN });

        if (!first || !last || !email || !password || !position) {
            createUserFail(dispatch, { code: 'custom/missing-info' });
            return;
        } else if (password !== confirmedPassword) {
            createUserFail(dispatch, { code: 'custom/mismatching-passwords' });
            return;
        }

        const dataModel = {
            firstName: first,
            lastName: last, 
            email,
            position,
            avatar
        };

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(dispatch, user, dataModel))
            .catch(error => createUserFail(dispatch, error));
    };
};

const createUserSuccess = (dispatch, userCredentials, dataModel) => {
    var userRef = firebase.firestore().collection('users').doc(userCredentials.user.uid);
    userRef.set(dataModel)
        .then(() => {
            console.log(userCredentials);

            dispatch({ type: CREATE_USER_SUCCESS });
        
            NavigationService.replace('Profile');
        })
        .catch(error => createUserFail(dispatch, error));
};

const createUserFail = (dispatch, error) => {
    console.log(error);
    let errorMsg = '';

    switch (error.code) {
        case 'auth/email-already-in-use':
            errorMsg = 'Email already in use.';
            break;
        case 'auth/invalid-email':
            errorMsg = 'Invalid email provided';
            break;
        case 'auth/operation-not-allowed':
            errorMsg = 'Account creations disabled, see Admin.';
            break;
        case 'auth/weak-password':
            errorMsg = 'Weak Password.';
            break;
        case 'custom/missing-info':
            errorMsg = 'Missing Information.'
            break;
        case 'custom/mismatching-passwords':
            errorMsg = 'Passwords do not match.';
            break;
        default:
            errorMsg = 'Authentication Failed.';
    }

    dispatch({ 
        type: CREATE_USER_FAIL,
        payload: {
            errorCode: error.code,
            errorMessage: errorMsg 
        }
    });
};

export const avatarPress = () => {
    NavigationService.navigate('AvatarPicker');

    return { type: AVATAR_PRESS };
};

export const avatarSelected = (imageArray) => {
    return (dispatch) => {
        dispatch({ type: AVATAR_SELECTED, payload: imageArray[0]});

        NavigationService.back();
    }
}