import update from 'react-addons-update';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

module.exports = combineReducers({
    form: formReducer
});