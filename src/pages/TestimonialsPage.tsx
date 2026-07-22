import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';
import { TESTIMONIALS } from '../data/travelData';
import { Star, CheckCircle2 } from 'lucide-react';

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

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-300 rounded-full text-xs font-black uppercase tracking-widest border border-amber-400/30">
            ★ 5.0 Rated Travel Agency
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Customer Reviews &amp; Testimonials
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Discover why hundreds of happy tourists leave 5-star reviews for our drivers, vehicles, and tour packages.
          </p>
        </div>
      </section>

      {/* Auto Slider Section */}
      <TestimonialsSection />

      {/* Grid View of Reviews */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="All Reviews"
            title="Stories From Verified Travelers"
            subtitle="Read individual feedback from guests who explored Udaipur, Mount Abu, and Jodhpur with us."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-dark rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-amber-400"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-white text-sm">{item.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-slate-400">{item.location} • {item.tourType}</p>
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
