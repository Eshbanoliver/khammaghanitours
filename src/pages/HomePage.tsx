import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { MetricsSection } from '../components/home/MetricsSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { MissionVisionSection } from '../components/home/MissionVisionSection';
import { CoreValuesSection } from '../components/home/CoreValuesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { CTASection } from '../components/home/CTASection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import type { Service } from '../types';

interface HomePageProps {
  onOpenBooking: (service?: Service) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEO
        title="Khammaghani Travelling & Holidays Udaipur | Best Travel Agency & Taxi Service"
        description="Book luxury taxi services, Udaipur local sightseeing, car rentals, Udaipur to Mount Abu cab & Rajasthan tour packages with Khammaghani Travelling & Holidays Udaipur."
      />
      <HeroSection onOpenBooking={() => onOpenBooking()} />
      <AboutSection />
      <MetricsSection />
      <ServicesGrid onSelectService={(service) => onOpenBooking(service)} />
      <MissionVisionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <CTASection onOpenBooking={() => onOpenBooking()} />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};
