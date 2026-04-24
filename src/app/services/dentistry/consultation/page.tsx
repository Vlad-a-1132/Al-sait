import ConsultationPageClient, { type DentistryConsultationServiceRow } from "./ConsultationPageClient";
import { formatConsultationPriceLabel, loadDentistryConsultationPriceServices } from "./load-consultation-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function ConsultationPage() {
  const services = await loadDentistryConsultationPriceServices();

  const serviceRows: DentistryConsultationServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatConsultationPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <ConsultationPageClient serviceRows={serviceRows} />;
}
