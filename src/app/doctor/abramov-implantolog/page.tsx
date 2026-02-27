import type { Metadata } from "next";
import { getAbramovBundle } from "@/data/abramov";
import DoctorPageClient from "@/components/doctor/AbramovPageClient";

export const metadata: Metadata = {
  title: "Абрамов Юно Эриильевич — имплантация и лечение зубов в Одинцово | Альтамед-С",
  description:
    "Стоматолог-хирург, имплантолог. Имплантация, костная пластика, синус-лифтинг, протезирование на имплантатах, виниры и коронки. Стаж 7 лет, рейтинг 4.9. Запись в Альтамед-С.",
  openGraph: {
    title: "Абрамов Юно Эриильевич — стоматолог-хирург, имплантолог в Одинцово",
    description: "Хирургия и имплантация зубов: костная пластика, синус-лифтинг, протезирование, виниры и коронки. Запись к врачу.",
  },
};

export default function DoctorAbramovImplantologPage() {
  const bundle = getAbramovBundle();
  return <DoctorPageClient data={bundle} />;
}
