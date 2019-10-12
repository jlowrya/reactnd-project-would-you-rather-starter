import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';

import OptionCard from './OptionCard'


const Question = (props) => {
    return (
        <Container>
            <Row style={{marginBottom: "50px"}}>
                <Col style={{fontSize: "30px"}}>
                   <i>Would you rather...?</i>
                </Col>
            </Row>
            <Row>
                <Col style={{display: "grid", justifyItems: "center", alignItems: "center"}}>
                    <OptionCard primary option={'Die from hunger'}/>
                </Col>
                <Col style={{display: "grid", justifyItems: "center", alignItems: "center"}}>
                    <OptionCard option={'Die from thirst'}/>
                </Col>
            </Row>
        </Container>
    )
}


export default Question