export const CURRENT_WEATHER = {
  weather: [
    {
      icon: '01d',
      main: 'Clear'
    }
  ],
  main: {
    temp: 22.5
  },
  name: 'London' // Data is requested by location.
};
// full mock https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

export const FORECAST_WEATHER = {
  city: { name: 'London' },
  list: [
    {
      dt: 1406106000, // unix timestamp of forecasted weather.
      main: {
        temp: 298.77
      },
      weather: [{ icon: '04d', main: 'Clouds' }]
    }
  ] // Response will be 40 list items, 5 day forecast, 3 hourly.
};
// full mock: https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22
// weather icon codes: https://openweathermap.org/weather-conditions
