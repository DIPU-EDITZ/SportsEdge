import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Factory,
    Globe,
    Award,
    ShieldCheck,
    Activity,
    Zap,
} from "lucide-react";
import Footer from "../../../components/Footer";
import runningTrackImg from "../../../assets/running tracks.avif";

// Use same hook as Home for appearing animations
function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
}

function SectionLabel({ children }) {
    return (
        <span className="text-[#84cc16] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            {children}
        </span>
    );
}

const stats = [
    {
        icon: Factory,
        number: "15+",
        label: "Stadium Tracks",
        sub: "Professional Venues",
    },
    { icon: Globe, number: "WA", label: "Certified", sub: "World Athletics Class 1/2" },
    {
        icon: ShieldCheck,
        number: "13mm",
        label: "Min Thickness",
        sub: "Standard requirement",
    },
    {
        icon: Award,
        number: "8yr",
        label: "Full Warranty",
        sub: "UV stable polymers",
    },
];

const layers = [
    {
        title: "EPDM Wearing Course",
        subtitle: "UV-stable granules · Spike resistant",
        description:
            "A high-purity EPDM rubber layer (1-3mm granules) mixed with premium PU binder, providing the final texture, color, and resistance to mechanical stress.",
    },
    {
        title: "Elastic SBR Base",
        subtitle: "Force reduction · Energy return",
        description:
            "A specialized cushion layer of SBR granules (1-4mm) that provides the necessary shock absorption to protect athletes' joints during high-impact movement.",
    },
    {
        title: "PU Primer Layer",
        subtitle: "Adhesion · Sealing",
        description:
            "A single-component polyurethane primer that ensures a permanent, waterproof bond between the synthetic system and the asphalt/concrete substrate.",
    },
    {
        title: "Sub-Base Prep",
        subtitle: "Asphalt/Concrete · Precision leveling",
        description:
            "A laser-leveled foundation engineered for perfect drainage and surface flatness, exceeding World Athletics structural requirements.",
    },
];

const metrics = [
    {
        label: "Force Reduction",
        value: "35% - 50%",
        desc: "Optimal balance of joint protection and energy return.",
        icon: Zap,
    },
    {
        label: "Vertical Deformation",
        value: "0.6 - 2.5mm",
        desc: "Precision stability for maximum running mechanics.",
        icon: Activity,
    },
    {
        label: "Slip Resistance",
        value: "TRRL ≥ 47",
        desc: "High traction performance in both wet and dry conditions.",
        icon: ShieldCheck,
    },
    {
        label: "Tensile Strength",
        value: "≥ 0.5 MPa",
        desc: "Superior resistance to tearing under track spikes.",
        icon: ArrowRight,
    },
];

export default function RunningTrack() {
    const [heroRef, heroVisible] = useScrollReveal();
    const [statsRef, statsVisible] = useScrollReveal();
    const [layersRef, layersVisible] = useScrollReveal();
    const [metricsRef, metricsVisible] = useScrollReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
            {/* HEADER / HERO */}
            <section className="bg-white border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24">
                <div
                    ref={heroRef}
                    className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    {/* Text Content */}
                    <div className="text-left">
                        <Link
                            to="/product-range"
                            className="inline-flex items-center gap-2 text-[#84cc16] hover:text-[#65a30d] font-bold text-sm tracking-wider uppercase mb-8 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Back to Products
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            EPDM Running Tracks
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                            World Athletics (IAAF) certified synthetic track systems designed for elite stadiums, training centers, and schools, offering superior force reduction and year-round performance.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-[#84cc16]/10 text-[#84cc16] font-bold px-4 py-2 rounded-full text-sm">
                                World Athletics Certified
                            </span>
                            <span className="bg-gray-100 text-gray-700 font-bold px-4 py-2 rounded-full text-sm">
                                Spike Resistant
                            </span>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative rounded-4xl overflow-hidden aspect-4/3 shadow-xl border border-gray-100 group">
                        <img
                            src={runningTrackImg}
                            alt="EPDM Running Track"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-gray-900/10 to-transparent pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-20 px-6 md:px-12 lg:px-24">
                <div
                    ref={statsRef}
                    className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ease-out delay-100 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    {stats.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon
                                        size={24}
                                        className="text-[#84cc16]"
                                    />
                                </div>
                                <div className="text-4xl font-black text-gray-900 mb-2">
                                    {s.number}
                                </div>
                                <div className="text-sm font-bold text-gray-900 mb-1">
                                    {s.label}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {s.sub}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* LAYERS / ARCHITECTURE */}
            <section className="py-20 bg-white border-y border-gray-200 px-6 md:px-12 lg:px-24">
                <div
                    ref={layersRef}
                    className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${layersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="text-center mb-16">
                        <SectionLabel>Track Engineering</SectionLabel>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                            Precision Multi-Layer Systems
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our running tracks are meticulously engineered using a specialized multi-layer approach that ensures a perfectly flat, elastic, and high-performance surface.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Layer Cards */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {layers.map((layer, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#84cc16] transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 font-black text-sm flex-shrink-0">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 leading-none">
                                                {layer.title}
                                            </h3>
                                            <p className="text-xs text-[#84cc16] font-semibold mt-1 uppercase tracking-wider">
                                                {layer.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {layer.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-4xl p-8 md:p-12 shadow-inner group flex items-center justify-center">
                            <div className="text-center">
                                <Globe
                                    size={48}
                                    className="text-[#84cc16] mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">
                                    WA Class 1 & 2
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Compliant with World Athletics standards for international competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PERFORMANCE METRICS */}
            <section className="py-20 px-6 md:px-12 lg:px-24">
                <div
                    ref={metricsRef}
                    className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${metricsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="text-center mb-16">
                        <SectionLabel>Professional Specs</SectionLabel>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            Performance Standards
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((m, i) => {
                            const Icon = m.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow text-center"
                                >
                                    <Icon
                                        size={32}
                                        className="mx-auto text-[#84cc16] mb-4"
                                    />
                                    <div className="text-2xl font-black text-gray-900 mb-2">
                                        {m.value}
                                    </div>
                                    <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                                        {m.label}
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {m.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
