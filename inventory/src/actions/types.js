// Action types defined in this file

// Login page actions
export const AUTH_INPUT_CHANGE = 'auth_input_change';
export const LOGIN_USER_BEGIN = 'login_user_begin';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const AUTH_RESET = 'auth_reset';

// Create Profile actions
export const CREATE_PROFILE_INPUT_CHANGE = 'create_profile_input_change';
export const CREATE_USER_SUCCESS = 'create_user_success';
export const CREATE_USER_FAIL = 'create_user_fail';
export const CREATE_USER_BEGIN = 'create_user_begin';
export const UPDATE_USER_BEGIN = 'update_user_begin';
export const UPDATE_USER_SUCCESS = 'update_user_success';
export const UPDATE_USER_FAIL = 'update_user_fail';
export const AVATAR_PRESS = 'avatar_press';
export const AVATAR_SELECTED = 'avatar_selected';
export const CANCEL_CREATE_PROFILE = 'cancel_create_profile';
export const CANCEL_EDIT_PROFILE = 'cancel_edit_profile';
// Create Profile input types
export const AUTH_FIRST_INPUT = 'auth_first_input';
export const AUTH_LAST_INPUT = 'auth_last_input';
export const AUTH_EMAIL_INPUT = 'auth_email_input';
export const AUTH_PASSWORD_INPUT = 'auth_password_input';
export const AUTH_CONFIRMED_PASSWORD_INPUT = 'auth_confirmed_password_input';
export const AUTH_POSITION_INPUT = 'auth_position_input';

// Profile actions
export const LOAD_USER_BEGIN = 'load_user';
export const LOAD_USER_SUCCESS = 'load_user_success';
export const LOAD_USER_FAIL = 'load_user_fail';
export const LOG_OUT = 'log_out';
export const EDIT_PROFILE_PRESS = 'edit_profile_press';
export const NAVIGATE_ADD_INVENTORY = 'navigate_add_inventory';
export const NAVIGATE_VIEW_INVENTORY = 'navigate_view_inventory';

// Add Inventory actions
// export const LOAD_ADD_INVENTORY = 'load_add_inventory';
// export const LOAD_ADD_INVENTORY_SUCCESS = 'load_add_inventory_success';
// export const LOAD_ADD_INVENTORY_FAIL = 'load_add_inventory_fail';
export const PICKER_CHANGE = 'picker_change';
export const ADD_INVENTORY_INPUT_CHANGE = 'add_inventory_input_change';
// export const ADD_ITEM_PICTURES = 'add_item_pictures';
export const ITEM_PICTURES_SELECTED = 'item_pictures_selected';
export const PICTURE_SELECTION_FINISHED = 'picture_selection_finished';
export const PICTURE_SELECTION_CANCELLED = 'picture_selection_cancelled';
export const PICTURE_SELECTION_RESUMED = 'picture_selection_resumed';
export const SUBMIT_INVENTORY_ITEM = 'submit_inventory_item';

// Item Detail actions
export const LOAD_ITEM_DETAIL = 'load_item_detail';
export const LOAD_ITEM_DETAIL_SUCCESS = 'load_item_detail_success';
export const LOAD_ITEM_DETAIL_FAIL = 'load_item_detail_fail';
export const EDIT_INVENTORY_ITEM = 'edit_inventory_item';
export const REMOVE_INVENTORY_ITEM = 'remove_inventory_item';

// View Inventory actions
export const LOAD_INVENTORY_CATEGORIES = 'load_inventory_categories';
export const LOAD_INVENTORY_CATEGORIES_SUCCESS = 'load_inventory_categories_success';
export const LOAD_INVENTORY_CATEGORIES_FAIL = 'load_inventory_categories_fail';
export const CATEGORY_SEARCH_TEXT_CHANGED = 'category_search_text_changed';
export const CATEGORY_SEARCH_TEXT_CLEARED = 'category_search_text_cleared';
export const INVENTORY_CATEGORY_PRESS = 'inventory_category_press';

// View Items actions
export const LOAD_CATEGORY_ITEMS = 'load_category_items';
export const LOAD_CATEGORY_ITEMS_SUCCESS = 'load_category_items_success';
export const LOAD_CATEGORY_ITEMS_FAIL = 'load_category_items_fail';
export const ITEMS_SEARCH_TEXT_CHANGED = 'items_search_text_changed';
export const ITEMS_SEARCH_TEXT_CLEARED = 'items_search_text_cleared';
export const INVENTORY_ITEM_PRESS = 'inventory_item_press';

// Camera Gallery actions
export const GALLERY_SET_TYPE = 'gallery_set_type';
export const GALLERY_IMAGE_PRESS = 'gallery_image_press';
export const GALLERY_CAMERA_PRESS = 'gallery_camera_press';
export const CAMERA_CAPTURE_PRESS = 'camera_capture_press';
export const CANCEL_GALLERY_SELECTION = 'cancel_gallery_selection';

// Inventory Data actions
export const INVENTORY_ACTIONS = {
    Categories: {
        load_begin: 'inv_category_load_begin',
        load_success: 'inv_category_load_success',
        load_fail: 'inv_category_load_fail',
    }
}