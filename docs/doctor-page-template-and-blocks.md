# Шаблон страницы врача: блок «Направления лечения» (полный код и стили) + описание остальных блоков

В этом файле:
- **Разделы 1–5** — полный код и стили блока **«Направления лечения»** (шаблон): обёртка секции, компонент со списком направлений и превью, типы, пресеты анимаций, CSS.
- **Раздел 6** — описание остальных блоков страницы и тексты, которыми они заполняются (без полного кода).

---

# ЧАСТЬ I. ШАБЛОН: БЛОК «НАПРАВЛЕНИЯ ЛЕЧЕНИЯ»

## 1. Обёртка секции (SectionShell)

Блок «Направления лечения» помещается внутрь секции с такой обёрткой:

```tsx
<section id="directions" className="w-full">
  <motion.div
    variants={vSection}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="overflow-x-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8"
  >
    {/* Сюда вставляется DirectionsNavigator */}
  </motion.div>
</section>
```

Классы обёртки: `overflow-x-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8`.

---

## 2. Стили (CSS)

Обязательно подключите в глобальный CSS (например `globals.css`):

```css
/* Скрытие скроллбара у горизонтального списка направлений на мобильном */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

Без этих правил у горизонтального скролла направлений на мобильном будет видна полоса прокрутки.

---

## 3. Тип данных направления (DirectionData)

Для шаблона нужен тип элемента списка направлений:

```ts
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
```

В шаблоне используются: `id`, `shortTitle`, `subtitle`, `title`, `description`, `badges`, `indications`, `whatYouGet`, `cta`, а также `directionPageBasePath` для ссылки «Подробнее».

---

## 4. Пресеты анимаций (MotionPresets)

Полный код функции, используемой блоком «Направления лечения» (vCard, vIcon, vSwap, vBtn; vSection — для обёртки):

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

В блоке направлений: **vSection** — обёртка секции, **vCard** — кнопки направлений, **vIcon** — стрелка → на десктопе, **vSwap** — смена превью при выборе направления, **vBtn** — кнопка «Записаться» и ссылка «Подробнее».

---

## 5. Компонент «Направления лечения» (DirectionsNavigator) — полный код

Константы картинок и полный TSX. Тексты «Направления лечения» и «Выберите направление — блоки ниже обновятся.» зашиты в разметку; список пунктов строится по массиву `directions` (поле `shortTitle` для кнопки, в превью — `title`, `description`, `badges`, `indications`, `whatYouGet`, `cta`).

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

Тексты в шаблоне:
- Заголовок: **Направления лечения**
- Подпись: **Выберите направление — блоки ниже обновятся.**
- Кнопка мобильная: **Показать все** / **Свернуть**
- Иконка в кнопке: символ ◆ (&#9670;), стрелка → (&rarr;)
- В превью: заголовок **Показания**, **Что вы получаете**, кнопка из `activeDirection.cta.primaryLabel`, ссылка **Подробнее →**

Данные для списка кнопок и превью берутся из массива `directions` (для Абрамова — 7 направлений: Имплантация зубов, Костная пластика, Синус-лифтинг, Пластика мягких тканей, Одномоментная имплантация, Протезирование на имплантатах, Виниры, коронки, накладки). Каждый элемент должен содержать поля из типа `DirectionData` (см. раздел 3).

---

# ЧАСТЬ II. ОСТАЛЬНЫЕ БЛОКИ СТРАНИЦЫ (ОПИСАНИЕ И ТЕКСТЫ)

Ниже перечислены блоки, которые идут после «Направления лечения». Для каждого указано: что это за блок, какая у него разметка/логика, и какими текстами он заполняется. Полный код компонентов лежит в репозитории (`src/components/doctor/`).

---

## 6.1. Блок «Детали направления» (DirectionDetails)

**Назначение:** Подробное описание выбранного направления: заголовок, описание, ссылка «Читать подробнее», два блока (Показания, Почему безопасно), шаги «Как проходит», при необходимости — картинка.

**Заполнение:** Берётся из текущего `direction`: `title`, `description`, `indications`, `safety`, `steps` (массив `{ title, text }`). Ссылка ведёт на `directionPageBasePath + "/" + direction.id` (например `/services/dentistry/implantology/implantation`).

**Тексты по направлениям** — см. документ `doctor-page-full-content.md`, раздел 3 (там перечислены все title, description, Показания, Почему безопасно, шаги для каждого из 8 направлений).

---

## 6.2. Блок «Преимущества» (AdvantagesBlock)

**Назначение:** Заголовок «Преимущества: {название направления}», два столбца: универсальные преимущества врача и список «Что вы получаете» по выбранному направлению.

**Заполнение:**
- Заголовок: **Преимущества: {direction.title}**
- Подзаголовок 1: **Преимущества подхода врача**
- Четыре пункта (одни и те же для всех направлений):  
  **Безопасность** — «Проверенные материалы и протоколы, минимальные риски.»  
  **Точность** — «Современная диагностика и планирование лечения.»  
  **Прогнозируемость** — «Понятный план и сроки, контроль на каждом этапе.»  
  **Комфорт** — «Анестезия и бережный подход, без лишнего стресса.»
- Подзаголовок 2: **Что вы получаете в этом направлении**
- Список из `direction.whatYouGet` (разный для каждого направления; см. раздел 2.3 в `doctor-page-full-content.md`).

---

## 6.3. Блок «Часто задаваемые вопросы» (FaqByDirection)

**Назначение:** Заголовок «Часто задаваемые вопросы», аккордеон: сначала общие вопросы, затем вопросы по выбранному направлению. Внизу кнопка «Записаться на консультацию».

**Заполнение:**
- Заголовок: **Часто задаваемые вопросы**
- Общие вопросы (3):  
  «Как записаться на приём?» → «По телефону клиники или через форму записи на сайте.»  
  «Используется ли обезболивание?» → «Да. Все процедуры проводятся с анестезией. При необходимости возможна седация.»  
  «Какие сроки лечения?» → «Зависят от направления: от одного визита до нескольких месяцев. Точный план — после консультации.»
- Вопросы по направлениям — у каждого направления свой массив `faq` (вопрос/ответ); см. `doctor-page-full-content.md`, раздел 5.
- Кнопка: **Записаться на консультацию** (href="/appointments").

---

## 6.4. Блок «Цены» (PricingByDirection)

**Назначение:** Заголовок «Цены: {название направления}», при наличии — вводный текст, таблица позиций (код, название, цена), заключительный текст; при отсутствии прайса — блок «от …» и примечание. Внизу кнопка перехода к полному прайсу.

**Заполнение:** Из `direction`: `priceBlockIntro`, `priceItems` (массив `{ code?, name, price }`), `priceBlockOutro`, `priceBlock` (from, note). Тексты и полные таблицы цен по каждому направлению — в `doctor-page-full-content.md`, раздел 6. Кнопка: **Посмотреть полный прайс** (href из bundle, для Абрамова — `/services/implantation#prices`).

