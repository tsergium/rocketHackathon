import React from 'react';
import Header from './header';
import Map from './map';
import CategoryList from './categories';

export default () => {
    return (
        <div>
            <Header/>
            <CategoryList />
            <Map />
        </div>
    );
};
