import DbManager from '../DatabaseManager';
import {
    LOAD_INVENTORY_CATEGORIES,
    LOAD_INVENTORY_CATEGORIES_SUCCESS,
    LOAD_INVENTORY_CATEGORIES_FAIL,
    CATEGORY_SEARCH_TEXT_CHANGED,
    CATEGORY_SEARCH_TEXT_CLEARED,
    INVENTORY_CATEGORY_PRESS,
} from '../actions/types';
import NavigationService from '../NavigationService';

export const load_inventory_categories = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_INVENTORY_CATEGORIES });

        const loadedCategories = DbManager.get_inventory_categories();

        if (!loadedCategories) {
            load_fail(dispatch, { code: -1, message: 'Failed to load categories, please try again.' });
            return;
        }

        load_success(dispatch, { categories: loadedCategories});
    }
}

export const category_search_text_changed = (value) => {
    return {
        type: CATEGORY_SEARCH_TEXT_CHANGED,
        payload: value
    };
}

export const category_search_text_cleared = () => {
    return { type: CATEGORY_SEARCH_TEXT_CLEARED };
}

export const inventory_category_press = (categoryName) => {
    return (dispatch) => {
        dispatch({
            type: INVENTORY_CATEGORY_PRESS,
            payload: categoryName
        });

        NavigationService.navigate('ViewItems');
    };
}

// Helper functions
const load_success = (dispatch, returnData) => {
    dispatch({ 
        type: LOAD_INVENTORY_CATEGORIES_SUCCESS, 
        payload: returnData.categories
    });
};

// TODO
const load_fail = (dispatch, error) => {
    dispatch({ 
        type: LOAD_INVENTORY_CATEGORIES_FAIL, 
        payload: {
            errorCode: error.code,
            errorMsg: error.message
        }
    });
};


