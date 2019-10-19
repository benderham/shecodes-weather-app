import React from 'react';
import ComplaintLink from '../components/atoms/ComplaintLink';
import Forecast from '../components/organisms/Forecast';
import PageTemplate from '../components/templates/PageTemplate';

const WeatherPage = () => {
  return (
    <PageTemplate>
      <Forecast />
      <ComplaintLink />
    </PageTemplate>
  );
};

export default WeatherPage;
