import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackActions } from 'react-navigation';
import { Avatar, Button } from 'react-native-elements';
import firebase from 'firebase';
import { BaseContainer, Container } from '../components/common';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    returnToLoginScreen = StackActions.replace({
        routeName: 'Login',
        params: this.state
    });

    onLogOutPress() {
        firebase.auth().signOut()
            .then(this.props.navigation.dispatch(this.returnToLoginScreen))
            .catch(this.props.navigation.dispatch(this.returnToLoginScreen))
    };

    render() {
        const { navigation } = this.props;
        const username = navigation.getParam('username', 'full-name');

        return (
            <BaseContainer customStyle={[Styles.screen]}>
                <Container customStyle={[Styles.profileContainer]}>
                
                    <Avatar
                        xlarge
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                        onPress={() => console.log("Icon pressed")}
                        activeOpacity={0.7}
                        containerStyle={{ marginBottom: 10 }}
                    />
                    <Text style={Styles.profileText}>{username}</Text>
                    <Text style={Styles.profileText}>Role</Text>
                </Container>

                <Container customStyle={[Styles.buttonContainer]}>
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'plus-circle', type: 'font-awesome'}}
                        title='Add Sale' 
                    />
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'plus-circle', type: 'font-awesome'}}
                        title='Add Inventory' 
                    />
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'usd', type: 'font-awesome'}}
                        title='View Sales' 
                    />
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'search', type: 'font-awesome'}}
                        title='View Inventory' 
                    />
                    <Button
                        rounded
                        raised
                        containerViewStyle={Styles.buttonLogout}
                        title='Log Out' 
                        backgroundColor='orange'
                        onPress={this.onLogOutPress.bind(this)}
                    />
                </Container>
            </BaseContainer>
        );
    }
}

const Styles = {
    screen: {
        justifyContent: 'space-between',
    },
    profileContainer: {
        flex: 2,
        width: '100%',
        backgroundColor: '#5b5b5b'
    },
    buttonContainer: {
        flex: 3,
        justifyContent: 'space-around',
        width: '100%'
    },

    profileText: {
        color: 'white',
        margin: 5,
        fontSize: 20
    },

    buttonGeneral: {
        width: '80%'
    },
    buttonLogout: {
        width: '50%',
        marginBottom: 15
    },
    buttonStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },


    dev: {
        borderWidth: 1,
        borderStyle: 'solid'
    }
}

export { Profile };
