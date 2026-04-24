import XrayDiagnosticsPageClient, {
  type DentistryXrayDiagnosticsPriceSectionUi,
} from "./XrayDiagnosticsPageClient";
import {
  formatDentistryXrayDiagnosticsPriceLabel,
  loadDentistryXrayDiagnosticsPriceSections,
} from "./load-dentistry-xray-diagnostics-price-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const idPart = s.id != null ? `id:${s.id}` : "";
  const codePart = s.code ? `code:${s.code}` : "";
  const namePart = s.name ? `name:${s.name}` : "";
  const pricePart = s.price != null ? `price:${s.price}` : "";
  const raw = [idPart, codePart, namePart, pricePart].filter(Boolean).join("|");
  return raw ? raw : `row:${index}`;
}

export default async function XrayDiagnosticsDentistryPage() {
  const sections = await loadDentistryXrayDiagnosticsPriceSections();

  const priceSections: DentistryXrayDiagnosticsPriceSectionUi[] = sections.map((sec) => ({
    sectionKey: sec.sectionKey,
    title: sec.sectionTitle,
    rows: sec.services.map((s, index) => ({
      key: buildServiceRowKey(s, index),
      code: s.code ?? null,
      name: s.name,
      priceLabel: formatDentistryXrayDiagnosticsPriceLabel(s),
      priceIsZero: Number(s.price) === 0,
    })),
  }));

  return <XrayDiagnosticsPageClient priceSections={priceSections} />;
}
