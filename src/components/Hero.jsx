import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12 lg:px-24 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Heading and CTA */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8 select-none">
            Innovative <br className="hidden md:inline" />
            Sports Surface <br />
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Systems</span>
          </h1>

          {/* Dynamic CTA Button */}
          <Link
            to="/indusive-sports/product-range"
            className="group inline-flex items-center gap-3 bg-white lg:bg-[#bef264] text-[#08060d] font-bold py-2.5 pl-6 pr-2.5 rounded-full hover:scale-105 active:scale-95 duration-200 shadow-xl mb-8"
          >
            <span className="text-sm md:text-base tracking-wide">Explore Our Products</span>
            <div className="bg-[#bef264] lg:bg-[#08060d] text-[#08060d] lg:text-[#bef264] p-2 rounded-full transition-transform group-hover:translate-x-1 duration-200">
              <ArrowRight size={16} className="stroke-[2.5]" />
            </div>
          </Link>

          {/* Social Proof / Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
            <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2">
              <span className="text-[#bef264] font-bold text-sm">🏆</span>
              <span className="text-white/90 text-xs font-medium">International Standard Certified</span>
            </div>
            <p className="text-white/70 text-xs md:text-sm font-medium tracking-wide text-center sm:text-left">
              Based in <span className="font-bold text-[#bef264]">Kolkata, India</span>
            </p>
          </div>
        </div>

        {/* Right Column: Glassmorphic Information Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[480px] lg:max-w-[440px] xl:max-w-[480px] bg-white/[0.07] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Reducing Injuries. Elevating Performance.
              </h2>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mt-4 font-normal">
                Our advanced surface systems are engineered to reduce leg, ligament, and lower back strains. Providing international standard courts for tennis, badminton, squash, basketball, gymnastics and more — from amateurs to world-class athletes.
              </p>
            </div>

            {/* Inner Dark Card */}
            <div className="bg-[#0b0c10]/80 border border-white/[0.06] rounded-3xl p-5 mt-8 shadow-inner">
              <h3 className="text-white text-base md:text-lg font-semibold text-center mb-5 tracking-wide">
                Quality · Longevity · Low Maintenance
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3.5">
                <Link
                  to="/indusive-sports/product-range"
                  className="group flex items-center justify-between bg-[#bef264] text-[#08060d] font-bold py-3 px-6 rounded-full hover:bg-opacity-95 transition-all shadow-md active:scale-[0.98] duration-150"
                >
                  <span className="text-sm md:text-base">View Product Range</span>
                  <div className="bg-[#08060d] text-[#bef264] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </Link>

                <Link
                  to="/our-clients"
                  className="group flex items-center justify-between bg-black text-white border border-white/10 font-bold py-3 px-6 rounded-full hover:bg-white/5 transition-all shadow-md active:scale-[0.98] duration-150"
                >
                  <span className="text-sm md:text-base">Meet Our Clients</span>
                  <div className="bg-[#bef264] text-[#08060d] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
