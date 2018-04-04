import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
 
class Placeholder extends Component{
  UNSAFE_componentWillMount(){
    if(this.props.isLoggedIn){
      Actions.main(); 
    }else{
      Actions.login();
    }
  }

  UNSAFE_componentWillReceiveProps(){
    if(this.props.isLoggedIn){
      Actions.main(); 
    }else{
      Actions.login();
    }
  }

  render(){
    return(<View></View>);
  }
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}
 
export default connect(mapStateToProps)(Placeholder);
