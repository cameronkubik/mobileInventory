import NavigationService from '../NavigationService';
import Models from '../ModelManager';
import {
    GALLERY_SET_TYPE,
    GALLERY_IMAGE_PRESS,
    GALLERY_CAMERA_PRESS,
    CAMERA_CAPTURE_PRESS,
    AVATAR_SELECTED
} from './types';

export const onGalleryImagePress = (event, isAvatarSelection) => {
    return (dispatch) => {
        var imageModel = Models.__Image__(event);

        if (isAvatarSelection) {
            dispatch({
                type: AVATAR_SELECTED,
                payload: imageModel
            });

            NavigationService.back();
            return;
        }

        // TODO - test inventory image selection
        dispatch({
            type: GALLERY_IMAGE_PRESS,
            payload: {
                isSelected: event.nativeEvent.isSelected,
                image: imageModel
            }
        });
    }
}