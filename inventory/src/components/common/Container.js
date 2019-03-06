import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';


class Container extends Component {
    render() {
        // const { children, scroll, customStyle, scrollStyle } = this.props;

        // if (scroll) {
        //     return (
        //         <ScrollView 
        //             style={[Styles.scroll, scrollStyle]}
        //             contentContainerStyle={[Styles.container, customStyle]}
        //         >
        //             {children}
        //         </ScrollView>
        //     );
        // }

        return (
            <View style={[Styles.container, this.props.customStyle]}>
                {this.props.children}
            </View>
        );
    }
}

const Styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll: {
        flex: 1
    }
};

export { Container };