import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гинеколог в Одинцово - Консультация, диагностика и лечение женских заболеваний | Альтамед-с',
  description: 'Гинеколог в Одинцово - профессиональная диагностика и лечение женских заболеваний. Кольпоскопия, УЗИ, ведение беременности. Запись на прием к гинекологу в клинике Альтамед-СОдинцово.',
  keywords: [
    'гинеколог Одинцово',
    'гинекология Одинцово', 
    'женский врач Одинцово',
    'гинеколог Альтамед-с',
    'кольпоскопия Одинцово',
    'УЗИ гинекология Одинцово',
    'ведение беременности Одинцово',
    'акушер-гинеколог Одинцово',
    'лечение эрозии шейки матки Одинцово',
    'лечение эндометриоза Одинцово',
    'лечение климакса Одинцово',
    'медикаментозный аборт Одинцово',
    'установка ВМС Одинцово',
    'биопсия шейки матки Одинцово',
    'радиоволновая хирургия гинекология Одинцово',
    'записаться к гинекологу Одинцово',
    'прием гинеколога Одинцово',
    'консультация гинеколога Одинцово',
    'Московская область гинеколог',
    'Одинцовский район гинекология'
  ],
  openGraph: {
    title: 'Гинеколог в Одинцово - Консультация, диагностика и лечение женских заболеваний | Альтамед-с',
    description: 'Гинеколог в Одинцово - профессиональная диагностика и лечение женских заболеваний. Кольпоскопия, УЗИ, ведение беременности. Запись на прием к гинекологу в клинике Альтамед-СОдинцово.',
    type: 'website',
    url: 'https://altamed-c.ru/services/gynecology',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/images allergoly/ginokologia.webp',
        width: 1200,
        height: 630,
        alt: 'Гинеколог в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Гинеколог в Одинцово - Консультация, диагностика и лечение женских заболеваний | Альтамед-с',
    description: 'Гинеколог в Одинцово - профессиональная диагностика и лечение женских заболеваний. Кольпоскопия, УЗИ, ведение беременности. Запись на прием к гинекологу в клинике Альтамед-СОдинцово.',
    images: ['/images/images allergoly/gas.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/gynecology',
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Альтамед-С- Гинекология в Одинцово",
      "description": "Клиника гинекологии в Одинцово. Профессиональная диагностика и лечение женских заболеваний. Кольпоскопия, УЗИ, ведение беременности, радиоволновая хирургия.",
      "url": "https://altamed-c.ru/services/gynecology",
      "telephone": "+7 (495) 255-44-50",
      "email": "info@altamed-c.ru",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Одинцово",
        "addressRegion": "Московская область",
        "addressCountry": "RU",
        "postalCode": "143000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "55.6789",
        "longitude": "37.2794"
      },
      "medicalSpecialty": "Гинекология",
      "areaServed": [
        {
          "@type": "City",
          "name": "Одинцово"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Московская область"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "55.6789",
          "longitude": "37.2794"
        },
        "geoRadius": "50000"
      },
      "openingHours": "Mo-Fr 08:00-20:00, Sa-Su 09:00-18:00",
      "priceRange": "₽₽",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги гинекологии в Одинцово",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация гинеколога в Одинцово",
              "description": "Первичная консультация и осмотр у врача-акушера-гинеколога в Одинцово"
            },
            "price": "3600",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Кольпоскопия в Одинцово",
              "description": "Расширенная кольпоскопия для диагностики заболеваний шейки матки"
            },
            "price": "2000",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "УЗИ гинекология в Одинцово",
              "description": "Ультразвуковое исследование органов малого таза"
            },
            "price": "1800",
            "priceCurrency": "RUB",
            "availability": "InStock"
          }
        ]
      },
      "provider": {
        "@type": "MedicalOrganization",
        "name": "Альтамед-с",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Одинцово",
          "addressRegion": "Московская область",
          "addressCountry": "RU"
        }
      }
    })
  }
};

export default function GynecologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
