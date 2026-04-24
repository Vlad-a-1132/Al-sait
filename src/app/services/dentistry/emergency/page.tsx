import EmergencyPageClient from "./EmergencyPageClient";
import type { DentistryExtractionPriceSectionUi } from "../extraction/ExtractionPageClient";
import {
  formatDentistryExtractionPriceLabel,
  loadDentistryExtractionPriceSections,
} from "../extraction/load-dentistry-extraction-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function EmergencyDentistryPage() {
  const sections = await loadDentistryExtractionPriceSections();

  const priceSections: DentistryExtractionPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryExtractionPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <EmergencyPageClient priceSections={priceSections} />;
}
