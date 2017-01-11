import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Main from './App';

export default class Login extends Component {

    onSignIn() {
        let {email, password} = this.props.fields;
        console.log(email, password);
    }

    renderError(field) {
        if(field.touched && field.error){
            return (
                <Text style={styles.formError}>{field.error}</Text>
            )
        }
    }

    render() {
        const {fields: {email, password}} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        To-Do
                    </Text>
                </View>
                <View style={styles.field}>
                    <TextInput
                        {...email}
                        style={styles.textInput}
                        placeholder="Email" />
                    <View>
                        {this.renderError(email)}
                    </View>
                </View>
                <View style={styles.field}>
                    <TextInput
                        {...password}
                        style={styles.textInput}
                        placeholder="Password" />
                    <View>
                        {this.renderError(password)}
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.button} onPress={ e => this.onSignIn()}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 20,
        backgroundColor: '#aaa'
    },
    titleContainer: {
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 35
    },
    field: {
        borderRadius: 5,
        padding: 5,
        paddingLeft: 8,
        margin: 7,
        marginTop: 0,
        backgroundColor: 'white'
    },
    textInput: {
        height: 26
    },
    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        fontSize: 30,
        color: 'white'
    },
    formError: {
        color: 'red'
    }
};

const validate = formProps => {
    let errors = {};
    if(!formProps.email) {
        errors.email = 'Please enter an email.'
    }
    if(!formProps.password) {
        errors.password = 'Please enter a password.'
    }
    return errors;
};

module.exports = reduxForm({
    form: 'login',
    fields: ['email', 'password'],
    validate: validate
}, null, null)(Login);