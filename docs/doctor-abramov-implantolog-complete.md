# Страница врача Абрамова — полный код (структура, стили, анимации, картинки)

Документ содержит **всё** для страницы `/doctor/abramov-implantolog`: маршрут, данные, **все** компоненты с полным кодом, **все** используемые стили и анимации, полный список картинок. Если при вставке кода картинка «Пластика мягких тканей» или другая отображается сломанной — проверьте раздел «1. Обязательные файлы изображений».

---

## 1. Обязательные файлы изображений

Все пути относительно папки `public/`. Если файла нет — в блоке направлений будет сломанная иконка (broken image).

| Назначение | Путь в проекте | Примечание |
|------------|-----------------|------------|
| Фото врача (Hero) | `images/promo/Abramov Yuno Eriilevich 1.webp` | |
| Направления — общая | `images/services/task_01kjc4qc2tf81skh1vp17q188v_1772081647_img_1.webp` | |
| Имплантация (десктоп) | `images/services/Group 83.svg` | |
| Имплантация (мобильный) | `images/services/Group 84.svg` | |
| Костная пластика (десктоп) | `images/services/Group 85.png` | |
| Костная пластика (мобильный) | `images/services/task_01kjcgwmb5errt6v65h9kzs8g0_1772094423_img_1.webp` | |
| Синус-лифтинг | `images/services/sinus.webp` | |
| **Пластика мягких тканей** | **`images/services/plastika.webp`** | **Часто отсутствует — добавьте файл или заглушку** |
| Одномоментная имплантация | `images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp` | |
| Протезирование на имплантатах | `images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp` | |
| Виниры, коронки | `images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp` | |
| DirectionDetails: имплантация | `images/services/task_01kjc7717tfbk83k4t6h2wsahz_1772084259_img_0%201.svg` | |
| DirectionDetails: костная пластика | `images/services/task_01kjcg6awwf9db6x230qc1yt01_1772093679_img_0.webp` | |

**Чтобы не было сломанной картинки для «Пластика мягких тканей»:** положите файл `plastika.webp` в `public/images/services/` или замените константу `SOFT_TISSUE_IMAGE` в компонентах на путь к существующему изображению.

---

## 2. Стили (CSS), необходимые для страницы

Подключите в глобальный CSS (например `src/app/globals.css`). Без этих правил горизонтальный скролл направлений и фон Hero будут вести себя иначе; анимации Hero не сработают.

```css
/* Скрытие скроллбара (используется в DirectionsNavigator) */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Ключевые кадры для Hero (sweep, orbits, частицы) */
@keyframes implantSweep {
  0% { transform: translateX(0) skewX(-12deg); opacity: 0; }
  12% { opacity: 0.9; }
  50% { opacity: 0.55; }
  88% { opacity: 0.9; }
  100% { transform: translateX(1560px) skewX(-12deg); opacity: 0; }
}
@keyframes implantOrbits {
  0%, 100% { opacity: 0.9; transform: translateY(0); }
  50% { opacity: 0.65; transform: translateY(2px); }
}
@keyframes orthoParticle {
  0% { opacity: 0; transform: scale(0.7); }
  18% { opacity: 0.85; transform: scale(1); }
  55% { opacity: 0.18; transform: scale(1.18); }
  100% { opacity: 0; transform: scale(0.7); }
}

/* Hero: карточка и фоновая анимация */
.heroBannerBg-card {
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 0 0 1px rgba(94, 243, 196, 0.15),
    0 0 24px rgba(94, 243, 196, 0.08),
    0 0 48px rgba(33, 199, 255, 0.06);
}
.heroBannerBg-sweep-inner {
  animation: implantSweep 3.2s ease-in-out 0.4s infinite;
  transform: skewX(-12deg);
  mix-blend-mode: screen;
}
.heroBannerBg-orbits-g {
  animation: implantOrbits 6s ease-in-out 1.2s infinite;
  transform-origin: 50% 50%;
}
.heroBannerBg-p {
  opacity: 0;
  transform-origin: center;
  animation: orthoParticle 4.2s ease-in-out infinite;
}
.heroBannerBg-p1 { animation-delay: 0.6s; }
.heroBannerBg-p2 { animation-delay: 1.2s; }
.heroBannerBg-p3 { animation-delay: 1.8s; }
.heroBannerBg-p4 { animation-delay: 2.4s; }
.heroBannerBg-p5 { animation-delay: 0s; }
@media (prefers-reduced-motion: reduce) {
  .heroBannerBg-p { animation: none !important; opacity: 0.4; }
}
```

