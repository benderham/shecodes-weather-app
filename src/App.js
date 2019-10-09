import React from 'react';
import CurrentWeather from './components/CurrentWeather';

/**
 * App is our main container component. It's like our global container.
 * 1. Delete everything in src except for App.js, index.js and serviceWorker.js
 * 2. Clear everything in the App.js so that we just have a div rendering 'SheCodes Weather App'.
 * 3. Remove references to deleted files.
 *
 * 4. create component folder.
 * 5. create a file called CurrentWeather.js
 * 6. write a react arrow function component, that just says "The current weather is!"
 * 7. import CurrentWeather in App.js and place it in your App.
 *    -- demonstrate live reloading.
 * 8. determine what the CurrentWeather component needs to display: Current City and Current Temperature.
 * 9. it would make sense to pass in the current city and temperature as props... the first step to making this component dynamic.
 * 10. We also need to add the background image, but we'll handle that when we get to styling up the app.
 *
 * 11. Let's identify all of our other components.
 * - CurrentWeather (Molecule)
 * - ForecastList (Organism)
 * - ForecastDay (Molecule) - ForecastIcon (Atom) - ForecastTemp (Atom)
 * - ForecastHourly (Molecule) - HourlyListItem (Molecule) -- ForecastIcon (Atom)
 * - ComplaintLink (Atom)
 * - Form
 * - WeatherPerson
 *
 * 12. Work out where our state will live, containers.
 */

function App() {
  return (
    <div className="App">
      <CurrentWeather city="London" temperature="13" />
    </div>
  );
}

export default App;
