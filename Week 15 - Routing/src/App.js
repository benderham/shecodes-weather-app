import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

export default App;
