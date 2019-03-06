import rnFirebase from 'react-native-firebase';
import firebase from 'firebase';
// import RNFetchBlob from 'rn-fetch-blob';

// const Blob = RNFetchBlob.polyfill.Blob;
/** Database Manager class */
const DatabaseManager = {
    get_item_detail,
    get_inventory_categories,
    get_category_items,
    // production methods below //
    AUTH: {
        login: loginWithCredentials,
        signUp: createAccountWithCredentials,
        logout: logoutCurrentUser
    },
    GET: {
        accountModel: getAccountModel,
        INVENTORY: {
            categories: getCategoryNames
        }
    },
    PUT: {
        accountModel: putAccountModel
    }
};

/** Production methods */
// Account //
function getAccountModel() {
    const { uid } = rnFirebase.auth().currentUser;

    return (
        rnFirebase.firestore()
            .collection('users')
            .doc(uid)
            .get()
    );
}
function putAccountModel(userCredentials, accountModel) {
    const { uid } = userCredentials.user;

    return (
        rnFirebase.firestore()
            .collection('users')
            .doc(uid)
            .set(accountModel)
    );
}
function putAccountModelNEW(userCredentials, accountModel) {
    return new Promise((resolve, reject) => {
        const { uid } = userCredentials.user;
        var storageRef = firebase.storage().ref(),
            acctAvatarRef = storageRef.child(`userAvatars/${uid}/avatar.jpg`),
            uploadBlob = null;
            
        const imageFile = RNFetchBlob.wrap(accountModel.avatar.uri);
        Blob.build(imageFile, { type: 'image/jpg' })
            .then((imageBlob) => {
                uploadBlob = imageBlob;
                return acctAvatarRef.put(imageBlob, { contentType: 'image/jpg' });
            })
            .then(() => {
                uploadBlob.close();
                return acctAvatarRef.getDownloadURL();
            })
            .then((url) => {
                accountModel.avatar.url = url;
                return (
                    rnFirebase.firestore()
                        .collection('users')
                        .doc(uid)
                        .set(accountModel));
            })
            .then(resolve)
            .catch(reject);
    });
}
// Authentication //
function loginWithCredentials(credentialsModel) {
    const { email, password } = credentialsModel;

    return (
        rnFirebase.auth()
            .signInWithEmailAndPassword(email, password)
    );
}
function createAccountWithCredentials(credentialsModel) {
    const { email, password } = credentialsModel;

    return (
        rnFirebase.auth()
            .createUserWithEmailAndPassword(email, password)
    );
}
function logoutCurrentUser() {
    rnFirebase.auth().signOut();
}
// Categories //
function getCategoryNames() {
    return (
        rnFirebase.firestore()
            .collection('categories')
            .doc('nameList')
            .get()
    );
}
/*******************************************/

// TODO
function get_item_detail(itemID) {
    // make wix api call

    // placeholder
    return { 
        pictures: [{
            filename: "IMG_0003.JPG",
            height: 2002,
            isStored: true,
            playableDuration: 0,
            uri: "assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG",
            width: 3000
        }, {
            filename: "IMG_0002.JPG",
            height: 2848,
            isStored: true,
            playableDuration: 0,
            uri: "assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG",
            width: 4288
        }, {
            filename: "IMG_0001.JPG",
            height: 2848,
            isStored: true,
            playableDuration: 0,
            uri: "assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG",
            width: 4288
        }],
        description: 'example description here',
        dimensions: '26” L, 88” W, 21”H ',
        category: 'bri',
        itemID: '0495'
    }
}

// TODO
function get_inventory_categories() {
    // placeholder
    return [
        { name: 'Apparel', items: 12, avatarUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' },
        { name: 'Art', items: 8, avatarUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG' },
        { name: 'Bath', items: 16, avatarUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG' },
        { name: 'Brick', items: 14, avatarUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' },
        { name: 'Corbels', items: 3, avatarUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG' },
        { name: 'Doors', items: 18, avatarUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG' },
        { name: 'Fountains', items: 11, avatarUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' },
        { name: 'Furniture', items: 5, avatarUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG' },
        { name: 'Gates', items: 13, avatarUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG' },
        { name: 'Hardware', items: 10, avatarUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' },
        { name: 'Ironworks', items: 3, avatarUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG' },
        { name: 'Lighting', items: 22, avatarUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG' },
        { name: 'Lumber', items: 18, avatarUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' },
        { name: 'Mailboxes', items: 5, avatarUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG' },
        { name: 'Mantels', items: 19, avatarUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG' },
        { name: 'Shutters', items: 24, avatarUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' },
        { name: 'Staircasing', items: 18, avatarUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG' },
        { name: 'Stonework', items: 10, avatarUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG' },
        { name: 'Tile', items: 12, avatarUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' },
        { name: 'Urns', items: 8, avatarUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG' },
        { name: 'Windows', items: 16, avatarUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG' },
    ];
}

function get_category_items() {
    return [
        { name: 'Tee Shirt', category: 'Apparel', itemID: 1, imageUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG', color: 'white' , cost: 121 },
        { name: 'Sweatshirt', category: 'Apparel', itemID: 2, imageUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG', color: 'blue' , cost: 271 },
        { name: 'Long sleeve tee', category: 'Apparel', itemID: 3, imageUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG', color: 'black' , cost: 96 },
        { name: 'Tee Shirt', category: 'Apparel', itemID: 4, imageUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG', color: 'blue' , cost: 199 },
        { name: 'Long sleeve tee', category: 'Apparel', itemID: 5, imageUri: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG', color: 'black' , cost: 138 },
        { name: 'Tee Shirt', category: 'Apparel', itemID: 6, imageUri: 'assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG', color: 'white' , cost: 300 },
        { name: 'Tee Shirt', category: 'Apparel', itemID: 7, imageUri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG', color: 'blue' , cost: 385 },
    ];
}

export default DatabaseManager;
