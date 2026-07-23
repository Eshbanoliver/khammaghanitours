import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { BUSINESS_INFO, SERVICES } from '../data/travelData';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Headphones,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].title,
    date: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    const waText = encodeURIComponent(
      `*New Website Contact Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${formData.service}\n` +
      `*Date:* ${formData.date || 'Flexible'}\n` +
      `*Message:* ${formData.message || 'Please provide quote and vehicle availability.'}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${waText}`, '_blank');
    }, 800);
  };

  const whatsappInquiryLink = `https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${encodeURIComponent(
    'Hello! I would like to inquire about taxi booking / tour package in Udaipur.'
  )}`;

  return (
    <>
      <SEO
        title="Contact Us | Khammaghani Travelling & Holidays Udaipur"
        description="Contact Khammaghani Travelling & Holidays Udaipur. Address: Old RTO, Dhikli Rd, Krishna Vihar Colony Road, Udaipur. Phone: 077280 96547. Available 24/7."
      />

      {/* Dynamic Creative Hero Header */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-sky-50/40 text-slate-900 overflow-hidden border-b border-slate-200/80">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/udaipur_city_palace.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=80";
            }}
            alt="Contact Us Hero Banner"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/60 to-transparent" />
        </div>

        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-300 shadow-sm"
            >
              <Headphones className="w-4 h-4 text-emerald-600 animate-bounce" />
              <span>24/7 Captain Help Desk • Instant Response</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Let's Plan Your Royal{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-emerald-600 to-amber-500">
                Udaipur Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-xl font-medium leading-relaxed"
            >
              Have a question about taxi fares, outstation cabs, or custom tour packages? Our travel team is available 24/7 to provide instant flat-rate quotes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Contact Content Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100/80 text-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <SectionHeading
                badge="Direct Communication"
                title="Contact Captain Desk"
                centered={false}
              />

              {/* Address Card */}
              <div className="group relative bg-white p-6 rounded-3xl border-2 border-sky-100 hover:border-sky-400 shadow-md hover:shadow-2xl transition-all duration-300 flex items-start gap-4 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
                <div className="p-3.5 bg-gradient-to-tr from-sky-500 to-blue-600 text-white rounded-2xl shrink-0 shadow-md shadow-sky-500/30 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-extrabold text-slate-900 text-base">Office Address</h4>
                    <span className="px-2 py-0.5 bg-sky-50 text-sky-700 font-bold text-[10px] uppercase rounded-md border border-sky-200">Udaipur</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative bg-white p-6 rounded-3xl border-2 border-amber-100 hover:border-amber-400 shadow-md hover:shadow-2xl transition-all duration-300 flex items-start gap-4 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
                <div className="p-3.5 bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 rounded-2xl shrink-0 shadow-md shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-1">Phone &amp; Hotline</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="text-amber-600 hover:text-orange-600 font-black text-xl block transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Instant booking &amp; 24/7 call support</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="group relative bg-white p-6 rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 shadow-md hover:shadow-2xl transition-all duration-300 flex items-start gap-4 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                <div className="p-3.5 bg-gradient-to-tr from-emerald-400 to-teal-600 text-white rounded-2xl shrink-0 shadow-md shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-1">Business Hours</h4>
                  <p className="text-slate-800 font-black text-sm">{BUSINESS_INFO.hours}</p>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Open 365 Days a Year (Non-Stop)</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a
                  href={whatsappInquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                  <span>WhatsApp Desk</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="py-4 px-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5 fill-slate-950 stroke-none" />
                  <span>Call Us Now</span>
                </a>
              </div>

              {/* Instagram Card - Rich Vibrant Gradient */}
              <div className="p-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white rounded-3xl shadow-xl shadow-pink-500/20 hover:scale-[1.02] transition-all flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-black text-base">Follow On Instagram</h5>
                    <p className="text-xs text-white/80 font-semibold">@khammaghani_travelling</p>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-slate-900 font-extrabold text-xs rounded-xl shadow-md hover:bg-slate-100 hover:scale-105 transition-all"
                >
                  Visit Page
                </a>
              </div>

            </motion.div>

            {/* Right Column: Sleek Form with Validation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="relative bg-white p-8 sm:p-10 rounded-3xl border-2 border-slate-200/90 shadow-2xl overflow-hidden">
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500" />

                <SectionHeading
                  badge="Instant Quote"
                  title="Send Us A Message"
                  subtitle="Fill out your travel requirement details below for quick pricing and quote."
                  centered={false}
                />

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 font-medium">
                      Your message has been received! Redirecting you to WhatsApp to connect directly with our travel captain.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-md transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vikramaditya Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-200 focus:ring-sky-500 focus:bg-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 font-bold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="077280 96547"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-slate-200 focus:ring-sky-500 focus:bg-white'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 font-bold mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                        Select Desired Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Message / Travel Plan Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your pickup location, number of persons, or preferred hotels..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry on WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>

          {/* Embedded Google Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="bg-white p-4 rounded-3xl border-2 border-slate-200/90 shadow-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-900 text-white rounded-2xl mb-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 shrink-0">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg">Visit Our Udaipur Office Location</h3>
                    <p className="text-xs text-slate-300 font-medium">Old RTO, Dhikli Rd, Krishna Vihar Colony Road, Udaipur</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs rounded-xl hover:scale-105 active:scale-95 transition-transform shadow-md self-start sm:self-auto"
                >
                  Get Directions
                </a>
              </div>

              {/* Exact Provided Map iFrame Embed */}
              <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-inner border border-slate-200">
                <iframe
                  src={BUSINESS_INFO.mapIframeSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Khammaghani Travelling & Holidays Udaipur Location Map"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};
