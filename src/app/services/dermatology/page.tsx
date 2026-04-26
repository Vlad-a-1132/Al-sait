import DermatologyPageClientV2 from "./DermatologyPageClientV2";
import type { DermatologyServiceRow } from "./DermatologyPageClient";
import { formatDermatologyPriceLabel, loadDermatologyPriceServices } from "./load-dermatology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function DermatologyPage() {
  const services = await loadDermatologyPriceServices();

  const serviceRows: DermatologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatDermatologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <DermatologyPageClientV2 serviceRows={serviceRows} />;
}
