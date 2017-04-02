import React from 'react';
import GoogleMap from './lib/GoogleMap';
import { Meteor } from 'meteor/meteor';

function handleMapOptions() {
    // let latLng = Geolocation.currentLocation();
    //console.log(`debug: ${latLng}`);
    // let latLng = Geolocation.currentLocation().latLng();
    return {
        center: new google.maps.LatLng(52.514136, 13.392802),  // Gendarmenmarkt
        zoom: 15,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    };
}

function handleOnReady(name) {
    GoogleMaps.ready(name, map => {
        const imagePerson = {
            url: 'http://localhost:3000/icPerson.png',// image is in root directory of meteor project.
        };

        const image = {
            url: 'http://localhost:3000/greenMarker.png',// image is in root directory of meteor project.
        };

        const imageFinal = {
            url: 'http://localhost:3000/catMarkerGreen.png',// image is in root directory of meteor project.
        };

        const marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance,
            icon: imagePerson
        });
        const marker1 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.517910, 13.394084)), //Humbold univ
            map: map.instance,
            icon: image,
            animation: google.maps.Animation.DROP,
        });

        const marker2 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.511205, 13.393501)), //Löwenbräu am Gendarmenmarkt
            map: map.instance,
            icon: image,
            animation: google.maps.Animation.DROP,
        });
        const marker3 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.510003, 13.399773)), // Courtyard by Marriott Berlin City Center
            map: map.instance,
            icon: image,
            animation: google.maps.Animation.DROP,
        });

        const marker4 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.509017, 13.391190)), // Curry museum
            map: map.instance,
            icon: image,
            animation: google.maps.Animation.DROP,
        });

        const marker5 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.506854, 13.392787)), // Rocket Tower
            map: map.instance,
            icon: imageFinal,
            animation: google.maps.Animation.DROP,
        });

        let infowindow1 = new google.maps.InfoWindow({
            content: 'Humbold univ',
            // boxStyle: {
            //     background: "url('http://localhost:3000/marker1ImagePopUp.png') no-repeat",
            //     opacity: 0.75,
            //     width: "280px",
            //     height: "100px",
            //     animation: google.maps.Animation.DROP,
            // }
        });
        let infowindow2 = new google.maps.InfoWindow({
            content: 'Löwenbräu am Gendarmenmarkt'
        });

        let infowindow3 = new google.maps.InfoWindow({
            content: 'Courtyard by Marriott Berlin City Center'
        });

        let infowindow4 = new google.maps.InfoWindow({
            content: 'Curry museum'
        });

        let infowindow5 = new google.maps.InfoWindow({
            content: 'Rocket Tower'
        });

        marker1.addListener('click', function(event){
            infowindow1.open(map.instance, marker1);
        }) ;

        marker2.addListener('click', function(event){
            infowindow2.open(map.instance, marker2);
        });

        marker3.addListener('click', function(event){
            infowindow3.open(map.instance, marker3);
        });

        marker4.addListener('click', function(event){
            infowindow4.open(map.instance, marker4);
        });

        marker5.addListener('click', function(event){
            infowindow5.open(map.instance, marker5);
        });
    });

}

function MyMap() {
    let isLoggedIn = Meteor.user();
    console.log(isLoggedIn);
    return (
        <GoogleMap onReady={handleOnReady} mapOptions={handleMapOptions}>
            Loading!
        </GoogleMap>
    );
}

export default MyMap;