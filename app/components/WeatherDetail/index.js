import React from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'
import Moment from 'react-moment'
import { GridLoader } from 'react-spinners'
import { Wrapper, BackButton } from './styledComponents'

export default class WeatherDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
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
    // no es necesario que sea una funcion
    this.setState(() => ({
      loading: false,
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
    // mas de tres variables en el destructor deben ser una por linea
    const {
      loading,
      date,
      city,
      description,
      tempmin,
      tempmax,
      humidity,
      icon,
    } = this.state
    const { history } = this.props

    return (
      <Wrapper>
        <GridLoader
          className="spinner"
          sizeUnit="px"
          size={15}
          color="#82a5b4"
          loading={loading}
        />
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

        <BackButton onClick={history.goBack} type="button">Go Back</BackButton>
      </Wrapper>
    )
  }
}

WeatherDetail.propTypes = {
  updateCurrentSearch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
