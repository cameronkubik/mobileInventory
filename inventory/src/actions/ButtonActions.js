import NavigationService from '../NavigationService';
import {
    EDIT_PROFILE_PRESS
} from './types';

export const cancelPress = (actionType) => {
    return (dispatch) => {
        dispatch({ type: actionType });

        NavigationService.back();
    }
}

export const onEditProfilePress = () => {
    return (dispatch) => {
        debugger;
        dispatch({ type: EDIT_PROFILE_PRESS });

        // NavigationService.navigate('CreateProfile'); - TODO
    }
}

