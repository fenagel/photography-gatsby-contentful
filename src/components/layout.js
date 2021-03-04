/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components';


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

  return (
    <>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built by F.Nagel
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// Global Styles
const GlobalStyle = createGlobalStyle`

  :root {
    --color-base: #100B00;
    --color-secondary: #F5F5F5 ;
    --color-tertiary: #c1c1c1 ;
    --color-highlight: #C0392B ;
    --color-accent: #444444 ;

    --font-primary: "Nunito", sans-serif;
    --font-display: "Josefin Sans", sans-serif;

    --bp-largest: 75em;
    --bp-large: 62.5em;
    --bp-medium: 50em;
    --bp-small: 37.5em;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media only screen and (max-width: var(--bp-largest)) {
      font-size: 50%;
    }
  }

  body {
    font-family: var(--font-primary);
    color: var(--color-base);
    font-weight: 300;
    line-height: 1.6;
    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--color-base) var(--color-base);
  }
  body::-webkit-scrollbar-track {
    background: var(--color-base);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--color-base) ;
    border-radius: 6px;
    border: 3px solid var(--color-base);
  }

`