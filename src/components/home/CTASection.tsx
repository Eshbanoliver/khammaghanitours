import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/travelData';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 shadow-2xl border border-sky-400/30 text-center sm:text-left"
        >
          {/* Background Ambient Blobs inside CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black text-white uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Unbeatable Holiday Discounts
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Explore Rajasthan?
              </h2>

              <p className="text-sky-100 text-base sm:text-lg max-w-2xl leading-relaxed">
                Contact Khammaghani Travelling &amp; Holidays Udaipur now to get custom quotes, clean vehicles, and best local travel guidance!
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-white hover:bg-slate-100 text-slate-950 font-black text-base rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-sky-600" />
                <span>Book Your Trip</span>
                <ArrowRight className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-base rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Now ({BUSINESS_INFO.phone})</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
