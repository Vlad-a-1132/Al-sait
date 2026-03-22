import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Аллергология в Одинцово - Диагностика и лечение аллергии | Альтамед-с',
  description: 'Профессиональная аллергология в Одинцово. Диагностика аллергических заболеваний, лечение аллергии, консультация аллерголога-иммунолога. Запись на прием в клинике Альтамед-с.',
  keywords: [
    'аллерголог Одинцово',
    'аллергология Одинцово',
    'лечение аллергии Одинцово',
    'диагностика аллергии Одинцово',
    'аллергические заболевания Одинцово',
    'поллиноз Одинцово',
    'бронхиальная астма Одинцово',
    'атопический дерматит Одинцово',
    'крапивница Одинцово',
    'аллерголог-иммунолог Одинцово',
    'аллергопробы Одинцово',
    'иммунология Одинцово',
    'лечение аллергии у детей Одинцово',
    'аллерголог Альтамед-с',
    'консультация аллерголога Одинцово',
    'прием аллерголога Одинцово',
    'записаться к аллергологу Одинцово',
    'Московская область аллерголог',
    'Одинцовский район аллергология'
  ],
  openGraph: {
    title: 'Аллергология в Одинцово - Диагностика и лечение аллергии | Альтамед-с',
    description: 'Профессиональная аллергология в Одинцово. Диагностика аллергических заболеваний, лечение аллергии, консультация аллерголога-иммунолога.',
    type: 'website',
    url: 'https://altamed-c.ru/services/allergology',
    images: [
      {
        url: '/images/images allergoly/allergoly (2).webp',
        width: 1200,
        height: 630,
        alt: 'Аллергология в Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аллергология в Одинцово - Диагностика и лечение аллергии | Альтамед-с',
    description: 'Профессиональная аллергология в Одинцово. Диагностика аллергических заболеваний, лечение аллергии, консультация аллерголога-иммунолога.',
    images: ['/images/images allergoly/allergoly (2).webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/allergology',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Альтамед-С- Аллергология",
      "description": "Клиника аллергологии и иммунологии в Одинцово",
      "url": "https://altamed-c.ru/services/allergology",
      "telephone": "+7 (495) 255-44-50",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Одинцово",
        "addressRegion": "Московская область",
        "addressCountry": "RU"
      },
      "medicalSpecialty": "Аллергология и иммунология",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "55.6789",
          "longitude": "37.2794"
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги аллергологии",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация аллерголога-иммунолога",
              "description": "Первичная консультация и осмотр у врача-аллерголога-иммунолога"
            },
            "price": "3900",
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Диагностика аллергических заболеваний",
              "description": "Комплексное аллергологическое обследование"
            }
          }
        ]
      }
    })
  }
};

export default function AllergologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
