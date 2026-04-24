import TraumatologyPageClient, { type TraumatologyServiceRow } from "./TraumatologyPageClient";
import { formatTraumatologyPriceLabel, loadTraumatologyPriceServices } from "./load-traumatology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function TraumatologyPage() {
  const services = await loadTraumatologyPriceServices();

  const serviceRows: TraumatologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatTraumatologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <TraumatologyPageClient serviceRows={serviceRows} />;
}

