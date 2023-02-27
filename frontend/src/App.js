import './App.css';
import Navigation from './components/Navigation';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cities from "./pages/Cities/Cities";
import Parks from "./pages/Parks/Parks";
import Airports from "./pages/Airports/Airports";
import CityInstance from "./pages/CityInstance/CityInstance";
import ParkInstance from "./pages/ParkInstance/ParkInstance";
import AirportInstance from "./pages/AirportInstance/AirportInstance";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/parks/:id" element={<ParkInstance />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:id" element={<CityInstance />} />
        <Route path="/airports" element={<Airports />} />
        <Route path="/airports/:id" element={<AirportInstance/>} />
      </Routes>

    </div>
  );
}

export default App;
