import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Абрамов Юно Эриильевич — имплантация и лечение зубов в Одинцово | Альтамед-С",
  description:
    "Стоматолог-хирург, имплантолог. Имплантация качественно, быстро, под ключ. Стаж 7 лет, рейтинг 4.9. Запись на приём в клинику Альтамед-С.",
  openGraph: {
    title: "Абрамов Юно Эриильевич — имплантолог в Одинцово",
    description: "Имплантация и лечение зубов: качественно, быстро, под ключ. Запись к врачу.",
  },
};

const pills = [
  { label: "качественно", icon: "✓" },
  { label: "быстро", icon: "✓" },
  { label: "под ключ", icon: "✓" },
];

const specs = [
  { title: "Стоматолог-хирург", desc: "Хирургические вмешательства, удаление, подготовка к имплантации." },
  { title: "Имплантолог", desc: "Установка имплантов, одномоментная и классическая имплантация, планирование лечения." },
];

const highlights = [
  "Индивидуальный план имплантации с учётом прикуса и состояния кости",
  "Современные имплантационные системы и цифровая диагностика",
  "Комфортное лечение и прозрачные цены до начала работы",
  "Сопровождение на всех этапах — от установки до протезирования",
];

export default function DoctorAbramovImplantologPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — в стиле баннера имплантации */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "radial-gradient(ellipse 90% 80% at 20% 50%, #0E2730 0%, #0A1620 55%, #060C12 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="relative mx-auto px-4 py-12 md:py-20" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#5EF3C4] font-semibold tracking-wide mb-2">Врач клиники «Альтамед-С»</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Абрамов Юно Эриильевич
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Имплантация и лечение
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {pills.map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium"
                  >
                    <span className="text-[#5EF3C4]">{p.icon}</span>
                    {p.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-2 rounded-full bg-[rgba(33,199,255,.15)] border border-[rgba(33,199,255,.3)]">
                  Стоматолог-хирург
                </span>
                <span className="px-4 py-2 rounded-full bg-[rgba(94,243,196,.15)] border border-[rgba(94,243,196,.3)]">
                  Имплантолог
                </span>
              </div>
              <div className="mt-6 flex items-center gap-6 text-white/90">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5EF3C4]" />
                  Стаж 7 лет
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-amber-400">★</span> Рейтинг 4.9
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/appointments"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-[#0A1620] bg-[#5EF3C4] hover:bg-[#21C7FF] transition-colors"
                >
                  Записаться на приём
                </Link>
                <Link
                  href="/services/implantation"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Услуги имплантации
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-[#5EF3C4]/20 blur-xl" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#21C7FF]/50 shadow-2xl">
                  <Image
                    src="/images/promo/Abramov Yuno Eriilevich 1.webp"
                    alt="Абрамов Юно Эриильевич — стоматолог-хирург, имплантолог"
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

      {/* Специализации */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Специализации
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors"
              >
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что вы получаете */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Почему пациенты выбирают лечение у Абрамова Ю. Э.
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">✓</span>
                {h}
              </li>
            ))}
          </ul>
          <p className="text-center mt-8">
            <Link href="/doctors/abramov-yuno-eriilevich" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
              Подробная карточка врача и образование →
            </Link>
          </p>
        </div>
      </section>

      {/* Запись */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Запись к Абрамову Юно Эриильевичу</h2>
            <p className="text-gray-600 mb-6">Имплантолог, стоматолог-хирург. Одинцово, клиника «Альтамед-С».</p>
            <AppointmentForm
              doctorImage="/images/promo/Abramov Yuno Eriilevich 1.webp"
              doctorAlt="Абрамов Юно Эриильевич"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
