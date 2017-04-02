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
            url: '/icPerson.png',// image is in root directory of meteor project.
        };

        const image = {
            url: '/greenMarker.png',// image is in root directory of meteor project.
        };

        const imageFinal = {
            url: '/catMarkerGreen.png',// image is in root directory of meteor project.
        };

        const sidebarQuestPoint = document.querySelectorAll('.questPoints li');

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
            visible: false
        });
        const marker3 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.510003, 13.399773)), // Courtyard by Marriott Berlin City Center
            map: map.instance,
            icon: image,
            animation: google.maps.Animation.DROP,
            visible: false
        });

        const marker4 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.509017, 13.391190)), // Curry museum
            map: map.instance,
            icon: image,
            animation: google.maps.Animation.DROP,
            visible: false
        });

        const marker5 = new google.maps.Marker({
            position: (new google.maps.LatLng(52.506854, 13.392787)), // Rocket Tower
            map: map.instance,
            icon: imageFinal,
            animation: google.maps.Animation.DROP,
            visible: false
        });

        let infowindow1 = new google.maps.InfoWindow({
            content: '<div class="marker1Info"></div>',

        });
        let infowindow2 = new google.maps.InfoWindow({
            content: '<div class="marker2Info"></div>'
        });

        let infowindow3 = new google.maps.InfoWindow({
            content: '<div class="marker3Info"></div>'
        });

        let infowindow4 = new google.maps.InfoWindow({
            content: '<div class="marker4Info"></div>'
        });

        let infowindow5 = new google.maps.InfoWindow({
            content: '<div class="markerFinalInfo"></div>'
        });

        marker1.addListener('click', function(event){
            infowindow1.open(map.instance, marker1);
            marker2.setVisible(true);
            sidebarQuestPoint[0].classList.add('active')
        }) ;

        marker2.addListener('click', function(event){
            infowindow2.open(map.instance, marker2);
            marker3.setVisible(true);
            sidebarQuestPoint[1].classList.add('active')
        });

        marker3.addListener('click', function(event){
            infowindow3.open(map.instance, marker3);
            marker4.setVisible(true);
            sidebarQuestPoint[2].classList.add('active')
        });

        marker4.addListener('click', function(event){
            infowindow4.open(map.instance, marker4);
            marker5.setVisible(true);
            sidebarQuestPoint[3].classList.add('active')
        });

        marker5.addListener('click', function(event){
            infowindow5.open(map.instance, marker5);
            sidebarQuestPoint[4].classList.add('active')
        });
    });

}

function MyMap() {
    let height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    let heightStyle = `min-height: ${height}`;
    return (
        <GoogleMap onReady={handleOnReady} mapOptions={handleMapOptions} style={heightStyle}>
            Loading!
        </GoogleMap>
    );
}

export default MyMap;