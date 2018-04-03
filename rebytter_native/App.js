/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router ,Stack , Scene} from 'react-native-router-flux';
import Home from './src/components/Home';
import Login from './src/containers/Login';
import Signup from './src/containers/Signup';

export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} />
          <Scene key="auth">
            <Scene key="login" component={Login} />
            <Scene key="signup" component={Signup} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
