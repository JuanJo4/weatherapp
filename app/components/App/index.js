import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Container from './styledComponents'
import Header from '../Header'
import Home from '../Home'
import Forecast from '../Forecast'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

export default function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Header title="Weather App JG" />

        <Route exact path="/" render={() => <Home heroText="Enter a City and State" />} />
        <Route path="/forecast/" component={Forecast} />
      </Container>
    </Router>
  )
}
