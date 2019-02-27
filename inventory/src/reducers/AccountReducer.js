import {
    CREATE_PROFILE_INPUT_CHANGE,
    AUTH_INPUT_CHANGE,
    AVATAR_SELECTED,
    CANCEL_CREATE_PROFILE
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    confirmedPassword: '',
    first: '',
    last: '',
    fullName: '',
    position: '',
    avatar: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_PROFILE_INPUT_CHANGE:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };


        case AVATAR_SELECTED:
            return {
                ...state, 
                avatar: action.payload
            };

        case AUTH_INPUT_CHANGE:
            let emailValue = action.payload.field === 'email' ? action.payload.value : state.email;

            return {
                ...state,
                email: emailValue
            };

        case CANCEL_CREATE_PROFILE:
            return { ...INITIAL_STATE };
        
        default: return state;
    }
}