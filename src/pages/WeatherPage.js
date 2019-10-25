import React from 'react';
import { Link } from 'react-router-dom';
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
      <TextLink>
        <Link to="/complain">Complain about the weather!</Link>
      </TextLink>
    </PageTemplate>
  );
};

export default WeatherPage;
