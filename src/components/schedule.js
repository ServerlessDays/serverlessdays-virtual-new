import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props => props.theme.violet};
`

let StyledFeature = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.20);
  }
`

let Feature = ({title, description}) => (
  <Col md={12} className='mb-3'>
    <StyledFeature>
      <div className='p-3'>
        <h5 className='py-2'>{title}</h5>
        <p>{description}</p>
      </div>
    </StyledFeature>
  </Col>
)

let Schedule = () => {
  return (
    <Wrapper id='schedule'>
      <Container className='py-5'>
        <h2 className='text-center py-5'>Schedule</h2>
        <Row>
          <Feature
            title='Lorem Ipsum'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
          />
        </Row>
        <Row>
          <Feature
            title='Bacon Ipsum'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
          />
        </Row>
        <Row>
          <Feature
            title='Lambda S3'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
          />
        </Row>
        <Row>
          <Feature
            title='Lorem Ipsum'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
          />
        </Row>
        <Row>
          <Feature
            title='Bacon Ipsum'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
          />
        </Row>
        <Row>
          <Feature
            title='Lambda S3'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
          />
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Schedule;
