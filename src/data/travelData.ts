import type { Service, Testimonial, FAQ, Metric, CoreValue, WhyUsFeature } from '../types';

export const BUSINESS_INFO = {
  name: 'Khammaghani Travelling & Holidays Udaipur',
  tagline: 'Best Travel Agency & Taxi Service in Udaipur',
  phone: '077280 96547',
  rawPhone: '07728096547',
  whatsappPhone: '917728096547',
  address: 'Old RTO, Dhikli Rd, Krishna Vihar Colony Road, Udaipur, Rajasthan 313001',
  email: '', // Blank per prompt
  facebook: '', // Blank per prompt
  instagram: 'https://www.instagram.com/khammaghani_travelling?utm_source=qr&igsh=MWdwb3A5amFlczdudg%3D%3D',
  mapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58047.710617228346!2d73.68174269811954!3d24.589820395118434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e715f63ff8c1%3A0xe5280fac1d7dff62!2sKhammaghani%20Travelling%20%26%20Holidays%20Udaipur!5e0!3m2!1sen!2sin!4v1784692203974!5m2!1sen!2sin',
  hours: '24 Hours / 7 Days Open',
  city: 'Udaipur, Rajasthan',
};

export const ABOUT_TEXT = `Welcome to Khammaghani Travelling & Holidays Udaipur – your trusted partner for comfortable and affordable travel solutions. We are known as the Best Travel Agency in Udaipur, offering customized tour packages, local sightseeing, and reliable transportation services for every traveler. Whether you need a Taxi Service Udaipur for city tours or a premium Car Rental in Udaipur for family trips, we provide clean vehicles and professional drivers for a smooth journey. We also offer convenient Udaipur to Jodhpur Taxi services and comfortable Udaipur to Mount Abu Cab bookings at budget-friendly prices. As a leading Travel Agency in Udaipur, we focus on customer satisfaction, timely service, and safe travel experiences to make every trip memorable.`;

export const MISSION_TEXT = `To provide reliable, safe, affordable, and memorable travel experiences through quality transportation and customized holiday services.`;

export const VISION_TEXT = `To become Rajasthan's most trusted travel partner by delivering exceptional customer service and unforgettable journeys.`;

