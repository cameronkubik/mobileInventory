// Constant colors
const colors = {
    header: '#606060',
    base: '#d2d3db',
    inputs: 'lightgray'
};

export const Styles = {
    BaseContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.base
    },
    inputGeneral: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderBottomColor: 'black',
        height: 60,
        width: '75%',
        borderRadius: 30,
        padding: 10,
        margin: 5,
        backgroundColor: colors.inputs
    },
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        margin: 3
    },
    header: {
        outerContainer: { 
            width: '100%', 
            backgroundColor: colors.header,
            height: 48,
            padding: 10,
            borderBottomColor: colors.header
        },
        innerContainer: {
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.header
        },
    },
    dev: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'red'
    }
};

