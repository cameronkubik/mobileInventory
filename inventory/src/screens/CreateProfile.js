import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Avatar, Button, FormLabel, FormInput
} from 'react-native-elements';
import { connect } from 'react-redux';
import { createProfileInputChange, createUser, avatarPress } from '../actions';
import { BaseContainer, Container, Spinner } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class CreateProfile extends Component {

    static navigationOptions = {
        title: 'Create Profile',
    };

    onAvatarPress() {
        this.props.avatarPress();
    }
    onFirstChanged(text) {
        this.props.createProfileInputChange('first', text);
    }
    onLastChanged(text) {
        this.props.createProfileInputChange('last', text);
    }
    onEmailChanged(text) {
        this.props.createProfileInputChange('email', text);
    }
    onPasswordChanged(text) {
        this.props.createProfileInputChange('password', text);
    }
    onConfirmedPasswordChanged(text) {
        this.props.createProfileInputChange('confirmedPassword', text);
    }
    onPositionChanged(text) {
        this.props.createProfileInputChange('position', text);
    }
    onCreateAccountPress() {
        const dataModel = {
            first: this.props.first,
            last: this.props.last,
            email: this.props.email,
            password: this.props.password,
            confirmedPassword: this.props.confirmedPassword,
            position: this.props.position,
            avatar: this.props.avatar
        };

        this.props.createUser(dataModel);
    }

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

        let btnTitle = this.props.isEditMode ? 'Save' : 'Create Account';

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
                onPress={this.onCreateAccountPress.bind(this)}
                rounded
            />
        );
    }

    render() {
        if (this.props.isSelectingAvatar) {
            return <View />;
        }

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
                    {this.renderErrorMessage()}
                    {this.renderButton()}
                </Container>
            </BaseContainer>
        );
    }
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

const mapStateToProps = ({createProfile}) => {
    const { 
        first, last, email, password, 
        confirmedPassword, position, avatar,
        error, loading, isSelectingAvatar, isEditMode
    } = createProfile;
    
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
    createProfileInputChange, createUser, avatarPress
})(CreateProfile);
