import {
    AUTH_INPUT_CHANGE,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    AUTH_RESET,
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_INPUT_CHANGE:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };

        case LOGIN_USER_BEGIN:
            return { 
                ...state, 
                loading: true, 
                error: '' 
            };

        case LOGIN_USER_SUCCESS:
            return { 
                ...state, 
                ...INITIAL_STATE, 
                user: action.payload 
            };

        case LOGIN_USER_FAIL:
            return { 
                ...state,
                error: action.payload || 'Authentication Failed.',
                password: '', 
                loading: false 
            };

        case AUTH_RESET:
            return { ...INITIAL_STATE };

        default:
            return state;
    }
};