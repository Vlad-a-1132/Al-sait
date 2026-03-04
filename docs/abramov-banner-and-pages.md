# Баннер Абрамова на странице услуг и все связанные страницы

Документ содержит полный код баннера имплантолога (Абрамов) на странице `/services` и код всех страниц, на которые ведёт баннер или которые доступны из него.

**Структура:**
- Баннер показывается на странице «Услуги» (`/services`), первый слайд (переключение раз в 10 сек с ортодонтическим баннером).
- Клик по баннеру → `/doctor/abramov-implantolog`.
- Со страницы врача по кнопке «Подробнее» у каждого направления → `/services/dentistry/implantology/[slug]` (имплантация, костная пластика, синус-лифтинг и т.д.).

---

## 1. Компонент баннера на странице услуг

Файл: `src/components/DentalPromoBanner.tsx`

Баннер Абрамова — это первый слайд (`activeBanner === 0`): десктопный `ImplantDesktopSVG` (1200×160) и мобильный `ImplantMobile580SVG` (580×199). Оба обёрнуты в `Link` на `/doctor/abramov-implantolog`.

```tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { OrthoDesktopSVG, OrthoMobileSVG } from './OrthoPromoBanner';

const DOCTOR_IMAGE = "/images/promo/Abramov Yuno Eriilevich 1.webp";
const BANNER_INTERVAL_MS = 10000;

export default function DentalPromoBanner() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBanner((i) => (i + 1) % 2);
    }, BANNER_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-[1400px] mx-auto mb-8 px-0 relative">
      {activeBanner === 0 ? (
        <>
          {/* Баннер Абрамова: десктоп */}
          <Link href="/doctor/abramov-implantolog" className="block hidden md:block w-full max-w-[1200px] mx-auto">
            <ImplantDesktopSVG />
          </Link>
          {/* Баннер Абрамова: мобильный */}
          <Link href="/doctor/abramov-implantolog" className="block md:hidden w-full max-w-[580px] mx-auto">
            <ImplantMobile580SVG />
          </Link>
        </>
      ) : (
        <>
          <Link href="/doctor/goncharenko-ortodont" className="block hidden md:block w-full max-w-[1400px] mx-auto">
            <OrthoDesktopSVG />
          </Link>
          <Link href="/doctor/goncharenko-ortodont" className="block md:hidden w-full max-w-[580px] mx-auto">
            <OrthoMobileSVG />
          </Link>
        </>
      )}

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          type="button"
          onClick={() => setActiveBanner((i) => (i === 0 ? 1 : i - 1))}
          className="p-2 rounded-full text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
          aria-label="Предыдущий баннер"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {[0, 1].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveBanner(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeBanner === index
                ? 'w-8 bg-emerald-500'
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={index === 0 ? 'Баннер: Имплантация' : 'Баннер: Ортодонтия'}
            aria-pressed={activeBanner === index}
          />
        ))}
        <button
          type="button"
          onClick={() => setActiveBanner((i) => (i + 1) % 2)}
          className="p-2 rounded-full text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
          aria-label="Следующий баннер"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
```

**Полный код компонента** (включая оба SVG — десктопный `ImplantDesktopSVG` и мобильный `ImplantMobile580SVG`) находится в одном файле: **`src/components/DentalPromoBanner.tsx`** (~456 строк). Ниже в документе приведены только обёртка слайдера и ссылки на `/doctor/abramov-implantolog`; сами SVG (фигуры зубов, импланта, фото врача, CTA) нужно копировать из этого файла (функции `ImplantDesktopSVG` и `ImplantMobile580SVG`).

---

## 2. Стили баннера имплантолога (globals.css)

Файл: `src/app/globals.css` — блоки для `.implantBanner` (десктоп) и `.implantBanner580` (мобильный).

