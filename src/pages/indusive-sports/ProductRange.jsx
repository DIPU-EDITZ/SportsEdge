import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Circle, Droplets } from 'lucide-react';
import Footer from '../../components/Footer';

import footballTurf from '../../assets/football court.avif';
import hockeyCourt from '../../assets/hocky court.avif';
import tennisCourt from '../../assets/tennis court.avif';
import basketballCourt from '../../assets/basketball court.avif';
import runningTracks from '../../assets/running tracks.avif';
import multipurposeCourt from '../../assets/multipurpose court.avif';
import swimmingCourt from '../../assets/swimming court.avif';
import badmintonCourt from '../../assets/batminton court.jpg';
import woodenCourt from '../../assets/wooden court.avif';
import ppTilesCourt from '../../assets/PP tiles court.avif';

const products = [
  {
    title: 'Football Turf',
    category: 'Synthetic Turf',
    description: 'FIFA certified synthetic turf systems engineered for maximum player safety, optimal ball bounce, and year-round performance.',
    path: '/indusive-sports/products/football-turf',
    image: footballTurf,
    features: ['UV Resistant', 'High Durability', 'Shock Absorption']
  },
  {
    title: 'Hockey Turf',
    category: 'Synthetic Turf',
    description: 'FIH approved artificial hockey surfaces delivering consistent ball roll, excellent grip, and minimal water requirement.',
    path: '/indusive-sports/products/hockey-turf',
    image: hockeyCourt,
    features: ['Fast Ball Roll', 'Non-Abrasive', 'All-Weather Play']
  },
  {
    title: 'Tennis Court',
    category: 'Acrylic Systems',
    description: 'ITF certified acrylic court systems designed to reduce joint stress while offering medium-fast paced play and brilliant colors.',
    path: '/indusive-sports/products/tennis-turf',
    image: tennisCourt,
    features: ['True Bounce', 'Anti-Glare', 'Low Maintenance']
  },
  {
    title: 'Basketball Court',
    category: 'PU / Acrylic',
    description: 'FIBA standard indoor & outdoor courts providing superior shock absorption, slip resistance, and vibrant custom colors.',
    path: '/indusive-sports/product-range',
    image: basketballCourt,
    features: ['High Grip', 'Seamless Finish', 'Impact Protection']
  },
  {
    title: 'EPDM Running Tracks',
    category: 'EPDM Track Systems',
    description: 'World Athletics (IAAF) certified running tracks for professional stadiums, schools, and training facilities.',
    path: '/indusive-sports/product-range',
    image: runningTracks,
    features: ['Spike Resistant', 'Energy Return', 'Weather Proof']
  },
  {
    title: 'Swimming Pool',
    category: 'Aquatic Systems',
    description: 'Professional swimming pool design, construction, filtration, and upkeep services matching international safety guidelines.',
    path: '/indusive-sports/product-range',
    image: swimmingCourt,
    features: ['Premium Filtration', 'Stunning Finishes', 'Leak Proof Structure']
  },
  {
    title: 'Multi-Purpose Courts',
    category: 'Versatile Solutions',
    description: 'Versatile playing fields that combine multiple sports in one area, perfect for schools and residential complexes.',
    path: '/indusive-sports/products/multi-purpose-turf',
    image: multipurposeCourt,
    features: ['Space Saving', 'Multi-Sport Line Marking', 'Cost Effective']
  },
  {
    title: 'Badminton Court',
    category: 'Indoor & Outdoor Systems',
    description: 'High-performance synthetic surfaces offering excellent grip, shock absorption, and true bounce for all levels of play.',
    path: '/indusive-sports/products/badminton-court',
    image: badmintonCourt,
    features: ['Excellent Grip', 'Shock Absorption', 'True Bounce']
  },
  {
    title: 'Wooden Court',
    category: 'Indoor Systems',
    description: 'Premium wooden courts designed for professional indoor sports, featuring advanced sub-floor systems for optimal energy return.',
    path: '/indusive-sports/products/wooden-court',
    image: woodenCourt,
    features: ['Premium Wood', 'Energy Return', 'Professional Grade']
  },
  {
    title: 'Acrylic Court',
    category: 'Acrylic Systems',
    description: 'ITF certified acrylic surfacing for tennis, basketball, and multi-sport use, providing consistent bounce and vibrant aesthetics.',
    path: '/indusive-sports/products/acrylic-court',
    image: tennisCourt,
    features: ['ITF Certified', 'UV Resistant', 'Low Maintenance']
  },
  {
    title: 'PP Tiles Court',
    category: 'Interlocking Tiles',
    description: 'Versatile and durable interlocking PP tiles for outdoor and indoor multi-sport courts, providing easy installation and all-weather use.',
    path: '/indusive-sports/products/pp-tiles-court',
    image: ppTilesCourt,
    features: ['Easy Installation', 'All-Weather', 'High Durability']
  }
];

function ProductRange() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      {/* ─────────────────────────────────────
          PAGE HEADER
          ───────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Product Range</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our comprehensive portfolio of international-standard sports infrastructure solutions, from synthetic turfs to high-performance acrylic systems.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          PRODUCTS GRID
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gray-900 rounded-full">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 md:p-8 grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-6 grow">{product.description}</p>
                
                <div className="mb-8">
                  <ul className="space-y-2">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                         <Circle size={8} className="text-[#84cc16] mr-3 fill-[#84cc16]" />
                         {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={product.path}
                  className="inline-flex items-center justify-between w-full bg-gray-50 text-gray-900 border border-gray-200 font-bold py-3 px-5 rounded-xl hover:bg-[#84cc16] hover:border-[#84cc16] transition-colors duration-200 group"
                >
                  <span>View Details</span>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          FOOTER
          ───────────────────────────────────── */}
      <Footer />
    </div>
  );
}

export default ProductRange;
