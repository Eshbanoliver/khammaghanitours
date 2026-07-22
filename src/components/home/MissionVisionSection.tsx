import React from 'react';
import { motion } from 'framer-motion';
import { MISSION_TEXT, VISION_TEXT } from '../../data/travelData';
import { Target, Compass, Sparkles } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-3xl p-8 sm:p-10 border border-sky-500/20 hover:border-sky-500/50 shadow-2xl relative group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 p-0.5 mb-6 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Target className="w-7 h-7 text-sky-400" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-black uppercase tracking-widest rounded-full mb-3 border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Our Mission
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Commitment to Quality &amp; Safety
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              "{MISSION_TEXT}"
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-3xl p-8 sm:p-10 border border-amber-500/20 hover:border-amber-500/50 shadow-2xl relative group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-0.5 mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Compass className="w-7 h-7 text-amber-400" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-black uppercase tracking-widest rounded-full mb-3 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Our Vision
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Rajasthan's Trusted Leader
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              "{VISION_TEXT}"
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
