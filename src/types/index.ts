export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  category: 'packages' | 'taxis' | 'rentals' | 'transfers';
  shortDescription: string;
  fullDescription: string;
  image: string;
  priceStarting: string;
  duration?: string;
  features: string[];
  included: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tourType: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Metric {
  id: string;
  value: string;
  targetNumber: number;
  suffix: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormPayload {
  name: string;
  phone: string;
  service: string;
  date?: string;
  message: string;
}
