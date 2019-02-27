// Data model manager structure
const ModelManager = {
    __Credentials__: credentialsConstructor,
    __Image__: imageConstructor,
    __Account__: accountConstructor
}

function credentialsConstructor(authState) {
    const dataModel = {
        email: authState.email,
        password: authState.password
    };

    return dataModel;
};

function accountConstructor(accountState) {
    const { email, first, last, position, avatar } = accountState,
        fullname = `${first} ${last}`;

    const dataModel = {
        first,
        last,
        fullname,
        email,
        position,
        avatar
    };

    return dataModel;
};

function imageConstructor(pressEvent) {
    const { height, width, selected, selectedId } = pressEvent.nativeEvent;

    const dataModel = {
        height,
        width,
        uri: selected,
        fileId: selectedId
    };

    return dataModel;
};

export default ModelManager;