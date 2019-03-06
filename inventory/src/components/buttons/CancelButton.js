import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { cancelPress } from '../../actions';
import { colors } from '../util/CommonStyles';

/** NOTE: Must provide action type to component as inherited prop */
class CancelButton extends Component {

    _onPress() {
        this.props.cancelPress(this.props.type, this.props.isSubmit);
    }

    render() {
        let _title = this.props.isSubmit ? 'Submit' : 'Cancel',
            _color = this.props.isSubmit ? 'orange' : '#fff';

        return (
            <Button
                title={_title}
                color={_color}
                buttonStyle={Styles.button}
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