import firebase from 'react-native-firebase';
import ModelManager from './ModelManager';
import { reduxStore } from './App';

const StoreManager = {
    getLoginCredentials,
    getSecureAccountData,
    getUserAccountData
}

function getLoginCredentials() {
    const { auth } = reduxStore.getState(),
        credentialsModel = ModelManager.__Credentials__(auth);

    return credentialsModel;
}

function getUserAccountData() {
    const { userAccount } = reduxStore.getState(),
        accountModel = ModelManager.__Account__(userAccount);

    return accountModel;
}

function getSecureAccountData() {
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

export default StoreManager;