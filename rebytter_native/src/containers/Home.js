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

type Props = {};
export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <HeaderField />
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
