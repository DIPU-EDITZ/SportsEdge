import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown,
  Globe, Award, Factory, ShieldCheck, Activity, Droplets,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────
   REUSABLE SUB-COMPONENTS
──────────────────────────────────────────────────────────────────── */

function SectionBadge({ children, accent = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full border ${
        accent
          ? 'bg-[#bef264]/10 border-[#bef264]/30 text-[#bef264]'
          : 'bg-white/5 border-white/10 text-white/60'
      }`}
    >
      {children}
    </span>
  );
}

function LayerCard({ index, title, subtitle, description, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left relative overflow-hidden border rounded-2xl transition-all duration-300 ${
        active
          ? 'border-[#bef264]/40 bg-[#bef264]/5 shadow-[0_0_24px_rgba(190,242,100,0.07)]'
          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
      }`}
    >
      {active && (
        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#bef264] rounded-l-2xl shadow-[0_0_10px_#bef264]" />
      )}
      <div className="px-6 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <span
            className={`w-11 h-11 rounded-xl text-base font-black flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
              active
                ? 'bg-[#bef264] text-[#08060d] shadow-[0_0_16px_rgba(190,242,100,0.4)]'
                : 'bg-white/5 text-white/40 border border-white/10'
            }`}
          >
            {String(index).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <p className={`font-bold text-base leading-tight ${active ? 'text-white' : 'text-white/80'}`}>
              {title}
            </p>
            <p className="text-[#bef264] text-[10px] font-bold tracking-widest uppercase mt-0.5 truncate">
              {subtitle}
            </p>
          </div>
        </div>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 transition-transform duration-300 ${active ? 'rotate-180 text-[#bef264]' : 'text-white/30'}`}
        />
      </div>
      <div className={`grid transition-all duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pt-0 text-sm text-white/55 leading-relaxed pl-[4.5rem]">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}

function FifaBadge() {
  return (
    <div className="relative select-none">
      <div className="absolute inset-0 rounded-full bg-[#bef264]/20 blur-[50px] animate-pulse pointer-events-none" />
      <div className="relative w-44 h-44 rounded-full border-2 border-[#bef264]/50 bg-[#0b0c10] flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] overflow-hidden">
        <span className="absolute inset-2 rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: '60s' }} />
        <span className="absolute inset-4 rounded-full border border-[#bef264]/25" />
        <div className="relative z-10 flex flex-col items-center gap-0.5">
          <span className="text-[#bef264] font-black text-4xl tracking-widest leading-none drop-shadow-[0_0_12px_rgba(190,242,100,0.5)]">
            FIFA
          </span>
          <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-bold">Quality</span>
          <div className="w-12 h-px bg-[#bef264]/40 my-1" />
          <div className="bg-[#bef264] text-[#08060d] px-3 py-1 rounded-sm">
            <span className="block text-[8px] tracking-[0.18em] font-black uppercase leading-tight">Preferred</span>
            <span className="block text-[8px] tracking-[0.18em] font-black uppercase leading-tight text-center">Producer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE COMPONENT
──────────────────────────────────────────────────────────────────── */

export default function FootballTurf() {
  const [scrollY, setScrollY] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const layers = [
    {
      title: 'Fiber',
      subtitle: 'Synthetic grass blades · 365-day use',
      description:
        'Our fiber appears and feels like natural grass, enabling players to slide, sprint, pass, and turn freely. Durable yarns deliver consistent performance 365 days a year.',
    },
    {
      title: 'Backing',
      subtitle: 'Multi-layer woven · Superior drainage',
      description:
        'Multi-layer woven fabric provides dimensional stability. A coating layer extends lifespan while perforations ensure superior drainage and easy cleanup.',
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

  const whyChoose = [
    'Highest quality & excellent performance guarantee',
    'Fully compliant with FIFA Quality Programme',
    'Rigorous Factory Audits by independent FIFA inspectors',
    'Professional support for design, installation & maintenance',
    'Installed pitch eligible for FIFA Quality or Quality Pro Certification',
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col pt-20 bg-[#08060d] text-white font-sans overflow-x-hidden antialiased">
      {/* Subtle overlays matching Home.jsx */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08060d]/40 to-transparent pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12 lg:px-24 py-12 overflow-hidden">

        {/* BG glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(190,242,100,0.07) 0%, transparent 70%)',
              transform: `translateY(${scrollY * 0.18}px)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Breadcrumb */}
            <Link
              to="/indusive-sports/product-range"
              className="group inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={13} className="text-[#bef264] group-hover:-translate-x-0.5 transition-transform duration-200" />
              Indusive Sports / Products
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-6 justify-center lg:justify-start">
              <SectionBadge accent>
                <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse" />
                FIFA Preferred Producer
              </SectionBadge>
              <SectionBadge>Only in Asia</SectionBadge>
              <SectionBadge>200+ FIFA Fields</SectionBadge>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8 select-none">
              Football <span className="text-[#bef264] drop-shadow-[0_2px_8px_rgba(190,242,100,0.3)]">Turf</span>
              <br />
              <span className="text-white/25 text-3xl md:text-4xl lg:text-5xl font-semibold">Systems</span>
            </h1>

            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mb-10">
              Our partner is the <span className="text-white font-semibold">global leader</span> in manufacturing
              and innovation of Artificial Football Turf — producing more soccer fields than any other global
              manufacturer, with the widest choice of rigorously tested systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-[#bef264] text-[#08060d] font-bold py-2.5 pl-6 pr-2.5 rounded-full hover:scale-105 active:scale-95 duration-200 shadow-xl"
              >
                <span className="text-sm md:text-base tracking-wide">Get a Quote</span>
                <div className="bg-[#08060d] text-[#bef264] p-2 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </div>
              </Link>
              <a
                href="#system"
                className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white font-semibold py-2.5 pl-6 pr-2.5 rounded-full hover:bg-white/10 duration-200"
              >
                <span className="text-sm md:text-base tracking-wide">Explore System</span>
                <div className="bg-white/10 p-2 rounded-full transition-transform group-hover:translate-y-1 duration-200">
                  <ChevronDown size={14} className="stroke-[2.5]" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Information Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[480px] lg:max-w-[440px] xl:max-w-[480px] bg-white/[0.07] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 shadow-2xl flex flex-col gap-8">

              {/* FIFA Badge */}
              <div className="flex justify-center">
                <FifaBadge />
              </div>

              {/* Key facts */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Factory size={14} />, text: '4 full-size fields produced daily' },
                  { icon: <Globe size={14} />, text: 'Global leader in artificial football turf' },
                  { icon: <Award size={14} />, text: 'One of only 7 FIFA Preferred Producers worldwide' },
                  { icon: <ShieldCheck size={14} />, text: 'The only FIFA Preferred Producer in Asia' },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#bef264] flex-shrink-0 mt-0.5">{f.icon}</span>
                    <span className="text-white/70 text-sm leading-tight">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Inner Dark Card */}
              <div className="bg-[#0b0c10]/80 border border-white/[0.06] rounded-3xl p-5 shadow-inner">
                <h3 className="text-white text-base md:text-lg font-semibold text-center mb-1 tracking-wide">
                  FIFA Quality
                </h3>
                <p className="text-white/40 text-[10px] text-center mb-6 uppercase tracking-[0.2em]">Preferred Producer</p>
                
                <div className="flex flex-col gap-3.5">
                  <Link
                    to="/contact"
                    className="group flex items-center justify-between bg-[#bef264] text-[#08060d] font-bold py-3 px-6 rounded-full hover:bg-opacity-95 transition-all shadow-md active:scale-[0.98] duration-150"
                  >
                    <span className="text-sm">Request a Quote</span>
                    <div className="bg-[#08060d] text-[#bef264] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                      <ArrowRight size={14} className="stroke-[2.5]" />
                    </div>
                  </Link>
                  <a
                    href="#system"
                    className="group flex items-center justify-between bg-black text-white border border-white/10 font-bold py-3 px-6 rounded-full hover:bg-white/5 transition-all shadow-md active:scale-[0.98] duration-150"
                  >
                    <span className="text-sm">View System Layers</span>
                    <div className="bg-[#bef264] text-[#08060d] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                      <ArrowRight size={14} className="stroke-[2.5]" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. STATS BENTO GRID
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card A — 4 Fields Daily  (spans 2 on lg) */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 group hover:border-[#bef264]/20 hover:bg-white/[0.06] transition-all duration-300">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#bef264]/8 blur-[90px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
                <div className="flex-shrink-0">
                  <span className="text-7xl font-black text-white leading-none block">4</span>
                  <span className="text-[#bef264] font-bold text-lg block mt-2">Full-size fields</span>
                  <span className="text-white/40 text-xs tracking-wide uppercase">Daily production</span>
                </div>
                <div className="hidden md:block w-px h-24 bg-white/10 flex-shrink-0" />
                <p className="text-white/55 text-sm md:text-base leading-relaxed flex-1">
                  Our manufacturing capacity delivers four complete FIFA-standard
                  synthetic pitches every single day — more than any other global
                  manufacturer, meeting worldwide demand at unmatched speed.
                </p>
                <div className="hidden md:flex w-28 h-28 flex-col items-center justify-center rounded-2xl bg-[#0b0c10]/80 border border-white/[0.06] flex-shrink-0">
                  <Factory size={36} className="text-[#bef264]/50" />
                </div>
              </div>
            </div>

            {/* Card B — 200+ FIFA Fields */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 group hover:border-[#bef264]/20 hover:bg-white/[0.06] transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#bef264]/8 blur-[70px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
              <div className="relative z-10">
                <Globe size={22} className="text-[#bef264]/60 mb-6" />
                <span className="text-6xl font-black text-white leading-none block mb-2">200+</span>
                <span className="text-[#bef264] font-bold text-lg block mb-4">FIFA Fields</span>
                <p className="text-white/55 text-sm leading-relaxed">
                  Tested, certified, and fully compliant fields installed globally.
                  Trusted by top clubs and elite international tournaments.
                </p>
              </div>
            </div>

            {/* Card C — Only in Asia */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 group hover:border-[#bef264]/20 hover:bg-white/[0.06] transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 rounded-full bg-[#bef264]/6 blur-[70px]" />
              </div>
              <div className="relative z-10">
                <Award size={22} className="text-[#bef264]/60 mb-6" />
                <span className="text-6xl font-black text-white leading-none block mb-2">#1</span>
                <span className="text-[#bef264] font-bold text-lg block mb-4">Only in Asia</span>
                <p className="text-white/55 text-sm leading-relaxed">
                  The sole FIFA Preferred Producer across the Asian continent —
                  bringing world-leading quality to sports infrastructure.
                </p>
              </div>
            </div>

            {/* Card D — 7 Preferred Worldwide  (spans 2 on lg) */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 group hover:border-[#bef264]/20 hover:bg-white/[0.06] transition-all duration-300">
              <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#bef264]/8 blur-[90px] translate-y-1/3 translate-x-1/4 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
                <div className="hidden md:flex w-28 h-28 flex-col items-center justify-center rounded-2xl bg-[#0b0c10]/80 border border-white/[0.06] flex-shrink-0">
                  <ShieldCheck size={36} className="text-[#bef264]/50" />
                </div>
                <div className="hidden md:block w-px h-24 bg-white/10 flex-shrink-0" />
                <p className="text-white/55 text-sm md:text-base leading-relaxed flex-1">
                  Only seven manufacturers globally hold the FIFA Preferred Producer
                  certification. We are proud to stand among them — the only one
                  representing the entirety of Asia.
                </p>
                <div className="hidden md:block w-px h-24 bg-white/10 flex-shrink-0" />
                <div className="flex-shrink-0 md:text-right">
                  <span className="text-7xl font-black text-white leading-none block">7</span>
                  <span className="text-[#bef264] font-bold text-lg block mt-2">Preferred Worldwide</span>
                  <span className="text-white/40 text-xs tracking-wide uppercase">Global Standard</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. CLUBS & HERITAGE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-5">
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#bef264] to-transparent rounded-full mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Adopted by the<br />
              <span className="text-[#bef264]">World's Best.</span>
            </h2>
            <p className="text-white/55 text-sm md:text-base leading-relaxed mb-8">
              From championship-winning clubs like <strong className="text-white font-semibold">Chelsea FC</strong> and{' '}
              <strong className="text-white font-semibold">Olympiacos CFP</strong> to FIFA's flagship youth
              tournaments — our surfaces are trusted at the highest level.
            </p>
            <div className="border-l-2 border-[#bef264]/20 pl-6 py-2">
              <p className="text-white/40 text-sm leading-relaxed">
                The FIFA Preferred Producer initiative, launched in 2009, ensures every pitch
                meets the strictest quality, safety, and installation standards.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#bef264]/5 blur-[80px] pointer-events-none" />
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-[#bef264]/30 inline-block" />
                Tournament & Club Heritage
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clubs.map((club) => (
                  <div
                    key={club}
                    className="flex items-center gap-4 bg-[#0b0c10]/80 border border-white/[0.06] rounded-2xl px-5 py-4 hover:border-[#bef264]/30 hover:bg-[#bef264]/5 transition-all duration-200 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#bef264]/30 group-hover:bg-[#bef264] transition-colors flex-shrink-0" />
                    <span className="text-white/70 group-hover:text-white text-sm font-medium">{club}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. SYSTEM ARCHITECTURE
      ══════════════════════════════════════════════════════════ */}
      <section id="system" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <SectionBadge accent>System Architecture</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-6 leading-tight">
                Engineered for <span className="text-[#bef264]">Performance.</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm md:text-base leading-relaxed md:text-right">
              Every layer is meticulously designed to optimise ball interaction,
              player safety, and all-weather longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            {/* Diagram */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#bef264]/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden">
                <span className="absolute top-6 right-8 text-white/15 font-mono text-[10px] tracking-widest uppercase">
                  FIG.1.0 · Cross-Section
                </span>
                <div className="w-full aspect-[4/3] bg-[#0b0c10]/80 rounded-2xl border border-white/[0.06] overflow-hidden flex items-center justify-center p-4">
                  <img
                    src="/diagram.png"
                    alt="Turf system cross-section diagram"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.05]"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

            {/* Layer accordions */}
            <div className="flex flex-col gap-4">
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

      {/* ══════════════════════════════════════════════════════════
          5. PERFORMANCE METRICS BENTO
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-[#bef264]/10 border border-[#bef264]/20 flex items-center justify-center mx-auto mb-6">
              <Activity className="text-[#bef264]" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Uncompromising Quality</h2>
            <p className="text-white/45 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Over 200 fields tested and confirmed strictly compliant with all FIFA
              Quality Programme parameters — ensuring elite performance on every pitch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Ball Roll — wide */}
            <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12 group hover:border-[#bef264]/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#bef264]/8 blur-[90px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row gap-10 md:items-center">
                <div className="flex-shrink-0">
                  <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold mb-3">Ball Roll</p>
                  <p className="text-[#bef264] font-black text-5xl leading-none font-mono">4–8 m</p>
                </div>
                <div className="hidden md:block w-px h-20 bg-white/10 flex-shrink-0" />
                <p className="text-white/55 text-sm md:text-base leading-relaxed flex-1">
                  Optimal ball roll ensures the game flows naturally — calibrated to mimic
                  the exact resistance of elite natural grass for precision passing and
                  true-to-life ball behaviour.
                </p>
              </div>
            </div>

            {/* Vertical Rebound */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 group hover:border-[#bef264]/20 transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#bef264]/8 blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold mb-3">Vertical Rebound</p>
                <p className="text-[#bef264] font-black text-5xl leading-none font-mono mb-6">0.6–0.85</p>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  Dictates bounce predictability. Tested to strict FIFA standards ensuring
                  the ball behaves exactly as professionals expect.
                </p>
                <div className="mt-8 h-24 rounded-2xl bg-[#0b0c10]/80 border border-white/[0.06] flex items-end justify-center pb-6">
                  <div className="w-6 h-6 rounded-full bg-[#bef264] shadow-[0_0_20px_rgba(190,242,100,0.6)] animate-bounce" />
                </div>
              </div>
            </div>

            {/* Shock Absorption */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 group hover:border-[#bef264]/20 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-52 h-52 rounded-full bg-[#bef264]/6 blur-[60px]" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold mb-3">Shock Absorption</p>
                <p className="text-[#bef264] font-black text-5xl leading-none font-mono mb-6">60–70%</p>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  Crucial for player safety — significantly reduces leg, ligament, and
                  lower back strain during high-impact play.
                </p>
                <div className="mt-8 h-24 rounded-2xl bg-[#0b0c10]/80 border border-white/[0.06] flex items-center justify-center">
                  <ShieldCheck size={40} className="text-[#bef264]/40" />
                </div>
              </div>
            </div>

            {/* Skin Friction — wide */}
            <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12 group hover:border-[#bef264]/20 transition-all duration-300">
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#bef264]/8 blur-[90px] translate-y-1/3 translate-x-1/4 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row gap-10 md:items-center">
                <div className="hidden md:flex w-32 h-32 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-[#0b0c10]/80 border border-white/[0.06]">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-[#bef264]/25" />
                    <span className="absolute inset-1 rounded-full border border-dashed border-[#bef264]/40 animate-spin" style={{ animationDuration: '8s' }} />
                    <Droplets size={24} className="text-[#bef264]" />
                  </div>
                </div>
                <div className="hidden md:block w-px h-20 bg-white/10 flex-shrink-0" />
                <div className="flex-shrink-0">
                  <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold mb-3">Skin Friction</p>
                  <p className="text-[#bef264] font-black text-5xl leading-none font-mono">0.35–0.75</p>
                </div>
                <div className="hidden md:block w-px h-20 bg-white/10 flex-shrink-0" />
                <p className="text-white/55 text-sm md:text-base leading-relaxed flex-1">
                  Slide tackles without injury. Advanced fiber technology delivers a
                  smooth, skin-friendly surface by minimising friction coefficients
                  to the safest possible range.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. WHY CHOOSE A FIFA PREFERRED PRODUCER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#121622]/90 to-[#0b0c10]/90 backdrop-blur-2xl border-2 border-[#bef264]/25 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-[#bef264]/10 blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bef264]/40 to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left — heading + bullets */}
              <div>
                <SectionBadge accent>The FIFA Advantage</SectionBadge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6 mb-10">
                  Why Choose a FIFA<br />
                  <span className="text-[#bef264]">Preferred Producer?</span>
                </h2>
                <ul className="flex flex-col gap-6">
                  {whyChoose.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span className="mt-1 w-6 h-6 rounded-full bg-[#bef264]/10 border border-[#bef264]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={12} className="text-[#bef264]" />
                      </span>
                      <span className="text-white/70 text-sm md:text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — quick stats + infill */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: '200+', label: 'FIFA Fields' },
                    { val: '365', label: 'Days / Year' },
                    { val: '2009', label: 'Certified' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#0b0c10]/80 border border-white/[0.06] rounded-2xl p-6 text-center group hover:border-[#bef264]/30 transition-colors">
                      <p className="text-[#bef264] font-black text-3xl mb-1">{s.val}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0b0c10]/80 border border-white/[0.06] rounded-2xl p-8">
                  <p className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-6 flex items-center gap-3">
                    <span className="w-6 h-px bg-[#bef264]/30 inline-block" />
                    Available Infill Materials
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['SBR', 'EPDM', 'TPE', 'Cork', 'Coconut'].map((m) => (
                      <span
                        key={m}
                        className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono text-sm hover:border-[#bef264]/40 hover:text-[#bef264] hover:bg-[#bef264]/10 transition-all duration-200 cursor-default"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#121622] to-[#0b0c10] border border-[#bef264]/20 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#bef264]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bef264]/40 to-transparent" />

            <div className="relative z-10">
              <SectionBadge accent>Ready to Build?</SectionBadge>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mt-8 mb-6">
                Build Your FIFA<br />
                <span className="text-[#bef264]">Standard Field</span>
              </h2>
              <p className="text-white/50 text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                From amateurs to international standards — we deliver the finest football turf
                installations using highly skilled technicians and the best equipment available.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-4 bg-[#bef264] text-[#08060d] font-bold py-4 pl-8 pr-4 rounded-full hover:scale-105 active:scale-95 duration-200 shadow-2xl text-base"
                >
                  Contact Us Today
                  <div className="bg-[#08060d] text-[#bef264] p-2.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                    <ArrowRight size={16} className="stroke-[2.5]" />
                  </div>
                </Link>
                <Link
                  to="/indusive-sports/product-range"
                  className="group inline-flex items-center gap-4 bg-black text-white border border-white/10 font-bold py-4 pl-8 pr-4 rounded-full hover:bg-white/5 duration-200 text-base"
                >
                  View All Products
                  <div className="bg-[#bef264] text-[#08060d] p-2.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                    <ArrowRight size={16} className="stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
