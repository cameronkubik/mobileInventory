import React, { Component } from 'react';
import { Text } from 'react-native';
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
        //nav to add inventory page
    }

    onViewInventoryPress() {
        // nav to view inventory page
    }

    onLogOutPress() {
        this.props.logOut();
    }

    renderAvatar() {
        if (this.props.avatar) {
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
            
        } else if (this.props.name) {
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

    render() {
        return (
            <BaseContainer customStyle={[Styles.screen]}>
                <Container customStyle={[Styles.profileContainer]}>
                    {this.renderAvatar()}
                    <Text style={Styles.profileText}>{this.props.name}</Text>
                    <Text style={Styles.profileText}>{this.props.position}</Text>
                </Container>

                <Container customStyle={[Styles.buttonContainer]}>
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'plus-circle', type: 'font-awesome'}}
                        title='Add Sale' 
                    />
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'plus-circle', type: 'font-awesome'}}
                        title='Add Inventory' 
                    />
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'usd', type: 'font-awesome'}}
                        title='View Sales' 
                    />
                    <Button
                        large
                        rounded
                        raised
                        buttonStyle={Styles.buttonStyle}
                        containerViewStyle={Styles.buttonGeneral}
                        rightIcon={{name: 'search', type: 'font-awesome'}}
                        title='View Inventory' 
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
        width: '80%'
    },
    buttonLogout: {
        width: '50%',
        marginBottom: 15
    },
    buttonStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },


    dev: {
        borderWidth: 1,
        borderStyle: 'solid'
    }
}

const mapStateToProps = ({profile}) => {
    return { 
        name: profile.name,
        position: profile.position,
        avatar: profile.avatar
    };
}

export default connect(mapStateToProps, { 
    loadUser, logOut 
})(Profile);
