import ModelManager from './ModelManager';
import { reduxStore } from '../App';

const StoreManager = {
    generateCredentialsModel,
    generateSecureAccountData,
    generateAccountModel
}

/** CREDENTIALS */
function generateCredentialsModel(collectedData) {
    if (collectedData) {
        return generateCredentialsModelFromData(collectedData);
    }

    return generateCredentialsModelFromLogin();
}
function generateCredentialsModelFromData(collectedData) {
    const credentialsModel = ModelManager.__Credentials__(collectedData);

    return credentialsModel;
}
function generateCredentialsModelFromLogin() {
    const { auth } = reduxStore.getState(),
        credentialsModel = ModelManager.__Credentials__(auth);

    return credentialsModel;
}
/*******************************************/

/** ACCOUNT */
function generateAccountModel() {
    const { userAccount } = reduxStore.getState(),
        accountModel = ModelManager.__Account__(userAccount);

    return accountModel;
}

function generateSecureAccountData() {
    const { userAccount } = reduxStore.getState(),
        { password, confirmedPassword } = userAccount,
        mismatchingPasswords = (password !== confirmedPassword),
        missingPassword = (!password);

    const dataModel = {
        mismatchingPasswords,
        missingPassword,
        password
    };

    return dataModel;
}
/*******************************************/

export default StoreManager;