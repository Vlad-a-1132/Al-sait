import OphthalmologyPageClient, { type OphthalmologyServiceRow } from "./OphthalmologyPageClient";
import { formatOphthalmologyPriceLabel, loadOphthalmologyPriceServices } from "./load-ophthalmology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function OphthalmologyPage() {
  const services = await loadOphthalmologyPriceServices();

  const serviceRows: OphthalmologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatOphthalmologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <OphthalmologyPageClient serviceRows={serviceRows} />;
}

