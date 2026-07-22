import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { FAQS, BUSINESS_INFO } from '../../data/travelData';
import { ChevronDown, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(FAQS.map((faq) => faq.category)))];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Khammaghani Travelling Udaipur! I have a question regarding taxi booking and tour packages.'
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about booking taxis, car rentals, and tour packages in Udaipur."
          theme="light"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-300 border ${
                    isOpen
                      ? 'bg-gradient-to-r from-sky-50/90 via-white to-blue-50/40 border-sky-300 shadow-xl shadow-sky-500/10'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Left Accent Strip when open */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-sky-500 to-blue-600 transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30 scale-105'
                            : 'bg-sky-50 text-sky-600 group-hover:bg-sky-100'
                        }`}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <span className={`font-black text-base sm:text-lg transition-colors ${
                        isOpen ? 'text-sky-700' : 'text-slate-900 group-hover:text-sky-600'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-sky-100 text-sky-600 rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100/60 ml-4 sm:ml-16">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-800 text-[10px] font-black uppercase rounded-full mb-3 shadow-2xs">
                            <Sparkles className="w-3 h-3 text-sky-600" />
                            <span>{faq.category}</span>
                          </div>
                          <p className="font-medium text-slate-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Help Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 shadow-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
              24/7 Travel Assistance
            </span>
            <h3 className="text-2xl font-black text-white">Have More Questions?</h3>
            <p className="text-xs sm:text-sm text-sky-100 font-medium">
              Reach our local Udaipur travel experts directly via Phone or WhatsApp anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 0C5.396 0 .02 5.376.02 12.012c0 2.121.553 4.19 1.606 6.014L0 24l6.143-1.61A11.96 11.96 0 0012.03 24c6.636 0 12.012-5.376 12.012-12.012C24.043 5.376 18.667 0 12.031 0zm0 22.006c-1.808 0-3.578-.485-5.13-1.405l-.368-.218-3.81 1 .998-3.715-.24-.38A9.972 9.972 0 012.028 12.01c0-5.515 4.486-10.002 10.003-10.002 5.516 0 10.002 4.487 10.002 10.002 0 5.516-4.486 10.002-10.002 10.002zm5.485-7.502c-.301-.15-1.782-.879-2.057-.979-.275-.1-.476-.15-.677.15-.201.3-.777.979-.953 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.131-.613.136-.135.301-.351.452-.526.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.235-.244-.587-.492-.507-.677-.516-.175-.008-.376-.01-.577-.01s-.526.075-.802.376c-.276.301-1.053 1.029-1.053 2.508 0 1.479 1.078 2.907 1.228 3.108.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.578-.086 1.782-.727 2.033-1.429.251-.702.251-1.303.176-1.429-.075-.126-.276-.201-.577-.351z"/>
              </svg>
              <span>WhatsApp Chat</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 fill-sky-600" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Call Desk</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
