import LaserCosmetologyPageClient, { type LaserCosmetologyServiceRow } from "./LaserCosmetologyPageClient";
import {
  formatLaserCosmetologyPriceLabel,
  loadLaserCosmetologyPriceServices,
} from "./load-laser-cosmetology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function LaserCosmetologyPage() {
  const services = await loadLaserCosmetologyPriceServices();

  const serviceRows: LaserCosmetologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatLaserCosmetologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <LaserCosmetologyPageClient serviceRows={serviceRows} />;
}

