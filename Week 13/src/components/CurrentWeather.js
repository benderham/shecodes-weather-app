import React from 'react';

const CurrentWeather = ({ city, temperature, ...props }) => {
  return (
    <div>
      <div>{city}</div>
      <div>{temperature}</div>
    </div>
  );
};

export default CurrentWeather;
