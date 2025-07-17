import "./App.css";
import React from "react";
import Navbar from "./components/public/navbar";
import Home from "./components/public/home";
import About from "./components/public/about";
import Certifications from "./components/public/certifications";
import Franchise from "./components/public/franchise";
import Gallery from "./components/public/gallery";  
import Contact from "./components/public/contact";
import Footer from "./components/public/footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
 <>
 <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>    
    </>
  );
}

export default App;
