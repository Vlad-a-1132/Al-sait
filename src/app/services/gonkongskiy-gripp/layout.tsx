import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гонконгский грипп H3N2: информация и рекомендации | Клиника «Альтамед-С»",
  description:
    "Подробная информация о гонконгском гриппе H3N2: симптомы, группы риска, осложнения, диагностика, лечение и профилактика. Рекомендации специалистов клиники «Альтамед-С» в Одинцово.",
  keywords: [
    "гонконгский грипп",
    "грипп H3N2",
    "симптомы гриппа",
    "лечение гриппа",
    "профилактика гриппа",
    "грипп у детей",
    "грипп Одинцово",
    "Альтамед-С грипп",
    "грипп А H3N2",
    "симптомы гонконгского гриппа",
    "лечение гриппа H3N2",
    "вакцинация от гриппа",
    "профилактика гриппа Одинцово",
    "грипп 2025",
    "подтип K гриппа",
    "антигенный дрейф"
  ],
  openGraph: {
    title: "Гонконгский грипп H3N2: информация и рекомендации — клиника «Альтамед-С»",
    description:
      "Все о гонконгском гриппе H3N2: от симптомов до профилактики. Узнайте, как защитить себя и свою семью. Клиника «Альтамед-С» в Одинцово.",
    type: "article",
    url: "https://altamed-c.ru/services/gonkongskiy-gripp",
    locale: "ru_RU",
    siteName: "Альтамед-С",
    images: [
      {
        url: "https://altamed-c.ru/images/yslugi/h3n2.webp",
        width: 1200,
        height: 630,
        alt: "Гонконгский грипп H3N2",
      },
    ],
  },
  alternates: {
    canonical: "https://altamed-c.ru/services/gonkongskiy-gripp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function GonkongskiyGrippLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

