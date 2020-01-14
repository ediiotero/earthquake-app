import React, { useContext } from "react";
import { EarthquakeContext } from "../contexts/EarthquakeContext";
import DetailModal from "./DetailModal";

const getCityText = place => {
  return place
    .split(" ")
    .slice(-2)
    .join("");
};

const EarthquakeDetails = ({ earthquake }) => {
  const {
    earthquakeMap,
    getEarthquakeMap,
    setEarthquakeDetail,
    modalShow,
    setModalShow
  } = useContext(EarthquakeContext);
  console.log("from details: ", earthquakeMap);
  return (
    <li className="list-item">
      <div className="list-content">
        <span className="list-location">
          <i className="list-mag">{earthquake.properties.mag}</i>{" "}
          {earthquake.properties.place}
        </span>
        <span className="list-time">Time: {earthquake.properties.time}</span>
        <span
          className="list-more"
          onClick={() => {
            getEarthquakeMap(getCityText(earthquake.properties.place));
            setEarthquakeDetail(earthquake.properties);
          }}
        >
          More Detail...
        </span>
      </div>
      <DetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={earthquakeMap}
      />
    </li>
  );
};

export default EarthquakeDetails;
