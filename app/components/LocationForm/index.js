import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, SubmitButton } from './styledComponents'

export default class LocationForm extends React.Component {
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
    const { formStyle, placeholder } = this.props

    return (
      <Form className={formStyle} action={path}>
        <Input type="text" placeholder={placeholder} onChange={this.handleChange} />
        <SubmitButton type="submit" value="Get Weather" />
      </Form>
    )
  }
}

LocationForm.propTypes = {
  formStyle: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

LocationForm.defaultProps = {
  placeholder: '',
}
