import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


class SplashScreen extends Component {
    redirectTo() {
        browserHistory.push('/start');
    }
    render() {
        return (
            <div>
                <a href="#" className="splashScreen" onClick={this.redirectTo.bind(this)}></a>
            </div>
        );
    }
}

export default SplashScreen;