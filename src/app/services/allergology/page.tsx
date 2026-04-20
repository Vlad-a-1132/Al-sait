import AllergologyPageClient, { type AllergologyServiceRow } from "./AllergologyPageClient";
import { formatAllergologyPriceLabel, loadAllergologyPriceServices } from "./load-allergology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

/**
 * Страница аллергологии: блок услуг заполняется на сервере из того же price-api flow,
 * что и /prices — см. loadAllergologyPriceServices() → fetchPriceServices / fetchPriceCategories.
 */
function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function AllergologyPage() {
  const services = await loadAllergologyPriceServices();

  const serviceRows: AllergologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    name: s.name,
    priceLabel: formatAllergologyPriceLabel(s),
  }));

  return <AllergologyPageClient serviceRows={serviceRows} />;
}
