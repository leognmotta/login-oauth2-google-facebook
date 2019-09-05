import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MyApp from './pages/MyApp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/my-app" component={MyApp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;