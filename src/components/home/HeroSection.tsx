import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Users, MapPin, ArrowRight, Star, ShieldCheck, Sparkles, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Image Overlay with Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85"
          alt="Rajasthan Udaipur Palace Tourism"
          className="w-full h-full object-cover opacity-35 scale-105 animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
      </div>

      {/* Floating Liquid Background Blobs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-400/30 backdrop-blur-md rounded-full text-xs sm:text-sm font-bold text-sky-300 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>#1 Rated Travel Agency & Taxi Service in Udaipur</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
            >
              Explore Rajasthan with{' '}
              <span className="text-gradient">Comfort &amp; Confidence</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Travel with the most trusted Travel Agency in Udaipur offering taxi services, holiday packages, sightseeing tours, and premium car rentals.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-extrabold text-base rounded-2xl border border-slate-700 hover:border-slate-500 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 text-amber-400" />
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold">5.0 Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-sky-400" />
                <span>100+ Clean Vehicles</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Liquid Glass Booking Widget Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-dark rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-full shadow-lg">
                24/7 Available
              </div>

              <h3 className="text-2xl font-black text-white mb-1">Plan Your Trip Now</h3>
              <p className="text-xs text-slate-400 mb-6">Get instant lowest fare quote within 2 minutes</p>

              <div className="space-y-4">
                {/* Pick Destination */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    Trip Type / Destination
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-sky-500"
                    defaultValue="Udaipur Local Sightseeing"
                  >
                    <option value="Udaipur Local Sightseeing">Udaipur Local Sightseeing</option>
                    <option value="Udaipur to Mount Abu Cab">Udaipur to Mount Abu Cab</option>
                    <option value="Udaipur to Jodhpur Taxi">Udaipur to Jodhpur Taxi</option>
                    <option value="Rajasthan Tour Package">Full Rajasthan Tour Package</option>
                    <option value="Airport Transfer">Airport Transfer (Dabok)</option>
                    <option value="Car Rental / Outstation">Car Rental in Udaipur</option>
                  </select>
                </div>

                {/* Date & Vehicle */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-amber-400" />
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-400" />
                      Travelers
                    </label>
                    <select className="w-full px-3 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500">
                      <option>1-4 Persons (Sedan)</option>
                      <option>5-7 Persons (Innova)</option>
                      <option>8-12 Persons (Tempo)</option>
                      <option>13+ Large Group</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-base rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>Check Fare &amp; Availability</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
