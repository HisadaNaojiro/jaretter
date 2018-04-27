import React, { Component } from 'react';
import {  Header, Title, Content , Button, Left, Right, Body, Icon } from 'native-base';

const HeaderField = (props) => {
  return(
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>ホーム</Title>
      </Body>
      <Right>
        <Button transparent onPress={props.onPress}> 
          <Icon name='md-chatboxes' />
        </Button>
      </Right>
    </Header>
  );
}


export default HeaderField;
