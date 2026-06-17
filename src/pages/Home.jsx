import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Hammer, Wrench } from 'lucide-react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// Asset imports
import footballTurf from '../assets/football turf.avif';
import tennisCourt from '../assets/tennis court.avif';
import basketballCourt from '../assets/basketball court.avif';
import hockeyCourt from '../assets/hocky court.avif';
import swimmingCourt from '../assets/swimming court.avif';
import footballCourt from '../assets/football court.avif';
import badmintonCourt from '../assets/batminton court.jpg';
import woodenCourt from '../assets/wooden court.avif';

import proj1 from '../assets/projects/Cricket_turf_baguiati.jpeg';
import proj2 from '../assets/projects/Football_turf_baguiati.jpeg';
import proj3 from '../assets/projects/PP_tiles_basketball_sudhir_memorial_institute.jpeg';
import proj4 from '../assets/projects/Play_turf_khidirpur.jpeg';
import proj5 from '../assets/projects/Rooftop_pickleball_court_prayagraj.jpeg';
import proj6 from '../assets/projects/multisports_turf_srirampur.jpeg';
import proj7 from '../assets/projects/pickleball&badminton_court_srirampur.jpeg';

const carouselImages = [proj1, proj2, proj3, proj4, proj5, proj6, proj7];

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const sports = [
  {
    name: 'Football Turf',
    desc: 'FIFA certified synthetic turf systems',
    image: footballTurf,
    path: '/indusive-sports/products/football-turf',
  },
  {
    name: 'Hockey Turf',
    desc: 'FIH approved artificial hockey surfaces',
    image: hockeyCourt,
    path: '/indusive-sports/products/hockey-turf',
  },
  {
    name: 'Tennis Court',
    desc: 'ITF certified acrylic court systems',
    image: tennisCourt,
    path: '/indusive-sports/products/tennis-turf',
  },
  {
    name: 'Badminton Court',
    desc: 'Professional indoor & outdoor courts',
    image: badmintonCourt,
    path: '/indusive-sports/products/badminton-court',
  },
  {
    name: 'Wooden Court',
    desc: 'Premium hardwood sports flooring',
    image: woodenCourt,
    path: '/indusive-sports/products/wooden-court',
  },
  {
    name: 'Multi-Sport',
    desc: 'Versatile multi-purpose playing fields',
    image: footballCourt,
    path: '/indusive-sports/products/multi-purpose-turf',
  },
];

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 20, suffix: '+', label: 'Cities Covered' },
  { value: 50, suffix: '+', label: 'Expert Team Members' },
  { value: 13, suffix: '+', label: 'Schools & Clubs' },
];

const pillars = [
  {
    icon: Compass,
    title: 'Design',
    desc: 'Expert planning and innovative design of sports facilities tailored to client needs and international standards.',
  },
  {
    icon: Hammer,
    title: 'Develop',
    desc: 'Complete turnkey construction of world-class sports infrastructure with FIFA, FIH and ITF certified materials.',
  },
  {
    icon: Wrench,
    title: 'Maintain',
    desc: 'Comprehensive maintenance services to ensure lasting performance, longevity and peak condition of your facility.',
  },
];

const partners = [
  { name: 'Bellin Turf', desc: 'Primary turf manufacturing partner' },
  { name: 'EPU Floor', desc: 'Polyurethane flooring systems' },
  { name: 'Stihl India', desc: 'Turf maintenance machinery' },
  { name: 'Pace Court', desc: 'Primary acrylic manufacturing partner' },
];

/* ═══════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */

