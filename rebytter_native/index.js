import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import ConfigureStores from './src/redux/ConfigureStores';
import App from './App';

const Rebytter = () =>{
  return(
    <Provider store={ConfigureStores}>
      <App />
    </Provider>
  );
}
AppRegistry.registerComponent('rebytter_native', () => Rebytter);
