import React, { Component } from 'react';
import Modal from './modal';

class CatList extends Component {
    // let offset = 50;

    render() {
        return (
            <ul className="cat-list">
                <li>
                    <img className="cat-face" src="/catFace1.png" title="white" />
                    <div className="cat-title">White</div>
                    <div className="cat-description">He loves history</div>
                </li>
                <li>
                    <Modal
                        name="Pint"
                        description="He loves beer"
                        duration="50min"
                        color="#cecece"
                        image="/catFace2.png" />
                    <div className="cat-title">Pint</div>
                    <div className="cat-description">He loves beer</div>
                </li>
                <li>
                    <img className="cat-face" src="/catFace3.png" title="white" />
                    <div className="cat-title">Chocolat</div>
                    <div className="cat-description">He has a sweet tooth</div>
                </li>
                <li>
                    <img className="cat-face" src="/catFace4.png" title="white" />
                    <div className="cat-title">Raphael</div>
                    <div className="cat-description">He is an art critique</div>
                </li>
                <li>
                    <img className="cat-face" src="/catFace5.png" title="white" />
                    <div className="cat-title">Gray</div>
                    <div className="cat-description">He loves sightseeing</div>
                </li>
            </ul>
        );
    }
}

export default CatList;
