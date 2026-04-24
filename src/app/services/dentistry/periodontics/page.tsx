import PeriodonticsPageClient, {
  type DentistryPeriodonticsPriceSectionUi,
} from "./PeriodonticsPageClient";
import {
  formatDentistryPeriodonticsPriceLabel,
  loadDentistryPeriodonticsPriceSections,
} from "./load-dentistry-periodontics-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function PeriodonticsDentistryPage() {
  const sections = await loadDentistryPeriodonticsPriceSections();

  const priceSections: DentistryPeriodonticsPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryPeriodonticsPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <PeriodonticsPageClient priceSections={priceSections} />;
}
