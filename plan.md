# Финальный план правок SEO-кластера “гинеколог Одинцово”

## 1. Ограничения

### 1.1 Что нельзя менять
- Дизайн/верстку и UI-компоненты (кроме точечных правок текста и ссылок внутри существующих блоков).
- Архитектуру проекта (Next.js App Router) и текущую схему публичных URL блога `/blog/*` (через rewrite на `/articles/*`).
- Любые страницы и данные вне гинекологического кластера.
- URL у всех статей подряд (разрешено менять URL только у одной конфликтной статьи, указанной ниже).

### 1.2 Что можно менять (строго в рамках этого плана)
- Slug/URL: только для статьи `/blog/vedenie-beremennosti-v-odintsovo` по правилам ниже.
- Metadata статей и страниц: `title`, `description`, `alternates.canonical`, `openGraph.url`.
- Заголовки `H1` (и подзаголовки только там, где указано планом).
- CTA, related links, внутренние SEO-ссылки (строго по правилам ниже).
- Redirects/rewrites: только точечное добавление редиректа в `next.config.js` (без изменения существующих правил).
- `src/app/sitemap.ts`: точечная замена URL в sitemap.

---

## 2. Главная логика кластера

### 2.1 `/ginekolog-v-odintsovo` — главный коммерческий хаб
- Единственная широкая коммерческая страница кластера.
- Роль: закрывать широкие money‑запросы “гинеколог Одинцово / прием / запись / платный”.
- Роль в перелинковке: основной хаб для статей “симптомы/когда идти/подготовка”.

### 2.2 `/services/*` — узкие коммерческие service-page
- Каждая service-page закрывает узкий коммерческий интент.
- В рамках этого плана обязательно: сузить интент `/services/priem-ginekologa-odintsovo` (см. шаг 8).

### 2.3 `/blog/*` — чисто информационные статьи
- Роль: информационный интент, без локального money‑тона.
- Единообразие SEO‑слоя: canonical и `openGraph.url` всегда указывают на публичный URL `/blog/...`, а не на `/articles/...`.

---

## 3. Шаги правок

## Шаг 1 — Конфликтная статья “ведение беременности”: переименование route без дублей

### Цель шага
- Убрать каннибализацию между блогом и service-page `/services/vedenie-beremennosti-odintsovo`.
- Исключить риск дублей route/страниц в коде.

### Какие файлы меняются
- Папка route статьи:
  - `src/app/articles/vedenie-beremennosti-v-odintsovo/`
  - → `src/app/articles/kak-prohodit-vedenie-beremennosti/`
- Файл статьи (внутри переименованной папки):
  - `src/app/articles/kak-prohodit-vedenie-beremennosti/page.tsx`

### Что сейчас не так
- Статья имеет slug с geo+коммерческим оттенком и конкурирует с service-page ведения беременности.

### Что должно стать после правок (строго, без альтернатив)
Переезд route:  
Физический файл статьи сейчас находится в папке:  
`src/app/articles/vedenie-beremennosti-v-odintsovo/`

Действие:  
Переименовать папку route:  
`src/app/articles/vedenie-beremennosti-v-odintsovo/`  
→  
`src/app/articles/kak-prohodit-vedenie-beremennosti/`

Важно:
- новый route отдельно **НЕ** создаётся;
- старая папка route **НЕ** сохраняется;
- после переименования старый route полностью исчезает из кода.

### Новый публичный URL статьи
- Было (публично): `/blog/vedenie-beremennosti-v-odintsovo`
- Должно стать (публично): `/blog/kak-prohodit-vedenie-beremennosti`

---

## Шаг 2 — Обновить metadata и H1 в статье `kak-prohodit-vedenie-beremennosti`

### Цель шага
- Зафиксировать информационный угол статьи (без geo “в Одинцово”).
- Привести canonical и `openGraph.url` к публичному `/blog/...`.

### Какие файлы меняются
- `src/app/articles/kak-prohodit-vedenie-beremennosti/page.tsx`

### Что сейчас не так
- У текущей версии статьи присутствуют geo‑формулировки и canonical/OG на `/articles/...`.

### Что должно стать после правок (точные значения)
- **title**:
  - `Приём гинеколога в Одинцово: первичный и повторный, осмотр, мазки | Альтамед-С`
- **description**:
  - `Как проходит приём гинеколога: первичная и повторная консультация, осмотр, мазки, возможные обследования. Что взять с собой и как подготовиться.`
- **H1**:
  - `Приём гинеколога: первичный и повторный — как проходит и что входит`
- **lead (первый экран)**:
  - фокус: этапы приёма / что входит / подготовка / мазки и возможные обследования
  - убрать широкий хабовый тон и формулировки уровня “по вопросам женского здоровья”

