import React from 'react';
import { WeatherContext } from '../../containers/AppContainer';
import CurrentWeather from '../molecules/CurrentWeather';

const PageTemplate = ({ ...props }) => {
  return (
    <div>
      <WeatherContext.Consumer>
        {({ city, temperature, changeCity }) => {
          console.log(temperature);
          return (
            <CurrentWeather
              city={city}
              temperature={temperature}
              onTextLinkClick={changeCity}
            />
          );
        }}
      </WeatherContext.Consumer>
      {props.children}
    </div>
  );
};

export default PageTemplate;
