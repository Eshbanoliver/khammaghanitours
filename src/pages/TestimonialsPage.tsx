import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/travelData';
import { Star, CheckCircle2, Sparkles, Quote, MessageSquareHeart, Award, ThumbsUp, ArrowRight, PhoneCall } from 'lucide-react';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEO
        title="Testimonials & Reviews | Khammaghani Travelling & Holidays Udaipur"
        description="Read real 5-star customer reviews & testimonials for Khammaghani Travelling & Holidays Udaipur. Top rated travel agency and taxi provider in Udaipur."
      />

      {/* Dynamic Creative Light Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-amber-50/40 text-slate-900 overflow-hidden border-b border-slate-200/80">
        {/* Background Image Banner with Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/udaipur_city_palace.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=80";
            }}
            alt="Customer Testimonials Banner"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/60 to-transparent" />
        </div>

        {/* Soft Ambient Background Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 text-amber-800 rounded-full text-xs font-black uppercase tracking-widest border border-amber-400/30 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                <span>Verified 5.0 Rating • 100% Guest Satisfaction</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Loved by Travelers Across{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-sky-600">
                  Rajasthan &amp; India
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover authentic reviews from family vacationers, solo explorers, and luxury tour couples who trusted our drivers, pristine fleet, and royal hospitality in Udaipur.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
                <div className="p-3.5 bg-white/95 rounded-2xl border border-slate-200/90 text-center shadow-md">
                  <div className="flex justify-center text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="block text-sm font-black text-slate-900">5.0 / 5.0</span>
                  <span className="text-[11px] font-bold text-slate-500">Google Reviews</span>
                </div>

                <div className="p-3.5 bg-white/95 rounded-2xl border border-slate-200/90 text-center shadow-md">
                  <span className="block text-lg font-black text-amber-500">15,000+</span>
                  <span className="text-[11px] font-bold text-slate-500">Happy Guests</span>
                </div>

                <div className="p-3.5 bg-white/95 rounded-2xl border border-slate-200/90 text-center shadow-md">
                  <span className="block text-lg font-black text-emerald-600">99.8%</span>
                  <span className="text-[11px] font-bold text-slate-500">5-Star Reviews</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-base rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>Book Your 5-Star Tour</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-5 h-5 text-amber-400" />
                  <span>Talk to Our Desk</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Creative Floating Testimonial Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-amber-400 via-orange-400 to-sky-400 shadow-2xl">
                <div className="relative rounded-[22px] p-6 sm:p-8 bg-white/95 backdrop-blur-xl border border-slate-200/90 space-y-6">
                  
                  {/* Floating Header Badge */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                        <MessageSquareHeart className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm">Featured Guest Story</h4>
                        <p className="text-[11px] text-amber-600 font-bold">Verified Udaipur Tour Experience</p>
                      </div>
                    </div>

                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Main Highlight Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-10 h-10 text-amber-500/10 pointer-events-none" />
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative z-10 pl-2 font-medium">
                      "Khammaghani Travelling made our Udaipur and Mount Abu trip unforgettable! Clean Innova Crysta, polite driver who knew every hidden spot in Rajasthan. Highly recommended!"
                    </p>
                  </div>

                  {/* User Profile Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                        alt="Ananya Sharma"
                        className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-md"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-slate-900 text-sm">Ananya &amp; Family</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-xs text-slate-500 font-semibold">Mumbai • Udaipur 3D/2N Tour</span>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-black">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge Top-Right */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl shadow-xl font-black text-xs flex items-center gap-2 border border-white/20">
                <Award className="w-4 h-4 text-amber-300" />
                <span>#1 Travel Partner</span>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Auto Slider Section - Light Mode */}
      <TestimonialsSection theme="light" />

      {/* Grid View of Reviews - Light Mode */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100/80 text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="All Reviews"
            title="Stories From Verified Travelers"
            subtitle="Read individual feedback from guests who explored Udaipur, Mount Abu, and Jodhpur with us."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-amber-400 hover:-translate-y-1.5 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-bold">{item.date}</span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6 font-medium">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-amber-400 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">{item.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <p className="text-[11px] text-slate-500 font-semibold">{item.location} • {item.tourType}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpenBooking={onOpenBooking} />
    </>
  );
};
