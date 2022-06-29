import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as locations from "./data/mocks/locations-mock.json";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 50.7440,
    longitude: 19.2762,
    width: "100vw",
    height: "100vh",
    zoom: 15
  });
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedLocation(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {locations.features.map(location => (
          <Marker
            key={location.properties.LocationId}
            latitude={location.geometry.coordinates[1]}
            longitude={location.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedLocation(location);
              }}
            >
              <img src="/locationicon.png" alt="Location icon" width="184px" height="184px" />
            </button>
          </Marker>
        ))}

        {selectedLocation ? (
          <Popup
            latitude={selectedLocation.geometry.coordinates[1]}
            longitude={selectedLocation.geometry.coordinates[0]}
            onClose={() => {
              setSelectedLocation(null);
            }}
          >
            <div>
              <h2>{selectedLocation.properties.Name}</h2>
              <p>{selectedLocation.properties.Description}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
