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
