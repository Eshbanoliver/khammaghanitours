import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SERVICES } from '../../data/travelData';
import type { Service } from '../../types';
import {
  Map,
  Building2,
  CarTaxiFront,
  Key,
  Mountain,
  Navigation,
  PlaneTakeoff,
  ArrowRightCircle,
  RefreshCw,
  Hotel,
  HeartHandshake,
  Sparkles,
  Users,
  Briefcase,
  Sliders,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  Map: <Map className="w-6 h-6 text-sky-500" />,
  Building2: <Building2 className="w-6 h-6 text-blue-500" />,
  CarTaxiFront: <CarTaxiFront className="w-6 h-6 text-amber-500" />,
  Key: <Key className="w-6 h-6 text-indigo-500" />,
  Mountain: <Mountain className="w-6 h-6 text-emerald-500" />,
  Navigation: <Navigation className="w-6 h-6 text-cyan-500" />,
  PlaneTakeoff: <PlaneTakeoff className="w-6 h-6 text-purple-500" />,
  ArrowRightCircle: <ArrowRightCircle className="w-6 h-6 text-orange-500" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-teal-500" />,
  Hotel: <Hotel className="w-6 h-6 text-pink-500" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  Users: <Users className="w-6 h-6 text-sky-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-slate-700" />,
  Sliders: <Sliders className="w-6 h-6 text-violet-500" />,
};

interface ServiceCardTheme {
  borderColor: string;
  shadowColor: string;
  topBarGradient: string;
}

const serviceCardThemes: ServiceCardTheme[] = [
  {
    borderColor: '#0ea5e9', // Sky Blue
    shadowColor: '0 12px 28px -5px rgba(14, 165, 233, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-sky-400 to-blue-600',
  },
  {
    borderColor: '#f59e0b', // Amber Gold
    shadowColor: '0 12px 28px -5px rgba(245, 158, 11, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-amber-400 to-orange-500',
  },
  {
    borderColor: '#10b981', // Emerald Green
    shadowColor: '0 12px 28px -5px rgba(16, 185, 129, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-emerald-400 to-teal-600',
  },
  {
    borderColor: '#a855f7', // Purple
    shadowColor: '0 12px 28px -5px rgba(168, 85, 247, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-purple-400 to-indigo-600',
  },
  {
    borderColor: '#f43f5e', // Rose Pink
    shadowColor: '0 12px 28px -5px rgba(244, 63, 94, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-rose-400 to-pink-600',
  },
  {
    borderColor: '#6366f1', // Royal Indigo
    shadowColor: '0 12px 28px -5px rgba(99, 102, 241, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-indigo-400 to-blue-600',
  },
  {
    borderColor: '#06b6d4', // Bright Cyan
    shadowColor: '0 12px 28px -5px rgba(6, 182, 212, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
  },
  {
    borderColor: '#f97316', // Warm Orange
    shadowColor: '0 12px 28px -5px rgba(249, 115, 22, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-orange-400 to-amber-500',
  },
  {
    borderColor: '#2563eb', // Royal Blue
    shadowColor: '0 12px 28px -5px rgba(37, 99, 235, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-blue-500 to-indigo-600',
  },
  {
    borderColor: '#14b8a6', // Mint Teal
    shadowColor: '0 12px 28px -5px rgba(20, 184, 166, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-teal-400 to-emerald-600',
  },
  {
    borderColor: '#d946ef', // Fuchsia Magenta
    shadowColor: '0 12px 28px -5px rgba(217, 70, 239, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-fuchsia-400 to-pink-600',
  },
  {
    borderColor: '#eab308', // Yellow Gold
    shadowColor: '0 12px 28px -5px rgba(234, 179, 8, 0.3)',
    topBarGradient: 'bg-gradient-to-r from-yellow-400 to-amber-500',
  },
];

interface ServicesGridProps {
  onSelectService: (service: Service) => void;
  limit?: number;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService, limit }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'taxis', label: 'Taxi & Cab' },
    { id: 'transfers', label: 'Outstation Transfers' },
    { id: 'rentals', label: 'Car Rentals' },
  ];

  const filteredServices = SERVICES.filter(
    (service) => activeCategory === 'all' || service.category === activeCategory
  );

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Offerings"
          title="Premium Travel & Taxi Services in Udaipur"
          subtitle="Explore our comprehensive range of holiday packages, outstation cabs, and luxury car rentals tailored for every traveler."
          theme="light"
        />

        {/* Filter Category Tabs */}
        {!limit && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => {
            const theme = serviceCardThemes[index % serviceCardThemes.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                style={{
                  border: `3px solid ${theme.borderColor}`,
                  boxShadow: theme.shadowColor,
                }}
                className="relative bg-white rounded-3xl overflow-hidden hover:-translate-y-2.5 transition-all duration-400 flex flex-col group"
              >
                {/* Top Accent Gradient Bar */}
                <div className={`h-1.5 w-full ${theme.topBarGradient}`} />
                {/* Card Image Banner */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80";
                    }}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />

                  {service.popular && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-full shadow-md">
                      Popular Choice
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/20 shadow-sm">
                      {service.priceStarting}
                    </span>
                    {service.duration && (
                      <span className="px-3 py-1 bg-sky-500/90 backdrop-blur-md rounded-lg text-white shadow-sm">
                        {service.duration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 group-hover:bg-sky-100 transition-colors">
                        {iconComponents[service.iconName]}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className={`w-full py-3 px-4 ${theme.topBarGradient} text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group/btn`}
                    >
                      <span>Book Service / Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
