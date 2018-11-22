import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'
import {
  Wrapper, ForecastWrapper, Day, Hours,
} from './styledComponents'

function formatingForecast(data) {
  const res = []

  let mainIndex = -1
  let day = ''

  data.map((item) => {
    const itemday = moment(item.dt_txt)

    if (day !== itemday.format('YYYYMMDD')) {
      res.push({
        date: '',
        icon: '',
        description: '',
        dayforecast: [],
      })
      mainIndex += 1
      day = itemday.format('YYYYMMDD')
    }

    res[mainIndex].dayforecast.push({
      date: item.dt_txt,
      icon: item.weather[0].icon,
      description: item.weather[0].description,
    })

    if (res[mainIndex].date === '' && itemday.format('HH') >= 12) {
      res[mainIndex].date = item.dt_txt
      res[mainIndex].icon = item.weather[0].icon
      res[mainIndex].description = item.weather[0].description
      res[mainIndex].tempmin = item.main.temp_min
      res[mainIndex].tempmax = item.main.temp_max
      res[mainIndex].humidity = item.main.humidity
    }

    return item
  })

  return res
}

export default class Forecast extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      forecast: [],
    }
  }

  componentDidMount() {
    // Get forecast from openweather api
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/'
    const { updateCurrentSearch, location } = this.props
    const city = location.pathname.split('/')[2]
    const apiKey = '52ebf7e7ac1cc952fdeb6fd0e93a7a57'
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&cnt=40`
    //  Update state to get current search
    updateCurrentSearch(city)

    axios.get(url)
      .then((response) => {
        this.setState(() => ({
          title: city,
          forecast: formatingForecast(response.data.list),
        }))
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  render() {
    const { title, forecast } = this.state

    return (
      <Wrapper>
        <h2>{title}</h2>
        <ForecastWrapper>
          {forecast.slice(0, 5).map((d) => {
            const params = `desc=${d.description}&hum=${d.humidity}&max=${d.tempmax}&min=${d.tempmin}&icon=${d.icon}`

            return (
              <Day key={d.date}>
                <a href={`/detail/${title}/${d.date}?${params}`}>
                  <img src={`/public/images/weather-icons/${d.icon}.svg`} alt={d.description} title={d.description} />
                  <h3>
                    <Moment format="dddd, MMM Do">
                      {d.date}
                    </Moment>
                  </h3>
                </a>
                <Hours>
                  {d.dayforecast.map(dd => (
                    <div key={dd.date}>
                      <p>
                        <Moment format="hh:mm A">
                          {dd.date}
                        </Moment>
                      </p>
                      -
                      <img src={`/public/images/weather-icons/${dd.icon}.svg`} alt={dd.description} title={dd.description} />
                    </div>
                  ))}
                </Hours>
              </Day>
            )
          })}
        </ForecastWrapper>
      </Wrapper>
    )
  }
}

Forecast.propTypes = {
  updateCurrentSearch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}
