import React, { useEffect, useRef } from 'react';

const MapQuestMap = ({ apiKey, center, zoom, canyons }) => {
    const mapRef = useRef(null);
    const isMapInitialized = useRef(false);
    const map = useRef(null);

    useEffect(() => {
        if (!apiKey) {
            console.error('MapQuest API key is not provided');
            return;
        }

        const loadMapQuest = () => {
            const script = document.createElement('script');
            script.src = 'https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js';
            document.body.appendChild(script);

            script.onload = () => {
                if (window.L && window.L.mapquest) {
                    window.L.mapquest.key = apiKey;

                    if (!isMapInitialized.current) {
                        isMapInitialized.current = true;
                        map.current = window.L.mapquest.map(mapRef.current, {
                            center: center,
                            layers: window.L.mapquest.tileLayer('map'),
                            zoom: zoom
                        });
                    }
                } else {
                    console.error('MapQuest library not loaded properly');
                }
            };
        };

        loadMapQuest();
    }, [apiKey, center, zoom]);

    useEffect(() => {
        // Check if the map is initialized and the canyons array is available
        if (isMapInitialized.current && canyons.length > 0) {
            canyons.forEach(canyon => {
                if (canyon.latitude && canyon.longitude) {
                    const marker = window.L.marker([canyon.latitude, canyon.longitude]).addTo(map.current);
                    marker.bindPopup(`<b>${canyon.canyon_name}</b><br>Latitude: ${canyon.latitude}<br>Longitude: ${canyon.longitude}`);
                }
            });
        }
    }, [canyons]); // Dependency on canyons array

    return <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default MapQuestMap;
