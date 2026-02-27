import type { Metadata } from "next";
import { getGoncharenkoBundle } from "@/data/goncharenko";
import DoctorPageClient from "@/components/doctor/AbramovPageClient";

export const metadata: Metadata = {
  title: "Гончаренко Елена Борисовна — ортодонтия и гнатология в Одинцово | Альтамед-С",
  description:
    "Врач-ортодонт, гнатолог высшей квалификационной категории. Исправление прикуса, ВНЧС, брекеты, элайнеры. Стаж более 25 лет. Запись в Альтамед-С.",
  openGraph: {
    title: "Гончаренко Елена Борисовна — ортодонт, гнатолог в Одинцово",
    description: "Ортодонтия и гнатология: прикус, ВНЧС, брекеты, элайнеры. Запись к врачу.",
  },
};

export default function DoctorGoncharenkoOrtodontPage() {
  const bundle = getGoncharenkoBundle();
  return <DoctorPageClient data={bundle} />;
}
