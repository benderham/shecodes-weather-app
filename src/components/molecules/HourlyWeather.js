// Moment.js is a JS library that makes formatting dates in JS super easy!
import moment from 'moment';
import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';

const HourlyWeather = ({ list, ...props }) => {
  return (
    <ul>
      {list.map(item => (
        <HourlyWeatherItem
          key={item.dt}
          time={moment(item.dt).format()}
          icon={item.weather[0].icon}
          maxTemp={item.main.temp_max}
        />
      ))}
    </ul>
  );
};

export default HourlyWeather;
