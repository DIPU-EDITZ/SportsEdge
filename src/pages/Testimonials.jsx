import React, { useEffect } from 'react';
import { Quote } from 'lucide-react';
import Footer from '../components/Footer';

const testimonials = [
  {
    quote: "SportsEdge transformed our academy's training grounds. The FIFA-certified turf they installed has significantly reduced injuries and allowed our players to train year-round regardless of the monsoon.",
    author: "Ravi Kumar",
    role: "Director",
    organization: "Elite Football Academy"
  },
  {
    quote: "The acrylic tennis courts built by SportsEdge are outstanding. True bounce, vibrant colors, and excellent grip. Their team was highly professional and delivered the project exactly on schedule.",
    author: "Anita Sharma",
    role: "Principal",
    organization: "Delhi Public School"
  },
  {
    quote: "We've worked with several infrastructure companies over the years, but SportsEdge stands out for their technical knowledge and premium materials. Our members absolutely love the new multi-sport facility.",
    author: "Vikram Singh",
    role: "Secretary",
    organization: "National Sports Club"
  }
];

function Testimonials() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Client Testimonials</h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Don't just take our word for it. Hear from the schools, clubs, and academies that have experienced the SportsEdge commitment to quality and excellence.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          TESTIMONIALS GRID
          ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative flex flex-col hover:shadow-lg transition-shadow duration-300">
              <Quote size={40} className="text-[#bef264]/40 absolute top-6 right-6" />
              <p className="text-gray-600 leading-relaxed italic mb-8 relative z-10 grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          FOOTER
          ───────────────────────────────────── */}
      <Footer />
    </div>
  );
}

export default Testimonials;
