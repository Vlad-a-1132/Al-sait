import Image from "next/image";
import Link from "next/link";

const groups = [
  { title: "Клинические исследования", items: ["Общий анализ крови", "Лейкоцитарная формула", "СОЭ", "Общий анализ мочи"] },
  { title: "Биохимия крови", items: ["Глюкоза", "Липидный профиль", "Показатели печени", "Показатели работы почек"] },
  { title: "Гормональные исследования", items: ["Щитовидная железа", "Репродуктивные гормоны", "Надпочечники", "Обмен веществ"] },
  { title: "Инфекции", items: ["Антитела", "ПЦР-исследования", "Серологическая диагностика", "Комплексные панели"] },
  { title: "Аллергология", items: ["Индивидуальные аллергены", "Аллергокомпоненты", "Панели аллергенов", "Иммунологические исследования"] },
  { title: "Микроэлементы и витамины", items: ["Витамин D", "Железо и ферритин", "Витамины группы B", "Минеральный обмен"] },
  { title: "Гистология и цитология", items: ["Цитологические исследования", "Гистологические исследования", "Исследование биоматериала", "Заключение лаборатории"] },
  { title: "Другие исследования", items: ["Анализы кала", "Исследование спермы", "Аутоиммунные маркеры", "Генетические исследования"] },
];

const faq = [
  { question: "Как найти нужный анализ?", answer: "Введите название или код исследования в большом калькуляторе. Если у вас есть назначение врача, можно собрать весь список и сохранить его перед обращением в клинику." },
  { question: "Обязательно ли записываться заранее?", answer: "Условия зависят от вида биоматериала. Для мазков, соскобов и процедур, которые выполняет врач, нужна отдельная запись. Для остальных исследований режим лучше уточнить по телефону." },
  { question: "Все анализы крови сдают натощак?", answer: "Требования различаются. Для части исследований важны интервал после еды, время суток или день цикла. Откройте памятку по подготовке или уточните правила для конкретного названия." },
  { question: "Можно ли пить воду перед анализом крови?", answer: "Обычно небольшое количество воды допускается, но для отдельных исследований могут действовать специальные правила. Проверьте подготовку к выбранному тесту." },
  { question: "Где получить результаты?", answer: "Способ и срок выдачи зависят от исследования. При оформлении заказа сотрудник сообщит ориентировочный срок и доступный способ получения." },
  { question: "Можно ли сдать анализы ребёнку?", answer: "Да, в лабораторном разделе есть исследования для детей. Возрастные условия, подготовку и необходимый объём биоматериала стоит уточнить заранее." },
  { question: "Как выбрать анализы при усталости или другой жалобе?", answer: "Для симптомов нет одного универсального набора. Лучше начать с терапевта, педиатра или профильного врача, чтобы получить обоснованный список исследований." },
];

