import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import UserSelectBar from './UserSelectBar';

const SelectTitleBox = styled.div`
    width: 330px;
    height: 60px;
    background: white;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    font-size: 20px;
`
const ArrowBox = styled.div`
    width: 70px;
    height: 60px;
    display: grid;
    justify-items: center;
    align-items: center;
    background: blue;
    color: white;
    position: absolute;
`

const DropDown = styled.div `
    width: 400px;
    height: 60px;
    display: grid;
    grid-template-columns: 2 auto;
    border: 1px solid blue;
    ${'' /* border-radius: 100px; */}
    max-width: 400px;
`

const DropDownOptions = styled.div `
    margin: 0 0 0 70px;
    width: 330px;
    height: auto;
    display: grid;
    grid-template-rows: auto;
    visibility: ${(props) => props.hide ?  'hidden' : 'visible'}
`

class UserSelectDropDown extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const arrow = this.props.showOptions=== true ? faArrowUp : faArrowDown;
        return(
            <div>
                <DropDown onClick={() => this.props.toggleDropdown(this.props.showOptions)}>
                    <ArrowBox><FontAwesomeIcon icon={arrow} size="large"/></ArrowBox>
                    <SelectTitleBox>{this.props.selectedUser ? this.props.selectedUser.name : 'Select a user'}</SelectTitleBox>
                </DropDown>
                {/* Drop down option receives click instead of the user select bar. On click works for when put in the drop down options but not the user select bar */}
                <DropDownOptions hide={!this.props.showOptions}>
                    {Object.keys(this.props.users).map((key)=>(
                        <UserSelectBar onClick={this.props.handleUserSelection} id={key}  user={this.props.users[key]}/>
                    ))}
                </DropDownOptions>
            </div>
        )
    }
}

export default UserSelectDropDown