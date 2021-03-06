import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;
const NavigationService = {
    setTopLevelNavigator,
    navigate,
    replace,
    reset,
    back,
    push,
    createProfileTransition
};

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function replace(routeName) {
    _navigator.dispatch(
        StackActions.replace({ routeName })
    );
}

function reset() {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })], 
        })
    );
}

function back() {
    _navigator.dispatch(
        NavigationActions.back()
    );
}

function push(routeName, params) {
    _navigator.dispatch(
        StackActions.push({
            routeName,
            params: params || {}
        })
    );
}

function createProfileTransition() {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Profile' })]
    });

    _navigator.dispatch(resetAction);
}

export default NavigationService;