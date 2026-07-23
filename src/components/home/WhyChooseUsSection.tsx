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
  Users,
  Car,
} from 'lucide-react';

const whyIcons: Record<string, (cls: string) => React.ReactNode> = {
  Award: (cls) => <Award className={`w-5 h-5 ${cls}`} />,
  PiggyBank: (cls) => <PiggyBank className={`w-5 h-5 ${cls}`} />,
  Headphones: (cls) => <Headphones className={`w-5 h-5 ${cls}`} />,
  Sparkles: (cls) => <Sparkles className={`w-5 h-5 ${cls}`} />,
  SlidersHorizontal: (cls) => <SlidersHorizontal className={`w-5 h-5 ${cls}`} />,
  ShieldAlert: (cls) => <ShieldAlert className={`w-5 h-5 ${cls}`} />,
  FileCheck: (cls) => <FileCheck className={`w-5 h-5 ${cls}`} />,
  Clock4: (cls) => <Clock4 className={`w-5 h-5 ${cls}`} />,
  Star: (cls) => <Star className={`w-5 h-5 ${cls}`} />,
};

interface WhyChooseUsProps {
  onOpenBooking?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Khammaghani Difference"
          title="Why Choose Us for Your Trip?"
          subtitle="Discover why thousands of families, couples, and group travelers choose us as their top travel partner in Udaipur."
          theme="light"
        />

        {/* Main Split Showcase: Featured Visual Image + Why Choose Us Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Premium Visual Image Card Stack with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Decorative Gradient Border */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-amber-400 via-orange-400 to-sky-500 shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950">
                <img
                  src="/images/udaipur_lake_palace.png"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=1200&q=80";
                  }}
                  alt="Udaipur Lake Palace Sightseeing"
                  className="w-full h-[460px] sm:h-[540px] object-cover hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Floating Badge Top-Right */}
                <div className="absolute top-5 right-5 px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-amber-400/40 shadow-xl flex items-center gap-2.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-black text-white">5.0 Star Rated Service</span>
                </div>

                {/* Floating Badge Middle-Left */}
                <div className="hidden sm:flex absolute top-1/3 -left-4 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl border border-sky-300 shadow-2xl items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-slate-900">100% Transparent Fares</span>
                    <span className="text-[11px] font-semibold text-slate-600">Zero Toll Surprises</span>
                  </div>
                </div>

                {/* Bottom Glass Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black text-xl shrink-0 shadow-lg">
                      #1
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm sm:text-base">Top Rated Udaipur Travel Partner</h4>
                      <p className="text-xs text-sky-300 font-semibold">15,000+ Happy Tourists &amp; Families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Mini Highlights Bar Under Image */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center gap-3 shadow-sm">
                <Users className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <h5 className="font-extrabold text-xs text-slate-900">Verified Chauffeurs</h5>
                  <p className="text-[11px] text-slate-500">Local Route Experts</p>
                </div>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center gap-3 shadow-sm">
                <Car className="w-5 h-5 text-sky-500 shrink-0" />
                <div>
                  <h5 className="font-extrabold text-xs text-slate-900">Sanitized Cabs</h5>
                  <p className="text-[11px] text-slate-500">Clean Dual AC Fleet</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feature Points Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-xs">
                        {whyIcons[item.iconName]?.('group-hover:text-slate-950')}
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Banner with Background Image Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/udaipur-sightseeing.png"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80";
              }}
              alt="Rajasthan Sightseeing Background"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <span className="inline-block px-3.5 py-1 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-widest rounded-full shadow-md">
                Ready to Explore Udaipur &amp; Beyond?
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Book Your Cab &amp; Tour Package in Seconds
              </h3>
              <p className="text-xs sm:text-base text-slate-300 font-medium leading-relaxed">
                Direct operator prices with zero hidden tolls. Experience 100% sanitized luxury cars &amp; expert local chauffeurs.
              </p>
            </div>

            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shrink-0"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <a
                href="tel:07728096547"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shrink-0"
              >
                <span>Call Desk: 077280 96547</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
