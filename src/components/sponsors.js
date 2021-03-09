import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components';
import Img from 'gatsby-image';
import epsagon from '../assets/images/logos/Epsagon.png';
import senzo from '../assets/images/logos/Senzo.png';
import stackery from '../assets/images/logos/Stackery.png';
import shundra from '../assets/images/logos/Thundra.png';

let Wrapper = styled.div`
  background: ${props => props.theme.gradientBackground};
`

let Sponsors = () => {
  return (
    <Wrapper id='sponsors'>
      <Container className='text-center py-5'>
      <h2 className='py-5'>Sponsors</h2>
      <Row>
        <Col>
          <img className='py-4' alt='sponsor logo' src={epsagon}/>
        </Col>
        <Col>
          <img className='py-4' alt='sponsor logo' src={senzo}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className='py-4' alt='sponsor logo' src={stackery}/>
        </Col>
        <Col>
          <img className='py-4' alt='sponsor logo' src={shundra}/>
        </Col>
      </Row>
      </Container>
    </Wrapper>
  )
}

export default Sponsors;
