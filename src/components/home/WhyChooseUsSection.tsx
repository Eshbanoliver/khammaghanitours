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
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface FeatureTheme {
  cardBg: string;
  borderColor: string;
  shadowColor: string;
  topBar: string;
  iconBg: string;
  iconColor: string;
  badge: string;
  badgeBg: string;
}

const featureThemes: FeatureTheme[] = [
  {
    cardBg: 'bg-gradient-to-br from-amber-50/90 via-white to-amber-100/40',
    borderColor: 'border-amber-200/80 hover:border-amber-400',
    shadowColor: 'shadow-lg shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-500/25',
    topBar: 'bg-gradient-to-r from-amber-400 to-orange-500',
    iconBg: 'bg-amber-100 text-amber-600',
    iconColor: 'text-amber-600',
    badge: 'Verified Drivers',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-emerald-100/40',
    borderColor: 'border-emerald-200/80 hover:border-emerald-400',
    shadowColor: 'shadow-lg shadow-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/25',
    topBar: 'bg-gradient-to-r from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-100 text-emerald-600',
    iconColor: 'text-emerald-600',
    badge: 'Best Rates',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-sky-50/90 via-white to-sky-100/40',
    borderColor: 'border-sky-200/80 hover:border-sky-400',
    shadowColor: 'shadow-lg shadow-sky-500/10 hover:shadow-2xl hover:shadow-sky-500/25',
    topBar: 'bg-gradient-to-r from-sky-400 to-blue-600',
    iconBg: 'bg-sky-100 text-sky-600',
    iconColor: 'text-sky-600',
    badge: '24/7 Helpline',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-purple-50/90 via-white to-purple-100/40',
    borderColor: 'border-purple-200/80 hover:border-purple-400',
    shadowColor: 'shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25',
    topBar: 'bg-gradient-to-r from-purple-400 to-indigo-600',
    iconBg: 'bg-purple-100 text-purple-600',
    iconColor: 'text-purple-600',
    badge: 'Clean & Sanitized',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-indigo-50/90 via-white to-indigo-100/40',
    borderColor: 'border-indigo-200/80 hover:border-indigo-400',
    shadowColor: 'shadow-lg shadow-indigo-500/10 hover:shadow-2xl hover:shadow-indigo-500/25',
    topBar: 'bg-gradient-to-r from-indigo-400 to-blue-600',
    iconBg: 'bg-indigo-100 text-indigo-600',
    iconColor: 'text-indigo-600',
    badge: 'Tailored Plans',
    badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-rose-50/90 via-white to-rose-100/40',
    borderColor: 'border-rose-200/80 hover:border-rose-400',
    shadowColor: 'shadow-lg shadow-rose-500/10 hover:shadow-2xl hover:shadow-rose-500/25',
    topBar: 'bg-gradient-to-r from-rose-400 to-pink-600',
    iconBg: 'bg-rose-100 text-rose-600',
    iconColor: 'text-rose-600',
    badge: '100% Safe',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-cyan-50/90 via-white to-cyan-100/40',
    borderColor: 'border-cyan-200/80 hover:border-cyan-400',
    shadowColor: 'shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/25',
    topBar: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    iconBg: 'bg-cyan-100 text-cyan-600',
    iconColor: 'text-cyan-600',
    badge: 'Zero Hidden Tolls',
    badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-blue-50/90 via-white to-blue-100/40',
    borderColor: 'border-blue-200/80 hover:border-blue-400',
    shadowColor: 'shadow-lg shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/25',
    topBar: 'bg-gradient-to-r from-blue-400 to-indigo-600',
    iconBg: 'bg-blue-100 text-blue-600',
    iconColor: 'text-blue-600',
    badge: '10 Mins Early',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    cardBg: 'bg-gradient-to-br from-yellow-50/90 via-white to-amber-100/40',
    borderColor: 'border-yellow-200/80 hover:border-yellow-400',
    shadowColor: 'shadow-lg shadow-yellow-500/10 hover:shadow-2xl hover:shadow-yellow-500/25',
    topBar: 'bg-gradient-to-r from-yellow-400 to-amber-500',
    iconBg: 'bg-yellow-100 text-yellow-700',
    iconColor: 'text-yellow-700',
    badge: '10+ Yrs Exp',
    badgeBg: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  },
];

const whyIcons: Record<string, (cls: string) => React.ReactNode> = {
  Award: (cls) => <Award className={`w-6 h-6 ${cls}`} />,
  PiggyBank: (cls) => <PiggyBank className={`w-6 h-6 ${cls}`} />,
  Headphones: (cls) => <Headphones className={`w-6 h-6 ${cls}`} />,
  Sparkles: (cls) => <Sparkles className={`w-6 h-6 ${cls}`} />,
  SlidersHorizontal: (cls) => <SlidersHorizontal className={`w-6 h-6 ${cls}`} />,
  ShieldAlert: (cls) => <ShieldAlert className={`w-6 h-6 ${cls}`} />,
  FileCheck: (cls) => <FileCheck className={`w-6 h-6 ${cls}`} />,
  Clock4: (cls) => <Clock4 className={`w-6 h-6 ${cls}`} />,
  Star: (cls) => <Star className={`w-6 h-6 ${cls}`} />,
};

interface WhyChooseUsProps {
  onOpenBooking?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-amber-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Khammaghani Difference"
          title="Why Choose Us for Your Trip?"
          subtitle="Discover why thousands of families, couples, and group travelers choose us as their top travel partner in Udaipur."
          theme="light"
        />

        {/* 3x3 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {WHY_CHOOSE_US.map((item, index) => {
            const theme = featureThemes[index % featureThemes.length];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className={`group relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-7 border ${theme.borderColor} ${theme.shadowColor} hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.topBar}`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon Container */}
                    <div className={`p-3.5 rounded-2xl ${theme.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                      {whyIcons[item.iconName]?.(theme.iconColor)}
                    </div>

                    {/* Trust Pill Tag */}
                    <span className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-full border ${theme.badgeBg} shadow-2xs`}>
                      {theme.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-slate-800 transition-colors">
                      {item.title}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Guaranteed Quality</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase">#0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        {onOpenBooking && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3.5 py-1 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-widest rounded-full shadow-sm">
                Ready to Experience Rajasthan?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Book Your Taxi &amp; Tour Package in Seconds
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Best direct rates guaranteed. Zero hidden taxes, 100% sanitized luxury cabs &amp; local drivers.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
            >
              <span>Get Instant Lowest Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
