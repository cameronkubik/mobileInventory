import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { loadUser, logOut } from '../actions';
import { BaseContainer, Container, Spinner } from '../components/common';

class Profile extends Component {
     
    static navigationOptions = {
        title: 'Home'
    }

    componentWillMount() {
        this.props.loadUser();
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

    // component based rendering functions
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
                    onPress={() => console.log("Icon pressed")}
                    activeOpacity={0.7}
                    containerStyle={{ marginBottom: 10 }}
                />
            );
            
        } 
        // user does not have avatar photo
        else if (this.props.name) {
            let names = this.props.name.split(' ');

            let initials = names[0].split('')[0] + names[1].split('')[0];

            return (
                <Avatar
                    xlarge
                    rounded
                    title={initials}
                    onPress={() => console.log("Icon pressed")}
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
                onPress={() => console.log("Icon pressed")}
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
                <Text style={Styles.profileText}>{this.props.name}</Text>
                <Text style={Styles.profileText}>{this.props.position}</Text>
            </View>
        );
    }

    render() {
        return (
            <BaseContainer customStyle={[Styles.screen]}>
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
        backgroundColor: '#5b5b5b'
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
        // borderWidth: 2,
        // borderColor: 'red',
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

const mapStateToProps = ({profile}) => {
    const { name, position, avatar, loading } = profile;

    return { 
        name,
        position,
        avatar,
        loading
    };
}

export default connect(mapStateToProps, { 
    loadUser, logOut 
})(Profile);
