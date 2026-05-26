import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Offer from './pages/Offer';
import Services from './pages/Services';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#08060d] text-white font-sans overflow-x-hidden antialiased">
      {/* Global Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
