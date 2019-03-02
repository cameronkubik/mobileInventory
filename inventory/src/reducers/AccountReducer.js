import {
    CREATE_PROFILE_INPUT_CHANGE,
    AUTH_INPUT_CHANGE,
    AVATAR_SELECTED,
    CANCEL_CREATE_PROFILE,
    LOAD_USER_SUCCESS,
    EDIT_PROFILE_PRESS,
    CANCEL_EDIT_PROFILE
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    confirmedPassword: '',
    first: '',
    last: '',
    fullName: '',
    position: '',
    avatar: null,
    cachedState: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Login form input
        case AUTH_INPUT_CHANGE:
            let emailValue = action.payload.field === 'email' ? action.payload.value : state.email;

            return {
                ...state,
                email: emailValue
            };
        // Data returned from login
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        // Create profile form input
        case CREATE_PROFILE_INPUT_CHANGE:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        // Camera gallery selection
        case AVATAR_SELECTED:
            return {
                ...state, 
                avatar: action.payload
            };
        // Create profile cancel button
        case CANCEL_CREATE_PROFILE:
            return { ...INITIAL_STATE };

        case EDIT_PROFILE_PRESS:
            return {
                ...state,
                cachedState: state
            };

        case CANCEL_EDIT_PROFILE:
            return {
                ...state.cachedState,
                cachedState: null
            };

        
        default: return state;
    }
}