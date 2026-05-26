import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
  const avatars = [
    {
      name: 'Sarah',
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      name: 'Alex',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      name: 'Michael',
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      name: 'Emily',
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12 lg:px-24 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Heading and CTA */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8 select-none">
            Designed to <br className="hidden md:inline" />
            Elevate Every <br />
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Performance</span>
          </h1>

          {/* Dynamic CTA Button */}
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 bg-white lg:bg-[#bef264] text-[#08060d] font-bold py-2.5 pl-6 pr-2.5 rounded-full hover:scale-105 active:scale-95 duration-200 shadow-xl mb-8"
          >
            <span className="text-sm md:text-base tracking-wide">Get Started Today</span>
            <div className="bg-[#bef264] lg:bg-[#08060d] text-[#08060d] lg:text-[#bef264] p-2 rounded-full transition-transform group-hover:translate-x-1 duration-200">
              <ArrowRight size={16} className="stroke-[2.5]" />
            </div>
          </Link>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
            <div className="flex -space-x-3">
              {avatars.map((avatar, idx) => (
                <img
                  key={avatar.name}
                  src={avatar.src}
                  alt={avatar.name}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#08060d] object-cover hover:scale-110 hover:z-20 transition-all duration-200"
                  style={{ zIndex: 10 - idx }}
                />
              ))}
            </div>
            <p className="text-white/95 text-xs md:text-sm font-medium tracking-wide text-center sm:text-left max-w-[240px] sm:max-w-none">
              Over <span className="font-bold text-[#bef264]">1,000+</span> sports clients and athletes trust us everyday.
            </p>
          </div>
        </div>

        {/* Right Column: Glassmorphic Information Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[480px] lg:max-w-[440px] xl:max-w-[480px] bg-white/[0.07] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Building the Future of Sports Infrastructure.
              </h2>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mt-4 font-normal">
                Your trusted partner in turnkey sports infrastructure. We build world-class complexes, multi-sport courts, and premium fields engineered to last.
              </p>
            </div>

            {/* Inner Dark Card */}
            <div className="bg-[#0b0c10]/80 border border-white/[0.06] rounded-3xl p-5 mt-8 shadow-inner">
              <h3 className="text-white text-base md:text-lg font-semibold text-center mb-5 tracking-wide">
                Next-Generation Sports Architecture
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3.5">
                <Link
                  to="/services"
                  className="group flex items-center justify-between bg-[#bef264] text-[#08060d] font-bold py-3 px-6 rounded-full hover:bg-opacity-95 transition-all shadow-md active:scale-[0.98] duration-150"
                >
                  <span className="text-sm md:text-base">Explore Our Services</span>
                  <div className="bg-[#08060d] text-[#bef264] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </Link>

                <Link
                  to="/works"
                  className="group flex items-center justify-between bg-black text-white border border-white/10 font-bold py-3 px-6 rounded-full hover:bg-white/5 transition-all shadow-md active:scale-[0.98] duration-150"
                >
                  <span className="text-sm md:text-base">Explore Our Works Now</span>
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
