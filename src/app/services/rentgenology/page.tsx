import type { Metadata } from "next";
import RentgenologyPageClient, { type RentgenologyServiceRow } from "./RentgenologyPageClient";
import { formatRentgenologyPriceLabel, loadRentgenologyPriceServices } from "./load-rentgenology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

export const metadata: Metadata = {
  title: "Рентгенология в Одинцово | Клиника «Альтамед-С»",
  description:
    "Рентгенология в клинике «Альтамед-С» в Одинцово: цифровые рентген-аппараты, экспертные протоколы для головы, позвоночника и конечностей, быстрое описание врача-рентгенолога и выдача снимков в день обращения.",
  keywords: [
    "рентгенология одинцово",
    "рентгенография одинцово",
    "цифровой рентген одинцово",
    "рентген диагностика одинцово",
    "рентген позвоночника одинцово",
    "рентген конечностей одинцово",
    "сделать рентген в одинцово",
    "клиника альтамед-с рентген",
  ],
  alternates: {
    canonical: "https://altamed-c.ru/services/rentgenology",
  },
  openGraph: {
    title: "Рентгенология в Одинцово — клиника «Альтамед-С»",
    description:
      "Расширенная рентгенодиагностика: стоматологические, ортопедические и травматологические исследования, цифровая обработка и консультация врача-рентгенолога.",
    url: "https://altamed-c.ru/services/rentgenology",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/yslugi/rentgen.webp",
        width: 1200,
        height: 630,
        alt: "Рентгенология в клинике Альтамед-С в Одинцово",
      },
    ],
  },
};

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function RentgenologyPage() {
  const services = await loadRentgenologyPriceServices();

  const serviceRows: RentgenologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatRentgenologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <RentgenologyPageClient serviceRows={serviceRows} />;
}

