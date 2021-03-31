import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from 'styled-components'
import discord from '../assets/images/discord.svg';

const Wrapper = styled.div`
  background: ${props => props.theme.dark};
  color: #fff;
  padding: 4rem 0;
  img {
    width: 10rem;
  }
`

let Social = () => (
  <Wrapper id='about'>
    <Container className='py-5'>
      <h2 className='text-center'>What's ServerlessDays anyway?</h2>
      <p className='py-2 mb-4'>ServerlessDays are a family of events around the world focused on fostering a community around serverless technologies. ServerlessDays Virtual is a quarterly online event that brings the latest ideas in serverless to you, wherever you are in the world. Join us!</p>
      <Row className='d-flex align-items-center text-center'>
        <Col>
          <iframe title='youtube' width='100%' height='600' src='https://www.youtube-nocookie.com/embed/9oYS_5eL610' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
          <div class='text-center m-4'>
            <p>Join the conversation on <a class='no-underline pointer' href='https://discord.gg/6Gc7jQW' target='_blank' rel='noreferrer'><img class='w4 v-mid' src={discord} alt='Discord' /></a></p>
          </div>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

export default Social;
