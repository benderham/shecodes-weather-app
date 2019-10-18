import React from 'react';
import ComplaintLink from '../atoms/ComplaintLink';
import Forecast from '../organisms/Forecast';
import PageTemplate from '../templates/PageTemplate';

const WeatherPage = () => {
  return (
    <PageTemplate>
      <Forecast />
      <ComplaintLink />
    </PageTemplate>
  );
};

export default WeatherPage;
