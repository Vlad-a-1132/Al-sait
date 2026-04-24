import type { Metadata } from "next";
import UrologyPageClient, { type UrologyServiceRow } from "./UrologyPageClient";
import { formatUrologyPriceLabel, loadUrologyPriceServices } from "./load-urology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

export const metadata: Metadata = {
  title: "Уролог в Одинцово — цены и запись | Альтамед-с",
  description:
    "Урология в Одинцово: консультация уролога, диагностика и лечение заболеваний мочеполовой системы. Полный прайс и запись онлайн в клинику «Альтамед-с».",
};

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function UrologyPage() {
  const services = await loadUrologyPriceServices();

  const serviceRows: UrologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatUrologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <UrologyPageClient serviceRows={serviceRows} />;
}