```css
/* ========== Десктоп баннер имплантолога (implantBanner) ========== */
.implantBanner {
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
}
.implantBanner .t1 {
  fill: rgba(255, 255, 255, 0.96);
  font-size: 22px;
  font-weight: 760;
  letter-spacing: 0.25px;
  opacity: 0;
  animation: implantFadeOnly 0.85s ease forwards;
}
.implantBanner .pillText {
  fill: rgba(255, 255, 255, 0.86);
  font-size: 12.4px;
  font-weight: 700;
  letter-spacing: 0.22px;
}
.implantBanner .chipText {
  fill: rgba(255, 255, 255, 0.78);
  font-size: 12.1px;
  font-weight: 650;
  letter-spacing: 0.18px;
}
.implantBanner .pills {
  opacity: 0;
  animation: implantFadeOnly 0.85s ease 0.14s forwards;
}
.implantBanner .chips {
  opacity: 0;
  animation: implantFadeOnly 0.85s ease 0.26s forwards;
}
@keyframes implantFadeOnly {
  from { opacity: 0; }
  to { opacity: 1; }
}
.implantBanner .sweep {
  animation: implantSweep 3.2s ease-in-out 0.4s infinite;
  transform: skewX(-12deg);
  mix-blend-mode: screen;
}
@keyframes implantSweep {
  0% { transform: translateX(0) skewX(-12deg); opacity: 0; }
  12% { opacity: 0.9; }
  50% { opacity: 0.55; }
  88% { opacity: 0.9; }
  100% { transform: translateX(1560px) skewX(-12deg); opacity: 0; }
}
.implantBanner .xrayLine {
  animation: implantXrayLine 2.4s ease-in-out 1.2s infinite;
}
@keyframes implantXrayLine {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.75; }
}
.implantBanner .xraySweep {
  animation: implantXraySweep 3s ease-in-out 1s infinite;
  mix-blend-mode: screen;
}
@keyframes implantXraySweep {
  0% { opacity: 0; transform: translateX(-680px); }
  15% { opacity: 0.75; }
  55% { opacity: 0.25; }
  100% { opacity: 0; transform: translateX(680px); }
}
.implantBanner .orbits {
  animation: implantOrbits 6s ease-in-out 1.2s infinite;
  transform-origin: 700px 60px;
}
@keyframes implantOrbits {
  0%, 100% { opacity: 0.9; transform: translateY(0); }
  50% { opacity: 0.65; transform: translateY(2px); }
}
.implantBanner .teethPack {
  animation: implantTeethPolish 6.2s ease-in-out 1.15s infinite;
}
@keyframes implantTeethPolish {
  0%, 60% { opacity: 0.85; }
  74% { opacity: 1; }
  100% { opacity: 0.95; }
}
.implantBanner #sockEl2 {
  animation: implantSockA2 7s ease-in-out infinite;
}
@keyframes implantSockA2 {
  0%, 52% { opacity: 1; }
  62% { opacity: 0; }
  88% { opacity: 0; }
  96%, 100% { opacity: 1; }
}
.implantBanner #impEl2 {
  animation: implantImpA2 7s ease-in-out infinite;
  transform-origin: 165px 130px;
}
@keyframes implantImpA2 {
  0% { opacity: 0; transform: translateY(-150px) rotate(0deg); }
  8% { opacity: 1; transform: translateY(-110px) rotate(0deg); }
  43% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  46% { opacity: 1; transform: translateY(-5px) rotate(1092deg); }
  49% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  60% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  70% { opacity: 0; transform: translateY(0) rotate(1080deg); }
  100% { opacity: 0; transform: translateY(-150px) rotate(0deg); }
}
.implantBanner #crwEl2 {
  animation: implantCrwA2 7s ease-in-out infinite;
  transform-origin: 165px 145px;
}
@keyframes implantCrwA2 {
  0%, 52% { opacity: 0; transform: translateY(-120px); }
  65% { opacity: 1; transform: translateY(0); }
  67% { opacity: 1; transform: translateY(-4px); }
  70% { opacity: 1; transform: translateY(0); }
  88% { opacity: 1; }
  95%, 100% { opacity: 0; transform: translateY(-120px); }
}
.implantBanner .ctaBadgeT {
  fill: rgba(255, 255, 255, 0.96);
  font-size: 12.2px;
  font-weight: 940;
  letter-spacing: 0.08px;
}
.implantBanner .ctaBadge {
  opacity: 0;
  animation: implantFadeOnly 0.6s ease 1.02s forwards, implantCtaBadgeFloat 2.8s ease-in-out 2.1s infinite;
}
@keyframes implantCtaBadgeFloat {
  0%, 100% { transform: translate(900px, 50px) scale(0.88) translateY(0); }
  50% { transform: translate(900px, 50px) scale(0.88) translateY(-2px); }
}
.implantBanner .ctaBadgeSpin {
  transform-origin: 0 0;
  animation: implantCtaSpin 3.6s cubic-bezier(0.3, 1, 0.3, 1) 1.4s infinite;
  opacity: 0.95;
}
@keyframes implantCtaSpin {
  0% { transform: rotate(0deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-8deg); }
  100% { transform: rotate(360deg); }
}
.implantBanner .ctaStateA {
  opacity: 1;
  animation: implantCtaShowA 4.2s ease-in-out 1.25s infinite;
}
.implantBanner .ctaStateB {
  opacity: 0;
  animation: implantCtaShowB 4.2s ease-in-out 1.25s infinite;
}
@keyframes implantCtaShowA {
  0%, 42% { opacity: 1; }
  50%, 92% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes implantCtaShowB {
  0%, 42% { opacity: 0; }
  50%, 92% { opacity: 1; }
  100% { opacity: 0; }
}
.implantBanner .ctaSp { opacity: 0; transform-origin: center; }
.implantBanner .ctaSp.c1 { animation: implantCtaSpark 3.4s ease-in-out 1.7s infinite; }
.implantBanner .ctaSp.c2 { animation: implantCtaSpark 3.8s ease-in-out 2s infinite; }
.implantBanner .ctaSp.c3 { animation: implantCtaSpark 4.1s ease-in-out 2.3s infinite; }
@keyframes implantCtaSpark {
  0% { opacity: 0; transform: scale(0.7); }
  20% { opacity: 0.85; transform: scale(1); }
  55% { opacity: 0.25; transform: scale(1.18); }
  100% { opacity: 0; transform: scale(0.7); }
}
.implantBanner .midScene {
  opacity: 0;
  transform-origin: -8px -118px;
  animation: implantMidIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.85s forwards, implantMidFloat 3.2s ease-in-out 1.8s infinite;
}
@keyframes implantMidIn {
  from { opacity: 0; transform: translate(420px, 12px) translateY(6px) scale(0.504); }
  to { opacity: 1; transform: translate(420px, 12px) translateY(0) scale(0.504); }
}
@keyframes implantMidFloat {
  0%, 100% { transform: translate(420px, 12px) translateY(0) scale(0.504); }
  50% { transform: translate(420px, 12px) translateY(-2px) scale(0.504); }
}
.implantBanner .ctaBtn {
  cursor: pointer;
  opacity: 0;
  animation: implantFadeOnly 0.6s ease 1.12s forwards, implantCtaFloat 2.6s ease-in-out 2s infinite;
}
@keyframes implantCtaFloat {
  0%, 100% { transform: translate(900px, 122px) translateY(0); }
  50% { transform: translate(900px, 122px) translateY(-2px); }
}
.implantBanner .ctaBtn:hover rect {
  fill: rgba(94, 243, 196, 0.18);
  stroke: rgba(94, 243, 196, 0.95);
}
.implantBanner .docMain {
  opacity: 0;
  animation: implantDocIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.95s forwards, implantDocFloat 2.6s ease-in-out 2s infinite;
}
@keyframes implantDocIn {
  from { opacity: 0; transform: translateY(6px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes implantDocFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.implantBanner .gloss { mix-blend-mode: screen; opacity: 0.92; }
.implantBanner .badge {
  opacity: 0.95;
  animation: implantBadgePulse 1.4s ease-in-out 2.2s infinite;
}
@keyframes implantBadgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
@media (prefers-reduced-motion: reduce) {
  .implantBanner .sweep,
  .implantBanner .xrayLine,
  .implantBanner .xraySweep,
  .implantBanner .orbits,
  .implantBanner .midScene,
  .implantBanner .docMain,
  .implantBanner .badge,
  .implantBanner .teethPack,
  .implantBanner .ctaBtn,
  .implantBanner .ctaBadge { animation: none !important; }
  .implantBanner .t1,
  .implantBanner .pills,
  .implantBanner .chips,
  .implantBanner .midScene,
  .implantBanner .docMain,
  .implantBanner .ctaBtn,
  .implantBanner .ctaBadge { opacity: 1; }
}

/* ========== Мобильный баннер имплантации 580×199 (implantBanner580) ========== */
.implantBanner580 {
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
}
.implantBanner580 .t1,
.implantBanner580 .t1b {
  fill: rgba(255, 255, 255, 0.96);
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.12px;
  opacity: 0;
}
.implantBanner580 .t1 { animation: imp580Fade 0.75s ease 0.05s forwards; }
.implantBanner580 .t1b { animation: imp580Fade 0.75s ease 0.1s forwards; }
.implantBanner580 .chipText {
  fill: rgba(255, 255, 255, 0.86);
  font-size: 12px;
  font-weight: 740;
  letter-spacing: 0.05px;
}
.implantBanner580 .roles {
  opacity: 0;
  animation: imp580Fade 0.75s ease 0.18s forwards;
}
.implantBanner580 .sweep {
  animation: imp580Sweep 3.2s ease-in-out 0.4s infinite;
  transform: skewX(-12deg);
  mix-blend-mode: screen;
}
@keyframes imp580Sweep {
  0% { transform: translateX(0) skewX(-12deg); opacity: 0; }
  14% { opacity: 0.9; }
  50% { opacity: 0.55; }
  86% { opacity: 0.9; }
  100% { transform: translateX(920px) skewX(-12deg); opacity: 0; }
}
.implantBanner580 .xrayLine { animation: imp580XrayLine 2.2s ease-in-out 1.1s infinite; }
@keyframes imp580XrayLine {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.82; }
}
.implantBanner580 .xraySweep {
  animation: imp580XraySweep 2.8s ease-in-out 1s infinite;
  mix-blend-mode: screen;
}
@keyframes imp580XraySweep {
  0% { opacity: 0; transform: translateX(-260px); }
  15% { opacity: 0.85; }
  55% { opacity: 0.25; }
  100% { opacity: 0; transform: translateX(260px); }
}
.implantBanner580 .orbits {
  animation: imp580Orbits 5.5s ease-in-out 1s infinite;
  transform-origin: 320px 40px;
  opacity: 0.85;
}
@keyframes imp580Orbits {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px); }
}
@keyframes imp580Fade { from { opacity: 0; } to { opacity: 1; } }
.implantBanner580 .teethPack { animation: imp580TeethPolish 6.2s ease-in-out 1.05s infinite; }
@keyframes imp580TeethPolish {
  0%, 60% { opacity: 0.85; }
  74% { opacity: 1; }
  100% { opacity: 0.95; }
}
.implantBanner580 #sockEl2_580 { animation: imp580SockA2 7s ease-in-out infinite; }
@keyframes imp580SockA2 {
  0%, 52% { opacity: 1; }
  62% { opacity: 0; }
  88% { opacity: 0; }
  96%, 100% { opacity: 1; }
}
.implantBanner580 #impEl2_580 {
  animation: imp580ImpA2 7s ease-in-out infinite;
  transform-origin: 165px 130px;
}
@keyframes imp580ImpA2 {
  0% { opacity: 0; transform: translateY(-120px) rotate(0deg); }
  8% { opacity: 1; transform: translateY(-88px) rotate(0deg); }
  43% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  46% { opacity: 1; transform: translateY(-4px) rotate(1092deg); }
  49% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  60% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  70% { opacity: 0; transform: translateY(0) rotate(1080deg); }
  100% { opacity: 0; transform: translateY(-120px) rotate(0deg); }
}
.implantBanner580 #crwEl2_580 {
  animation: imp580CrwA2 7s ease-in-out infinite;
  transform-origin: 165px 145px;
}
@keyframes imp580CrwA2 {
  0%, 52% { opacity: 0; transform: translateY(-95px); }
  65% { opacity: 1; transform: translateY(0); }
  67% { opacity: 1; transform: translateY(-3px); }
  70% { opacity: 1; transform: translateY(0); }
  88% { opacity: 1; }
  95%, 100% { opacity: 0; transform: translateY(-95px); }
}
.implantBanner580 .midScene {
  opacity: 0;
  animation: imp580Fade 0.65s ease 0.55s forwards;
}
.implantBanner580 .midFloat { animation: imp580MidFloat 3s ease-in-out 1.5s infinite; }
@keyframes imp580MidFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
.implantBanner580 .ctaBtn {
  cursor: pointer;
  opacity: 0;
  animation: imp580Fade 0.6s ease 1.02s forwards, imp580CtaFloat 2.6s ease-in-out 2s infinite;
}
@keyframes imp580CtaFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
.implantBanner580 .ctaBtn:hover rect {
  fill: rgba(94, 243, 196, 0.18);
  stroke: rgba(94, 243, 196, 0.95);
}
.implantBanner580 .docMain {
  opacity: 0;
  animation: imp580Fade 0.65s ease 0.65s forwards, imp580DocFloat 2.6s ease-in-out 1.8s infinite;
  transform-origin: 498px 76px;
}
@keyframes imp580DocFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.implantBanner580 .gloss { mix-blend-mode: screen; opacity: 0.92; }
.implantBanner580 .badgeDot {
  opacity: 0.95;
  animation: imp580BadgePulse 1.3s ease-in-out 1.9s infinite;
}
@keyframes imp580BadgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.14); }
}
@media (prefers-reduced-motion: reduce) {
  .implantBanner580 .sweep,
  .implantBanner580 .xrayLine,
  .implantBanner580 .xraySweep,
  .implantBanner580 .orbits,
  .implantBanner580 .midFloat,
  .implantBanner580 .docMain,
  .implantBanner580 .teethPack,
  .implantBanner580 .ctaBtn,
  .implantBanner580 .badgeDot { animation: none !important; }
  .implantBanner580 .midScene,
  .implantBanner580 .docMain,
  .implantBanner580 .ctaBtn,
  .implantBanner580 .roles { opacity: 1; }
}
```

