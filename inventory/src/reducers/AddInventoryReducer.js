import { 
    // LOAD_ADD_INVENTORY_SUCCESS, 
    // LOAD_ADD_INVENTORY_FAIL,
    // PICKER_CHANGE,
    // ADD_INVENTORY_INPUT_CHANGE,
    ADD_ITEM_PICTURES,
    SUBMIT_INVENTORY_ITEM,
    ITEM_PICTURES_SELECTED,
    PICTURE_SELECTION_FINISHED,
    PICTURE_SELECTION_CANCELLED,
    PICTURE_SELECTION_RESUMED,
    EDIT_INVENTORY_ITEM,
    INVENTORY_ACTIONS,
    NAVIGATE_ADD_INVENTORY
} from '../actions/types';

const INITIAL_STATE = {
    pictures: null, // deprecated
    categories: [],// deprecated
    description: '',// deprecated
    dimensions: '',// deprecated


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

        // case LOAD_ADD_INVENTORY_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false, 
        //         categories: action.payload
        //     };

        // case LOAD_ADD_INVENTORY_FAIL:
        //     return { 
        //         ...state, 
        //         loading: false,
        //         error: 'Failed to load categories, please try again.' 
        //     };

        case PICKER_CHANGE:
            return {
                ...state,
                selectedCategory: action.payload
            };

        // case ADD_INVENTORY_INPUT_CHANGE:
        //     return {
        //         ...state,
        //         [action.payload.field]: action.payload.value 
        //     };

        case ADD_ITEM_PICTURES:
            return {
                ...state,
                isSelectingPictures: true
            };

        case ITEM_PICTURES_SELECTED:
            return {
                ...state,
                pictures: action.payload
            };

        case PICTURE_SELECTION_FINISHED:
            return {
                ...state,
                isSelectingPictures: false
            };

        case PICTURE_SELECTION_CANCELLED:
            return {
                ...state,
                isSelectingPictures: false,
                pictures: null
            };

        case PICTURE_SELECTION_RESUMED:
            return {
                ...state,
                isSelectingPictures: true,
            }
            
        default:
            return state;
    }
}