export const METRICS: Metric[] = [
  {
    id: 'happy-travelers',
    value: '5000+',
    targetNumber: 5000,
    suffix: '+',
    label: 'Happy Travelers',
    subtext: 'Delighted tourists from across India & globally',
    iconName: 'Users',
  },
  {
    id: 'tour-packages',
    value: '1500+',
    targetNumber: 1500,
    suffix: '+',
    label: 'Tour Packages',
    subtext: 'Custom crafted itineraries across Rajasthan',
    iconName: 'Compass',
  },
  {
    id: 'premium-vehicles',
    value: '100+',
    targetNumber: 100,
    suffix: '+',
    label: 'Premium Vehicles',
    subtext: 'Sedans, SUVs, Luxury Tempo Travellers',
    iconName: 'Car',
  },
  {
    id: 'years-experience',
    value: '10+',
    targetNumber: 10,
    suffix: '+',
    label: 'Years Experience',
    subtext: 'Excellence in Udaipur hospitality & travel',
    iconName: 'Award',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'rajasthan-tour-packages',
    title: 'Rajasthan Tour Packages',
    slug: 'rajasthan-tour-packages',
    iconName: 'Map',
    category: 'packages',
    shortDescription: 'Explore the grand forts, palaces, and vibrant culture of Jaipur, Jodhpur, Jaisalmer & Udaipur.',
    fullDescription: 'Immerse yourself in royal heritage with our tailor-made Rajasthan Tour Packages. Experience golden sand dunes in Jaisalmer, majestic forts in Jaipur, blue heritage lanes in Jodhpur, and romantic lakes in Udaipur with luxury transport and handpicked stay assistance.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹9,999 / person',
    duration: '5 Days / 4 Nights',
    popular: true,
    features: ['Royal Heritage Sightseeing', 'Luxury AC Cabs', 'Desert Safari Included', '24/7 Local Support'],
    included: ['Fuel & Toll Taxes', 'Professional Driver Guide', 'Hotel Pickup & Drop', 'Customizable Itinerary']
  },
  {
    id: 'udaipur-local-sightseeing',
    title: 'Udaipur Local Sightseeing',
    slug: 'udaipur-local-sightseeing',
    iconName: 'Building2',
    category: 'packages',
    shortDescription: 'Discover City Palace, Lake Pichola, Saheliyon Ki Bari, Fatehsagar, and Monsoon Palace in comfort.',
    fullDescription: 'Explore the City of Lakes with our dedicated Udaipur Local Sightseeing taxi tour. Visit iconic landmarks including City Palace Museum, Jagdish Temple, Lake Pichola boat points, Saheliyon ki Bari, Sajjangarh Monsoon Palace, and Shilpgram with experienced drivers.',
    image: '/udaipur-sightseeing.png',
    priceStarting: '₹1,999 / day',
    duration: 'Full Day (8 Hrs / 80 Kms)',
    popular: true,
    features: ['Clean Air-Conditioned Cars', 'Experienced Local Driver', 'Flexible Pickup Location', 'Cover All Major Attractions'],
    included: ['Parking & Tolls', 'Doorstep Pickup', 'Driver Allowance', 'Complimentary Bottled Water']
  },
  {
    id: 'taxi-service-in-udaipur',
    title: 'Taxi Service in Udaipur',
    slug: 'taxi-service-in-udaipur',
    iconName: 'CarTaxiFront',
    category: 'taxis',
    shortDescription: 'Reliable, prompt, and affordable local cab bookings with professional chauffeurs.',
    fullDescription: 'Need a comfortable taxi in Udaipur? We provide round-the-clock taxi services for local commutes, station transfers, shopping trips, and dinner rides across Udaipur with transparent per-km billing and pristine clean vehicles.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹12 / km',
    duration: 'Available 24/7',
    popular: true,
    features: ['Instant Confirmation', 'Sanitized Vehicles', 'GPS Tracked', 'Uniformed Chauffeurs'],
    included: ['No Hidden Charges', 'Immediate Pickup', 'Luggage Assistance', 'AC On All Time']
  },
  {
    id: 'car-rental-in-udaipur',
    title: 'Car Rental in Udaipur',
    slug: 'car-rental-in-udaipur',
    iconName: 'Key',
    category: 'rentals',
    shortDescription: 'Chauffeur-driven luxury sedans, SUVs, Innova Crysta, and Tempo Travellers.',
    fullDescription: 'Rent top-rated cars in Udaipur for family vacations, luxury wedding travel, or corporate delegations. Choose from Swift Dzire, Toyota Etios, Innova Crysta, Fortuner, and 12/17 Seater Tempo Travellers with polite, seasoned drivers.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹2,499 / day',
    duration: 'Daily / Weekly',
    popular: true,
    features: ['Innova Crysta & SUVs', 'Chauffeur Driven', 'Pristine Maintenance', 'Flexible Rental Plans'],
    included: ['All State Taxes Paid', 'Comprehensive Insurance', 'Driver Charges', 'Clean Interiors']
  },
  {
    id: 'udaipur-to-mount-abu-cab',
    title: 'Udaipur to Mount Abu Cab',
    slug: 'udaipur-to-mount-abu-cab',
    iconName: 'Mountain',
    category: 'transfers',
    shortDescription: 'Scenic hill station journey with comfortable one-way and round-trip cab transfers.',
    fullDescription: 'Travel from Udaipur to Rajasthan’s only hill station, Mount Abu, in total luxury. Sightseeing includes Nakki Lake, Dilwara Jain Temples, Sunset Point, and Guru Shikhar with smooth hill-driving drivers.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹3,499 / trip',
    duration: '2.5 - 3 Hours Drive',
    popular: true,
    features: ['Hilly Terrain Experts', 'Point to Point Pickup', 'Enroute Halt Options', 'Scenic View Stops'],
    included: ['Hill Charges & Tolls', 'AC Cab', 'Luggage Carrier (SUV)', 'Driver Allowance']
  },
  {
    id: 'udaipur-to-jodhpur-taxi',
    title: 'Udaipur to Jodhpur Taxi',
    slug: 'udaipur-to-jodhpur-taxi',
    iconName: 'Navigation',
    category: 'transfers',
    shortDescription: 'Direct cab transfer via Ranakpur Jain Temple & Kumbhalgarh Fort.',
    fullDescription: 'Enjoy a smooth highway ride from Udaipur to Jodhpur (The Blue City). Option to include en-route visits to the world-famous marble carved Ranakpur Jain Temple and the formidable Kumbhalgarh Fort wall.',
    image: '/jodhpur-taxi.png',
    priceStarting: '₹4,499 / trip',
    duration: '4.5 Hours Drive',
    popular: true,
    features: ['En-route Ranakpur Tour', 'Express Highway Cabs', 'Flexible Timings', 'Doorstep Drop at Jodhpur'],
    included: ['Highway Tolls', 'Driver Allowance', 'Fuel Expense', 'Luggage Support']
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    slug: 'airport-transfer',
    iconName: 'PlaneTakeoff',
    category: 'transfers',
    shortDescription: 'Punctual Maharana Pratap Airport (UDR) pickup & drop service 24x7.',
    fullDescription: 'Never miss a flight or wait at Udaipur Airport (Dabok). Our punctual airport taxi service tracks flight schedules in real-time to ensure warm welcomes and timely drop-offs.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹899 / transfer',
    duration: 'Punctual Guarantee',
    features: ['Flight Tracking', 'Flight Delay Wait Support', 'Meet & Greet Service', 'Pre-booked Fixed Rate'],
    included: ['Airport Parking', 'Luggage Handling', 'Clean AC Car', 'Direct Hotel Drop']
  },
  {
    id: 'one-way-taxi',
    title: 'One Way Taxi Service',
    slug: 'one-way-taxi',
    iconName: 'ArrowRightCircle',
    category: 'taxis',
    shortDescription: 'Pay only for one-side travel between Udaipur and major cities across India.',
    fullDescription: 'Save up to 40% with our dedicated One Way Taxi service. Travel from Udaipur to Ahmedabad, Nathdwara, Jaipur, Jodhpur, Kota, or Chittorgarh without paying return fares.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹2,999 / trip',
    duration: 'Inter-City Express',
    features: ['Zero Return Charges', 'All Major Routes', 'Instant Booking', 'Professional Drivers'],
    included: ['Toll Taxes Included', 'Door to Door Drop', 'Standard AC Sedan/SUV', '24/7 Helpline']
  },
  {
    id: 'round-trip-taxi',
    title: 'Round Trip Taxi Service',
    slug: 'round-trip-taxi',
    iconName: 'RefreshCw',
    category: 'taxis',
    shortDescription: 'Multi-day outstation taxi rentals for seamless multi-city holiday journeys.',
    fullDescription: 'Book a vehicle and chauffeur for your entire multi-day holiday across Rajasthan. Enjoy total flexibility, unlimited local stops in destination cities, and relaxed travel.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹12 / km (Min 250 km/day)',
    duration: 'Multi-Day Rental',
    features: ['Chauffeur at Service', 'Flexible Itinerary', 'Night Allowance Included', 'Clean Vehicle Standard'],
    included: ['Fuel Charge', 'Driver Stay Allowance', 'Inter-state Permits', '24/7 Roadside Assistance']
  },
  {
    id: 'hotel-booking-assistance',
    title: 'Hotel Booking Assistance',
    slug: 'hotel-booking-assistance',
    iconName: 'Hotel',
    category: 'packages',
    shortDescription: 'Exclusive rates on lake view havelis, luxury resorts, and boutique stays.',
    fullDescription: 'Get insider pricing and guaranteed complimentary room upgrades at Lake Pichola luxury resorts, heritage havelis, and budget-friendly hotels through our preferred hospitality partnerships.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    priceStarting: 'Best Rates Guaranteed',
    duration: 'Concierge Service',
    features: ['Lake View Havelis', 'Heritage Resorts', 'Special Tourist Discounts', 'Instant Confirmation'],
    included: ['Breakfast Included Deals', 'Early Check-in Priority', 'Tax Inclusive Rates', 'Concierge Support']
  },
  {
    id: 'family-tours',
    title: 'Family Tours',
    slug: 'family-tours',
    iconName: 'HeartHandshake',
    category: 'packages',
    shortDescription: 'Safe, fun, and hassle-free itineraries crafted specifically for families and kids.',
    fullDescription: 'Relax and bond with loved ones while we take care of all travel logistics. Family packages include spacious Tempo Travellers/SUVs, kid-friendly attraction visits, and peaceful family stays.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹14,999 / family package',
    duration: '4 Days / 3 Nights',
    features: ['Spacious Vehicle Accommodation', 'Child Friendly Stops', 'Zero Hassle Sightseeing', 'Dedicated Family Guide'],
    included: ['Private SUV / Tempo Traveller', 'Sightseeing Transfers', 'All Permit & Parking Charges', 'Emergency Support']
  },
  {
    id: 'honeymoon-packages',
    title: 'Honeymoon Packages',
    slug: 'honeymoon-packages',
    iconName: 'Sparkles',
    category: 'packages',
    shortDescription: 'Romantic boat rides, candlelit dinners, and royal stay experiences in Venice of the East.',
    fullDescription: 'Celebrate love in Udaipur, the world’s romantic destination. Our honeymoon packages feature private sunset Lake Pichola cruises, luxury lake-front suites, floral decor, and private couple tours.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹18,500 / couple',
    duration: '3 Days / 2 Nights',
    popular: true,
    features: ['Sunset Boat Cruise', 'Romantic Candlelight Dinner', 'Luxury Decor & Cake', 'Private Chauffeur Car'],
    included: ['Welcome Drinks', 'Couples Spa Voucher', 'Private Sightseeing', 'Airport Pickup & Drop']
  },
  {
    id: 'group-tours',
    title: 'Group Tours & College Trips',
    slug: 'group-tours',
    iconName: 'Users',
    category: 'packages',
    shortDescription: 'Cost-effective group travel with 12 to 26 seater luxury Tempo Travellers & Luxury Buses.',
    fullDescription: 'Organizing a large reunion, friend group trip, or college excursion? We offer modern pushback air-conditioned Tempo Travellers with sound systems and experienced drivers at unbeatable group rates.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    priceStarting: '₹22 / km',
    duration: 'Customized Days',
    features: ['12 - 26 Seater Tempo Travellers', 'Pushback Comfort Seats', 'Music System & LED', 'Experienced Group Captain'],
    included: ['Fuel & State Taxes', 'Driver Allowance', 'Luggage Space', 'Group Coordination']
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel & MICE',
    slug: 'corporate-travel',
    iconName: 'Briefcase',
    category: 'rentals',
    shortDescription: 'Executive car rentals, conference logistics, and MICE delegation transportation in Udaipur.',
    fullDescription: 'Impeccable corporate transport solutions for business meetings, conferences, and executive VIP delegations in Udaipur. Includes sleek Mercedes, BMW, Audi, Fortuner, and executive cabs with GST invoices.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    priceStarting: 'Custom Corporate Rates',
    duration: 'Event / Monthly Contract',
    features: ['Executive Luxury Fleet', 'GST Billing & Invoices', 'VIP Chauffeur Etiquette', 'Dedicated Manager'],
    included: ['On-time Guarantee', 'Bottled Water & Newspaper', 'Flight Tracking', 'Flexible Payment Terms']
  },
  {
    id: 'customized-holiday-packages',
    title: 'Customized Holiday Packages',
    slug: 'customized-holiday-packages',
    iconName: 'Sliders',
    category: 'packages',
    shortDescription: 'Design your own itinerary according to your budget, preference, and travel pace.',
    fullDescription: 'Your trip, your rules! Customize every aspect of your Rajasthan itinerary. Mix history, heritage, wildlife in Ranthambore, desert camping in Jaisalmer, or spiritual visits to Nathdwara and Ranakpur.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    priceStarting: 'Custom Tailored Budget',
    duration: 'Flexi-Duration',
    features: ['100% Tailor-made', 'Pace Selected By You', 'Budget to Luxury Choice', 'Personal Travel Planner'],
    included: ['Dedicated Itinerary Architect', '24/7 On-trip Concierge', 'Transfers & Stays', 'Free Consultation']
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'customer-satisfaction',
    title: 'Customer Satisfaction',
    description: 'We measure our success through happy smiles and 5-star tourist reviews.',
    iconName: 'Smile',
  },
  {
    id: 'safety',
    title: 'Safety First',
    description: 'GPS-tracked vehicles, regular maintenance checks, and safety-trained drivers.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'honesty',
    title: 'Honesty & Transparency',
    description: 'No hidden charges, zero surprise tolls, and clear transparent pricing up front.',
    iconName: 'Scale',
  },
  {
    id: 'reliability',
    title: 'Unmatched Reliability',
    description: 'Punctual pickups guaranteed every single time, day or night.',
    iconName: 'Clock',
  },
  {
    id: 'comfort',
    title: 'Supreme Comfort',
    description: 'Plush air-conditioned vehicles equipped with ambient amenities for long rides.',
    iconName: 'Armchair',
  },
  {
    id: 'professional-drivers',
    title: 'Professional Drivers',
    description: 'Courteous, verified, local drivers who double as knowledgeable regional guides.',
    iconName: 'UserCheck',
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable Pricing',
    description: 'Competitive direct tour operator rates offering unmatched value for money.',
    iconName: 'Tag',
  },
  {
    id: 'timely-service',
    title: 'Timely Service',
    description: 'Zero delay commitment for airport drops, station pickups, and tour departures.',
    iconName: 'Zap',
  },
];