---

## 3. Маршрут страницы

**Файл:** `src/app/doctor/abramov-implantolog/page.tsx`

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

## 4. Данные (data/abramov)

Полный код файлов: `index.ts`, `faq.ts`, `reviews.ts`, `cases.ts`. Массив `directions` (8 направлений) — в `src/data/abramov/directions.ts` (≈230 строк); в документе ниже приведены типы и пример одного направления.

### 4.1. index.ts (врач + getAbramovBundle)

```ts
import type { DirectionId } from "./directions";
import { directions } from "./directions";
import { casesAbramov } from "./cases";
import { reviewsAbramov, reviewsAbramovSourceUrl } from "./reviews";
import { faqGeneral } from "./faq";

export type { DirectionId };
export { directions, casesAbramov, reviewsAbramov, faqGeneral };

export interface DoctorCore {
  slug: string;
  clinicName: string;
  fullName: string;
  specialization: string;
  tagline: string;
  experienceYears: number;
  rating: number;
  photoSrc: string;
  chips: { label: string; color: "cyan" | "mint" | "gray" }[];
  ctas: { primary: { label: string; href: string }; secondary: { label: string; href: string } };
  trustBadges: { label: string; short?: string }[];
}

export const doctorAbramov: DoctorCore = {
  slug: "abramov-implantolog",
  clinicName: "Альтамед-С",
  fullName: "Абрамов Юно Эриильевич",
  specialization: "Стоматолог-хирург, имплантолог",
  tagline: "Хирургия и имплантация зубов",
  experienceYears: 7,
  rating: 4.9,
  photoSrc: "/images/promo/Abramov Yuno Eriilevich 1.webp",
  chips: [
    { label: "Стоматолог-хирург", color: "cyan" },
    { label: "Имплантолог", color: "mint" },
    { label: "импланты, протезирование", color: "gray" },
  ],
  ctas: {
    primary: { label: "Записаться на приём", href: "/appointments" },
    secondary: { label: "Выбрать направление", href: "#directions" },
  },
  trustBadges: [
    { label: "Стаж 7 лет", short: "7 лет" },
    { label: "Рейтинг 4.9", short: "4.9" },
    { label: "Клиника Альтамед-С", short: "Альтамед-С" },
    { label: "Под ключ, без боли", short: "Без боли" },
  ],
};

export interface PageDataBundle {
  doctor: DoctorCore;
  directions: typeof directions;
  cases: typeof casesAbramov;
  reviews: typeof reviewsAbramov;
  faq: typeof faqGeneral;
  priceCta: { label: string; href: string };
  reviewsSource?: { url: string; label: string };
  directionPageBasePath?: string;
}

export function getAbramovBundle(): PageDataBundle {
  return {
    doctor: doctorAbramov,
    directions,
    cases: casesAbramov,
    reviews: reviewsAbramov,
    faq: faqGeneral,
    priceCta: { label: "Посмотреть полный прайс", href: "/services/implantation#prices" },
    reviewsSource: { url: reviewsAbramovSourceUrl, label: "ПроДокторов" },
    directionPageBasePath: "/services/dentistry/implantology",
  };
}

export type { DirectionData } from "./directions";
```

### 4.2. faq.ts, reviews.ts, cases.ts

См. предыдущий документ `doctor-abramov-implantolog-full.md` или файлы в `src/data/abramov/`. Полный массив `directions` — в `src/data/abramov/directions.ts`.

---

