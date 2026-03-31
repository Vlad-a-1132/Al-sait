# SEO / TECH AUDIT: Gynecology Cluster

Дата извлечения фактов: 2026-03-30  
Источник: кодовая база `altamed-sait` (Next.js App Router, `src/app/**`)

## 1. Summary

- **Где лежат основные страницы**:
  - `/ginekolog-v-odintsovo` → `src/app/ginekolog-v-odintsovo/page.tsx` (+ metadata в `src/app/ginekolog-v-odintsovo/layout.tsx`)
  - `/services/priem-ginekologa-odintsovo` → `src/app/services/priem-ginekologa-odintsovo/page.tsx` (+ metadata в `src/app/services/priem-ginekologa-odintsovo/layout.tsx`)
  - `/services/akusher-ginekolog-odintsovo` → `src/app/services/akusher-ginekolog-odintsovo/page.tsx` (+ metadata в `src/app/services/akusher-ginekolog-odintsovo/layout.tsx`)
  - `/services/vedenie-beremennosti-odintsovo` → `src/app/services/vedenie-beremennosti-odintsovo/page.tsx` (+ metadata в `src/app/services/vedenie-beremennosti-odintsovo/layout.tsx`)
  - `/services/profilakticheskiy-osmotr-ginekologa-odintsovo` → `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/page.tsx` (+ metadata в `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/layout.tsx`)

- **Как устроен рендеринг**:
  - Все перечисленные страницы — **статические route-сегменты** (нет `[slug]` в этих маршрутах).
  - В проекте используется Next.js **App Router** (`src/app/**`).

- **Где задаются метаданные**:
  - Глобальные defaults: `src/app/layout.tsx` (title/description/keywords/openGraph/twitter/canonical + yandex verification).
  - Для `/ginekolog-v-odintsovo`: `src/app/ginekolog-v-odintsovo/layout.tsx` (static `metadata`).
  - Для service-страниц:
    - `/services/priem-ginekologa-odintsovo`, `/services/vedenie-beremennosti-odintsovo`, `/services/profilakticheskiy-osmotr-ginekologa-odintsovo` — `metadata` берётся из `src/data/gynec-seo-pages.ts` через соответствующие `layout.tsx`.
    - `/services/akusher-ginekolog-odintsovo` — `metadata` задано напрямую в `src/app/services/akusher-ginekolog-odintsovo/layout.tsx` (не через `gynec-seo-pages.ts`).
  - Для blog-страниц:
    - индекс `/blog`: `src/app/blog/page.tsx` (static `metadata`).
    - статьи: `src/app/articles/<slug>/page.tsx` (static `metadata` в каждом файле).

- **Где хранятся данные контента**:
  - SEO-конфиг 3 service-страниц (canonical/title/description/h1/lead/faq/prices/relatedLinks и др.): `src/data/gynec-seo-pages.ts`.
  - Список статей и URL `/blog/<slug>`: `src/data/gynec-articles-images.ts` (`GYNEC_ARTICLES_LIST`).
  - Врачи: `src/data/static-data.ts` (`doctors`), используются на страницах кластера (фильтр по `specialization`).

## 2. Main pages

### 2.1 `/ginekolog-v-odintsovo`

- **URL**: `/ginekolog-v-odintsovo`
- **Файл страницы**: `src/app/ginekolog-v-odintsovo/page.tsx`
- **Файл метаданных (route-level)**: `src/app/ginekolog-v-odintsovo/layout.tsx`
- **Источник данных**:
  - Врачи: `src/data/static-data.ts` (`doctors`, фильтр по `specialization` “гинеколог/акушер” внутри `page.tsx`)
  - Список статей: `src/data/gynec-articles-images.ts` (`GYNEC_ARTICLES_LIST`)
  - Цены: локально в `src/app/ginekolog-v-odintsovo/page.tsx` (`GYNECOLOGY_SERVICES_FLAT`)
  - Адреса/карта: локально в `src/app/ginekolog-v-odintsovo/page.tsx` (`ADDRESSES`)
