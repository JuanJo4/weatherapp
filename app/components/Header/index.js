import React from 'react'
import PropTypes from 'prop-types'
import LocationForm from '../LocationForm'

export default function Header(props) {
  const { title } = props

  return (
    <header>
      <h1>{title}</h1>
      <LocationForm formStyle="lineal" />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
