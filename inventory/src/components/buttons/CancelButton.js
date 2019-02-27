import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { cancelPress } from '../../actions';
import { Styles as CommonStyles, colors } from '../util/CommonStyles';

/** NOTE: Must provide action type to component as inherited prop */
class CancelButton extends Component {

    _onPress() {
        this.props.cancelPress(this.props.type);
    }

    render() {
        return (
            <Button
                title='Cancel'
                color='#fff'
                buttonStyle={Styles.button}
                containerViewStyle={Styles.container}
                onPress={this._onPress.bind(this)}
            />
        );
    }
}

const Styles = {
    button: {
        padding: 0,
        backgroundColor: colors.header
    }
}

export default connect(null, { cancelPress })(CancelButton);