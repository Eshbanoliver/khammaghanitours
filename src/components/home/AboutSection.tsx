import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { ABOUT_TEXT, BUSINESS_INFO } from '../../data/travelData';
import { ShieldCheck, Award, ThumbsUp, HeartHandshake, PhoneCall } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Our Company"
          title="Best Travel Agency in Udaipur"
          subtitle="Your trusted local partner for comfortable, safe, and memorable Rajasthan holiday journeys."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Stack with Glass Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/udaipur-travel-agency.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80";
                }}
                alt="Best Travel Agency in Udaipur"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel bg-white/80 rounded-2xl border border-white/60 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shrink-0">
                    10+
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Years of Local Hospitality</h4>
                    <p className="text-xs text-slate-600">Serving thousands of delighted tourists annually</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Floating Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-64 glass-card bg-white/90 p-4 rounded-2xl shadow-2xl border border-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-500 shrink-0" />
                <div>
                  <span className="block text-xs font-extrabold text-slate-900 uppercase">100% Guaranteed</span>
                  <span className="text-[11px] text-slate-600 font-semibold">Safe &amp; Sanitized Vehicles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Exact Provided About Text & Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Featured Exact Text Box */}
            <div className="glass-card bg-white/80 p-6 sm:p-8 rounded-3xl border border-sky-100/80 shadow-lg relative">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                <Award className="w-6 h-6 text-sky-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Clean Cabs</h4>
                  <p className="text-xs text-slate-500">AC Fleet Maintained</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                <ThumbsUp className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Fair Fares</h4>
                  <p className="text-xs text-slate-500">Zero Hidden Fee</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                <HeartHandshake className="w-6 h-6 text-rose-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Polite Chauffeurs</h4>
                  <p className="text-xs text-slate-500">Experienced Drivers</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                <PhoneCall className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">24/7 Helpline</h4>
                  <p className="text-xs text-slate-500">Always Ready</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all"
              >
                <span>Speak to Travel Desk ({BUSINESS_INFO.phone})</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
