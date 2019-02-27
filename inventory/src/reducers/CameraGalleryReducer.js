import _ from 'lodash';
import {
    GALLERY_SET_TYPE, // dont know if this will be needed
    AVATAR_PRESS,
    GALLERY_IMAGE_PRESS,
    GALLERY_CAMERA_PRESS,
    CAMERA_CAPTURE_PRESS,
    CANCEL_GALLERY_SELECTION
} from '../actions/types';
  
const INITIAL_STATE = {
    isAvatarSelection: false,
    selectedImages: [], 
    showCameraScreen: false
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AVATAR_PRESS:
            return {
                ...state,
                isAvatarSelection: true,
            };

        case GALLERY_IMAGE_PRESS:
            return {
                ...state,
                selectedImages: filterImages(state.selectedImages, action.payload)
            };

        case CANCEL_GALLERY_SELECTION:
            return { ...INITIAL_STATE };

        default:
            return state;
    }
};


/** Local functions */
function filterImages(currentImages, pressEventDetails) {
    const incomingImage = pressEventDetails.image,
        isSelected = pressEventDetails.isSelected;
    var allImages = _.concat(currentImages, incomingImage);
    

    if (isSelected) {
        return allImages;
    }

    var filteredImages = _.takeWhile(allImages, function(img) {
        return (img.fileId !== incomingImage.fileId);
    });

    return filteredImages;
}
/*******************************************/