Полные стили с всеми keyframes — в `src/app/globals.css` (примерно строки 868–1328).

---

## 3. Страница врача Абрамова

Файл: `src/app/doctor/abramov-implantolog/page.tsx`

```tsx
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
```

---

## 4. Клиентская оболочка страницы врача (AbramovPageClient)

Файл: `src/components/doctor/AbramovPageClient.tsx`

Используется и для Абрамова, и для Гончаренко. Для Абрамова в `data` приходит `getAbramovBundle()` с направлениями имплантологии и `directionPageBasePath: "/services/dentistry/implantology"`.

```tsx
"use client";

import React, { useMemo, useState } from "react";
import type { PageDataBundle } from "./types";
import { SectionShell } from "./SectionShell";
import { DoctorHero } from "./DoctorHero";
import { DirectionsNavigator } from "./DirectionsNavigator";
import { DirectionDetails } from "./DirectionDetails";
import { AdvantagesBlock } from "./AdvantagesBlock";
import { OrthoSeoBlocks } from "./OrthoSeoBlocks";
import { PricingByDirection } from "./PricingByDirection";
import { FaqByDirection } from "./FaqByDirection";
import { ReviewsStrip } from "./ReviewsStrip";
import { PortfolioGrid } from "./PortfolioGrid";
import { FinalCtaCard } from "./FinalCtaCard";
import { getOrthodonticsSeoContent } from "@/data/goncharenko/orthodonticsSeo";

const SHOW_PORTFOLIO = false;

function DoctorPageClient({ data }: { data: PageDataBundle }) {
  const initial = data.directions[0]?.id ?? "";
  const [activeId, setActiveId] = useState(initial);
  const [portfolioFilter, setPortfolioFilter] = useState<string | null>(null);

  const activeDirection = useMemo(
    () => data.directions.find((d) => d.id === activeId) ?? data.directions[0],
    [data.directions, activeId]
  );

  const faqForFaq = useMemo(
    () => data.faq.map((f) => ({ id: f.id, q: f.q, a: f.a })),
    [data.faq]
  );

  if (!activeDirection) return null;

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <DoctorHero
        doctor={data.doctor}
        directions={data.directions}
        onPickDirection={setActiveId}
        bannerStyleBackground
      />
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
        <div className="h-10 md:h-14" />
        <SectionShell id="directions">
          <DirectionsNavigator
            directions={data.directions}
            activeId={activeId}
            onChange={setActiveId}
            activeDirection={activeDirection}
            directionPageBasePath={data.directionPageBasePath}
          />
        </SectionShell>
        <div className="h-10 md:h-14" />
        <SectionShell>
          <DirectionDetails direction={activeDirection} directionPageBasePath={data.directionPageBasePath} />
        </SectionShell>
        <div className="h-10 md:h-14" />
        <SectionShell>
          <AdvantagesBlock direction={activeDirection} />
        </SectionShell>
        {data.directionPageBasePath === "/services/dentistry/orthodontics" && (() => {
          const orthoSeo = getOrthodonticsSeoContent(activeDirection.id as import("@/data/goncharenko/directions").DirectionId);
          return orthoSeo ? (
            <>
              <div className="h-10 md:h-14" />
              <SectionShell>
                <OrthoSeoBlocks seoContent={orthoSeo} />
              </SectionShell>
            </>
          ) : null;
        })()}
        <div className="h-10 md:h-14" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionShell>
              <FaqByDirection direction={activeDirection} generalFaq={faqForFaq} />
            </SectionShell>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <SectionShell>
              <PricingByDirection direction={activeDirection} priceCta={data.priceCta} />
            </SectionShell>
            <SectionShell>
              <ReviewsStrip reviews={data.reviews} activeDirectionId={activeId} reviewsSource={data.reviewsSource} reviewsSources={data.reviewsSources} />
            </SectionShell>
          </div>
        </div>
        <div className="h-10 md:h-14" />
        {SHOW_PORTFOLIO && (
          <SectionShell>
            <PortfolioGrid
              cases={data.cases}
              directions={data.directions.map((d) => ({ id: d.id, shortTitle: d.shortTitle }))}
              activeDirectionId={portfolioFilter}
              onFilter={setPortfolioFilter}
            />
          </SectionShell>
        )}
        <div className="h-10 md:h-14" />
        <FinalCtaCard cta={{ label: "Записаться на приём", href: "/appointments" }} />
        <div className="h-16" />
      </div>
    </main>
  );
}

export { DoctorPageClient };
export default DoctorPageClient;
```

