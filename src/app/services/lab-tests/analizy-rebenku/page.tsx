import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Анализы ребёнку в Одинцово — подготовка и запись | Альтамед-С",
  description: "Как подготовить ребёнка к лабораторным анализам, что взять с собой и как найти назначенные исследования в калькуляторе Альтамед-С.",
  alternates: { canonical: "https://altamed-c.ru/services/lab-tests/analizy-rebenku" },
};

const faq = [
  { q: "Нужно ли записываться на анализы ребёнку?", a: "Это зависит от исследования и способа взятия биоматериала. Для мазков и процедур с участием врача запись обязательна; режим остальных исследований уточните при обращении." },
  { q: "Как подготовить ребёнка к анализу крови?", a: "Заранее объясните простыми словами, что будет происходить, выберите удобную одежду и возьмите воду. Правила питания и времени сдачи проверяйте для конкретного исследования." },
  { q: "Можно ли принести биоматериал из дома?", a: "Для некоторых исследований это возможно при соблюдении правил сбора, контейнера и доставки. Уточните требования по точному названию анализа." },
  { q: "Как найти анализ из назначения педиатра?", a: "Откройте калькулятор и введите название или код из назначения. Несколько позиций можно добавить в единый список." },
  { q: "Что взять с собой?", a: "Документы ребёнка, назначение врача при наличии и сохранённый список исследований. Для малыша пригодятся привычные предметы ухода и небольшая игрушка." },
];

export default function ChildLabTestsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-gray-100 bg-gray-50/60"><nav className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-600 sm:px-6 lg:px-8"><Link href="/" className="hover:text-emerald-700">Главная</Link><span className="mx-2">/</span><Link href="/services/lab-tests" className="hover:text-emerald-700">Анализы</Link><span className="mx-2">/</span><span className="font-medium text-gray-900">Анализы ребёнку</span></nav></div>
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Лабораторные исследования для детей</p><h1 className="mt-3 text-4xl font-bold leading-tight text-gray-950 md:text-6xl">Анализы ребёнку в Одинцово</h1><p className="mt-5 text-lg leading-relaxed text-gray-700">Понятный маршрут для родителей: найдите исследования из назначения, проверьте подготовку и заранее соберите список в калькуляторе.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/services/lab-tests/calculator" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white hover:bg-emerald-700">Найти анализы</Link><Link href="/services/pediatrics" className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-emerald-600 px-7 py-3.5 font-semibold text-emerald-800">Педиатры клиники</Link></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sky-100 shadow-xl"><Image src="/images/yslugi/Pediatrician.webp" alt="Подготовка ребёнка к анализам" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div></div></section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-gray-950">Как подготовиться без лишнего стресса</h2><div className="mt-7 grid gap-4 md:grid-cols-4">{[
        ["Проверьте название", "Найдите точное исследование из назначения и откройте требования к подготовке."],
        ["Выберите время", "Учитывайте режим ребёнка и условия конкретного анализа — натощак, утром или в определённый день."],
        ["Объясните заранее", "Расскажите коротко и спокойно, что сотрудник возьмёт материал и процедура быстро закончится."],
        ["Возьмите знакомую вещь", "Игрушка, книга или наушники помогут переключить внимание до и после процедуры."],
      ].map(([title, text]) => <div key={title} className="rounded-2xl border border-gray-100 p-5 shadow-sm"><h3 className="font-bold text-gray-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p></div>)}</div></section>
      <section className="border-y border-gray-100 bg-gray-50"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="font-semibold text-emerald-700">Уже есть назначение</p><h2 className="mt-2 text-3xl font-bold">Соберите все позиции в одном списке</h2><p className="mt-4 leading-relaxed text-gray-600">В калькуляторе можно искать по названию или коду, переключаться между категориями и добавлять несколько исследований. Готовый список удобно показать сотруднику клиники.</p><Link href="/services/lab-tests/calculator" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white hover:bg-emerald-700">Открыть большой калькулятор</Link></div><div><p className="font-semibold text-sky-700">Назначения ещё нет</p><h2 className="mt-2 text-3xl font-bold">Начните с педиатра</h2><p className="mt-4 leading-relaxed text-gray-600">Если поводом стали жалобы, а не плановое обследование, врач поможет определить действительно полезный набор исследований и объяснит подготовку.</p><Link href="/services/pediatrics" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-emerald-600 px-7 py-3.5 font-semibold text-emerald-800">Перейти в педиатрию</Link></div></div></section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Вопросы родителей</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{faq.map((item) => <details key={item.q} className="rounded-2xl border border-gray-100 p-5 shadow-sm"><summary className="cursor-pointer list-none font-bold marker:hidden">{item.q}</summary><p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p></details>)}</div></section>
    </main>
  );
}
