import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Indusive Sports sub-pages
import OurPartners from './pages/indusive-sports/OurPartners';
import ProductRange from './pages/indusive-sports/ProductRange';
import Epufloor from './pages/indusive-sports/Epufloor';
import Redexim from './pages/indusive-sports/Redexim';

// Indusive Sports > Our Products
import FootballTurf from './pages/indusive-sports/products/FootballTurf';
import HockeyTurf from './pages/indusive-sports/products/HockeyTurf';
import TennisTurf from './pages/indusive-sports/products/TennisTurf';
import BadmintonTurf from './pages/indusive-sports/products/BadmintonTurf';
import WoodenCourt from './pages/indusive-sports/products/WoodenCourt';
import AcrylicCourt from './pages/indusive-sports/products/AcrylicCourt';
import PPTilesCourt from './pages/indusive-sports/products/PPTilesCourt';
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
                <Route path="/our-partners" element={<OurPartners />} />
                <Route path="/product-range" element={<ProductRange />} />
                <Route path="/epufloor" element={<Epufloor />} />
                <Route path="/redexim" element={<Redexim />} />

                {/* Indusive Sports > Our Products */}
                <Route
                    path="/products/football-turf"
                    element={<FootballTurf />}
                />
                <Route path="/products/hockey-turf" element={<HockeyTurf />} />
                <Route path="/products/tennis-turf" element={<TennisTurf />} />
                <Route
                    path="/products/badminton-court"
                    element={<BadmintonTurf />}
                />
                <Route
                    path="/products/wooden-court"
                    element={<WoodenCourt />}
                />
                <Route
                    path="/products/acrylic-court"
                    element={<AcrylicCourt />}
                />
                <Route
                    path="/products/pp-tiles-court"
                    element={<PPTilesCourt />}
                />
                <Route
                    path="/products/multi-purpose-turf"
                    element={<MultiPurposeTurf />}
                />
                <Route
                    path="/products/landscape-leisure-turf"
                    element={<LandscapeLeisureTurf />}
                />

                {/* Main pages */}
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/our-clients" element={<OurClients />} />
            </Routes>
        </div>
    );
}

export default App;
