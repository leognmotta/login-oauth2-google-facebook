import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils/customRoutesComponents';

import Home from './pages/Home';
import MyApp from './pages/MyApp';
import Private from './pages/Private';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/my-app" component={MyApp} />
      <PrivateRoute exact path="/private" component={Private} />
    </Switch>
  </BrowserRouter>
);

export default Routes;