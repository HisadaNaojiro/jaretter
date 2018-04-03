import React, { Component } from 'react';
import {Form, Item, Label , Input , Button , Text} from 'native-base';

const LoginForm = (props) =>{ 
  return (
    <Form>
      <Item stackedLabel>
        <Label>Email</Label>
        <Input placeholder="メールアドレス" />
      </Item>
      <Item stackedLabel>
        <Label>Password</Label>
        <Input placeholder="パスワード" secureTextEntry={true}/>
      </Item>
      <Button block>
        <Text>ログイン</Text>
      </Button>
    </Form>
  );
}

export default LoginForm;
