import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeather = ({ time, icon, maxTemp, ...props }) => {
  return (
    <li>
      <div>{time}</div>
      <WeatherIcon icon={icon} />
      <div>{maxTemp}</div>
    </li>
  );
};

export default HourlyWeather;
