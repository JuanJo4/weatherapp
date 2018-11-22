import React from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'
import Moment from 'react-moment'
import Wrapper from './styledComponents'

export default class WeatherDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      city: '',
      description: '',
      tempmin: '',
      tempmax: '',
      humidity: '',
      icon: '',
    }
  }

  componentDidMount() {
    const { updateCurrentSearch, location } = this.props
    const city = location.pathname.split('/')[2]
    const date = location.pathname.split('/')[3]
    const params = qs.parse(location.search)

    //  Update state to get current search
    updateCurrentSearch(city)

    this.setState(() => ({
      date,
      city,
      description: params.desc,
      tempmin: params.min,
      tempmax: params.max,
      humidity: params.hum,
      icon: params.icon,
    }))
  }

  render() {
    const {
      date, city, description, tempmin, tempmax, humidity, icon,
    } = this.state

    return (
      <Wrapper>
        <img src={`/public/images/weather-icons/${icon}.svg`} alt={description} title={description} />
        <h3>
          <Moment format="dddd, MMM Do">
            {date}
          </Moment>
        </h3>
        <h2>{city}</h2>
        <p>{description}</p>
        <p>{`min temp: ${(tempmin - 273.15).toFixed(2)} degrees`}</p>
        <p>{`max temp: ${(tempmax - 273.15).toFixed(2)} degrees`}</p>
        <p>{`humidity: ${humidity}`}</p>
      </Wrapper>
    )
  }
}

WeatherDetail.propTypes = {
  updateCurrentSearch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}