- **title/description/robots** (из `layout.tsx`):

```3:10:D:/work projects/altamed sait/altamed-sait/src/app/ginekolog-v-odintsovo/layout.tsx
export const metadata: Metadata = {
  title: 'Гинеколог в Одинцово — приём врача, цены, запись | Альтамед-С',
  description: 'Приём гинеколога в Одинцово в клинике Альтамед-С. Опытные врачи, диагностика и лечение, акушер-гинеколог, гинеколог-эндокринолог, цены на услуги, удобная запись на приём.',
  robots: { index: true, follow: true },
};
```

- **H1 (hero)**:
  - `Гинеколог в Одинцово — приём, диагностика и лечение в Альтамед-С` (в `src/app/ginekolog-v-odintsovo/page.tsx`)
- **Первый экран (CTA)** (в `src/app/ginekolog-v-odintsovo/page.tsx`):
  - CTA: `https://online.altamed-c.ru/` (кнопка «Записаться на приём» / «Записаться онлайн») + `tel:+74952554450` («Позвонить…»)
- **Блоки страницы (сверху вниз, по секциям в файле)**: hero → «Почему обращаются…» → «С какими вопросами…» → «Цены…» → «Врачи…» → «Направления…» (карточки с URL в `DIRECTIONS`) → «Диагностика и процедуры…» → «Филиалы в Одинцово…» → «Видео по гинекологии…» → «Почему обращаются…» (повторная секция) → «Как проходит приём…» → FAQ → «Статьи» → финальный CTA.
- **Коммерческие блоки**:
  - Цены: таблица (`GYNECOLOGY_SERVICES_FLAT`).
  - Врачи: карточки из `doctors` (`/doctors/<slug>` + запись).
  - Адреса: 2 филиала в Одинцово (локальный массив `ADDRESSES`).
  - Запись: внешняя ссылка `https://online.altamed-c.ru/` и телефон.
- **Ссылки на страницы кластера (явные)**:
  - В `DIRECTIONS` есть ссылки на 4 service-страницы кластера: `/services/priem-ginekologa-odintsovo`, `/services/akusher-ginekolog-odintsovo`, `/services/vedenie-beremennosti-odintsovo`, `/services/profilakticheskiy-osmotr-ginekologa-odintsovo` (см. `src/app/ginekolog-v-odintsovo/page.tsx`).
- **Schema.org / JSON-LD / breadcrumbs schema**: на этой странице **не найдено** (по поиску `application/ld+json`, `schema.org`, `BreadcrumbList` в `src/app/ginekolog-v-odintsovo/**`).

### 2.2 `/services/priem-ginekologa-odintsovo`

- **URL**: `/services/priem-ginekologa-odintsovo`
- **Файл страницы**: `src/app/services/priem-ginekologa-odintsovo/page.tsx`
- **Файл метаданных**: `src/app/services/priem-ginekologa-odintsovo/layout.tsx`
- **Источник данных метаданных и части контента**:
  - `src/data/gynec-seo-pages.ts` → `GYNEC_SEO_PAGES['priem-ginekologa-odintsovo']` (title/description/canonical/h1/lead/prices/faq/relatedLinks…)
  - `src/app/services/priem-ginekologa-odintsovo/layout.tsx` подставляет `title/description/canonical`.
- **title/description/canonical/robots (динамика через конфиг)**:

```1:15:D:/work projects/altamed sait/altamed-sait/src/app/services/priem-ginekologa-odintsovo/layout.tsx
const c = GYNEC_SEO_PAGES['priem-ginekologa-odintsovo'];

export const metadata: Metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: c.canonical },
  robots: { index: true, follow: true },
};
```

