import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

//AIzaSyD0sRXvGclVhkV48JXLPOjPfzvvKLJ8Wpc

const mapStyles = {
    width: '100%',
    height: '100%'
};

class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        alert("entered GMaps api");
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: -8.0347136,
                        lng: -34.9110272
                    }}
                >

                    <Marker
                        onClick={this.onMarkerClick}
                        name={'This is test name'}
                    />

                </Map>
            </div>
        );
    }
}
//latitude: -8.0347136, longitude: -34.9110272,
export default GoogleApiWrapper({
    apiKey: "AIzaSyD0sRXvGclVhkV48JXLPOjPfzvvKLJ8Wpc"
})(Demo1);