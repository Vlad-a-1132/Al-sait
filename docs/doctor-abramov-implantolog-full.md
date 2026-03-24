# Страница врача Абрамова — полный код, анимации и картинки

Документ содержит всё, что нужно для страницы **http://localhost:3000/doctor/abramov-implantolog**: маршрут, данные, компоненты, все анимации (Framer Motion + CSS) и полный список картинок.

---

## 1. Картинки (пути)

Используются в Hero и в блоках направлений.

| Назначение | Путь |
|------------|------|
| Фото врача (Hero) | `/images/promo/Abramov Yuno Eriilevich 1.webp` |
| Направления — общая | `/images/services/task_01kjc4qc2tf81skh1vp17q188v_1772081647_img_1.webp` |
| Имплантация (десктоп) | `/images/services/Group 83.svg` |
| Имплантация (мобильный) | `/images/services/Group 84.svg` |
| Костная пластика (десктоп) | `/images/services/Group 85.png` |
| Костная пластика (мобильный) | `/images/services/task_01kjcgwmb5errt6v65h9kzs8g0_1772094423_img_1.webp` |
| Синус-лифтинг | `/images/services/sinus.webp` |
| Пластика мягких тканей | `/images/services/plastika.webp` |
| Одномоментная имплантация | `/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp` |
| Протезирование на имплантатах | `/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp` |
| Виниры, коронки | `/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp` |

В **DirectionDetails** для блока «Как проходит» по направлениям используются те же картинки; для имплантации и костной пластики в DirectionDetails указаны альтернативные файлы:
- Имплантация: `/images/services/task_01kjc7717tfbk83k4t6h2wsahz_1772084259_img_0%201.svg`
- Костная пластика: `/images/services/task_01kjcg6awwf9db6x230qc1yt01_1772093679_img_0.webp`

---

## 2. Маршрут страницы

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

## 3. Данные (data/abramov)

### 3.1. Точка входа и доктор — `src/data/abramov/index.ts`

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

### 3.2. Направления — `src/data/abramov/directions.ts`

Полный массив `directions` (8 направлений: имплантация, костная пластика, синус-лифтинг, пластика мягких тканей, одномоментная имплантация, протезирование на имплантатах, виниры и коронки) с полями: id, shortTitle, title, description, badges, indications, whatYouGet, steps, safety, faq, cta, priceBlock, priceItems, priceBlockIntro, priceBlockOutro.

**Файл в проекте:** `src/data/abramov/directions.ts` (≈230 строк). Структура каждого элемента:

```ts
export type DirectionId =
  | "implantation" | "bone-grafting" | "sinus-lift" | "soft-tissue"
  | "immediate-implantation" | "prosthetics-on-implants" | "veneers-crowns";

export interface DirectionData {
  id: DirectionId;
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
```

### 3.3. FAQ — `src/data/abramov/faq.ts`

```ts
import type { DirectionId } from "./directions";

export interface FaqItem {
  id: string;
  directionId?: DirectionId;
  q: string;
  a: string;
}

export const faqGeneral: FaqItem[] = [
  { id: "gen1", q: "Как записаться на приём?", a: "По телефону клиники или через форму записи на сайте." },
  { id: "gen2", q: "Используется ли обезболивание?", a: "Да. Все процедуры проводятся с анестезией. При необходимости возможна седация." },
  { id: "gen3", q: "Какие сроки лечения?", a: "Зависят от направления: от одного визита до нескольких месяцев. Точный план — после консультации." },
];
```

### 3.4. Отзывы — `src/data/abramov/reviews.ts`

```ts
import type { DirectionId } from "./directions";

export interface ReviewItem {
  id: string;
  directionId?: DirectionId;
  name: string;
  rating: number;
  text: string;
}

const PRODOCTOROV_ABRAMOV_OTZIVI = "https://prodoctorov.ru/odincovo/vrach/832944-abramov/#otzivi";

export const reviewsAbramov: ReviewItem[] = [
  {
    id: "pd1",
    name: "Пациент",
    rating: 5,
    text: "Я обратился к врачу с острой болью в верхнем зубе мудрости. Зуб был с частичным прорезыванием, но процедура удаления заняла буквально пару минут. Аналогичные зубы другие врачи удаляли около получаса. Врач объясняет все чётко, коротко и по делу. Не тратит время зря. Приём был в декабре 2025. Медицинский центр «Альтамед-С» на бульваре Крылова.",
  },
  {
    id: "pd2",
    name: "Пациент",
    rating: 5,
    text: "Обратилась в стоматологию с острой болью. Оперативно подобрали удобное для меня время. Попала к Юно Эриильевичу. Врач провёл мне полную консультацию, объяснил причину острой боли, и приступили к лечению! Пришлось удалять зуб, но удаление прошло безболезненно, что было очень важно для меня. Спасибо большое доктору за его подход! Встретить хорошего стоматолога в наше время тяжело. Но мне повезло! Атмосфера в клинике очень приятная. Врачи — профи своего дела. Виден высокий уровень! Приём был в мае 2025.",
  },
  {
    id: "pd3",
    directionId: "implantation",
    name: "Пациент",
    rating: 5,
    text: "Я обращалась к доктору по процедуре имплантации. Благодаря Юно Эриильевичу операция прошла очень быстро, легко и безболезненно! Доктор очень внимателен ко всем деталям, помог мне успокоиться, не волноваться и сделал свою работу, как настоящий профессионал. Послеоперационный период тоже прошел легко благодаря правильным рекомендациям и наставлениям Юно Эриильевича. Уже порекомендовала его своим знакомым и точно ещё буду обращаться сама по мере необходимости. Приём был в ноябре 2024. Медицинский центр «Альтамед-Голицыно».",
  },
];

export const reviewsAbramovSourceUrl = PRODOCTOROV_ABRAMOV_OTZIVI;
```

