/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Navigation from './navigation';
import Footer from './footer';
import SubFooter from './subFooter';
import '../assets/stylesheets/layout.scss';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/stylesheets/theme';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let { title } = data.site.siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <Navigation siteTitle={title}/>
      <main>{children}</main>
      <Footer/>
      <SubFooter title={title}/>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
