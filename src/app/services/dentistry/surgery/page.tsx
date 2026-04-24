import DentistrySurgeryPageClient, {
  type DentistrySurgeryPriceSectionUi,
  type DentistrySurgeryServiceRow,
} from "./DentistrySurgeryPageClient";
import { formatDentistrySurgeryPriceLabel, loadDentistrySurgeryPriceSections } from "./load-dentistry-surgery-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function SurgeryDentistryPage() {
  const sections = await loadDentistrySurgeryPriceSections();

  const priceSections: DentistrySurgeryPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistrySurgeryPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <DentistrySurgeryPageClient priceSections={priceSections} />;
}
