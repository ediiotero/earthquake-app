import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders title text", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/earthquakes/i);
  expect(titleElement).toBeInTheDocument();
});
