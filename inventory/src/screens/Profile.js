import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Profile extends Component {
    render() {
        return (
            <View style={[Styles.screen]}>
                <View style={[Styles.container, Styles.profileContainer]}>
                    <Text>***TODO*** Profile Image</Text>
                    <Text>Garlan Gudger Jr.</Text>
                    <Text>Owner</Text>
                </View>

                <View style={[Styles.container, Styles.buttonContainer]}>
                    <Text style={Styles.buttonGeneral}>Add Sale Button ***TODO***</Text>
                    <Text style={Styles.buttonGeneral}>Add Inventory Button ***TODO***</Text>
                    <Text style={Styles.buttonGeneral}>View Inventory Button ***TODO***</Text>
                    <Text style={Styles.buttonGeneral}>View Inventory Button ***TODO***</Text>
                    <Text style={Styles.buttonGeneral}>Log Out ***TODO***</Text>
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
