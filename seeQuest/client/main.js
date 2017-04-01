import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Categories } from '../imports/collections/categories';

import App from './components/app';

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});