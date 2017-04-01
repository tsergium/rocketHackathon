import React, { Component } from 'react';
import { Link } from 'react-router';
import CatList from './cat_list';

class Start extends Component {
    render() {
        return(
            <Link className="startScreen">
                <CatList />
            </Link>

        );
    }
}

export default Start;