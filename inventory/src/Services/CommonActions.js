import { ImagePickerIOS } from 'react-native';

const CommonActions = {
    openImagePicker,
    consoleLog,
    debug
}

function openImagePicker(config = null, successCallback, cancelCallback = consoleLog) {
    ImagePickerIOS.openSelectDialog(config, successCallback, cancelCallback);
}
function consoleLog(arg) {
    console.log(arg);
}
function debug(arg) {
    console.log(arg);
    debugger;
}

export default CommonActions;