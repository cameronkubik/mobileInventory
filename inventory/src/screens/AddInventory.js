import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { 
    Button, FormLabel, FormInput, Icon 
} from 'react-native-elements';
import PickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux';
import { 
    category_picker_change,
    add_inventory_input_change,
    add_item_pictures,
    picture_selection_resume
} from '../actions';
import { ADD_INVENTORY } from '../actions/types';
import { BaseContainer, Container, ImageCarousel } from '../components/common';
import CancelButton from '../components/buttons/CancelButton';
import { Styles as CommonStyles } from '../components/util/CommonStyles';
import Services from '../Services';

const { InputTypeEnum, Actions } = ADD_INVENTORY;

class AddInventory extends Component {

    static navigationOptions = {
        title: 'Add Inventory',
        headerRight: <CancelButton isSubmit type={Actions.SUBMIT} />
    };

    onAddPicturePress() {
        this.props.add_item_pictures();
    }

    onPickerChange(value) {
        this.props.category_picker_change(value);
    }

    onEditPress() {
        this.props.add_item_pictures();
    }

    // TODO
    onAddItemPress() {
        debugger;
    }

    // Component render functions
    renderCarousel() {
        if (this.props.hasImages) {
            return (
                <Container customStyle={[Styles.Containers.carousel, CommonStyles.dev]}>
                    <FormLabel containerStyle={Styles.Form.label}>Photos</FormLabel>
                    <ImageCarousel data={this.props.images} />
                    {/* <Button
                        title='Edit'
                        rounded
                        color='white'
                        borderRadius={30}
                        buttonStyle={Styles.Button.editStyle}
                        containerViewStyle={Styles.Button.editContainerStyle}
                        onPress={this.onEditPress.bind(this)}
                    /> */}
                </Container>
            );
        }
        
        return (
            <Container customStyle={[Styles.Containers.carousel, CommonStyles.dev]}>
                <FormLabel containerStyle={Styles.Form.label}>Add Photos</FormLabel>
                <TouchableOpacity 
                    style={[Styles.Containers.addImage]}
                    onPress={this.onAddPicturePress.bind(this)}
                >
                    <Icon
                        name='add-a-photo'
                        color='#636363'
                        size={52}
                    />
                </TouchableOpacity>
            </Container>
        );
    };

    renderFormInput(type) {
        const _styles = {
            container: [CommonStyles.inputGeneral, Styles.Form.input],
            input: { width: '100%', color: '#636363' }
        },
            { name, description, dimensions, cost } = InputTypeEnum;
        let placeholder,
            field,
            value,
            multiline,
            numberOfLines,
            maxLength;

        switch (type) {
            case name: 
                placeholder = 'Enter product name (i.e. Door 022)';
                field = 'name';
                value = this.props.name;
                break;
            case description:
                placeholder = 'Enter description or history';
                field = 'description';
                value = this.props.description;
                multiline = true;
                numberOfLines = 4;
                maxLength = 120;
                break;
            case dimensions: 
                placeholder = '12L x 30W  x 70H';
                field = 'dimensions';
                value = this.props.dimensions;
                break;
            case cost: 
                placeholder = 'i.e. $ 325';
                field = 'cost';
                value = this.props.cost ? this.props.cost.toString() : undefined;
                break;
            default:
                Services.Actions.consoleLog('InputTypeEnum failed to catch in switch stmt.')
                break;
        }

        return (
            <FormInput
                containerStyle={_styles.container}
                inputStyle={_styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={(value) => this.props.add_inventory_input_change(value, field)}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
            />
        );
    }

    render() {
        return (
            <BaseContainer customStyle={{ padding: 20 }}>
                
                {/* Carousel */}
                {this.renderCarousel()}

                {/* User inputs */}
                <Container
                    // scroll
                    // scrollStyle={Styles.Containers.scroll}
                    customStyle={[Styles.Containers.input]}
                >
                    {/* Category */}
                    <FormLabel containerStyle={Styles.Form.label}>Category</FormLabel>
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

                    {/* Name */}
                    <FormLabel containerStyle={Styles.Form.label}>Product Name</FormLabel>
                    {this.renderFormInput(InputTypeEnum.name)}
                    
                    {/* Description */}
                    <FormLabel containerStyle={Styles.Form.label}>Description</FormLabel>
                    {this.renderFormInput(InputTypeEnum.description)}
                    
                    {/* Dimensions */}
                    <FormLabel containerStyle={Styles.Form.label}>Dimensions</FormLabel>
                    {this.renderFormInput(InputTypeEnum.dimensions)}
                    
                    {/* Cost */}
                    <FormLabel containerStyle={Styles.Form.label}>Cost</FormLabel>
                    {this.renderFormInput(InputTypeEnum.cost)}

                    {/* <Button
                        title="Add Item"
                        onPress={this.onAddItemPress.bind(this)}
                        rounded
                        backgroundColor='blue'
                        color='#d2d3db'
                        buttonStyle={Styles.Button.style}
                        borderRadius={30}
                        fontWeight='700'
                        fontSize={20}
                        containerViewStyle={Styles.Button.container}
                    /> */}
                    
                </Container>
            </BaseContainer>
        );
    }
}

const Styles = {
    Containers: {
        carousel: {
            justifyContent: 'flex-start',
            width: '100%', 
            flex: 30,
            // flex: 50
        },
        input: {
            justifyContent: 'flex-start',
            width: '100%', 
            flex: 65
        },
        addImage: {
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
        scroll: {
            flex: 1,
            width: '100%',
        }
    },
    Form: {
        label: {
            marginLeft: 20,
            alignSelf: 'flex-start'
        },
        input: {
            width: '90%',
            height: 50,
            justifyContent: 'center',
        }
    },
    Button: {
        style: {
            height: 50
        },
        editStyle: {
            width: 100, 
            height: 40, 
            padding: 5, 
            alignSelf: 'center', 
        },
        editContainerStyle: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'orange',
        },
        container: {
            borderRadius: 20,
            alignSelf: 'center',
            width: '70%',
            marginTop: 'auto',
            marginBottom: 10,
            flex: 1
        }
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

const mapStateToProps = ({ addInventory, inventory }) => {
    const { newProduct } = inventory;
    const {   
            name, description, dimensions,
            cost, images
        } = newProduct;
    const { 
        categories, selectedCategory,
        loading, error
    } = addInventory;

    return {
        name,
        cost,
        description,
        dimensions,
        images,
        hasImages: images.length > 0,
        categories,
        selectedCategory,
        loading,
        error
    }
}

export default connect(mapStateToProps, { 
    category_picker_change,
    add_inventory_input_change,
    add_item_pictures,
    picture_selection_resume
})(AddInventory);
