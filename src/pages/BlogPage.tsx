import React from 'react';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/home/CTASection';
import { BUSINESS_INFO } from '../data/travelData';
import { PhoneCall, Calendar, Clock, ShieldCheck, Sparkles, UserCheck, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BlogPageProps {
  onOpenBooking: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEO
        title="Best Travel Agency in Udaipur | Top Cab & Taxi Service | Call 077280 96547"
        description="Looking for the best travel agency in Udaipur or trusted cab service in Udaipur? Khammaghani Travelling & Holidays offers luxury Udaipur taxi service, outstation cabs, and customized tour packages. Call 077280 96547."
        keywords="best travel agency in udaipur, travel agency in udaipur, cab service in udaipur, udaipur taxi servcie, 077280 96547, Udaipur tour packages, outstation taxi Udaipur"
        canonicalUrl="https://udaipurbesttaxiservice.com/blog"
      />

      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=2000&q=80"
            alt="Udaipur City Palace and Lake Pichola"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-xs font-black uppercase tracking-widest border border-sky-500/30">
            <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>Official Travel &amp; Taxi Guide 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            The Ultimate Udaipur Travel Guide: Why Booking with the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400">
              Best Travel Agency in Udaipur
            </span>{' '}
            Guarantees a Royal Holiday
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 font-semibold pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Published: Aug 2026</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>7 Min Read</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>100% Verified Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Article Body */}
      <article className="py-16 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Quick Call Out Card */}
          <div className="p-6 bg-gradient-to-r from-sky-50 via-emerald-50 to-amber-50 rounded-3xl border-2 border-sky-100 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-md text-[11px] font-black uppercase tracking-wider">
                Instant Desk Assistance
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-2">
                Need an immediate taxi or custom tour quote?
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Call or WhatsApp our travel desk directly at <strong className="text-slate-900 font-black">077280 96547</strong>.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:scale-105 transition-all shrink-0 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 077280 96547</span>
            </a>
          </div>

          {/* Article Introduction */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
            <p>
              Udaipur, affectionately celebrated as the <strong>City of Lakes</strong> and the <strong>Venice of the East</strong>, stands as one of India's most enchanting destinations. From the gleaming waters of Lake Pichola to the towering architectural marvel of the City Palace, every corner of this historic Mewar capital whispers stories of royal valor, romantic heritage, and timeless beauty.
            </p>
            <p>
              However, transforming a good vacation into an unforgettable royal experience requires seamless travel logistics, transparent pricing, and local expertise. Whether you are arriving at Maharana Pratap Airport (UDR), Udaipur City Railway Station, or planning a road journey from nearby hubs, choosing an established <strong>travel agency in Udaipur</strong> is the single most important decision for your trip.
            </p>
            <p>
              In this comprehensive guide, we explore how <strong>Khammaghani Travelling &amp; Holidays Udaipur</strong> (Direct Hotline: <strong>077280 96547</strong>) delivers world-class sightseeing, outstation transfers, and luxury fleet options as the <strong>best travel agency in Udaipur</strong>.
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              1. What Makes Khammaghani Travelling &amp; Holidays the Best Travel Agency in Udaipur?
            </h2>
            <p className="text-slate-700 text-base leading-relaxed font-medium">
              Navigating a destination rich in heritage requires more than just a navigation map; it requires authentic local insight and reliable transportation. Here is why discerning travelers rank us as their premier <strong>travel agency in Udaipur</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="p-3 bg-sky-100 text-sky-700 rounded-xl w-fit">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">Mewari Expertise</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Our native drivers double as local guides, ensuring traffic-free routes and authentic dining spots.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl w-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">Pristine Fleet</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Commercially licensed Sedans, Innova Crystas, Fortuners, and Tempo Travellers with GPS.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-xl w-fit">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">Transparent Billing</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  All-inclusive quotes covering fuel, driver allowance, tolls, and parking with zero hidden costs.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              2. Comprehensive Services Offered by Our Cab Service in Udaipur
            </h2>
            <p className="text-slate-700 text-base leading-relaxed font-medium">
              Whether you need a quick airport transfer or a 7-day complete Rajasthan heritage tour, our customized <strong>udaipur taxi servcie</strong> options cater to every budget:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-900 text-white font-extrabold uppercase text-xs">
                  <tr>
                    <th className="py-4 px-6">Service Category</th>
                    <th className="py-4 px-6">Recommended Fleet</th>
                    <th className="py-4 px-6">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-900">Local Udaipur Sightseeing</td>
                    <td className="py-4 px-6">Swift Dzire, Etios, Innova</td>
                    <td className="py-4 px-6">City Palace, Jagdish Temple, Saheliyon Ki Bari</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-900">Airport &amp; Station Transfers</td>
                    <td className="py-4 px-6">AC Sedan, SUV</td>
                    <td className="py-4 px-6">24/7 transfers to Maharana Pratap Airport (UDR)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-900">Outstation Excursions</td>
                    <td className="py-4 px-6">Innova Crysta, Fortuner</td>
                    <td className="py-4 px-6">Kumbhalgarh, Ranakpur, Chittorgarh, Mount Abu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              3. Top Sights to Visit with Our Premier Cab Service in Udaipur
            </h2>
            <div className="space-y-4 text-slate-700 font-medium">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                <p><strong>The City Palace Complex:</strong> Explore four centuries of regal Mewari architecture with convenient front-gate driver drop-offs.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                <p><strong>Lake Pichola &amp; Jagmandir:</strong> Experience golden boat cruises timed seamlessly with your driver's schedule.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                <p><strong>Sajjangarh Monsoon Palace:</strong> Enjoy panoramic sunset views high atop the Aravalli Hills guided by experienced mountain chauffeurs.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-8 bg-slate-900 text-white rounded-3xl space-y-6 shadow-xl">
            <h2 className="text-2xl font-black text-white">
              Trust, Safety &amp; Verified Excellence
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Khammaghani Travelling &amp; Holidays Udaipur guarantees maximum comfort and passenger safety. Every chauffeur undergoes rigorous background checks and possesses over 5+ years of highway driving experience. For instant bookings or tour planning, contact our desk directly at <strong className="text-amber-400">077280 96547</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 font-black text-sm rounded-xl shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Cab Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl transition-colors text-center"
              >
                Call Desk: 077280 96547
              </a>
            </div>
          </section>

        </div>
      </article>

      <CTASection onOpenBooking={onOpenBooking} />
    </>
  );
};
