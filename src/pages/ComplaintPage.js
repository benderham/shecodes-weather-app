import React from 'react';
import BackLink from '../atoms/BackLink';
import WeatherPerson from '../molecules/WeatherPerson';
import ComplaintForm from '../organisms/ComplaintForm';
import PageTemplate from '../templates/PageTemplate';

const WeatherPage = () => {
  return (
    <PageTemplate>
      <BackLink />
      <WeatherPerson />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default WeatherPage;
