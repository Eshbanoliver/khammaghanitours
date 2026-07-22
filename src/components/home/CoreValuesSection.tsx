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

interface CardColorTheme {
  gradient: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  glowBg: string;
}

const colorThemes: CardColorTheme[] = [
  {
    gradient: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-100/80',
    iconColor: 'text-sky-600',
    borderColor: 'hover:border-sky-400',
    badgeBg: 'bg-sky-50 border-sky-200',
    badgeText: 'text-sky-700',
    glowBg: 'bg-sky-400/20',
  },
  {
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-100/80',
    iconColor: 'text-emerald-600',
    borderColor: 'hover:border-emerald-400',
    badgeBg: 'bg-emerald-50 border-emerald-200',
    badgeText: 'text-emerald-700',
    glowBg: 'bg-emerald-400/20',
  },
  {
    gradient: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-100/80',
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-400',
    badgeBg: 'bg-purple-50 border-purple-200',
    badgeText: 'text-purple-700',
    glowBg: 'bg-purple-400/20',
  },
  {
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-100/80',
    iconColor: 'text-amber-600',
    borderColor: 'hover:border-amber-400',
    badgeBg: 'bg-amber-50 border-amber-200',
    badgeText: 'text-amber-800',
    glowBg: 'bg-amber-400/20',
  },
  {
    gradient: 'from-rose-500 to-pink-600',
    iconBg: 'bg-rose-100/80',
    iconColor: 'text-rose-600',
    borderColor: 'hover:border-rose-400',
    badgeBg: 'bg-rose-50 border-rose-200',
    badgeText: 'text-rose-700',
    glowBg: 'bg-rose-400/20',
  },
  {
    gradient: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-cyan-100/80',
    iconColor: 'text-cyan-600',
    borderColor: 'hover:border-cyan-400',
    badgeBg: 'bg-cyan-50 border-cyan-200',
    badgeText: 'text-cyan-700',
    glowBg: 'bg-cyan-400/20',
  },
  {
    gradient: 'from-fuchsia-500 to-pink-500',
    iconBg: 'bg-fuchsia-100/80',
    iconColor: 'text-fuchsia-600',
    borderColor: 'hover:border-fuchsia-400',
    badgeBg: 'bg-fuchsia-50 border-fuchsia-200',
    badgeText: 'text-fuchsia-700',
    glowBg: 'bg-fuchsia-400/20',
  },
  {
    gradient: 'from-amber-400 to-yellow-500',
    iconBg: 'bg-yellow-100/80',
    iconColor: 'text-yellow-700',
    borderColor: 'hover:border-yellow-400',
    badgeBg: 'bg-yellow-50 border-yellow-200',
    badgeText: 'text-yellow-800',
    glowBg: 'bg-yellow-400/20',
  },
];

const valueIcons: Record<string, (colorClass: string) => React.ReactNode> = {
  Smile: (cls) => <Smile className={`w-7 h-7 ${cls}`} />,
  ShieldCheck: (cls) => <ShieldCheck className={`w-7 h-7 ${cls}`} />,
  Scale: (cls) => <Scale className={`w-7 h-7 ${cls}`} />,
  Clock: (cls) => <Clock className={`w-7 h-7 ${cls}`} />,
  Armchair: (cls) => <Armchair className={`w-7 h-7 ${cls}`} />,
  UserCheck: (cls) => <UserCheck className={`w-7 h-7 ${cls}`} />,
  Tag: (cls) => <Tag className={`w-7 h-7 ${cls}`} />,
  Zap: (cls) => <Zap className={`w-7 h-7 ${cls}`} />,
};

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Ambient Mesh Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-sky-200/30 via-purple-200/20 to-amber-200/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="The foundation of every ride, tour package, and service we deliver to our guests."
          theme="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {CORE_VALUES.map((value, index) => {
            const theme = colorThemes[index % colorThemes.length];
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`relative bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md ${theme.borderColor} hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.gradient}`} />

                {/* Subtle Hover Glow Orb */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${theme.glowBg} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                      {valueIcons[value.iconName]?.(theme.iconColor)}
                    </div>

                    {/* Step Number Tag */}
                    <span className={`px-3 py-1 text-xs font-black rounded-full border ${theme.badgeBg} ${theme.badgeText} shadow-2xs`}>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider">
                  <span className={theme.badgeText}>Quality Standard</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-sky-500 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
