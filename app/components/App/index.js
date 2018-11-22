import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Container from './styledComponents'
import Header from '../Header'
import Home from '../Home'
import Forecast from '../Forecast'
import WeatherDetail from '../WeatherDetail'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSearch: '',
    }
  }

  updateCurrentSearch = (q) => {
    this.setState(() => ({
      currentSearch: q,
    }))
  }

  render() {
    const { currentSearch } = this.state
    return (
      <Router>
        <Container>
          <GlobalStyle />
          <Header title="Weather App JG" currentSearch={currentSearch} />
          <Route exact path="/" render={() => <Home heroText="Enter a City and State" />} />
          <Route path="/forecast/" render={props => <Forecast updateCurrentSearch={this.updateCurrentSearch} {...props} />} />
          <Route path="/detail/" render={props => <WeatherDetail updateCurrentSearch={this.updateCurrentSearch} {...props} />} />
        </Container>
      </Router>
    )
  }
}
