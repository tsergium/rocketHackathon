import React, { Component } from 'react';
import { Link } from 'react-router';
import CatList from './start/cat_list';

class Start extends Component {
    render() {
        return(
            <div>
                <Link className="startScreen">
                </Link>
                <CatList />
            </div>
        );
    }
}

export default Start;