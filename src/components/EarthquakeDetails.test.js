import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";

import { EarthquakeContext } from "./../contexts/EarthquakeContext";
import EarthquakeList from "./EarthquakeList";
import EarthquakeDetails from "./EarthquakeDetails";

const mockQuake = [
  {
    properties: {
      id: 1,
      title: "1.2m Arizona",
      mag: 1.2,
      time: 1579010443438,
      place: "Arizona"
    }
  },
  {
    properties: {
      id: 2,
      title: "2.1m Orlando",
      mag: 2.1,
      time: 15790141123438,
      place: "Orlando"
    }
  }
];

afterEach(cleanup);

test("render earthquake details", () => {
  const earthquakes = mockQuake;
  const earthquakeDetails = mockQuake[0];
  const list = (
    <EarthquakeContext.Provider value={{ earthquakes, earthquakeDetails }}>
      <EarthquakeList>
        <EarthquakeDetails earthquake={mockQuake[0]}></EarthquakeDetails>
      </EarthquakeList>
    </EarthquakeContext.Provider>
  );
  const { getByText } = render(list);
  console.log("list :", list);
  const earthquakeMag = getByText("1.2");
  const earthquakePlace = getByText("Arizona");
  expect(earthquakeMag).toBeInTheDocument();
  expect(earthquakePlace).toBeInTheDocument();
});
