import SurdologyPageClient, { type SurdologyServiceRow } from "./SurdologyPageClient";
import { formatSurdologyPriceLabel, loadSurdologyPriceServices } from "./load-surdology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function SurdologyPage() {
  const services = await loadSurdologyPriceServices();

  const serviceRows: SurdologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatSurdologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <SurdologyPageClient serviceRows={serviceRows} />;
}

