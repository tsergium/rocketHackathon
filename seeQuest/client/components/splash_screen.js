import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


class SplashScreen extends Component {
    redirectTo() {
        browserHistory.push('/start');
    }
    render() {
        width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        widthStyle = `min-width: ${width}`;
        return (
            <div>
                <a href="#" className="splashScreen" onClick={this.redirectTo.bind(this)}>&nbsp;</a>
            </div>
        );
    }
}

export default SplashScreen;