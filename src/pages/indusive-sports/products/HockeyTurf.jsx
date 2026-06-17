import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle2, Globe, Award, ShieldCheck, Activity, Star, Zap
} from 'lucide-react';
import Footer from '../../../components/Footer';
import hockyCourtImg from '../../../assets/hocky court.avif';

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
  { icon: Award, number: '8', label: 'Years', sub: 'FIH Certified Manufacturer' },
  { icon: Globe, number: 'Top 10', label: 'Worldwide', sub: 'FIH Preferred Suppliers' },
  { icon: ShieldCheck, number: '#1', label: 'In Asia', sub: 'Only FIH Preferred Supplier' },
  { icon: Activity, number: 'Tier 1', label: 'Certified', sub: 'Olympic Games & World Cup' },
];

const whyChooseUs = [
  "Full control of manufacture, installation and maintenance",
  "Quality assurance system for both products and fields",
  "FIH accredited laboratory testing",
  "FIH Quality Programme",
  "Continuous hockey turf manufacturing and innovation",
  "Professional consultation service & field design",
  "Full back up service, including extensive warranties and maintenance guidance"
];

const fastProFeatures = [
  "100% PE curly monofilament",
  "Player friendly with unsurpassed comfort",
  "Extreme UV stability and durability",
  "Optimum ball/surface interaction",
  "Dense stitch for compact appearance",
  "Smooth surface for great playability",
  "Aesthetic color innovation"
];

const fields = [
  { level: 'Global Elite', desc: 'FIH Tier 1 competitions' },
  { level: 'Global', desc: 'International and top level national competitions' },
  { level: 'National', desc: 'National, regional and community hockey' },
  { level: 'Multi-sport', desc: 'Community and development level hockey' }
];

const products = [
  { level: 'Global', desc: 'Non-filled "wet" hockey turf used for international and top level national competitions' },
  { level: 'National', desc: 'Sand dressed or sand filled turf for high level club/college play' },
  { level: 'Multi-sport', desc: 'Sand dressed or sand filled synthetic turf or textile surfaces for and on which basic community multi-sport play' }
];

const metricsTable = [
  { property: 'Ball Rebound', global: '100mm-400mm', national: '100mm-425mm' },
  { property: 'Ball Roll', global: '≥10m', national: '≥9m' },
  { property: 'Ball Roll Deviation', global: '@9.5m≤0.5m', national: '@8.5m≤0.45m' },
  { property: 'Shock Absorption', global: '45-60%', national: '40-65%' },
  { property: 'Vertical Deformation', global: '4mm-9mm', national: '4mm-9mm' },
  { property: 'Shoe/Surface Friction', global: '25Nm-45Nm', national: '25Nm-45Nm' }
];

export default function HockeyTurf() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [certRef, certVisible] = useScrollReveal();
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
              Hockey Turf Systems
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
              We are an FIH Preferred Supplier and FIH Certified Manufacturer for 8 years. The International Hockey Federation (FIH) divides hockey fields into global elite level, global level, national level, and multi-level. We offer systems for all applications from international matches to junior training.
            </p>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              As an FIH preferred supplier, our hockey systems meet all FIH standards, including but not limited to ball roll, ball rebound, and impact response. Our global level system is certified for FIH Tier 1 competitions such as Olympic Games and the World Cup.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#84cc16]/10 text-[#84cc16] font-bold px-4 py-2 rounded-full text-sm">
                FIH® Preferred Supplier
              </span>
              <span className="bg-gray-100 text-gray-700 font-bold px-4 py-2 rounded-full text-sm">
                Only in Asia
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-4xl overflow-hidden aspect-4/3 shadow-xl border border-gray-100 group">
            <img
              src={hockyCourtImg}
              alt="Hockey Turf System"
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

      {/* WHY CHOOSE & FASTPRO FEATURES */}
      <section className="py-20 bg-white border-y border-gray-200 px-6 md:px-12 lg:px-24">
        <div 
          ref={featuresRef}
          className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700 ease-out ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Why Choose Us */}
          <div>
            <SectionLabel>Advantage</SectionLabel>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Choose an FIH Preferred Producer?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              FIH Certified Manufacturers are companies that specialise in the manufacturing of hockey turf and provide a one-step shop solution for building hockey fields to the standards the game requires, operate quality management systems to ensure consistency in their products and provide comprehensive maintenance advice.
            </p>
            <ul className="space-y-4">
              {whyChooseUs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#84cc16] mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FastPro HF Series */}
          <div className="bg-gray-50 rounded-4xl p-8 md:p-12 border border-gray-200 shadow-inner">
            <SectionLabel>Flagship Product</SectionLabel>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">FastPro HF Series</h2>
            <ul className="space-y-6">
              {fastProFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#84cc16]/10 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-[#84cc16]" />
                  </div>
                  <span className="font-semibold text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FIH CERTIFIED FIELDS & PRODUCTS */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div 
          ref={certRef}
          className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <SectionLabel>Certifications</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">FIH Hockey Certified Systems</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systems meet all FIH standards. The International Hockey Federation divides hockey fields into various levels to suit different applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Fields */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Star className="text-[#84cc16]" /> Certified Fields
              </h3>
              <div className="space-y-4">
                {fields.map((f, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="sm:w-1/3">
                      <span className="inline-block px-4 py-1.5 bg-[#84cc16] text-white font-bold rounded-lg text-sm">
                        {f.level}
                      </span>
                    </div>
                    <div className="sm:w-2/3 text-gray-600 text-sm font-medium">
                      {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Award className="text-[#84cc16]" /> Certified Products
              </h3>
              <div className="space-y-4">
                {products.map((p, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
                    <div className="sm:w-1/3">
                      <span className="inline-block px-4 py-1.5 bg-gray-900 text-white font-bold rounded-lg text-sm">
                        {p.level}
                      </span>
                    </div>
                    <div className="sm:w-2/3 text-gray-600 text-sm font-medium leading-relaxed">
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS TABLE */}
      <section className="py-20 bg-white border-y border-gray-200 px-6 md:px-12 lg:px-24">
        <div 
          ref={metricsRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <SectionLabel>Specifications</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Turf Properties & Standards</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm border-b border-gray-700">Property</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm border-b border-gray-700">Global</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm border-b border-gray-700">National</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {metricsTable.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-0">
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.property}</td>
                    <td className="py-4 px-6 text-gray-600">{row.global}</td>
                    <td className="py-4 px-6 text-gray-600">{row.national}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
