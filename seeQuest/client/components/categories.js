import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Categories } from '../../imports/collections/categories';


class CategoryList extends Component {
    renderRows() {
        return this.props.categories.map(category => {
            const { token, name } = category;
            const shortLink = `http://localhost:3000/${token}`;

            return (
                <li key={token}>
                    <a target="_blank" href="#">{name}</a>
               </li>

            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderRows()}
            </ul>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('categories');
    return { categories: Categories.find({}).fetch() };
}, CategoryList);