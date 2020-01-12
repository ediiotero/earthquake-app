import React, { useContext } from "react";
import { EarthquakeContext } from "../contexts/EarthquakeContext";

const EarthquakeDetails = ({ earthquake }) => {
  const { earthquakeDetails, getEarthquakeDetails } = useContext(
    EarthquakeContext
  );
  console.log("from details: ", earthquakeDetails);
  return (
    <li onClick={() => getEarthquakeDetails(earthquake.properties.detail)}>
      <p>{earthquake.properties.mag}</p>
      <p>{earthquake.properties.place}</p>
      <p>{earthquake.properties.time}</p>
      <p>{earthquake.properties.url}</p>
      <a href={earthquake.properties.url}>LINK</a>
      <p>{earthquake.properties.detail}</p>
      <p>{earthquake.geometry.coordinates[0]}</p>
      <p>{earthquake.geometry.coordinates[1]}</p>
      <p>{earthquake.geometry.coordinates[2]}</p>
    </li>
  );
};

export default EarthquakeDetails;
