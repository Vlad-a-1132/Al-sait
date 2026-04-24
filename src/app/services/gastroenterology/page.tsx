import GastroenterologyPageClient, { type GastroenterologyServiceRow } from "./GastroenterologyPageClient";
import { formatGastroenterologyPriceLabel, loadGastroenterologyPriceServices } from "./load-gastroenterology-services";
import type { PriceServiceDisplay } from "@/lib/price-api";
import { doctors } from "@/data/static-data";

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function GastroenterologyPage() {
  const services = await loadGastroenterologyPriceServices();
  const budko = doctors.find((d) => d.slug === "budko-elena-anatolyevna") ?? null;
  const kostina = doctors.find((d) => d.slug === "kostina-valentina-yakovlevna") ?? null;
  const doctorsForPage = [budko, kostina].filter((d): d is NonNullable<typeof d> => d != null);

  const serviceRows: GastroenterologyServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatGastroenterologyPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <GastroenterologyPageClient serviceRows={serviceRows} doctors={doctorsForPage} />;
}

