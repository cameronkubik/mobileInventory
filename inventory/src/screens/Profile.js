import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

class Profile extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { navigation } = this.props;
        const username = navigation.getParam('username', 'no username entered');
        const password = navigation.getParam('password', 'no password entered');
        return (
            <View style={[Styles.screen]}>
                <View style={[Styles.container, Styles.profileContainer]}>
                    <Avatar
                        medium
                        rounded
                        icon={{name: 'code'}}
                        onPress={() => console.log("Icon pressed")}
                        activeOpacity={0.7}
                        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
                    />
                    <Text>{username}</Text>
                    <Text>{password}</Text>
                </View>

                <View style={[Styles.container, Styles.buttonContainer]}>
                    <Button
                        large
                        rightIcon={{name: 'code'}}
                        title='Add Sale' 
                    />
                    <Button
                        large
                        rightIcon={{name: 'code'}}
                        title='Add Inventory' 
                    />
                    <Button
                        large
                        rightIcon={{name: 'code'}}
                        title='View Sales' 
                    />
                    <Button
                        large
                        rightIcon={{name: 'code'}}
                        title='View Inventory' 
                    />
                    <Button
                        large
                        rightIcon={{name: 'code'}}
                        title='Log Out' 
                    />
                </View>
            </View>
        );
    }
}

const Styles = {
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightgray'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer: {
        flex: 2,
        width: '100%',
        backgroundColor: 'gray'
    },
    buttonContainer: {
        flex: 3
    },

    profileName: {},
    profileRole: {},

    buttonGeneral: {
        margin: 15,
        padding: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20
    },
    buttonLogout: {},


    dev: {
        borderWidth: 1,
        borderStyle: 'solid'
    }
}

export default Profile;
