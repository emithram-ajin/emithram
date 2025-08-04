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
import Registration from './components/public/Registration';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Privacypolicy from "./components/public/privacy&policy";
import Refundpolicy from "./components/public/refundpolicy";
import Termsconditions from "./components/public/terms&conditions";
import Testimonials from "./components/public/Testimonials";
import Services from "./components/public/Services";
import Disclaimer from "./components/public/Disclaimer";

// This component now uses useLocation inside Router
function RoutedApp() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/refund-policy" element={<Refundpolicy />} />
        <Route path="/terms-conditions" element={<Termsconditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      <Footer />
    </>
  );
}

// App just wraps RoutedApp with Router
function App() {
  return (
    <Router>
      <RoutedApp />
    </Router>
  );
}

export default App;
