import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

class Login extends Component {
    
    render() {
        return (
            <View style={[Styles.screen]}>
                <View style={[Styles.container, Styles.headerContainer]}>
                    <Text style={[Styles.headerGeneral, Styles.headerCompany]}>SOUTHERN ACCENTS</Text>
                    <Text style={[Styles.headerGeneral, Styles.headerTitle]}>ARCHITECTURAL ANTIQUES</Text>
                    <Text style={[Styles.headerGeneral, Styles.headerDate]}>EST. 1969</Text>
                    <Text style={[Styles.headerGeneral, Styles.headerLocation]}>- CULLMAN, ALABAMA -</Text>
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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightgray'
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
