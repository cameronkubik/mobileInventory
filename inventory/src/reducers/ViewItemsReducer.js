import { 
    LOAD_CATEGORY_ITEMS, 
    LOAD_CATEGORY_ITEMS_SUCCESS,
    LOAD_CATEGORY_ITEMS_FAIL,
    ITEMS_SEARCH_TEXT_CHANGED,
    ITEMS_SEARCH_TEXT_CLEARED,
    INVENTORY_CATEGORY_PRESS
} from '../actions/types';

const INITIAL_STATE = {
    searchText: '',
    parentCategory: '',
    items: null,
    filteredItems: null,
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_CATEGORY_ITEMS:
            return { ...state, loading: true };

        case LOAD_CATEGORY_ITEMS_SUCCESS:
            return { ...state, items: action.payload, loading: false };

        case LOAD_CATEGORY_ITEMS_FAIL:
            return { 
                ...state, 
                loading: false,
                error: action.payload.errorMsg
            };

        case ITEMS_SEARCH_TEXT_CHANGED:
            return {
                ...state,
                searchText: action.payload,
                filteredItems: searchFilter(action.payload, state.items)
            };

        case ITEMS_SEARCH_TEXT_CLEARED:
            return {
                ...state,
                filteredItems: null,
                searchText: ''
            };

        case INVENTORY_CATEGORY_PRESS:
            return {
                ...state,
                parentCategory: action.payload
            };
            
        default:
            return state;
    }
}

const searchFilter = (search, items) => {
    if (!search) return items;
    
    var returnItems = [],
        target = search.toLowerCase();

    items.forEach(item => {
        let name = item.name.toLowerCase(),
            color = item.color.toLowerCase(),
            id = item.itemID.toString(),
            cost = item.cost.toString();

        if (name.includes(target)) { returnItems.push(item); }
        else if (color.includes(target)) { returnItems.push(item); }
        else if (id.includes(target)) { returnItems.push(item); }
        else if (cost.includes(target)) { returnItems.push(item); }
    });

    return returnItems;
}