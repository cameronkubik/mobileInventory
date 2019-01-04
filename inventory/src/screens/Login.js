import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Styles as CommonStyles } from '../util/CommonStyles';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }
    
    render() {
        return (
            <View style={[CommonStyles.BaseContainer, Styles.screen]}>
                
                <View style={{width: '95%', paddingTop: 150}}>
                    <Image 
                        style={{ width: '100%', height: '48%' }}
                        source={require('../images/sa_logo.png')}
                    />
                </View>
                
                <View style={[Styles.container, Styles.inputContainer]}>
                    <TextInput style={[Styles.inputGeneral, Styles.inputUser]} placeholder="Username"/>
                    <TextInput style={[Styles.inputGeneral, Styles.inputPassword]} placeholder="Password" secureTextEntry/> 
                    <Button 
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Profile')}
                        rounded
                        backgroundColor='gray'
                        color='#d2d3db'
                        buttonStyle={Styles.buttons}
                        borderRadius={20}
                        containerViewStyle={{ borderRadius: 20 }}
                    />
                    <Button 
                        title="or Create Profile"
                        onPress={() => this.props.navigation.navigate('Profile')}
                        color="orange"
                        backgroundColor="#d2d3db"
                        buttonStyle={Styles.buttons}
                        borderRadius={20}
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
    headerContainer: {},
    inputContainer: {
        justifyContent: 'flex-start',
        width: '100%'
    },

    headerGeneral: {
        color: 'black',
    },
    headerCompany: {},
    headerTitle: {},
    headerDate: {},
    headerLocation: {},

    inputGeneral: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        height: 60,
        width: '75%',
        borderRadius: 30,
        padding: 10,
        margin: 5,
        backgroundColor: 'lightgray'
    },
    inputUser: {},
    inputPassword: {},

    buttons: {
        height: 60
    },

    dev: {
        borderWidth: 1,
        borderStyle: 'solid'
    }
}

export default Login;
