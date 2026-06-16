import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Indusive Sports sub-pages
import OurPartners from './pages/indusive-sports/OurPartners';
import ProductRange from './pages/indusive-sports/ProductRange';
import Epufloor from './pages/indusive-sports/Epufloor';
import Redexim from './pages/indusive-sports/Redexim';

// Indusive Sports > Our Products
import FootballTurf from './pages/indusive-sports/products/FootballTurf';
import HockeyTurf from './pages/indusive-sports/products/HockeyTurf';
import TennisTurf from './pages/indusive-sports/products/TennisTurf';
import MultiPurposeTurf from './pages/indusive-sports/products/MultiPurposeTurf';
import LandscapeLeisureTurf from './pages/indusive-sports/products/LandscapeLeisureTurf';

// Top-level pages
import Testimonials from './pages/Testimonials';
import OurClients from './pages/OurClients';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden antialiased">
      {/* Global Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Indusive Sports */}
        <Route path="/indusive-sports/our-partners" element={<OurPartners />} />
        <Route path="/indusive-sports/product-range" element={<ProductRange />} />
        <Route path="/indusive-sports/epufloor" element={<Epufloor />} />
        <Route path="/indusive-sports/redexim" element={<Redexim />} />

        {/* Indusive Sports > Our Products */}
        <Route path="/indusive-sports/products/football-turf" element={<FootballTurf />} />
        <Route path="/indusive-sports/products/hockey-turf" element={<HockeyTurf />} />
        <Route path="/indusive-sports/products/tennis-turf" element={<TennisTurf />} />
        <Route path="/indusive-sports/products/multi-purpose-turf" element={<MultiPurposeTurf />} />
        <Route path="/indusive-sports/products/landscape-leisure-turf" element={<LandscapeLeisureTurf />} />

        {/* Main pages */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/our-clients" element={<OurClients />} />
      </Routes>
    </div>
  );
}

export default App;
