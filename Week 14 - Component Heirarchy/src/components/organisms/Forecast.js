import React from 'react';
import DailyWeather from '../molecules/DailyWeather';

const Forecast = props => {
  return (
    <div>
      <h2>Today:</h2>
      <DailyWeather />
      <h2>Upcoming:</h2>
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
    </div>
  );
};

export default Forecast;