Для Абрамова `directionPageBasePath` задаётся в `src/data/abramov/index.ts` как `"/services/dentistry/implantology"`, поэтому кнопка «Подробнее» в `DirectionsNavigator` ведёт на `/services/dentistry/implantology/[slug]`.

---

## 5. Страницы направлений имплантологии (внутри «банера»)

Файл: `src/app/services/dentistry/implantology/[slug]/page.tsx`

Роут: `/services/dentistry/implantology/implantation`, `bone-grafting`, `sinus-lift`, `soft-tissue`, `immediate-implantation`, `prosthetics-on-implants`, `veneers-crowns`.

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import {
  IMPLANTOLOGY_DIRECTION_SLUGS,
  getImplantologyDirectionBySlug,
  getImplantologyDirectionCanonical,
} from "@/data/abramov/implantologyDirectionPages";
import { getImplantologyDirectionContent } from "@/data/abramov/implantologyDirectionContent";
import { getImplantologySeoContent } from "@/data/abramov/implantologyDirectionSeo";
import { ImplantologyPageContent } from "./ImplantologyPageContent";

type Props = { params: Promise<{ slug: string }> };

const IMPLANTOLOGY_IMAGES = {
  implantation: "/images/yslugi/implant.webp",
  "bone-grafting": "/images/services/task_01kjcgwmb5errt6v65h9kzs8g0_1772094423_img_1.webp",
  "sinus-lift": "/images/services/sinus.webp",
  "soft-tissue": "/images/services/plastika.webp",
  "immediate-implantation": "/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp",
  "prosthetics-on-implants": "/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp",
  "veneers-crowns": "/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp",
} as const;

