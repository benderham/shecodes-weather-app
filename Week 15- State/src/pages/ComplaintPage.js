import React from 'react';
import TextLink from '../components/atoms/TextLink';
import WeatherPerson from '../components/molecules/WeatherPerson';
import ComplaintForm from '../components/organisms/ComplaintForm';
import PageTemplate from '../components/templates/PageTemplate';

const ComplaintPage = () => {
  return (
    <PageTemplate>
      <TextLink>I changed my mind!</TextLink>
      <WeatherPerson />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default ComplaintPage;
