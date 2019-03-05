import DatabaseManager from './DatabaseManager';
import ModelManager from './ModelManager';
import NavigationService from './NavigationService';
import StoreManager from './StoreManager';
import CommonActions from './CommonActions';

const Services = {
    Database: DatabaseManager,
    Models: ModelManager,
    Navigation: NavigationService,
    Store: StoreManager,
    Actions: CommonActions
}

export default Services;