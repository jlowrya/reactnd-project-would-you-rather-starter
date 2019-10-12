import React, { Component } from 'react';
import styled from 'styled-components'
import UserSelectDropDown from './UserSelectDropDown'
import UserSelectBar from './UserSelectBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

import john from '../images/johndoe.jpg'
import sarah from '../images/sarahedo.jpg'
import tyler from '../images/tylermcginnis.png'

const LoginBox = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    border: 1px solid blue;
    padding: 25px;
`

const AvatarBubble =  styled.div `
    height: 150px;
    width: 150px;
    border-radius: 75px;
    border: 1px solid blue;
    display: grid;
    justify-items: center;
    align-items: center;
    background: url(${props => props.avatar ? props.avatar : ''});
    background-size: cover;
    background-position: center;
`

const Login = styled.div `
    width: 100px;
    height: 50px;
    background: blue;
    color: white;
    display: grid;
    justify-items: center;
    align-items: center;

    :hover{
        cursor: pointer;
    }
`

class UserSelectBox extends Component{
    constructor(props){
        super(props)

        this.state = {
            selectedUser: null,
            showDropdownOptions: false
        }
    }

    handleUserSelection = (user) => {
        this.setState({
            selectedUser: user,
            showDropdownOptions: false
        })
    }

    toggleDropdown = (toggleState) => {
        this.setState({showDropdownOptions: !toggleState})
    }

    render(){
        let image = ''
        if(this.state.selectedUser!==null){
            if(this.state.selectedUser.id==='sarahedo'){
                image = sarah
            }
            else if(this.state.selectedUser.id==='tylermcginnis'){
                image = tyler
            }
            else if(this.state.selectedUser.id==='johndoe'){
                image = john
            }
        }
      
        console.log(`The selected user is ${this.state.selectedUser? this.state.selectedUser.name : 'null'} and the image is ${image}`)
        return (
            <LoginBox>
                <AvatarBubble avatar={image}>
                    {this.state.selectedUser ? 
                        ''
                        :
                        <FontAwesomeIcon icon={faUser} size="5x" style={{ color: 'blue'}}/>
                    }
                </AvatarBubble>
                <UserSelectDropDown 
                    users={this.props.users} 
                    handleUserSelection={this.handleUserSelection}
                    toggleDropdown= {this.toggleDropdown}
                    showOptions={this.state.showDropdownOptions}
                    selectedUser={this.state.selectedUser}
                />
                <Login>Login</Login>
            </LoginBox>
        )
    }
}

export default UserSelectBox