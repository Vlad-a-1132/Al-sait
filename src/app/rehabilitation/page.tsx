import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { REHABILITATION_SERVICE_ARTICLES } from "@/data/rehabilitation-service-articles";

export const metadata: Metadata = {
  title: "Восстановление и физиотерапия в Одинцово | Альтамед-С",
  description: "Остеопатия, детский остеопат, физиотерапия, массаж, УВТ, HILT, SIS, ТЕКАР, ЭЛГОС и другие восстановительные процедуры в Альтамед-С.",
  alternates: { canonical: "https://altamed-c.ru/rehabilitation" },
};

type Direction = {
  title: string;
  description: string;
  href: string;
  image: string;
  tag: string;
};

const directions: Direction[] = [
  { title: "Остеопатия", description: "Врачебная консультация, оценка движений и индивидуальный формат ручных техник.", href: "/services/osteopathy", image: "/images/yslugi/Osteopathy.webp", tag: "Консультация" },
  { title: "Детский остеопат", description: "Приём детей от рождения до 14 лет врачом-педиатром и остеопатом.", href: "/services/osteopathy/pediatric", image: "/images/yslugi/Pediatrician.webp", tag: "Детям" },
  { title: "Физиотерапия", description: "Подбор физических методов и аппаратных процедур по направлению врача.", href: "/services/physiotherapy", image: "/images/yslugi/fizio.webp", tag: "Физиотерапия" },
  { title: "Лечебный массаж", description: "Массажные программы с выбором зоны и продолжительности процедуры.", href: "/services/massage", image: "/images/yslugi/massaj.webp", tag: "Массаж" },
  { title: "Ударно-волновая терапия", description: "Аппаратная процедура для локальной работы с выбранной областью.", href: "/services/shockwave-therapy", image: "/images/yslugi/fizio.webp", tag: "УВТ" },
  { title: "Высокоинтенсивный лазер HILT", description: "Лазерная физиотерапевтическая процедура по назначению специалиста.", href: "/services/hilt-laser", image: "/images/yslugi/High Intensity Laser HILT.webp", tag: "HILT" },
  { title: "Магнитотерапия SIS", description: "Высокоинтенсивная магнитотерапия с индивидуальным выбором зоны воздействия.", href: "/services/sis-magnetotherapy", image: "/images/yslugi/High Intensity Magnetic Therapy (SIS).webp", tag: "SIS" },
  { title: "ТЕКАР-терапия", description: "Контактная аппаратная процедура в составе персонального плана восстановления.", href: "/services/tekar-therapy", image: "/images/yslugi/Tekar therapy.webp", tag: "ТЕКАР" },
  { title: "Глубокая осцилляция ЭЛГОС", description: "Процедура глубокой осцилляции с выбором программы под задачу визита.", href: "/services/elgos-therapy", image: "/images/yslugi/Deep oscillation d2evice.webp", tag: "ЭЛГОС" },
  { title: "Пневмомассаж Лимфа-Э", description: "Аппаратный пневмомассаж с контролем режима и продолжительности процедуры.", href: "/services/lymph-e-massage", image: "/images/yslugi/Pneumatic massager Lymfa-E.webp", tag: "Лимфа-Э" },
  { title: "Вакуумный массаж", description: "Аппаратный массаж для выбранных зон тела в условиях клиники.", href: "/services/vacuum-massage", image: "/images/yslugi/vakum.webp", tag: "Массаж" },
  { title: "Карбокситерапия", description: "Процедурное направление с предварительным выбором показаний и курса.", href: "/services/carboxytherapy", image: "/images/yslugi/Carboxytherapy.webp", tag: "Процедура" },
  { title: "Озонотерапия", description: "Внутривенное введение озонированного физиологического раствора по назначению врача.", href: "/services/ozone-therapy", image: "/images/yslugi/ozone-therapy.webp", tag: "Инфузия" },
  { title: "Биорезонансная терапия", description: "Информация о формате процедуры, записи и консультации специалиста.", href: "/services/bioresonance", image: "/images/yslugi/Hardware diagnostics.webp", tag: "Процедура" },
];

