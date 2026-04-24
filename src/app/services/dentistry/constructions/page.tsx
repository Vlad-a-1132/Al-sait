import ConstructionsPageClient, {
  type DentistryConstructionsPriceSectionUi,
} from "./ConstructionsPageClient";
import {
  formatDentistryConstructionsPriceLabel,
  loadDentistryConstructionsPriceSections,
} from "./load-dentistry-constructions-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function ConstructionsDentistryPage() {
  const sections = await loadDentistryConstructionsPriceSections();

  const priceSections: DentistryConstructionsPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryConstructionsPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <ConstructionsPageClient priceSections={priceSections} />;
}
