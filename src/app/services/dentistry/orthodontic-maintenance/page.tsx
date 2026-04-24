import OrthodonticMaintenancePageClient, {
  type DentistryOrthodonticMaintenancePriceSectionUi,
} from "./OrthodonticMaintenancePageClient";
import {
  formatDentistryOrthodonticMaintenancePriceLabel,
  loadDentistryOrthodonticMaintenancePriceSections,
} from "./load-dentistry-orthodontic-maintenance-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const idPart = s.id != null ? `id:${s.id}` : "";
  const codePart = s.code ? `code:${s.code}` : "";
  const namePart = s.name ? `name:${s.name}` : "";
  const pricePart = s.price != null ? `price:${s.price}` : "";
  const raw = [idPart, codePart, namePart, pricePart].filter(Boolean).join("|");
  return raw ? raw : `row:${index}`;
}

export default async function OrthodonticMaintenanceDentistryPage() {
  const sections = await loadDentistryOrthodonticMaintenancePriceSections();

  const priceSections: DentistryOrthodonticMaintenancePriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryOrthodonticMaintenancePriceLabel(s),
      priceIsZero: Number(s.price) === 0,
    })),
  }));

  return <OrthodonticMaintenancePageClient priceSections={priceSections} />;
}
