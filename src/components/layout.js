import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built by Felix Nagel
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// Global Styles
export const GlobalStyle = createGlobalStyle`

  :root {
    --color-base: #fefefe;
    --color-secondary: #414042;
    --color-accent: #209573;

    --font-primary: "Red Hat Text", sans-serif;
    --font-display: "Red Hat Display", sans-serif;

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
    color: var(--color-secondary);
    font-weight: 400;
    line-height: 1.6;
    overflow-y: scroll;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    line-height: 1.3;
    font-weight: 400;
    color: var(--color-secondary);
  }

  a {
    &, &:focus, &:hover, &:active, &:visited {
    text-decoration: none;
    color: var(--color-secondary);
    }
  }

`
