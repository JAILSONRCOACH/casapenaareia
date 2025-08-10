import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import Beach from "./pages/Beach";
import Contact from "./pages/Contact";
import Culture from "./pages/Culture";
import Experiences from "./pages/Experiences";
import Offers from "./pages/Offers";
import Property from "./pages/Property";
import Recreation from "./pages/Recreation";
import SpecialEvents from "./pages/SpecialEvents";
import Suites from "./pages/Suites";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/property" element={<Property />} />
        <Route path="/recreation" element={<Recreation />} />
        <Route path="/special-events" element={<SpecialEvents />} />
        <Route path="/suites" element={<Suites />} />
      </Routes>
    </Router>
  );
}
