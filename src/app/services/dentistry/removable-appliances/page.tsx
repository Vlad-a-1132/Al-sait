import RemovableAppliancesPageClient, {
  type DentistryRemovableAppliancesPriceSectionUi,
} from "./RemovableAppliancesPageClient";
import {
  formatDentistryRemovableAppliancesPriceLabel,
  loadDentistryRemovableAppliancesPriceSections,
} from "./load-dentistry-removable-appliances-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function RemovableAppliancesDentistryPage() {
  const sections = await loadDentistryRemovableAppliancesPriceSections();

  const priceSections: DentistryRemovableAppliancesPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryRemovableAppliancesPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <RemovableAppliancesPageClient priceSections={priceSections} />;
}
