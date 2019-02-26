import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { onEditProfilePress } from '../actions';

class EditButton extends Component {

    _editPress() {
        this.props.onEditProfilePress();
    }

    render() {
        return (
            <View>
                <Icon
                    name='edit'
                    type='font-awesome'
                    color='white'
                    containerStyle={{ marginRight: 10 }}
                    onPress={this._editPress.bind(this)}
                />
            </View>
            
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { onEditProfilePress })(EditButton);
