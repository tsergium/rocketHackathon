import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <Route path="lists/:id" component={ListPageContainer}/>
            <Route path="signin" component={AuthPageSignIn}/>
            <Route path="join" component={AuthPageJoin}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Router>
);