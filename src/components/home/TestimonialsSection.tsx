import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/travelData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TestimonialsSectionProps {
  theme?: 'light' | 'dark';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ theme = 'dark' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLight = theme === 'light';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className={`py-20 relative overflow-hidden ${isLight ? 'bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900' : 'bg-slate-950 text-white'}`}>
      {/* Ambient background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 ${isLight ? 'bg-amber-400/10' : 'bg-amber-500/10'} blur-[130px] pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Happy Tourists Speak"
          title="What Our Customers Say"
          subtitle="Real experiences shared by travelers who explored Rajasthan with Khammaghani Travelling."
          theme={isLight ? 'light' : 'dark'}
        />

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl p-8 sm:p-12 border shadow-2xl relative ${
                isLight
                  ? 'bg-white/90 backdrop-blur-xl border-slate-200/90 text-slate-900 shadow-slate-200/60'
                  : 'glass-dark border-white/10 text-white'
              }`}
            >
              <Quote className={`w-16 h-16 absolute top-6 right-6 pointer-events-none ${isLight ? 'text-amber-500/15' : 'text-amber-500/20'}`} />

              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className={`text-lg sm:text-2xl leading-relaxed italic mb-8 font-medium ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                "{TESTIMONIALS[currentIndex].comment}"
              </p>

              {/* Author Details */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t pt-6 ${isLight ? 'border-slate-100' : 'border-white/10'}`}>
                <div className="flex items-center gap-4">
                  <img
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`font-extrabold text-lg ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {TESTIMONIALS[currentIndex].name}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {TESTIMONIALS[currentIndex].location} • {TESTIMONIALS[currentIndex].date}
                    </p>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 border text-xs font-bold rounded-full self-start sm:self-auto ${
                  isLight
                    ? 'bg-sky-50 border-sky-200 text-sky-700'
                    : 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                }`}>
                  <span>Tour: {TESTIMONIALS[currentIndex].tourType}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className={`p-3 rounded-full border transition-all shadow-md ${
                isLight
                  ? 'bg-white border-slate-200 hover:border-amber-400 text-slate-700 hover:text-amber-600'
                  : 'bg-slate-900 border-slate-800 hover:border-amber-400 text-slate-300 hover:text-white'
              }`}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-amber-400' : isLight ? 'w-2.5 bg-slate-300' : 'w-2.5 bg-slate-800'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className={`p-3 rounded-full border transition-all shadow-md ${
                isLight
                  ? 'bg-white border-slate-200 hover:border-amber-400 text-slate-700 hover:text-amber-600'
                  : 'bg-slate-900 border-slate-800 hover:border-amber-400 text-slate-300 hover:text-white'
              }`}
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
