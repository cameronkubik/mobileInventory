// Data model manager class
const imageConstructor = (pressEvent) => {
    const { height, width, selected, selectedId } = pressEvent.nativeEvent;

    const dataModel = {
        height,
        width,
        uri: selected,
        fileId: selectedId,
        // below is for use with CameraGalleryView component
        selected,
        selectedId
    };

    return dataModel;
};

// Export models
export default {
    __Image__: imageConstructor
}