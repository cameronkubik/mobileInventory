import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { 
    Button, FormLabel, FormInput, Icon 
} from 'react-native-elements';
import PickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux';
import { 
    load_add_inventory, picker_change, text_input_change,
    add_item_pictures
} from '../actions';
import { BaseContainer, Container, Spinner } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class AddInventory extends Component {

    static navigationOptions = {
        title: 'Add Inventory',
    };

    componentWillMount() {
        this.props.load_add_inventory();
    }

    onAddPicturePress(arg) {
        this.props.add_item_pictures();
    }

    onPickerChange(value, index) {
        this.props.picker_change(value, index);
    }

    onDescriptionChange(value) {
        this.props.text_input_change(value, 'description');
    }

    onDimensionChange(value) {
        this.props.text_input_change(value, 'dimensions');
    }

    onAddItemPress() {
        debugger;
    }

    render() {
        return (
            <BaseContainer customStyle={{ padding: 20 }}>
                <Container customStyle={[Styles.inputContainer]}>
                    {/* Pictures */}
                    <FormLabel containerStyle={Styles.labelContainer}>Add pictures</FormLabel>
                    <TouchableOpacity 
                        style={[Styles.picturesContainer]}
                        onPress={this.onAddPicturePress.bind(this)}
                    >
                        <Icon
                            name='add-a-photo'
                            color='#636363'
                            size={52}
                            
                        />
                    </TouchableOpacity>
                    
                    {/* Category */}
                    <FormLabel containerStyle={Styles.labelContainer}>Category</FormLabel>
                    <PickerSelect
                        placeholder={{
                            label: 'Select a category...',
                            value: null,
                        }}
                        items={this.props.categories}
                        onValueChange={this.onPickerChange.bind(this)}
                        style={{ ...Styles.picker}}
                        value={this.props.selectedCategory}
                        placeholderTextColor='#636363'
                    />
                    
                    {/* Description */}
                    <FormLabel containerStyle={Styles.labelContainer}>Description</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]}
                        inputStyle={{ width: '100%' }}
                        placeholder="Enter description or history"
                        onChangeText={this.onDescriptionChange.bind(this)}
                        // onContentSizeChange={({nativeEvent}) => console.log(nativeEvent)}
                        value={this.props.description}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={120}
                    />
                    
                    {/* Dimensions */}
                    <FormLabel containerStyle={Styles.labelContainer}>Dimensions</FormLabel>
                    <FormInput 
                        containerStyle={[CommonStyles.inputGeneral, Styles.formInput]} 
                        placeholder="Enter product dimensions"
                        onChangeText={this.onDimensionChange.bind(this)}
                        value={this.props.dimensions}
                        inputStyle={{ width: '100%' }}
                    />

                    <Button
                        title="Add Item"
                        onPress={this.onAddItemPress.bind(this)}
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
    inputContainer: {
        flexDirection: 'column',
        width: '100%', 
        justifyContent: 'flex-start'
    },
    picturesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderBottomColor: 'black',
        height: 150,
        width: '90%',
        borderRadius: 30,
        padding: 10,
        margin: 5,
        backgroundColor: 'lightgray',
    },
    formInput: {
        width: '90%',
        height: 60,
        justifyContent: 'center',
    },
    labelContainer: {
        marginLeft: 20,
        alignSelf: 'flex-start'
    },

    buttons: {
        height: 50,
    },
    buttonContainer: {
        borderRadius: 20,
        alignSelf: 'center',
        width: '80%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    picker: {
        inputIOS: {
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'black',
            borderBottomColor: 'black',
            // height: 60,
            width: '100%',
            borderRadius: 30,
            backgroundColor: 'lightgray',
            fontSize: 20,
            color: '#636363',
            paddingTop: 13,
            paddingHorizontal: 10,
            paddingBottom: 12,
        },
        viewContainer: {
            width: '90%',
            alignSelf: 'center',
        },
        icon: {
            height: 30
        }
    },
};

const mapStateToProps = ({addInventory}) => {
    const { 
        pictures, categories, selectedCategory,
        description, dimensions, loading, error
    } = addInventory;

    return {
        pictures, categories, selectedCategory,
        description, dimensions, loading, error
    }
}

export default connect(mapStateToProps, { 
    load_add_inventory, picker_change, text_input_change,
    add_item_pictures
})(AddInventory);
