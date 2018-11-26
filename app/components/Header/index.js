import React from 'react'
import PropTypes from 'prop-types'
import LocationForm from '../LocationForm'
import HeaderWrapper from './styledComponents'

export default function Header(props) {
  const { title, currentSearch, updateCurrentSearch } = props

  return (
    <HeaderWrapper>
      <a href="/">
        <h1>{title}</h1>
      </a>
      <LocationForm formStyle="lineal" currentSearch={currentSearch} updateCurrentSearch={updateCurrentSearch} placeholder="St. George, Utah" />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  currentSearch: PropTypes.string.isRequired,
  updateCurrentSearch: PropTypes.func.isRequired,
}
