import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from './btn';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import dino from '../assets/images/dinoMascot.svg';

const Wrapper = styled.div`
  background: ${props => props.theme.violet};
  min-height: 90vh;
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
  .dateRow {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  .headerRow {
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-column-gap: 1rem;
  }
  @media (max-width: 768px) {
    .dateRow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      padding: 1rem;
    }
    .headerRow {
      grid-template-columns: 1fr;
      overflow: hidden;
    }
    .sm-hidden {
      display: none;
    }
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
      <Row className='headerRow'>
        <Col className='sm-hidden'>
          <img src={dino} alt='Dino mascot' width='100%'/>
        </Col>
        <Col className='text-center'>
          <img src={logo} alt='Serverlessdays logo' width='100%'/>
          <div className='text-left flex ml-3'>
            <h1 className='headline'>One Day. One Track. One Community</h1>
            <h4>May 25th, 2021</h4>
            <h6>10am PST / 1pm EST / 6pm GMT / 7pm CET</h6>
            <Button to='https://docs.google.com/forms/d/e/1FAIpQLScYo133vugdBSFYF9l6l2u-Ia2k4YSOmvh2gruNKFCIERS92g/viewform' primary>Submit to CFP</Button>
          </div>
        </Col>
      </Row>
      <Row className='text-center dateRow'>
        <StyledEvent>
          <h5 className='headline'>CFP Opens</h5>
          <h3>March 29th, 2021</h3>
        </StyledEvent>
        <StyledEvent>
          <h5 className='headline'>CFP Closes</h5>
          <h3>April 25th, 2021</h3>
        </StyledEvent>
        <StyledEvent>
          <h5 className='headline'>Speakers announced</h5>
          <h3>May 3rd, 2021</h3>
        </StyledEvent>
        <StyledEvent>
          <h5 className='headline'>ServerlessDays Virtual 4th Edition!</h5>
          <h3>May 25th, 2021</h3>
        </StyledEvent>
      </Row>
    </Container>
  </Wrapper>
)

export default Header;
