import React, { useEffect, useRef } from 'react';

export default function MapView() {
  const mapRef = useRef();
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -8.0347136, lng: -34.9110272 },
      //lat: -34.397, lng: 150.644 }
      //latitude: -8.0347136, longitude: -34.9110272,
      zoom: 14,
    });
  }, []);
  return <div ref={mapRef} style={{ width: 500, height: 500 }}></div>;
}
