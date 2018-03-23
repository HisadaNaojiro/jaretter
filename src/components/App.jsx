import React from 'react';
import {Switch , Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';
import Header from './Header';
import Login from './Login';
import theme from '../styles/Theme';
import CssBaseline from 'material-ui/CssBaseline';

const App = () =>{
  return(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Header} />
      </Switch>
    </MuiThemeProvider>
  );
}


export default App;
