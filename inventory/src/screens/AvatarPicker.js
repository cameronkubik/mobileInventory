import React, { Component } from 'react';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { avatarSelected } from '../actions';
import { BaseContainer } from '../components/common';

class AvatarPicker extends Component {
    static navigationOptions = {
        title: 'Select Avatar'
    }

    imageSelectedCallback(imageResult) {
        this.props.avatarSelected(imageResult);
    }

    render() {
        return (
            <BaseContainer>
                <CameraRollPicker
                    callback={this.imageSelectedCallback.bind(this)} />
            </BaseContainer>
        )
    }
}

export default connect(null, { avatarSelected })(AvatarPicker);