## 5. Типы и пресеты анимаций

### 5.1. types.ts

```ts
export interface DoctorCore {
  slug: string;
  clinicName: string;
  fullName: string;
  specialization: string;
  tagline: string;
  experienceYears: number;
  rating: number;
  photoSrc: string;
  chips: { label: string; color: "cyan" | "mint" | "gray" }[];
  ctas: { primary: { label: string; href: string }; secondary: { label: string; href: string } };
  trustBadges: { label: string; short?: string }[];
}

export interface DirectionData {
  id: string;
  shortTitle: string;
  subtitle?: string;
  title: string;
  description: string;
  badges?: { label: string }[];
  indications: string[];
  whatYouGet: string[];
  steps: { title: string; text: string }[];
  safety: string[];
  faq: { q: string; a: string }[];
  cta: { primaryLabel: string; primaryHref: string };
  priceBlock?: { from?: string; note?: string };
  priceItems?: { code?: string; name: string; price: string }[];
  priceBlockIntro?: string;
  priceBlockOutro?: string;
}

export interface PageDataBundle {
  doctor: DoctorCore;
  directions: DirectionData[];
  cases: Array<{ id: string; directionId: string; title: string; tag?: string }>;
  reviews: Array<{ id: string; directionId?: string; name: string; rating: number; text: string }>;
  faq: Array<{ id: string; q: string; a: string }>;
  priceCta: { label: string; href: string };
  reviewsSource?: { url: string; label: string };
  reviewsSources?: { url: string; label: string }[];
  directionPageBasePath?: string;
}
```

### 5.2. MotionPresets.ts

```ts
"use client";

const duration = 0.45;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function makeMotionPresets(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      vSection: { hidden: { opacity: 1 }, show: { opacity: 1 } },
      vCard: { rest: {}, hover: {} },
      vBtn: { rest: {}, hover: {}, tap: {} },
      vIcon: { rest: {}, hover: {} },
      vSwap: { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } },
      vStagger: { hidden: {}, show: {} },
      vReveal: { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } },
    };
  }
  return {
    vSection: {
      hidden: { opacity: 0, y: 12 },
      show: { opacity: 1, y: 0, transition: { duration, ease } },
    },
    vCard: {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.02, y: -2, transition: { duration: 0.35, ease } },
    },
    vBtn: {
      rest: { scale: 1 },
      hover: { scale: 1.02, transition: { duration: 0.3 } },
      tap: { scale: 0.98 },
    },
    vIcon: { rest: { rotate: 0 }, hover: { rotate: 3 } },
    vSwap: {
      initial: { opacity: 0, x: -8 },
      animate: { opacity: 1, x: 0, transition: { duration, ease } },
      exit: { opacity: 0, x: 8, transition: { duration: 0.3 } },
    },
    vStagger: {
      hidden: { opacity: 0 },
      show: (i: number) => ({ opacity: 1, transition: { delay: i * 0.06, duration } }),
    },
    vReveal: {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration, ease } },
    },
  };
}
```

---

## 6. Компоненты — полный код

### 6.1. AbramovPageClient.tsx

(Идентичен разделу 5.1 из `doctor-abramov-implantolog-full.md`: импорты SectionShell, DoctorHero, DirectionsNavigator, DirectionDetails, AdvantagesBlock, PricingByDirection, FaqByDirection, ReviewsStrip, FinalCtaCard; состояние activeId, activeDirection; рендер main > DoctorHero > секции. Полный код см. в `src/components/doctor/AbramovPageClient.tsx`.)

### 6.2. DoctorHero.tsx

(Полный код см. в `doctor-abramov-implantolog-full.md`, раздел 5.2: фон, сетка, heroBannerBg-sweep, heroBannerBg-orbits, heroBannerBg-particles, heroBannerBg-card, фото врача, vStagger/vCard.)

### 6.3. SectionShell.tsx

```tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const { vSection } = makeMotionPresets(!!reduced);
  return (
    <section id={id} className="w-full">
      <motion.div
        variants={vSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={
          "overflow-x-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8 " +
          className
        }
      >
        {children}
      </motion.div>
    </section>
  );
}
```

