import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Factory, Globe, Award, ShieldCheck, Activity, Droplets
} from 'lucide-react';
import Footer from '../../../components/Footer';
import footballCourtImg from '../../../assets/football court.avif';

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
  { icon: Factory, number: '4', label: 'Full-size fields', sub: 'Daily production' },
  { icon: Globe, number: '200+', label: 'FIFA Fields', sub: 'Certified & tested' },
  { icon: ShieldCheck, number: '7', label: 'Worldwide', sub: 'FIFA Preferred Producers' },
  { icon: Award, number: '#1', label: 'In Asia', sub: 'Only FIFA Preferred Producer' },
];

const layers = [
  {
    title: 'Fiber',
    subtitle: 'Synthetic grass blades · 365-day use',
    description: 'Our fiber appears and feels like natural grass, enabling players to slide, sprint, pass, and turn freely. Durable yarns deliver consistent performance all year round.',
  },
  {
    title: 'Backing',
    subtitle: 'Multi-layer woven · Superior drainage',
    description: 'Multi-layer woven fabric provides dimensional stability. A coating layer extends lifespan, while perforations ensure superior drainage and easy cleanup after use.',
  },
  {
    title: 'Infill',
    subtitle: 'SBR · EPDM · TPE · Cork · Coconut',
    description: 'The right infill is vital for safety and peak performance. We offer SBR, EPDM, TPE, Cork, and Coconut — each matched to your specific playing requirements.',
  },
  {
    title: 'Sub-Base',
    subtitle: 'Stable · Uniform · Foundational',
    description: 'A stable, uniform sub-base provides the structural foundation for long-term performance, consistent drainage, and surface stability under all conditions.',
  },
];

const metrics = [
  { label: 'Ball Roll', value: '4–8 m', desc: 'Optimal ball roll ensures the game flows naturally.', icon: Activity },
  { label: 'Vertical Rebound', value: '0.6–0.85', desc: 'Consistent, predictable bounce behaviour.', icon: ArrowRight },
  { label: 'Shock Absorption', value: '60–70%', desc: 'Reduces leg and ligament strain significantly.', icon: ShieldCheck },
  { label: 'Skin Friction', value: '0.35–0.75', desc: 'Allows slide tackles without dangerous abrasion.', icon: Droplets },
];

const clubs = [
  'Chelsea FC', 'Olympiacos CFP', 'FIFA U-15 World Cup', 'FIFA U-17 World Cup',
  'FIFA U-20 World Cup', '2015 Universiade Gwangju', '2017 Universiade Taipei', 'Homeless World Cup',
];

export default function FootballTurf() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [layersRef, layersVisible] = useScrollReveal();
  const [metricsRef, metricsVisible] = useScrollReveal();
  const [clubsRef, clubsVisible] = useScrollReveal();

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
              Football Turf Systems
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              The global leader in artificial football turf, offering rigorous, FIFA-certified systems that provide elite performance and safety all year round.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#84cc16]/10 text-[#84cc16] font-bold px-4 py-2 rounded-full text-sm">
                FIFA® Preferred Producer
              </span>
              <span className="bg-gray-100 text-gray-700 font-bold px-4 py-2 rounded-full text-sm">
                Only in Asia
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl border border-gray-100 group">
            <img
              src={footballCourtImg}
              alt="Football Turf System"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
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

      {/* LAYERS / ARCHITECTURE */}
      <section className="py-20 bg-white border-y border-gray-200 px-6 md:px-12 lg:px-24">
        <div 
          ref={layersRef}
          className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${layersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <SectionLabel>System Architecture</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Engineered Layer by Layer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our FIFA-certified turf system is meticulously engineered to ensure maximum safety, consistent drainage, and peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Diagram */}
            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-inner group">
              <div className="aspect-[4/3] relative flex items-center justify-center">
                <img
                  src="/diagram.png"
                  alt="Turf System Diagram"
                  className="w-full h-full object-contain scale-130 transition-transform duration-700 group-hover:scale-140"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>

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
            <SectionLabel>FIFA Compliance</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Performance Metrics</h2>
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

      {/* CLUBS / HERITAGE */}
      <section className="py-20 bg-white border-y border-gray-200 px-6 md:px-12 lg:px-24">
        <div 
          ref={clubsRef}
          className={`max-w-7xl mx-auto text-center transition-all duration-700 ease-out ${clubsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>Heritage</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Adopted by the World's Best</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our high-performance artificial grass is regularly used in FIFA's own youth world cups and international tournaments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clubs.map((club, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-full px-6 py-3 font-semibold text-gray-700">
                {club}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
