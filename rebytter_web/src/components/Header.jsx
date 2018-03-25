import React from 'react';
import {Navbar , Nav , NavItem , NavDropdown , MenuItem} from 'react-bootstrap';


const Header = () =>{
  return(
    <Navbar>
      <Nav>
        <NavItem eventKey={1}>
          Home
        </NavItem>
        <NavItem eventKey={2}>
          通知 
        </NavItem>
        <NavItem eventKey={3}>
          メッセージ
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={4} title="メニュー" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1}>ログイン</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;
