import React from 'react';
import { motion } from 'framer-motion';
import { METRICS } from '../../data/travelData';
import { Users, Compass, Car, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8 text-sky-400" />,
  Compass: <Compass className="w-8 h-8 text-amber-400" />,
  Car: <Car className="w-8 h-8 text-emerald-400" />,
  Award: <Award className="w-8 h-8 text-purple-400" />,
};

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-sky-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark rounded-3xl p-8 border border-white/10 text-center hover:border-sky-500/40 hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {iconMap[metric.iconName]}
              </div>

              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 font-mono">
                {metric.value}
              </div>

              <h3 className="text-lg font-bold text-sky-300 mb-1">
                {metric.label}
              </h3>

              <p className="text-xs text-slate-400 leading-normal">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
