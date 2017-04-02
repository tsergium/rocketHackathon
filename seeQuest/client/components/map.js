import React from 'react';
import MyMap from './map/mapcontainer';
import SideBar from './sidebar';

const Map = ({userId}) => {
        return (
            <div className="questMapPage">
                    <SideBar/>
                    <div className="mapContainer">
                            <MyMap/>
                    </div>
            </div>
        );
};

export default Map;