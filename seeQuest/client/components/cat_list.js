import React, { Component } from 'react';

class CatList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <div className="cat-image"></div>
                    <div className="cat-title">White</div>
                    <div className="cat-description">He loves history</div>
                </li>
                <li>
                    <div className="cat-image"></div>
                    <div className="cat-title">Pint</div>
                    <div className="cat-description">He loves beer</div>
                </li>
                <li>
                    <div className="cat-image"></div>
                    <div className="cat-title">Chocolat</div>
                    <div className="cat-description">He has a sweet tooth</div>
                </li>
                <li>
                    <div className="cat-image"></div>
                    <div className="cat-title">Raphael</div>
                    <div className="cat-description">He is an art critique</div>
                </li>
                <li>
                    <div className="cat-image"></div>
                    <div className="cat-title">Gray</div>
                    <div className="cat-description">He loves sightseeing</div>
                </li>
            </ul>
        );
    }
}

export default CatList;
