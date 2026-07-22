import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, PhoneCall, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../../data/travelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || SERVICES[0].title,
    date: '',
    passengers: '1-4 Persons',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Format WhatsApp message
    const waText = encodeURIComponent(
      `*New Trip Inquiry - Khammaghani Travelling*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Travel Date:* ${formData.date || 'To be decided'}\n` +
      `*Group Size:* ${formData.passengers}\n` +
      `*Message:* ${formData.message || 'I would like to inquire about pricing and availability.'}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${waText}`, '_blank');
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg glass-panel bg-white/95 rounded-3xl p-5 sm:p-8 shadow-2xl z-10 border border-sky-100/50 max-h-[90vh] overflow-y-auto my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-slate-600 mb-6">
                  Redirecting to WhatsApp to connect directly with our travel expert...
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl shadow-lg hover:bg-sky-700 transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-700 font-semibold rounded-full text-xs uppercase tracking-wider mb-2">
                    Instant Quote
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Book Your Trip in Seconds</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Fill out details below or reach us immediately via phone/WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="077280 96547"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Service Desired
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm transition-all"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Passengers
                      </label>
                      <select
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm transition-all"
                      >
                        <option value="1-4 Persons (Sedan)">1-4 Persons (Sedan)</option>
                        <option value="5-7 Persons (Innova/SUV)">5-7 Persons (Innova/SUV)</option>
                        <option value="8-12 Persons (Tempo)">8-12 Persons (Tempo)</option>
                        <option value="13+ Group Travel">13+ Group Travel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Additional Details / Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify hotel pickup, places to visit, or special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Send WhatsApp Inquiry
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all text-center"
                    >
                      <PhoneCall className="w-4 h-4 text-orange-400" />
                      Call Directly
                    </a>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
