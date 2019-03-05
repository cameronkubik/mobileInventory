import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import {
    Avatar, Button, FormLabel, FormInput
} from 'react-native-elements';
import { connect } from 'react-redux';
import { createProfileInputChange, createUser, createAvatarPress, updateUser } from '../actions';
import { 
    CANCEL_CREATE_PROFILE,
    CANCEL_EDIT_PROFILE,
    AUTH_FIRST_INPUT,
    AUTH_LAST_INPUT,
    AUTH_EMAIL_INPUT,
    AUTH_PASSWORD_INPUT,
    AUTH_CONFIRMED_PASSWORD_INPUT,
    AUTH_POSITION_INPUT
} from '../actions/types';
import CancelButton from '../components/buttons/CancelButton';
import { BaseContainer, Container, Spinner } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class CreateProfile extends Component {

    static navigationOptions = ({ navigation }) => {
        let mode = navigation.getParam('mode', 'CREATE'),
            isEdit = mode === 'EDIT',
            title = isEdit ? 'Edit Profile' : 'Create Profile',
            cancelType = isEdit ? CANCEL_EDIT_PROFILE : CANCEL_CREATE_PROFILE;

        return {
            title: title,
            headerLeft: <CancelButton type={cancelType} />
        };
    };

    /** Local screen functions */
    onAvatarPress() {
        this.props.createAvatarPress();
    }
    onButtonPress() {
        if (this.props.isEditMode) {
            return this.props.updateUser();
        }

        this.props.createUser();
    }
    /*******************************************/

    /** Rendering functions */
    renderAvatar() {
        if (this.props.avatar) {
            return (
                <Container>
                    <Avatar
                        xlarge
                        rounded
                        source={{ uri: this.props.avatar.uri }}
                        onPress={this.onAvatarPress.bind(this)}
                        activeOpacity={0.7}
                    />
                    <FormLabel>Edit Avatar</FormLabel>
                </Container>
            );
        }

        return (
            <Container>
                <Avatar
                    xlarge
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    onPress={this.onAvatarPress.bind(this)}
                    activeOpacity={0.7}
                />
                <FormLabel>Add Avatar</FormLabel>
            </Container>
        );
    }

    renderErrorMessage() {
        if (this.props.error) {
            return <Text style={CommonStyles.errorMessage}>{this.props.error}</Text>
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner customStyle={{ alignSelf: 'center' }} />
        }

        let btnTitle = this.props.isEditMode ? 'Save Profile' : 'Create Profile';

        return (
            <Button 
                title={btnTitle}
                backgroundColor='blue'
                color='#d2d3db'
                fontWeight='700'
                borderRadius={30}
                fontSize={20}
                buttonStyle={Styles.buttons}
                containerViewStyle={Styles.buttonContainer}
                onPress={this.onButtonPress.bind(this)}
                rounded
            />
        );
    }

    renderAuthInput(inputType) {
        var isDisabled = this.props.isEditMode,
            isSecure = false,
            placeholder = null,
            field = null,
            value = null;
        
        switch (inputType) {
            case AUTH_FIRST_INPUT:
                placeholder = 'Enter first name';
                field = 'first';
                value = this.props.first;
                isDisabled = false;
                break;
            case AUTH_LAST_INPUT:
                placeholder = 'Enter last name';
                field = 'last';
                value = this.props.last;
                isDisabled = false;
                break;
            case AUTH_EMAIL_INPUT:
                placeholder = 'Enter email';
                field = 'email';
                value = this.props.email;
                break;
            case AUTH_PASSWORD_INPUT:
                placeholder = 'Enter password';
                field = 'password';
                value = isDisabled ? '11111111' : this.props.password;
                isSecure = true;
                break;
            case AUTH_CONFIRMED_PASSWORD_INPUT:
                placeholder = 'Confirm password';
                field = 'confirmedPassword';
                value = isDisabled ? '11111111' : this.props.confirmedPassword;
                isSecure = true;
                break;
            case AUTH_POSITION_INPUT:
                placeholder = 'Enter position';
                field = 'position';
                value = this.props.position;
                isDisabled = false;
                break;
            default:
                console.log("ERROR: SWITCH CASE FAILED TO CATCH TYPE");
                break;
        }

        return (
            <FormInput 
                containerStyle={[CommonStyles.inputGeneral, Styles.formInput]}
                placeholder={placeholder}
                onChangeText={(text) => { this.props.createProfileInputChange(field, text)}}
                value={value}
                editable={!isDisabled}
                secureTextEntry={isSecure}
            />
        );
    }
    /*******************************************/

    /** MAIN RENDER */
    render() {
        if (this.props.isSelectingAvatar) {
            return <View />;
        }

        return (
            <BaseContainer customStyle={{ padding: 20 }}>
                <StatusBar barStyle='light-content' />
                <Container customStyle={[Styles.avatarContainer]}>
                    { this.renderAvatar() }
                    <Container>
                        <FormLabel>First Name</FormLabel>
                        { this.renderAuthInput(AUTH_FIRST_INPUT) }
                        <FormLabel>Last Name</FormLabel>
                        { this.renderAuthInput(AUTH_LAST_INPUT) }
                    </Container>
                </Container>

                <Container customStyle={[Styles.inputContainer]}>
                    <FormLabel containerStyle={Styles.labelContainer}>Email</FormLabel>
                    { this.renderAuthInput(AUTH_EMAIL_INPUT) }

                    <FormLabel containerStyle={Styles.labelContainer}>Password</FormLabel>
                    { this.renderAuthInput(AUTH_PASSWORD_INPUT) }

                    <FormLabel containerStyle={Styles.labelContainer}>Confirm Password</FormLabel>
                    { this.renderAuthInput(AUTH_CONFIRMED_PASSWORD_INPUT) }

                    <FormLabel containerStyle={Styles.labelContainer}>Select Position</FormLabel>
                    { this.renderAuthInput(AUTH_POSITION_INPUT) }

                    { this.renderErrorMessage() }
                    { this.renderButton() }
                </Container>
            </BaseContainer>
        );
    }
    /*******************************************/
}

const Styles = {
    avatarContainer: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 0
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

const mapStateToProps = (state) => {
    const { error, loading, isSelectingAvatar, isEditMode } = state.createProfile,
        { first, last, email, position, avatar, password, confirmedPassword } = state.userAccount;
    
    return {
        first, 
        last,
        email,
        password,
        confirmedPassword,
        position,
        avatar,
        error,
        loading,
        isSelectingAvatar,
        isEditMode
    }
}

export default connect(mapStateToProps, {
    createProfileInputChange, createUser, createAvatarPress, updateUser
})(CreateProfile);
