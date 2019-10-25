import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';
import ComplaintPage from '../pages/ComplaintPage';
import WeatherPage from '../pages/WeatherPage';

export const WeatherContext = React.createContext(); // Create a context for the Weather.

const CITIES = ['London', 'Paris', 'Perth', 'Tokyo', 'Sydney'];

class AppContainer extends Component {
  // note: drilling "Forecast" down to the Forecast component will be a pain, we want to provide it to the whole app using context.
  constructor(props) {
    super(props);

    this.state = {
      city: CITIES[0],
      temperature: CURRENT_WEATHER.main.temp,
      forecast: HOURLY_FORECAST.list
    };

    this.changeCity = this.changeCity.bind(this);
  }

  changeCity() {
    this.setState({ city: this.getRandomCity(CITIES) });
  }

  getRandomCity(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  render() {
    return (
      <WeatherContext.Provider // Populate context with our state object!
        value={{ ...this.state, changeCity: this.changeCity }}
      >
        <Route path="/" exact component={WeatherPage} />
        <Route path="/complain" component={ComplaintPage} />
      </WeatherContext.Provider>
    );
  }
}

export default AppContainer;
