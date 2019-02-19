import { 
    LOAD_USER_BEGIN,
    LOG_OUT,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL
} from '../actions/types';
  
const INITIAL_STATE = {
    name: '',
    position: '',
    avatar: null,
    isSignedIn: false,
    loading: false,
    error: ''
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USER_BEGIN:
            return { 
                ...state, isSignedIn: false, loading: true, error: ''
            };
        
        case LOAD_USER_SUCCESS:
            return {
                ...state, 
                name: action.payload.name, 
                position: action.payload.position,
                avatar: action.payload.avatar,
                isSignedIn: true, 
                loading: false,
                error: ''
            };
        
        case LOAD_USER_FAIL:
            return {
                ...state, 
                loading: false,
                error: action.payload
            };

        case LOG_OUT:
            return { ...INITIAL_STATE };

        default:
            return state;
    }
};