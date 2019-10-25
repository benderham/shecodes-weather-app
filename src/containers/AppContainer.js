import React, { Component } from 'react';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';
import ComplaintPage from '../pages/ComplaintPage';
import WeatherPage from '../pages/WeatherPage';

const CITIES = ['London', 'Paris', 'Perth', 'Tokyo', 'Sydney'];

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: CITIES[0],
      temperature: CURRENT_WEATHER.main.temp,
      forecast: HOURLY_FORECAST.list
    };

    this.changeCity = this.changeCity.bind(this);
  }

  getRandomCity(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  changeCity() {
    this.setState({ city: this.getRandomCity(CITIES) });
  }

  render() {
    return (
      <>
        <WeatherPage
          city={this.state.city}
          temperature={this.state.temperature}
          forecast={this.state.forecast}
          changeCity={this.changeCity}
        />
        <ComplaintPage
          city={this.state.city}
          temperature={this.state.temperature}
          changeCity={this.changeCity}
        />
      </>
    );
  }
}

export default AppContainer;