Фактические значения из `src/data/gynec-seo-pages.ts`:
- title: `Приём гинеколога в Одинцово — консультация, осмотр, диагностика | Альтамед-С`
- description: `Приём гинеколога в Одинцово в клинике Альтамед-С...`
- canonical: `https://altamed-c.ru/services/priem-ginekologa-odintsovo`
- h1 (в конфиге): `Приём гинеколога в Одинцово — консультация, осмотр и диагностика`

- **Шаблон/компонент**:
  - Страница `page.tsx` — самостоятельная (не `GynecSEOTemplate`).
  - Отдельно существует универсальный шаблон `src/components/gynec-seo/GynecSEOTemplate.tsx`, но эта страница его не использует.
- **Ссылки на кластер** (явные): есть ссылки на `/ginekolog-v-odintsovo`, `/services/akusher-ginekolog-odintsovo`, `/services/vedenie-beremennosti-odintsovo`, `/services/profilakticheskiy-osmotr-ginekologa-odintsovo` (см. `src/app/services/priem-ginekologa-odintsovo/page.tsx`).
- **Schema.org / JSON-LD / breadcrumbs schema**: **не найдено** в `src/app/services/priem-ginekologa-odintsovo/**`.

### 2.3 `/services/akusher-ginekolog-odintsovo`

- **URL**: `/services/akusher-ginekolog-odintsovo`
- **Файл страницы**: `src/app/services/akusher-ginekolog-odintsovo/page.tsx`
- **Файл метаданных**: `src/app/services/akusher-ginekolog-odintsovo/layout.tsx`
- **Источник данных**:
  - Врачи: `src/data/static-data.ts` (`doctors`, фильтр по `specialization` “гинеколог/акушер”).
  - Остальной контент — строки в `page.tsx`.
- **title/description/canonical/robots**:

```1:12:D:/work projects/altamed sait/altamed-sait/src/app/services/akusher-ginekolog-odintsovo/layout.tsx
export const metadata: Metadata = {
  title: 'Акушер-гинеколог в Одинцово — планирование, беременность, наблюдение | Альтамед-С',
  description: 'Приём акушера-гинеколога в Одинцово в Альтамед-С. Планирование беременности, подготовка к зачатию, ведение беременности, УЗИ, анализы, наблюдение после родов и консультации по репродуктивному здоровью.',
  alternates: { canonical: 'https://altamed-c.ru/services/akusher-ginekolog-odintsovo' },
  robots: { index: true, follow: true },
};
```

- **H1 (hero)**: `Акушер-гинеколог в Одинцово — планирование беременности, наблюдение и ведение` (в `page.tsx`).
- **CTA**: `https://online.altamed-c.ru/` + `tel:+74952554450`.
- **Ссылки на кластер**: в блоке «Связанные направления» есть ссылки на `/ginekolog-v-odintsovo`, `/services/priem-ginekologa-odintsovo`, `/services/vedenie-beremennosti-odintsovo`, `/services/profilakticheskiy-osmotr-ginekologa-odintsovo` (в `page.tsx`).
- **Schema.org / JSON-LD / breadcrumbs schema**: **не найдено** в `src/app/services/akusher-ginekolog-odintsovo/**`.

### 2.4 `/services/vedenie-beremennosti-odintsovo`

- **URL**: `/services/vedenie-beremennosti-odintsovo`
- **Файл страницы**: `src/app/services/vedenie-beremennosti-odintsovo/page.tsx`
- **Файл метаданных**: `src/app/services/vedenie-beremennosti-odintsovo/layout.tsx`
- **Источник данных метаданных**: `src/data/gynec-seo-pages.ts` → `GYNEC_SEO_PAGES['vedenie-beremennosti-odintsovo']`
- **title/description/canonical/robots (через конфиг)**:
  - layout: `src/app/services/vedenie-beremennosti-odintsovo/layout.tsx` (подставляет `c.title/c.description/c.canonical`)
  - значения в конфиге: `src/data/gynec-seo-pages.ts` (ключ `vedenie-beremennosti-odintsovo`)
