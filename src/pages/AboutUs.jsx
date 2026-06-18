import React, { useEffect } from 'react';
import { Factory, Globe, ShieldCheck, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* ─────────────────────────────────────
          HERO SECTION
          ───────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <span className="text-[#84cc16] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 block">
            Company Overview
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Building the Future of <br className="hidden md:inline" />
            <span className="text-[#84cc16]">Sports Infrastructure</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Based in Kolkata, SPORTS-EDGE is an ISO certified enterprise specializing in the design, development, and maintenance of world-class sports facilities across India.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          MISSION & VISION
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              SPORTS-EDGE provides innovative sports surface systems which reduce leg, ligament and lower back strains and injuries. We are seen as a knowledgeable solution provider for sports infrastructure in the country — known for providing ground-breaking products combined with flawless execution.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We strive for superior customer satisfaction by recommending the most suitable surface as per client needs, ensuring lasting performance, longevity, and peak condition.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#bef264]/20 flex items-center justify-center shrink-0">
                  <Award size={24} className="text-[#84cc16]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Quality Assured</h4>
                  <p className="text-sm text-gray-500">ISO, FIFA, FIH, ITF certified materials.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#bef264]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} className="text-[#84cc16]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Long Lasting</h4>
                  <p className="text-sm text-gray-500">Durable and low maintenance systems.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-2xl aspect-[4/5] overflow-hidden">
               <img src="/assets/football court.avif" alt="Football Court" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-[4/5] overflow-hidden mt-8">
               <img src="/assets/tennis court.avif" alt="Tennis Court" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          WHY CHOOSE US
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SportsEdge?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With decades of collective experience, we deliver unmatched quality and performance for every sports surface we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Pan India Presence', desc: 'Serving clients across 20+ cities with rapid deployment capabilities.' },
              { icon: Factory, title: 'Premium Partners', desc: 'Collaborating with global brands like Indusive Sports, Redexim, and Trocellen.' },
              { icon: Users, title: 'Expert Team', desc: '50+ experienced engineers and installation specialists.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#bef264]/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-[#84cc16]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          CTA BANNER
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#84cc16]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#08060d]">Let's Build Your Dream Facility</h2>
          <p className="text-[#08060d]/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Ready to upgrade your sports infrastructure? Contact us today for a free consultation and customized quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#08060d] text-[#bef264] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200 shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────
          FOOTER
          ───────────────────────────────────── */}
      <Footer />
    </div>
  );
}

export default AboutUs;
