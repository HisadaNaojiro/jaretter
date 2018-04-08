import React, { Component } from 'react';
import {Form, Item, Label , Input , Button , Text} from 'native-base';

export default class SignupForm extends Component {
  render() {
    return (
      <Form>
        <Item stackedLabel>
          <Label>Name</Label>
          <Input placeholder="ユーザ名" />
        </Item>
        <Item stackedLabel>
          <Label>Email</Label>
          <Input placeholder="メールアドレス" />
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input placeholder="パスワード" secureTextEntry={true}/>
        </Item>
        <Button block>
          <Text>登録</Text>
        </Button>
      </Form>
    );
  }
}
