import CadcamPageClient, {
  type DentistryCadcamPriceSectionUi,
} from "./CadcamPageClient";
import {
  formatDentistryCadcamPriceLabel,
  loadDentistryCadcamPriceSections,
} from "./load-dentistry-cadcam-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(sectionKey: string, s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${sectionKey}|${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function CadcamDentistryPage() {
  const sections = await loadDentistryCadcamPriceSections();

  const priceSections: DentistryCadcamPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(sec.sectionKey, s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryCadcamPriceLabel(s),
      priceIsZero: s.priceIsZero === true,
    })),
  }));

  return <CadcamPageClient priceSections={priceSections} />;
}
