import DepositsPageClient, {
  type DentistryDepositsPriceSectionUi,
} from "./DepositsPageClient";
import {
  formatDentistryDepositsPriceLabel,
  loadDentistryDepositsPriceSections,
} from "./load-dentistry-deposits-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function DepositsDentistryPage() {
  const sections = await loadDentistryDepositsPriceSections();

  const priceSections: DentistryDepositsPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryDepositsPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <DepositsPageClient priceSections={priceSections} />;
}
