import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кардиолог в Одинцово - Консультация, диагностика и лечение сердечно-сосудистых заболеваний | Альтамед-с',
  description: 'Кардиолог в Одинцово - профессиональная диагностика и лечение заболеваний сердца и сосудов. ЭКГ, холтер, лечение гипертонии, аритмии. Запись на прием к кардиологу в клинике Альтамед-СОдинцово.',
  keywords: [
    'кардиолог Одинцово',
    'кардиология Одинцово',
    'лечение сердца Одинцово',
    'кардиолог Альтамед-с',
    'ЭКГ Одинцово',
    'холтер Одинцово',
    'лечение гипертонии Одинцово',
    'лечение аритмии Одинцово',
    'лечение ишемической болезни сердца Одинцово',
    'лечение стенокардии Одинцово',
    'лечение инфаркта миокарда Одинцово',
    'лечение сердечной недостаточности Одинцово',
    'лечение атеросклероза Одинцово',
    'лечение пороков сердца Одинцово',
    'записаться к кардиологу Одинцово',
    'прием кардиолога Одинцово',
    'консультация кардиолога Одинцово',
    'Московская область кардиолог',
    'Одинцовский район кардиология'
  ],
  openGraph: {
    title: 'Кардиолог в Одинцово - Консультация, диагностика и лечение сердечно-сосудистых заболеваний | Альтамед-с',
    description: 'Кардиолог в Одинцово - профессиональная диагностика и лечение заболеваний сердца и сосудов. ЭКГ, холтер, лечение гипертонии, аритмии. Запись на прием к кардиологу в клинике Альтамед-СОдинцово.',
    type: 'website',
    url: 'https://altamed-c.ru/services/cardiology',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/images allergoly/kardiolog.webp',
        width: 1200,
        height: 630,
        alt: 'Кардиолог в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кардиолог в Одинцово - Консультация, диагностика и лечение сердечно-сосудистых заболеваний | Альтамед-с',
    description: 'Кардиолог в Одинцово - профессиональная диагностика и лечение заболеваний сердца и сосудов. ЭКГ, холтер, лечение гипертонии, аритмии. Запись на прием к кардиологу в клинике Альтамед-СОдинцово.',
    images: ['/images/images allergoly/kardiolog.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/cardiology',
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
      "name": "Альтамед-С- Кардиология в Одинцово",
      "description": "Клиника кардиологии в Одинцово. Профессиональная диагностика и лечение заболеваний сердца и сосудов. ЭКГ, холтер, лечение гипертонии, аритмии.",
      "url": "https://altamed-c.ru/services/cardiology",
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
      "medicalSpecialty": "Кардиология",
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
        "name": "Услуги кардиологии в Одинцово",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация кардиолога в Одинцово",
              "description": "Первичная консультация и осмотр у врача-кардиолога в Одинцово"
            },
            "price": "3900",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "ЭКГ в Одинцово",
              "description": "Регистрация электрокардиограммы"
            },
            "price": "1300",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "Холтер в Одинцово",
              "description": "Суточное мониторирование ЭКГ по Холтеру"
            },
            "price": "3400",
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

export default function CardiologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
