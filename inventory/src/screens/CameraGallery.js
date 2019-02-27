import React, { Component } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { CameraKitGalleryView } from 'react-native-camera-kit';
import { onGalleryImagePress } from '../actions';
import { CANCEL_GALLERY_SELECTION } from '../actions/types';
import CancelButton from '../components/buttons/CancelButton';
import { BaseContainer } from '../components/common';

class CameraGallery extends Component {
    /** Screen independent configuration options */
    static navigationOptions = {
        title: 'Select',
        headerLeft: <CancelButton type={CANCEL_GALLERY_SELECTION} />
    }
    /*******************************************/

    /** Camera button */
    cameraButton = {
        image: require('../components/images/camera-40x2.png'),
        backgroundColor: '#d2d3db'
    }
    /*******************************************/

    /** Local functions */
    onImagePress(event) {
        // call action to save image to selected array
        this.props.onGalleryImagePress(event, this.props.isAvatarSelection);
        // check state to see if we should select multiple
    }
    onCameraButtonPress() {
        // call action to save image to selected array

        // check state to see if we should select multiple
    }
    /*******************************************/
    render() {
        return (
            <BaseContainer customStyle={{ backgroundColor: 'white' }}>
                <StatusBar barStyle='light-content' />
                <CameraKitGalleryView
                    style={Styles.gallery}
                    minimumInteritemSpacing={5}
                    minimumLineSpacing={5}
                    columnCount={3}
                    getUrlOnTapImage
                    onTapImage={this.onImagePress.bind(this)}
                    selectedImages={this.props.selectedImages}
                    selectedImageIcon={require('../components/images/check-18.png')}
                    customButtonStyle={this.cameraButton}
                    onCustomButtonPress={this.onCameraButtonPress.bind(this)}
                />
            </BaseContainer>
        );
    }
}

const { width: viewportWidth } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const Styles = {
    gallery: {
        width: wp(98),
        height: '100%',
        marginTop: 20,
    },
}

const mapStateToProps = ({ cameraGallery }) => {
    const {
        isAvatarSelection,
        selectedImages,
        showCameraScreen
    } = cameraGallery;

    return {
        isAvatarSelection,
        selectedImages,
        showCameraScreen
    }
}
export default connect(mapStateToProps, {
    onGalleryImagePress
})(CameraGallery);