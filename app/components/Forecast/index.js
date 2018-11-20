import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'

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

    if (itemday.format('HH') >= 12) {
      res[mainIndex].date = item.dt_txt
      res[mainIndex].icon = item.weather[0].icon
      res[mainIndex].description = item.weather[0].description
    }
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
    const { location } = this.props
    const city = location.pathname.split('/')[2]
    const apiKey = '52ebf7e7ac1cc952fdeb6fd0e93a7a57'
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&cnt=40`

    axios.get(url)
      .then((response) => {
        console.log('R', response)
        this.setState(() => ({
          forecast: formatingForecast(response.data.list),
        }))
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  render() {
    const { forecast } = this.state

    return (
      <React.Fragment>
        <h2>City Title</h2>
        <div className="forecast-wrapper">
          {forecast.map(d => (
            <div className="day" key={d.date}>
              <img src={`/public/images/weather-icons/${d.icon}.svg`} alt={d.description} />

              <div className="hours">
                {d.dayforecast.map(dd => (
                  <div key={dd.date}>
                    <img src={`/public/images/weather-icons/${dd.icon}.svg`} alt={dd.description} />
                    <p>
                      <Moment format="hh:mm A">
                        {dd.date}
                      </Moment>
                    </p>
                  </div>
                ))}
              </div>
              <h3>
                <Moment format="dddd, MMM Do">
                  {d.date}
                </Moment>
              </h3>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

Forecast.propTypes = {
  location: PropTypes.object.isRequired,
}
