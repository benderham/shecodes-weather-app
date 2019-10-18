import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';

const DailyWeatherItem = () => {
  return (
    <div>
      <h3>Wednesday</h3>
      <WeatherIcon />
      <div>22</div>
      <div>10</div>
      <HourlyWeather />
    </div>
  );
};

export default DailyWeatherItem;
