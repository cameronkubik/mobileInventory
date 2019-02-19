import {
    CREATE_PROFILE_INPUT_CHANGE,
    AVATAR_PRESS,
    AVATAR_SELECTED,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
} from '../actions/types';
  
const INITIAL_STATE = {
    first: '',
    last: '',
    email: '',
    password: '',
    confirmedPassword: '',
    position: '',
    user: null,
    error: '',
    loading: false,
    avatar: null,
    isSelectingAvatar: false
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_PROFILE_INPUT_CHANGE:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
            
        case CREATE_USER_BEGIN:
            return { ...state, loading: true, error: '' };

        case CREATE_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case CREATE_USER_FAIL:
            let modifiedState = processCreateUserFailCode(action);
            
            if (modifiedState) {
                return { 
                    ...state, 
                    ...modifiedState,
                    error: action.payload.errorMessage || 'Authentication Failed.',  
                    loading: false 
                };
            }
            
            return { 
                ...state, 
                error: action.payload.errorMessage || 'Authentication Failed.',  
                loading: false 
            };

        case AVATAR_PRESS:
            return { ...state, isSelectingAvatar: true };

        case AVATAR_SELECTED:
            return { ...state, isSelectingAvatar: false, avatar: action.payload }

        default:
            return state;
    }
};

// Custom helper functions
function processCreateUserFailCode(action) {
    const err = action.payload.errorCode;
    let invEmail = (err === 'auth/email-already-in-use' || err === 'auth/invalid-email'),
        invConfirmPw = (err === 'custom/mismatching-passwords'),
        weakPw = (err === 'auth/weak-password');

    if (invEmail) {
        return { email: '' };
    } else if (invConfirmPw) {
        return { confirmedPassword: '' };
    } else if (weakPw) {
        return { password: '', confirmedPassword: '' };
    }
}