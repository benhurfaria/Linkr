import { useState } from "react";

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

    

    

    return (
              
            <div id="mapid" height="250px">
                <GeoLocation onClick={askForGeoLocation} status={geoLocationActive}>
                    <LocationPin />
                    {geoLocationActive ?
                        <h1>Localização ativada</h1>
                        :
                        <h1>Localização desativada</h1>}
                </GeoLocation>

            </div>
            
        


        
        /* <GeoLocation onClick={askForGeoLocation} status={geoLocationActive}>
                    <LocationPin />
                    {geoLocationActive ?
                        <h1>Localização ativada</h1>
                        :
                        <h1>Localização desativada</h1>}
                </GeoLocation> 
                */
    );


}

/*
accessToken: 'pk.eyJ1IjoidGVsZXMtdGFyY2lzaW8iLCJhIjoiY2t0eHRsY2doMDQ4NjJvcGl3dXJ5ank4byJ9.3fjUEvn7-6yp_gR7AlNHlA'
*/

export { GeoLocationModule }

