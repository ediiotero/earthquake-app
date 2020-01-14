import React from "react";
import EarthquakeContextProvider from "./contexts/EarthquakeContext";
import EarthquakeList from "./components/EarthquakeList";
function App() {
  return (
    <div className="App">
      <main className="center-content">
        <section id="page-header">
          <p className="page-title">Earthquakes</p>
          <p className="page-header-text">
            Magnitude of 1.0 or more in the past hour
          </p>
        </section>
        <section id="earthquake-list">
          <EarthquakeContextProvider>
            <EarthquakeList />
          </EarthquakeContextProvider>
        </section>
      </main>
    </div>
  );
}

export default App;
