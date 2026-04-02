import type { Metadata } from "next";
import { getGoncharenkoBundle } from "@/data/goncharenko";
import DoctorPageClient from "@/components/doctor/AbramovPageClient";

export const metadata: Metadata = {
  title: "Гончаренко Елена Борисовна — ортодонтия в Одинцово | Альтамед-С",
  description:
    "Врач-ортодонт высшей квалификационной категории. Исправление прикуса, брекеты, элайнеры. Стаж более 25 лет. Запись в Альтамед-С.",
  openGraph: {
    title: "Гончаренко Елена Борисовна — ортодонт в Одинцово",
    description: "Ортодонтия: прикус, брекеты, элайнеры. Запись к врачу.",
  },
};

export default function DoctorGoncharenkoOrtodontPage() {
  const bundle = getGoncharenkoBundle();
  return <DoctorPageClient data={bundle} />;
}
