import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIRFLOW Prophylaxis Master - Профессиональная чистка зубов по протоколу GBT в Одинцово | Альтамед-С",
  description:
    "Профессиональная гигиена полости рта по протоколу GBT аппаратом AIRFLOW® Prophylaxis Master в Одинцово. Безболезненное удаление биоплёнки, пигментаций и зубных отложений. Швейцарское оборудование, опытные гигиенисты. Запись онлайн.",
  keywords: [
    "AIRFLOW Prophylaxis Master Одинцово",
    "профессиональная гигиена полости рта Одинцово",
    "GBT протокол Одинцово",
    "чистка зубов Одинцово",
    "удаление биоплёнки Одинцово",
    "профгигиена Одинцово",
    "AIRFLOW Одинцово",
    "PERIOFLOW Одинцово",
    "PIEZON NO PAIN",
    "профессиональная чистка зубов Одинцово",
    "гигиена полости рта Одинцово",
    "стоматологическая гигиена Одинцово",
    "чистка зубов аппаратом AIRFLOW",
    "профгигиена по протоколу GBT",
    "безболезненная чистка зубов"
  ],
  alternates: {
    canonical: "https://altamed-c.ru/services/airflow-prophylaxis-master"
  },
  openGraph: {
    title: "AIRFLOW Prophylaxis Master - Профессиональная чистка зубов по протоколу GBT в Одинцово | Альтамед-С",
    description:
      "Профессиональная гигиена полости рта по протоколу GBT с использованием швейцарского аппарата AIRFLOW® Prophylaxis Master в Одинцово. Безболезненное удаление биоплёнки и зубных отложений.",
    url: "https://altamed-c.ru/services/airflow-prophylaxis-master",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/yslugi/air flow.webp",
        width: 1200,
        height: 630,
        alt: "AIRFLOW Prophylaxis Master - профессиональная гигиена зубов в Одинцово"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function AirflowProphylaxisMasterLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

