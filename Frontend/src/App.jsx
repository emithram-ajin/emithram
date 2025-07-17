import "./App.css";
import React from "react";
import Navbar from "./components/public/navbar";
import Home from "./components/public/home";
import About from "./components/public/about";
import Services from "./components/public/Servicesection";  
import Franchise from "./components/public/franchise";
import Gallery from "./components/public/gallery";  
import Contact from "./components/public/contact";
import Footer from "./components/public/footer";
import WhyEMithram from "./components/public/whyemitram";
import Registration from './components/public/Registration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
 <>
 <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />

      </Routes>
      <Footer/>
    </Router>    
    </>
  );
}

export default App;
