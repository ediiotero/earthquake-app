import React, { useContext } from "react";
import { EarthquakeContext } from "../contexts/EarthquakeContext";

const EarthquakeList = () => {
  const { earthquakes } = useContext(EarthquakeContext);
  console.log("list: ", earthquakes);
  return earthquakes.length ? (
    <div>
      <ul>
        {earthquakes.map(quake => {
          return (
            <li key={quake.id}>
              <p>{quake.properties.mag}</p>
              <p>{quake.properties.place}</p>
              <p>{quake.properties.time}</p>
              <p>
                {quake.geometry.coordinates.map(n => {
                  return <p>{n}</p>;
                })}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <p>No data</p>
  );
};

export default EarthquakeList;
