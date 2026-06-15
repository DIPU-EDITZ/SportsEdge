import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Footer from '../components/Footer';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* ─────────────────────────────────────
          HEADER
          ───────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Ready to start your next sports infrastructure project? Get in touch with our team of experts for a free consultation and tailored quote.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          CONTACT INFO & FORM
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#84cc16]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Corporate Office</h4>
                  <p className="text-gray-600 leading-relaxed">
                    100/22, Julpia Road, Chakramnagar,<br />
                    Kolkata - 700 104, West Bengal, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#84cc16]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+919836492363" className="hover:text-[#84cc16] transition-colors">+91 9836492363</a>
                    <a href="tel:+919038195226" className="hover:text-[#84cc16] transition-colors">+91 9038195226</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#84cc16]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:sportsedge2025@gmail.com" className="hover:text-[#84cc16] transition-colors">sportsedge2025@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-[#84cc16]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/40">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors" placeholder="+91 xxxxx xxxxx" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">Project Interest</label>
                <select id="interest" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors">
                  <option>Football Turf</option>
                  <option>Tennis Court</option>
                  <option>Basketball Court</option>
                  <option>Multi-Purpose Facility</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full text-[#08060d] bg-[#bef264] hover:bg-[#84cc16] focus:ring-4 focus:outline-none focus:ring-[#bef264]/50 font-bold rounded-xl text-base px-5 py-4 text-center transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          FOOTER
          ───────────────────────────────────── */}
      <Footer />
    </div>
  );
}

export default Contact;
