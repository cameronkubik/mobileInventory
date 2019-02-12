import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CreateProfileReducer from './CreateProfileReducer';
import ProfileReducer from './ProfileReducer';
import AddInventoryReducer from './AddInventoryReducer';
import ItemDetailReducer from './ItemDetailReducer';

export default combineReducers({
    // reducers
    auth: AuthReducer,
    createProfile: CreateProfileReducer,
    profile: ProfileReducer,
    addInventory: AddInventoryReducer,
    itemDetail: ItemDetailReducer
});