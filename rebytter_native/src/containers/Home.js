/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content , Body , Button, Text , Card , CardItem} from 'native-base';
import HeaderField from '../components/HeaderField';
import FooterField from '../components/FooterField';

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container>
        <HeaderField />
        <Content>
          {this.props.contents.map(contents =>
             <Card>
                <CardItem>
                  <Body>
                    <Text>{contents}</Text>
                  </Body>
                </CardItem>
             </Card>
          )}
        </Content>
        <FooterField />
      </Container>
    );
  }
}
