import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Football Turf',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(response.status === 404 
          ? 'API endpoint not found. If running locally, use "vercel dev" instead of "npm run dev".' 
          : text || 'Server error occurred.');
      }

      if (!response.ok) {
        throw new Error(data?.error || `Error ${response.status}: ${response.statusText}`);
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Football Turf',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

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
                  <MapPin aria-hidden="true" className="text-[#84cc16]" size={24} />
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
                    <br />
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
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center">
                <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600 mb-6">Thank you for reaching out. We've received your enquiry and sent a confirmation to your email. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-3 text-red-700">
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors" 
                    placeholder="+91 xxxxx xxxxx" 
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">Project Interest</label>
                  <select 
                    id="interest" 
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors"
                  >
                    <option value="Football Turf">Football Turf</option>
                    <option value="Tennis Court">Tennis Court</option>
                    <option value="Basketball Court">Basketball Court</option>
                    <option value="Multi-Purpose Facility">Multi-Purpose Facility</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#84cc16] focus:border-[#84cc16] block p-3.5 outline-none transition-colors resize-none" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 text-[#08060d] bg-[#bef264] hover:bg-[#84cc16] focus:ring-4 focus:outline-none focus:ring-[#bef264]/50 font-bold rounded-xl text-base px-5 py-4 text-center transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
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

