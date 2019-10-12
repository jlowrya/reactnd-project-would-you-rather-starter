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
    background-color: ${props => props.primary ? 'lightblue' : 'red'}
`

const OptionText = styled.div`
    margin: 50px;
    height: 75%;
    width: 75%;
    font-size: 25px;
    white-space: normal;
    overflow-y: scroll;
`


const OptionCard = (props) => {
    return (
        <Option primary onClick={()=> console.log('Option clicked')}>
           <OptionText>
           I certify and affirm that the information provided to access my voter registration is my own or I am expressly authorized 
           by the voter to access this information. I understand that it is unlawful to access the record of any other voter, 
           punishable as computer fraud under Va. Code § 18.2-152.3.*I certify and affirm that the information provided to access 
           my voter registration is my own or I am expressly authorized by the voter to access this information. I understand that it 
           is unlawful to access the record of any other voter, punishable as computer fraud under Va. Code § 18.2-152.3.*I certify 
           and affirm that the information provided to access my voter registration is my own or I am expressly authorized by 
           the voter to access this information. I understand that it is unlawful to access the record of any other voter, 
           punishable as computer fraud under Va. Code § 18.2-152.3.* 
           </OptionText> 
           {/* <OptionText>I understand that it is unlawful to access the record of any other voter, 
           punishable as computer fraud under Va. Code § 18.2-152.3.* I understand that it is unlawful to access the record of any other voter, 
           punishable as computer fraud under Va. Code § 18.2-152.3.* </OptionText> */}
        </Option>
    )
}

export default OptionCard