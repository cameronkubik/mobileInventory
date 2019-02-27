import NavigationService from '../NavigationService';
import StoreManager from '../StoreManager';
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
        // TODO
        // const profileData = StoreManager.getProfileData();
        dispatch({ type: EDIT_PROFILE_PRESS });

        // NavigationService.navigate('CreateProfile'); - TODO
    }
}