---

## 6.5. Блок «Отзывы пациентов» (ReviewsStrip)

**Назначение:** Заголовок «Отзывы пациентов», ссылка на источник отзывов, карточки отзывов (имя, рейтинг, текст), кнопка «Развернуть отзывы» / «Свернуть».

**Заполнение:**
- Заголовок: **Отзывы пациентов**
- Ссылка: **ПроДокторов** → https://prodoctorov.ru/odincovo/vrach/832944-abramov/#otzivi
- Три отзыва (имя «Пациент», рейтинг 5, полные тексты) — см. `doctor-page-full-content.md`, раздел 7.
- Кнопка: **Развернуть отзывы** / **Свернуть**

---

## 6.6. Блок «Записаться на консультацию» (FinalCtaCard)

**Назначение:** Одна секция-призыв с заголовком, подзаголовком и кнопкой записи.

**Заполнение:**
- Заголовок: **Записаться на консультацию**
- Подзаголовок: **Оставьте заявку — мы подберём удобное время и ответим на вопросы.**
- Кнопка: **Записаться на приём** (href="/appointments")

---

Итог: в **Части I** приведён полный код и стили шаблона блока «Направления лечения» (обёртка секции, компонент DirectionsNavigator, тип DirectionData, пресеты анимаций, CSS). В **Части II** дано описание остальных блоков страницы и указано, какими текстами они заполняются; детальные тексты и прайсы — в `doctor-page-full-content.md`.
