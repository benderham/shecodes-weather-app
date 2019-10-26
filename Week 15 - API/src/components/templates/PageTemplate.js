import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';

const PageTemplate = ({ city, temperature, changeCity, ...props }) => {
  return (
    <div>
      <CurrentWeather
        city={city}
        temperature={temperature}
        onTextLinkClick={changeCity}
      />
      {props.children}
    </div>
  );
};

export default PageTemplate;
