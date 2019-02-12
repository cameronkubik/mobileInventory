import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { 
    load_item_detail, edit_inventory_item, remove_inventory_item
} from '../actions';
import { BaseContainer, Container, ImageCarousel, Spinner } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class ItemDetail extends Component {

    static navigationOptions = {
        title: 'Item (Placeholder, TODO)'
    };

    componentWillMount() {
        this.props.load_item_detail('TODO');
    }

    onEditPress() {
        debugger;
        // NOT YET TESTED
        if (this.props.loading) return;

        const { pictures, description, dimensions, category } = this.props;
        const dataModel = {
            pictures,
            description, 
            dimensions,
            category
        }

        this.props.edit_inventory_item(dataModel);
    }

    onRemovePress() {
        if (this.props.loading) return;

        this.props.remove_inventory_item();
    }

    // Component render functions
    renderCarousel() {
        if  (this.props.pictures) {
            return (
                <View style={{ height: '100%' }}>
                    <ImageCarousel data={this.props.pictures} />
                </View>
            );
        }

        return <Spinner />;
    }

    renderInformation() {
        if (this.props.description && this.props.dimensions) {
            return (
                <Container customStyle={[Styles.infoContainer]}>
                    <Text style={Styles.infoHeader}>
                        Description
                    </Text>
                    <Text style={Styles.infoText}>
                        {this.props.description}
                    </Text>
                    <Text style={Styles.infoHeader}>
                        Dimensions
                    </Text>
                    <Text style={Styles.infoText}>
                        {this.props.dimensions}
                    </Text>
                </Container>
            )
        }

        return <Text style={Styles.infoText}>Loading...</Text>;
    }

    render() {
        return (
            <BaseContainer customStyle={Styles.base}>
                {/* Carousel */}
                <Container customStyle={[Styles.pictureContainer]}>
                    {this.renderCarousel()}
                </Container>
                                
                {/* Information */}
                {this.renderInformation()}

                {/* Buttons */}
                <Container customStyle={[Styles.buttonContainer]}>
                    <Button
                        title="Edit"
                        onPress={this.onEditPress.bind(this)}
                        rounded
                        backgroundColor='blue'
                        color='#d2d3db'
                        buttonStyle={Styles.buttons}
                        borderRadius={30}
                        fontWeight='700'
                        fontSize={20}
                        containerViewStyle={Styles.buttonWrapper}
                    />
                    <Button
                        title="Remove"
                        onPress={this.onRemovePress.bind(this)}
                        rounded
                        backgroundColor='orange'
                        color='#d2d3db'
                        buttonStyle={Styles.buttons}
                        borderRadius={30}
                        fontWeight='700'
                        fontSize={20}
                        containerViewStyle={Styles.buttonWrapper}
                    />
                </Container>
            </BaseContainer>
        );
    }
}

const Styles = {
    base: {},
    pictureContainer: {
        flex: 1,
        backgroundColor: '#636363',
        padding: 20
    },
    infoContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
        width: '90%'
    },
    editButton: { 
        width: 100, 
        height: 40, 
        padding: 5, 
        alignSelf: 'center', 
        marginTop: 10 
    },
    buttonWrapper: {
        borderRadius: 20,
        alignSelf: 'center',
        width: '80%',
        marginVertical: 10
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        width: '100%',
        padding: 10
    },
    buttons: {
        height: 50
    },
    infoText: {
        color: '#636363',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    infoHeader: {
        color: 'black',
        fontSize: 22,
        fontWeight: '700'
    }
};

const mapStateToProps = ({itemDetail}) => {
    const { 
        pictures, category, itemID,
        description, dimensions, loading, error
    } = itemDetail;

    return {
        pictures, category, itemID,
        description, dimensions, loading, error
    }
}

export default connect(mapStateToProps, { 
    load_item_detail, edit_inventory_item, remove_inventory_item
})(ItemDetail);