- **H1 (hero)**: `Планирование и ведение беременности в Одинцово` (в `page.tsx`).
- **CTA**: `https://online.altamed-c.ru/` + `tel:+74952554450`.
- **Schema.org / JSON-LD / breadcrumbs schema**: **не найдено** в `src/app/services/vedenie-beremennosti-odintsovo/**`.

### 2.5 `/services/profilakticheskiy-osmotr-ginekologa-odintsovo`

- **URL**: `/services/profilakticheskiy-osmotr-ginekologa-odintsovo`
- **Файл страницы**: `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/page.tsx`
- **Файл метаданных**: `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/layout.tsx`
- **Источник данных метаданных**: `src/data/gynec-seo-pages.ts` → `GYNEC_SEO_PAGES['profilakticheskiy-osmotr-ginekologa-odintsovo']`
- **title/description/canonical/robots (через конфиг)**:
  - layout: `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/layout.tsx` (подставляет `c.title/c.description/c.canonical`)
  - значения в конфиге: `src/data/gynec-seo-pages.ts` (ключ `profilakticheskiy-osmotr-ginekologa-odintsovo`)
- **H1 (hero)**: `Профилактический осмотр гинеколога в Одинцово` (в `page.tsx`).
- **CTA**: `https://online.altamed-c.ru/` + `tel:+74952554450`.
- **Schema.org / JSON-LD / breadcrumbs schema**: **не найдено** в `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/**`.

## 3. Blog pages

### 3.1 Архитектура URL `/blog/<slug>` (факт из кода)

- Публичные URL `/blog/<slug>` обслуживаются через **rewrite**:

```39:46:D:/work projects/altamed sait/altamed-sait/next.config.js
  async rewrites() {
    return [
      // Статьи остаются физически в /articles/*, но доступны пользователю как /blog/*
      {
        source: '/blog/:slug*',
        destination: '/articles/:slug*',
      },
    ];
  },
```

- Прямой доступ к `/articles/<slug>` делает **redirect** на `/blog/<slug>`:

```49:57:D:/work projects/altamed sait/altamed-sait/next.config.js
  async redirects() {
    return [
      // Не даем индексировать и показывать /articles/* пользователю — используем /blog/*
      {
        source: '/articles/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },
```

### 3.2 Где лежат данные и slugs

- Список статей и их публичные URL `/blog/<slug>`: `src/data/gynec-articles-images.ts` (`GYNEC_ARTICLES_LIST`).
- Физические страницы статей: `src/app/articles/<slug>/page.tsx` (27 файлов — под каждый slug отдельная папка/route).
- Динамическая генерация slug (`[slug]`, `generateStaticParams`) для этих статей: **не используется** (маршрут не динамический; каждый slug — отдельная директория).

### 3.3 Факты о метаданных статей (из `src/app/articles/**/page.tsx`)

Для каждой статьи задано `export const metadata: Metadata = { ... }` с `title`, `description`, `openGraph` (включая `url`), `alternates.canonical` (каноникал указывает на `https://altamed-c.ru/articles/<slug>`).

См. строки `title`, `description`, `alternates.canonical` (все 27 файлов) в `src/app/articles/**/page.tsx` (вывод искался по `title: '`, `description: '`, `alternates: { canonical:`).

## 4. Internal linking map

Схема перелинковки кластера строится через:
- явные ссылки в JSX (`<Link href=\"/…\">` и `<a href=\"/…\">`) внутри `src/app/ginekolog-v-odintsovo/page.tsx` и `src/app/services/*-odintsovo/page.tsx`
- в статьях: ссылки на `GYNEC_HUB_URL` и `GYNEC_SERVICES.*` из `src/data/gynec-articles-images.ts`, а также прямые `Link href=\"/articles/...\"` и `Link href=\"/services/...\"`.

Таблица (факты): **полная матрица входящих/исходящих ссылок между всеми страницами кластера** — см. раздел **9. Raw extraction → Internal links found** (перечень строк с `href=` из файлов статей).

## 5. Reused components / duplicate content risk

