import './map.css';
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

const Map = ({ location, clickable, gps, prev }) => {
  const { latitude, longitude } = location;

console.log(longitude);

  const mapRef = useRef();
  const markerRef = useRef(null); // NEW - hold a ref to the marker
  const accessToken = 'sk.eyJ1Ijoib21hcmhlcmJhd2kxOSIsImEiOiJjbGgxZDR6dWUxMjQ1M3NxdnhxMGE1bm9jIn0.hxApiX1mA_l5lZzLQabK8g';
  const mapStyle = 'mapbox/streets-v11';

  const icon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/476893/marker.svg',
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  });

  useEffect(() => {
    if (!mapRef.current) {
      // Create map istance
   
      mapRef.current = L.map('map', {
        center: [51.505, -0.09],
        zoom: 0.5,
        zoomControl: true,
        
      }).setView([latitude, longitude], 7);

   

        markerRef.current = L.marker([latitude,longitude], { icon }).addTo(mapRef.current);
 

      const handleClick = (event) => {
        const { latlng } = event;

        // remove the old marker
        if (markerRef.current) {
          markerRef.current.remove();
        }

        // set a new marker
        markerRef.current = L.marker(latlng, { icon }).addTo(mapRef.current);
        gps(event.latlng)

      };

      // Bind the click event
      if (clickable) mapRef.current.on('click', handleClick);

      L.tileLayer(
        `https://api.mapbox.com/styles/v1/${mapStyle}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
        {
          tileSize: 512,
          maxZoom: 18,
          zoomOffset: -1,
        }
      ).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        // Unbind the click event before removing the map
        mapRef.current.off('click');
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [prev]);

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
};

export default Map;
