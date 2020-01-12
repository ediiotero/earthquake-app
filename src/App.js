import React from "react";
import EarthquakeContextProvider from "./contexts/EarthquakeContext";
import EarthquakeList from "./components/EarthquakeList";

function App() {
  return (
    <div className="App">
      <EarthquakeContextProvider>
        <EarthquakeList />
      </EarthquakeContextProvider>
    </div>
  );
}

export default App;
