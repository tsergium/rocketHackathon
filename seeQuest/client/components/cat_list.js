import React, { Component } from 'react';
import Modal from './modal';

class CatList extends Component {
    // let offset = 50;

    render() {
        return (
            <ul className="cat-list">
                <li>
                    <Modal
                        name="White"
                        description="He loves history"
                        duration="40min"
                        color="#cecece"
                        image="http://localhost:3000/catFace1.png" />
                    <div className="cat-title">White</div>
                    <div className="cat-description">He loves history</div>
                </li>
                <li>
                    <Modal
                        name="Pint"
                        description="He loves beer"
                        duration="50min"
                        color="#cecece"
                        image="http://localhost:3000/catFace2.png" />
                    <div className="cat-title">Pint</div>
                    <div className="cat-description">He loves beer</div>
                </li>
                <li>
                    <Modal
                        name="Chocolat"
                        description="He has a sweet tooth"
                        duration="60min"
                        color="#cecece"
                        image="http://localhost:3000/catFace3.png" />
                    <div className="cat-title">Chocolat</div>
                    <div className="cat-description">He has a sweet tooth</div>
                </li>
                <li>
                    <Modal
                        name="Raphael"
                        description="He is an art critique"
                        duration="70min"
                        color="#cecece"
                        image="http://localhost:3000/catFace4.png" />
                    <div className="cat-title">Raphael</div>
                    <div className="cat-description">He is an art critique</div>
                </li>
                <li>
                    <Modal
                        name="Gray"
                        description="He loves sightseeing"
                        duration="70min"
                        color="#cecece"
                        image="http://localhost:3000/catFace5.png" />
                    <div className="cat-title">Gray</div>
                    <div className="cat-description">He loves sightseeing</div>
                </li>
            </ul>
        );
    }
}

export default CatList;
