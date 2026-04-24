import MammologyPageClient, { type MammologyServiceRow } from "./MammologyPageClient";
import { formatMammologyPriceLabel, loadMammologyPriceServices } from "./load-mammology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function MammologyPage() {
  const services = await loadMammologyPriceServices();

  const serviceRows: MammologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatMammologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <MammologyPageClient serviceRows={serviceRows} />;
}

