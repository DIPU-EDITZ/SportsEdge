import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const productsDropdownRef = useRef(null);
    let productsTimer = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleProductsEnter = () => {
        clearTimeout(productsTimer.current);
        setProductsDropdownOpen(true);
    };
    const handleProductsLeave = () => {
        productsTimer.current = setTimeout(() => {
            setProductsDropdownOpen(false);
        }, 150);
    };

    const products = [
        { name: "All Product Range", path: "/product-range" },
        { name: "Football Turf", path: "/products/football-turf" },
        { name: "Hockey Turf", path: "/products/hockey-turf" },
        { name: "Badminton Court", path: "/products/badminton-court" },
        { name: "Wooden Court", path: "/products/wooden-court" },
        { name: "Acrylic Court", path: "/products/acrylic-court" },
        { name: "PP Tiles Court", path: "/products/pp-tiles-court" },
    ];

    const mainLinks = [
        { name: "Home", path: "/" },
        { name: "Our Projects", path: "/our-projects" },
        { name: "Our Clients", path: "/our-clients" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-6 py-4 md:px-12 lg:px-24 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-[#08060d] shadow-lg py-3 md:py-3" : "bg-[#08060d] border-b border-white/5"}`}
        >
            {/* Mobile Menu Icon (Left aligned for Mobile/Tablet) */}
            <div className="flex items-center gap-4 lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 p-4 pr-2 -ml-4 flex flex-col justify-between items-center group focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                            className={`w-6 h-[2.5px] rounded-full transition-all duration-300 origin-left transform ${
                                isOpen
                                    ? "rotate-45 translate-x-0.75 -translate-y-px bg-[#bef264]"
                                    : "bg-white group-hover:bg-[#bef264]"
                            }`}
                        />
                        <span
                            className={`w-6 h-[2.5px] rounded-full transition-all duration-300 ${
                                isOpen
                                    ? "opacity-0 -translate-x-2"
                                    : "bg-white group-hover:bg-[#bef264]"
                            }`}
                        />
                        <span
                            className={`w-6 h-[2.5px] rounded-full transition-all duration-300 origin-left transform ${
                                isOpen
                                    ? "-rotate-45 translate-x-0.75 translate-y-px bg-[#bef264]"
                                    : "bg-white group-hover:bg-[#bef264]"
                            }`}
                        />
                    </div>
                </button>
                <Link to="/" className="flex flex-col">
                    <span className="text-white text-2xl font-bold tracking-tight leading-none">
                        SportsEdge
                    </span>
                    <span className="text-[#bef264] text-[9px] font-normal mt-0.5 lowercase">
                        build with us
                    </span>
                </Link>
            </div>

            {/* Desktop Logo */}
            <div className="hidden lg:block">
                <Link
                    to="/"
                    className="flex flex-col hover:opacity-90 transition-opacity"
                >
                    <span className="text-white text-3xl font-bold tracking-tight leading-none">
                        SportsEdge
                    </span>
                    <span className="text-[#bef264] text-[10px] font-normal mt-0.5 lowercase">
                        build with us
                    </span>
                </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
                {/* Home */}
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `text-sm font-medium transition-colors duration-200 hover:text-white ${
                            isActive
                                ? "text-white font-semibold"
                                : "text-white/70"
                        }`
                    }
                >
                    Home
                </NavLink>

                {/* Our Products Dropdown */}
                <div
                    className="relative"
                    ref={productsDropdownRef}
                    onMouseEnter={handleProductsEnter}
                    onMouseLeave={handleProductsLeave}
                >
                    <button
                        aria-haspopup="true"
                        aria-expanded={productsDropdownOpen}
                        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-white ${
                            productsDropdownOpen
                                ? "text-white font-semibold"
                                : "text-white/70"
                        }`}
                    >
                        Our Products
                        <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${productsDropdownOpen ? "rotate-180 text-[#bef264]" : ""}`}
                        />
                    </button>

                    {/* Dropdown Panel */}
                    <div
                        className={`absolute top-full left-0 mt-3 w-56 bg-[#121622] border border-[#bef264]/20 rounded-2xl p-2 shadow-2xl transition-all duration-200 origin-top ${
                            productsDropdownOpen
                                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                    >
                        <div className="absolute top-0 left-8 w-16 h-0.5 bg-linear-to-r from-transparent via-[#bef264] to-transparent rounded-full" />
                        {products.map((p) => (
                            <NavLink
                                key={p.name}
                                to={p.path}
                                className={({ isActive }) =>
                                    `block text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-150 ${
                                        isActive
                                            ? "text-[#08060d] bg-[#bef264]"
                                            : "text-white/80 hover:text-white hover:bg-white/5"
                                    }`
                                }
                            >
                                {p.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Our Projects, Our Team */}
                {mainLinks.slice(1).map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors duration-200 hover:text-white ${
                                isActive
                                    ? "text-white font-semibold"
                                    : "text-white/70"
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* Contact Us Button */}
            <div>
                <Link
                    to="/contact"
                    className="group flex items-center gap-3 bg-[#bef264] text-[#08060d] font-semibold py-2 px-4 md:py-2.5 md:px-5 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-200"
                >
                    <span className="text-xs md:text-sm tracking-wide">
                        Contact Us
                    </span>
                    <div className="bg-[#08060d] text-[#bef264] p-1.5 md:p-2 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                        <ArrowRight size={14} className="stroke-[2.5]" />
                    </div>
                </Link>
            </div>

            {/* Mobile Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-[#08060d]/60 backdrop-blur-md z-30 transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`absolute top-full left-0 right-0 mt-3 mx-4 bg-[#121622] border-2 border-[#bef264]/20 rounded-3xl p-6 shadow-2xl z-40 flex flex-col gap-2 lg:hidden transition-all duration-300 ease-in-out origin-top ${
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
            >
                <div className="absolute top-0 right-12 w-20 h-0.5 bg-linear-to-r from-transparent via-[#bef264] to-transparent rounded-full" />

                {/* Home */}
                <NavLink
                    to="/"
                    end
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `text-base font-bold py-3 px-5 rounded-2xl transition-all duration-200 flex items-center justify-between group/item ${
                            isActive
                                ? "text-[#08060d] bg-[#bef264] shadow-[0_4px_14px_rgba(190,242,100,0.3)]"
                                : "text-white/80 hover:text-white hover:bg-white/5 hover:translate-x-1"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <span>Home</span>
                            <ArrowRight
                                size={isActive ? 16 : 14}
                                className={
                                    isActive
                                        ? "text-[#08060d] stroke-[2.5]"
                                        : "opacity-0 group-hover/item:opacity-100 text-[#bef264] stroke-[2.5]"
                                }
                            />
                        </>
                    )}
                </NavLink>

                {/* Our Products Accordion */}
                <div>
                    <button
                        onClick={() =>
                            setMobileProductsOpen(!mobileProductsOpen)
                        }
                        className="w-full text-base font-bold py-3 px-5 rounded-2xl transition-all duration-200 flex items-center justify-between text-white/80 hover:text-white hover:bg-white/5"
                    >
                        <span>Our Products</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 text-[#bef264] ${mobileProductsOpen ? "rotate-180" : ""}`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            mobileProductsOpen
                                ? "max-h-100 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#bef264]/20 pl-3">
                            {products.map((p) => (
                                <NavLink
                                    key={p.name}
                                    to={p.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-150 ${
                                            isActive
                                                ? "text-[#08060d] bg-[#bef264]"
                                                : "text-white/70 hover:text-white hover:bg-white/5"
                                        }`
                                    }
                                >
                                    {p.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Projects, Our Team */}
                {mainLinks.slice(1).map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `text-base font-bold py-3 px-5 rounded-2xl transition-all duration-200 flex items-center justify-between group/item ${
                                isActive
                                    ? "text-[#08060d] bg-[#bef264] shadow-[0_4px_14px_rgba(190,242,100,0.3)]"
                                    : "text-white/80 hover:text-white hover:bg-white/5 hover:translate-x-1"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span>{link.name}</span>
                                <ArrowRight
                                    size={isActive ? 16 : 14}
                                    className={
                                        isActive
                                            ? "text-[#08060d] stroke-[2.5]"
                                            : "opacity-0 group-hover/item:opacity-100 text-[#bef264] stroke-[2.5]"
                                    }
                                />
                            </>
                        )}
                    </NavLink>
                ))}

                {/* Contact Divider */}
                <div className="mt-2 pt-4 border-t border-white/10">
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between bg-[#bef264] text-[#08060d] font-bold py-3 px-6 rounded-full hover:bg-opacity-95 transition-all shadow-md active:scale-[0.98] duration-150"
                    >
                        <span className="text-sm">Contact Us</span>
                        <div className="bg-[#08060d] text-[#bef264] p-1.5 rounded-full transition-transform group-hover:translate-x-1 duration-200">
                            <ArrowRight size={14} className="stroke-[2.5]" />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



