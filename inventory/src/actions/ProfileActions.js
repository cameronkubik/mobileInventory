import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import { 
    LOAD_USER_BEGIN,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOG_OUT,
    EDIT_PROFILE_PRESS 
} from './types';

export const loadUser = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: LOAD_USER_BEGIN });

        firebase.firestore().collection('users').doc(`${currentUser.uid}`).get()
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

export const onEditProfilePress = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        debugger;
        dispatch({ 
            type: EDIT_PROFILE_PRESS,
            payload: currentUser
        });

        NavigationService.navigate('EditProfile');
    }
}