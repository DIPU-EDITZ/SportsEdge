import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

function Hero() {
  return (
    <div className="pt-28 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6">
          <ShieldCheck size={16} className="text-[#84cc16]" />
          <span className="text-xs font-bold text-gray-700 tracking-wide uppercase">India's #1 Sports Flooring Manufacturer</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
          Premium <span className="text-[#e3eada]">Sports</span><br />
          Infrastructure
        </h1>
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
          From FIFA certified football turfs to ITF approved tennis courts, we build world-class sports surfaces designed for performance and longevity.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#84cc16] text-[#08060d] font-bold py-4 px-8 rounded-full hover:bg-[#bef264] transition-all duration-200 shadow-xl"
          >
            Start Your Project
            <ArrowRight size={18} className="stroke-[2.5]" />
          </Link>
          <Link
            to="/indusive-sports/product-range"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            View Products
          </Link>
        </div>
        <div className="mt-10 flex items-center justify-center md:justify-start gap-8">
          <div className="flex items-center gap-2">
            <Award className="text-[#84cc16]" size={24} />
            <div className="text-left">
              <div className="text-xl font-black text-gray-100 leading-none">100+</div>
              <div className="text-xs text-gray-100 font-medium">Projects</div>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#84cc16]" size={24} />
            <div className="text-left">
              <div className="text-xl font-black text-gray-100 leading-none">15+</div>
              <div className="text-xs text-gray-100 font-medium">Years Exp.</div>
            </div>
          </div>
      </div>
    </div>
  </div>
);
}

export default Hero;
