import React, { useEffect } from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const partners = [
  {
    name: 'Indusive Sports',
    description: 'Our primary partner for premium synthetic turf manufacturing, providing FIFA and FIH certified solutions.',
    tags: ['Synthetic Turf', 'FIFA Certified', 'Manufacturing'],
    link: '/indusive-sports'
  },
  {
    name: 'EPU Floor',
    description: 'Leading European manufacturer of polyurethane sports flooring systems for indoor and outdoor applications.',
    tags: ['PU Flooring', 'European Quality', 'Indoor/Outdoor'],
    link: '/indusive-sports/epufloor'
  },
  {
    name: 'Redexim',
    description: 'Dutch specialists in advanced turf maintenance machinery, ensuring your surface stays in peak condition.',
    tags: ['Maintenance', 'Machinery', 'Dutch Engineering'],
    link: '/indusive-sports/redexim'
  },
  {
    name: 'Trocellen',
    description: 'Pioneers in high-performance cross-linked polyethylene foam underlayments for superior shock absorption.',
    tags: ['Shock Pads', 'Underlayment', 'Safety'],
    link: '#'
  },
  {
    name: 'Conica',
    description: 'Swiss precision in polyurethane athletic tracks and sports surface systems globally.',
    tags: ['Athletic Tracks', 'Swiss Precision', 'PU Systems'],
    link: '#'
  }
];

function OurPartners() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Global Partners</h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We collaborate with the world's leading manufacturers to bring international standard materials and technology to Indian sports infrastructure.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          PARTNERS LIST
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:shadow-md transition-shadow duration-300">
              <div className="grow">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                  <ShieldCheck size={20} className="text-[#84cc16]" />
                </div>
                <p className="text-gray-600 max-w-2xl mb-4 text-base">
                  {partner.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {partner.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8 shrink-0">
                <Link
                  to={partner.link}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-400 hover:bg-[#84cc16] hover:text-gray-900 hover:border-[#84cc16] transition-colors duration-200"
                >
                  <ChevronRight size={24} />
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

export default OurPartners;
