import FixedAppliancesPageClient, {
  type DentistryFixedAppliancesPriceSectionUi,
} from "./FixedAppliancesPageClient";
import {
  formatDentistryFixedAppliancesPriceLabel,
  loadDentistryFixedAppliancesPriceSections,
} from "./load-dentistry-fixed-appliances-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function FixedAppliancesDentistryPage() {
  const sections = await loadDentistryFixedAppliancesPriceSections();

  const priceSections: DentistryFixedAppliancesPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryFixedAppliancesPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <FixedAppliancesPageClient priceSections={priceSections} />;
}
