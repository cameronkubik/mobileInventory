import {
    SUBMIT_INVENTORY_ITEM,
    EDIT_INVENTORY_ITEM,
    INVENTORY_ACTIONS,
    NAVIGATE_ADD_INVENTORY,
    ADD_INVENTORY
} from '../actions/types';

const { Actions } = ADD_INVENTORY;

const INITIAL_STATE = {
    categories: [],
    selectedCategory: null,
    loading: false,
    error: null,
    isSelectingPictures: false,
    isEditMode: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INVENTORY_ACTIONS.Categories.load_begin:
            return {
                ...state,
                loading: true
            };
        case INVENTORY_ACTIONS.Categories.load_success:
            return {
                ...state,
                loading: false
            };
        case INVENTORY_ACTIONS.Categories.load_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case NAVIGATE_ADD_INVENTORY:
            return {
                ...state,
                isEditMode: false
            };

        case INVENTORY_ACTIONS.Categories.load_success:
            return {
                ...state, 
                categories: action.payload.pickerModels
            };
            // TODO - where did this come from ... maybe item detail page
        case EDIT_INVENTORY_ITEM:
            const { pictures, description, dimensions, category } = action.payload;
            
            return {
                ...INITIAL_STATE,
                pictures,
                description,
                dimensions,
                selectedCategory: category,
                isEditMode: true
            };

        case Actions.PICKER_CHANGE:
            return {
                ...state,
                selectedCategory: action.payload
            };
            
        default:
            return state;
    }
}