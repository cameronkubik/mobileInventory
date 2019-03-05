// Data model manager structure
const ModelManager = {
    __Credentials__: credentialsConstructor,
    __Image__: imageConstructor,
    __URI__: uriConstructor,
    __Account__: accountConstructor
}

function uriConstructor(string) {
    const dataModel = {
        uri: string
    };

    return dataModel;
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
        fullName = `${first} ${last}`;

    const dataModel = {
        first,
        last,
        fullName,
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