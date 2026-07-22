import React from 'react';
import { SEO } from '../components/common/SEO';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { CTASection } from '../components/home/CTASection';
import type { Service } from '../types';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (service?: Service) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEO
        title="Services | Khammaghani Travelling & Holidays Udaipur"
        description="Browse all travel services offered by Khammaghani Travelling Udaipur: Taxi Service, Car Rental, Udaipur Sightseeing, Mount Abu Cabs, Jodhpur Taxis & Rajasthan Tour Packages."
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=2000&q=80"
            alt="Services Banner"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-sky-500/20 text-sky-300 rounded-full text-xs font-black uppercase tracking-widest border border-sky-400/30">
            Tailored For Every Journey
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Our Travel &amp; Taxi Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From local city tours and airport drops to outstation cab bookings and royal Rajasthan holiday packages.
          </p>
        </div>
      </section>

      {/* Main Filterable Services Section */}
      <ServicesGrid onSelectService={(service) => onOpenBooking(service)} />

      {/* Service Guarantees */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">GPS Tracked Safety</h3>
              <p className="text-slate-600 text-sm">
                All taxis are equipped with real-time tracking, emergency assistance, and vetted drivers.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">On-Time Pickup Guarantee</h3>
              <p className="text-slate-600 text-sm">
                We value your time. Drivers arrive 10 minutes prior to scheduled departure time.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Flat Rates</h3>
              <p className="text-slate-600 text-sm">
                Clear all-inclusive quotes with driver allowance, fuel, and state taxes specified.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection onOpenBooking={() => onOpenBooking()} />
    </>
  );
};
