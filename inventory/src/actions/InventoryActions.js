import _ from 'lodash';
import Services from '../Services';
import { INVENTORY_ACTIONS } from './types';

// this function loads all data for the app related to inventory products
export const masterInventoryLoad = () => {
    return (dispatch) => {
        loadCategories(dispatch);

        // more laod functions here
    }
}

function loadCategories(dispatch) {
    dispatch({ type: INVENTORY_ACTIONS.Categories.load_begin });

    Services.Database.GET.INVENTORY.categories()
        .then(snapshot => loadCategoriesSuccess(dispatch, snapshot))
        .catch(error => loadCategoriesFail(dispatch, error));
}

function loadCategoriesSuccess(dispatch, snapshot) {
    let loadedCategories = {};

    _.each(snapshot.data(), function(value, label) {
        let categoryModel = Services.Models.__CATEGORY__(label, value);

        loadedCategories[categoryModel.label] = categoryModel;
    });

    dispatch({
        type: INVENTORY_ACTIONS.Categories.load_success,
        payload: loadedCategories
    });

}
function loadCategoriesFail(dispatch, error) {
    dispatch({
        type: INVENTORY_ACTIONS.Categories.load_fail,
        payload: error
    });

    Services.Actions.consoleLog(error);
}