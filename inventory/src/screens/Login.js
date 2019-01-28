import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { BaseContainer, Container, Logo, Spinner, } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class Login extends Component {

    // screen independent configuration options
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#d2d3db'
        },
    };

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }
    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }
    onLoginPress() {
        const { email, password } = this.props;

        this.props.loginUser({email, password});
    }

    onCreateProfilePress() {
        this.props.navigation.navigate('CreateProfile');
    };

    render() {
        return (
            <BaseContainer customStyle={Styles.screen}>
                
                <Logo />
                
                <Container customStyle={Styles.inputContainer}>
                    <TextInput 
                        style={[CommonStyles.inputGeneral, { fontSize: 20 }]} 
                        placeholder="Email"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                    <TextInput 
                        style={[CommonStyles.inputGeneral, { fontSize: 20 }]} 
                        placeholder="Password" 
                        secureTextEntry
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    /> 

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

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loginUser: state.auth.loginUser
    }
}

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser
})(Login);
