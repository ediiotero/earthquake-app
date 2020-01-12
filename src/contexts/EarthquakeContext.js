import React, { createContext, useState, useEffect } from "react";

export const EarthquakeContext = createContext();

const EarthquakeContextProvider = props => {
  const [earthquakes, setEarthquake] = useState([]);
  const [earthquakeDetails, setEarthquakeDetails] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const listOfEarthquakes =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson";

  const getEarthquakeDetails = detail => {
    // setEarthquakeDetails({});
    fetch(detail)
      .then(res => res.json())
      .then(data => setEarthquakeDetails(data.properties))
      .then(setModalShow(true))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    fetch(listOfEarthquakes)
      .then(res => res.json())
      .then(data => setEarthquake(data.features))
      .catch(err => console.log(err));
  }, []);
  return (
    <EarthquakeContext.Provider
      value={{
        earthquakes,
        earthquakeDetails,
        getEarthquakeDetails,
        modalShow,
        setModalShow
      }}
    >
      {props.children}
    </EarthquakeContext.Provider>
  );
};

export default EarthquakeContextProvider;
