import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Map from './components/map';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="test" component={Map} />
        </Route>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});