import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
import DbManager from '../DatabaseManager';
import { 
    LOAD_ADD_INVENTORY, LOAD_ADD_INVENTORY_SUCCESS, 
    LOAD_ADD_INVENTORY_FAIL, PICKER_CHANGE, TEXT_INPUT_CHANGE,
    ADD_ITEM_PICTURES, ITEM_PICTURES_SELECTED,
    PICTURE_SELECTION_FINISHED, SUBMIT_INVENTORY_ITEM,
    PICTURE_SELECTION_CANCELLED, PICTURE_SELECTION_RESUMED
} from './types';

export const load_add_inventory = () => {
    return (dispatch) => { 
        dispatch({ type: LOAD_ADD_INVENTORY });

        const loadedCategories = DbManager.get_picker_categories();

        if (loadedCategories) {
            load_success(dispatch, { categories: loadedCategories });
            return;
        }
        
        load_fail(dispatch, { code: -1, message: 'error msg placeholder' });
    }
}

const load_success = (dispatch, returnData) => {
    dispatch({ 
        type: LOAD_ADD_INVENTORY_SUCCESS, 
        payload: returnData.categories
    });
};

// TODO
const load_fail = (dispatch, error) => {
    dispatch({ 
        type: LOAD_ADD_INVENTORY_FAIL, 
        payload: {
            errorCode: error.code,
            errorMsg: error.message
        }
    });
};

export const picker_change = (value, index) => {
    return {
        type: PICKER_CHANGE,
        payload: { value, index }
    }
};

export const text_input_change = (value, field) => {
    return {
        type: TEXT_INPUT_CHANGE,
        payload: { value, field }
    }
};

export const add_item_pictures = () => {
    NavigationService.navigate('PicturePicker');

    return { type: ADD_ITEM_PICTURES };
};

export const item_pictures_selected = (imageArray) => {
    return {
        type: ITEM_PICTURES_SELECTED,
        payload: imageArray
    }
};

export const picture_selection_finished = () => {
    
    return (dispatch) => {
        dispatch({ type: PICTURE_SELECTION_FINISHED });

        NavigationService.back();
    }
}

export const picture_selection_cancelled = () => {
    return (dispatch) => {
        dispatch({ type: PICTURE_SELECTION_CANCELLED });

        NavigationService.back();
    }
}

export const picture_selection_resume = (selectedImageArray) => {
    return (dispatch) => {
        dispatch({ type: PICTURE_SELECTION_RESUMED });

        NavigationService.navigate('PicturePicker', { preselectedImages: selectedImageArray });
    };
}