### 3.5. Кейсы (портфолио) — `src/data/abramov/cases.ts`

```ts
import type { DirectionId } from "./directions";

export interface CaseItem {
  id: string;
  directionId: DirectionId;
  title: string;
  tag?: string;
}

export const casesAbramov: CaseItem[] = [
  { id: "1", directionId: "implantation", title: "Имплантация All-on-4", tag: "All-on-4" },
  { id: "2", directionId: "implantation", title: "Имплантация All-on-6", tag: "All-on-6" },
  { id: "3", directionId: "implantation", title: "Одиночный имплант", tag: "1 зуб" },
  { id: "4", directionId: "immediate-implantation", title: "Одномоментная имплантация", tag: "В один визит" },
  { id: "5", directionId: "prosthetics-on-implants", title: "Коронки на имплантах", tag: "Протез" },
  { id: "6", directionId: "veneers-crowns", title: "Виниры и коронки", tag: "Эстетика" },
  { id: "7", directionId: "bone-grafting", title: "Костная пластика", tag: "Кость" },
  { id: "8", directionId: "sinus-lift", title: "Синус-лифтинг", tag: "Верхняя челюсть" },
];
```

---

## 4. CSS — анимации Hero и баннер-фона

Эти стили должны быть в глобальном CSS (например `src/app/globals.css`). Ключевые кадры `implantSweep` и `implantOrbits` используются и баннером имплантации, и Hero; `orthoParticle` — только Hero (частицы).

```css
/* Ключевые кадры (если ещё не подключены из баннера имплантации) */
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

/* Hero: карточка и фоновая анимация в стиле баннера */
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

## 5. Компоненты — полный код

### 5.1. AbramovPageClient — `src/components/doctor/AbramovPageClient.tsx`

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

### 5.2. DoctorHero — `src/components/doctor/DoctorHero.tsx` (Hero с фоном и всеми анимациями)

```tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DoctorCore, DirectionData } from "./types";

