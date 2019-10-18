import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentCityButton from '../atoms/CurrentCityButton';
import CurrentTemperature from '../atoms/CurrentTemperature';

const CurrentWeather = () => {
  return (
    <div>
      <CurrentCity />
      <CurrentCityButton />
      <CurrentTemperature />
    </div>
  );
};

export default CurrentWeather;
