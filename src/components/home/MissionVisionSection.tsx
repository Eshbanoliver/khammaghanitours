import React from 'react';
import { motion } from 'framer-motion';
import { MISSION_TEXT, VISION_TEXT } from '../../data/travelData';
import { Target, Compass, Sparkles, ShieldCheck, HeartHandshake, Award, Clock, CheckCircle2, Star, Crown, Zap } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden text-slate-800">
      {/* Dynamic Background Glowing Mesh Orbs */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Purpose & Direction"
          title="Driven by Purpose, Guided by Excellence"
          subtitle="Our core foundation and long-term vision to make every journey in Rajasthan memorable, safe, and royal."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-300 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Watermark Background Icon */}
            <Target className="absolute -bottom-10 -right-10 w-64 h-64 text-sky-500/5 group-hover:text-sky-500/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none" />

            <div>
              {/* Card Top Row Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 p-0.5 shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <Target className="w-7 h-7 text-sky-600" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-black text-sky-600 uppercase tracking-widest">Our Core</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                      Mission Statement
                    </h3>
                  </div>
                </div>

                <span className="px-3.5 py-1.5 bg-sky-50 border border-sky-200 text-sky-700 text-[11px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  Mission
                </span>
              </div>

              {/* Quote Container */}
              <div className="relative mb-8 p-5 sm:p-6 bg-slate-50/80 border-l-4 border-sky-500 rounded-r-2xl">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  "{MISSION_TEXT}"
                </p>
              </div>

              {/* Mission Features Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { icon: ShieldCheck, title: '100% Safe Rides', desc: 'Sanitized vehicles' },
                  { icon: Clock, title: 'Punctual Pickups', desc: 'Zero delay policy' },
                  { icon: CheckCircle2, title: 'Clean AC Fleet', desc: 'Maintained sedans & SUVs' },
                  { icon: Zap, title: 'Instant Support', desc: '24/7 Helpline active' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center gap-3 shadow-sm group-hover:border-sky-100 transition-colors">
                    <item.icon className="w-5 h-5 text-sky-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl hover:shadow-2xl hover:shadow-amber-500/15 hover:border-amber-300 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Watermark Background Icon */}
            <Compass className="absolute -bottom-10 -right-10 w-64 h-64 text-amber-500/5 group-hover:text-amber-500/10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

            <div>
              {/* Card Top Row Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 p-0.5 shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <Compass className="w-7 h-7 text-amber-500" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-black text-amber-600 uppercase tracking-widest">Our Guiding</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                      Vision Statement
                    </h3>
                  </div>
                </div>

                <span className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Vision
                </span>
              </div>

              {/* Quote Container */}
              <div className="relative mb-8 p-5 sm:p-6 bg-slate-50/80 border-l-4 border-amber-500 rounded-r-2xl">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  "{VISION_TEXT}"
                </p>
              </div>

              {/* Vision Features Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { icon: Crown, title: 'Royal Hospitality', desc: 'Rajasthani warmth' },
                  { icon: Star, title: '5-Star Rating', desc: 'Top rated in Udaipur' },
                  { icon: Award, title: '#1 Travel Agency', desc: 'Trusted choice' },
                  { icon: HeartHandshake, title: 'Happy Memories', desc: '15,000+ Guests' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center gap-3 shadow-sm group-hover:border-amber-100 transition-colors">
                    <item.icon className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
