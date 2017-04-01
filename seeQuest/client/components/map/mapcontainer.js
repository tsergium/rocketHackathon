import React from 'react';
import GoogleMap from './lib/GoogleMap';

function handleMapOptions() {
    let latLng = Geolocation.currentLocation().latLng();
    return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 8,
    };
}

function handleOnReady(name) {
    GoogleMaps.ready(name, map => {
        const marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance,
        });
    });
}

function MyMap() {
    return (
        <GoogleMap onReady={handleOnReady} mapOptions={handleMapOptions}>
            Loading!
        </GoogleMap>
    );
}

export default MyMap;