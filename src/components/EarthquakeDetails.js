import React, { useContext } from "react";
import { EarthquakeContext } from "../contexts/EarthquakeContext";
import DetailModal from "./DetailModal";

const getCityText = place =>
  place
    .split(" ")
    .slice(-2)
    .join("");

const convertTime = timeStamp => new Date(timeStamp).toLocaleString();

const EarthquakeDetails = ({ earthquake }) => {
  const {
    earthquakeMap,
    getEarthquakeMap,
    setEarthquakeDetail,
    modalShow,
    setModalShow
  } = useContext(EarthquakeContext);
  return (
    <li className="list-item animated fadeInUp">
      <div className="list-item-header">
        Location:
        <span className="location-name"> {earthquake.properties.place}</span>
      </div>
      <div className="list-content">
        <span className="list-location">
          <div>
            Magnitude:{" "}
            <span className="list-mag">{earthquake.properties.mag}</span>
          </div>
        </span>
        <div className="list-time">
          Time: {convertTime(earthquake.properties.time)}
        </div>
        <div
          className="list-more"
          onClick={() => {
            getEarthquakeMap(getCityText(earthquake.properties.place));
            setEarthquakeDetail(earthquake.properties);
          }}
        >
          Details...
        </div>
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
