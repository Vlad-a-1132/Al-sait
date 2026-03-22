import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гастроэнтеролог в Одинцово - Консультация, диагностика и лечение ЖКТ | Альтамед-с',
  description: 'Гастроэнтеролог в Одинцово - профессиональная диагностика и лечение заболеваний ЖКТ. Гастроскопия, УЗИ. Запись на прием к гастроэнтерологу в клинике Альтамед-СОдинцово.',
  keywords: [
    'гастроэнтеролог Одинцово',
    'гастроэнтерология Одинцово', 
    'лечение ЖКТ Одинцово',
    'диагностика ЖКТ Одинцово',
    'гастроскопия Одинцово',
    
    'УЗИ брюшной полости Одинцово',
    'гастроэнтеролог Альтамед-с',
    'заболевания желудка Одинцово',
    'заболевания кишечника Одинцово',
    'язва желудка лечение Одинцово',
    'гастрит лечение Одинцово',
    'панкреатит лечение Одинцово',
    'записаться к гастроэнтерологу Одинцово',
    'прием гастроэнтеролога Одинцово',
    'консультация гастроэнтеролога Одинцово',
    'Московская область гастроэнтеролог',
    'Одинцовский район гастроэнтерология'
  ],
  openGraph: {
    title: 'Гастроэнтеролог в Одинцово - Консультация, диагностика и лечение ЖКТ | Альтамед-с',
    description: 'Гастроэнтеролог в Одинцово - профессиональная диагностика и лечение заболеваний ЖКТ. Гастроскопия,  УЗИ. Запись на прием к гастроэнтерологу в клинике Альтамед-СОдинцово.',
    type: 'website',
    url: 'https://altamed-c.ru/services/gastroenterology',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/images allergoly/gas.webp',
        width: 1200,
        height: 630,
        alt: 'Гастроэнтеролог в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Гастроэнтеролог в Одинцово - Консультация, диагностика и лечение ЖКТ | Альтамед-с',
    description: 'Гастроэнтеролог в Одинцово - профессиональная диагностика и лечение заболеваний ЖКТ. Гастроскопия,  УЗИ. Запись на прием к гастроэнтерологу в клинике Альтамед-СОдинцово.',
    images: ['/images/images allergoly/gas.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/gastroenterology',
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
      "name": "Альтамед-С- Гастроэнтерология в Одинцово",
      "description": "Клиника гастроэнтерологии в Одинцово. Профессиональная диагностика и лечение заболеваний ЖКТ. Гастроскопия, УЗИ брюшной полости.",
      "url": "https://altamed-c.ru/services/gastroenterology",
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
      "medicalSpecialty": "Гастроэнтерология",
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
        "name": "Услуги гастроэнтерологии в Одинцово",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация гастроэнтеролога в Одинцово",
              "description": "Первичная консультация и осмотр у врача-гастроэнтеролога в Одинцово"
            },
            "price": "4100",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Гастроскопия в Одинцово",
              "description": "Эндоскопическое исследование желудка и двенадцатиперстной кишки"
            },
            "price": "3500",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "УЗИ брюшной полости в Одинцово",
              "description": "Ультразвуковое исследование органов брюшной полости"
            },
            "price": "1500",
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

export default function GastroenterologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
