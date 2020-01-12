import React, { useContext } from "react";
import { EarthquakeContext } from "../contexts/EarthquakeContext";
import EarthquakeDetails from "./EarthquakeDetails";

const EarthquakeList = () => {
  const { earthquakes } = useContext(EarthquakeContext);
  console.log("list: ", earthquakes);
  return earthquakes.length ? (
    <div>
      <ul>
        {earthquakes.map(quake => {
          return <EarthquakeDetails earthquake={quake} key={quake.id} />;
        })}
      </ul>
    </div>
  ) : (
    <p>No data</p>
  );
};

export default EarthquakeList;
