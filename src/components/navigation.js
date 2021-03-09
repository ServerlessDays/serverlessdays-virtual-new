import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Link from './link'
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';

let StyledNavbar = styled(props => <Navbar {...props}/>)`
  position: sticky;
  top: 0;
  z-index: 10;
  a.nav-link {
    color: white;
    text-decoration: none;
  }
  a.nav-link:hover {
    opacity: 100%;
  }
  a.nav-link.active {
    opacity: 100%;
  }
`

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar color='dark' dark expand='md'>
      <Link to='/' className='navbar-brand'>
        <img src={logo} alt='Serverlessdays logo' height='40px'/>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' right navbar>
          <NavItem>
            <AnchorLink className='nav-link' to='#about' title='About' />
          </NavItem>
          <NavItem>
            <AnchorLink className='nav-link' to='#speakers' title='Speakers' />
          </NavItem>
          <NavItem>
            <AnchorLink className='nav-link' to='#schedule' title='Schedule' />
          </NavItem>
          <NavItem>
            <AnchorLink className='nav-link' to='#sponsors' title='Sponsors' />
          </NavItem>
        </Nav>
      </Collapse>
    </StyledNavbar>
  );
}

export default Navigation;
