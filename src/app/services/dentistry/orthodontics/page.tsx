import OrthodonticsPageClient, {
  type DentistryOrthodonticsPriceSectionUi,
} from "./OrthodonticsPageClient";
import {
  formatDentistryOrthodonticsPriceLabel,
  loadDentistryOrthodonticsPriceSections,
} from "./load-dentistry-orthodontics-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function OrthodonticsDentistryPage() {
  const sections = await loadDentistryOrthodonticsPriceSections();

  const priceSections: DentistryOrthodonticsPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryOrthodonticsPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <OrthodonticsPageClient priceSections={priceSections} />;
}
