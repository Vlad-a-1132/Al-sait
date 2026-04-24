import type { Metadata } from "next";
import EndocrinologyPageClient, { type EndocrinologyServiceRow } from "./EndocrinologyPageClient";
import { formatEndocrinologyPriceLabel, loadEndocrinologyPriceServices } from "./load-endocrinology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

export const metadata: Metadata = {
  title: "Эндокринолог в Одинцово — цены и запись | Альтамед-с",
  description:
    "Эндокринология в Одинцово: консультация эндокринолога, диагностика и лечение заболеваний желез внутренней секреции. Полный прайс и запись онлайн в клинику «Альтамед-с».",
};

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function EndocrinologyPage() {
  const services = await loadEndocrinologyPriceServices();

  const serviceRows: EndocrinologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatEndocrinologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <EndocrinologyPageClient serviceRows={serviceRows} />;
}