Повторяемые компоненты/шаблоны (факт):
- `src/components/gynec-seo/GynecSEOTemplate.tsx` — единый шаблон секций для gynec SEO pages (hero, вопросы, что входит, когда, как проходит, диагностика, почему мы, врачи, цены, FAQ, CTA, связанные страницы). Данные приходят из `config: GynecSEOPageConfig` (`src/data/gynec-seo-pages.ts`).
- `src/app/ginekolog-v-odintsovo/_direction-page.tsx` — общий shell для подстраниц `/ginekolog-v-odintsovo/*` (breadcrumbs, hero, CTA, связанные направления, CTA).

Какие страницы используют конфиг `GYNEC_SEO_PAGES` (факт по коду):
- `src/app/services/priem-ginekologa-odintsovo/layout.tsx` → `GYNEC_SEO_PAGES['priem-ginekologa-odintsovo']`
- `src/app/services/vedenie-beremennosti-odintsovo/layout.tsx` → `GYNEC_SEO_PAGES['vedenie-beremennosti-odintsovo']`
- `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/layout.tsx` → `GYNEC_SEO_PAGES['profilakticheskiy-osmotr-ginekologa-odintsovo']`

## 6. Technical SEO

### 6.1 robots.txt

Реализация: `src/app/robots.ts` (MetadataRoute).
- disallow включает `/articles` (важно при наличии физического маршрута `/articles/*`).

### 6.2 sitemap.xml

Реализация: `src/app/sitemap.ts` (MetadataRoute).
- Статические URL перечислены явным массивом `staticUserPaths`, включая:
  - `/ginekolog-v-odintsovo` и подстраницы `/ginekolog-v-odintsovo/*`
  - `/services/*-odintsovo` страницы кластера
  - публичные статьи как `/blog/<slug>` (комментарий в файле)

### 6.3 canonical

- Глобальный canonical: `src/app/layout.tsx` → `alternates.canonical: 'https://altamed-c.ru'`.
- Для service‑страниц кластера canonical задаётся либо строкой (akusher), либо через конфиг `GYNEC_SEO_PAGES.*.canonical`.
- Для статей canonical задан как `https://altamed-c.ru/articles/<slug>` в каждом `src/app/articles/<slug>/page.tsx` (см. строки `alternates: { canonical: ... }`).

### 6.4 redirects / rewrites

Файл: `next.config.js`:
- rewrite `/blog/:slug*` → `/articles/:slug*`
- redirect `/articles/:slug*` → `/blog/:slug*` (permanent)

### 6.5 hreflang

В `src/app/**` **не найдено** использование `alternates.languages` или иных явных `hreflang`.

### 6.6 search pages

По коду есть `/search` и у него `robots: { index: false, follow: false }` в `src/app/search/layout.tsx`, плюс `/search` в disallow robots (`src/app/robots.ts`).

## 7. Potential cannibalization facts from code

Только факты из кода:
- В проекте существует одновременно:
  - service‑страница `/services/vedenie-beremennosti-odintsovo` (`src/app/services/vedenie-beremennosti-odintsovo/page.tsx`)
  - статья (публично как `/blog/vedenie-beremennosti-v-odintsovo`, физически `src/app/articles/vedenie-beremennosti-v-odintsovo/page.tsx`)
- В нескольких местах присутствуют повторяющиеся CTA-ссылки на `https://online.altamed-c.ru/` и телефон `tel:+74952554450` (главная страница кластера, service‑страницы, статьи).
- В статьях повторяются секции «Полезные материалы» со списками «Направления» и «Статьи» (см. `src/app/articles/**/page.tsx`, блок в конце каждого файла).

## 8. File list

### 8.1 Routes / pages / layouts

