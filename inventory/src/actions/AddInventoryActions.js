import firebase from 'react-native-firebase';
import NavigationService from '../NavigationService';
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

        // TODO
        // make request to wix api for category collections
        // .then(successFunction)
        // .catch(failFunction)

        // placeholder:
        const loadedCategories = [
            { label: 'Apparel', value: 'app' },
            { label: 'Art', value: 'art' },
            { label: 'Bath', value: 'bat' },
            { label: 'Brick', value: 'bri' },
            { label: 'Corbels', value: 'cor' },
            { label: 'Doors', value: 'doo' },
            { label: 'Fountains', value: 'fou' },
            { label: 'Furniture', value: 'fur' },
            { label: 'Gates', value: 'gat' },
            { label: 'Hardware', value: 'har' },
            { label: 'Ironworks', value: 'iro' },
            { label: 'Lighting', value: 'lig' },
            { label: 'Lumber', value: 'lum' },
            { label: 'Mailboxes', value: 'mai' },
            { label: 'Mantels', value: 'man' },
            { label: 'Shutters', value: 'shu' },
            { label: 'Staircasing', value: 'sta' },
            { label: 'Stonework', value: 'sto' },
            { label: 'Tile', value: 'til' },
            { label: 'Urns', value: 'urn' },
            { label: 'Windows', value: 'win' }
        ];

        load_success(dispatch, { categories: loadedCategories });
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
