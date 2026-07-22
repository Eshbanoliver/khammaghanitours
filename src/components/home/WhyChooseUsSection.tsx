import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { WHY_CHOOSE_US } from '../../data/travelData';
import {
  Award,
  PiggyBank,
  Headphones,
  Sparkles,
  SlidersHorizontal,
  ShieldAlert,
  FileCheck,
  Clock4,
  Star,
  CheckCircle,
} from 'lucide-react';

const whyIcons: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-amber-500" />,
  PiggyBank: <PiggyBank className="w-6 h-6 text-emerald-500" />,
  Headphones: <Headphones className="w-6 h-6 text-sky-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-500" />,
  SlidersHorizontal: <SlidersHorizontal className="w-6 h-6 text-indigo-500" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-rose-500" />,
  FileCheck: <FileCheck className="w-6 h-6 text-cyan-500" />,
  Clock4: <Clock4 className="w-6 h-6 text-blue-500" />,
  Star: <Star className="w-6 h-6 text-amber-400" />,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Khammaghani Difference"
          title="Why Choose Us for Your Trip?"
          subtitle="Discover why thousands of families, couples, and group travelers choose us as their top travel partner in Udaipur."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="glass-dark rounded-3xl p-6 border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08] transition-all duration-300 group flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-white/10 border border-white/10 shrink-0 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all shadow-inner">
                {whyIcons[item.iconName]}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <CheckCircle className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
