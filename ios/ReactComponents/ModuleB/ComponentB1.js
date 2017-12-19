import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';

export default class ComponentB1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
          <View>
            <Text>first page in RouterB</Text>
            <Button title="go to page 2" onPress = {()=>{this.props.navigationStore.componentB2()}}>  <Text>go to page 2 in RouterB</Text></Button>
          </View>
        );
    }
}