Где меняется:
- `src/data/gynec-seo-pages.ts`: поля `title`, `description`, `h1`, `lead` у ключа `priem-ginekologa-odintsovo`
- `src/app/services/priem-ginekologa-odintsovo/page.tsx`: hero/lead-текст привести в соответствие (без изменения структуры блоков)

---

## Шаг 9 — Статья про профилактический осмотр: инфо‑угол + мягкий CTA

### Цель шага
- Сделать статью чисто информационной и не конкурирующей с `/services/profilakticheskiy-osmotr-ginekologa-odintsovo`.
- Сохранить конверсию мягким CTA на услугу.

### Какие файлы меняются
- `src/app/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`

### Что сейчас не так
- Коммерческий тон в конце статьи и SEO‑слое.
- Canonical/OG должны быть на публичный `/blog/...` (обеспечивается Шагом 6).

### Что должно стать после правок (точные значения)
Файл: `src/app/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`
- title:
  - `Профилактический осмотр у гинеколога: что входит и какие обследования нужны | Альтамед-С`
- H1:
  - `Профилактический осмотр у гинеколога: что входит и какие обследования назначают`
- description:
  - `Что входит в профилактический осмотр у гинеколога: мазки, осмотр, когда нужна кольпоскопия или УЗИ, как часто проходить и как подготовиться.`
- canonical / `openGraph.url`:
  - на публичный `/blog/...` (по Шагу 6)

### Мягкий CTA в конце (строго)
- Заголовок: `Когда стоит записаться на профилактический осмотр?`
- Кнопка: `→ /services/profilakticheskiy-osmotr-ginekologa-odintsovo`
- Убрать из CTA только избыточно коммерческие элементы (например “В Альтамед-С”, “первичный приём от …”), но CTA оставить.

---

## Шаг 10 — Пограничные статьи: точечные изменения без смены URL

### Цель шага
- Убрать каннибализацию за счёт единообразного SEO‑слоя и аккуратного CTA.
- Не менять URL у этих статей.

### Какие страницы (URL не меняется)
Для каждой статьи ниже:
- URL **не меняется**
- canonical и `openGraph.url` **меняются** на публичные `/blog/...` (по Шагу 6)
- SEO‑ссылки `/articles/...` → `/blog/...` **только в SEO‑блоках** (по Шагу 7)
- CTA смягчается **только если** он явно превращает статью в service‑page (агрессивный коммерческий тон), при этом CTA/ссылка на релевантную услугу сохраняется

Список статей:
- `/blog/kak-podgotovitsya-k-priyomu-ginekologa`  
  Файл: `src/app/articles/kak-podgotovitsya-k-priyomu-ginekologa/page.tsx`
- `/blog/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov`  
  Файл: `src/app/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov/page.tsx`
- `/blog/ginekolog-ili-ginekolog-endokrinolog`  
  Файл: `src/app/articles/ginekolog-ili-ginekolog-endokrinolog/page.tsx`
- `/blog/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya`  
  Файл: `src/app/articles/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya/page.tsx`
- `/blog/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya`  
  Файл: `src/app/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`
- `/blog/podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa`  
  Файл: `src/app/articles/podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa/page.tsx`
- `/blog/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut`  
  Файл: `src/app/articles/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut/page.tsx`

---

## 8. Список реально изменяемых файлов

### 8.1 Базовые файлы кластера (обязательные)
- `next.config.js`
- `src/app/sitemap.ts`
- `src/data/gynec-articles-images.ts`
- `src/data/gynec-seo-pages.ts`
- `src/app/services/priem-ginekologa-odintsovo/page.tsx`
- `src/app/articles/kak-prohodit-vedenie-beremennosti/page.tsx`
- `src/app/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`

### 8.2 Все 27 файлов `src/app/articles/**/page.tsx` (глобальные правки canonical и `openGraph.url`)
- `src/app/articles/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto/page.tsx`
- `src/app/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny/page.tsx`
- `src/app/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut/page.tsx`
- `src/app/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut/page.tsx`
- `src/app/articles/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet/page.tsx`
- `src/app/articles/endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie/page.tsx`
- `src/app/articles/ginekolog-ili-ginekolog-endokrinolog/page.tsx`
- `src/app/articles/kak-podgotovitsya-k-priyomu-ginekologa/page.tsx`
- `src/app/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov/page.tsx`
- `src/app/articles/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie/page.tsx`
- `src/app/articles/kriodestrukciya-sheyki-matki-kogda-primenyaetsya-i-chto-vazhno-znat/page.tsx`
- `src/app/articles/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya/page.tsx`
- `src/app/articles/narushenie-menstrualnogo-tsikla/page.tsx`
- `src/app/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit/page.tsx`
- `src/app/articles/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya/page.tsx`
- `src/app/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`
- `src/app/articles/podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa/page.tsx`
- `src/app/articles/polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura/page.tsx`
- `src/app/articles/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut/page.tsx`
- `src/app/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya/page.tsx`
- `src/app/articles/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury/page.tsx`
- `src/app/articles/udalenie-kondilom-i-papillom-v-intimnoy-zone-kogda-obraschatsya-k-vrachu/page.tsx`
- `src/app/articles/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie/page.tsx`
- `src/app/articles/vaginit-simptomy-prichiny-i-kogda-nuzhna-konsultatsiya-ginekologa/page.tsx`
- `src/app/articles/vnutrimatochnaya-spiral-ustanovka-i-udalenie/page.tsx`
- `src/app/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu/page.tsx`

