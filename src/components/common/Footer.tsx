import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../../data/travelData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-amber-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div>
                <span className="block font-black text-lg tracking-tight text-white">
                  Khammaghani
                </span>
                <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase block">
                  Travelling & Holidays Udaipur
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Rajasthan's most trusted travel agency offering luxury taxi services, custom tour packages, car rentals, and memorable holiday experiences in Udaipur.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-center text-pink-400 hover:text-pink-300 hover:scale-110 transition-all shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex items-center justify-center text-amber-400 hover:text-amber-300 hover:scale-110 transition-all shadow-md"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About Our Company', path: '/about' },
                { label: 'Our Travel Services', path: '/services' },
                { label: 'Customer Reviews', path: '/testimonials' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-sky-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Top Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-3">
              Contact & Location
            </h4>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Phone className="w-5 h-5 text-amber-400 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:text-amber-300 font-bold">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
              <span className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                Newsletter Deals
              </span>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Govt. Approved Travel Operator Udaipur</span>
          </div>

          {/* Exact Required Footer Copyright */}
          <p className="leading-relaxed">
            ©️ Copyright 2026 | Khammaghani Travelling & Holidays Udaipur | All Rights Reserved | Powered by{' '}
            <a
              href="https://www.futurexdigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#28a745' }}
              className="font-bold hover:underline"
            >
              Future X Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