export function DoctorHero({
  doctor,
  directions,
  onPickDirection,
  bannerStyleBackground,
}: {
  doctor: DoctorCore;
  directions: DirectionData[];
  onPickDirection: (id: string) => void;
  bannerStyleBackground?: boolean;
}) {
  const reduced = useReducedMotion();
  const { vStagger, vCard } = makeMotionPresets(!!reduced);
  const directionsLine = directions.map((d) => d.shortTitle).join(" • ");
  const bgStyle = bannerStyleBackground
    ? { background: "radial-gradient(ellipse 92% 80% at 18% 52%, #0E2730 0%, #0A1620 55%, #060C12 100%)" }
    : { background: "radial-gradient(ellipse 92% 80% at 18% 52%, #0F2B34 0%, #081821 52%, #050B10 100%)" };
  return (
    <div className="relative overflow-hidden text-white" style={bgStyle}>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {bannerStyleBackground && (
        <>
          <div className="heroBannerBg-sweep absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div
              className="heroBannerBg-sweep-inner absolute left-0 top-0 w-[240px] h-full"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.14) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
          <svg
            className="heroBannerBg-orbits absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 160"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <g className="heroBannerBg-orbits-g" opacity={0.9}>
              <path d="M300 38 C520 10, 760 10, 980 38" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={2} />
              <path d="M280 54 C520 20, 780 20, 1000 54" fill="none" stroke="rgba(33,199,255,.10)" strokeWidth={2} />
              <path d="M320 26 C560 2, 760 8, 980 30" fill="none" stroke="rgba(94,243,196,.08)" strokeWidth={2} />
            </g>
          </svg>
          <svg
            className="heroBannerBg-particles absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 160"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <radialGradient id="heroParticleGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#FFFFFF" stopOpacity={1} />
                <stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
              </radialGradient>
            </defs>
            <g className="heroBannerBg-particles-g" opacity={0.85}>
              <circle className="heroBannerBg-p heroBannerBg-p1" cx={280} cy={50} r={10} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p2" cx={520} cy={120} r={12} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p3" cx={720} cy={45} r={11} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p4" cx={950} cy={130} r={14} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p5" cx={180} cy={100} r={9} fill="url(#heroParticleGrad)" />
            </g>
          </svg>
        </>
      )}
      <div className="relative mx-auto w-full max-w-[1240px] px-4 py-12 md:px-6 md:py-16">
        <div className={bannerStyleBackground ? "heroBannerBg-card rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-8 lg:p-10" : ""}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
            <div className="order-1 lg:col-start-1 lg:row-start-1">
              <motion.p className="mb-2 font-semibold tracking-wide text-[#5EF3C4]" variants={vStagger} initial="hidden" animate="show" custom={0}>
                Врач клиники «{doctor.clinicName}»
              </motion.p>
              <motion.h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl" variants={vStagger} initial="hidden" animate="show" custom={1}>
                {doctor.fullName}
              </motion.h1>
              <motion.p className="mb-2 text-xl text-white/90" variants={vStagger} initial="hidden" animate="show" custom={2}>
                {doctor.tagline}
              </motion.p>
              <motion.p className="mb-6 text-sm text-white/75 md:text-base" variants={vStagger} initial="hidden" animate="show" custom={3}>
                {directionsLine}
              </motion.p>
            </div>
            <div className="order-2 flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:items-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-[#5EF3C4]/20 blur-xl" />
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#21C7FF]/50 shadow-2xl md:h-80 md:w-80">
                  <Image src={doctor.photoSrc} alt={doctor.fullName} fill className="object-cover" sizes="(max-width: 768px) 256px, 320px" priority />
                </div>
              </div>
            </div>
            <div className="order-3 lg:col-start-1 lg:row-start-2">
              <div className="mb-6 flex flex-wrap gap-3">
                {doctor.chips.map((c) => (
                  <motion.span
                    key={c.label}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      "inline-flex rounded-full border px-4 py-2 text-sm font-medium " +
                      (c.color === "cyan"
                        ? "border-[rgba(33,199,255,.3)] bg-[rgba(33,199,255,.12)]"
                        : c.color === "mint"
                          ? "border-[rgba(94,243,196,.3)] bg-[rgba(94,243,196,.12)]"
                          : "border-white/20 bg-white/10")
                    }
                  >
                    {c.label}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                {doctor.trustBadges.slice(0, 2).map((b) => (
                  <span key={b.label} className="flex items-center gap-2">
                    {b.short === "7 лет" && <span className="h-2 w-2 rounded-full bg-[#5EF3C4]" />}
                    {b.short === "4.9" && <span className="text-amber-400">&#9733;</span>}
                    {b.label}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={doctor.ctas.primary.href} className="inline-flex items-center justify-center rounded-xl bg-[#5EF3C4] px-6 py-3 font-semibold text-[#050B10] transition-colors hover:bg-[#21C7FF]">
                  {doctor.ctas.primary.label}
                </Link>
                <a href={doctor.ctas.secondary.href} className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                  {doctor.ctas.secondary.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Остальные компоненты (SectionShell, DirectionsNavigator, DirectionDetails, AdvantagesBlock, PricingByDirection, FaqByDirection, ReviewsStrip, FinalCtaCard) — см. пути в разделе 8. Анимации: Framer Motion (vStagger, vCard из MotionPresets) + CSS (heroBannerBg-sweep-inner → implantSweep, heroBannerBg-orbits-g → implantOrbits, heroBannerBg-p → orthoParticle).

---

## 6. Типы — `src/components/doctor/types.ts`

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

---

## 7. Пресеты анимаций — `src/components/doctor/MotionPresets.ts`

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

## 8. Где что лежит в проекте

| Что | Файл |
|-----|------|
| Страница | `src/app/doctor/abramov-implantolog/page.tsx` |
| Данные | `src/data/abramov/index.ts`, `directions.ts`, `faq.ts`, `reviews.ts`, `cases.ts` |
| Клиент страницы | `src/components/doctor/AbramovPageClient.tsx` |
| Hero | `src/components/doctor/DoctorHero.tsx` |
| Секция | `src/components/doctor/SectionShell.tsx` |
| Направления | `src/components/doctor/DirectionsNavigator.tsx` |
| Детали направления | `src/components/doctor/DirectionDetails.tsx` |
| Преимущества | `src/components/doctor/AdvantagesBlock.tsx` |
| Цены | `src/components/doctor/PricingByDirection.tsx` |
| FAQ | `src/components/doctor/FaqByDirection.tsx` |
| Отзывы | `src/components/doctor/ReviewsStrip.tsx` |
| Финальный CTA | `src/components/doctor/FinalCtaCard.tsx` |
| Типы | `src/components/doctor/types.ts` |
| Motion | `src/components/doctor/MotionPresets.ts` |
| CSS Hero/баннер | `src/app/globals.css` (блок heroBannerBg + keyframes implantSweep, implantOrbits, orthoParticle) |

Картинки класть в `public/images/promo/` (фото врача) и `public/images/services/` (иллюстрации направлений) по путям из раздела 1.
