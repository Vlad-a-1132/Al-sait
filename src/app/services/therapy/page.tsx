import TherapyPageClient, { type TherapyServiceRow } from "./TherapyPageClient";
import { formatTherapyPriceLabel, loadTherapyPriceServices } from "./load-therapy-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function TherapyPage() {
  const services = await loadTherapyPriceServices();

  const serviceRows: TherapyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatTherapyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <TherapyPageClient serviceRows={serviceRows} />;
}

