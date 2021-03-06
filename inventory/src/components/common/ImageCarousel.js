import React, { Component } from 'react';
import  { 
    Dimensions, 
    Platform, 
    StyleSheet,
    View, 
} from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import  { Styles as CommonStyles } from '../util/CommonStyles';

class ImageCarousel extends Component {

    _renderItem({item, index}, parallaxProps) {
        return (
            <View style={Styles.shadow}>
                <View style={Styles.carouselItem}>
                    <ParallaxImage
                        source={{ uri: item.uri }}
                        containerStyle={Styles.itemImageContainer}
                        style={Styles.itemImage}
                        parallaxFactor={0.5}
                        {...parallaxProps}
                    />
                </View>
            </View>
            
        );
    }

    render() {
        return  (
            <View>
                <Carousel 
                    data={this.props.data}
                    renderItem={this._renderItem}
                    hasParallaxImages={true}
                    itemWidth={itemWidth}
                    sliderWidth={sliderWidth}
                    firstItem={Math.floor(this.props.data.length / 2)}
                    layout={'default'}
                />
            </View>
        );
    }

}

// Styles
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const IS_IOS = Platform.OS === 'ios';

const slideHeight = viewportHeight * 0.25;
const slideWidth = wp(25);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;

const Styles = StyleSheet.create({
    carouselItem: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    itemImageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    itemImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
});


export { ImageCarousel };