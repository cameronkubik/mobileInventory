import { 
    LOAD_ITEM_DETAIL,
    LOAD_ITEM_DETAIL_SUCCESS,
    LOAD_ITEM_DETAIL_FAIL,
    INVENTORY_ITEM_PRESS
} from '../actions/types';

const INITIAL_STATE = {
    category: null,
    itemID: null,
    pictures: null,
    description: '',
    dimensions: '',
    loaded: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_ITEM_DETAIL:
            return { ...state, loading: true };

        case LOAD_ITEM_DETAIL_SUCCESS:
            const { 
                category, itemID, pictures,
                description, dimensions 
            } = action.payload;

            return {
                ...state,
                loading: false, 
                category,
                itemID, 
                pictures, 
                description, 
                dimensions,
                error: ''
            };

        case LOAD_ITEM_DETAIL_FAIL:
            return { 
                ...state, 
                loading: false,
                error: 'Failed to load item, please try again.' 
            };
            
        default:
            return state;
    }
}