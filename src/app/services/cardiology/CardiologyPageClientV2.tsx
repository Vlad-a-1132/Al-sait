"use client";

import Image from "next/image";
import Link from "next/link";
import CardiologyPageClient, { type CardiologyServiceRow } from "./CardiologyPageClient";
import { doctors } from "@/data/static-data";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

type Props = {
  serviceRows: CardiologyServiceRow[];
};

export default function CardiologyPageClientV2({ serviceRows }: Props) {
  const cardiologists = [
    doctors.find((d) => d.slug === "belyanko-igor-eduardovich") ?? null,
    doctors.find((d) => d.slug === "molostov-aleksandr-venedikhtovich") ?? null,
    doctors.find((d) => d.slug === "rostovtseva-emilia-veniaminovna") ?? null,
  ].filter(Boolean) as Array<(typeof doctors)[number]>;

  return (
    <div className="cardio-v2">
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="mx-auto px-4 py-10 sm:py-12 md:py-16" style={{ maxWidth: "83rem" }}>
          <nav aria-label="breadcrumb" className="mb-4 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:underline text-emerald-700">
                  Главная
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/services" className="hover:underline text-emerald-700">
                  Услуги
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li aria-current="page" className="text-gray-700">
                Кардиология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Кардиолог в Одинцово — диагностика и лечение заболеваний сердца и сосудов
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Помогаем разобраться с давлением, перебоями в сердце, одышкой, болью в груди и изменениями на ЭКГ. На приёме врач оценит симптомы и
                подскажет, какие обследования действительно нужны.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link
                  href={APPOINTMENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]"
                >
                  Записаться на приём
                </Link>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
                >
                  Позвонить в клинику
                </a>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#what-we-treat-heading" className="text-emerald-600 hover:underline py-1">
                  Что мы лечим
                </a>
                <a href="#services-heading" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/images allergoly/kardiolog.webp"
                  alt="Кардиология в Альтамед‑С"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" aria-labelledby="cardio-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 id="cardio-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900">
                Врачи-кардиологи
              </h2>
              <p className="text-gray-600 mt-2">Специалисты, которые ведут приём по кардиологии.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardiologists.map((d) => (
              <Link
                key={d.slug}
                href={`/doctors/${d.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden"
              >
                <div className="flex gap-4 p-5">
                  <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-gray-100 ring-1 ring-black/5">
                    {d.photo ? <Image src={d.photo} alt={d.name} fill className="object-cover" sizes="80px" /> : null}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition">
                      {d.name}
                    </div>
                    {d.specialization ? <div className="text-sm text-gray-600 mt-1">{d.specialization}</div> : null}
                    {typeof d.experience === "number" ? (
                      <div className="text-sm text-gray-500 mt-1">Стаж: {d.experience} лет</div>
                    ) : null}
                    <div className="text-sm text-emerald-700 font-medium mt-3">Открыть профиль</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* hide old breadcrumb + old banner above main content */}
      <style jsx global>{`
        .cardio-v2 > div > section.py-4 {
          display: none !important;
        }
        .cardio-v2 > div > main.py-3 {
          display: none !important;
        }
      `}</style>

      <CardiologyPageClient serviceRows={serviceRows} />
    </div>
  );
}

