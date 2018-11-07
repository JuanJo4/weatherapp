import React from 'react'
import PropTypes from 'prop-types'
import LocationForm from '../LocationForm'
import HeaderWrapper from './styledComponents'

export default function Header(props) {
  const { title } = props

  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <LocationForm formStyle="lineal" placeholder="St. George, Utah" />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
