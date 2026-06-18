import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

function Hero() {
    return (
        <div className="pt-28 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 max-w-400 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 mb-6 shadow-sm">
                    <ShieldCheck size={16} aria-hidden="true" className="text-[#84cc16]" />
                    <span className="text-xs font-bold text-gray-900 tracking-wide uppercase">
                        Eastern India's No. 1 Sports Infrastructure Company
                    </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 tracking-tight leading-[1.1] mb-6">
                    Premium <span className="text-gray-100">Sports</span>
                    <br />
                    <span className="text-[#ffffff] drop-shadow-md">
                        Infrastructure
                    </span>
                </h1>
                <p className="text-gray-100 font-medium text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                    From FIFA certified football turfs to ITF approved tennis
                    courts, we build world-class sports surfaces designed for
                    performance and longevity.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#84cc16] text-[#08060d] font-bold py-4 px-8 rounded-full hover:bg-[#bef264] hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl group"
                    >
                        Start Your Project
                        <div className="bg-[#08060d] text-[#bef264] p-1 rounded-full group-hover:translate-x-1 transition-transform duration-200">
                            <ArrowRight size={14} className="stroke-[2.5]" />
                        </div>
                    </Link>
                </div>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
                    <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-white/40">
                        <Award aria-hidden="true" className="text-[#84cc16]" size={24} />
                        <div className="text-left">
                            <div className="text-xl font-black text-gray-900 leading-none">
                                100+
                            </div>
                            <div className="text-xs text-gray-200 font-bold uppercase tracking-wider">
                                Projects
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-white/40">
                        <ShieldCheck aria-hidden="true" className="text-[#84cc16]" size={24} />
                        <div className="text-left">
                            <div className="text-xl font-black text-gray-900 leading-none">
                                10+
                            </div>
                            <div className="text-xs text-gray-200 font-bold uppercase tracking-wider">
                                Years Exp.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Glassmorphic Information Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full lg:translate-x-4 xl:translate-x-8">
                <div className="w-full max-w-105 bg-white/30 backdrop-blur-3xl border border-white/30 rounded-[2.5rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                            Building the Future of Sports.
                        </h2>
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed mt-4 font-semibold">
                            Your trusted partner in turnkey sports
                            infrastructure. We build world-class complexes,
                            multi-sport courts, and premium fields engineered to
                            last.
                        </p>
                    </div>

                    {/* Inner Card */}
                    <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-5 mt-8 shadow-sm">
                        <h3 className="text-gray-900 text-sm md:text-base font-extrabold text-center mb-5 tracking-wide">
                            Quality · Longevity · Low Maintenance
                        </h3>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <Link
                                to="/product-range"
                                className="group flex items-center justify-between bg-white/60 border border-white/50 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-white/80 transition-all shadow-sm duration-150"
                            >
                                <span className="text-sm">
                                    View Product Range
                                </span>
                                <div className="bg-[#08060d] text-[#84cc16] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                                    <ArrowRight
                                        size={14}
                                        className="stroke-[2.5]"
                                    />
                                </div>
                            </Link>

                            <Link
                                to="/our-clients"
                                className="group flex items-center justify-between bg-gray-900 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-all shadow-sm duration-150"
                            >
                                <span className="text-sm">
                                    Meet Our Clients
                                </span>
                                <div className="bg-[#84cc16] text-[#08060d] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                                    <ArrowRight
                                        size={14}
                                        className="stroke-[2.5]"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

