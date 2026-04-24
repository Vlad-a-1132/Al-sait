import StrengtheningPageClient, {
  type DentistryStrengtheningPriceSectionUi,
} from "./StrengtheningPageClient";
import {
  formatDentistryStrengtheningPriceLabel,
  loadDentistryStrengtheningPriceSections,
} from "./load-dentistry-strengthening-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const idPart = s.id != null ? `id:${s.id}` : "";
  const codePart = s.code ? `code:${s.code}` : "";
  const namePart = s.name ? `name:${s.name}` : "";
  const pricePart = s.price != null ? `price:${s.price}` : "";
  const raw = [idPart, codePart, namePart, pricePart].filter(Boolean).join("|");
  return raw ? raw : `row:${index}`;
}

export default async function StrengtheningDentistryPage() {
  const sections = await loadDentistryStrengtheningPriceSections();

  const priceSections: DentistryStrengtheningPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryStrengtheningPriceLabel(s),
      priceIsZero: Number(s.price) === 0,
    })),
  }));

  return <StrengtheningPageClient priceSections={priceSections} />;
}
