import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Home from './components/Home'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Home
      title=" Weather App JG"
      subtitle="Enter a City and State"
    />
  </React.Fragment>,
  document.getElementById('app'),
)
