import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import UserSelectBar from './UserSelectBar';

const SelectTitleBox = styled.span`
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
`

const TestBar = styled.div`
    width: 330px;
    height: 60px;
    background: red;
`

const DropDown = styled.div `
    width: 400px;
    height: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid blue;
    border-radius: 100px;
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

        this.state = {
            showOptions: false,
            selectedUser: {
                id: 'tylermcginnis',
                name: 'Tyler McGinnis',
                avatarURL: '../images/tylermcginnis.png',
                answers: {
                  "vthrdm985a262al8qx3do": 'optionOne',
                  "xj352vofupe1dqz9emx13r": 'optionTwo',
                },
                questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
              },
        }
    }

    render(){
        const arrow = this.state.showOptions===true ? faArrowUp : faArrowDown;
        console.log(this.state.showOptions)
        return(
            <div>
                <DropDown onClick={() => (this.setState({showOptions: !this.state.showOptions}))}>
                    <ArrowBox><FontAwesomeIcon icon={arrow} size="large"/></ArrowBox>
                    <SelectTitleBox>{this.state.selectedUser ? this.state.selectedUser.name : ''}</SelectTitleBox>
                </DropDown>
                <DropDownOptions hide={!this.state.showOptions}>
                    {Object.keys(this.props.users).map((user)=>(
                        <UserSelectBar user={this.props.users[user]}/>
                    ))}
                </DropDownOptions>
            </div>
        )
    }
}

export default UserSelectDropDown