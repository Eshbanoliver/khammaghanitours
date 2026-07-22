import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/travelData';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Khammaghani Travelling Udaipur! I am visiting your website and would like to inquire about taxi rates & tour packages.'
  );

  return (
    <>
      {/* Left Side Floating Widgets: WhatsApp & Call */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-none" />
          
          {/* Tooltip */}
          <span className="absolute left-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-800">
            WhatsApp Inquiry
          </span>
          
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 -z-10" />
        </motion.a>

        {/* Direct Call Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 0.1 }}
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-full shadow-2xl shadow-orange-500/40 hover:scale-110 active:scale-95 transition-all"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 fill-slate-950 stroke-none" />

          {/* Tooltip */}
          <span className="absolute left-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-800">
            Call 077280 96547
          </span>
        </motion.a>
      </div>

      {/* Right Side Floating Widget: Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 bg-slate-900/80 hover:bg-sky-600 text-white backdrop-blur-md rounded-full shadow-2xl border border-slate-700/50 hover:border-sky-400 hover:scale-110 active:scale-95 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
