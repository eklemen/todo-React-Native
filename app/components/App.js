import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// import {} from '../actions';
import Login from './Login';

export default class Main extends Component {
    render() {
        return (
            <Login />
        );
    }
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const mapStateToProps = state => {
    return {
        // todos: state.todos
    }
};
module.exports = connect(mapStateToProps)(Main);