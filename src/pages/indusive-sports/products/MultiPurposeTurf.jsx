import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Activity,
    Globe,
    Award,
    ShieldCheck,
    Zap,
    Users
} from "lucide-react";
import Footer from "../../../components/Footer";
import multiPurposeImg from "../../../assets/projects/multisports_turf_srirampur.jpeg";

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
        icon: Users,
        number: "5+",
        label: "Sports",
        sub: "In one facility",
    },
    { icon: Globe, number: "Pro", label: "Grade", sub: "Standard dimensions" },
    {
        icon: ShieldCheck,
        number: "Max",
        label: "Safety",
        sub: "Shock absorption",
    },
    {
        icon: Award,
        number: "10yr",
        label: "Warranty",
        sub: "All-weather finish",
    },
];

const features = [
    {
        title: "Versatile Surface",
        subtitle: "Multi-sport · Adaptable",
        description:
            "Designed to accommodate multiple sports including basketball, volleyball, tennis, and futsal on a single surface without compromising performance.",
    },
    {
        title: "Durable Coating",
        subtitle: "UV-resistant · Anti-slip",
        description:
            "A high-durability topcoat that resists wear from heavy usage across different sports while providing excellent grip and friction control.",
    },
    {
        title: "Advanced Cushioning",
        subtitle: "Elastic layer · Joint protection",
        description:
            "Provides optimal shock absorption, reducing the risk of injuries for athletes of all ages during various sporting activities.",
    },
    {
        title: "Low Maintenance",
        subtitle: "Easy care · Cost-effective",
        description:
            "Engineered for minimal upkeep, saving time and resources while keeping the facility in professional playing condition year-round.",
    },
];

const metrics = [
    {
        label: "Versatility",
        value: "High",
        desc: "Seamlessly switch between multiple sports.",
        icon: Activity,
    },
    {
        label: "Shock Absorption",
        value: "25% - 35%",
        desc: "Advanced cushioning for superior player comfort and safety.",
        icon: ShieldCheck,
    },
    {
        label: "Durability",
        value: "All-Weather",
        desc: "Engineered to withstand extreme heat and heavy rainfall.",
        icon: ArrowRight,
    },
    {
        label: "Maintenance",
        value: "Low",
        desc: "Cost-effective solutions for continuous play.",
        icon: Zap,
    },
];

export default function MultiPurposeTurf() {
    const [heroRef, heroVisible] = useScrollReveal();
    const [statsRef, statsVisible] = useScrollReveal();
    const [featuresRef, featuresVisible] = useScrollReveal();
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
                            Multi-Purpose Turf Systems
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                            Versatile multi-sport surface systems that accommodate basketball, volleyball, badminton, and more — one court, endless possibilities.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-[#84cc16]/10 text-[#84cc16] font-bold px-4 py-2 rounded-full text-sm">
                                Multi-Sport
                            </span>
                            <span className="bg-gray-100 text-gray-700 font-bold px-4 py-2 rounded-full text-sm">
                                High-Performance
                            </span>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative rounded-4xl overflow-hidden aspect-4/3 shadow-xl border border-gray-100 group">
                        <img
                            src={multiPurposeImg}
                            alt="Multi-Purpose Turf System"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
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

            {/* FEATURES */}
            <section className="py-20 bg-white border-y border-gray-200 px-6 md:px-12 lg:px-24">
                <div
                    ref={featuresRef}
                    className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="text-center mb-16">
                        <SectionLabel>Surface Engineering</SectionLabel>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                            Precision Multi-Sport Design
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our multi-purpose courts use an advanced engineering philosophy, providing the perfect balance of performance and player safety across various sports.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Feature Cards */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#84cc16] transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 font-black text-sm shrink-0">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 leading-none">
                                                {feature.title}
                                            </h3>
                                            <p className="text-xs text-[#84cc16] font-semibold mt-1 uppercase tracking-wider">
                                                {feature.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-4xl p-8 md:p-12 shadow-inner group flex items-center justify-center">
                            <div className="text-center">
                                <Activity
                                    size={48}
                                    className="text-[#84cc16] mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">
                                    Maximum Versatility
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    One surface, endless possibilities for play and competition.
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
                            Performance Metrics
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
