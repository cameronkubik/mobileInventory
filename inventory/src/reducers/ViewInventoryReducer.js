import { 
    LOAD_INVENTORY_CATEGORIES,
    LOAD_INVENTORY_CATEGORIES_SUCCESS,
    LOAD_INVENTORY_CATEGORIES_FAIL,
    CATEGORY_SEARCH_TEXT_CHANGED,
    CATEGORY_SEARCH_TEXT_CLEARED
} from '../actions/types';

const INITIAL_STATE = {
    searchText: '',
    categories: null,
    filteredCategories: null,
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_INVENTORY_CATEGORIES:
            return { ...state, loading: true };

        case LOAD_INVENTORY_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: false };

        case LOAD_INVENTORY_CATEGORIES_FAIL:
            return { 
                ...state, 
                loading: false,
                error: action.payload.errorMsg
            };

        case CATEGORY_SEARCH_TEXT_CHANGED:
            return {
                ...state,
                searchText: action.payload,
                filteredCategories: searchFilter(action.payload, state.categories)
            };

        case CATEGORY_SEARCH_TEXT_CLEARED:
            return {
                ...state,
                filteredCategories: null,
                searchText: ''
            }
            
        default:
            return state;
    }
}

const searchFilter = (search, categories) => {
    var returnCategories = [],
        target = search.toLowerCase();

    categories.forEach(category => {
        let name = category.name.toLowerCase();

        if (name.includes(target)) { returnCategories.push(category) };
    });

    return returnCategories;
}