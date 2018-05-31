import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
  </main>
);

export default App;