function StatCounter({ target, suffix = '+', label }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#84cc16]" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {count}
        {suffix}
      </div>
      <div className="text-gray-500 text-xs md:text-sm mt-3 font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <span className="text-[#84cc16] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════ */

function Home() {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [productsRef, productsVisible] = useScrollReveal();
  const [pillarsRef, pillarsVisible] = useScrollReveal();
  const [partnersRef, partnersVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-white text-gray-900 font-sans">

      {/* ─────────────────────────────────────
          SECTION 1 — HERO
          ───────────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-[#08060d]">
        {carouselImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Light overlay to fade the background image for readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* ─────────────────────────────────────
          SECTION 2 — ABOUT
          ───────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-200">
        <div
          ref={aboutRef}
          className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ease-out ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text Content */}
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Building World-Class{' '}
              <br className="hidden md:inline" />
              Sports Infrastructure
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
              SPORTS-EDGE provides innovative sports surface systems which reduce
              leg, ligament and lower back strains and injuries. Based in Kolkata,
              India, we provide international standard surfaces for sports such as
              Cricket, Football, Tennis, Badminton, Pickleball, Volleyball, Basketball, Squash and many more.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We strive for superior customer satisfaction by recommending the most
              suitable surface as per client needs. We are seen as a knowledgeable
              solution provider for sports infrastructure in the sports industry — known for
              providing ground-breaking products combined with flawless execution.
            </p>

            {/* George Bernard Shaw Quote */}
            <blockquote className="border-l-4 border-[#84cc16] pl-6 py-2 mb-8 bg-white p-4 rounded-r-lg shadow-sm">
              <p className="text-gray-700 italic text-base leading-relaxed">
                "We don't stop playing because we grow old; we grow old because
                we stop playing."
              </p>
              <cite className="text-gray-500 text-sm mt-2 block not-italic font-bold">
                — George Bernard Shaw
              </cite>
            </blockquote>

            {/* Core Values */}
            <div className="flex flex-wrap gap-3">
              {['Quality', 'Longevity', 'Low Maintenance'].map((tag) => (
                <div
                  key={tag}
                  className="bg-white border border-gray-200 shadow-sm rounded-xl px-5 py-2.5"
                >
                  <span className="text-gray-900 font-bold text-sm">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-4xl overflow-hidden aspect-4/3 shadow-xl border border-gray-100">
            <img
              src={footballCourt}
              alt="Sports Infrastructure by SportsEdge"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 3 — SPORTS INFRASTRUCTURE
          ───────────────────────────────────── */}
      <section id="infrastructure" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={productsRef}
            className={`text-center mb-14 transition-all duration-700 ease-out ${
              productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <SectionLabel>Infrastructure</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Our Sports Infrastructure
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From synthetic turfs to acrylic courts, running tracks to swimming
              pools — we build it all.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport) => (
              <Link
                key={sport.name}
                to={sport.path}
                className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-gray-100 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                    {sport.name}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    {sport.desc}
                  </p>
                </div>
                {/* Hover arrow */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight size={18} className="text-gray-900 stroke-[2.5]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 4 — STATS
          ───────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 5 — WHAT WE DO
          ───────────────────────────────────── */}
      <section id="what-we-do" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={pillarsRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              End-to-End Sports Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From concept to completion and beyond — we handle every phase of
              your sports facility project.
            </p>
          </div>

          {/* Three Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-gray-50 border border-gray-200 rounded-4xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8">
                    <Icon size={32} className="text-[#84cc16]" />
                  </div>
                  <h3 className="text-gray-900 text-2xl font-bold mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 6 — PARTNERS
          ───────────────────────────────────── */}
      <section id="partners" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={partnersRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <SectionLabel>Our Partners</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Trusted Brand Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We partner with world-leading manufacturers to bring you the best
              in sports infrastructure.
            </p>
          </div>

          {/* Partner Cards */}
          <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-gray-900 font-bold text-base md:text-lg mb-2">
                  {partner.name}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 7 — CTA BANNER
          ───────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[#84cc16]">
        <div
          ref={ctaRef}
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ease-out ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#08060d] leading-tight mb-6">
            Ready to Build Your Dream{' '}
            <br className="hidden md:inline" />
            Sports Facility?
          </h2>
          <p className="text-[#08060d]/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            From design and consultation to construction and maintenance — let's
            create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#08060d] text-[#bef264] font-bold py-4 px-8 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} className="stroke-[2.5]" />
            </Link>
            <Link
              to="/indusive-sports/product-range"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#08060d] font-bold py-4 px-8 rounded-full hover:bg-black/5 transition-all duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 8 — FOOTER
          ───────────────────────────────────── */}
      <Footer />
    </div>
  );
}

export default Home;
