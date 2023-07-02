import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

export default function App() {
  const URL = "https://api.wheretheiss.at/v1/satellites/25544";
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  useEffect(() => {
    async function getISSCoords() {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords(data.longitude, data.latitude);
    }
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
