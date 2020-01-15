import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";

import { EarthquakeContext } from "./../contexts/EarthquakeContext";
import EarthquakeList from "./EarthquakeList";

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

test("check for Loading Data text", () => {
  const earthquakes = [];
  const { getByText } = render(
    <EarthquakeContext.Provider value={{ earthquakes }}>
      <EarthquakeList />
    </EarthquakeContext.Provider>
  );
  const loadingText = getByText("...Loading Data");
  expect(loadingText).toBeInTheDocument();
});

test("render earthquake list", () => {
  const earthquakes = mockQuake;
  const earthquakeDetails = mockQuake[0];
  const list = (
    <EarthquakeContext.Provider value={{ earthquakes, earthquakeDetails }}>
      <EarthquakeList />
    </EarthquakeContext.Provider>
  );
  const { getByText } = render(list);
  const earthquakePlace = getByText("Arizona");
  const earthquakePlace2nd = getByText("Orlando");

  expect(earthquakePlace).toBeInTheDocument();
  expect(earthquakePlace2nd).toBeInTheDocument();
});
