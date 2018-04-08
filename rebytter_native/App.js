/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router ,Stack , Scene} from 'react-native-router-flux';
import { connect } from 'react-redux';
import Placeholder from './src/components/Placeholder';
import Home from './src/containers/Home';
import Login from './src/containers/Login';
import Signup from './src/containers/Signup';

const RouterWithRedux = connect()(Router);
export default class App extends Component<Props> {

  render() {
    return (
      <RouterWithRedux>
        <Scene key="root" hideNavBar={true}>
          <Scene key="auth" hideNavBar={true}>
            <Scene key="login" component={Login} initial={!this.props.isLoggedIn}/>
            <Scene key="signup" component={Signup} />
          </Scene>
          <Scene key="main" component={Home} initial={this.props.isLoggedIn}/>
        </Scene>
      </RouterWithRedux>
    );
  }
}
