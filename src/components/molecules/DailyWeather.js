import moment from 'moment';
import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';

const DailyWeatherItem = ({
  date,
  icon,
  list,
  maxTemp,
  minTemp,
  onDailyClick,
  showHourly,
  ...props
}) => {
  return (
    <div onClick={onDailyClick}>
      <h3>{moment(date).format('dddd')}</h3>
      <WeatherIcon icon={icon} />
      <div>{maxTemp}</div>
      <div>{minTemp}</div>
      {showHourly && <HourlyWeather list={list} />}
    </div>
  );
};

export default DailyWeatherItem;