export default function LabTestsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalTest", name: "Лабораторные анализы в Альтамед-С", url: "https://altamed-c.ru/services/lab-tests" },
      { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="border-b border-gray-100 bg-gray-50/60">
        <nav className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-600 sm:px-6 lg:px-8" aria-label="Хлебные крошки"><Link href="/" className="hover:text-emerald-700">Главная</Link><span className="mx-2">/</span><Link href="/services" className="hover:text-emerald-700">Услуги</Link><span className="mx-2">/</span><span className="font-medium text-gray-900">Анализы</span></nav>
      </div>

      <section className="bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Лабораторная диагностика</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">Сдать анализы в Одинцово</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">Найдите исследование по названию или коду, соберите список в калькуляторе и заранее проверьте правила подготовки. Все основные действия — на одной странице.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/lab-tests/calculator" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-900/15 hover:bg-emerald-700">Открыть калькулятор</Link>
              <a href="tel:+74952554450" className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-emerald-600 px-7 py-3.5 font-semibold text-emerald-800 hover:bg-white">Уточнить по телефону</a>
            </div>
            <div className="mt-7 grid max-w-2xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              <a href="#groups" className="rounded-xl bg-white px-4 py-3 font-semibold shadow-sm hover:text-emerald-700">Виды анализов ↓</a>
              <a href="#preparation" className="rounded-xl bg-white px-4 py-3 font-semibold shadow-sm hover:text-emerald-700">Подготовка ↓</a>
              <a href="#faq" className="rounded-xl bg-white px-4 py-3 font-semibold shadow-sm hover:text-emerald-700">Частые вопросы ↓</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cyan-100 shadow-xl">
            <Image src="/images/yslugi/Laboratory tests.webp" alt="Лабораторные анализы в Альтамед-С" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur"><p className="font-bold">Уже есть назначение врача?</p><p className="mt-1 text-sm text-gray-600">Откройте калькулятор, найдите исследования и сохраните готовый список.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Link href="/services/lab-tests/calculator" className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition hover:-translate-y-0.5 hover:shadow-md"><span className="text-sm font-bold text-orange-700">Большой каталог</span><h2 className="mt-2 text-2xl font-bold">Калькулятор анализов</h2><p className="mt-2 text-sm leading-relaxed text-gray-600">Поиск по названию и коду, категории исследований, выбранный список и сохранение.</p><span className="mt-4 inline-flex font-semibold text-orange-700">Перейти →</span></Link>
          <Link href="/services/lab-tests/analizy-rebenku" className="rounded-2xl border border-sky-100 bg-sky-50 p-6 transition hover:-translate-y-0.5 hover:shadow-md"><span className="text-sm font-bold text-sky-700">Отдельный маршрут</span><h2 className="mt-2 text-2xl font-bold">Анализы ребёнку</h2><p className="mt-2 text-sm leading-relaxed text-gray-600">Возрастные особенности, подготовка родителей и удобный порядок обращения.</p><span className="mt-4 inline-flex font-semibold text-sky-700">Подробнее →</span></Link>
          <Link href="/services/therapy" className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 transition hover:-translate-y-0.5 hover:shadow-md"><span className="text-sm font-bold text-emerald-700">Если нет назначения</span><h2 className="mt-2 text-2xl font-bold">Начать с врача</h2><p className="mt-2 text-sm leading-relaxed text-gray-600">Терапевт поможет связать жалобы с подходящим обследованием и не собирать случайный набор.</p><span className="mt-4 inline-flex font-semibold text-emerald-700">Выбрать врача →</span></Link>
        </div>
      </section>

      <section id="groups" className="scroll-mt-24 border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="font-semibold text-emerald-700">Навигация по каталогу</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Основные группы исследований</h2><p className="mt-3 text-gray-600">Ниже — ориентир по разделам. Точное название исследования ищите в калькуляторе или в назначении врача.</p></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{groups.map((group) => <div key={group.title} className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold text-gray-950">{group.title}</h3><ul className="mt-3 space-y-2 text-sm text-gray-600">{group.items.map((item) => <li key={item} className="flex gap-2"><span className="text-emerald-600">•</span>{item}</li>)}</ul></div>)}</div><div className="mt-7 text-center"><Link href="/services/lab-tests/calculator" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white hover:bg-emerald-700">Найти конкретный анализ</Link></div></div>
      </section>

      <section id="preparation" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-semibold text-emerald-700">Перед посещением</p><h2 className="mt-2 text-3xl font-bold">Подготовка к анализам</h2><p className="mt-4 leading-relaxed text-gray-600">Правила зависят от конкретного исследования. Проверяйте их по полному названию из назначения: требования к времени, еде, нагрузке и лекарствам могут различаться.</p><p className="mt-4 leading-relaxed text-gray-600">Если несколько исследований планируются одновременно, ориентируйтесь на наиболее строгие правила и заранее уточните совместимость подготовки.</p></div><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-gray-100 p-5"><h3 className="font-bold">Кровь</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Уточните интервал после еды, допустимость воды, время суток и ограничения по физической нагрузке.</p></div><div className="rounded-2xl border border-gray-100 p-5"><h3 className="font-bold">Моча</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Проверьте требования к гигиене, первой или средней порции, времени сбора и контейнеру.</p></div><div className="rounded-2xl border border-gray-100 p-5"><h3 className="font-bold">Гормоны</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Для некоторых исследований важны время суток, день цикла и приём лекарств — условия указывает врач.</p></div><div className="rounded-2xl border border-gray-100 p-5"><h3 className="font-bold">Мазки и соскобы</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Такие исследования могут требовать записи к специалисту и отдельных ограничений перед взятием материала.</p></div></div></div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-gray-100 bg-emerald-50/50"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Частые вопросы об анализах</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{faq.map((item) => <details key={item.question} className="rounded-2xl bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none font-bold marker:hidden">{item.question}</summary><p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p></details>)}</div></div></section>

      <section className="bg-emerald-700 text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8"><div><h2 className="text-3xl font-bold">Соберите список исследований</h2><p className="mt-2 max-w-2xl text-emerald-50">Большой калькулятор удобнее использовать с телефона и компьютера: поиск, категории и выбранные позиции находятся на одном экране.</p></div><Link href="/services/lab-tests/calculator" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-7 py-3.5 font-bold text-emerald-800 hover:bg-emerald-50">Открыть калькулятор</Link></div></section>
    </main>
  );
}
