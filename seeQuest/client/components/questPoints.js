import React,  { Component } from 'react';

class QuestPoints extends Component {
    render() {
        return (
            <ul className="questPoints">
                <li className="active"><p className="text">60min ago</p></li>
                <li><p className="text">45min ago</p></li>
                <li><p className="text">30min ago</p></li>
                <li><p className="text">20min ago</p></li>
                <li><p className="text">10min ago</p></li>
                <li><p className="text">5min ago</p></li>
                <li><p className="text">1min ago</p></li>
            </ul>

        );
    }
}

export default QuestPoints;