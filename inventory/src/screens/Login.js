import React, { Component } from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import { Styles as CommonStyles } from '../util/CommonStyles';

class Login extends Component {
    
    render() {
        return (
            <View style={[CommonStyles.BaseContainer, Styles.screen]}>
                
                <View style={{width: '95%', paddingTop: 150}}>
                    <Image 
                        style={{ width: '100%', height: '45%' }}
                        source={require('../images/sa_logo.png')}
                    />
                </View>
                
                <View style={[Styles.container, Styles.inputContainer]}>
                    <TextInput style={[Styles.inputGeneral, Styles.inputUser]} placeholder="Username"/>
                    <TextInput style={[Styles.inputGeneral, Styles.inputPassword]} placeholder="Password" secureTextEntry/> 
                    <Button 
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Profile')}
                    />
                    <Button 
                        title="Create Profile"
                        onPress={() => this.props.navigation.navigate('Profile')}
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
    headerContainer: {},
    inputContainer: {
        justifyContent: 'flex-start'
    },

    headerGeneral: {
        color: 'black',
    },
    headerCompany: {},
    headerTitle: {},
    headerDate: {},
    headerLocation: {},

    inputGeneral: {},
    inputUser: {},
    inputPassword: {},

    buttonLogin: {},
    buttonCreate: {},


    dev: {
        borderWidth: 1,
        borderStyle: 'solid'
    }
}

export default Login;
