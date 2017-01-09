import {createStore, compose} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducers from '../reducers';

var defaultState = {};

exports.configureStore = (initialState=defaultState) => {
    var store = createStore(reducers, initialState, compose(
        autoRehydrate()
    ));
    persistStore(store, {storage: AsyncStorage});
    return store;
};