'use strict';
import {
    AppRegistry
} from 'react-native';
import RouterA from './ModuleA/RouterA';
import RouterB from './ModuleB/RouterB';
import React from 'react';

AppRegistry.registerComponent('RouterA', () => RouterA);
AppRegistry.registerComponent('RouterB', () => RouterB);
