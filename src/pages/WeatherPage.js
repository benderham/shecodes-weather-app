import React from 'react';
import TextLink from '../components/atoms/TextLink';
import Forecast from '../components/organisms/Forecast';
import PageTemplate from '../components/templates/PageTemplate';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';

const WeatherPage = () => {
  return (
    <PageTemplate
      city={CURRENT_WEATHER.name}
      temperature={CURRENT_WEATHER.main.temp}
    >
      <Forecast forecast={HOURLY_FORECAST} />
      <TextLink>Complain about the weather!</TextLink>
    </PageTemplate>
  );
};

export default WeatherPage;
