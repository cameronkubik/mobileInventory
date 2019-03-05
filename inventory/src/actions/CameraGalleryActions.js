import Services from '../Services';
import {
    GALLERY_SET_TYPE,
    GALLERY_IMAGE_PRESS,
    GALLERY_CAMERA_PRESS,
    CAMERA_CAPTURE_PRESS,
    AVATAR_SELECTED
} from './types';

export const onGalleryImagePress = (event, isAvatarSelection) => {
    return (dispatch) => {
        var imageModel = Services.Models.__Image__(event);

        if (isAvatarSelection) {
            dispatch({
                type: AVATAR_SELECTED,
                payload: imageModel
            });

            Services.Navigation.back();
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