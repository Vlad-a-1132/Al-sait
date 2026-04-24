import type { Metadata } from "next";
import SurgeryPageClient, { type SurgeryServiceRow } from "./SurgeryPageClient";
import { formatSurgeryPriceLabel, loadSurgeryPriceServices } from "./load-surgery-services";
import type { PriceServiceDisplay } from "@/lib/price-api";

export const metadata: Metadata = {
  title: "Хирург в Одинцово — цены и запись | Альтамед-с",
  description:
    "Хирургия в Одинцово: консультация хирурга, амбулаторные процедуры и перевязки. Полный прайс и запись онлайн в клинику «Альтамед-с».",
};

function buildServiceRowKey(s: PriceServiceDisplay, index: number): string {
  const sid = s.serviceId ?? s.id ?? s.code ?? s.name;
  return `${String(sid)}|${String(s.categoryId ?? "")}|${index}`;
}

export default async function SurgeryPage() {
  const services = await loadSurgeryPriceServices();

  const serviceRows: SurgeryServiceRow[] = services.map((s, index) => ({
    key: buildServiceRowKey(s, index),
    code: s.code ?? null,
    name: s.name,
    priceLabel: formatSurgeryPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
  }));

  return <SurgeryPageClient serviceRows={serviceRows} />;
}