### 6.4. DirectionsNavigator.tsx (полный код)

Константы картинок и полная разметка: левая колонка «Направления лечения», кнопки направлений (мобильный горизонтальный скролл с `scrollbar-hide` + десктопный список), справа превью выбранного направления с картинкой по `activeDirection.id`. Картинка для «Пластика мягких тканей» — `SOFT_TISSUE_IMAGE` = `/images/services/plastika.webp`. Если файла нет — будет сломанное изображение.

```tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const MEDIA_IMAGE = "/images/services/task_01kjc4qc2tf81skh1vp17q188v_1772081647_img_1.webp";
const IMPLANTATION_IMAGE = "/images/services/Group 83.svg";
const IMPLANTATION_IMAGE_MOBILE = "/images/services/Group 84.svg";
const BONE_GRAFTING_IMAGE = "/images/services/Group 85.png";
const BONE_GRAFTING_IMAGE_MOBILE = "/images/services/task_01kjcgwmb5errt6v65h9kzs8g0_1772094423_img_1.webp";
const SINUS_LIFT_IMAGE = "/images/services/sinus.webp";
const SOFT_TISSUE_IMAGE = "/images/services/plastika.webp";
const IMMEDIATE_IMPLANTATION_IMAGE = "/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp";
const PROSTHETICS_ON_IMPLANTS_IMAGE = "/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp";
const VENEERS_CROWNS_IMAGE = "/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp";
const BITE_CORRECTION_IMAGE = "/images/services/task_01kjedhsx1fr0r6jshty3weha3_1772158013_img_1.webp";
const GNATHOLOGY_VNJC_IMAGE = "/images/services/task_01kjee10vbfzft0p4jwc1jhhy9_1772158514_img_0.webp";
const JAW_DEFECTS_IMAGE = "/images/services/task_01kjeeh8ave6yvj14anr34q620_1772159046_img_0.webp";
const BRACES_IMAGE = "/images/services/task_01kjef6tahe3fb2acdv7jvkhpn_1772159752_img_0.webp";
const ALIGNERS_IMAGE = "/images/services/task_01kjefcfecevgathas0khxayzn_1772159936_img_1.webp";
const CHILDREN_ORTHO_IMAGE = "/images/services/task_01kjefj215evg92prh3rbbcnfk_1772160119_img_1.webp";
const RETENTION_IMAGE = "/images/services/task_01kjefpfnkep6vwvme4h9ydfbt_1772160257_img_0.webp";

export function DirectionsNavigator({
  directions,
  activeId,
  onChange,
  activeDirection,
  directionPageBasePath,
}: {
  directions: DirectionData[];
  activeId: string;
  onChange: (id: string) => void;
  activeDirection: DirectionData;
  directionPageBasePath?: string;
}) {
  const reduced = useReducedMotion();
  const { vSwap, vCard, vBtn, vIcon } = makeMotionPresets(!!reduced);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-8 overflow-x-hidden lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h2 className="mb-2 text-2xl font-bold text-[#0F172A]">Направления лечения</h2>
        <p className="mb-4 text-sm text-[#64748B] lg:mb-6">
          Выберите направление — блоки ниже обновятся.
        </p>
        <div className="flex flex-col gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="self-start rounded-full bg-slate-100 px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-slate-200 transition-colors"
          >
            {showAll ? "Свернуть" : "Показать все"}
          </button>
          {showAll ? (
            <div className="flex flex-col gap-2">
              {directions.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    onClick={() => onChange(d.id)}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      isActive
                        ? "flex w-full items-center gap-3 rounded-[18px] border border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10 px-4 py-3 text-left"
                        : "flex w-full items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white/50 px-4 py-3 text-left hover:border-[#21C7FF]/30"
                    }
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-200/80 text-lg">&#9670;</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-[#0F172A]">{d.shortTitle}</p>
                      {d.subtitle && <p className="truncate text-sm text-[#64748B]">{d.subtitle}</p>}
                    </div>
                    <span className="text-[#64748B]">&rarr;</span>
                  </motion.button>
                );
              })}
            </div>
          ) : (
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scroll-smooth snap-x snap-mandatory scrollbar-hide">
              {directions.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    onClick={() => onChange(d.id)}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      "flex flex-shrink-0 snap-start items-center gap-2 rounded-[18px] border px-3 py-2.5 text-left whitespace-nowrap " +
                      (isActive ? "border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10" : "border-slate-200/80 bg-white/50 hover:border-[#21C7FF]/30")
                    }
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-sm">&#9670;</span>
                    <span className="font-semibold text-[#0F172A] text-sm">{d.shortTitle}</span>
                    <span className="text-[#64748B] text-sm">&rarr;</span>
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
        <div className="hidden flex-col gap-2 lg:flex">
          {directions.map((d) => {
            const isActive = d.id === activeId;
            return (
              <motion.button
                key={d.id}
                type="button"
                onClick={() => onChange(d.id)}
                variants={vCard}
                initial="rest"
                whileHover="hover"
                className={
                  isActive
                    ? "flex w-full items-center gap-4 rounded-[18px] border border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10 px-4 py-3 text-left"
                    : "flex w-full items-center gap-4 rounded-[18px] border border-slate-200/80 bg-white/50 px-4 py-3 text-left hover:border-[#21C7FF]/30"
                }
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200/80 text-lg">&#9670;</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-[#0F172A]">{d.shortTitle}</p>
                  {d.subtitle && <p className="truncate text-sm text-[#64748B]">{d.subtitle}</p>}
                </div>
                <motion.span variants={vIcon} initial="rest" whileHover="hover" className="text-[#64748B]">&rarr;</motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="min-h-[320px] min-w-0 lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            variants={vSwap}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50/80 to-white p-5 md:p-6"
          >
            <h3 className="text-xl font-bold text-[#0F172A]">{activeDirection.title}</h3>
            <p className="leading-relaxed text-[#475569]">{activeDirection.description}</p>
            {activeDirection.badges && activeDirection.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeDirection.badges.map((b) => (
                  <span key={b.label} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{b.label}</span>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold text-[#0F172A]">Показания</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-[#475569]">
                  {activeDirection.indications.slice(0, 4).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[#0F172A]">Что вы получаете</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-[#475569]">
                  {activeDirection.whatYouGet.slice(0, 4).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {["sinus-lift","soft-tissue","immediate-implantation","prosthetics-on-implants","veneers-crowns","bite-correction","gnathology-vnjc","jaw-defects","braces","aligners","children-ortho","retention"].includes(activeDirection.id) ? (
              <>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a href={activeDirection.cta.primaryHref} variants={vBtn} initial="rest" whileHover="hover" whileTap="tap" className="inline-flex rounded-2xl bg-[#21C7FF] px-6 py-3 font-semibold text-white" rel="noopener">
                    {activeDirection.cta.primaryLabel}
                  </motion.a>
                  <Link href={directionPageBasePath ? `${directionPageBasePath}/${activeDirection.id}` : "#details"} className="text-sm font-medium text-[#21C7FF] hover:underline">
                    Подробнее &rarr;
                  </Link>
                </div>
                <div className="relative w-full min-w-0 min-h-[160px] aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={
                      activeDirection.id === "sinus-lift" ? SINUS_LIFT_IMAGE
                      : activeDirection.id === "soft-tissue" ? SOFT_TISSUE_IMAGE
                      : activeDirection.id === "immediate-implantation" ? IMMEDIATE_IMPLANTATION_IMAGE
                      : activeDirection.id === "prosthetics-on-implants" ? PROSTHETICS_ON_IMPLANTS_IMAGE
                      : activeDirection.id === "veneers-crowns" ? VENEERS_CROWNS_IMAGE
                      : activeDirection.id === "bite-correction" ? BITE_CORRECTION_IMAGE
                      : activeDirection.id === "gnathology-vnjc" ? GNATHOLOGY_VNJC_IMAGE
                      : activeDirection.id === "jaw-defects" ? JAW_DEFECTS_IMAGE
                      : activeDirection.id === "braces" ? BRACES_IMAGE
                      : activeDirection.id === "aligners" ? ALIGNERS_IMAGE
                      : activeDirection.id === "children-ortho" ? CHILDREN_ORTHO_IMAGE
                      : RETENTION_IMAGE
                    }
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </>
            ) : (
              <>
                <div className={`relative h-[160px] min-w-0 overflow-hidden rounded-2xl bg-slate-100 md:h-[200px] ${activeDirection.id === "bone-grafting" ? "-mx-5 w-[calc(100%+2.5rem)] md:mx-0 md:w-full" : "w-full max-w-full"}`}>
                  {activeDirection.id === "implantation" ? (
                    <>
                      <Image src={IMPLANTATION_IMAGE_MOBILE} alt="" fill className="object-contain object-center md:hidden" sizes="100vw" />
                      <Image src={IMPLANTATION_IMAGE} alt="" fill className="object-contain object-center hidden md:block" sizes="400px" />
                    </>
                  ) : activeDirection.id === "bone-grafting" ? (
                    <>
                      <Image src={BONE_GRAFTING_IMAGE_MOBILE} alt="" fill className="object-cover object-center scale-110 md:hidden" sizes="100vw" />
                      <Image src={BONE_GRAFTING_IMAGE} alt="" fill className="object-contain object-center hidden md:block" sizes="400px" />
                    </>
                  ) : (
                    <Image src={MEDIA_IMAGE} alt="" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 400px" />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a href={activeDirection.cta.primaryHref} variants={vBtn} initial="rest" whileHover="hover" whileTap="tap" className="inline-flex rounded-2xl bg-[#21C7FF] px-6 py-3 font-semibold text-white" rel="noopener">
                    {activeDirection.cta.primaryLabel}
                  </motion.a>
                  <Link href={directionPageBasePath ? `${directionPageBasePath}/${activeDirection.id}` : "#details"} className="text-sm font-medium text-[#21C7FF] hover:underline">
                    Подробнее &rarr;
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
```

