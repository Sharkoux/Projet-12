import React from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './header'
import Dashboard from './dashboard'

// Global rules css (styled-component)
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 24px;
    font-family: 'roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  main {
    margin-left: 100px;
  }
`


/**
 * Uses the layout so that the header and the dashboard are present on all pages
 * @param { ReactDOM } children
 * @return { ReactDOM }
 */

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <main>
        {children}
        <Outlet />{' '}
      </main>
    </React.Fragment>
  )
}

export default Layout