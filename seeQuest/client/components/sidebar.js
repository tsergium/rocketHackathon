import React,  { Component } from 'react';
import QuestPoints from './questPoints';

class SideBar extends Component {
    render() {
        return (
            <div className="questSideBar">
                <div className="headerSidebar"></div>
                <p className="headerSidebarText"><b>Pint</b>'s footprints</p>
                <QuestPoints/>
            </div>
        );
    }
}

export default SideBar;