import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { MissionVisionSection } from '../components/home/MissionVisionSection';
import { CoreValuesSection } from '../components/home/CoreValuesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { CTASection } from '../components/home/CTASection';
import { ABOUT_TEXT } from '../data/travelData';
import { CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEO
        title="About Us | Khammaghani Travelling & Holidays Udaipur"
        description="Learn about Khammaghani Travelling & Holidays Udaipur - your premier travel partner in Rajasthan offering reliable taxi services, tour packages, and car rentals."
      />

      {/* Page Hero Banner */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=80"
            alt="Rajasthan Fort Banner"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-sky-500/20 text-sky-300 rounded-full text-xs font-black uppercase tracking-widest border border-sky-400/30">
              Welcome to Khammaghani Travelling
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              About Our Company
            </h1>
            <p className="text-slate-300 text-lg">
              Known as the Best Travel Agency in Udaipur, dedicated to making every journey safe, comfortable, and memorable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Story & Introduction */}
      <section className="py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Our Story"
                title="A Legacy of Hospitality & Trust in Udaipur"
                centered={false}
              />

              <div className="glass-card bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  {ABOUT_TEXT}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'Clean & sanitized air-conditioned vehicles before every journey.',
                  'Experienced local drivers with deep route knowledge & safety records.',
                  'Direct transparent pricing with zero hidden charges or surprise tolls.',
                  'Dedicated 24/7 helpline support for on-road assistance.',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-700 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
                    alt="Luxury Sedan Taxi Udaipur"
                    className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-64 object-cover w-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Mount Abu Scenic Hills"
                    className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-48 object-cover w-full"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=600&q=80"
                    alt="Udaipur City Palace"
                    className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-48 object-cover w-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1588083984681-ba58bf23d1d9?auto=format&fit=crop&w=600&q=80"
                    alt="Jodhpur Mehrangarh Fort"
                    className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-64 object-cover w-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pristine Fleet"
            title="Vehicles Built For Modern Travel Comfort"
            subtitle="Choose from our wide range of meticulously maintained sedans, luxury SUVs, and Tempo Travellers."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'AC Executive Sedans',
                model: 'Swift Dzire / Toyota Etios',
                capacity: '4 Passengers + Driver',
                ideal: 'City Tours & Airport Drops',
                image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Luxury Premium SUVs',
                model: 'Toyota Innova Crysta',
                capacity: '6-7 Passengers + Driver',
                ideal: 'Family Trips & Mount Abu Rides',
                image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Grand Family SUVs',
                model: 'Mahindra XUV700 / Fortuner',
                capacity: '6 Passengers + Driver',
                ideal: 'VIP Travel & Outstation Tours',
                image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Luxury Tempo Travellers',
                model: '12 / 17 / 26 Seater AC',
                capacity: 'Large Groups & Delegations',
                ideal: 'Group Rajasthan Tours',
                image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
              },
            ].map((fleet, idx) => (
              <div key={idx} className="glass-dark rounded-3xl overflow-hidden border border-white/10 p-5 space-y-4">
                <img
                  src={fleet.image}
                  alt={fleet.name}
                  className="w-full h-44 object-cover rounded-2xl"
                />
                <div>
                  <h4 className="font-extrabold text-lg text-white">{fleet.name}</h4>
                  <p className="text-xs text-sky-400 font-bold">{fleet.model}</p>
                </div>
                <div className="text-xs text-slate-300 space-y-1 border-t border-white/10 pt-3">
                  <p>👥 <span className="font-semibold">{fleet.capacity}</span></p>
                  <p>✨ <span className="font-semibold">{fleet.ideal}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <CTASection onOpenBooking={onOpenBooking} />
    </>
  );
};
