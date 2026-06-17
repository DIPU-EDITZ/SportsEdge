import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Factory, Globe, Award, ShieldCheck, Activity, Droplets
} from 'lucide-react';
import Footer from '../../../components/Footer';
import ppTilesImg from '../../../assets/PP tiles court.avif';

// Use same hook as Home for appearing animations
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

function SectionLabel({ children }) {
  return (
    <span className="text-[#84cc16] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
      {children}
    </span>
  );
}

const stats = [
  { icon: Factory, number: '200+', label: 'Courts Built', sub: 'PP Modular systems' },
  { icon: Globe, number: 'All', label: 'Weather', sub: 'UV stable copolymer' },
  { icon: ShieldCheck, number: '15yr', label: 'Life Span', sub: 'Highly durable' },
  { icon: Award, number: '1 Day', label: 'Installation', sub: 'Fast snap-lock' },
];

const layers = [
  {
    title: 'Wear Surface',
    subtitle: 'High-impact Copolymer · Anti-skid',
    description: 'The top surface features a micro-textured grid pattern that provides exceptional grip for athletes while allowing immediate water drainage.',
  },
  {
    title: 'Suspended Design',
    subtitle: 'Conical support posts · Air gap',
    description: 'Hundreds of conical posts underneath create a suspended air gap, ensuring consistent shock absorption and rapid airflow for moisture evaporation.',
  },
  {
    title: 'Locking System',
    subtitle: 'Interlocking snap-locks · Seamless',
    description: 'A specialized 32-latch locking system ensures a perfectly seamless connection between tiles, preventing shifting or buckling during high-intensity play.',
  },
  {
    title: 'Flex Joints',
    subtitle: 'Integrated expansion joints · Thermal stability',
    description: 'Built-in leaf-spring joints allow the modular floor to expand and contract naturally with temperature changes, maintaining a flat surface in all climates.',
  },
];

const metrics = [
  { label: 'Drainage Rate', value: 'Instant', desc: 'Perforated grid for all-weather playability.', icon: Droplets },
  { label: 'Shock Absorption', value: '30%+', desc: 'Suspended structure protects joints from impact.', icon: ShieldCheck },
  { label: 'Temperature Range', value: '-45°C to 135°C', desc: 'Maintains integrity in extreme weather conditions.', icon: Activity },
  { label: 'Load Capacity', value: '250+ PSI', desc: 'High-strength material supports heavy equipment.', icon: ArrowRight },
];

export default function PPTilesCourt() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [layersRef, layersVisible] = useScrollReveal();
  const [metricsRef, metricsVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      {/* HEADER / HERO */}
      <section className="bg-white border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24">
        <div 
          ref={heroRef}
          className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Text Content */}
          <div className="text-left">
            <Link
              to="/indusive-sports/product-range"
              className="inline-flex items-center gap-2 text-[#84cc16] hover:text-[#65a30d] font-bold text-sm tracking-wider uppercase mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              PP Interlocking Tiles
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              The ultimate modular flooring solution for outdoor and indoor multi-sport courts. Engineered for rapid drainage, player safety, and extreme durability in all weather conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#84cc16]/10 text-[#84cc16] font-bold px-4 py-2 rounded-full text-sm">
                Self-Draining
              </span>
              <span className="bg-gray-100 text-gray-700 font-bold px-4 py-2 rounded-full text-sm">
                Low Maintenance
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-4xl overflow-hidden aspect-4/3 shadow-xl border border-gray-100 group">
            <img
              src={ppTilesImg}
              alt="PP Interlocking Tiles Court"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div 
          ref={statsRef}
          className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ease-out delay-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-[#84cc16]" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{s.number}</div>
                <div className="text-sm font-bold text-gray-900 mb-1">{s.label}</div>
                <div className="text-xs text-gray-500">{s.sub}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* TECHNOLOGY / ARCHITECTURE */}
      <section className="py-20 bg-white border-y border-gray-200 px-6 md:px-12 lg:px-24">
        <div 
          ref={layersRef}
          className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${layersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <SectionLabel>Modular Engineering</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Designed for Performance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our PP tiles combine high-grade polymers with advanced structural design to deliver a surface that excels in both safety and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Layer Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {layers.map((layer, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#84cc16] transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 font-black text-sm flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-none">{layer.title}</h3>
                      <p className="text-xs text-[#84cc16] font-semibold mt-1 uppercase tracking-wider">{layer.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-4xl p-8 md:p-12 shadow-inner group flex items-center justify-center">
               <div className="text-center">
                  <Droplets size={48} className="text-[#84cc16] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Fast Drainage</h3>
                  <p className="text-gray-500 text-sm">Playable minutes after heavy rain.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div 
          ref={metricsRef}
          className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <SectionLabel>Technical Standards</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Key Performance Metrics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow text-center">
                  <Icon size={32} className="mx-auto text-[#84cc16] mb-4" />
                  <div className="text-2xl font-black text-gray-900 mb-2">{m.value}</div>
                  <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">{m.label}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
