import './globals.css';
import './whatsapp-icon.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://bfffrozencorns.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sweet Corn Exporter from India | Onion, Baby Corn, Frozen Vegetables — BFF',
    template: '%s | BFF Frozen Corns — Exporter from India',
  },
  description:
    'Baliraja Farm Fresh (BFF) — sweet corn exporter from India, onion exporter from India, baby corn & frozen vegetables exporter. FSSAI certified, APEDA registered. 50 MT/day IQF plant in Maharashtra. Bulk supply to UAE, UK, USA, Europe & Asia.',
  keywords: [
    'sweet corn exporter from India',
    'onion exporter from India',
    'baby corn exporter from India',
    'frozen vegetables exporter from India',
    'frozen sweet corn exporter from India',
    'green peas exporter from India',
    'onion powder exporter from India',
    'frozen mixed vegetables exporter from India',
    'frozen vegetables exporter India',
    'IQF frozen vegetables manufacturer India',
    'APEDA registered frozen food exporter',
    'bulk frozen vegetables supplier India',
    'organic frozen corn exporter India',
    'Baliraja Farm Fresh',
    'BFF frozen corns',
    'frozen vegetables bulk export Maharashtra',
    'FSSAI certified frozen food India',
    'cold chain frozen food supplier India',
    'frozen vegetable manufacturer Maharashtra',
  ],
  authors: [{ name: 'Baliraja Farm Fresh', url: BASE_URL }],
  creator: 'Baliraja Farm Fresh',
  publisher: 'Baliraja Farm Fresh',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'BFF Frozen Corns | Organic Frozen Vegetables Exporter from India',
    description:
      'Leading Indian exporter of certified organic frozen corn, baby corn, green peas & mixed vegetables. FSSAI certified, APEDA registered. Trusted by buyers across Middle East, Europe & USA.',
    siteName: 'BFF Frozen Corns — Baliraja Farm Fresh',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'BFF Frozen Corns — Organic Frozen Vegetables Exporter India',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BFF Frozen Corns | Organic Frozen Vegetables Exporter India',
    description:
      'Premium organic frozen vegetables exported from Indian farms. FSSAI certified, APEDA registered. Bulk supply worldwide.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  category: 'food & agriculture',
  verification: {
    google: '90jiNIrsFYkMjpjTTv0vSPdKe3wcZwE_lBY_8Kz691g',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'FoodEstablishment'],
        '@id': `${BASE_URL}/#organization`,
        name: 'Baliraja Farm Fresh — BFF Frozen Corns',
        alternateName: 'BFF Frozen Corns',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.png`,
          width: 200,
          height: 200,
        },
        image: `${BASE_URL}/logo.png`,
        description:
          'Leading Indian exporter of certified organic frozen vegetables — frozen corn, baby corn, green peas, mixed vegetables and onion powder. FSSAI certified, APEDA registered. 50 MT/day processing capacity. Supplying 10+ countries since 1985.',
        foundingDate: '1985',
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50 },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sakharwadi, Talegaon Male',
          addressLocality: 'Ahilyanagar',
          addressRegion: 'Maharashtra',
          postalCode: '413708',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          addressCountry: 'IN',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-7559258750',
            contactType: 'sales',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Hindi', 'Marathi'],
          },
          {
            '@type': 'ContactPoint',
            email: 'exports@bfffrozencorns.com',
            contactType: 'customer support',
            areaServed: 'Worldwide',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Frozen Vegetables Export Catalogue',
          itemListElement: [
            'Organic Sweet Corn Kernels',
            'Frozen Corn Cobs',
            'Organic Mixed Vegetables',
            'Organic Frozen Baby Corns',
            'Organic Green Peas',
            'Fresh Onions',
            'Dry Mature Maize',
            'Onion Powder',
          ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name } })),
        },
        sameAs: [
          'https://www.instagram.com',
          'https://www.facebook.com',
          'https://www.linkedin.com',
        ],
        knowsAbout: [
          'Frozen Vegetable Export',
          'IQF Processing',
          'Cold Chain Logistics',
          'Organic Farming',
          'Food Safety Standards',
        ],
        areaServed: [
          'United Arab Emirates',
          'Saudi Arabia',
          'Qatar',
          'United Kingdom',
          'United States',
          'Germany',
          'Canada',
          'Singapore',
          'Australia',
          'Japan',
          'India',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'BFF Frozen Corns — Baliraja Farm Fresh',
        description:
          'Organic frozen vegetables exporter from India. Bulk supply of IQF frozen corn, baby corn, green peas, mixed vegetables and onion powder.',
        publisher: { '@id': `${BASE_URL}/#organization` },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/#products`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are you a sweet corn exporter from India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Baliraja Farm Fresh (BFF) is a leading sweet corn exporter from India. We export IQF frozen sweet corn kernels and whole corn cobs processed at our Ahilyanagar, Maharashtra facility. FSSAI certified, APEDA registered. Bulk supply to UAE, UK, USA, Germany and Asia.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are you an onion exporter from India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Baliraja Farm Fresh exports fresh onions and dehydrated onion powder from Maharashtra, India. Fresh onions in 2 kg and 5 kg mesh bags; onion powder in 25 kg bulk export bags — ideal for food manufacturers and spice blenders worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are you a baby corn exporter from India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We export organic IQF frozen baby corn from India. Hand-picked at peak freshness from Maharashtra farms, frozen within hours of harvest. Available in consumer packs and bulk export bags for food service and supermarket chains in UAE, UK, Singapore and Japan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are you a green peas exporter from India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Baliraja Farm Fresh exports IQF organic frozen green peas from India. Harvested at peak ripeness, flash-frozen to lock in nutrition and sweetness. Available in 500 g, 1 kg, 5 kg and bulk export bags.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which frozen vegetables do you export from India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are a frozen vegetables exporter from India supplying IQF sweet corn kernels, frozen corn cobs, organic baby corn, frozen green peas, mixed vegetables, fresh onions, dry maize and onion powder from our certified facility in Ahilyanagar, Maharashtra.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum order quantity for export?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our minimum order quantity for export is typically 1 MT per product. We offer flexible bulk packaging options and can customise labelling for international markets.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is your production capacity?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our facility has a daily production capacity of 50 MT with 5 blast freezers (10 MT each), IQF processing at 2 MT/hour, and cold storage capacity of 2000 MT.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <a
          href="https://wa.me/917559258750?text=Hello%20Baliraja%20Farm%20Fresh,%20I%20have%20an%20inquiry%20about%20your%20frozen%20corn%20and%20vegetable%20products."
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <Image
            src="/whatsapp.png" // <-- ensure this path is correct
            alt="WhatsApp"
            width={70}   // adjust size as needed
            height={70}  // adjust size as needed
          />
        </a>
      </body>
    </html>
  );
}
