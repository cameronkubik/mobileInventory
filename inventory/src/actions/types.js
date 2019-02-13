// Action types defined in this file

// Login page actions
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';

// Create Profile actions
export const FIRST_CHANGED = 'first_changed';
export const LAST_CHANGED = 'last_changed';
export const CREATE_EMAIL_CHANGED = 'create_email_changed';
export const CREATE_PASSWORD_CHANGED = 'create_password_changed';
export const CONFIRM_PASSWORD_CHANGED = 'confirm_password_changed';
export const POSITION_CHANGED = 'position_changed';
export const CREATE_USER_SUCCESS = 'create_user_success';
export const CREATE_USER_FAIL = 'create_user_fail';
export const CREATE_USER = 'create_user';
export const AVATAR_PRESS = 'avatar_press';
export const AVATAR_SELECTED = 'avatar_selected';

// Profile actions
export const LOAD_USER = 'load_user';
export const LOAD_USER_SUCCESS = 'load_user_success';
export const LOAD_USER_FAIL = 'load_user_fail';
export const LOG_OUT = 'log_out';

// Add Inventory actions
export const LOAD_ADD_INVENTORY = 'load_add_inventory';
export const LOAD_ADD_INVENTORY_SUCCESS = 'load_add_inventory_success';
export const LOAD_ADD_INVENTORY_FAIL = 'load_add_inventory_fail';
export const PICKER_CHANGE = 'picker_change';
export const TEXT_INPUT_CHANGE = 'text_input_change';
export const ADD_ITEM_PICTURES = 'add_item_pictures';
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
export const INVENTORY_ITEM_PRESS = 'inventory_item_press';

// View Items actions
export const LOAD_CATEGORY_ITEMS = 'load_category_items';
export const LOAD_CATEGORY_ITEMS_SUCCESS = 'load_category_items_success';
export const LOAD_CATEGORY_ITEMS_FAIL = 'load_category_items_fail';
export const ITEMS_SEARCH_TEXT_CHANGED = 'items_search_text_changed';
export const ITEMS_SEARCH_TEXT_CLEARED = 'items_search_text_cleared';
