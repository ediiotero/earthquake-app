import React, { useContext } from "react";
import { EarthquakeContext } from "../contexts/EarthquakeContext";
import EarthquakeDetails from "./EarthquakeDetails";

const EarthquakeList = () => {
  const { earthquakes } = useContext(EarthquakeContext);
  return earthquakes.length ? (
    <div>
      <ul>
        {earthquakes.map(quake => {
          return (
            <EarthquakeDetails
              earthquake={quake}
              key={quake.id}
              data-testId="quakeList"
            />
          );
        })}
      </ul>
    </div>
  ) : (
    <p>...Loading Data</p>
  );
};

export default EarthquakeList;
