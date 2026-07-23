import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { CTASection } from '../components/home/CTASection';
import type { Service } from '../types';
import { BUSINESS_INFO } from '../data/travelData';
import { ShieldCheck, Clock, CheckCircle2, Sparkles, Star, ArrowRight, PhoneCall } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (service?: Service) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEO
        title="Services | Khammaghani Travelling & Holidays Udaipur"
        description="Browse all travel services offered by Khammaghani Travelling Udaipur: Taxi Service, Car Rental, Udaipur Sightseeing, Mount Abu Cabs, Jodhpur Taxis & Rajasthan Tour Packages."
      />

      {/* Creative Dynamic Hero Header */}
      <section className="relative pt-32 pb-24 bg-slate-950 text-white overflow-hidden">
        {/* Background Image with Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/udaipur_city_palace.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=2000&q=80";
            }}
            alt="Services Hero Banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        </div>

        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content & Quick Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/20 text-sky-300 rounded-full text-xs font-black uppercase tracking-widest border border-sky-400/30 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                <span>Tailored For Every Rajasthan Journey</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                Our Premium Travel &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-orange-400">
                  Taxi Services
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From local Udaipur city tours and airport transfers to outstation cab bookings and royal Rajasthan holiday packages. Enjoy 100% sanitized vehicles and verified drivers.
              </p>

              {/* Service Category Quick Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
                {[
                  '🚖 Taxi Service in Udaipur',
                  '🏛️ Local Sightseeing',
                  '🚘 Car Rentals & SUVs',
                  '✈️ Airport Transfers',
                  '⛰️ Mount Abu Cabs',
                  '🏰 Jodhpur Taxis',
                  '👑 Tour Packages',
                ].map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-800 rounded-full text-xs font-bold text-slate-300 hover:border-amber-400/50 hover:text-amber-300 transition-colors shadow-sm cursor-default"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>Book Custom Service</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-extrabold text-base rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-5 h-5 text-amber-400" />
                  <span>Call Desk ({BUSINESS_INFO.phone})</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Creative Visual Card Container with Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-br from-sky-400 via-amber-400 to-orange-500 shadow-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950">
                  <img
                    src="/udaipur-sightseeing.png"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80";
                    }}
                    alt="Khammaghani Travel Services Udaipur"
                    className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Floating Badge Top-Right */}
                  <div className="absolute top-5 right-5 px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-amber-400/40 shadow-xl flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-black text-white">5.0 / 5 Rating</span>
                  </div>

                  {/* Floating Badge Middle-Left */}
                  <div className="hidden sm:flex absolute top-1/3 -left-4 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl border border-sky-300 shadow-2xl items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-black text-slate-900">GPS Tracked Fleet</span>
                      <span className="text-[11px] font-semibold text-slate-600">Sanitized Cabs</span>
                    </div>
                  </div>

                  {/* Bottom Glass Card Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black text-lg shrink-0 shadow-lg">
                      15+
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">Custom Travel Options</h4>
                      <p className="text-xs text-sky-300 font-semibold">Tailored for Every Budget</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Filterable Services Section */}
      <ServicesGrid onSelectService={(service) => onOpenBooking(service)} />

      {/* Service Guarantees */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">GPS Tracked Safety</h3>
              <p className="text-slate-600 text-sm">
                All taxis are equipped with real-time tracking, emergency assistance, and vetted drivers.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">On-Time Pickup Guarantee</h3>
              <p className="text-slate-600 text-sm">
                We value your time. Drivers arrive 10 minutes prior to scheduled departure time.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Flat Rates</h3>
              <p className="text-slate-600 text-sm">
                Clear all-inclusive quotes with driver allowance, fuel, and state taxes specified.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection onOpenBooking={() => onOpenBooking()} />
    </>
  );
};
