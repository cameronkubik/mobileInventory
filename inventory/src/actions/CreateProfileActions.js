import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import StoreManager from '../StoreManager';
import {
    CREATE_PROFILE_INPUT_CHANGE,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CREATE_USER_BEGIN,
    AVATAR_PRESS,
} from './types';

export const createProfileInputChange = (field, value) => {
    return {
        type: CREATE_PROFILE_INPUT_CHANGE,
        payload: { field, value }
    };
}

export const createUser = () => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER_BEGIN });
        
        const accountModel = StoreManager.getUserAccountData(),
            { first, last, email, position } = accountModel,
            { mismatchingPasswords, missingPassword, password } = StoreManager.getSecureAccountData();

        if (!first || !last || !email || !position || missingPassword) {
            createUserFail(dispatch, { code: 'custom/missing-info' });
            return;
        } else if (mismatchingPasswords) {
            createUserFail(dispatch, { code: 'custom/mismatching-passwords' });
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(dispatch, user, accountModel))
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
    return (dispatch) => {
        dispatch({ type: AVATAR_PRESS });

        NavigationService.navigate('CameraGallery');
    }
};
