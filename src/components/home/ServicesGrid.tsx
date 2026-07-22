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

const serviceCardOutlines = [
  'border-2 border-sky-400/90 shadow-lg shadow-sky-500/10 hover:border-sky-500 hover:shadow-sky-500/25',
  'border-2 border-amber-400/90 shadow-lg shadow-amber-500/10 hover:border-amber-500 hover:shadow-amber-500/25',
  'border-2 border-emerald-400/90 shadow-lg shadow-emerald-500/10 hover:border-emerald-500 hover:shadow-emerald-500/25',
  'border-2 border-purple-400/90 shadow-lg shadow-purple-500/10 hover:border-purple-500 hover:shadow-purple-500/25',
  'border-2 border-indigo-400/90 shadow-lg shadow-indigo-500/10 hover:border-indigo-500 hover:shadow-indigo-500/25',
  'border-2 border-rose-400/90 shadow-lg shadow-rose-500/10 hover:border-rose-500 hover:shadow-rose-500/25',
  'border-2 border-cyan-400/90 shadow-lg shadow-cyan-500/10 hover:border-cyan-500 hover:shadow-cyan-500/25',
  'border-2 border-orange-400/90 shadow-lg shadow-orange-500/10 hover:border-orange-500 hover:shadow-orange-500/25',
  'border-2 border-blue-500/90 shadow-lg shadow-blue-500/10 hover:border-blue-600 hover:shadow-blue-500/25',
  'border-2 border-teal-400/90 shadow-lg shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/25',
  'border-2 border-fuchsia-400/90 shadow-lg shadow-fuchsia-500/10 hover:border-fuchsia-500 hover:shadow-fuchsia-500/25',
  'border-2 border-yellow-400/90 shadow-lg shadow-yellow-500/10 hover:border-yellow-500 hover:shadow-yellow-500/25',
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
            const outlineStyle = serviceCardOutlines[index % serviceCardOutlines.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className={`glass-card bg-white rounded-3xl overflow-hidden ${outlineStyle} hover:-translate-y-2 transition-all duration-500 flex flex-col group`}
              >
                {/* Card Image Banner */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
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
                      className="w-full py-3 bg-slate-100 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 hover:border-transparent transition-all flex items-center justify-center gap-2"
                    >
                      <span>Book Service / Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
