import {
    AVATAR_PRESS,
    AVATAR_SELECTED,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CANCEL_CREATE_PROFILE,
    CANCEL_GALLERY_SELECTION,
    EDIT_PROFILE_PRESS,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL
} from '../actions/types';
  
const INITIAL_STATE = {
    error: '',
    loading: false,
    isSelectingAvatar: false,
    isEditMode: false
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
            
        case CREATE_USER_BEGIN:
        case UPDATE_USER_BEGIN:
            return {
                ...state,
                loading: true,
                error: ''
            };

        case CREATE_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return { ...INITIAL_STATE };

        case CREATE_USER_FAIL:
        case UPDATE_USER_FAIL:
            return { 
                ...state, 
                error: action.payload.errorMessage || 'Authentication Failed.',  
                loading: false 
            };

        case AVATAR_PRESS:
            return {
                ...state,
                isSelectingAvatar: true
            };

        case AVATAR_SELECTED:
            return {
                ...state, 
                isSelectingAvatar: false,
            };

        case CANCEL_CREATE_PROFILE:
            return { ...INITIAL_STATE };

        case CANCEL_GALLERY_SELECTION:
            return {
                ...state,
                isSelectingAvatar: false
            };

        case EDIT_PROFILE_PRESS:
            return {
                ...state,
                isEditMode: true
            }

        default:
            return state;
    }
};
