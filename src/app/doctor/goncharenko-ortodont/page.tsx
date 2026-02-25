import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Гончаренко Елена Борисовна — ортодонтия и гнатология в Одинцово | Альтамед-С",
  description:
    "Врач-ортодонт, гнатолог. Исправление аномалий прикуса, челюстные дефекты, ВНЧС. Брекеты металл и керамика. Запись на приём в клинику Альтамед-С.",
  openGraph: {
    title: "Гончаренко Елена Борисовна — ортодонт, гнатолог в Одинцово",
    description: "Ортодонтия и гнатология: прикус, ВНЧС, брекеты. Запись к врачу.",
  },
};

const chips = [
  { label: "Врач-ортодонт", color: "cyan" },
  { label: "Гнатолог", color: "mint" },
  { label: "металл / керамика • брекеты", color: "gray" },
];

const directions = [
  { title: "Исправление аномалий прикуса", desc: "Брекет-системы, элайнеры, пластинки для детей и взрослых." },
  { title: "Гнатология и ВНЧС", desc: "Диагностика и лечение дисфункции височно-нижнечелюстного сустава, окклюзии." },
  { title: "Челюстные дефекты", desc: "Коррекция скелетных нарушений, подготовка к протезированию и имплантации." },
];

const methods = [
  "Брекеты металлические и керамические",
  "Элайнеры и съёмные аппараты",
  "Диагностика прикуса и ТРГ",
  "Комплексное лечение с остеопатами при необходимости",
];

export default function DoctorGoncharenkoOrtodontPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — в стиле баннера ортодонтии */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "radial-gradient(ellipse 92% 80% at 18% 52%, #0F2B34 0%, #081821 52%, #050B10 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="relative mx-auto px-4 py-12 md:py-20" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#5EF3C4] font-semibold tracking-wide mb-2">Врач клиники «Альтамед-С»</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Гончаренко Елена Борисовна
              </h1>
              <p className="text-xl text-white/90 mb-2">
                Ортодонтия и гнатология
              </p>
              <p className="text-white/75 text-sm md:text-base mb-6">
                исправление аномалий прикуса • челюстные дефекты • ВНЧС
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {chips.map((c) => (
                  <span
                    key={c.label}
                    className={`inline-flex px-4 py-2 rounded-full text-sm font-medium border ${
                      c.color === "cyan"
                        ? "bg-[rgba(33,199,255,.12)] border-[rgba(33,199,255,.3)]"
                        : c.color === "mint"
                        ? "bg-[rgba(94,243,196,.12)] border-[rgba(94,243,196,.3)]"
                        : "bg-white/10 border-white/20"
                    }`}
                  >
                    {c.label}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-6 text-white/90">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5EF3C4]" />
                  Стаж более 25 лет
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-amber-400">★</span> Высшая категория
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/appointments"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-[#050B10] bg-[#5EF3C4] hover:bg-[#21C7FF] transition-colors"
                >
                  Записаться на приём
                </Link>
                <Link
                  href="/services/dentistry/orthodontics"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Услуги ортодонтии
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-[#5EF3C4]/20 blur-xl" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#21C7FF]/50 shadow-2xl">
                  <Image
                    src="/images/doctors/Goncharenko Elena Borisovna (2)-Photoroom 1.png"
                    alt="Гончаренко Елена Борисовна — врач-ортодонт, гнатолог"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Направления */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Направления работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directions.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors"
              >
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">{d.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Методы */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Методы лечения
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {methods.map((m) => (
              <li key={m} className="flex items-start gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm font-bold">✓</span>
                {m}
              </li>
            ))}
          </ul>
          <p className="text-center mt-8">
            <Link href="/doctors/goncharenko-elena-borisovna" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
              Подробная карточка врача и образование →
            </Link>
          </p>
        </div>
      </section>

      {/* Запись */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Запись к Гончаренко Елене Борисовне</h2>
            <p className="text-gray-600 mb-6">Врач-ортодонт, гнатолог. Одинцово, клиника «Альтамед-С».</p>
            <AppointmentForm
              doctorImage="/images/doctors/Goncharenko Elena Borisovna (2)-Photoroom 1.png"
              doctorAlt="Гончаренко Елена Борисовна"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
