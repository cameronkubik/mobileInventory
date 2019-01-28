import React, { Component } from 'react';
import { Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { BaseContainer, Container, Spinner } from '../components/common';

class Profile extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         loaded: false,
    //         user: undefined
    //     };

    //     this.db = firebase.firestore();
    // }

    // returnToLoginScreen() {
    //     this.props.navigation.navigate('Login');
    // }

    // onLogOutPress() {
    //     firebase.auth().signOut()
    //         .then(this.returnToLoginScreen)
    //         .catch(this.returnToLoginScreen);
    // };

    // retrieveUserData() {
    //     var userCredentials = this.props.navigation.getParam('userCredentials', { user: { uid: -1 } });
    //     var docRef = this.db.collection('users').doc(userCredentials.user.uid);
    //     var userData;

    //     docRef.get().then(function(doc) {
    //         if (doc.exists) {
    //             //data available
    //             console.log(doc);
    //             console.log(doc.data());
    //             //this.setState({ user: doc.data(), loaded: true });
    //             userData = doc.data();
    //         } else {
    //             // data not available
    //             // TODO show ewrror screen
    //         }
    //     }).catch(function (error) {
    //         //returnVal = 'error';
    //         // TODO
    //     });
    //     this.setState({ user: userData, loaded: true });
    //     this.render();
    //     // TODO not working
    //     //return userData;
    // }

    // componentWillMount() {
    //     this.retrieveUserData();
    // }

    render() {
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
                    <Text style={Styles.profileText}>*TODO* Username</Text>
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

export default connect()(Profile);
