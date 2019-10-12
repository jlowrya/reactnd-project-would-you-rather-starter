import React from 'react';
import styled from 'styled-components'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import john from '../images/johndoe.jpg'
import sarah from '../images/sarahedo.jpg'
import tyler from '../images/tylermcginnis.png'

const UserBubble = styled.div `
    background: url(${props => props.avatar});
    background-size: cover;
    background-position: center;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: 1px solid black;
    margin: 0 15px 0 15px;
`
const  UserBox = styled.div `
    display: inline-flex;
    text-align: center;
`
const HeaderBar = styled.div `
    position: fixed;
    width: 100%;
`

function Header(props){
    return(
        <HeaderBar>
        <Navbar color="blue" expand="md">
          <NavbarBrand href="/">Would You Rather</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">New Question</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Leaderboards</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <UserBox>
                    <UserBubble avatar={tyler} />
                    Tyler McGinnis
                </UserBox>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Your Questions
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </HeaderBar>
    )
}

export default Header