- `src/app/ginekolog-v-odintsovo/layout.tsx`
- `src/app/ginekolog-v-odintsovo/page.tsx`
- `src/app/services/priem-ginekologa-odintsovo/layout.tsx`
- `src/app/services/priem-ginekologa-odintsovo/page.tsx`
- `src/app/services/akusher-ginekolog-odintsovo/layout.tsx`
- `src/app/services/akusher-ginekolog-odintsovo/page.tsx`
- `src/app/services/vedenie-beremennosti-odintsovo/layout.tsx`
- `src/app/services/vedenie-beremennosti-odintsovo/page.tsx`
- `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/layout.tsx`
- `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/articles/**/page.tsx` (27 файлов — под перечисленные slugs)

### 8.2 Data / templates / shared components

- `src/data/gynec-seo-pages.ts`
- `src/components/gynec-seo/GynecSEOTemplate.tsx`
- `src/data/gynec-articles-images.ts`
- `src/data/static-data.ts`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/ClientLayout.tsx`

### 8.3 Technical SEO

- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `next.config.js`

## 9. Raw extraction

### 9.1 Route files (URL → file)

- `/ginekolog-v-odintsovo` → `src/app/ginekolog-v-odintsovo/page.tsx` (+ `layout.tsx`)
- `/services/priem-ginekologa-odintsovo` → `src/app/services/priem-ginekologa-odintsovo/page.tsx` (+ `layout.tsx`)
- `/services/akusher-ginekolog-odintsovo` → `src/app/services/akusher-ginekolog-odintsovo/page.tsx` (+ `layout.tsx`)
- `/services/vedenie-beremennosti-odintsovo` → `src/app/services/vedenie-beremennosti-odintsovo/page.tsx` (+ `layout.tsx`)
- `/services/profilakticheskiy-osmotr-ginekologa-odintsovo` → `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/page.tsx` (+ `layout.tsx`)
- `/blog/<slug>` → rewrite на `/articles/<slug>` (физически `src/app/articles/<slug>/page.tsx`)

### 9.2 Metadata files/functions

- `src/app/layout.tsx` (global metadata defaults)
- `src/app/ginekolog-v-odintsovo/layout.tsx` (metadata для `/ginekolog-v-odintsovo`)
- `src/app/services/*-odintsovo/layout.tsx` (metadata для service страниц)
- `src/data/gynec-seo-pages.ts` (title/description/canonical/h1/lead/faq/prices/relatedLinks для 3 service страниц)
- `src/app/articles/<slug>/page.tsx` (metadata каждой статьи)

### 9.3 Content files

- `src/data/gynec-seo-pages.ts` (структурированный контент для service страниц, включая `lead`, `faq`, `prices`, `relatedLinks`)
- `src/app/ginekolog-v-odintsovo/page.tsx` (локальные константы `GYNECOLOGY_SERVICES_FLAT`, `ADDRESSES`, `VIDEO_ITEMS`, `FAQ_ITEMS`, `WHY_CHOOSE` и др.)
- `src/app/articles/<slug>/page.tsx` (контент статей в JSX)

### 9.4 Components used by cluster

- `src/components/gynec-seo/GynecSEOTemplate.tsx`
- `src/app/ginekolog-v-odintsovo/_direction-page.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

### 9.5 Schemas used by cluster

В пределах файлов кластера (`src/app/ginekolog-v-odintsovo/**`, `src/app/services/*-odintsovo/**`, `src/app/blog/**`, `src/app/articles/**`): `schema.org` / `application/ld+json` / `BreadcrumbList` / `FAQPage` **не найдено**.

### 9.6 Internal links found (статьи)

В статьях часто используются ссылки на:\n- `GYNEC_HUB_URL` (из `src/data/gynec-articles-images.ts`: `/ginekolog-v-odintsovo`)\n- `GYNEC_SERVICES.*` (из `src/data/gynec-articles-images.ts`: service URL кластера)\n- прямые ссылки на другие статьи `Link href=\"/articles/...\"`\n- прямые ссылки на service pages `Link href=\"/services/...\"`\n\nПримеры строк (см. результаты поиска по `href=\"/` и `href={GYNEC_*}` в `src/app/articles/**/page.tsx`).\n+
