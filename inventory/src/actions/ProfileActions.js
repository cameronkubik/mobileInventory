import firebase from 'react-native-firebase';
import Services from '../Services';
import { 
    LOAD_USER_BEGIN,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOG_OUT,
    AVATAR_SELECTED,
    NAVIGATE_ADD_INVENTORY,
    NAVIGATE_VIEW_INVENTORY
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
};

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: LOG_OUT });

        Services.Database.AUTH.logout();

        Services.Navigation.reset();
    };
};

export const profileAvatarPress = () => {
    return (dispatch) => {
        Services.Actions.openImagePicker(null, (uri) => {
            dispatch({
                type: AVATAR_SELECTED,
                payload: Services.Models.__URI__(uri)
            });

            updateAccountFromProfile();
        });
    }
};

function updateAccountFromProfile() {
    const accountModel = Services.Store.generateAccountModel(),
        userCredentials = { user: firebase.auth()._user };

    Services.Database.PUT.accountModel(userCredentials, accountModel)
        .then(() => {
            // TODO
            // Need to put avatar in storage bucket
        })
        .catch(Services.Actions.consoleLog);
};

export const navigateToAddInventory = () => {
    return (dispatch) => {
        dispatch({ type: NAVIGATE_ADD_INVENTORY });

        Services.Navigation.navigate('AddInventory');
    }
}
