import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import LoginForm from '../components/LoginForm';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'Login',
      email: '',
      password: ''
    };
  }
  
  userLogin(e){
    this.props.onLogin(this.state.email , this.state.password);
    e.preventDefault();
  }

  toggleRoute(e){
    let alt = (this.state.route === 'Login') ? 'Login' : 'Signup';
    this.setState({route : alt});
    e.preventDefault();
  }  

  render() {
    let alt = (this.state.route === 'Login') ? 'Login' : 'Signup';
    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{alt}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <LoginForm {...this.props} />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state , ownProps) =>{
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email , password) => { dispatch(login(email , password)); },
    onSignup: (email , password) => { dispatch(signup(email , password)); }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Login);
