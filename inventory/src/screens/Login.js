import React, { Component } from 'react';
import { Text, TextInput, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { onInputChange, loginUser, resetLogin } from '../actions';
import { BaseContainer, Container, Logo } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class Login extends Component {
    
    /** Screen independent configuration options */
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#d2d3db'
        },
    };
    /*******************************************/

    /** Lifecycle methods */
    // none yet
    /*******************************************/

    /** Screen functions */
    onEmailChanged(text) {
        this.props.onInputChange('email', text);
    }

    onPasswordChanged(text) {
        this.props.onInputChange('password', text);
    }

    onLoginPress() {
        this.props.loginUser();
    }

    onCreateProfilePress() {
        this.props.resetLogin();
    }
    /*******************************************/

    /** Rendering functions */
    renderErrorMessage() {
        if (this.props.error) {
            return (
                <Text style={CommonStyles.errorMessage}>
                    {this.props.error}
                </Text>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Button 
                    title="Login"
                    backgroundColor='gray'
                    color='#d2d3db'
                    fontWeight='700'
                    borderRadius={30}
                    fontSize={20}
                    containerViewStyle={{ borderRadius: 20 }}
                    buttonStyle={Styles.buttons}
                    rounded
                    raised
                    loading
                />
            );
        }

        return (
            <Button 
                title="Login"
                onPress={this.onLoginPress.bind(this)}
                rounded
                raised
                backgroundColor='gray'
                color='#d2d3db'
                buttonStyle={Styles.buttons}
                borderRadius={30}
                fontWeight='700'
                fontSize={20}
                containerViewStyle={{ borderRadius: 20 }}
            />
        );
    }
    /*******************************************/

    /** MAIN RENDER */
    render() {
        return (
            <BaseContainer customStyle={Styles.screen}>
                <StatusBar barStyle='dark-content' />
                
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

                    {this.renderErrorMessage()}
                    
                    {this.renderButton()}

                    <Button 
                        title="or Create Profile"
                        onPress={this.onCreateProfilePress.bind(this)}
                        color="orange"
                        backgroundColor="#d2d3db"
                        buttonStyle={[Styles.buttons, { borderWidth: 0 }]}
                        borderRadius={20}
                        fontWeight='700'
                        containerViewStyle={{ borderRadius: 20 }}
                    />
                </Container>

            </BaseContainer>
        );
    };
}

/** Styles local to screen */
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
        width: 175,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 5
    },
};
/*******************************************/

/** Redux helpers */
const mapStateToProps = ({auth}) => {
    const { email, password, error, loading } = auth;

    return {
        email,
        password,
        error,
        loading
    }
}
/*******************************************/

export default connect(mapStateToProps, { 
    onInputChange, loginUser, resetLogin
})(Login);
