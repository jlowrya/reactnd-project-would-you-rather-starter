import React from 'react';
import styled from 'styled-components';

const Option = styled.div  `
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    justify-items: center;
    align-items: center;
    height: 400px;
    width: 400px;
    border-radius: 100px;
    color: white;
    background-color: ${props => props.primary ? 'lightblue' : 'red'};

    :hover{
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        transform: translateY(-5px);
    }
`

const OptionText = styled.div`
    margin: 50px;
    height: 75%;
    width: 75%;
    font-size: 25px;
    white-space: normal;
    overflow-y: scroll;
`


function OptionCard(props){
    const option = props.primary ? <Option primary={true}><OptionText>{props.option}</OptionText></Option> : <Option><OptionText>{props.option}</OptionText></Option>
    return (
        <div>{option}</div>
       
    )
}

export default OptionCard