---

## 9. Финальная проверка после правок

1) Нет ни одного canonical на `/articles` (внутри `src/app/articles/**/page.tsx`).
2) Все 27 статей имеют:
   - `alternates.canonical` на `https://altamed-c.ru/blog/<slug>`
   - `openGraph.url` на `https://altamed-c.ru/blog/<slug>`
3) `/articles/*` корректно редиректит на `/blog/*` (общее правило в `next.config.js`).
4) Старый публичный URL статьи про беременность:
   - `/blog/vedenie-beremennosti-v-odintsovo` → 301 → `/blog/kak-prohodit-vedenie-beremennosti`
5) Старый internal URL:
   - `/articles/vedenie-beremennosti-v-odintsovo` по цепочке приходит на `/blog/kak-prohodit-vedenie-beremennosti`
6) Sitemap обновлён:
   - в `src/app/sitemap.ts` нет `/blog/vedenie-beremennosti-v-odintsovo`
   - есть `/blog/kak-prohodit-vedenie-beremennosti`
7) В SEO-блоках статей нет ссылок `href="/articles/..."` (используется `/blog/...`), при этом служебные/API пути не затронуты.
Файл: `src/app/articles/kak-prohodit-vedenie-beremennosti/page.tsx`

- **title**:
  - `Как проходит ведение беременности: график визитов, анализы и УЗИ | Альтамед-С`
- **description**:
  - `Как проходит ведение беременности: когда вставать на учёт, как часто посещать врача, какие анализы и УЗИ назначают, когда обращаться вне плана.`
- **H1**:
  - `Как проходит ведение беременности: визиты, анализы и УЗИ по триместрам`
- **canonical**:
  - `https://altamed-c.ru/blog/kak-prohodit-vedenie-beremennosti`
- **openGraph.url**:
  - `https://altamed-c.ru/blog/kak-prohodit-vedenie-beremennosti`

### CTA/related (инфо‑статья, но конверсия сохраняется)
- CTA остаётся мягким.
- CTA содержит ссылку на релевантную service-page:
  - `/services/vedenie-beremennosti-odintsovo`
  - (допускается второе направление, если оно уже логично в статье): `/services/akusher-ginekolog-odintsovo`
- Убирается только избыточно коммерческий тон внутри инфо‑статьи (без удаления CTA как такового).

---

## Шаг 3 — Добавить 301 редирект со старого публичного URL на новый

### Цель шага
- Передать вес старого URL новому URL.
- Исключить “разрыв” для пользователей и поисковиков.

### Какие файлы меняются
- `next.config.js`

### Что сейчас не так
- После переименования route старый публичный URL должен вести на новый URL через 301.

### Что должно стать после правок (точный блок)
Файл: `next.config.js`  
В `async redirects()` **ДО** общего правила редиректа `/articles/:slug* → /blog/:slug*` добавить:

```js
{
  source: '/blog/vedenie-beremennosti-v-odintsovo',
  destination: '/blog/kak-prohodit-vedenie-beremennosti',
  permanent: true,
},
```

---

## Шаг 4 — Обновить карточку статьи и image mapping

### Цель шага
- Обновить URL карточки статьи, чтобы везде использовался новый публичный slug.
- Обновить slug‑ключ в image mapping, чтобы hero‑image не сломался.

### Какие файлы меняются
- `src/data/gynec-articles-images.ts`

### Что сейчас не так
- Карточка “ведение беременности” использует старый `/blog/...` URL.
- Image mapping завязан на slug‑ключ.

### Что должно стать после правок (точные действия)
Файл: `src/data/gynec-articles-images.ts`

1) В `GYNEC_ARTICLES_LIST` найти статью “Ведение беременности …” и заменить:
- было: `url: '/blog/vedenie-beremennosti-v-odintsovo'`
- должно стать: `url: '/blog/kak-prohodit-vedenie-beremennosti'`

2) В `GYNEC_ARTICLE_IMAGES`:
- добавить ключ `'kak-prohodit-vedenie-beremennosti'` со значением изображения, которое было у `'vedenie-beremennosti-v-odintsovo'`.

