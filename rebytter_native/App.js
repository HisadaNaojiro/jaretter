/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router ,Stack , Scene} from 'react-native-router-flux';
import Placeholder from './src/components/Placeholder';
import Home from './src/components/Home';
import Login from './src/containers/Login';
import Signup from './src/containers/Signup';

export default class App extends Component<Props> {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="auth" hideNavBar={true}>
            <Scene key="login" component={Login} initial={!this.props.isLoggedIn}/>
            <Scene key="signup" component={Signup} />
          </Scene>
          <Scene key="main" component={Home} initial={this.props.isLoggedIn}/>
        </Scene>
      </Router>
    );
  }
}
