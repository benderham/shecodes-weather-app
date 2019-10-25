import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ComplaintPage from '../pages/ComplaintPage';
import WeatherPage from '../pages/WeatherPage';

export const WeatherContext = React.createContext(); // Create a context for the Weather.

const CITIES = ['London', 'Paris', 'Perth', 'Tokyo', 'Sydney'];
const API_URL = 'http://localhost:8080/api.openweathermap.org/data/2.5';
const API_KEY = 'b886e076b4f1f6d27054a9c453121849';
class AppContainer extends Component {
  // note: drilling "Forecast" down to the Forecast component will be a pain, we want to provide it to the whole app using context.
  constructor(props) {
    super(props);

    this.state = {
      city: CITIES[0],
      temperature: '',
      forecast: []
    };

    this.changeCity = this.changeCity.bind(this);
  }

  fetchCurrentWeather() {
    fetch(`${API_URL}/weather?q=${this.state.city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ temperature: data.main.temp });
      })
      .catch(err => {
        console.error(err);
      });
  }

  fetchForecast() {
    fetch(`${API_URL}/forecast?q=${this.state.city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ forecast: data.list });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getRandomCity(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  changeCity() {
    this.setState({ city: this.getRandomCity(CITIES) }, async () => {
      await this.fetchCurrentWeather();
      this.fetchForecast();
    });
  }

  async componentDidMount() {
    await this.fetchCurrentWeather();
    this.fetchForecast();
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
