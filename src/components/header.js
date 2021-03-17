import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from './btn';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import dino from '../assets/images/dinoMascot.png';

const Wrapper = styled.div`
  background: ${props => props.theme.violet};
  min-height: 100vh;
  padding-top: 4rem;
  width: 100%;
  h1, h2, h3 {
    color: #fff;
  }
  h5 {
    color: #fff;
    opacity: 60%;
  }
  .headline {
    padding-top: 2rem;
  }
`
let StyledEvent = styled.div`
  background: ${props => props.theme.dark};
  margin-top: 2rem;
  padding: 2rem;
  min-height: 250px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.20);
  }
`

const Header = () => (
  <Wrapper className='align-items-center flex mr-3'>
    <Container>
      <Row>
        <Col className='col-3'>
          <img src={dino} alt='Dino mascot' width='100%'/>
        </Col>
        <Col className='col-8 text-center'>
          <img src={logo} alt='Serverlessdays logo' width='100%'/>
          <div className='text-left flex ml-3'>
            <h1 className='headline'>One Day. One Track. One Community</h1>
            <h4>April 28th, 2021</h4>
            <h6>10am PST / 1pm EST / 6pm GMT / 7pm CET</h6>
            <Button to='https://docs.google.com/forms/d/e/1FAIpQLScYo133vugdBSFYF9l6l2u-Ia2k4YSOmvh2gruNKFCIERS92g/viewform' primary>Submit to CFP</Button>
          </div>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
          <StyledEvent>
            <h5 className='headline'>CFP Opens</h5>
            <h3>March 1st, 2021</h3>
          </StyledEvent>
        </Col>
        <Col>
        <StyledEvent>
          <h5 className='headline'>CFP Closes</h5>
          <h3>March 21st, 2021</h3>
          </StyledEvent>
        </Col>
        <Col>
        <StyledEvent>
          <h5 className='headline'>Speakers announced</h5>
          <h3>March 24th, 2021</h3>
          </StyledEvent>
        </Col>
        <Col>
        <StyledEvent>
          <h5 className='headline'>ServerlessDays Virtual 4th Edition!</h5>
          <h3>April 28th, 2021</h3>
          </StyledEvent>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

export default Header;
