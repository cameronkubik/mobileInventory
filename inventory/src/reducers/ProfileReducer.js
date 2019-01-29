import { LOAD_USER, LOG_OUT,
    LOAD_USER_SUCCESS, LOAD_USER_FAIL
} from '../actions/types';
  
const INITIAL_STATE = {
    name: '',
    position: '',
    isSignedIn: false,
    loading: false
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USER:
            return { 
                ...state, isSignedIn: false, loading: true 
            };
        
        case LOAD_USER_SUCCESS:
            return {
                ...state, 
                name: action.payload.name, 
                position: action.payload.position,
                isSignedIn: true, 
                loading: false
            };
        
        case LOAD_USER_FAIL:
            return {
                ...state, isSignedIn: false, loading: false,
                name: '', position: ''
            };

        case LOG_OUT:
            return { ...INITIAL_STATE };

        default:
            return state;
    }
};