export async function generateStaticParams() {
  return IMPLANTOLOGY_DIRECTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const direction = getImplantologyDirectionBySlug(slug);
  if (!direction) return { title: "Имплантология | Альтамед-С" };
  const title = `${direction.title} в Одинцово | Клиника «Альтамед-С»`;
  const description =
    direction.description.length > 160
      ? direction.description.slice(0, 157) + "..."
      : direction.description;
  const canonical = getImplantologyDirectionCanonical(slug);
  const imagePath = IMPLANTOLOGY_IMAGES[direction.id as keyof typeof IMPLANTOLOGY_IMAGES];
  return {
    title,
    description: `${description} Имплантация и хирургия в Одинцово. Запись в «Альтамед-С».`,
    alternates: { canonical },
    openGraph: {
      title: `${direction.title} — имплантология в Одинцово`,
      description,
      url: canonical,
      type: "article",
      images: imagePath
        ? [
            {
              url: `https://altamed-c.ru${imagePath}`,
              width: 1200,
              height: 630,
              alt: `${direction.title} в клинике Альтамед-С`,
            },
          ]
        : undefined,
    },
  };
}

export default async function ImplantologyDirectionPage({ params }: Props) {
  const { slug } = await params;
  const direction = getImplantologyDirectionBySlug(slug);
  if (!direction) notFound();

  const imageSrc = IMPLANTOLOGY_IMAGES[direction.id as keyof typeof IMPLANTOLOGY_IMAGES];
  const hasPriceList = direction.priceItems && direction.priceItems.length > 0;
  const content = getImplantologyDirectionContent(slug);
  const seoContent = getImplantologySeoContent(slug);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-cyan-600">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">...</svg>
                  Главная
                </Link>
              </li>
              <li>...</li>
              <li aria-current="page">
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{direction.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <ImplantologyPageContent
        direction={direction}
        content={content}
        seoContent={seoContent}
        imageSrc={imageSrc}
        hasPriceList={!!hasPriceList}
      />

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <p className="text-sm text-gray-500">
            <Link href="/doctor/abramov-implantolog" className="text-cyan-600 hover:underline">
              Страница врача-имплантолога Абрамова Ю. Э.
            </Link>
            {" · "}
            <Link href="/services/implantation" className="text-cyan-600 hover:underline">
              Имплантация зубов в Одинцово
            </Link>
          </p>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
```

---

## 6. Контент страницы направления имплантологии (ImplantologyPageContent)

Файл: `src/app/services/dentistry/implantology/[slug]/ImplantologyPageContent.tsx`

Компонент рисует героя, блок «Почему выбирают нас», преимущества, «Как проходит лечение», показания, при наличии `seoContent` — блоки показаний/противопоказаний, подготовка, реабилитация, доп. секции, цены, «Ответы на частые опасения», FAQ, «Люди также ищут», CTA. Полный код — в указанном файле (~665 строк). Ниже — структура без полного JSX.

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { DirectionData } from "@/components/doctor/types";
import type { ImplantologyDirectionContent } from "@/data/abramov/implantologyDirectionContent";
import type { ImplantologySeoContent } from "@/data/abramov/implantologyDirectionSeo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  direction: DirectionData;
  content: ImplantologyDirectionContent | null;
  seoContent: ImplantologySeoContent | null;
  imageSrc: string;
  hasPriceList: boolean;
};

export function ImplantologyPageContent({ direction, content, seoContent, imageSrc, hasPriceList }: Props) {
  const introLong = content?.introLong ?? direction.description;
  const benefitsLead = content?.benefitsLead;
  const benefitsList = content?.benefitsList ?? direction.whatYouGet;
  const forWhom = content?.forWhom;
  const clinicNote = content?.clinicNote;

  return (
    <>
      {/* Hero: заголовок, описание, CTA, изображение */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-800 text-white">...</section>

      {/* Блок "Почему выбирают нас" + что вы получаете */}
      <section className="bg-white py-16 md:py-20">...</section>

      {/* Чем полезна услуга (benefitsLead, benefitsList, forWhom) */}
      {benefitsLead && <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">...</section>}

      {/* Преимущества в Альтамед-С (direction.safety) */}
      <section className="bg-white py-16 md:py-20">...</section>

      {/* Как проходит лечение (steps) + Показания */}
      <section className="bg-slate-50 py-16 md:py-20">...</section>

      {/* SEO: Показания и противопоказания (indicationsExtended, contraindicationsTemporary, contraindicationsAbsolute) */}
      {seoContent && (
        <>
          <section id="indications-contraindications">...</section>
          {/* Подготовка к процедуре */}
          <section id="preparation">...</section>
          {/* Реабилитация и сроки */}
          <section id="rehabilitation">...</section>
          {/* Доп. блоки extraSections */}
          {seoContent.extraSections.length > 0 && <section>...</section>}
        </>
      )}

      {/* Цены в Одинцово */}
      <section className="bg-white py-16 md:py-20">...</section>

      {/* Ответы на частые опасения (commonFears) */}
      {seoContent && seoContent.commonFears.length > 0 && <section id="common-fears">...</section>}

      {/* Частые вопросы (direction.faq) */}
      <section className="bg-slate-50 py-16 md:py-20">...</section>

      {/* Люди также ищут (localSearches) */}
      {seoContent && seoContent.localSearches.length > 0 && <section id="local-searches">...</section>}

      {/* CTA: записаться на консультацию */}
      <section className="bg-white py-16 md:py-20">...</section>
    </>
  );
}
```

Полный JSX с разметкой и анимациями см. в `src/app/services/dentistry/implantology/[slug]/ImplantologyPageContent.tsx`.

---

---

## Баннер 8 марта на главной

Кратко: как баннер стоит на главной (`src/app/page.tsx`).

### Где на странице

Баннер вставлен внутри **первой секции** главной, после блока с приветствием/слайдером и сеткой услуг (в т.ч. кнопки «Все услуги»), **перед** секцией «Что Вас интересует?».

Разметка:  
`section` (основная секция) → `container` → … контент (слайдер, услуги, кнопка «Все услуги») … → **`div.w-full.mt-6.px-4.md:px-0`** (обёртка баннера) → **`div.march8-sakura-banner`** (сам баннер).

То есть баннер не в отдельной секции, а в общем потоке контента, с отступом сверху `mt-6` и горизонтальными отступами `px-4` на мобильных, `md:px-0` на десктопе.

### Размещение и сетка

- Контейнер баннера: `position: relative`, `overflow: hidden` (чтобы сцена сердца не вылезала за скругления).
- На десктопе (1024px+): баннер — **grid**: две колонки **1fr** (слева) и **520px** (справа); `align-items: center`, `gap: 28px`, `min-height: 210px`, паддинги `28px 34px`.
- Слева — `.march8-banner-left`: на мобильных `display: none`; на 1024px+ показывается, внутри неё — сцена сердца.
- Справа — `.march8-sakura-content`: бейдж, заголовок, абзац, «Спасибо…».

Итого: на десктопе слева сцена сердца, справа фиксированные 520px под текст; на мобильных только текст.

### Сцена сердца (слева)

- Блок сцены позиционируется **абсолютно** внутри левой колонки: `left: 56px`, `top: 50%`, `transform: translateY(-50%)`; размер области **420×240px**; `pointer-events: none`.
- На экранах **≤ 860px** сцена скрыта (`display: none`).
- Glow, лепестки и сердце позиционируются внутри `.march8-heart-scene`.

### Стили и параллакс

- Фон: светло-розовый градиент (радиальные пятна + линейный `#fbf7f9` → `#f5edf1`), `border-radius: 24px`, тонкая обводка, тень. Текст: по центру на мобильных, слева на десктопе.
- Параллакс: CSS-переменные **`--px`**, **`--py`**, **`--rx`** выставляет JS в `March8HeartScene`; сердце, glow и лепестки используют их в `transform`. Баннер в потоке не двигается — двигается только содержимое сцены.

### Структура блока

| Часть | Описание |
|--------|----------|
| **Баннер** | `.march8-sakura-banner` — контейнер с фоном, grid на десктопе (1fr + 520px). |
| **Левая колонка** | `.march8-banner-left` — скрыта на мобильных, на 1024px+ — сцена сердца. |
| **Сцена сердца** | `.march8-heart-scene` — 3D-сердце, glow, лепестки; параллакс через `--px`, `--py`, `--rx`. |
| **Текст** | `.march8-sakura-content` — бейдж, заголовок, абзац, подпись. |

Полный код: компонент **`src/components/March8HeartScene.tsx`**, разметка в `page.tsx` (обёртка + `.march8-sakura-banner`), стили в **`src/app/globals.css`** (блоки `.march8-*`). На экранах ≤ 860px сцена сердца скрыта, остаётся только текст поздравления.

---

## Сводка файлов

| Назначение | Файл |
|------------|------|
| Баннер 8 марта (сцена сердца) | `src/components/March8HeartScene.tsx` |
| Стили баннера 8 марта | `src/app/globals.css` (блоки `.march8-*`) |
| Баннер на /services (обёртка + слайды) | `src/components/DentalPromoBanner.tsx` |
| SVG баннера Абрамова (десктоп + мобильный) | там же: `ImplantDesktopSVG`, `ImplantMobile580SVG` |
| Стили баннера имплантолога | `src/app/globals.css` (блоки `.implantBanner`, `.implantBanner580`) |
| Страница врача | `src/app/doctor/abramov-implantolog/page.tsx` |
| Контент страницы врача | `src/components/doctor/AbramovPageClient.tsx` |
| Страница направления имплантологии | `src/app/services/dentistry/implantology/[slug]/page.tsx` |
| Контент страницы направления | `src/app/services/dentistry/implantology/[slug]/ImplantologyPageContent.tsx` |

Данные направлений и SEO: `src/data/abramov/` (directions, implantologyDirectionPages, implantologyDirectionContent, implantologyDirectionSeo, index с getAbramovBundle).
