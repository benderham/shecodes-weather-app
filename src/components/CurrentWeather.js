import React from 'react';

// deconstructing the props for readability
const CurrentWeather = ({ city, temperature, ...props }) => {
  return (
    <div>
      <div>{city}</div>
      <div>{temperature}</div>
    </div>
  );
};

export default CurrentWeather;
