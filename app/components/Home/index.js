import React from 'react'
import PropTypes from 'prop-types'
import LocationForm from '../LocationForm'
import Box from './styledComponents'

export default function Home(props) {
  const { heroText } = props

  return (
    <Box>
      <h2>{heroText}</h2>
      <LocationForm formStyle="stacked" placeholder="St. George, Utah" />
    </Box>
  )
}

Home.propTypes = {
  heroText: PropTypes.string.isRequired,
}
