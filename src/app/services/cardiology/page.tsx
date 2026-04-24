import CardiologyPageClient, { type CardiologyServiceRow } from "./CardiologyPageClient";
import { formatCardiologyPriceLabel, loadCardiologyPriceServices } from "./load-cardiology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function CardiologyPage() {
  const services = await loadCardiologyPriceServices();

  const serviceRows: CardiologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatCardiologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <CardiologyPageClient serviceRows={serviceRows} />;
}

