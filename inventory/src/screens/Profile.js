import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { loadAccount, logOut, profileAvatarPress } from '../actions';
import { BaseContainer, Container, Spinner } from '../components/common';
import EditButton from '../components/buttons/EditButton';

class Profile extends Component {
     
    /** Screen independent configuration options */
    static navigationOptions = {
        headerTitle: 'Home',
        headerRight: <EditButton />
    }
    /*******************************************/

    /** Lifecycle & local functions */
    componentWillMount() {
        this.props.loadAccount();
    }

    onAvatarPress() {
        this.props.profileAvatarPress();
    }

    onAddInventoryPress() {
        this.props.navigation.navigate('AddInventory');
    }

    onViewInventoryPress() {
        this.props.navigation.navigate('ViewInventory');
    }

    onLogOutPress() {
        this.props.logOut();
    }
    /*******************************************/

    /** Component based rendering functions */
    renderAvatar() {
        // when loading from server
        if (this.props.loading) {
            return (
                <View style={{ flex: 1 }}>
                    <Avatar
                        xlarge
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                        activeOpacity={0.7}
                        containerStyle={{ marginBottom: 10 }}
                    />
                </View>
            );
        } 
        // user has avatar photo
        else if (this.props.avatar) {
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
        // user does not have avatar photo
        else if (this.props.fullName) {
            let names = this.props.fullName.split(' ');

            let initials = names[0].split('')[0] + names[1].split('')[0];

            return (
                <Avatar
                    xlarge
                    rounded
                    title={initials}
                    onPress={this.onAvatarPress.bind(this)}
                    activeOpacity={0.7}
                    containerStyle={{ marginBottom: 10 }}
                />
            );
        }
        // should never execute but implemented as a failsafe
        return (
            <Avatar
                xlarge
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={this.onAvatarPress.bind(this)}
                activeOpacity={0.7}
                containerStyle={{ marginBottom: 10 }}
            />
        )
    }

    renderUserInfo() {
        if (this.props.loading) {
            return <Spinner />;
        } else if (this.props.error) {
            return <Text style={Styles.profileText}>{this.props.error}</Text>;
        }

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={Styles.profileText}>{this.props.fullName}</Text>
                <Text style={Styles.profileText}>{this.props.position}</Text>
            </View>
        );
    }

    render() {
        return (
            <BaseContainer customStyle={[Styles.screen]}>
                <StatusBar barStyle='light-content' />
                <Container customStyle={[Styles.profileContainer]}>
                    {this.renderAvatar()}
                    {this.renderUserInfo()}
                </Container>

                <Container customStyle={[Styles.buttonContainer]}>
                    <Button
                        large
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'plus-circle', type: 'font-awesome'}}
                        title='Add Inventory' 
                        onPress={this.onAddInventoryPress.bind(this)}
                    />
                    <Button
                        title='View Inventory'
                        large
                        raised
                        activeOpacity={0.7}
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'search', type: 'font-awesome'}}
                        onPress={this.onViewInventoryPress.bind(this)}
                    />
                    <Button
                        rounded
                        raised
                        containerViewStyle={Styles.buttonLogout}
                        title='Log Out' 
                        backgroundColor='orange'
                        onPress={this.onLogOutPress.bind(this)}
                    />
                </Container>
            </BaseContainer>
        );
    }
}

const Styles = {
    screen: {
        justifyContent: 'space-between',
    },
    profileContainer: {
        flex: 2,
        width: '100%',
        backgroundColor: '#606060'
    },
    buttonContainer: {
        flex: 3,
        justifyContent: 'space-around',
        width: '100%'
    },

    profileText: {
        color: 'white',
        margin: 5,
        fontSize: 20
    },

    buttonGeneral: {
        width: '80%',
        flex: 1,
        borderRadius: 30,
        marginVertical: 15
    },
    buttonLogout: {
        width: '50%',
        marginVertical: 15,
    },
    buttonStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: '100%',
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1
    }
}

const mapStateToProps = (state) => {
    const { fullName, position, avatar } = state.userAccount,
        { loading, error } = state.profile;

    return { 
        fullName,
        position,
        avatar,
        loading,
        error
    };
}

export default connect(mapStateToProps, { 
    loadAccount, logOut, profileAvatarPress
})(Profile);
