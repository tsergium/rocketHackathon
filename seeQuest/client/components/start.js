import React, {Component} from "react";
import CatList from "./cat_list";
import {browserHistory} from "react-router";
import Modal from './modal';

class Start extends Component {
    redirectTo() {
        browserHistory.push('/map');
    }
    render() {
        return(
            <div className="startScreen">
                {/*<CatList />*/}
                <a className="to-map-button" href="#" onClick={this.redirectTo.bind(this)}></a>
            </div>

        );
    }
}

export default Start;