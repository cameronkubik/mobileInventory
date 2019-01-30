import React, { Component } from 'react';
import { Avatar, Button, FormLabel, 
    FormInput, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { firstChanged, lastChanged, createEmailChanged, createPasswordChanged, 
    confirmedPasswordChanged, positionChanged, createUser, avatarPress } from '../actions';
import { BaseContainer, Container } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class CreateProfile extends Component {

    static navigationOptions = {
        title: 'Create Profile',
    };

    onAvatarPress() {
        this.props.avatarPress();
    }
    onFirstChanged(text) {
        this.props.firstChanged(text);
    }
    onLastChanged(text) {
        this.props.lastChanged(text);
    }
    onEmailChanged(text) {
        this.props.createEmailChanged(text);
    }
    onPasswordChanged(text) {
        this.props.createPasswordChanged(text);
    }
    onConfirmedPasswordChanged(text) {
        this.props.confirmedPasswordChanged(text);
    }
    onPositionChanged(text) {
        this.props.positionChanged(text);
    }
    onCreateAccountPress() {
        const dataModel = {
            first: this.props.first,
            last: this.props.last,
            email: this.props.email,
            password: this.props.password,
            position: this.props.position,
            avatar: this.props.avatar
        };

        this.props.createUser(dataModel);
    }

    renderAvatar() {
        if (this.props.avatar) {
            return (
                    <Avatar
                        xlarge
                        rounded
                        source={{ uri: this.props.avatar.uri }}
                        onPress={this.onAvatarPress.bind(this)}
                        activeOpacity={0.7}
                        containerStyle={{ marginBottom: 10 }}
                    />
            );
        }

        return (
            <Avatar
                xlarge
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={this.onAvatarPress.bind(this)}
                activeOpacity={0.7}
                containerStyle={{ marginBottom: 10 }}
            />
        );
    }

    render() {
        return (
            <BaseContainer customStyle={{ padding: 20 }}>
                <Container customStyle={[Styles.avatarContainer]}>
                    {this.renderAvatar()}
                    <Container>
                        <FormLabel>First Name</FormLabel>
                        <FormInput 
                            containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                            placeholder="Enter first name"
                            onChangeText={this.onFirstChanged.bind(this)}
                            value={this.props.first}
                        />
                        <FormLabel>Last Name</FormLabel>
                        <FormInput 
                            containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                            placeholder="Enter last name" 
                            onChangeText={this.onLastChanged.bind(this)}
                            value={this.props.last}
                        />
                    </Container>
                </Container>

                <Container customStyle={[Styles.inputContainer]}>
                    <FormLabel containerStyle={Styles.labelContainer}>Email or Username</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Enter email or username"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                    <FormLabel containerStyle={Styles.labelContainer}>Password</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Enter password" 
                        onChangeText={this.onPasswordChanged.bind(this)}
                        secureTextEntry
                        value={this.props.password}
                    /> 
                    <FormLabel containerStyle={Styles.labelContainer}>Confirm Password</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Confirm password"
                        onChangeText={this.onConfirmedPasswordChanged.bind(this)}
                        secureTextEntry
                        value={this.props.confirmedPassword}
                    />
                    <FormLabel containerStyle={Styles.labelContainer}>Select Position</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Position or Role" 
                        onChangeText={this.onPositionChanged.bind(this)}
                        value={this.props.position}
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

const mapStateToProps = ({createProfile}) => {
    const { first, last, email, password, confirmedPassword, position, avatar } = createProfile;
    
    return {
        first, 
        last,
        email,
        password,
        confirmedPassword,
        position,
        avatar
    }
}

export default connect(mapStateToProps, {
    firstChanged, lastChanged, createEmailChanged, createPasswordChanged,
    confirmedPasswordChanged, positionChanged, createUser, avatarPress
})(CreateProfile);
