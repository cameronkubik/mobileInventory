import NavigationService from '../Services/NavigationService';
import {
    EDIT_PROFILE_PRESS
} from './types';

export const cancelPress = (actionType, isSubmit) => {
    return (dispatch) => {
        dispatch({ type: actionType });

        if (isSubmit) {
            // TODO - add submit logic here
        }
        
        NavigationService.back();
    }
}

export const onEditProfilePress = () => {
    return (dispatch) => {
        dispatch({ type: EDIT_PROFILE_PRESS });

        NavigationService.navigate('CreateProfile', { mode: 'EDIT' });
    }
}

