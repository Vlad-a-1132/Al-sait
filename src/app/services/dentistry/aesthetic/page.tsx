import AestheticPageClient, {
  type DentistryAestheticPriceSectionUi,
} from "./AestheticPageClient";
import {
  formatDentistryAestheticPriceLabel,
  loadDentistryAestheticPriceSections,
} from "./load-dentistry-aesthetic-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function AestheticDentistryPage() {
  const sections = await loadDentistryAestheticPriceSections();

  const priceSections: DentistryAestheticPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryAestheticPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <AestheticPageClient priceSections={priceSections} />;
}
