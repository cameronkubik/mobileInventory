import { ImagePickerIOS } from 'react-native';

const CommonActions = {
    openImagePicker,
    consoleLog
}

function openImagePicker(config = null, successCallback, cancelCallback = consoleLog) {
    ImagePickerIOS.openSelectDialog(config, successCallback, cancelCallback);
}
function consoleLog(arg) {
    console.log(arg);
}

export default CommonActions;