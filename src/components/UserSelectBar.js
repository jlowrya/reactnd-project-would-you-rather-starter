import React from 'react';
import styled from 'styled-components'
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

const Bar = styled.div `
    width: 400px;
    height: 60px;
    display: flex;
    background: white;
    justify-items: center;
    align-items: center;
    color: black;
    border: 1px solid black;
    
    :hover{
        background: whitesmoke;
    }
`
const Name = styled.p`
    font-size: large;
`



function UserSelectBar (props){
    let image = ''
    if(props.user.id==='sarahedo'){
        image = sarah
    }
    else if(props.user.id==='tylermcginnis'){
        image = tyler
    }
    else{
        image = john
    }
    return (
        <Bar>
            <UserBubble avatar={image} />
            <Name>{props.user.name}</Name>
        </Bar>
    )
}

export default UserSelectBar