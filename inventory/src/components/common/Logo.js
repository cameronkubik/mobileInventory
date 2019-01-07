import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View style={[Style.imageContainer, this.props.customStyle]}>
                <Image 
                    style={[Style.image]}
                    source={require('../images/sa_logo.png')}
                />
            </View>
        );
    }
}

const Style = {
    imageContainer: {
        width: '100%', 
        paddingTop: 25, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flex: 1
    },
    image: {
        width: '100%', 
        height: '75%'
    }
};

export { Logo };