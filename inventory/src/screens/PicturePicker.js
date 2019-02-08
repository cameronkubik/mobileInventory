import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { item_pictures_selected, picture_selection_finished } from '../actions';
import { BaseContainer } from '../components/common';

class HeaderRightButton extends Component {

    render() {
        return (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={this.props.onPress}
            >
                <Text style={{ fontSize: 18, color: 'white' }}>
                    Done
                </Text>
            </TouchableOpacity>
        );
    }
}

class PicturePicker extends Component {
    static navigationOptions = {
        title: 'Select Item Pictures',
        headerRight: <HeaderRightButton onPress={arg => console.log(arg)} />
    }

    onDonePress() {
        debugger;
        //TODO not working
        this.props.picture_selection_finished();
    }

    picturesSelectedCallback(imageResults) {
        this.props.item_pictures_selected(imageResults);
    }

    render() {
        return (
            <BaseContainer>
                <CameraRollPicker
                    callback={this.picturesSelectedCallback.bind(this)} />
            </BaseContainer>
        )
    }
}

export default connect(null, {
    item_pictures_selected, picture_selection_finished
})(PicturePicker);
