// Database manager functions

// TODO
function get_picker_categories() {    
    // make request to wix api for category collections
    // placeholder:
    const loadedCategories = [
        { label: 'Apparel', value: 'app' },
        { label: 'Art', value: 'art' },
        { label: 'Bath', value: 'bat' },
        { label: 'Brick', value: 'bri' },
        { label: 'Corbels', value: 'cor' },
        { label: 'Doors', value: 'doo' },
        { label: 'Fountains', value: 'fou' },
        { label: 'Furniture', value: 'fur' },
        { label: 'Gates', value: 'gat' },
        { label: 'Hardware', value: 'har' },
        { label: 'Ironworks', value: 'iro' },
        { label: 'Lighting', value: 'lig' },
        { label: 'Lumber', value: 'lum' },
        { label: 'Mailboxes', value: 'mai' },
        { label: 'Mantels', value: 'man' },
        { label: 'Shutters', value: 'shu' },
        { label: 'Staircasing', value: 'sta' },
        { label: 'Stonework', value: 'sto' },
        { label: 'Tile', value: 'til' },
        { label: 'Urns', value: 'urn' },
        { label: 'Windows', value: 'win' }
    ];

    if (!loadedCategories) return undefined;

    return loadedCategories;
}

// TODO
function get_item_detail(itemID) {
    // make wix api call

    // placeholder
    return { 
        pictures: [{
            filename: "IMG_0003.JPG",
            height: 2002,
            isStored: true,
            playableDuration: 0,
            uri: "assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG",
            width: 3000
        }, {
            filename: "IMG_0002.JPG",
            height: 2848,
            isStored: true,
            playableDuration: 0,
            uri: "assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG",
            width: 4288
        }, {
            filename: "IMG_0001.JPG",
            height: 2848,
            isStored: true,
            playableDuration: 0,
            uri: "assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG",
            width: 4288
        }],
        description: 'example description here',
        dimensions: '26” L, 88” W, 21”H ',
        category: 'bri',
        itemID: '0495'
    }
}

export default {
    get_picker_categories,
    get_item_detail
}