### Пост‑проверка после шага (обязательная)
- Карточка статьи ведёт на новый URL.
- Hero‑image статьи отображается корректно (lookup по новому slug работает).

---

## 4. Отдельный шаг по sitemap

## Шаг 4.1 — Обновить sitemap (обязательное)

### Цель шага
- Исключить старый URL из sitemap и добавить новый URL, чтобы поисковик видел актуальную структуру.

### Какие файлы меняются
- `src/app/sitemap.ts`

### Что сделать (строго)
- удалить URL: `/blog/vedenie-beremennosti-v-odintsovo`
- добавить URL: `/blog/kak-prohodit-vedenie-beremennosti`

---

## 5. Отдельный шаг по цепочке `/articles/...` → `/blog/...`

## Шаг 5.1 — Проверить цепочку старого internal URL (обязательное)

### Цель шага
- Убедиться, что старый internal URL не остаётся “живым” и в итоге приводит к новому публичному URL.

### Проверка (строго)
Проверить, что:
- `/articles/vedenie-beremennosti-v-odintsovo`

по текущей rewrite/redirect цепочке в итоге приводит на:
- `/blog/kak-prohodit-vedenie-beremennosti`

Ожидаемая цепочка:
- `/articles/vedenie-beremennosti-v-odintsovo`
  → 301 → `/blog/vedenie-beremennosti-v-odintsovo`
  → 301 → `/blog/kak-prohodit-vedenie-beremennosti`

---

## 6. Отдельный шаг по глобальной замене canonical/openGraph.url (27/27)

## Шаг 6 — Глобально привести canonical и `openGraph.url` к `/blog/...` во всех 27 статьях (обязательное)

### Цель шага
- Полностью убрать `/articles/...` из SEO‑метаданных.
- Сделать весь blog‑слой единообразным.

### Какие файлы меняются
- Во **всех 27** файлах: `src/app/articles/**/page.tsx` (полный список — в разделе 8).

### Что сейчас не так
- canonical и `openGraph.url` указывают на `https://altamed-c.ru/articles/<slug>`.

### Что должно стать после правок (строго)
Во всех 27 файлах `src/app/articles/**/page.tsx` заменить:
- `https://altamed-c.ru/articles/<slug>` → `https://altamed-c.ru/blog/<slug>`  
в:
- `alternates.canonical`
- `openGraph.url`

Жёсткая фиксация:
**Во всех 27 файлах `src/app/articles/**/page.tsx` canonical и openGraph.url меняются без исключений и без дополнительных подтверждений.**

---

## 7. Отдельный шаг по перелинковке

## Шаг 7 — Глобально заменить SEO-ссылки `/articles/...` → `/blog/...` только в SEO-блоках

### Цель шага
- Убрать внутренние SEO‑ссылки на `/articles/...`.
- Оставить архитектуру и служебные пути нетронутыми.

### Какие файлы меняются
- Все статьи: `src/app/articles/**/page.tsx` (только SEO‑блоки).

### Что сейчас не так
- В SEO‑блоках есть `Link href="/articles/..."`.

### Что должно стать после правок (строго)
- `Link href="/articles/..."` → `Link href="/blog/..."`  
Только для SEO‑слоя:
- “Полезные материалы”
- “Статьи”
- related links / related materials / SEO‑блоки

Не трогать:
- служебные пути
- API
- внутреннюю технику, не относящуюся к SEO

### Правила тематической перелинковки (строго)
- **Симптомы / когда идти / подготовка** → ссылки:
  - `/ginekolog-v-odintsovo`
  - `/services/priem-ginekologa-odintsovo`
- **Беременность** → ссылки:
  - `/services/vedenie-beremennosti-odintsovo`
  - `/services/akusher-ginekolog-odintsovo`
- **Профилактика / мазки / кольпоскопия** → ссылка:
  - `/services/profilakticheskiy-osmotr-ginekologa-odintsovo`

Ограничение объёма (строго):
- в каждой статье: **1–2 service ссылки**, **2–3 статьи максимум** (в SEO‑блоках).

---

## Шаг 8 — Service-page `/services/priem-ginekologa-odintsovo`: сузить интент (не “вторая главная”)

### Цель шага
- Убрать пересечение с `/ginekolog-v-odintsovo`.
- Зафиксировать узкий интент: первичный/повторный приём, этапы, подготовка, что входит, мазки/обследования.

### Какие файлы меняются
- `src/data/gynec-seo-pages.ts` (конфиг `priem-ginekologa-odintsovo`)
- `src/app/services/priem-ginekologa-odintsovo/page.tsx`

### Что сейчас не так
- Слишком широкий “хабовый” тон (включая “по вопросам женского здоровья” и прочие общие формулировки).

### Что должно стать после правок (точные значения)
