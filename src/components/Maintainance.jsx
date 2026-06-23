import React from 'react'

const Maintainance = () => {
  return (
        <div className="relative min-h-screen w-full bg-gray-50 text-gray-900 font-sans overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center px-6 py-12">
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
            <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center px-4">
                {/* Brand */}
                <div className="flex flex-col items-center mb-8">
                    <span className="text-gray-900 text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                        SportsEdge
                    </span>
                    <span className="text-[#84cc16] text-xs md:text-sm font-bold mt-2 lowercase tracking-widest">
                        build with us
                    </span>
                </div>

                {/* Animated Lottie */}
                <div className="w-64 h-64 md:w-80 md:h-80 mb-8 flex items-center justify-center">
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
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight tracking-tight">
                    Under Maintenance
                </h1>
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-10 max-w-md">
                    We'll be back online shortly with an enhanced experience. Thank you for your patience!
                </p>

                {/* Contact Section */}
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Reach out at</p>
                    <a
                        href="mailto:sportsedge2025@gmail.com"
                        className="text-base md:text-xl font-bold text-[#84cc16] hover:text-[#65a30d] hover:underline transition-all"
                    >
                        sportsedge2025@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Maintainance