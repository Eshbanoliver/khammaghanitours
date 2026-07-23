import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { MissionVisionSection } from '../components/home/MissionVisionSection';
import { CoreValuesSection } from '../components/home/CoreValuesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { CTASection } from '../components/home/CTASection';
import { ABOUT_TEXT } from '../data/travelData';
import { Sparkles, Quote, ShieldCheck, Award, Clock, HeartHandshake, ArrowRight, Star, Users, Car, Fuel } from 'lucide-react';

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
            src="/images/udaipur_city_palace.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=80";
            }}
            alt="Udaipur City Palace Banner"
            className="w-full h-full object-cover opacity-30"
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

      {/* Detailed Story & Introduction - Creative & Interactive */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 relative overflow-hidden">
        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Interactive Story & Features */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-sky-500/10 via-amber-500/10 to-orange-500/10 border border-sky-400/30 rounded-full text-xs font-extrabold text-sky-700 tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                  <span>Our Story &amp; Heritage</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  A Legacy of Hospitality &amp; Trust in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-amber-500 to-orange-600">
                    Udaipur
                  </span>
                </h2>
              </div>

              {/* Glass Story Quote Box */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-sky-500/10 group-hover:text-amber-500/20 transition-colors" />
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium relative z-10">
                  {ABOUT_TEXT}
                </p>
              </div>

              {/* Interactive Key Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    icon: ShieldCheck,
                    color: 'text-emerald-500 bg-emerald-50 border-emerald-200',
                    title: 'Clean & Sanitized Fleet',
                    desc: 'AC cabs thoroughly disinfected before every journey.',
                  },
                  {
                    icon: Award,
                    color: 'text-amber-500 bg-amber-50 border-amber-200',
                    title: 'Experienced Local Drivers',
                    desc: 'Deep Rajasthan route knowledge & 100% safety record.',
                  },
                  {
                    icon: Clock,
                    color: 'text-sky-500 bg-sky-50 border-sky-200',
                    title: 'Transparent Pricing',
                    desc: 'Direct fares with zero hidden fees or surprise tolls.',
                  },
                  {
                    icon: HeartHandshake,
                    color: 'text-rose-500 bg-rose-50 border-rose-200',
                    title: '24/7 Road Support',
                    desc: 'Dedicated instant helpline active throughout your trip.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3.5"
                  >
                    <div className={`p-2.5 rounded-xl border ${item.color} shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 hover:from-sky-600 hover:to-indigo-600 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Book Your Rajasthan Tour</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-400" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Creative Visual Container with Floating Dynamic Badges */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              {/* Outer Decorative Gradient Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-sky-400 via-amber-400 to-orange-500 shadow-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950">
                  <img
                    src="/udaipur-sightseeing.png"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80";
                    }}
                    alt="Khammaghani Travelling & Holidays Udaipur"
                    className="w-full h-[450px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Floating Badge Top-Right: #1 Rated */}
                  <div className="absolute top-5 right-5 px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-amber-400/40 shadow-xl flex items-center gap-2.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-black text-white">5.0 / 5 Rated</span>
                  </div>

                  {/* Floating Badge Middle-Right: Verified Guarantee */}
                  <div className="hidden sm:flex absolute top-1/2 -right-4 translate-y-[-50%] px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl border border-emerald-300 shadow-2xl items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-black text-slate-900">Guaranteed Fares</span>
                      <span className="text-[11px] font-semibold text-slate-600">Zero Toll Surprises</span>
                    </div>
                  </div>

                  {/* Bottom Main Floating Glass Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black text-xl shrink-0 shadow-lg">
                          10+
                        </div>
                        <div>
                          <h4 className="font-extrabold text-white text-sm sm:text-base">Years of Royal Hospitality</h4>
                          <p className="text-xs text-sky-300 font-semibold">15,000+ Delighted Travelers Served</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Mini-Stats Bar */}
              <div className="grid grid-cols-3 gap-3 pt-6">
                <div className="p-3 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm">
                  <span className="block text-lg font-black text-sky-600">100%</span>
                  <span className="text-[11px] font-bold text-slate-600">AC Fleet</span>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm">
                  <span className="block text-lg font-black text-amber-500">24/7</span>
                  <span className="text-[11px] font-bold text-slate-600">Road Support</span>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm">
                  <span className="block text-lg font-black text-emerald-600">5.0 ★</span>
                  <span className="text-[11px] font-bold text-slate-600">Google Rating</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Fleet Showcase - Creative & Interactive */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Mesh Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Pristine Fleet"
            title="Vehicles Built For Modern Travel Comfort"
            subtitle="Choose from our wide range of meticulously maintained sedans, luxury SUVs, and Tempo Travellers."
            theme="dark"
          />

          {/* Key Fleet Assurance Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { icon: ShieldCheck, text: '100% Sanitized & Disinfected' },
              { icon: Car, text: 'Dual AC Climate Control' },
              { icon: Fuel, text: 'All-India Tourist Permitted' },
              { icon: Users, text: 'Experienced Uniformed Chauffeurs' },
            ].map((assurance, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-xs font-semibold text-sky-300 backdrop-blur-md shadow-sm"
              >
                <assurance.icon className="w-4 h-4 text-amber-400" />
                <span>{assurance.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'AC Executive Sedans',
                model: 'Swift Dzire / Toyota Etios',
                capacity: '4 Passengers + 1 Driver',
                luggage: '2 Large + 2 Small Bags',
                ideal: 'City Tours & Airport Drops',
                tag: 'Economical & Swift',
                badgeColor: 'from-sky-500 to-blue-600',
                image: '/jodhpur-taxi.png',
                fallback: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Luxury Premium SUVs',
                model: 'Toyota Innova Crysta',
                capacity: '6-7 Passengers + 1 Driver',
                luggage: '4 Large Bags',
                ideal: 'Family Trips & Mount Abu Rides',
                tag: 'Most Popular Choice',
                badgeColor: 'from-amber-400 to-orange-500 text-slate-950',
                image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
                fallback: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Grand Family SUVs',
                model: 'Mahindra XUV700 / Fortuner',
                capacity: '6 Passengers + 1 Driver',
                luggage: '3 Large Bags',
                ideal: 'VIP Travel & Outstation Tours',
                tag: 'Royal VIP Comfort',
                badgeColor: 'from-purple-500 to-indigo-600',
                image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
                fallback: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Luxury Tempo Travellers',
                model: '12 / 17 / 26 Seater AC',
                capacity: 'Large Groups & Delegations',
                luggage: 'Spacious Rear Boot',
                ideal: 'Group Rajasthan Tours',
                tag: 'Group Travel Leader',
                badgeColor: 'from-emerald-400 to-teal-600',
                image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
                fallback: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
              },
            ].map((fleet, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-sky-500/50 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Floating Pill */}
                  <div className="relative h-52 overflow-hidden bg-slate-950">
                    <img
                      src={fleet.image}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fleet.fallback;
                      }}
                      alt={fleet.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    
                    <span className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${fleet.badgeColor} rounded-full text-[11px] font-black uppercase tracking-wider shadow-md`}>
                      {fleet.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-extrabold text-xl text-white group-hover:text-sky-300 transition-colors">
                        {fleet.name}
                      </h4>
                      <p className="text-xs text-amber-400 font-bold mt-0.5">{fleet.model}</p>
                    </div>

                    <div className="space-y-2 border-t border-slate-800/80 pt-3 text-xs text-slate-300 font-medium">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{fleet.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Luggage: {fleet.luggage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Ideal for: {fleet.ideal}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 px-4 bg-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-600 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-sky-500/20"
                  >
                    <span>Reserve Vehicle</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
                  </button>
                </div>
              </motion.div>
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
