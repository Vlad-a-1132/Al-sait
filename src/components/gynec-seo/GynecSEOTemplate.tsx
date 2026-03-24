'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { GynecSEOPageConfig } from '@/data/gynec-seo-pages';
import { doctors } from '@/data/static-data';

const PHONE = '+7 (495) 255-44-50';
const PHONE_LINK = 'tel:+74952554450';

const GYNECOLOGISTS = doctors.filter(
  (d) =>
    d.specialization?.toLowerCase().includes('гинеколог') ||
    d.specialization?.toLowerCase().includes('акушер')
);

type GynecSEOTemplateProps = {
  config: GynecSEOPageConfig;
};

export function GynecSEOTemplate({ config }: GynecSEOTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span className="mx-2">/</span>
            <Link href="/ginekolog-v-odintsovo" className="hover:text-emerald-600">Гинекология</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{config.breadcrumb}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-slate-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            {config.h1}
          </h1>
          <div className="space-y-3 text-gray-700 text-base sm:text-lg mb-6">
            {config.lead.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
            <Link
              href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition min-h-[44px]"
            >
              Записаться на приём
            </Link>
            <a
              href={PHONE_LINK}
              className="inline-flex justify-center items-center px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
            >
              Позвонить в клинику
            </a>
          </div>
          {config.priceFrom && (
            <p className="text-gray-700 font-semibold mb-2">Первичный приём — {config.priceFrom}</p>
          )}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {config.anchors.map((a) => (
              <a key={a.id} href={`#${a.id}`} className="text-emerald-600 hover:underline py-1">
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* С какими вопросами обращаются */}
      <section className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            С какими вопросами обращаются
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {config.questionCards.map((c, i) => (
              <div key={i} className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
                <h3 className="font-semibold text-gray-900 mb-2">{c.title}</h3>
                {c.desc && <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит в приём */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Что входит в приём / чем помогает специалист
          </h2>
          {config.whatIncludes.map((block, bi) => (
            <div key={bi} className="mb-6 last:mb-0">
              {block.title && (
                <h3 className="font-semibold text-gray-900 mb-3">{block.title}</h3>
              )}
              <ul className="space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-emerald-600 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Когда стоит записаться */}
      <section id="kogda" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Когда стоит записаться
          </h2>
          <div className="space-y-6">
            {config.whenToVisit.map((item, i) => (
              <div key={i} className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как проходит консультация */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Как проходит консультация
          </h2>
          <div className="space-y-4">
            {config.howConsultation.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Диагностика и обследования */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Диагностика и обследования
          </h2>
          <p className="text-gray-700 mb-4">
            В зависимости от жалоб и результатов осмотра при необходимости специалист может назначить:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {config.diagnostics.map((d, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-600">•</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Почему обращаются в Альтамед-С */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Почему обращаются в Альтамед-С
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {config.whyUs.map((u, i) => (
              <div key={i} className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
                <h3 className="font-semibold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Врачи */}
      <section id="vrachi" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Врачи направления
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GYNECOLOGISTS.map((d) => (
              <div key={d.id} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition group">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4 ring-2 ring-white shadow-md">
                  <Image src={d.photo} alt={d.name} fill className="object-cover" sizes="96px" />
                </div>
                <h3 className="font-bold text-gray-900">{d.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{d.specialization}</p>
                <p className="text-gray-500 text-sm mt-1">Стаж {d.experience} лет</p>
                <Link
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 py-2.5 px-5 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition"
                >
                  Записаться
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 text-sm">
            Записаться можно к любому специалисту. Администратор подберёт удобное время при записи.
          </p>
        </div>
      </section>

      {/* Цены */}
      <section id="tseny" className="py-10 sm:py-12 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Цены
          </h2>
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-4 px-4 font-semibold text-gray-800">Услуга</th>
                  <th className="text-right py-4 px-4 font-semibold text-gray-800 w-28">Цена</th>
                </tr>
              </thead>
              <tbody>
                {config.prices.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="py-3 px-4 text-gray-800">{p.name}</td>
                    <td className="py-3 px-4 text-right font-semibold text-gray-900">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Актуальные цены уточняйте при записи. Полный прайс — на странице{' '}
            <Link href="/ginekolog-v-odintsovo" className="text-emerald-600 hover:underline">
              Гинекология
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-12 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-3">
            {config.faq.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm hover:border-emerald-100 transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <span
                    className={`text-emerald-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-700 text-sm leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Запишитесь на консультацию в Альтамед-С
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Врач поможет оценить симптомы, подобрать обследование и определить дальнейшую тактику.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition"
            >
              Записаться на приём
            </Link>
            <a
              href={PHONE_LINK}
              className="inline-flex justify-center px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Связанные страницы */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Связанные услуги и статьи
          </h2>
          <div className="flex flex-wrap gap-3">
            {config.relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-emerald-600 font-medium hover:bg-emerald-50 hover:border-emerald-200 transition shadow-sm"
              >
                {l.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
