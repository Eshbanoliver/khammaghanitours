import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Calendar, Users, MapPin, ArrowRight, Star, ShieldCheck, Sparkles, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85',
  'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=2000&q=85',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=85'
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background Image Slider with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            alt="Rajasthan Udaipur Palace Tourism"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      {/* Floating Liquid Background Blobs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 border border-sky-200 backdrop-blur-md rounded-full text-xs sm:text-sm font-bold text-sky-700 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
              <span>#1 Rated Travel Agency & Taxi Service in Udaipur</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              Explore Rajasthan with{' '}
              <span className="text-gradient">Comfort &amp; Confidence</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
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
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-base rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 text-sky-600" />
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-slate-700 font-bold">5.0 Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Verified Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-sky-500" />
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
            <div className="glass-card bg-white/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-full shadow-lg">
                24/7 Available
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">Plan Your Trip Now</h3>
              <p className="text-xs text-slate-500 mb-6">Get instant lowest fare quote within 2 minutes</p>

              <div className="space-y-4">
                {/* Pick Destination */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-sky-500" />
                    Trip Type / Destination
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-amber-500" />
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-500" />
                      Travelers
                    </label>
                    <select className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
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
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-base rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 mt-2"
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
