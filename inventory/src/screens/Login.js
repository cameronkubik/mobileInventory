import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { StackActions } from 'react-navigation';
import { Button } from 'react-native-elements';
import firebase from 'react-native-firebase';
import { BaseContainer, Container, Logo, Spinner, } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            loading: false
        };
    }

    // screen independent configuration options
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#d2d3db'
        },
    };

    onEmailInput = (email) => {
        this.setState({ ...this.state, email });
    };

    onPasswordInput = (password) => {
        this.setState({ ...this.state, password });
    };

    // Button Presses
    onLoginPress()  {
        const { email, password } = this.state;

        this.setState({ ...this.state, errorMessage: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginPressSuccess.bind(this))
            .catch(this.onLoginPressFAIL.bind(this));
    };

    onCreateProfilePress() {
        this.props.navigation.dispatch(this.dispatchCreateProfileScreen);
    };
    //---------------------//

    // Promise Handlers
    onLoginPressFAIL() {
        this.setState({ errorMessage: 'Login Failed.' });
    };

    onLoginPressSuccess() {
        this.setState({
            email: '',
            password: '',
            errorMessage: '',
            loading: false
        });

        this.props.navigation.dispatch(this.dispatchProfileScreen);
    };

    
    //---------------------//

    // Navigation routing
    dispatchProfileScreen = StackActions.replace({
        routeName: 'Profile',
        params: this.state
    });

    dispatchCreateProfileScreen = StackActions.push({
        routeName: 'CreateProfile',
        params: this.state
    });
    //---------------------//

    render() {
        return (
            <BaseContainer customStyle={Styles.screen}>
                
                <Logo />
                
                <Container customStyle={Styles.inputContainer}>
                    <TextInput 
                        style={[CommonStyles.inputGeneral, { fontSize: 20 }]} 
                        placeholder="Email"
                        onChangeText={this.onEmailInput}
                    />
                    <TextInput 
                        style={[CommonStyles.inputGeneral, { fontSize: 20 }]} 
                        placeholder="Password" 
                        secureTextEntry
                        onChangeText={this.onPasswordInput}
                    /> 
                    <Text style={Styles.errorMessage}>
                        {this.state.errorMessage}
                    </Text>

                    <Button 
                        title="Login"
                        onPress={this.onLoginPress.bind(this)}
                        rounded
                        backgroundColor='gray'
                        color='#d2d3db'
                        buttonStyle={Styles.buttons}
                        borderRadius={30}
                        fontWeight='700'
                        fontSize={20}
                        containerViewStyle={{ borderRadius: 20 }}
                    />
                    <Button 
                        title="or Create Profile"
                        onPress={this.onCreateProfilePress.bind(this)}
                        color="orange"
                        backgroundColor="#d2d3db"
                        buttonStyle={[Styles.buttons]}
                        borderRadius={20}
                        fontWeight='700'
                        containerViewStyle={{ borderRadius: 20 }}
                    />
                </Container>

            </BaseContainer>
        );
    };
}

const Styles = {
    screen: {
        justifyContent: 'space-around',
    },
    inputContainer: {
        justifyContent: 'flex-start',
        width: '100%',
        flex: 3
    },

    buttons: {
        height: 60,
        width: 175
    },

    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        margin: 3
    },
};

export { Login };
