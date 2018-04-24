import React, { Component } from 'react';
import { Footer, FooterTab, Button , Icon } from 'native-base';
const FooterField = () => {
  return(
    <Footer>
      <FooterTab>
        <Button vertical>
          <Icon name="home" />
        </Button>
        <Button vertical>
          <Icon name="search" />
        </Button>
        <Button vertical>
          <Icon name="md-notifications-outline" />
        </Button>
      </FooterTab>
    </Footer>
  );
}

export default FooterField;
