import {
    INVENTORY_ACTIONS,
    ADD_INVENTORY_INPUT_CHANGE,
    ITEM_PICTURES_SELECTED,
    PICKER_CHANGE
} from '../actions/types';
import Services from '../Services';

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
                categories: action.payload.categoryModels
            };

        case ADD_INVENTORY_INPUT_CHANGE:
            return {
                ...state,
                newProduct: {
                    ...state.newProduct,
                    [action.payload.field]: action.payload.value
                }
            };
        
        case ITEM_PICTURES_SELECTED:
            return {
                ...state,
                newProduct: {
                    ...state.newProduct,
                    images:  [ ...state.newProduct.images, action.payload ]
                }
            };

        case PICKER_CHANGE:
            return {
                ...state,
                newProduct: {
                    ...state.newProduct,
                    category: action.payload
                }
            };
        
        default:
            return state;
    }
}