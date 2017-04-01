import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from '../../../client/components/app';
import SplashScreen from '../../../client/components/splash_screen';
import Start from '../../../client/components/start';
import Test from '../../../client/components/test';
import Map from '../../../client/components/map';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SplashScreen} />
            <Route path="start" component={Start} />
            <Route path="test" component={Test} />
            <Route path="map" component={Map} />
        </Route>
    </Router>
);
