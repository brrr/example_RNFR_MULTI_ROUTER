'use strict';
import React, {Component} from 'react';
import {
    Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox,
    NavigationStore, reducerWithNavigationStore
} from 'react-native-router-flux';
import {
    Text, View, TouchableOpacity, NativeModules
} from 'react-native';
import ComponentB1 from './ComponentB1';
import ComponentB2 from './ComponentB2';

const backToNative = () =>{
  NativeModules.RNViewControllerModule.dissmisSelfRNViewController();
}

const renderBack2NativeButton = (nav) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            alignSelf: 'center',
        }} onPress={backToNative}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flex: 1,
                marginBottom: 1
            }}>
                <Text>back</Text>
            </View>
        </TouchableOpacity>
    );
}

const navigationStore = new NavigationStore();

const getNavigationStore = () => {
  return navigationStore;
}

const reducerCreate = params => {
  return (state, action) => {
    return reducerWithNavigationStore(getNavigationStore(),state, action);
  };
};

export default class RouterB extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Router getNavigationStore={getNavigationStore}
                    createReducer={reducerCreate}>
                <Stack key="root"  >
                  <Scene key="componentB1" component={ComponentB1} title="1st page" renderLeftButton={renderBack2NativeButton}/>
                  <Scene key="componentB2" component={ComponentB2} title="2nd page"/>
                </Stack>
            </Router>
        );
    }
}
