import ProsthodonticsPageClient, {
  type DentistryProsthodonticsPriceSectionUi,
} from "./ProsthodonticsPageClient";
import {
  formatDentistryProsthodonticsPriceLabel,
  loadDentistryProsthodonticsPriceSections,
} from "./load-dentistry-prosthodontics-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function ProsthodonticsDentistryPage() {
  const sections = await loadDentistryProsthodonticsPriceSections();

  const priceSections: DentistryProsthodonticsPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryProsthodonticsPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <ProsthodonticsPageClient priceSections={priceSections} />;
}
