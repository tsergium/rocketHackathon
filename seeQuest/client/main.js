import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Categories } from '../imports/collections/categories';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';

// Create and import basic version of Login
// Create the route for "/" and render Login

// const routes = (
//     <Router path="/" history={browserHistory}>
//         <Route path="/signup" component={Signup}/>
//         <Route path="/links" component={Link}/>
//     </Router>
// );

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
    // ReactDOM.render(routes, document.getElementById('main-menu'));
});