import Services from '../Services';
import {
    ADD_INVENTORY,
    ITEM_PICTURES_SELECTED,
    SUBMIT_INVENTORY_ITEM,
} from './types';

const { Actions } = ADD_INVENTORY;

export const category_picker_change = (value) => {
    return {
        type: Actions.PICKER_CHANGE,
        payload: value
    }
};

export const add_inventory_input_change = (value, field) => {
    return {
        type: Actions.INPUT_CHANGE,
        payload: { value, field }
    }
};

export const add_item_pictures = () => {
    return (dispatch) => {
        Services.Actions.openImagePicker(null, function(uri) {
            dispatch({
                type: Actions.IMAGE_SELECTED,
                payload: Services.Models.__URI__(uri)
            });
        });
    }
};
