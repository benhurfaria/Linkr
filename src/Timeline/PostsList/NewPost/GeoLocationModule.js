import { useState } from "react";
import styled from "styled-components";
// import { GoogleApiWrapper } from "google-maps-react";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import { GeoLocation, LocationPin } from "./GeoLocation_style";

function GeoLocationModule() {
    const [geoLocationActive, setGeoLocationActive] = useState(false);


    function printPosition(receivedPosition) {
        console.log("receivedPosition: ", receivedPosition);
        setGeoLocationActive(!geoLocationActive);
    }

    function positionAccessDenied() {
        alert('positionAccessDenied');
    }

    function permissionGranted(response) {
        const geoLocationSettings = {
            enableHighAccurracy: false,
            maximumAge: 30 * 1000,
            timeout: 20 * 1000
        };

        if (response.state === 'granted') {
            console.log("geoqueryresponse: " + response.state);

        }
        else if (response.state === 'prompt') {
            console.log("geoqueryresponse: " + response.state);
            navigator.geolocation.getCurrentPosition(printPosition, positionAccessDenied, geoLocationSettings);
        }
        else if (response.state === 'denied') {
            console.log(response.state);
        }
        response.onchange(console.log);
    }


    function askForGeoLocation() {
        if (!('geolocation' in navigator)) {
            alert("Geolocation not available in this browser");
        }
        else {
            navigator.permissions.query({ name: 'geolocation' })
                .then(permissionGranted)
                .catch(() => console.log("wait for user/browser permission to obtain geoposition"));
        }
    }

    let L = {};
    let mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGVsZXMtdGFyY2lzaW8iLCJhIjoiY2t0eHRsY2doMDQ4NjJvcGl3dXJ5ank4byJ9.3fjUEvn7-6yp_gR7AlNHlA'
     }).addTo(mymap);

    return (
        <TretaMaps >
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <div id="map">

            </div>
        </TretaMaps>


        /* <GoogleApiWrapper /> */
        /* <GeoLocation onClick={askForGeoLocation} status={geoLocationActive}>
                    <LocationPin />
                    {geoLocationActive ?
                        <h1>Localização ativada</h1>
                        :
                        <h1>Localização desativada</h1>}
                </GeoLocation> */
    );


}

const TretaMaps = styled.div`
height: 600px;
`;


export { GeoLocationModule }