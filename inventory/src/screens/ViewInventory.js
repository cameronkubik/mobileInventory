import React, { Component } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { Header, SearchBar, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import NavigationService from '../Services/NavigationService';
import { 
    load_inventory_categories, category_search_text_changed,
    category_search_text_cleared, inventory_category_press
} from '../actions';
import { BaseContainer, Container, Spinner } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class ViewInventory extends Component {
    static navigationOptions = {
        header: null
    }

    header = {
        left: { 
            icon: 'chevron-left',
            color: colors.accents,
            size: 36,
            onPress: NavigationService.back
        },
        title: {
            text: 'Inventory',
            style: Styles.header.title
        }
    }

    searchTextChange(text) {
        this.props.category_search_text_changed(text);
    }
    searchTextCleared() {
        this.props.category_search_text_cleared();
    }

    onItemPress(categoryName) {
        this.props.inventory_category_press(categoryName);
    }
    
    // Render functions
    componentWillMount() {
        this.props.load_inventory_categories();
    }

    _renderRow({ item }) {
        return (
            <ListItem
                title={item.name}
                subtitle={`${item.items} items`}
                avatar={{ uri: item.avatarUri }}
                chevronColor='#606060'
                onPress={() => this.onItemPress(item.name)}
            />
        );
    }

    renderList() {
        if (this.props.loading) {
            return <Spinner />;
        }

        var listData = this.props.categories;

        if (this.props.filteredCategories) {
            listData = this.props.filteredCategories;
        }

        return (
            <List
                containerStyle={Styles.listContainer}
            >
                <FlatList
                    data={listData}
                    renderItem={this._renderRow.bind(this)}
                    keyExtractor={item => item.name}
                />
            </List>
        );
    }

    render() {
        return (
            <BaseContainer customStyle={Styles.base}>
                <StatusBar 
                    // this doesnt work!!!
                    backgroundColor='#606060' 
                    // this doesnt work!!! ^^
                    barStyle='light-content' 
                    
                />
                <Header 
                    leftComponent={this.header.left}
                    centerComponent={this.header.title}

                    outerContainerStyles={CommonStyles.header.outerContainer}
                    innerContainerStyles={CommonStyles.header.innerContainer}
                />
                <SearchBar
                    round
                    onChangeText={this.searchTextChange.bind(this)}
                    onClearText={this.searchTextCleared.bind(this)}
                    containerStyle={Styles.header.searchContainer}
                    inputStyle={Styles.header.searchInput}
                    value={this.props.searchText}
                    placeholder='Search for a category or item...'
                    placeholderTextColor='#fff'
                    lightTheme
                    clearIcon={{ name: 'clear', color: '#fff' }}
                />

                <Container customStyle={Styles.contentContainer}>
                    {this.renderList()}
                </Container>
            </BaseContainer>
        );
    }
}

const colors = {
    header: '#606060',
    accents: 'orange'
};

const Styles = {
    base: {
        justifyContent: 'flex-start',
        backgroundColor: '#606060'
    },
    header: {
        title: { 
            color: '#fff',
            fontSize: 22
        },
        searchContainer: {
            width: '100%',
            backgroundColor: colors.header,
            borderTopColor: colors.header
        },
        searchInput: {
            backgroundColor: '#adadad',
            color: '#fff'
        }
    },
    contentContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
    },
    listContainer: {
        width: '100%',
        marginTop: 0,
        borderTopWidth: 0
    }
};

const mapStateToProps = ({ viewInventory }) => {
    const { 
        searchText, categories, filteredCategories, loading, error
    } = viewInventory;

    return {
        searchText,
        categories,
        filteredCategories,
        loading,
        error
    };
};

export default connect(mapStateToProps, {
    load_inventory_categories, category_search_text_changed,
    category_search_text_cleared, inventory_category_press
})(ViewInventory);