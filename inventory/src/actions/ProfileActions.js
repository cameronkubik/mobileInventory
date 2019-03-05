import Services from '../Services';
import { 
    LOAD_USER_BEGIN,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOG_OUT,
} from './types';

export const loadAccount = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_USER_BEGIN });

        Services.Database.GET.accountModel()
            .then(snapshot => loadAccountSuccess(snapshot, dispatch))
            .catch(error => loadAccountFail(error, dispatch));
    };
};

const loadAccountSuccess = (accountSnapshot, dispatch) => {
    const accountModel = Services.Models.__Account__(accountSnapshot.data());

    dispatch({
        type: LOAD_USER_SUCCESS,
        payload: accountModel
    });
};

const loadAccountFail = (error, dispatch) => {
    console.log(error);
    
    dispatch({
        type: LOAD_USER_FAIL,
        payload: 'Failed to load user. Please try again...'
    });
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: LOG_OUT });

        Services.Database.AUTH.logout();

        Services.Navigation.reset();
    };
};
