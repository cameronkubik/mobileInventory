import firebase from 'react-native-firebase';
import { ImagePickerIOS } from 'react-native';
import NavigationService from '../NavigationService';
import StoreManager from '../StoreManager';
import DatabaseManager from '../DatabaseManager';
import Models from '../ModelManager';
import {
    CREATE_PROFILE_INPUT_CHANGE,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CREATE_USER_BEGIN,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    AVATAR_SELECTED
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
        
        const accountModel = StoreManager.generateAccountModel(),
            { first, last, email, position } = accountModel,
            { mismatchingPasswords, missingPassword, password } = StoreManager.generateSecureAccountData(),
            credentialsModel = StoreManager.generateCredentialsModel({email, password});

        if (!first || !last || !email || !position || missingPassword) {
            createUserFail(dispatch, { code: 'custom/missing-info' });
            return;
        } else if (mismatchingPasswords) {
            createUserFail(dispatch, { code: 'custom/mismatching-passwords' });
            return;
        }

        DatabaseManager.AUTH.signUp(credentialsModel)
            .then(user => createUserSuccess(dispatch, user, accountModel))
            .catch(error => createUserFail(dispatch, error));
    };
};

const createUserSuccess = (dispatch, userCredentials, accountModel) => {
    DatabaseManager.PUT.accountModel(userCredentials, accountModel)
        .then(() => {
            dispatch({ type: CREATE_USER_SUCCESS });
        
            NavigationService.createProfileTransition();
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

export const openImagePicker = () => {
    return (dispatch) => {
        ImagePickerIOS.openSelectDialog(null, (uri) => {
            dispatch({
                type: AVATAR_SELECTED,
                payload: Models.__URI__(uri)
            });

            updateAvatarOnly();
        }, () => { 
            console.log('Picker cancelled. DO NOT remove this callback, it is required')
        });
    }
};

export const updateAvatarOnly = () => {
    const accountModel = StoreManager.generateAccountModel(),
        userCredentials = { user: firebase.auth()._user };

    DatabaseManager.PUT.accountModel(userCredentials, accountModel);
}

export const updateUser = () => {
    return (dispatch) => {
        dispatch({ type: UPDATE_USER_BEGIN });
        
        const accountModel = StoreManager.generateAccountModel(),
            { first, last, position } = accountModel;

        if (!first || !last || !position) {
            createUserFail(dispatch, { code: 'custom/missing-info' });
            return;
        }

        const userCredentials = { user: firebase.auth()._user };
        
        DatabaseManager.PUT.accountModel(userCredentials, accountModel)
            .then(() => { updateUserSuccess(dispatch) })
            .catch(() => { updateUserFail(dispatch) })
    };
}

function updateUserSuccess(dispatch) {
    dispatch({ type: UPDATE_USER_SUCCESS });
            
    NavigationService.back();
}
function updateUserFail(dispatch) {
    dispatch({ 
        type: UPDATE_USER_FAIL,
        payload: {
            errorCode: '-1',
            errorMessage: 'Update failed. Try again later...' 
        }
    });
}
