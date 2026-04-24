import PediatricsPageClient, { type PediatricsServiceRow } from "./PediatricsPageClient";
import { formatPediatricsPriceLabel, loadPediatricsPriceServices } from "./load-pediatrics-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function PediatricsPage() {
  const services = await loadPediatricsPriceServices();

  const serviceRows: PediatricsServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatPediatricsPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <PediatricsPageClient serviceRows={serviceRows} />;
}