### 6.5. DirectionDetails.tsx (полный код)

Использует те же константы картинок; для «Пластика мягких тканей» — `SOFT_TISSUE_IMAGE` = `/images/services/plastika.webp`. У направлений из списка `DIRECTIONS_WITHOUT_DETAIL_IMAGE` большая картинка внизу блока не показывается (в том числе у soft-tissue на странице врача картинка показывается только в превью DirectionsNavigator).

```tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const MEDIA_IMAGE = "/images/services/task_01kjc4qc2tf81skh1vp17q188v_1772081647_img_1.webp";
const IMPLANTATION_IMAGE = "/images/services/task_01kjc7717tfbk83k4t6h2wsahz_1772084259_img_0%201.svg";
const BONE_GRAFTING_IMAGE = "/images/services/task_01kjcg6awwf9db6x230qc1yt01_1772093679_img_0.webp";
const SINUS_LIFT_IMAGE = "/images/services/sinus.webp";
const SOFT_TISSUE_IMAGE = "/images/services/plastika.webp";
const IMMEDIATE_IMPLANTATION_IMAGE = "/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp";
const PROSTHETICS_ON_IMPLANTS_IMAGE = "/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp";
const VENEERS_CROWNS_IMAGE = "/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp";

const DIRECTIONS_WITHOUT_DETAIL_IMAGE = [
  "implantation","bone-grafting","sinus-lift","soft-tissue","immediate-implantation",
  "prosthetics-on-implants","veneers-crowns","bite-correction","gnathology-vnjc","jaw-defects",
  "braces","aligners","children-ortho","retention",
];

export function DirectionDetails({ direction, directionPageBasePath }: { direction: DirectionData; directionPageBasePath?: string }) {
  const reduced = useReducedMotion();
  const v = makeMotionPresets(!!reduced).vReveal;
  const showDetailImage = !DIRECTIONS_WITHOUT_DETAIL_IMAGE.includes(direction.id);
  const detailsHref = directionPageBasePath ? `${directionPageBasePath}/${direction.id}` : null;

  return (
    <div className="space-y-8" id="details">
      <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">{direction.title}</h2>
        <p className="leading-relaxed text-[#475569]">{direction.description}</p>
        {detailsHref && (
          <Link href={detailsHref} className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-[#21C7FF]/40 bg-[#21C7FF]/10 px-5 py-2.5 font-semibold text-[#0F172A] transition-colors hover:bg-[#21C7FF]/20">
            Читать подробнее <span aria-hidden>&rarr;</span>
          </Link>
        )}
      </motion.div>
      <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl p-5 bg-[#f0f7ff] border border-slate-200/60">
          <h3 className="mb-3 font-bold text-[#0F172A]">Показания</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            {direction.indications.map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[#21C7FF]">–</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl p-5 bg-[#f0f7ff] border border-slate-200/60">
          <h3 className="mb-3 font-bold text-[#0F172A]">Почему безопасно</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            {direction.safety.map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[#21C7FF]">–</span>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="mb-4 font-bold text-[#0F172A]">Как проходит</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {direction.steps.map((step, i) => (
            <div key={i} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#21C7FF]/20 text-sm font-bold text-[#21C7FF]">{i + 1}</span>
              <p className="font-semibold text-[#0F172A]">{step.title}</p>
              <p className="mt-1 text-sm text-[#64748B]">{step.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
      {showDetailImage && (
        <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true }} className={`relative w-full overflow-hidden rounded-2xl bg-slate-100 ${["sinus-lift","soft-tissue","immediate-implantation","prosthetics-on-implants","veneers-crowns"].includes(direction.id) ? "min-h-[180px] aspect-video" : "min-h-[260px] md:min-h-[340px] md:aspect-video"}`}>
          <Image
            src={direction.id === "bone-grafting" ? BONE_GRAFTING_IMAGE : direction.id === "sinus-lift" ? SINUS_LIFT_IMAGE : direction.id === "soft-tissue" ? SOFT_TISSUE_IMAGE : direction.id === "immediate-implantation" ? IMMEDIATE_IMPLANTATION_IMAGE : direction.id === "prosthetics-on-implants" ? PROSTHETICS_ON_IMPLANTS_IMAGE : direction.id === "veneers-crowns" ? VENEERS_CROWNS_IMAGE : MEDIA_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>
      )}
    </div>
  );
}
```

