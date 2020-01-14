import React, { createContext, useState, useEffect } from "react";

export const EarthquakeContext = createContext();

const EarthquakeContextProvider = props => {
  const [earthquakes, setEarthquake] = useState([]);
  const [earthquakeMap, setEarthquakeMap] = useState([]);
  const [earthquakeDetails, setEarthquakeDetail] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const listOfEarthquakes =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson";

  const getEarthquakeMap = place => {
    const mapKey = "SeHsGdKlpaCXuRw80lDAJwiJkAIa4XJl";
    const url = `https://open.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${place}&size=@2x`;
    fetch(url)
      .then(res => setEarthquakeMap(res.url))
      .then(setModalShow(true))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    setEarthquake("");
    fetch(listOfEarthquakes)
      .then(res => res.json())
      .then(data => setEarthquake(data.features))
      .catch(err => console.log(err));
  }, []);
  return (
    <EarthquakeContext.Provider
      value={{
        earthquakes,
        earthquakeMap,
        getEarthquakeMap,
        earthquakeDetails,
        setEarthquakeDetail,
        modalShow,
        setModalShow
      }}
    >
      {props.children}
    </EarthquakeContext.Provider>
  );
};

export default EarthquakeContextProvider;
