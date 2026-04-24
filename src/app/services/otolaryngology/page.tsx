import OtolaryngologyPageClient, { type OtolaryngologyServiceRow } from "./OtolaryngologyPageClient";
import { formatOtolaryngologyPriceLabel, loadOtolaryngologyPriceServices } from "./load-otolaryngology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function OtolaryngologyPage() {
  const services = await loadOtolaryngologyPriceServices();

  const serviceRows: OtolaryngologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatOtolaryngologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <OtolaryngologyPageClient serviceRows={serviceRows} />;
}

