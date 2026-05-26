import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Offer', path: '/offer' },
    { name: 'Services', path: '/services' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="relative z-50 px-6 py-4 md:px-12 lg:px-24 flex items-center justify-between">
      {/* Mobile Menu Icon (Left aligned for Mobile/Tablet) */}
      <div className="flex items-center gap-4 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-6 h-5 flex flex-col justify-between items-center group focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Animated Sports-Themed Hamburger Bars */}
          <span
            className={`w-6 h-[2.5px] rounded-full transition-all duration-300 origin-left transform ${
              isOpen ? 'rotate-45 translate-x-[3px] -translate-y-[1px] bg-[#bef264]' : 'bg-white group-hover:bg-[#bef264]'
            }`}
          />
          <span
            className={`w-6 h-[2.5px] rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0 -translate-x-2' : 'bg-white group-hover:bg-[#bef264]'
            }`}
          />
          <span
            className={`w-6 h-[2.5px] rounded-full transition-all duration-300 origin-left transform ${
              isOpen ? '-rotate-45 translate-x-[3px] translate-y-[1px] bg-[#bef264]' : 'bg-white group-hover:bg-[#bef264]'
            }`}
          />
        </button>
        <Link to="/" className="text-white text-2xl font-bold tracking-tight">
          SportsEdge
        </Link>
      </div>

      {/* Desktop Logo */}
      <div className="hidden lg:block">
        <Link to="/" className="text-white text-3xl font-bold tracking-tight hover:opacity-90 transition-opacity">
          SportsEdge
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 hover:text-white ${
                isActive ? 'text-white font-semibold' : 'text-white/70'
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
          className="group flex items-center gap-3 bg-white text-[#08060d] font-semibold py-2 px-4 md:py-2.5 md:px-5 rounded-full hover:bg-opacity-95 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-200"
        >
          <span className="text-xs md:text-sm tracking-wide">Contact Us</span>
          <div className="bg-[#bef264] text-[#08060d] p-1.5 md:p-2 rounded-full transition-transform group-hover:translate-x-1 duration-200">
            <ArrowRight size={14} className="stroke-[2.5]" />
          </div>
        </Link>
      </div>

      {/* Mobile Slide-over / Dropdown Menu with Backdrop & Theme Styling */}
      {/* Backdrop for click-outside to close */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-[#08060d]/60 backdrop-blur-md z-30 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Premium Glassmorphic Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 mt-3 mx-4 bg-gradient-to-br from-[#121622]/95 to-[#0b0c10]/95 backdrop-blur-2xl border-2 border-[#bef264]/20 rounded-3xl p-6 shadow-2xl z-40 flex flex-col gap-3.5 lg:hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        
        {/* Athletic Aesthetic Glowing Top Bar */}
        <div className="absolute top-0 right-12 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#bef264] to-transparent rounded-full" />
        
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-base font-bold py-3 px-5 rounded-2xl transition-all duration-200 flex items-center justify-between group/item ${
                isActive
                  ? 'text-[#08060d] bg-[#bef264] shadow-[0_4px_14px_rgba(190,242,100,0.3)] translate-x-1'
                  : 'text-white/80 hover:text-white hover:bg-white/5 hover:translate-x-1'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>{link.name}</span>
                {isActive ? (
                  <ArrowRight size={16} className="text-[#08060d] stroke-[2.5]" />
                ) : (
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-[#bef264] stroke-[2.5]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
