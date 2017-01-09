import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Contact from './Login';

export default class About extends Component {
    navigateToMain() {
        this.props.navigator.pop();
    }
    navigateToContact() {
        this.props.navigator.push({
            component: Contact,
            title: 'Contact'
        });
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>About component</Text>
                <TouchableOpacity onPress={e => this.navigateToMain()}>
                    <Text>Back to home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={e => this.navigateToContact()}>
                    <Text>Contact</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

module.exports = About;