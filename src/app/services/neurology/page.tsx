import NeurologyPageClientV2 from "./NeurologyPageClientV2";
import type { NeurologyServiceRow } from "./NeurologyPageClient";
import { formatNeurologyPriceLabel, loadNeurologyPriceServices } from "./load-neurology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function NeurologyPage() {
  const services = await loadNeurologyPriceServices();

  const serviceRows: NeurologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatNeurologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <NeurologyPageClientV2 serviceRows={serviceRows} />;
}

