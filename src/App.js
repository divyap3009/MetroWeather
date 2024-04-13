import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityTable from "./components/CityTable";
import WeatherPage from "./components/WeatherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CityTable />} />
        <Route path="/weather/:cityId" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
