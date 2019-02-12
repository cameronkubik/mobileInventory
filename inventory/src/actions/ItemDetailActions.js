// import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import DbManager from '../DatabaseManager';
import { 
    LOAD_ITEM_DETAIL, LOAD_ITEM_DETAIL_SUCCESS, LOAD_ITEM_DETAIL_FAIL,
    EDIT_INVENTORY_ITEM, REMOVE_INVENTORY_ITEM,
} from './types';

export const load_item_detail = (itemID) => {
    return (dispatch) => {
        dispatch({ type: LOAD_ITEM_DETAIL });

        const loadedItem = DbManager.get_item_detail(itemID);

        if (loadedItem) {
            load_success(dispatch, loadedItem);
            return;
        }
        
        load_fail(dispatch, { code: -1, message: 'error msg placeholder' });
    }
}

export const edit_inventory_item = (itemDetail) => {
    return (dispatch) => {
        dispatch({
            type: EDIT_INVENTORY_ITEM,
            payload: itemDetail
        });
    
        NavigationService.navigate('AddInventory');
    }
}

export const remove_inventory_item = (itemID) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_INVENTORY_ITEM,
            payload: itemID
        });
    }
}


// helper functions
const load_success = (dispatch, itemDetail) => {
    dispatch({
        type: LOAD_ITEM_DETAIL_SUCCESS,
        payload: itemDetail
    });
}

const load_fail = (dispatch, error) => {
    dispatch({
        type: LOAD_ITEM_DETAIL_FAIL,
        payload: error
    });
}
