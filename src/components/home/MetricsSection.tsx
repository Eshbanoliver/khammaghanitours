import React from 'react';
import { motion } from 'framer-motion';
import { METRICS } from '../../data/travelData';
import { Users, Compass, Car, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8 text-sky-500" />,
  Compass: <Compass className="w-8 h-8 text-amber-500" />,
  Car: <Car className="w-8 h-8 text-emerald-500" />,
  Award: <Award className="w-8 h-8 text-purple-500" />,
};

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden shadow-xl">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-400/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-300/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center hover:border-white/50 hover:bg-white/15 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-inner">
                {iconMap[metric.iconName]}
              </div>

              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 font-mono">
                {metric.value}
              </div>

              <h3 className="text-lg font-extrabold text-amber-300 mb-1">
                {metric.label}
              </h3>

              <p className="text-xs text-sky-100 leading-normal font-medium">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
