import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Дерматолог в Одинцово - Консультация, диагностика и лечение кожных заболеваний | Альтамед-с',
  description: 'Дерматолог в Одинцово - профессиональная диагностика и лечение кожных заболеваний. Дерматоскопия, удаление новообразований, лечение акне. Запись на прием к дерматологу в клинике Альтамед-СОдинцово.',
  keywords: [
    'дерматолог Одинцово',
    'дерматология Одинцово', 
    'кожные заболевания Одинцово',
    'дерматолог Альтамед-с',
    'дерматоскопия Одинцово',
    'лечение акне Одинцово',
    'удаление родинок Одинцово',
    'лечение псориаза Одинцово',
    'лечение экземы Одинцово',
    'лечение дерматита Одинцово',
    'удаление новообразований кожи Одинцово',
    'лечение грибка кожи Одинцово',
    'лечение аллергии кожи Одинцово',
    'косметология Одинцово',
    'записаться к дерматологу Одинцово',
    'прием дерматолога Одинцово',
    'консультация дерматолога Одинцово',
    'Московская область дерматолог',
    'Одинцовский район дерматология'
  ],
  openGraph: {
    title: 'Дерматолог в Одинцово - Консультация, диагностика и лечение кожных заболеваний | Альтамед-с',
    description: 'Дерматолог в Одинцово - профессиональная диагностика и лечение кожных заболеваний. Дерматоскопия, удаление новообразований, лечение акне. Запись на прием к дерматологу в клинике Альтамед-СОдинцово.',
    type: 'website',
    url: 'https://altamed-c.ru/services/dermatology',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/images allergoly/Dermat1ology.webp',
        width: 1200,
        height: 630,
        alt: 'Дерматолог в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дерматолог в Одинцово - Консультация, диагностика и лечение кожных заболеваний | Альтамед-с',
    description: 'Дерматолог в Одинцово - профессиональная диагностика и лечение кожных заболеваний. Дерматоскопия, удаление новообразований, лечение акне. Запись на прием к дерматологу в клинике Альтамед-СОдинцово.',
    images: ['/images/images allergoly/Dermat1ology.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dermatology',
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
      "name": "Альтамед-С- Дерматология в Одинцово",
      "description": "Клиника дерматологии в Одинцово. Профессиональная диагностика и лечение кожных заболеваний. Дерматоскопия, удаление новообразований, лечение акне.",
      "url": "https://altamed-c.ru/services/dermatology",
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
      "medicalSpecialty": "Дерматология",
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
        "name": "Услуги дерматологии в Одинцово",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация дерматолога в Одинцово",
              "description": "Первичная консультация и осмотр у врача-дерматовенеролога в Одинцово"
            },
            "price": "3100",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Дерматоскопия в Одинцово",
              "description": "Осмотр кожи под увеличением для диагностики новообразований"
            },
            "price": "500",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "Удаление новообразований кожи в Одинцово",
              "description": "Удаление доброкачественных новообразований методом электрокоагуляции"
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

export default function DermatologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
