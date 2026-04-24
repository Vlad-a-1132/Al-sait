import PediatricDentistryPageClient, { type PediatricDentistryServiceRow } from "./PediatricDentistryPageClient";
import { formatPediatricDentistryPriceLabel, loadPediatricDentistryReceptionPriceServices } from "./load-pediatric-dentistry-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function PediatricDentistryPage() {
  const services = await loadPediatricDentistryReceptionPriceServices();

  const serviceRows: PediatricDentistryServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatPediatricDentistryPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <PediatricDentistryPageClient serviceRows={serviceRows} />;
}
