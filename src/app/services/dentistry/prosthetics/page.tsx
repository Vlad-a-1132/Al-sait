import ProstheticsPageClient, {
  type DentistryProstheticsPriceSectionUi,
} from "./ProstheticsPageClient";
import {
  formatDentistryProstheticsPriceLabel,
  loadDentistryProstheticsPriceSections,
} from "./load-dentistry-prosthetics-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function ProstheticsDentistryPage() {
  const sections = await loadDentistryProstheticsPriceSections();

  const priceSections: DentistryProstheticsPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryProstheticsPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <ProstheticsPageClient priceSections={priceSections} />;
}
