import Services from '../Services';
import { 
    PICKER_CHANGE, ADD_INVENTORY_INPUT_CHANGE,
    ADD_ITEM_PICTURES, ITEM_PICTURES_SELECTED,
    PICTURE_SELECTION_FINISHED, SUBMIT_INVENTORY_ITEM,
    PICTURE_SELECTION_CANCELLED, PICTURE_SELECTION_RESUMED
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
    Services.Navigation.navigate('PicturePicker');

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

        Services.Navigation.back();
    }
}

export const picture_selection_cancelled = () => {
    return (dispatch) => {
        dispatch({ type: PICTURE_SELECTION_CANCELLED });

        Services.Navigation.back();
    }
}

export const picture_selection_resume = (selectedImageArray) => {
    return (dispatch) => {
        dispatch({ type: PICTURE_SELECTION_RESUMED });

        Services.Navigation.navigate('PicturePicker', { preselectedImages: selectedImageArray });
    };
}
