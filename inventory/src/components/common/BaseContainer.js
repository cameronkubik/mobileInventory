import React, { Component } from 'react';
import { View } from 'react-native';
import { Styles } from '../util/CommonStyles';

class BaseContainer extends Component {
    render() {
        return (
            <View style={[Styles.BaseContainer, this.props.customStyle]}>
                {this.props.children}
            </View>
        );
    }
}

export { BaseContainer };