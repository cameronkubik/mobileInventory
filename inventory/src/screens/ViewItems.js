import React, { Component } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { Header, SearchBar, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { 
    load_category_items, item_search_text_changed, item_search_text_cleared
} from '../actions';
import { BaseContainer, Container, Spinner } from '../components/common';

class ViewItems extends Component {
    static navigationOptions = {
        header: null
    }

    header = {
        left: { icon: 'chevron-left', color: colors.accents, size: 36 },
        title: { text: this.props.parentCategory, style: Styles.header.title },
    }

    searchTextChange(text) {
        this.props.item_search_text_changed(text);
    }
    searchTextCleared() {
        this.props.item_search_text_cleared();
    }
    
    // Render functions
    componentWillMount() {
        this.props.load_category_items();
    }

    _renderRow({ item }) {
        return (
            <ListItem
                title={`${item.name} 000${item.itemID}`}
                subtitle={`$ ${item.cost}`}
                avatar={{ uri: item.imageUri }}
                chevronColor='#606060'
            />
        );
    }

    renderList() {
        if (this.props.loading) {
            return <Spinner />;
        }

        var listData = this.props.items;

        if (this.props.filteredItems) {
            listData = this.props.filteredItems;
        }

        return (
            <List
                containerStyle={Styles.listContainer}
            >
                <FlatList
                    data={listData}
                    renderItem={this._renderRow}
                    keyExtractor={item => item.itemID.toString()}
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

                    outerContainerStyles={Styles.header.outerContainer}
                    innerContainerStyles={Styles.header.innerContainer}
                />
                <SearchBar
                    round
                    onChangeText={this.searchTextChange.bind(this)}
                    onClearText={this.searchTextCleared.bind(this)}
                    containerStyle={Styles.header.searchContainer}
                    inputStyle={Styles.header.searchInput}
                    value={this.props.searchText}
                    placeholder='Search for an item...'
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
        outerContainer: { 
            width: '100%', 
            backgroundColor: colors.header,
            borderBottomColor: colors.header,
        },
        innerContainer: {
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.header
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

const mapStateToProps = ({ viewItems }) => {
    const { 
        searchText, parentCategory, items, filteredItems, loading, error
    } = viewItems;

    return {
        searchText, 
        parentCategory, 
        items, 
        filteredItems,
        loading,
        error
    };
};

export default connect(mapStateToProps, {
    load_category_items, item_search_text_changed, item_search_text_cleared
})(ViewItems);