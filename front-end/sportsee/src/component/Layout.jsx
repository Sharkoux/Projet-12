import React from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState } from 'react'
import Header from './header'
import Dashboard from './dashboard'


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
    margin-left: 120px;
  }
`

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