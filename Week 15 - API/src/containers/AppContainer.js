import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ComplaintPage from '../pages/ComplaintPage';
import WeatherPage from '../pages/WeatherPage';

const CITIES = ['London', 'Perth', 'Tokyo', 'Rome', 'Singapore', 'Sydney'];

// WARNING: Do not store any secrets (such as private API keys) in your React app!
// https://create-react-app.dev/docs/adding-custom-environment-variables/
const API_URL = 'https://api.openweathermap.org/data/2.5';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: CITIES[0],
      temperature: '',
      forecast: []
    };

    this.handleCityChange = this.handleCityChange.bind(this);
  }

  fetchApiData() {
    fetch(
      `${API_URL}/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    ) // Call the fetch function passing the url of the API as a parameter
      .then(response => {
        console.log(response);
        return response.json();
        // Your code for handling the data you get from the API
      })
      .then(data => {
        console.log(data);
        this.setState({ temperature: data.main.temp });
      })
      .catch(function(err) {
        console.error(err);
        // This is where you run code if the server returns any errors
      });
  }

  fetchForecast() {
    fetch(
      `${API_URL}/forecast?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
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

  handleCityChange() {
    this.setState({ city: this.getRandomCity(CITIES) }, () => {
      this.fetchApiData();
      this.fetchForecast();
    });
  }

  componentDidMount() {
    this.fetchApiData();
    this.fetchForecast();
  }

  render() {
    return (
      <>
        <Route
          path="/"
          component={() => {
            return (
              <WeatherPage
                city={this.state.city}
                temperature={this.state.temperature}
                forecast={this.state.forecast}
                changeCity={this.handleCityChange}
              />
            );
          }}
          exact
        />

        <Route
          path="/complain"
          component={() => {
            return (
              <ComplaintPage
                city={this.state.city}
                temperature={this.state.temperature}
                changeCity={this.handleCityChange}
              />
            );
          }}
        />
      </>
    );
  }
}

export default AppContainer;
