import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Styles } from '../util/CommonStyles';

class BaseContainer extends Component {
    render() {
        return (
            <SafeAreaView style={[Styles.BaseContainer, this.props.customStyle]}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}

export { BaseContainer };