import Services from '../Services';
import { 
    PICKER_CHANGE,
    ADD_INVENTORY_INPUT_CHANGE,
    ITEM_PICTURES_SELECTED,
    SUBMIT_INVENTORY_ITEM,
    PICTURE_SELECTION_RESUMED
} from './types';

export const category_picker_change = (value) => {
    return {
        type: PICKER_CHANGE,
        payload: value
    }
};

export const add_inventory_input_change = (value, field) => {
    return {
        type: ADD_INVENTORY_INPUT_CHANGE,
        payload: { value, field }
    }
};

export const add_item_pictures = () => {
    return (dispatch) => {
        Services.Actions.openImagePicker(null, function(uri) {
            dispatch({
                type: ITEM_PICTURES_SELECTED,
                payload: Services.Models.__URI__(uri)
            });
        });
    }
};
