import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Calendar, Users, MapPin, ArrowRight, Star, ShieldCheck, Sparkles, Car, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

const UDAIPUR_STOCK_SLIDES = [
  {
    image: '/images/udaipur_city_palace.png',
    fallback: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85',
    title: 'City Palace & Lake Pichola',
    tag: 'Royal Heritage Landmark'
  },
  {
    image: '/images/udaipur_lake_palace.png',
    fallback: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=2000&q=85',
    title: 'Taj Lake Palace & Jag Mandir',
    tag: 'Venice of the East'
  },
  {
    image: '/udaipur-sightseeing.png',
    fallback: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=85',
    title: 'Fateh Sagar & Sajjangarh Monsoon Palace',
    tag: 'Panoramic Sunset Ghats'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % UDAIPUR_STOCK_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % UDAIPUR_STOCK_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + UDAIPUR_STOCK_SLIDES.length) % UDAIPUR_STOCK_SLIDES.length);
  };

  const activeSlide = UDAIPUR_STOCK_SLIDES[currentSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950 text-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Stock Udaipur Image Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={activeSlide.image}
            onError={(e) => {
              // Fallback to stock photo URL if local asset has loading error
              (e.target as HTMLImageElement).src = activeSlide.fallback;
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            alt={`Udaipur Stock Photo - ${activeSlide.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Subtle vignette gradient for readable text without blue tint or heavy cover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Pill Badge & Current Slide Landmark Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 border border-sky-400/30 backdrop-blur-md rounded-full text-xs sm:text-sm font-bold text-sky-300 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                <span>#1 Rated Travel Agency &amp; Taxi Service in Udaipur</span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 border border-amber-400/30 backdrop-blur-md rounded-full text-xs font-semibold text-amber-300"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeSlide.tag}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
            >
              Explore Rajasthan with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-orange-400">
                Comfort &amp; Confidence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Travel with the most trusted Travel Agency in Udaipur offering luxury taxi services, custom holiday packages, local sightseeing tours, and premium car rentals.
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
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-base rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
              >
                <Compass className="w-5 h-5 text-slate-950 group-hover:rotate-45 transition-transform duration-500" />
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-slate-400"
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

            {/* Interactive Image Slider Controls & Landmark Title */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="p-2.5 bg-slate-900/80 hover:bg-sky-600 border border-slate-700/80 hover:border-sky-500 rounded-full text-white transition-all shadow-md active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="p-2.5 bg-slate-900/80 hover:bg-sky-600 border border-slate-700/80 hover:border-sky-500 rounded-full text-white transition-all shadow-md active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide Dot Indicators */}
                <div className="flex items-center gap-2 ml-2">
                  {UDAIPUR_STOCK_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50'
                          : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Landmark Caption Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center sm:text-right"
                >
                  <p className="text-xs text-amber-400/90 font-medium">Udaipur Stock Photo ({currentSlide + 1}/3)</p>
                  <p className="text-xs sm:text-sm font-bold text-white tracking-wide">{activeSlide.title}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Liquid Glass Booking Widget Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card bg-slate-900/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-full shadow-lg">
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
                    className="w-full px-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                      className="w-full px-3 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-400" />
                      Travelers
                    </label>
                    <select className="w-full px-3 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
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

