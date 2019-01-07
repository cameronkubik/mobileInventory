import React, { Component } from 'react';
import { View } from 'react-native';


class Container extends Component {
    render() {
        return (
            <View style={[Styles.container, this.props.customStyle]}>
                {this.props.children}
            </View>
        );
    }
}

const Styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

export { Container };