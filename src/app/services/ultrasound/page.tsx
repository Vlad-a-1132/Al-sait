import UltrasoundPageClient, { type UltrasoundServiceRow } from "./UltrasoundPageClient";
import { formatUltrasoundPriceLabel, loadUltrasoundPriceServices } from "./load-ultrasound-services";
import type { PriceServiceDisplay } from "@/lib/price-api";
import { doctors } from "@/data/static-data";

/**
 * Страница УЗИ: блок услуг заполняется на сервере из того же price-api flow,
 * что и /prices — см. loadUltrasoundPriceServices() → fetchPriceServices / fetchPriceCategories.
 */
function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function UltrasoundPage() {
  const services = await loadUltrasoundPriceServices();
  const uziDoctors = doctors.filter((d) => d.specialization === "УЗИ");

  const serviceRows: UltrasoundServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatUltrasoundPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <UltrasoundPageClient serviceRows={serviceRows} doctors={uziDoctors} />;
}