export const WHY_CHOOSE_US: WhyUsFeature[] = [
  {
    id: 'prof-drivers',
    title: 'Professional Drivers',
    description: 'Well-mannered, experienced, and background-checked drivers for total peace of mind.',
    iconName: 'Award',
  },
  {
    id: 'aff-packages',
    title: 'Affordable Packages',
    description: 'Tailored holiday and taxi options suited for every budget without compromising quality.',
    iconName: 'PiggyBank',
  },
  {
    id: 'support-247',
    title: '24×7 Customer Support',
    description: 'Always available on phone and WhatsApp to assist you anytime during your travel.',
    iconName: 'Headphones',
  },
  {
    id: 'clean-vehicles',
    title: 'Clean & Sanitized Vehicles',
    description: 'Every car is thoroughly washed and disinfected before every single trip.',
    iconName: 'Sparkles',
  },
  {
    id: 'custom-tours',
    title: 'Customized Tours',
    description: 'Flexible itineraries tailored around your specific interests, timing, and group size.',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 'safe-travel',
    title: '100% Safe Travel',
    description: 'Ideal for solo women travelers, families with kids, and senior citizens.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    description: 'Clear upfront quotes including driver allowance, fuel, state taxes, and toll fees.',
    iconName: 'FileCheck',
  },
  {
    id: 'on-time-pickup',
    title: 'On Time Pickup',
    description: 'We respect your time. Our drivers arrive at your hotel or residence 10 minutes early.',
    iconName: 'Clock4',
  },
  {
    id: 'experienced-team',
    title: 'Experienced Team',
    description: 'Over a decade of local hospitality expertise organizing seamless Rajasthan vacations.',
    iconName: 'Star',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    location: 'Delhi',
    rating: 5,
    date: 'February 2026',
    comment: 'We booked a 4-day Udaipur & Mount Abu taxi package with Khammaghani Travelling. The driver Vikram was polite, punctual, and drove very safely on hill turns. Vehicle was spotless clean. Highest recommendations!',
    tourType: 'Udaipur to Mount Abu Cab',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Priya & Ankit Verma',
    location: 'Mumbai',
    rating: 5,
    date: 'January 2026',
    comment: 'Our honeymoon trip in Udaipur was made extra special by Khammaghani Travelling! From airport pickup to sunset boat arrangements at Lake Pichola, everything was executed effortlessly. Fantastic service!',
    tourType: 'Honeymoon Package',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Amitabh Sen',
    location: 'Kolkata',
    rating: 5,
    date: 'December 2025',
    comment: 'Booked a 17-seater Tempo Traveller for our extended family group tour covering Jaipur, Jodhpur, and Udaipur. Fair rates, zero hidden charges, and extremely professional support from start to finish.',
    tourType: 'Rajasthan Group Tour',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'Sneha Patel',
    location: 'Ahmedabad',
    rating: 5,
    date: 'March 2026',
    comment: 'Best travel agency in Udaipur! We used their one-way taxi from Udaipur to Jodhpur via Ranakpur. Driver was knowledgeable about hidden photography spots and good pure veg restaurants on the highway.',
    tourType: 'Udaipur to Jodhpur Taxi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '5',
    name: 'Dr. Ramesh Kumar',
    location: 'Bangalore',
    rating: 5,
    date: 'January 2026',
    comment: 'Very reliable airport transfer service in Udaipur. Even though our flight was delayed by 45 minutes, driver was waiting warmly at Dabok airport holding a name sign. Smooth and comfortable ride.',
    tourType: 'Airport Transfer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '6',
    name: 'Meera Iyer',
    location: 'Chennai',
    rating: 5,
    date: 'February 2026',
    comment: 'Exceptional service for local Udaipur sightseeing! We visited City Palace, Saheliyon ki Bari, and Sajjangarh. Innova Crysta was super clean and comfortable for my elderly parents.',
    tourType: 'Udaipur Local Sightseeing',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Taxi Booking',
    question: 'How do I book a Taxi or Tour Package with Khammaghani Travelling?',
    answer: 'You can book instantly by calling or messaging us on WhatsApp at 077280 96547. You can also fill out the online Contact Form on our website, and our team will get in touch with you immediately to confirm details.',
  },
  {
    id: 'faq-2',
    category: 'Tour Packages',
    question: 'Are tour packages in Udaipur customizable for families or couples?',
    answer: 'Yes! All our Rajasthan and Udaipur tour packages are 100% customizable. You can adjust the number of days, hotel choices, sight-seeing destinations, and vehicle type according to your preferences.',
  },
  {
    id: 'faq-3',
    category: 'Car Rental',
    question: 'What types of cars are available for rental in Udaipur?',
    answer: 'We maintain a wide fleet including Swift Dzire, Toyota Etios (Sedans), Toyota Innova Crysta, Mahindra XUV700, Fortuner (SUVs), and 12/17/26-seater Luxury Tempo Travellers.',
  },
  {
    id: 'faq-4',
    category: 'Payments',
    question: 'What are the payment methods accepted and cancellation terms?',
    answer: 'We accept UPI (GPay, PhonePe, Paytm), Net Banking, Credit/Debit Cards, and Cash. We offer flexible cancellation policies with zero penalty for cancellations made 24 hours prior to trip start.',
  },
  {
    id: 'faq-5',
    category: 'Driver Availability',
    question: 'Are the drivers safe, experienced, and local to Udaipur?',
    answer: 'Absolutely. All our chauffeurs are local Rajputs/Rajasthanis with thorough knowledge of routes, heritage stories, local food spots, and safe mountain driving. They are verified and background-checked.',
  },
  {
    id: 'faq-6',
    category: 'Airport Pickup',
    question: 'Do you offer 24x7 Airport Pickups from Maharana Pratap Airport Udaipur?',
    answer: 'Yes, we provide round-the-clock airport transfers to and from Maharana Pratap Airport (Dabok). Our driver tracks your flight schedule in case of any flight delay.',
  },
  {
    id: 'faq-7',
    category: 'Outstation Travel',
    question: 'Are state taxes, toll taxes, and driver allowance included in quotes?',
    answer: 'Yes, we maintain 100% price transparency. Our written quotes clearly mention toll, parking, driver allowance, and state tax inclusions so there are no surprises during your journey.',
  },
  {
    id: 'faq-8',
    category: 'Booking Process',
    question: 'Can I book a one-way taxi from Udaipur to Jodhpur or Mount Abu?',
    answer: 'Yes! We specialize in one-way taxi drops from Udaipur to Jodhpur, Mount Abu, Jaipur, Ahmedabad, Chittorgarh, and Nathdwara at budget-friendly one-side prices.',
  }
];
