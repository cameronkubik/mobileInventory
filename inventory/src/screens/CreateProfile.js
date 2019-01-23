import React, { Component } from 'react';
import { Avatar, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import firebase from 'react-native-firebase';
import { BaseContainer, Container } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles'

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmedPassword: '',
            role: 0
        };

        this.db = firebase.firestore();
    };

    static navigationOptions = {
        title: 'Create Profile',
        headerBackTitle: 'TODO - doesnt work'
    };

    onFirstNameInput = (firstName) => {
        this.setState({ ...this.state, firstName });
    };

    onLastNameInput = (lastName) => {
        this.setState({ ...this.state, lastName });
    };

    onEmailInput = (email) => {
        this.setState({ ...this.state, email });
    };

    onPasswordInput = (password) => {
        this.setState({ ...this.state, password });
    };

    onConfirmedPasswordInput = (confirmedPassword) => {
        this.setState({ ...this.state, confirmedPassword });
    };

    onRoleInput = (role) => {
        this.setState({ ...this.state, role });
    };

    onCreateAccountPress() {
        // if this.state.password !== this.state.confirmedPassword return error screen
        const { email, password, firstName, lastName, role } = this.state;
        // create user
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    //alert('The password is too weak.');
                } else {
                    //alert(errorMessage);
                }
                console.log(error);
            })
            .then((credentials) => {
                console.log(credentials);
                const dataModel = {
                    firstName,
                    lastName,
                    email,
                    role
                };  
                this.db.collection('users').doc(credentials.user.uid).set(dataModel);
            });
        // handle errors
        // on success->
            // add info to db
        
        
        // const { firstName, lastName, email, role } = this.state;
        
        // const dataModel = {
        //     first: firstName,
        //     last: lastName, 
        //     email,
        //     role
        // };

        // db.collection('users').add(dataModel)
        //     .then(this.props.navigation.navigate('Profile', dataModel))
        //     .catch(this.props.navigation.navigate('Login', dataModel))
    };

    render() {
        return (
            <BaseContainer customStyle={{ padding: 20 }}>
                <Container customStyle={[Styles.avatarContainer]}>
                    <Avatar
                        xlarge
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                        onPress={() => console.log("Icon pressed")}
                        activeOpacity={0.7}
                        containerStyle={{ marginBottom: 10 }}
                    />
                    <Container>
                        <FormLabel>First Name</FormLabel>
                        <FormInput 
                            containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                            placeholder="Enter first name"
                            onChangeText={this.onFirstNameInput}
                        />
                        <FormLabel>Last Name</FormLabel>
                        <FormInput 
                            containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                            placeholder="Enter last name" 
                            onChangeText={this.onLastNameInput}
                        />
                    </Container>
                </Container>

                <Container customStyle={[Styles.inputContainer]}>
                    <FormLabel containerStyle={Styles.labelContainer}>Email or Username</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Enter email or username"
                        onChangeText={this.onEmailInput}
                    />
                    <FormLabel containerStyle={Styles.labelContainer}>Password</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Enter password" 
                        onChangeText={this.onPasswordInput}
                        secureTextEntry
                    /> 
                    <FormLabel containerStyle={Styles.labelContainer}>Confirm Password</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Confirm password"
                        onChangeText={this.onConfirmedPasswordInput}
                        secureTextEntry
                    />
                    <FormLabel containerStyle={Styles.labelContainer}>Select Position</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Position or Role" 
                        onChangeText={this.onRoleInput}
                    /> 

                    <Button 
                        title="Create Account"
                        onPress={this.onCreateAccountPress.bind(this)}
                        rounded
                        backgroundColor='blue'
                        color='#d2d3db'
                        buttonStyle={Styles.buttons}
                        borderRadius={30}
                        fontWeight='700'
                        fontSize={20}
                        containerViewStyle={Styles.buttonContainer}
                    />
                </Container>
            </BaseContainer>
        );
    }
}

const Styles = {
    avatarContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 2,
        alignItems: 'flex-start',
        width: '100%'
    },

    formInput: {
        width: '90%',
        height: 50,
        justifyContent: 'center'
    },
    labelContainer: {
        marginLeft: 20
    },

    buttons: {
        height: 50,
    },
    buttonContainer: {
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10
    }
};

export { CreateProfile };
