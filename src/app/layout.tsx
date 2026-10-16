import type { Metadata, Viewport } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import YandexMetrika from "../components/YandexMetrika";
import SiteAnalytics from "../components/SiteAnalytics";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const lobster = Lobster({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-lobster",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://altamed-c.ru'),
  title: "Медицинский центр Альтамед-С в Одинцово - Запись к врачу онлайн | Многопрофильная клиника",
  description: "Медицинский центр Альтамед-С в Одинцово - многопрофильная клиника с широким спектром медицинских услуг. Запись к врачу онлайн, современное оборудование, опытные специалисты. Терапия, педиатрия, гинекология, стоматология, диагностика и многое другое.",
  keywords: [
    'медицинский центр Одинцово',
    'клиника Одинцово',
    'Альтамед-СОдинцово',
    'врач Одинцово',
    'запись к врачу Одинцово',
    'запись к врачу онлайн Одинцово',
    'многопрофильная клиника Одинцово',
    'медицинские услуги Одинцово',
    'терапевт Одинцово',
    'педиатр Одинцово',
    'гинеколог Одинцово',
    'стоматолог Одинцово',
    'диагностика Одинцово',
    'анализы Одинцово',
    'УЗИ Одинцово',
    'медицинский центр Альтамед-с',
    'клиника Альтамед-с',
    'записаться на прием Одинцово',
    'Московская область медицинский центр',
    'Одинцовский район клиника'
  ],
  openGraph: {
    title: 'Медицинский центр Альтамед-С в Одинцово - Запись к врачу онлайн',
    description: 'Медицинский центр Альтамед-С в Одинцово - многопрофильная клиника с широким спектром медицинских услуг. Запись к врачу онлайн, современное оборудование, опытные специалисты.',
    url: 'https://altamed-c.ru',
    siteName: 'Альтамед-с',
    images: [
      {
        url: 'https://altamed-c.ru/images/icons/S.webp',
        width: 1200,
        height: 630,
        alt: 'Медицинский центр Альтамед-с',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Медицинский центр Альтамед-С в Одинцово - Запись к врачу онлайн',
    description: 'Медицинский центр Альтамед-С в Одинцово - многопрофильная клиника с широким спектром медицинских услуг.',
    images: ['https://altamed-c.ru/images/icons/S.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru',
  },
  verification: {
    yandex: "85eb4f9b90fea00c",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${lobster.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={null}>
          <SiteAnalytics />
          <YandexMetrika />
        </Suspense>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
