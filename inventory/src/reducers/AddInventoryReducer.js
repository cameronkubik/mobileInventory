import { 
    LOAD_ADD_INVENTORY, LOAD_ADD_INVENTORY_SUCCESS, 
    LOAD_ADD_INVENTORY_FAIL, PICKER_CHANGE,
    TEXT_INPUT_CHANGE, ADD_ITEM_PICTURES,
    SUBMIT_INVENTORY_ITEM,
    ITEM_PICTURES_SELECTED,
    PICTURE_SELECTION_FINISHED,
    PICTURE_SELECTION_CANCELLED,
    PICTURE_SELECTION_RESUMED,
    EDIT_INVENTORY_ITEM
} from '../actions/types';

const INITIAL_STATE = {
    pictures: null,
    categories: [],
    selectedCategory: null,
    description: '',
    dimensions: '',
    loading: false,
    error: null,
    isSelectingPictures: false,
    isEditingItem: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_INVENTORY_ITEM:
            const { pictures, description, dimensions, category } = action.payload;
            
            return {
                ...INITIAL_STATE,
                pictures,
                description,
                dimensions,
                selectedCategory: category,
                isEditingItem: true
            };

        case LOAD_ADD_INVENTORY:
        // Possible problem here, this is called on componentWillMount 
        // ...which may cause isEditingItem to always be false
            return { ...state, loading: true, isEditingItem: false };

        case LOAD_ADD_INVENTORY_SUCCESS:
            return {
                ...state,
                loading: false, 
                categories: action.payload
            };

        case LOAD_ADD_INVENTORY_FAIL:
            return { 
                ...state, 
                loading: false,
                error: 'Failed to load categories, please try again.' 
            };

        case PICKER_CHANGE:
            return {
                ...state,
                selectedCategory: action.payload.value
            };

        case TEXT_INPUT_CHANGE:
            return {
                ...state,
                [action.payload.field]: action.payload.value 
            };

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