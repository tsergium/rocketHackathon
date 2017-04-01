import React,  { Component } from 'react';
import QuestPoints from './questPoints';

class SideBar extends Component {
    render() {
        return (
            <div className="questSideBar">
                <div className="headerSidebar"></div>
                    <QuestPoints/>
            </div>
        );
    }
}

export default SideBar;