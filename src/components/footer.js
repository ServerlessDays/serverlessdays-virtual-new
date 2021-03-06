import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaEnvelope, FaTwitter } from 'react-icons/fa';
import Link from './link';
import styled from 'styled-components'
import footerItems from '../data/footer.json'

const FooterStyling = styled.footer`
  padding: 3rem 0;
  background: ${props => props.theme.gray};
  a, a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a, a:hover {
        color: inherit;
      }
    }
  }
  .iconLink {
    color: ${props => props.theme.dark}
  }
`

let SocialLink = ({ Icon, href }) => (
  <Link href={href} className='mr-2 iconLink' target='_blank'>
    <Icon size={30}/>
  </Link>
)

let FooterLink = ({to, children}) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

let Footer = () => (
  <FooterStyling>
    <Container>
      <Row>
        {footerItems.map(item => (
          <Col xs={12} md={3}>
            <h5>{item.name}</h5>
            <ul>
              {item.dropdownItems.map(dropdownItem => (
                <FooterLink to={dropdownItem.url}>{dropdownItem.name}</FooterLink>
              ))}
            </ul>
          </Col>
        ))}
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={3}>
          <h5>Contact Us</h5>
          <SocialLink Icon={FaTwitter} href='https://twitter.com/ServerlessdaysV' />
          <SocialLink Icon={FaEnvelope} href='mailto:hello@serverlessdays.io' />
        </Col>
      </Row>
    </Container>
  </FooterStyling>
)

export default Footer
