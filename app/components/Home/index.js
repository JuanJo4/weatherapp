import React from 'react'
import PropTypes from 'prop-types'
import LocationForm from '../LocationForm'
import { Container, Box } from './styledComponents'
import Header from '../Header'

export default function Home(props) {
  const { title, subtitle } = props

  return (
    <Container>
      <Header title={title} />
      <Box>
        <h2>{subtitle}</h2>
        <LocationForm formStyle="stacked" placeholder="St. George, Utah" />
      </Box>
    </Container>
  )
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
