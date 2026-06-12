import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Reusable placeholder page component.
 * Used for pages that are yet to be built out.
 */
function ComingSoon({ title, subtitle, backPath = '/', backLabel = 'Back to Home' }) {
  return (
    <div className="min-h-screen bg-[#08060d] text-white flex flex-col items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bef264]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#bef264]/10 border border-[#bef264]/30 text-[#bef264] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse" />
          Coming Soon
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10">{subtitle}</p>
        )}

        <Link
          to={backPath}
          className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white font-semibold py-3 px-6 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1 duration-200 text-[#bef264]" />
          <span className="text-sm">{backLabel}</span>
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;
