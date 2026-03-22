import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Маммолог в Одинцово - Диагностика и лечение заболеваний молочных желез | Альтамед-с',
  description: 'Маммолог в Одинцово - профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии. Запись на прием к маммологу в клинике Альтамед-с.',
  keywords: [
    'маммолог Одинцово',
    'маммология Одинцово',
    'диагностика молочных желез Одинцово',
    'маммолог Альтамед-с',
    'УЗИ молочных желез Одинцово',
    'маммография Одинцово',
    'лечение мастопатии Одинцово',
    'лечение кист молочных желез Одинцово',
    'рак молочной железы Одинцово',
    'профилактика рака груди Одинцово',
    'самообследование молочных желез Одинцово',
    'гормональная терапия Одинцово',
    'беременность и молочные железы Одинцово',
    'записаться к маммологу Одинцово',
    'прием маммолога Одинцово',
    'консультация маммолога Одинцово',
    'Московская область маммолог',
    'Одинцовский район маммология'
  ],
  openGraph: {
    title: 'Маммолог в Одинцово - Диагностика и лечение заболеваний молочных желез | Альтамед-с',
    description: 'Маммолог в Одинцово - профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии. Запись на прием к маммологу в клинике Альтамед-с.',
    type: 'website',
    url: 'https://altamed-c.ru/services/mammology',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/images allergoly/mamalogy.webp',
        width: 1200,
        height: 630,
        alt: 'Маммолог в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Маммолог в Одинцово - Диагностика и лечение заболеваний молочных желез | Альтамед-с',
    description: 'Маммолог в Одинцово - профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии. Запись на прием к маммологу в клинике Альтамед-с.',
    images: ['/images/images allergoly/mamalogy.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/mammology',
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
      "name": "Альтамед-С- Маммология в Одинцово",
      "description": "Клиника маммологии в Одинцово. Профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии.",
      "url": "https://altamed-c.ru/services/mammology",
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
      "medicalSpecialty": "Маммология",
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
        "name": "Услуги маммологии в Одинцово",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация маммолога в Одинцово",
              "description": "Первичная консультация и осмотр у врача-маммолога в Одинцово"
            },
            "price": "3500",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "УЗИ молочных желез в Одинцово",
              "description": "Ультразвуковое исследование молочных желез"
            },
            "price": "2000",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "Маммография в Одинцово",
              "description": "Рентгенологическое исследование молочных желез"
            },
            "price": "2500",
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

export default function MammologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
