import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Лазерная косметология в Одинцово - Лазерная эпиляция, фотоомоложение, удаление татуировок | Альтамед-с',
  description: 'Лазерная косметология в Одинцово - профессиональные процедуры лазерной эпиляции, фотоомоложения, удаления татуировок, фотоокоагуляции сосудов. Современное оборудование в клинике Альтамед-с.',
  keywords: [
    'лазерная косметология Одинцово',
    'лазерная эпиляция Одинцово',
    'фотоомоложение Одинцово',
    'удаление татуировок Одинцово',
    'лазерная косметология Альтамед-с',
    'фотоокоагуляция сосудов Одинцово',
    'лазерное удаление волос Одинцово',
    'фототерапия Одинцово',
    'лазерная эпиляция лица Одинцово',
    'лазерная эпиляция тела Одинцово',
    'удаление пигментации лазером Одинцово',
    'лазерное лечение кожи Одинцово',
    'фотодинамическая терапия Одинцово',
    'лазерная эпиляция бикини Одинцово',
    'лазерная эпиляция ног Одинцово',
    'лазерная эпиляция рук Одинцово',
    'записаться на лазерную косметологию Одинцово',
    'Московская область лазерная косметология',
    'Одинцовский район лазерная эпиляция'
  ],
  openGraph: {
    title: 'Лазерная косметология в Одинцово - Лазерная эпиляция, фотоомоложение, удаление татуировок | Альтамед-с',
    description: 'Лазерная косметология в Одинцово - профессиональные процедуры лазерной эпиляции, фотоомоложения, удаления татуировок, фотоокоагуляции сосудов. Современное оборудование в клинике Альтамед-с.',
    type: 'website',
    url: 'https://altamed-c.ru/services/laser-cosmetology',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/images allergoly/lazer kosmet.webp',
        width: 1200,
        height: 630,
        alt: 'Лазерная косметология в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Лазерная косметология в Одинцово - Лазерная эпиляция, фотоомоложение, удаление татуировок | Альтамед-с',
    description: 'Лазерная косметология в Одинцово - профессиональные процедуры лазерной эпиляции, фотоомоложения, удаления татуировок, фотоокоагуляции сосудов. Современное оборудование в клинике Альтамед-с.',
    images: ['/images/images allergoly/lazer kosmet.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/laser-cosmetology',
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
      "name": "Альтамед-С- Лазерная косметология в Одинцово",
      "description": "Клиника лазерной косметологии в Одинцово. Профессиональные процедуры лазерной эпиляции, фотоомоложения, удаления татуировок, фотоокоагуляции сосудов.",
      "url": "https://altamed-c.ru/services/laser-cosmetology",
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
      "medicalSpecialty": "Косметология",
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
        "name": "Услуги лазерной косметологии в Одинцово",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Лазерная эпиляция в Одинцово",
              "description": "Профессиональная лазерная эпиляция различных зон тела"
            },
            "price": "500",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Фотоомоложение в Одинцово",
              "description": "Процедура фотоомоложения и фототерапии"
            },
            "price": "8000",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "Удаление татуировок в Одинцово",
              "description": "Лазерное удаление татуировок различных размеров"
            },
            "price": "2000",
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

export default function LaserCosmetologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
