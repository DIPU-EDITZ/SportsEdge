import React, { useEffect } from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

const clients = [
  { name: 'Delhi Public School (Ruby Park)', location: 'Kolkata' },
  { name: 'Sudhir Memorial Institute', location: 'Kolkata' },
  { name: 'BGS International School', location: 'Bengaluru' },
  { name: 'The Heritage Resort', location: 'Jaipur' },
  { name: 'Axis Mall Turf', location: 'Kolkata' },
  { name: 'Eastern Railway Sports Association', location: 'Asansol' },
  { name: 'National Sports Club', location: 'Mumbai' },
  { name: 'Jain International School', location: 'Nagpur' },
  { name: 'Sports Authority of India (SAI)', location: 'Regional Centers' },
  { name: 'Baguiati Sports Arena', location: 'Kolkata' },
  { name: 'Srirampur Multisports Club', location: 'Hooghly' },
  { name: 'Prayagraj Rooftop Sports', location: 'Uttar Pradesh' },
  { name: 'Khidirpur Play Turf', location: 'Kolkata' },
];

function OurClients() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* ─────────────────────────────────────
          HEADER
          ───────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Esteemed Clients</h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            From premier educational institutions and luxury resorts to professional sports associations and government bodies, SportsEdge is the trusted partner for world-class sports infrastructure across India.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          STATS STRIP
          ───────────────────────────────────── */}
      <section className="py-12 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="text-center">
            <div className="text-4xl font-black text-[#84cc16]">100+</div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-[#84cc16]">20+</div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-[#84cc16]">20+</div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Schools & Clubs</div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          CLIENT LIST
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#84cc16]/50 transition-colors duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <CheckCircle2 size={20} className="text-[#84cc16]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{client.name}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={14} className="mr-1.5" />
                  {client.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          PARTNER CTA
          ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Growing List of Clients</h2>
          <p className="text-gray-400 mb-8">
            Experience the difference of working with India's premier sports infrastructure company.
          </p>
          <a href="/contact" className="inline-block bg-[#84cc16] text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-white transition-colors duration-300">
            Start Your Project
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────
          FOOTER
          ───────────────────────────────────── */}
      <Footer />
    </div>
  );
}

export default OurClients;
