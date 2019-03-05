import DatabaseManager from './DatabaseManager';
import ModelManager from './ModelManager';
import NavigationService from './NavigationService';
import StoreManager from './StoreManager';

const Services = {
    Database: DatabaseManager,
    Models: ModelManager,
    Navigation: NavigationService,
    Store: StoreManager
}

export default Services;