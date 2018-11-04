import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import RoutePropagator from '@shopify/react-shopify-app-route-propagator';

import OrdersTotalPage from './OrderTotalsPage';
import MealsPage from './MealsPage';
import ApiConsole from './ApiConsole';

const Propagator = withRouter(RoutePropagator);

const Router = () => (
  <React.Fragment>
    <Propagator />
    <Switch>
      <Route exact path="/" component={OrdersTotalPage} />
      <Route exact path="/meals" component={MealsPage} />
      <Route exact path="/apiconsole" component={ApiConsole} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </React.Fragment>
);

export default Router;
