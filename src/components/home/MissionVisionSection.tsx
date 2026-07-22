import React from 'react';
import { motion } from 'framer-motion';
import { MISSION_TEXT, VISION_TEXT } from '../../data/travelData';
import { Target, Compass, Sparkles, ShieldCheck, HeartHandshake, Award, Clock } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Purpose & Direction"
          title="Driven by Purpose, Guided by Excellence"
          subtitle="Our core foundation and long-term vision to make every journey in Rajasthan memorable, safe, and royal."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 overflow-hidden"
          >
            {/* Top Right Decorative Glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 p-0.5 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Target className="w-8 h-8 text-sky-600" />
                </div>
              </div>
              
              <span className="px-4 py-1.5 bg-sky-100 border border-sky-200 text-sky-700 text-xs font-black uppercase tracking-widest rounded-full shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Our Mission
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
              Commitment to Quality &amp; Safety
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-8">
              "{MISSION_TEXT}"
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-sky-50/80 px-3 py-2 rounded-xl border border-sky-100/60">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                <span>100% Safe Rides</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-sky-50/80 px-3 py-2 rounded-xl border border-sky-100/60">
                <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Punctual Pickups</span>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden"
          >
            {/* Top Right Decorative Glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 p-0.5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Compass className="w-8 h-8 text-amber-500" />
                </div>
              </div>

              <span className="px-4 py-1.5 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-black uppercase tracking-widest rounded-full shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Our Vision
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
              Rajasthan's #1 Travel Partner
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-8">
              "{VISION_TEXT}"
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-amber-50/80 px-3 py-2 rounded-xl border border-amber-100/60">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>5-Star Hospitality</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-amber-50/80 px-3 py-2 rounded-xl border border-amber-100/60">
                <HeartHandshake className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Unforgettable Trips</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
