import React, { Component } from 'react';
import Modal from './modal';

class CatList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCat: null
        };
    }

    selectCat(event) {
        this.setState({
            selectedCat: event.target.getAttribute('data-value')
        });
    }

    render() {
        return (
            <ul className="cat-list list-inline">
                <li>
                    <div className="cat-image" onClick={this.selectCat.bind(this)} data-value="white">Image</div>
                    <div className="cat-title">White</div>
                    <div className="cat-description">He loves history</div>
                </li>
                <li>
                    <div className="cat-image" onClick={this.selectCat.bind(this)} data-value="pint"></div>
                    <div className="cat-title">Pint</div>
                    <div className="cat-description">He loves beer</div>
                </li>
                <li>
                    <div className="cat-image" onClick={this.selectCat.bind(this)} data-value="chocolat"></div>
                    <div className="cat-title">Chocolat</div>
                    <div className="cat-description">He has a sweet tooth</div>
                </li>
                <li>
                    <div className="cat-image" onClick={this.selectCat.bind(this)} data-value="raphael"></div>
                    <div className="cat-title">Raphael</div>
                    <div className="cat-description">He is an art critique</div>
                </li>
                <li ref="gray">
                    <div className="cat-image" onClick={this.selectCat.bind(this)} data-value="gray"></div>
                    <div className="cat-title">Gray</div>
                    <div className="cat-description">He loves sightseeing</div>
                </li>
                <li>
                    <Modal name="Gray" description="lorem ipsum" duration="90m" color="" image="" />>
                </li>
            </ul>
        );
    }
}

export default CatList;
