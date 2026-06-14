import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown,
  Globe, Award, Factory, ShieldCheck, Activity, Droplets,
} from 'lucide-react';
import Footer from '../../../components/Footer';

/* ─────────────────────────────────────────────────────────────────
   Small reusable pieces
──────────────────────────────────────────────────────────────────── */

function Pill({ children, accent = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full border ${
        accent
          ? 'bg-[#84cc16]/15 border-[#84cc16]/40 text-[#84cc16]'
          : 'bg-gray-100 border-gray-200 text-gray-700'
      }`}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#84cc16] mb-3">
      <span className="w-8 h-px bg-[#84cc16]/50 rounded-full" />
      {children}
    </p>
  );
}

function LayerCard({ index, title, subtitle, description, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left relative overflow-hidden border rounded-2xl transition-all duration-300 ${
        active
          ? 'border-[#84cc16]/40 bg-[#84cc16]/5'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      {active && (
        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#84cc16] rounded-l-2xl" />
      )}
      <div className="px-5 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span
            className={`w-10 h-10 rounded-xl text-sm font-black flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
              active
                ? 'bg-[#84cc16] text-white'
                : 'bg-gray-50 text-gray-400 border border-gray-200'
            }`}
          >
            {String(index).padStart(2, '0')}
          </span>
          <div>
            <p className={`font-semibold text-sm ${active ? 'text-gray-900' : 'text-gray-700'}`}>{title}</p>
            <p className="text-[#84cc16] text-[10px] tracking-widest uppercase mt-0.5">{subtitle}</p>
          </div>
        </div>
        <ChevronDown
          size={15}
          className={`flex-shrink-0 transition-transform duration-300 ${active ? 'rotate-180 text-[#84cc16]' : 'text-gray-400'}`}
        />
      </div>
      <div className={`grid transition-all duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed pl-[3.75rem]">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
──────────────────────────────────────────────────────────────────── */

export default function FootballTurf() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: 'Fiber',
      subtitle: 'Synthetic grass blades · 365-day use',
      description:
        'Our fiber appears and feels like natural grass, enabling players to slide, sprint, pass, and turn freely. Durable yarns deliver consistent performance all year round.',
    },
    {
      title: 'Backing',
      subtitle: 'Multi-layer woven · Superior drainage',
      description:
        'Multi-layer woven fabric provides dimensional stability. A coating layer extends lifespan, while perforations ensure superior drainage and easy cleanup after use.',
    },
    {
      title: 'Infill',
      subtitle: 'SBR · EPDM · TPE · Cork · Coconut',
      description:
        'The right infill is vital for safety and peak performance. We offer SBR, EPDM, TPE, Cork, and Coconut — each matched to your specific playing requirements.',
    },
    {
      title: 'Sub-Base',
      subtitle: 'Stable · Uniform · Foundational',
      description:
        'A stable, uniform sub-base provides the structural foundation for long-term performance, consistent drainage, and surface stability under all conditions.',
    },
  ];

  const clubs = [
    'Chelsea FC', 'Olympiacos CFP',
    'FIFA U-15 World Cup', 'FIFA U-17 World Cup',
    'FIFA U-20 World Cup', '2015 Universiade Gwangju',
    '2017 Universiade Taipei', 'Homeless World Cup',
  ];

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ════════════════════════════════════════════════════════
          HERO  — fixed background image, doesn't scroll, no overlays
      ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end pb-12 overflow-hidden">

        {/* Fixed background */}
        <div
          className="absolute inset-0 bg-[url('/football-turf-bg.avif')] bg-cover bg-center bg-fixed"
        />

        {/* Content sits above background inside clean light glassmorphic containers */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

            {/* Left — headline area */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between">
              <div>
                {/* Breadcrumb */}
                <Link
                  to="/indusive-sports/product-range"
                  className="group inline-flex items-center gap-2 text-gray-500 hover:text-gray-955 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 mb-8"
                >
                  <ArrowLeft size={12} className="text-[#84cc16] group-hover:-translate-x-0.5 transition-transform duration-200" />
                  Indusive Sports / Products
                </Link>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Pill accent>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] animate-pulse" />
                    FIFA&#174; Preferred Producer
                  </Pill>
                  <Pill>Only in Asia</Pill>
                  <Pill>200+ FIFA Fields</Pill>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gray-900">
                  Football<br />
                  <span className="text-[#84cc16]">Turf Systems</span>
                </h1>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mb-10">
                  Our partner is the <span className="text-gray-900 font-bold">global leader</span> in
                  manufacturing and innovation of Artificial Football Turf — producing more soccer fields
                  than any other global manufacturer, with the widest choice of rigorously tested systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-[#84cc16] text-[#08060d] font-bold py-3 pl-6 pr-2.5 rounded-full hover:bg-[#bef264] transition-all duration-200 shadow-lg"
                >
                  <span className="text-xs tracking-wider uppercase">Get a Quote</span>
                  <div className="bg-[#08060d] text-[#bef264] p-2 rounded-full group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </Link>
                <a
                  href="#system"
                  className="group inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-250 border border-gray-200 text-gray-900 font-bold py-3 pl-6 pr-2.5 rounded-full duration-200"
                >
                  <span className="text-xs tracking-wider uppercase">View System</span>
                  <div className="bg-gray-200 p-2 rounded-full group-hover:translate-y-1 transition-transform duration-200">
                    <ChevronDown size={14} className="stroke-[2.5]" />
                  </div>
                </a>
              </div>
            </div>

            {/* Right — info card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-[2rem] p-6 shadow-2xl flex flex-col justify-between">
                <div>
                  {/* FIFA circular badge */}
                  <div className="flex justify-center mb-5">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 rounded-full bg-[#84cc16]/10 blur-[20px]" />
                      <div className="relative w-28 h-28 rounded-full border-2 border-[#84cc16]/40 bg-white/95 flex flex-col items-center justify-center overflow-hidden shadow-sm">
                        <span className="text-[#84cc16] font-black text-2xl tracking-widest leading-none">FIFA</span>
                        <span className="text-gray-400 text-[8px] tracking-[0.3em] uppercase mt-0.5">Quality</span>
                        <div className="bg-[#84cc16] text-[#08060d] px-2.5 py-0.5 rounded-sm mt-1">
                          <span className="block text-[7px] tracking-[0.15em] font-black uppercase leading-tight">Preferred</span>
                          <span className="block text-[7px] tracking-[0.15em] font-black uppercase leading-tight text-center">Producer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-gray-250 mb-5" />

                  <div className="flex flex-col gap-3 mb-5">
                    {[
                      { icon: <Factory size={13} />, text: '4 full-size fields produced daily' },
                      { icon: <Globe size={13} />, text: 'Global leader in artificial football turf' },
                      { icon: <Award size={13} />, text: 'One of only 7 FIFA Preferred Producers' },
                      { icon: <ShieldCheck size={13} />, text: 'Only FIFA Preferred Producer in Asia' },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[#84cc16] flex-shrink-0">{f.icon}</span>
                        <span className="text-gray-600 text-xs font-medium">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-150 rounded-2xl p-4">
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase text-center mb-1">Programme introduced</p>
                  <p className="text-[#84cc16] font-black text-3xl text-center">2009</p>
                  <p className="text-gray-500 text-[10px] text-center mt-1">FIFA Preferred Producer Initiative</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          STATS ROW
      ──────────────────────────────────────── */}
      <section className="py-14 px-6 md:px-12 lg:px-24 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Factory size={20} />, number: '4', label: 'Full-size fields', sub: 'Daily production' },
            { icon: <Globe size={20} />, number: '200+', label: 'FIFA Fields', sub: 'Certified & tested' },
            { icon: <ShieldCheck size={20} />, number: '7', label: 'Worldwide', sub: 'FIFA Preferred Producers' },
            { icon: <Award size={20} />, number: '#1', label: 'In Asia', sub: 'Only FIFA Preferred Producer' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-2xl px-5 py-6 flex flex-col gap-3 hover:border-[#84cc16]/40 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-[#84cc16]/80 group-hover:text-[#84cc16] transition-colors">{s.icon}</span>
              <div>
                <p className="text-3xl md:text-4xl font-black text-gray-900 leading-none">{s.number}</p>
                <p className="text-[#84cc16] font-semibold text-sm mt-1">{s.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          HERITAGE / STORY
      ──────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-5">
            <SectionLabel>Heritage</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-5 text-gray-900">
              Adopted by the World's Best
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Our high-performance artificial grass has been adopted by top clubs including
              championship-winning <span className="text-gray-900 font-semibold">Chelsea FC</span> and{' '}
              <span className="text-gray-900 font-semibold">Olympiacos CFP</span>, and is regularly used
              in FIFA's own youth world cups and international tournaments.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-[#84cc16]/50 pl-4 py-1">
              The FIFA Preferred Producer initiative was introduced in 2009 to protect consumer
              interests and ensure stringent auditing of production quality, safety, and installation.
            </p>
          </div>

          {/* Right — clubs */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 border border-gray-255 rounded-[2rem] p-7 md:p-9 relative overflow-hidden">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-5">
                Clubs &amp; Tournaments
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {clubs.map((club) => (
                  <div
                    key={club}
                    className="flex items-center gap-3 bg-white border border-gray-150 rounded-xl px-4 py-3 hover:border-[#84cc16]/40 hover:bg-[#84cc16]/5 transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]/40 group-hover:bg-[#84cc16] transition-colors flex-shrink-0" />
                    <span className="text-gray-650 group-hover:text-gray-900 text-sm font-medium">{club}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SYSTEM LAYERS — diagram + accordion
      ──────────────────────────────────────── */}
      <section id="system" className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>System Architecture</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-gray-900">
              Engineered Layer by Layer
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

            {/* Diagram */}
            <div className="group relative">
              <div className="relative bg-white border border-gray-200 rounded-3xl p-5 overflow-hidden shadow-sm">
                <div className="absolute top-4 right-5 text-gray-450 font-mono text-[10px] tracking-widest">
                  Cross-Section · Fig 1.0
                </div>
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden flex items-center justify-center">
                  <img
                    src="/diagram.png"
                    alt="Turf system cross-section"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 text-sm leading-relaxed mb-2 font-medium">
                Click each layer to learn more about the materials and engineering
                behind our FIFA-certified turf system.
              </p>
              {layers.map((layer, idx) => (
                <LayerCard
                  key={layer.title}
                  index={idx + 1}
                  title={layer.title}
                  subtitle={layer.subtitle}
                  description={layer.description}
                  active={activeLayer === idx}
                  onClick={() => setActiveLayer(activeLayer === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          PERFORMANCE METRICS — clean 3-col bento
      ──────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-250">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>FIFA Compliance</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-gray-900">Quality Where It Matters</h2>
            <p className="text-gray-500 text-sm max-w-lg">
              Our systems excel in all FIFA performance tests. Over 200 fields have been
              tested and confirmed fully compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Ball Roll — wide */}
            <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-7 md:p-9 hover:border-[#84cc16]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-7 md:items-center relative z-10">
                <div className="flex-shrink-0 min-w-[130px]">
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold mb-1.5">Ball Roll</p>
                  <p className="text-[#84cc16] font-black text-4xl leading-none font-mono">4–8 m</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Optimal ball roll ensures the game flows naturally — calibrated to mimic the
                    exact resistance of elite natural grass for precision passing.
                  </p>
                  <div className="mt-4 w-full h-1.5 bg-gray-250 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-[#84cc16] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Rebound */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7 hover:border-[#84cc16]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold mb-1.5">Vertical Rebound</p>
                <p className="text-[#84cc16] font-black text-4xl leading-none font-mono mb-4">0.6–0.85</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Tested to strict FIFA standards, ensuring consistent, predictable
                  bounce behaviour professionals rely on.
                </p>
                <div className="mt-5 h-16 bg-white border border-gray-150 rounded-xl flex items-end justify-center pb-3">
                  <div className="w-4 h-4 rounded-full bg-[#84cc16] animate-bounce" />
                </div>
              </div>
            </div>

            {/* Shock Absorption */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7 hover:border-[#84cc16]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold mb-1.5">Shock Absorption</p>
                <p className="text-[#84cc16] font-black text-4xl leading-none font-mono mb-4">60–70%</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Significantly reduces leg, ligament, and lower back strain during
                  high-impact play — protecting every player.
                </p>
                <div className="mt-5 h-16 bg-white border border-gray-150 rounded-xl flex items-center justify-center">
                  <ShieldCheck size={30} className="text-[#84cc16]/50" />
                </div>
              </div>
            </div>

            {/* Skin Friction — wide */}
            <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-7 md:p-9 hover:border-[#84cc16]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-7 md:items-center relative z-10">
                <div className="hidden md:flex w-20 h-20 flex-shrink-0 rounded-2xl bg-white border border-gray-150 items-center justify-center">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-[#84cc16]/20" />
                    <span className="absolute inset-1 rounded-full border border-dashed border-[#84cc16]/35 animate-spin" style={{ animationDuration: '7s' }} />
                    <Droplets size={18} className="text-[#84cc16]" />
                  </div>
                </div>
                <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />
                <div className="flex-shrink-0 min-w-[140px]">
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold mb-1.5">Skin Friction</p>
                  <p className="text-[#84cc16] font-black text-4xl leading-none font-mono">0.35–0.75</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />
                <p className="text-gray-650 text-sm leading-relaxed flex-1">
                  Advanced fiber technology delivers a smooth, skin-friendly surface
                  that allows slide tackles without dangerous abrasion.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          WHY FIFA PREFERRED PRODUCER
      ──────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-[2rem] p-9 md:p-14 shadow-sm relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left */}
              <div>
                <SectionLabel>The FIFA Advantage</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-4 text-gray-900">
                  Why Choose a FIFA&#174;<br />Preferred Producer?
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Certification is granted only after full compliance with all stringent FIFA
                  audit requirements — covering production, quality control, safety, supply chain,
                  and installation expertise.
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    'Highest quality & excellent performance guarantee',
                    'Fully compliant with FIFA Quality Programme',
                    'Factory Audits by independent FIFA-approved inspectors',
                    'Professional support for design, installation & maintenance',
                    'Eligible for FIFA Quality or FIFA Quality Pro Certification',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#84cc16]/10 border border-[#84cc16]/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={11} className="text-[#84cc16]" />
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: '200+', label: 'FIFA Fields' },
                    { val: '365', label: 'Days / Year' },
                    { val: '2009', label: 'Since' },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
                      <p className="text-[#84cc16] font-black text-2xl">{s.val}</p>
                      <p className="text-gray-400 text-[10px] mt-1 font-bold">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 border border-gray-250 rounded-2xl p-5">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
                    Available Infill Materials
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['SBR', 'EPDM', 'TPE', 'Cork', 'Coconut'].map((m) => (
                      <span
                        key={m}
                        className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-mono hover:border-[#84cc16]/40 hover:text-[#84cc16] hover:bg-[#84cc16]/5 transition-all duration-200 cursor-default"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-255 rounded-2xl p-5">
                  <p className="text-gray-400 text-xs mb-2 font-bold">FIFA Quality Programme</p>
                  <p className="text-gray-650 text-sm leading-relaxed">
                    An installed pitch with our system is eligible for the FIFA Quality or
                    FIFA Quality Pro mark — the gold standard in global football infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          CTA BANNER (contrasting dark block for focus)
      ──────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#08060d] border border-gray-850 rounded-[2rem] p-10 md:p-16 text-center overflow-hidden shadow-xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[#84cc16]/5 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
                Build Your FIFA&#174; Standard Field
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
                From amateur grounds to international stadiums — we deliver the finest football
                turf installations with highly skilled technicians and the best equipment available.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-[#84cc16] text-[#08060d] font-bold py-3 pl-7 pr-3 rounded-full hover:scale-105 active:scale-95 duration-200 text-sm shadow-lg shadow-[#84cc16]/10"
                >
                  Contact Us Today
                  <div className="bg-[#08060d] text-[#bef264] p-2 rounded-full group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </Link>
                <Link
                  to="/indusive-sports/product-range"
                  className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white font-semibold py-3 pl-7 pr-3 rounded-full hover:bg-white/10 duration-200 text-sm"
                >
                  View All Products
                  <div className="bg-[#84cc16] text-[#08060d] p-2 rounded-full group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
