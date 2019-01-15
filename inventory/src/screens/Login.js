import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { StackActions } from 'react-navigation';
import { Button } from 'react-native-elements';
import { BaseContainer, Container, Logo, } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#d2d3db'
        },
    };

    onUsernameInput = (username) => {
        this.setState({ ...this.state, username });
    };

    onPasswordInput = (password) => {
        this.setState({ ...this.state, password });
    };

    dispatchProfileScreen = StackActions.replace({
            routeName: 'Profile',
            params: this.state
    });

    render() {
        return (
            <BaseContainer customStyle={Styles.screen}>
                
                <Logo />
                
                <Container customStyle={Styles.inputContainer}>
                    <TextInput 
                        style={[CommonStyles.inputGeneral, { fontSize: 20 }]} 
                        placeholder="Username"
                        onChangeText={this.onUsernameInput}
                    />
                    <TextInput 
                        style={[CommonStyles.inputGeneral, { fontSize: 20 }]} 
                        placeholder="Password" 
                        secureTextEntry
                        onChangeText={this.onPasswordInput}
                    /> 
                    <Button 
                        title="Login"
                        onPress={() => this.props.navigation.dispatch(this.dispatchProfileScreen)}
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
                        onPress={() => this.props.navigation.navigate('CreateProfile')}
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
};

export { Login };
