import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
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
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M12.031 0C5.396 0 .02 5.376.02 12.012c0 2.121.553 4.19 1.606 6.014L0 24l6.143-1.61A11.96 11.96 0 0012.03 24c6.636 0 12.012-5.376 12.012-12.012C24.043 5.376 18.667 0 12.031 0zm0 22.006c-1.808 0-3.578-.485-5.13-1.405l-.368-.218-3.81 1 .998-3.715-.24-.38A9.972 9.972 0 012.028 12.01c0-5.515 4.486-10.002 10.003-10.002 5.516 0 10.002 4.487 10.002 10.002 0 5.516-4.486 10.002-10.002 10.002zm5.485-7.502c-.301-.15-1.782-.879-2.057-.979-.275-.1-.476-.15-.677.15-.201.3-.777.979-.953 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.131-.613.136-.135.301-.351.452-.526.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.235-.244-.587-.492-.507-.677-.516-.175-.008-.376-.01-.577-.01s-.526.075-.802.376c-.276.301-1.053 1.029-1.053 2.508 0 1.479 1.078 2.907 1.228 3.108.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.578-.086 1.782-.727 2.033-1.429.251-.702.251-1.303.176-1.429-.075-.126-.276-.201-.577-.351z"/>
          </svg>
          
          {/* Tooltip */}
          <span className="absolute left-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-800">
            WhatsApp Inquiry
          </span>
          
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 -z-10" />
        </motion.a>

        {/* Direct Call Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 0.1 }}
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-full shadow-2xl shadow-orange-500/40 hover:scale-110 active:scale-95 transition-all"
          aria-label="Call Now"
        >
          <svg className="w-6 h-6 fill-slate-950" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>

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
