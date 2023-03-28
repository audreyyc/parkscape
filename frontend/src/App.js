import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Cities from "./pages/Cities/Cities.jsx";
import Parks from "./pages/Parks/Parks.jsx";
import Airports from "./pages/Airports/Airports.jsx";
import CityInstance from "./pages/CityInstance/CityInstance.jsx";
import ParkInstance from "./pages/ParkInstance/ParkInstance.jsx";
import AirportInstance from "./pages/AirportInstance/AirportInstance.jsx";
import Search from "./pages/Search/Search.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parks" element={<Parks showFilters={true} />} />
        <Route path="/parks/:id" element={<ParkInstance />} />
        <Route path="/cities" element={<Cities showFilters={true} />} />
        <Route path="/cities/:id" element={<CityInstance />} />
        <Route path="/airports" element={<Airports showFilters={true} />} />
        <Route path="/airports/:id" element={<AirportInstance />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