### 6.6. AdvantagesBlock.tsx, PricingByDirection.tsx, FaqByDirection.tsx, ReviewsStrip.tsx, FinalCtaCard.tsx

Полный код этих компонентов совпадает с тем, что в `src/components/doctor/`: только структура разметки и варианты motion (vReveal, vBtn). Стили — только Tailwind-классы (без отдельных CSS-файлов). См. файлы в проекте или раздел 5 в `doctor-abramov-implantolog-full.md` для DoctorHero/AbramovPageClient.

---

## 7. Итог: что должно быть подключено

- **Страница:** `src/app/doctor/abramov-implantolog/page.tsx` (раздел 3).
- **Данные:** `src/data/abramov/` (index, directions, faq, reviews, cases).
- **Компоненты:** все из раздела 6; для AbramovPageClient и DoctorHero — полный код в `doctor-abramov-implantolog-full.md` или в репозитории.
- **Стили:** раздел 2 (scrollbar-hide, keyframes implantSweep, implantOrbits, orthoParticle, классы .heroBannerBg-*).
- **Картинки:** раздел 1; обязательно наличие `plastika.webp` в `public/images/services/` для направления «Пластика мягких тканей», иначе будет сломанная иконка.

После добавления всех перечисленных стилей и файла `plastika.webp` (или замены пути) интерфейс страницы и блок направлений отображаются полностью, без сломанных изображений.
