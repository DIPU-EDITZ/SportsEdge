import React, { useEffect } from 'react';
import { ExternalLink, MapPin, Calendar, Award } from 'lucide-react';
import Footer from '../components/Footer';

// Asset imports
import proj1 from "../assets/projects/Cricket_turf_baguiati.jpeg";
import proj2 from "../assets/projects/Football_turf_baguiati.jpeg";
import proj3 from "../assets/projects/PP_tiles_basketball_sudhir_memorial_institute.jpeg";
import proj4 from "../assets/projects/Play_turf_khidirpur.jpeg";
import proj5 from "../assets/projects/Rooftop_pickleball_court_prayagraj.jpeg";
import proj6 from "../assets/projects/multisports_turf_srirampur.jpeg";
import proj7 from "../assets/projects/pickleball&badminton_court_srirampur.jpeg";

const projects = [
  {
    title: "Cricket Practice Arena",
    client: "Baguiati Sports Arena",
    location: "Kolkata, West Bengal",
    image: proj1,
    category: "Cricket",
    description: "Installation of professional-grade nylon netting and 15mm multisports turf for high-performance cricket practice.",
    year: "2024"
  },
  {
    title: "FIFA Standard Football Turf",
    client: "Baguiati Sports Complex",
    location: "Kolkata, West Bengal",
    image: proj2,
    category: "Football",
    description: "Premium synthetic football turf installation featuring advanced drainage and shock-absorption systems.",
    year: "2024"
  },
  {
    title: "Interlocking PP Tiles Court",
    client: "Sudhir Memorial Institute",
    location: "Kolkata, West Bengal",
    image: proj3,
    category: "Basketball",
    description: "Professional basketball court featuring high-impact polypropylene (PP) interlocking tiles for superior grip and safety.",
    year: "2023"
  },
  {
    title: "Recreational Play Turf",
    client: "Khidirpur Play Turf",
    location: "Kolkata, West Bengal",
    image: proj4,
    category: "Multi-Sport",
    description: "Community-focused multi-purpose turf designed for football, cricket, and general fitness activities.",
    year: "2023"
  },
  {
    title: "Rooftop Pickleball Court",
    client: "Private Sports Club",
    location: "Prayagraj, Uttar Pradesh",
    image: proj5,
    category: "Pickleball",
    description: "Innovative rooftop sports facility maximizing urban space with professional acrylic surfacing for pickleball.",
    year: "2024"
  },
  {
    title: "Multisports Club Turf",
    client: "Srirampur Multisports",
    location: "Hooghly, West Bengal",
    image: proj6,
    category: "Multi-Sport",
    description: "Large-scale multisport turf installation supporting multiple athletic disciplines in a single facility.",
    year: "2023"
  },
  {
    title: "Pickleball & Badminton Combo",
    client: "Srirampur Racket Club",
    location: "Hooghly, West Bengal",
    image: proj7,
    category: "Racket Sports",
    description: "Combined court system with specialized surfacing suitable for both high-intensity badminton and pickleball.",
    year: "2024"
  }
];

function OurProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* ─────────────────────────────────────
          HEADER
          ───────────────────────────────────── */}
      <section className="bg-[#08060d] pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]] from-[#bef264] via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#84cc16] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Masterpieces in Sports Infrastructure</h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Explore our signature projects across India. We take pride in delivering excellence through innovative design and flawless execution.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          PROJECT GRID
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#bef264] text-[#08060d] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col grow">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#84cc16]" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#84cc16]" />
                      {project.year}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-[#84cc16] transition-colors duration-300">
                    {project.title}
                  </h2>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Award size={16} className="text-gray-400" />
                    </div>
                    <span className="text-sm font-bold text-gray-500 italic">Project for {project.client}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 grow">
                    {project.description}
                  </p>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <button className="text-gray-900 font-bold text-sm flex items-center gap-2 group/btn hover:text-[#84cc16] transition-colors">
                        View Project Details
                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          CTA SECTION
          ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#bef264] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#08060d] mb-6">Have a Vision for Your Facility?</h2>
          <p className="text-[#08060d]/70 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            From specialized surfacing to complete facility construction, we turn your sports infrastructure goals into reality.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-[#08060d] text-white font-bold px-10 py-4 rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Start Your Project
            <ExternalLink size={18} />
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

export default OurProjects;
