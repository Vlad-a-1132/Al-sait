import type { Metadata, Viewport } from "next";
import { Inter, Lobster } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import YandexMetrika from "../components/YandexMetrika";
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
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
        >{`
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105270439', 'ym');

          ym(105270439, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
        `}</Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105270439"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Suspense fallback={null}>
          <YandexMetrika />
        </Suspense>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
