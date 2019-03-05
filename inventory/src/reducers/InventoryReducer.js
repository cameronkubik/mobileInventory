import {
    INVENTORY_ACTIONS
} from '../actions/types';

const INITIAL_STATE = {
    // contains meta-data and product models
    categories: null, // Form: { {productModel}, {productModel}, ... }
    // Contains raw product data from wix queries
    products: null, // Form: { {wix-data}, {wix-data}, ... }
    newProduct: {
        name: '',
        description: '',
        dimensions: '',
        cost: 0,
        category: null,
        images: []
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INVENTORY_ACTIONS.Categories.load_success:
            return {
                ...state, 
                categories: action.payload
            };

        case ADD_INVENTORY_INPUT_CHANGE:
            return {
                ...state,
                newProduct: {
                    ...state.newProduct,
                    [action.payload.field]: action.payload.value
                }
            }
        
        default:
            return state;
    }
}