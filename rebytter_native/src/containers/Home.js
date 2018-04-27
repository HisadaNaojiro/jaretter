import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Content , Body , Button, Text , Card , CardItem , Icon , Form, Item , Textarea} from 'native-base';
import { Modal , View} from 'react-native';
import HeaderField from '../components/HeaderField';
import FooterField from '../components/FooterField';
import { addTweet } from '../redux/actions/tweet';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      formData: {
        contents: ''
      }
    };
    this.onChangeModalVisible = this.onChangeModalVisible.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e){
    //if(!this.state.formData.contents){
     // return;
    //}

    this.props.addTweet('testtes');
   // this.props.addTweet(this.state.formData.contents);
    this.onChangeModalVisible();
    e.preventDefault();
  }

  handleChange(e){
    console.log(this.state.formData);
    let formData = Object.assign({},this.state.formData);
    formData.contents = e.target.value
    this.setState({formData: formData});
  }

  onChangeModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
    return (
      <Container>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
        }}>
          <Container style={{flexDirection:'row'}}>
            <Content>
              <View>
                <Button transparent onPress={this.onChangeModalVisible}> 
                  <Icon name='md-close' />
                </Button>
                <Form>
                  <Button rounded onPress={this.handleClick}> 
                    <Text>ツイート</Text>
                  </Button>
                  <Textarea rowSpan={5} onChange={this.handleChange} placeholder="入力してください" />
                </Form>
              </View>
            </Content>
          </Container>
        </Modal>
        <HeaderField onPress={this.onChangeModalVisible}/>
        <Content>
           <Card>
              <CardItem>
                <Body>
                  <Text>Sample</Text>
                </Body>
              </CardItem>
           </Card>
        </Content>
        <FooterField />
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
    addTweet: (contents) => dispatch(callTweetService(contents)),
  }
}

export const callTweetService = (contents) =>{
  const query = `mutation{createTweet(contents: "${contents}"){id contents TweetedBy{id name}}}`;
  return dispatch => {
    dispatch(addTweet(contents));
    axios.post('http://10.0.2.2:3000/graphql',{query:query})
    .then(response =>{
      console.log(response);
      Actions.main();
    })
    .catch(error => {
      console.log(error);
    });
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Home);
