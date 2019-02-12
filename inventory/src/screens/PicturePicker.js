import React, { Component } from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { 
    item_pictures_selected, picture_selection_finished,
    picture_selection_cancelled
} from '../actions';
import NavigationService from '../NavigationService';
import { BaseContainer } from '../components/common';

class PicturePicker extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Select Item Pictures',
            headerRight: (
                <Button
                    onPress={navigation.getParam('onDonePress') || (() => 1)}
                    title='Done'
                    color='white'
                />
            ),
            headerLeft: (
                <Button 
                    onPress={navigation.getParam('onBackPress') || (() => 0)}
                    title='Cancel'
                    color='white'
                />
            )
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ onDonePress: this._onDonePress.bind(this) })
        this.props.navigation.setParams({ onBackPress: this._onBackPress.bind(this) })
    }

    _onDonePress = () => {
        this.props.picture_selection_finished();
    }

    _onBackPress = () => {
        this.props.picture_selection_cancelled();
    }

    picturesSelectedCallback(imageResults) {
        this.props.item_pictures_selected(imageResults);
    }

    render() {
        return (
            <BaseContainer>
                <CameraRollPicker
                    callback={this.picturesSelectedCallback.bind(this)} 
                    selected={this.props.navigation.getParam('preselectedImages', [])}
                />
            </BaseContainer>
        )
    }
}

export default connect(null, {
    item_pictures_selected, picture_selection_finished, picture_selection_cancelled
})(PicturePicker);
