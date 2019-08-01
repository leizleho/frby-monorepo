import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { RegisterConnector } from '../modules/register/RegisterConnector';
import { LoginConnector } from '../modules/login/LoginConnector';
import SearchOffersConnector from '../modules/offer/search';
import { CreateOfferConnector } from '../modules/offer/create/CreateOfferConnector';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
      <Route exact={true} path="/search" component={SearchOffersConnector} />
      <Route
        exact={true}
        path="/create-offer"
        component={CreateOfferConnector}
      />
    </Switch>
  </BrowserRouter>
);
