import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={style.spinner}>
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