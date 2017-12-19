import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default class ComponentB2 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
                <Text>2nd page in RouterB</Text>
        );
    }
}
