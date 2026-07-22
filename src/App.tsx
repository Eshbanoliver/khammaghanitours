import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingButtons } from './components/common/FloatingButtons';
import { BookingModal } from './components/common/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import type { Service } from './types';

// Scroll to Top on page transition
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  const handleOpenBooking = (service?: Service) => {
    if (service) {
      setSelectedServiceTitle(service.title);
    } else {
      setSelectedServiceTitle('');
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceTitle('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      <ScrollToTopOnNavigate />

      {/* Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Router */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
          <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/testimonials" element={<TestimonialsPage onOpenBooking={() => handleOpenBooking()} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedServiceTitle}
      />
    </div>
  );
};

export function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
