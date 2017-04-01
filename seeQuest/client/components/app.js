import React, { Component } from 'react';
import Header from './header';
import Map from './map';
import { Meteor } from 'meteor/meteor';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { userId: null };
    }

    componentWillMount() {
        if (Meteor.userId()) {
            this.setState({
                userId: Meteor.userId()
            });
        } else {
            this.setState({
                userId: null
            });
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <Map userId={Meteor.userId()} />
            </div>
        );
    }
}

export default App;
