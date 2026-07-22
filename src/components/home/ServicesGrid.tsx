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
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Offerings"
          title="Premium Travel & Taxi Services in Udaipur"
          subtitle="Explore our comprehensive range of holiday packages, outstation cabs, and luxury car rentals tailored for every traveler."
          theme="dark"
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
                    : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass-dark rounded-3xl overflow-hidden border border-white/10 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {service.popular && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-full shadow-md">
                    Popular Choice
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-slate-200">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/10">
                    {service.priceStarting}
                  </span>
                  {service.duration && (
                    <span className="px-3 py-1 bg-sky-500/80 backdrop-blur-md rounded-lg text-white">
                      {service.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-sky-500/20 transition-colors">
                      {iconComponents[service.iconName]}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 bg-white/5 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/10 group-hover:border-sky-500/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book Service / Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
