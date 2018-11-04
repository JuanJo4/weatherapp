import React from 'react'
import PropTypes from 'prop-types'

class LocationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: '/forecast/',
    }
  }

  handleChange = (event) => {
    const { value } = event.target

    this.setState(() => ({
      path: `/forecast/${value}`,
    }))
  }

  render() {
    const { path } = this.state
    const { formStyle } = this.props

    return (
      <form className={formStyle} action={path}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Get Weather" />
      </form>
    )
  }
}

LocationForm.propTypes = {
  formStyle: PropTypes.string.isRequired,
}

export default LocationForm
