import CtPageClient, { type DentistryCtPriceSectionUi } from "./CtPageClient";
import {
  formatDentistryCtPriceLabel,
  loadDentistryCtPriceSections,
} from "./load-dentistry-ct-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const idPart = s.id != null ? `id:${s.id}` : "";
  const codePart = s.code ? `code:${s.code}` : "";
  const namePart = s.name ? `name:${s.name}` : "";
  const pricePart = s.price != null ? `price:${s.price}` : "";
  const raw = [idPart, codePart, namePart, pricePart].filter(Boolean).join("|");
  return raw ? raw : `row:${index}`;
}

export default async function CtDentistryPage() {
  const sections = await loadDentistryCtPriceSections();

  const priceSections: DentistryCtPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryCtPriceLabel(s),
      priceIsZero: Number(s.price) === 0,
    })),
  }));

  return <CtPageClient priceSections={priceSections} />;
}
