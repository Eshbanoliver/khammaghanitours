import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { CORE_VALUES } from '../../data/travelData';
import {
  Smile,
  ShieldCheck,
  Scale,
  Clock,
  Armchair,
  UserCheck,
  Tag,
  Zap,
} from 'lucide-react';

const valueIcons: Record<string, React.ReactNode> = {
  Smile: <Smile className="w-7 h-7 text-sky-500" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-emerald-500" />,
  Scale: <Scale className="w-7 h-7 text-indigo-500" />,
  Clock: <Clock className="w-7 h-7 text-amber-500" />,
  Armchair: <Armchair className="w-7 h-7 text-rose-500" />,
  UserCheck: <UserCheck className="w-7 h-7 text-purple-500" />,
  Tag: <Tag className="w-7 h-7 text-cyan-500" />,
  Zap: <Zap className="w-7 h-7 text-yellow-500" />,
};

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="The foundation of every ride, tour package, and service we deliver to our guests."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card bg-white/90 rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white transition-all shadow-sm">
                  {valueIcons[value.iconName]}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {value.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                <span>Value Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
