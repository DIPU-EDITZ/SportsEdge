import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

// Indusive Sports sub-pages
import OurPartners from './pages/indusive-sports/OurPartners';
import ProductRange from './pages/indusive-sports/ProductRange';
import Epufloor from './pages/indusive-sports/Epufloor';
import Redexim from './pages/indusive-sports/Redexim';

// Indusive Sports > Our Products
import FootballTurf from './pages/indusive-sports/products/FootballTurf';
import TennisTurf from './pages/indusive-sports/products/TennisTurf';
import BadmintonTurf from './pages/indusive-sports/products/BadmintonTurf';
import WoodenCourt from './pages/indusive-sports/products/WoodenCourt';
import AcrylicCourt from './pages/indusive-sports/products/AcrylicCourt';
import PPTilesCourt from './pages/indusive-sports/products/PPTilesCourt';
import MultiPurposeTurf from './pages/indusive-sports/products/MultiPurposeTurf';
import LandscapeLeisureTurf from './pages/indusive-sports/products/LandscapeLeisureTurf';
import CricketTurf from './pages/indusive-sports/products/CricketTurf';
import RunningTrack from './pages/indusive-sports/products/RunningTrack';
import SwimmingPool from './pages/indusive-sports/products/SwimmingPool';
import BasketBall from './pages/indusive-sports/products/BasketballCourt';
// Top-level pages
import Testimonials from './pages/Testimonials';
import OurClients from './pages/OurClients';
import OurProjects from './pages/OurProjects';

{/*function App() {
    return (
        <div className="relative min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden antialiased">
            <ScrollToTop />
            
            <div className="absolute top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

          
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<AboutUs />} />

                
                <Route path="/our-partners" element={<OurPartners />} />
                <Route path="/product-range" element={<ProductRange />} />
                <Route path="/epufloor" element={<Epufloor />} />
                <Route path="/redexim" element={<Redexim />} />

                
                <Route
                    path="/products/football-turf"
                    element={<FootballTurf />}
                />
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
                <Route
                    path="/products/cricket-turf"
                    element={<CricketTurf />}
                />
                <Route
                    path="/products/running-track"
                    element={<RunningTrack />}
                />
                <Route
                    path="/products/swimming-pool"
                    element={<SwimmingPool />}
                />
                <Route
                    path="/product-range/basketball-court"
                    element={<BasketBall />}
                />

                
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/our-clients" element={<OurClients />} />
                <Route path="/our-projects" element={<OurProjects />} />
            </Routes>
            </main>
        </div>
    );
}

export default App;*/}

function App() {
    return (
        <div className="relative h-screen w-screen bg-[#08060d] text-white font-sans overflow-hidden flex flex-col justify-center items-center px-4">
            {/* 
            <ScrollToTop />
            
            <div className="absolute top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/our-partners" element={<OurPartners />} />
                    <Route path="/product-range" element={<ProductRange />} />
                    <Route path="/epufloor" element={<Epufloor />} />
                    <Route path="/redexim" element={<Redexim />} />
                    <Route path="/products/football-turf" element={<FootballTurf />} />
                    <Route path="/products/tennis-turf" element={<TennisTurf />} />
                    <Route path="/products/badminton-court" element={<BadmintonTurf />} />
                    <Route path="/products/wooden-court" element={<WoodenCourt />} />
                    <Route path="/products/acrylic-court" element={<AcrylicCourt />} />
                    <Route path="/products/pp-tiles-court" element={<PPTilesCourt />} />
                    <Route path="/products/multi-purpose-turf" element={<MultiPurposeTurf />} />
                    <Route path="/products/landscape-leisure-turf" element={<LandscapeLeisureTurf />} />
                    <Route path="/products/cricket-turf" element={<CricketTurf />} />
                    <Route path="/products/running-track" element={<RunningTrack />} />
                    <Route path="/products/swimming-pool" element={<SwimmingPool />} />
                    <Route path="/product-range/basketball-court" element={<BasketBall />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/our-clients" element={<OurClients />} />
                    <Route path="/our-projects" element={<OurProjects />} />
                </Routes>
            </main>
            */}

            {/* Maintenance Layout */}
            <div className="relative z-10 max-w-sm w-full flex flex-col items-center text-center px-4">
                {/* Brand */}
                <div className="flex flex-col items-center mb-6">
                    <span className="text-white text-3xl font-extrabold tracking-tight leading-none">
                        SportsEdge
                    </span>
                    <span className="text-[#bef264] text-[10px] font-normal mt-1.5 lowercase tracking-wider">
                        build with us
                    </span>
                </div>

                {/* Animated Lottie */}
                <div className="w-44 h-44 mb-6 flex items-center justify-center">
                    <lottie-player
                        src="/website-maintenance.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "100%", height: "100%" }}
                        loop
                        autoplay
                    ></lottie-player>
                </div>

                {/* Content */}
                <h1 className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight">
                    Under Maintenance
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    We'll be back online shortly with an enhanced experience. Thank you for your patience!
                </p>

                {/* Contact Section */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Reach out at</p>
                    <a
                        href="mailto:sportsedge2025@gmail.com"
                        className="text-sm font-semibold text-[#bef264] hover:underline transition-all"
                    >
                        sportsedge2025@gmail.com
                    </a>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#bef264]/10 rounded-full blur-[100px] pointer-events-none z-0" />
        </div>
    );
}

export default App;

