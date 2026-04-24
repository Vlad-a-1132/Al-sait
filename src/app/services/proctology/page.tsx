import ProctologyPageClient, { type ProctologyServiceRow } from "./ProctologyPageClient";
import { formatProctologyPriceLabel, loadProctologyPriceServices } from "./load-proctology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function ProctologyPage() {
  const services = await loadProctologyPriceServices();

  const serviceRows: ProctologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatProctologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <ProctologyPageClient serviceRows={serviceRows} />;
}

