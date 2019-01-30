import {
    FIRST_CHANGED,
    LAST_CHANGED,
    CREATE_EMAIL_CHANGED,
    CREATE_PASSWORD_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    POSITION_CHANGED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CREATE_USER,
    AVATAR_PRESS,
    AVATAR_SELECTED
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
        case FIRST_CHANGED:
            return { ...state, first: action.payload };

        case LAST_CHANGED:
            return { ...state, last: action.payload };

        case CREATE_EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case CREATE_PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case CONFIRM_PASSWORD_CHANGED:
            return { ...state, confirmedPassword: action.payload };
        
        case POSITION_CHANGED:
            return { ...state, position: action.payload };
            
        case CREATE_USER:
            return { ...state, loading: true, error: '' };

        case CREATE_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case CREATE_USER_FAIL:
            return { 
                ...state, error: action.payload || 'Authentication Failed.', 
                password: '', confirmedPassword: '', loading: false 
            };
    
        case AVATAR_PRESS:
            return { ...state, isSelectingAvatar: true };

        case AVATAR_SELECTED:
            return { ...state, isSelectingAvatar: false, avatar: action.payload }

        default:
            return state;
    }
  };