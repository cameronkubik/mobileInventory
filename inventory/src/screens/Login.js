import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Styles as CommonStyles } from '../util/CommonStyles';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onUsernameInput = (username) => {
        this.setState({ ...this.state, username });
    }

    onPasswordInput = (password) => {
        this.setState({ ...this.state, password });
    }
    
    render() {
        return (
            <View style={[CommonStyles.BaseContainer, Styles.screen]}>
                
                <View style={[{width: '100%', paddingTop: 25, justifyContent: 'flex-start', alignItems: 'center', flex: 1}]}>
                    <Image 
                        style={[{ width: '100%', height: '75%' }]}
                        source={require('../images/sa_logo.png')}
                    />
                </View>
                
                <View style={[Styles.container, Styles.inputContainer]}>
                    <TextInput 
                        style={[Styles.inputGeneral, Styles.inputUser]} 
                        placeholder="Username"
                        onChangeText={this.onUsernameInput}
                    />
                    <TextInput 
                        style={[Styles.inputGeneral, Styles.inputPassword]} 
                        placeholder="Password" 
                        secureTextEntry
                        onChangeText={this.onPasswordInput}
                    /> 
                    <Button 
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Profile', this.state)}
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
                        onPress={() => this.props.navigation.navigate('Profile', this.state)}
                        color="orange"
                        backgroundColor="#d2d3db"
                        buttonStyle={[Styles.buttons]}
                        borderRadius={20}
                        fontWeight='700'
                        containerViewStyle={{ borderRadius: 20 }}
                    />
                </View>

            </View>
        );
    }
}

const Styles = {
    screen: {
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        justifyContent: 'flex-start',
        width: '100%',
        flex: 3
    },

    inputGeneral: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        height: 60,
        width: '75%',
        borderRadius: 30,
        padding: 10,
        margin: 5,
        backgroundColor: 'lightgray',
        fontSize: 20
    },

    buttons: {
        height: 60,
        width: 175
    },

    dev: {
        borderWidth: 1,
        borderStyle: 'solid'
    }
}

export default Login;
