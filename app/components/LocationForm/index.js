import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { Form, Input, SubmitButton } from './styledComponents'

export default class LocationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toForecast: false,
    }
  }

  handleChange = (event) => {
    const { updateCurrentSearch } = this.props
    const { value } = event.target

    updateCurrentSearch(value)
  }

  handleSubmit = (event) => {
    this.setState(() => ({
      toForecast: true,
    }))
    event.preventDefault()
  }

  render() {
    const { toForecast } = this.state
    const { formStyle, currentSearch, placeholder } = this.props

    return (
      (toForecast && <Redirect to={`/forecast/${currentSearch}`} />)
      || (
        <Form className={formStyle} action={`/forecast/${currentSearch}`} onSubmit={this.handleSubmit}>
          <Input type="text" placeholder={placeholder} value={currentSearch} onChange={this.handleChange} />
          <SubmitButton type="submit" value="Get Weather" />
        </Form>
      )
    )
  }
}

LocationForm.propTypes = {
  formStyle: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  currentSearch: PropTypes.string,
  updateCurrentSearch: PropTypes.func.isRequired,
}

LocationForm.defaultProps = {
  placeholder: '',
  currentSearch: '',
}
