import React, { createContext, useState, useEffect } from "react";

export const EarthquakeContext = createContext();

const EarthquakeContextProvider = props => {
  const [earthquakes, setEarthquake] = useState([]);
  const listOfEarthquakes =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson";
  useEffect(() => {
    fetch(listOfEarthquakes)
      .then(res => res.json())
      .then(res => setEarthquake(res.features));
  }, []);
  return (
    <EarthquakeContext.Provider value={{ earthquakes, setEarthquake }}>
      {props.children}
    </EarthquakeContext.Provider>
  );
};

export default EarthquakeContextProvider;
