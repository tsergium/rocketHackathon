import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


class Test extends Component {
    redirectToMap() {
        browserHistory.push('/map');
    }
    render() {
        return (
            <div>
                <a href="#" onClick={this.redirectToMap.bind(this)}>Go to map</a>
                <p>Test</p>
            </div>
        );
    }
}

export default Test;