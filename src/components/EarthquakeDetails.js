import React, { useContext } from "react";
import { EarthquakeContext } from "../contexts/EarthquakeContext";
import DetailModal from "./DetailModal";

const EarthquakeDetails = ({ earthquake }) => {
  const {
    earthquakeDetails,
    getEarthquakeDetails,
    modalShow,
    setModalShow
  } = useContext(EarthquakeContext);
  console.log("from details: ", earthquakeDetails);
  return (
    <li>
      <p>{earthquake.properties.mag}</p>
      <p>{earthquake.properties.place}</p>
      <p>{earthquake.properties.time}</p>
      <p onClick={() => getEarthquakeDetails(earthquake.properties.detail)}>
        {earthquake.properties.url}
      </p>
      <a href={earthquake.properties.url}>LINK</a>
      <p>{earthquake.properties.detail}</p>
      <p>{earthquake.geometry.coordinates[0]}</p>
      <p>{earthquake.geometry.coordinates[1]}</p>
      <p>{earthquake.geometry.coordinates[2]}</p>
      <DetailModal
        show={modalShow}
        // title={earthquakeDetails.properties.mag}
        onHide={() => setModalShow(false)}
      />
    </li>
  );
};

export default EarthquakeDetails;
