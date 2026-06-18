import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Product Range", path: "/product-range" },
        { name: "Our Partners", path: "/our-partners" },
        { name: "Our Projects", path: "/our-projects" },
        { name: "Our Clients", path: "/our-clients" },
        { name: "Contact Us", path: "/contact" },
    ];

    const products = [
        { name: "Football Turf", path: "/products/football-turf" },
        { name: "Hockey Turf", path: "/products/hockey-turf" },
        { name: "Tennis Turf", path: "/products/tennis-turf" },
        { name: "Multi-Purpose Turf", path: "/products/multi-purpose-turf" },
        {
            name: "Landscape & Leisure",
            path: "/products/landscape-leisure-turf",
        },
    ];

    return (
        <footer className="bg-[#060509] border-t border-white/5">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link
                            to="/"
                            className="text-white text-2xl font-bold tracking-tight"
                        >
                            SportsEdge
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mt-4">
                            Innovative sports surface systems that reduce
                            injuries and elevate performance. Quality, longevity
                            and low maintenance are our proven standards.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <span className="text-[#bef264] text-xs font-semibold border border-[#bef264]/30 rounded-full px-3 py-1">
                                Since 2019
                            </span>
                            <span className="text-white/30 text-xs">
                                Kolkata, India
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/50 hover:text-[#bef264] text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                            Products
                        </h4>
                        <ul className="space-y-3">
                            {products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/50 hover:text-[#bef264] text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={16}
                                    className="text-[#bef264] mt-0.5 shrink-0"
                                />
                                <span className="text-white/50 text-sm leading-relaxed">
                                    100/22, Julpia Road,
                                    <br />
                                    Chakramnagar, Kolkata-104
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone
                                    size={16}
                                    className="text-[#bef264] shrink-0"
                                />
                                <div className="flex flex-col">
                                    <a
                                        href="tel:+919836492363"
                                        className="text-white/50 hover:text-[#bef264] text-sm transition-colors duration-200"
                                    >
                                        +91 9836492363
                                    </a>
                                    <a
                                        href="tel:+919038195226"
                                        className="text-white/50 hover:text-[#bef264] text-sm transition-colors duration-200"
                                    >
                                        +91 9038195226
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail
                                    size={16}
                                    className="text-[#bef264] shrink-0"
                                />
                                <a
                                    href="mailto:sportsedge2025@gmail.com"
                                    className="text-white/50 hover:text-[#bef264] text-sm transition-colors duration-200"
                                >
                                    sportsedge2025@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        © {new Date().getFullYear()} SportsEdge. All rights
                        reserved.
                    </p>
                    <p className="text-white/30 text-xs">
                        Building World-Class Sports Infrastructure
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
