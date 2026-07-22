import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../../data/travelData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = `${BUSINESS_INFO.name} | Best Travel Agency & Taxi Service in Udaipur`,
  description = `Khammaghani Travelling & Holidays Udaipur is the best travel agency in Udaipur offering luxury taxi service, Udaipur local sightseeing, car rentals, Udaipur to Mount Abu cabs, and Rajasthan tour packages at affordable prices.`,
  keywords = `Best Travel Agency in Udaipur, Travel Agency Udaipur, Taxi Service Udaipur, Car Rental in Udaipur, Udaipur Taxi Service, Udaipur Tour Packages, Rajasthan Tour Packages, Udaipur to Mount Abu Cab, Udaipur to Jodhpur Taxi, Local Sightseeing Udaipur, Holiday Packages Rajasthan, Cab Booking Udaipur, Tourist Taxi Udaipur, Airport Taxi Udaipur`,
  canonicalUrl = 'https://khammaghanitours.com',
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      '@id': `${canonicalUrl}/#organization`,
      name: BUSINESS_INFO.name,
      url: canonicalUrl,
      telephone: BUSINESS_INFO.phone,
      priceRange: '₹₹',
      image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=1200&q=80',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Old RTO, Dhikli Rd, Krishna Vihar Colony Road',
        addressLocality: 'Udaipur',
        addressRegion: 'Rajasthan',
        postalCode: '313001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.5898,
        longitude: 73.6817,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '580',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: [BUSINESS_INFO.instagram],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=1200&q=80',
      telephone: BUSINESS_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Old RTO, Dhikli Rd, Krishna Vihar Colony Road',
        addressLocality: 'Udaipur',
        addressRegion: 'Rajasthan',
        postalCode: '313001',
        addressCountry: 'IN',
      },
    },
  ];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={BUSINESS_INFO.name} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=1200&q=80" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=1200&q=80" />

      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  );
};
