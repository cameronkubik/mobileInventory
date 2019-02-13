import DbManager from '../DatabaseManager';
import {
    LOAD_CATEGORY_ITEMS, 
    LOAD_CATEGORY_ITEMS_SUCCESS,
    LOAD_CATEGORY_ITEMS_FAIL,
    ITEMS_SEARCH_TEXT_CHANGED,
    ITEMS_SEARCH_TEXT_CLEARED
} from '../actions/types';

export const load_category_items = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_CATEGORY_ITEMS });

        const loadedItems = DbManager.get_category_items();

        if (!loadedItems) {
            load_fail(dispatch, { code: -1, message: 'Failed to load items, please try again.' });
            return;
        }

        load_success(dispatch, { items: loadedItems});
    }
}

export const item_search_text_changed = (value) => {
    return {
        type: ITEMS_SEARCH_TEXT_CHANGED,
        payload: value
    };
}

export const item_search_text_cleared = () => {
    return { type: ITEMS_SEARCH_TEXT_CLEARED };
}

// Helper functions
const load_success = (dispatch, returnData) => {
    dispatch({ 
        type: LOAD_CATEGORY_ITEMS_SUCCESS, 
        payload: returnData.items
    });
};

// TODO
const load_fail = (dispatch, error) => {
    dispatch({ 
        type: LOAD_CATEGORY_ITEMS_FAIL, 
        payload: {
            errorCode: error.code,
            errorMsg: error.message
        }
    });
};


