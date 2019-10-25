import React from 'react';
import TextLink from '../components/atoms/TextLink';
import Forecast from '../components/organisms/Forecast';
import PageTemplate from '../components/templates/PageTemplate';
import { WeatherContext } from '../containers/AppContainer';

const WeatherPage = () => {
  return (
    <PageTemplate>
      <WeatherContext.Consumer>
        {({ forecast }) => {
          return <Forecast forecast={forecast} />;
        }}
      </WeatherContext.Consumer>
      <TextLink>Complain about the weather!</TextLink>
    </PageTemplate>
  );
};

export default WeatherPage;
