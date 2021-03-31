import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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

let Feature = ({title, description, img}) => (
  <Col md={3} className='mb-3'>
    <StyledFeature>
      <div className='p-3'>
        <Img fluid={img}/>
        <h5 className='py-2'>{title}</h5>
        <p>{description}</p>
      </div>
    </StyledFeature>
  </Col>
)

let Speakers = () => {
  const data = useStaticQuery(graphql`
    fragment defaultImage on File {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query featuresQuery {
      slide1: file(relativePath: { eq: "slide1.jpg" }) {
        ...defaultImage
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        ...defaultImage
      }
      slide3: file(relativePath: { eq: "slide3.jpg" }) {
        ...defaultImage
      }
    }
  `)
  return (
    <Wrapper id='speakers'>
      <Container className='py-5'>
        <h2 className='text-center py-5'>Speakers</h2>
        <Row>
          <Feature
            title='Lorem Ipsum'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
            img={data.slide1.childImageSharp.fluid}
          />
          <Feature
            title='Bacon Ipsum'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
            img={data.slide2.childImageSharp.fluid}
          />
          <Feature
            title='Foo Bar'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
            img={data.slide3.childImageSharp.fluid}
          />
          <Feature
            title='Bazs Bar'
            description='Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.'
            img={data.slide1.childImageSharp.fluid}
          />
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Speakers;
