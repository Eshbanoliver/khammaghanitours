import React, { useState } from 'react';
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

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-400/30">
            24/7 Customer Desk
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We are always here to assist with taxi fare estimates, hotel stays, and custom Rajasthan tour planning.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-slate-50 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Reach Out Directly"
                title="Contact Information"
                centered={false}
              />

              {/* Address Card */}
              <div className="glass-card bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-2xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-1">Office Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-1">Phone &amp; WhatsApp</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="text-amber-600 font-extrabold text-lg block hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Instant booking &amp; 24/7 call support</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="glass-card bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-1">Business Hours</h4>
                  <p className="text-slate-700 font-bold text-sm">{BUSINESS_INFO.hours}</p>
                  <p className="text-xs text-slate-500">Open 365 Days a Year</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a
                  href={whatsappInquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <Phone className="w-5 h-5 fill-slate-950 stroke-none" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Instagram Card */}
              <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <div>
                    <h5 className="font-bold text-sm">Follow On Instagram</h5>
                    <p className="text-xs text-slate-400">@khammaghani_travelling</p>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pink-500/20 text-pink-300 font-bold text-xs rounded-xl border border-pink-500/30 hover:bg-pink-500 hover:text-white transition-all"
                >
                  Visit Page
                </a>
              </div>

            </div>

            {/* Right Column: Contact Form with Validation */}
            <div className="lg:col-span-7">
              <div className="glass-card bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
                <SectionHeading
                  badge="Fast Response"
                  title="Send Us A Message"
                  subtitle="Fill out your travel requirement details below for quick pricing and quote."
                  centered={false}
                />

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                      Your message has been received! Redirecting you to WhatsApp to connect directly with our travel captain.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-sky-600 text-white font-bold rounded-xl shadow-md hover:bg-sky-700"
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
                        className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-200 focus:ring-sky-500'
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
                          className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-slate-200 focus:ring-sky-500'
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
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
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
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
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
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry on WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Embedded Google Map Section */}
          <div className="mt-16">
            <div className="glass-card bg-white p-4 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 bg-slate-900 text-white rounded-2xl mb-4">
                <div>
                  <h3 className="font-extrabold text-lg">Visit Our Udaipur Location</h3>
                  <p className="text-xs text-slate-400">Old RTO, Dhikli Rd, Krishna Vihar Colony Road, Udaipur</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-colors"
                >
                  Get Directions
                </a>
              </div>

              {/* Exact Provided Map iFrame Embed */}
              <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-inner">
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
          </div>

        </div>
      </section>
    </>
  );
};
