## Отчёт по выполненным изменениям SEO‑кластера “гинеколог Одинцово”

Дата: 2026-03-30  
Проект: `altamed-sait` (Next.js App Router, `src/app/**`)

### 1) Цель работ (что исправлялось)
- **Устранение каннибализации** между `/ginekolog-v-odintsovo`, `/services/*`, `/blog/*`.
- **Разведение интентов**:
  - `/ginekolog-v-odintsovo` — главный коммерческий хаб.
  - `/services/*` — узкие коммерческие service‑page.
  - `/blog/*` — информационные статьи.
- **SEO‑технические исправления**:
  - устранение конфликтов URL;
  - корректные `canonical` и `openGraph.url` для статей;
  - очистка внутренних SEO‑ссылок от `/articles/...` в пользу `/blog/...`;
  - обновление `sitemap`;
  - настройка редиректов и проверка цепочек.

---

### 2) Критическая конфликтная статья про ведение беременности

#### 2.1 Переименование физического route (без дублей)
- **Было (физически)**:  
  `src/app/articles/vedenie-beremennosti-v-odintsovo/page.tsx`
- **Стало (физически)**:  
  `src/app/articles/kak-prohodit-vedenie-beremennosti/page.tsx`
- **Факт**: старый путь **удалён из кода** (папка/route не сохранены).

#### 2.2 Новый публичный URL статьи
- **Было (публично)**: `/blog/vedenie-beremennosti-v-odintsovo`
- **Стало (публично)**: `/blog/kak-prohodit-vedenie-beremennosti`

#### 2.3 Обязательный 301 redirect
- **Файл**: `next.config.js`
- **Редирект**:  
  `/blog/vedenie-beremennosti-v-odintsovo` → `/blog/kak-prohodit-vedenie-beremennosti` (301)
- **Порядок**: точечный редирект стоит **выше** общего правила `/articles/:slug* → /blog/:slug*`.

#### 2.4 Обязательная цепочка `/articles/...` → `/blog/...`
- Обеспечена цепочка:
  - `/articles/vedenie-beremennosti-v-odintsovo`
    → `/blog/vedenie-beremennosti-v-odintsovo`
    → `/blog/kak-prohodit-vedenie-beremennosti`

---

### 3) Sitemap (обязательное обновление)
- **Файл**: `src/app/sitemap.ts`
- **Сделано**:
  - удалён URL: `/blog/vedenie-beremennosti-v-odintsovo`
  - добавлен URL: `/blog/kak-prohodit-vedenie-beremennosti`

---

### 4) Глобальная правка canonical + openGraph.url во всех 27 статьях
- **Область**: все файлы `src/app/articles/**/page.tsx` (27 статей)
- **Сделано (без исключений)**:
  - `alternates.canonical`:  
    `https://altamed-c.ru/articles/<slug>` → `https://altamed-c.ru/blog/<slug>`
  - `openGraph.url`:  
    `https://altamed-c.ru/articles/<slug>` → `https://altamed-c.ru/blog/<slug>`

---

### 5) Глобальная SEO‑очистка ссылок `/articles/...` → `/blog/...`

#### 5.1 В статьях (SEO‑слой)
- **Область**: `src/app/articles/**/page.tsx`
- **Сделано**: `href="/articles/..."` заменены на `href="/blog/..."` в SEO‑блоках (полезные материалы/статьи/related‑links/SEO‑блоки).

#### 5.2 На service‑страницах (SEO‑блоки “Полезные статьи” и подобные)
- **Исправлено в файлах**:
  - `src/app/services/priem-ginekologa-odintsovo/page.tsx`
  - `src/app/services/akusher-ginekolog-odintsovo/page.tsx`
  - `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/page.tsx`
  - `src/app/services/vedenie-beremennosti-odintsovo/page.tsx`
- **Сделано**: все `href="/articles/..."` в SEO‑ссылках заменены на `href="/blog/..."`.

---

### 6) Service‑page `/services/priem-ginekologa-odintsovo` (сужение интента)

#### 6.1 Метаданные (точные значения)
- **Файл**: `src/data/gynec-seo-pages.ts` → ключ `priem-ginekologa-odintsovo`
- **Зафиксировано**:
  - `title`: `Приём гинеколога в Одинцово: первичный и повторный, осмотр, мазки | Альтамед-С`
  - `description`: `Как проходит приём гинеколога: первичная и повторная консультация, осмотр, мазки, возможные обследования. Что взять с собой и как подготовиться.`
  - `h1`: `Приём гинеколога: первичный и повторный — как проходит и что входит`

#### 6.2 Контент страницы (без изменения дизайна)
- **Файл**: `src/app/services/priem-ginekologa-odintsovo/page.tsx`
- **Сделано**:
  - Hero‑H1 и лидер‑абзац приведены к узкому интенту (первичный/повторный, что входит, подготовка, мазки/обследования).
  - SEO‑ссылки в “Полезные статьи” переведены на `/blog/...`.

---

### 7) Статья про профилактический осмотр (инфо‑угол + мягкий CTA)
- **Файл**: `src/app/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`
- **Сделано**:
  - инфо‑угол усилен, коммерческий тон смягчён;
  - добавлен мягкий CTA с ссылкой на услугу:
    - `/services/profilakticheskiy-osmotr-ginekologa-odintsovo`
  - внутренние SEO‑ссылки приведены к `/blog/...`.

---

### 8) Карточки статей и image mapping
- **Файл**: `src/data/gynec-articles-images.ts`
- **Сделано**:
  - обновлён URL карточки статьи:
    - `/blog/vedenie-beremennosti-v-odintsovo` → `/blog/kak-prohodit-vedenie-beremennosti`
  - обновлён ключ маппинга hero‑image:
    - `'vedenie-beremennosti-v-odintsovo'` → `'kak-prohodit-vedenie-beremennosti'`

---

### 9) Итоговая верификация (факты по коду)

#### 9.1 Старый route статьи
- `src/app/articles/vedenie-beremennosti-v-odintsovo/page.tsx` — **не существует**.

#### 9.2 `canonical` и `openGraph.url` в статьях
- **Во всех 27** `src/app/articles/**/page.tsx`:
  - `alternates.canonical` указывает на `https://altamed-c.ru/blog/...`
  - `openGraph.url` указывает на `https://altamed-c.ru/blog/...`

#### 9.3 Остаточные `href="/articles/"` в `src/app/**`
- По `src/app/**`: **`href="/articles/"` не найдено**.

#### 9.4 Примечание по документам
- В документах (`plan.md`, `SEO_TECH_AUDIT_GYNECOLOGY_CLUSTER.md`) могут оставаться текстовые упоминания `https://altamed-c.ru/articles/` или `href="/articles/` — **документы не редактировались** в рамках SEO‑очистки.

---

### 10) Список ключевых изменённых файлов (не полный)
- `next.config.js`
- `src/app/sitemap.ts`
- `src/data/gynec-articles-images.ts`
- `src/data/gynec-seo-pages.ts`
- `src/app/articles/kak-prohodit-vedenie-beremennosti/page.tsx`
- `src/app/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`
- `src/app/articles/**/page.tsx` (все 27 статей — canonical/OG + SEO‑ссылки)
- `src/app/services/priem-ginekologa-odintsovo/page.tsx`
- `src/app/services/akusher-ginekolog-odintsovo/page.tsx`
- `src/app/services/profilakticheskiy-osmotr-ginekologa-odintsovo/page.tsx`
- `src/app/services/vedenie-beremennosti-odintsovo/page.tsx`

