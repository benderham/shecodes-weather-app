import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';

const PageTemplate = props => {
  return (
    <div>
      <CurrentWeather />
      {props.children}
    </div>
  );
};

export default PageTemplate;
