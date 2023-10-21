import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/home/Navbar"; // Rename the Navbar component
import Carousel from "../src/components/home/Carousel";
import Contact from "./components/home/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />

        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* Define other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
