import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';

export default class ComponentA1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
          <View>
            <Text>first page in RouterA</Text>
            <Button title="go to page 2" onPress = {()=>{this.props.navigationStore.componentA2()}}>  <Text>go to page 2 in RouterA</Text></Button>
          </View>
        );
    }
}
