import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, customStyle }) => {
    return (
        <View style={[style.spinner, customStyle]}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
}

const style = {
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
};

export  { Spinner };