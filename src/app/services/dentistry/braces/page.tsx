import BracesPageClient, {
  type DentistryBracesPriceSectionUi,
} from "./BracesPageClient";
import {
  formatDentistryBracesPriceLabel,
  loadDentistryBracesPriceSections,
} from "./load-dentistry-braces-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function BracesDentistryPage() {
  const sections = await loadDentistryBracesPriceSections();

  const priceSections: DentistryBracesPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryBracesPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <BracesPageClient priceSections={priceSections} />;
}
