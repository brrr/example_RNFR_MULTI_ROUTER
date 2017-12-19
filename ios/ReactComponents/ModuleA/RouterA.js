'use strict';
import React, {Component} from 'react';
import {
    Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox,
    NavigationStore, reducerWithNavigationStore
} from 'react-native-router-flux';
import {
    Text, View, TouchableOpacity, NativeModules
} from 'react-native';
import ComponentA1 from './ComponentA1';
import ComponentA2 from './ComponentA2';

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

export default class RouterA extends React.Component {
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
                  <Scene key="componentA1" component={ComponentA1} title="1st page" renderLeftButton={renderBack2NativeButton}/>
                  <Scene key="componentA2" component={ComponentA2} title="2nd page"/>
                </Stack>
            </Router>
        );
    }
}
