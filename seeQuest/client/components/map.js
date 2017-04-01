import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import MyMap from './map/mapcontainer';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = { userId: Meteor.userId() };
    }

    componentDidMount() {
        this.setState({
            userId: Meteor.userId()
        });
    }

    render() {
        if (Meteor.userId()) {
            return (
                <MyMap/>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Map;