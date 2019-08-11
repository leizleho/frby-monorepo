import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { RegisterConnector } from '../modules/register/RegisterConnector';
import { LoginConnector } from '../modules/login/LoginConnector';
import { Logout } from '../modules/logout';
import SearchOffersConnector from '../modules/offer/search';
import { CreateOfferConnector } from '../modules/offer/create/CreateOfferConnector';
import { ViewOfferConnector } from '../modules/offer/view/ViewOfferConnector';
import { MessageConnector } from '../modules/offer/messages/MessageConnector';
export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={SearchOffersConnector} />
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
      <Route path="/offer/:offerId" component={ViewOfferConnector} />
      <Route path="/logout" component={Logout} />
      <Route
        exact={true}
        path="/offers/search"
        component={SearchOffersConnector}
      />
      <Route
        exact={true}
        path="/offers/create-offer"
        component={CreateOfferConnector}
      />
      <Route path="/offer/:offerId/chat" component={MessageConnector} />
    </Switch>
  </BrowserRouter>
);
