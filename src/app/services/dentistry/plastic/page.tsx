import PlasticPageClient, {
  type DentistryPlasticPriceSectionUi,
} from "./PlasticPageClient";
import {
  formatDentistryPlasticPriceLabel,
  loadDentistryPlasticPriceSections,
} from "./load-dentistry-plastic-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function PlasticDentistryPage() {
  const sections = await loadDentistryPlasticPriceSections();

  const priceSections: DentistryPlasticPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryPlasticPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <PlasticPageClient priceSections={priceSections} />;
}