const faq = [
  { question: "Как выбрать между массажем, остеопатией и физиотерапией?", answer: "Остеопатия начинается с врачебной консультации и оценки движений, массаж предполагает работу с выбранными зонами, а физиотерапия объединяет аппаратные методы. Если направление уже выдал врач, возьмите его с собой; если нет — администратор поможет выбрать первичную консультацию." },
  { question: "Можно ли записаться сразу на аппаратную процедуру?", answer: "Для части процедур требуется назначение или предварительная консультация. При записи назовите интересующую услугу и сообщите, есть ли у вас направление — администратор подскажет правильный маршрут." },
  { question: "Есть ли восстановительные услуги для детей?", answer: "Да. В клинике есть отдельный приём детского остеопата для пациентов от рождения до 14 лет. Возрастные ограничения других процедур уточняются при записи." },
  { question: "Нужно ли приносить результаты обследований?", answer: "Если у вас уже есть заключения врача или исследования по текущему запросу, возьмите их на консультацию. Самостоятельно проходить новые обследования перед записью не требуется." },
  { question: "Как узнать продолжительность и количество процедур?", answer: "Продолжительность конкретного сеанса указана в карточке услуги или уточняется при записи. Количество процедур зависит от выбранного метода и персонального плана." },
  { question: "Можно ли сочетать несколько методов?", answer: "Такой вариант возможен, если специалист видит в нём смысл. Последовательность и интервалы лучше согласовать на консультации, чтобы процедуры дополняли общий план." },
];

export default function RehabilitationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalClinic", name: "Альтамед-С", url: "https://altamed-c.ru/rehabilitation", medicalSpecialty: "PhysicalTherapy" },
      { "@type": "ItemList", itemListElement: directions.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `https://altamed-c.ru${item.href}` })) },
      { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="border-b border-gray-100 bg-gray-50/60">
        <nav className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-600 sm:px-6 lg:px-8" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-emerald-700">Главная</Link><span className="mx-2">/</span><span className="font-medium text-gray-900">Восстановление</span>
        </nav>
      </div>

      <section className="overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">14 направлений в одном разделе</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">Восстановление и физиотерапия в Одинцово</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">Остеопатия, массаж и аппаратные методы Альтамед-С. Сравните направления, узнайте, как проходит приём или процедура, и перейдите к записи без поиска по всему сайту.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-900/15 hover:bg-emerald-700">Записаться онлайн</a>
              <a href="tel:+74952554450" className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-emerald-600 px-7 py-3.5 font-semibold text-emerald-800 hover:bg-white">+7 (495) 255-44-50</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-2 text-sm text-gray-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Приём взрослых и детей</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Аппаратные процедуры</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Онлайн-запись</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-emerald-100 shadow-xl">
            <Image src="/images/yslugi/fizio.webp" alt="Физиотерапия и восстановительные процедуры в Альтамед-С" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
              <p className="font-bold">Не знаете, с чего начать?</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">Назовите администратору основной запрос — он подскажет, нужна ли консультация или можно выбрать конкретную процедуру.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl"><p className="font-semibold text-emerald-700">Все направления</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Выберите подходящий формат</h2><p className="mt-3 text-gray-600">Каждая карточка ведёт на подробную страницу с описанием, подготовкой, этапами и ответами на вопросы.</p></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((item) => (
            <Link key={item.href} href={item.href} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
              <div className="relative aspect-[16/8] overflow-hidden bg-gray-100"><Image src={item.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" /><span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-emerald-800 shadow-sm">{item.tag}</span></div>
              <div className="p-5"><h3 className="text-xl font-bold group-hover:text-emerald-700">{item.title}</h3><p className="mt-2 min-h-[44px] text-sm leading-relaxed text-gray-600">{item.description}</p><span className="mt-4 inline-flex font-semibold text-emerald-700">Подробнее →</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="font-semibold text-emerald-700">Полезные материалы</p><h2 className="mt-2 text-3xl font-bold">Подготовьтесь к приёму</h2></div><Link href="/blog/topics/rehabilitation" className="font-semibold text-emerald-700 hover:underline">Все статьи раздела →</Link></div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {REHABILITATION_SERVICE_ARTICLES.map((article) => <Link key={article.url} href={article.url} className="group rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"><div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-gray-100"><Image src={article.image} alt="" fill className="object-cover transition group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" /></div><h3 className="font-bold leading-snug group-hover:text-emerald-700">{article.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{article.desc}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Частые вопросы</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {faq.map((item) => <details key={item.question} className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none pr-8 font-bold marker:hidden">{item.question}</summary><p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p></details>)}
        </div>
      </section>

      <section className="bg-emerald-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8"><div><h2 className="text-3xl font-bold">Запишитесь на консультацию или процедуру</h2><p className="mt-2 max-w-2xl text-emerald-50">Выберите услугу онлайн или позвоните — администратор поможет подобрать правильный формат записи.</p></div><a href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-7 py-3.5 font-bold text-emerald-800 hover:bg-emerald-50">Выбрать время</a></div>
      </section>
    </main>
  );
}
