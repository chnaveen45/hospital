import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";

import Services from "./Components/Services";
import Doctor from "./Components/Doctor";
import Contactus from "./Components/Contactus";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
};

export default App;

