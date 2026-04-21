import Link from "next/link";
import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import { formatImplantationPriceLabel, loadImplantationPriceServices } from "./load-implantation-services";
import ImplantationFullPriceClient, { type ImplantationServiceRow } from "./ImplantationFullPriceClient";

const WORDSTAT_KEYWORDS: string[] = [
  "имплантация одинцово",
  "имплантация в одинцове",
  "имплантация зубов в одинцово",
  "одинцово имплантация цена",
  "имплантация зубов в одинцово цены",
  "имплантация зубов одинцово отзывы",
  "имплантация зубов в одинцово цены отзывы",
  "стоматология имплантация одинцово",
  "одинцово имплантация область",
  "одномоментная имплантация одинцово"
] ;

export const metadata: Metadata = {
  title: "Имплантация зубов в Одинцово | Клиника «Альтамед-С»",
  description:
    "Проводим имплантацию зубов в Одинцово — клиника «Альтамед-С»: современные импланты, одномоментная установка, прозрачные цены, гарантия результата и комфортное лечение.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/implantation"
  },
  openGraph: {
    title: "Имплантация зубов в Одинцово — стоматология «Альтамед-С»",
    description:
      "Имплантация зубов в Одинцово под ключ: цифровая диагностика, одноэтапная и классическая методика, европейские системы имплантов, гибкие цены и реальные отзывы пациентов.",
    url: "https://altamed-c.ru/services/implantation",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/yslugi/implant.webp",
        width: 1200,
        height: 630,
        alt: "Имплантация зубов в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

const advantages = [
  {
    title: "Опытные имплантологи",
    description:
      "Врачи-имплантологи с опытом более 15 лет выполняют сложные случаи и работают в связке с ортопедами и гнатологами для длительного результата."
  },
  {
    title: "Современные имплантационные системы",
    description:
      "Используем импланты Straumann, Nobel Biocare, Osstem и Dentsply Sirona — официальные поставки и гарантия производителя."
  },
  {
    title: "Цифровая диагностика",
    description:
      "Компьютерная томография, цифровые оттиски, 3D-моделирование прикуса и хирургические шаблоны повышают точность установки."
  },
  {
    title: "Прозрачные цены",
    description:
      "Прайс фиксируется перед лечением — пациент знает стоимость имплантации до начала лечения."
  },
  {
    title: "Комфорт без боли",
    description:
      "Атравматичные методики, седация и индивидуальные планы обезболивания минимизируют реабилитацию и дискомфорт."
  },
  {
    title: "Гарантийное сопровождение",
    description:
      "Мы сопровождаем пациента на всех этапах — от одномоментной имплантации до протезирования и годовых осмотров."
  }
] as const;

const stages = [
  {
    title: "Диагностика и план",
    text: "Команда клиники «Альтамед-С» в Одинцово проводит консультацию, КТ, определяет объём костной ткани и форму улыбки."
  },
  {
    title: "Подготовка и одномоментная установка",
    text: "При достаточном объёме костной ткани выполняется одномоментная имплантация в Одинцово — установка импланта в день удаления зуба."
  },
  {
    title: "Остеоинтеграция и временные конструкции",
    text: "Имплант приживается в течение 2–4 месяцев, используем временные коронки для эстетики и сохранения дикции."
  },
  {
    title: "Протезирование и контроль",
    text: "Изготавливаем индивидуальные коронки или мосты, проводим гнатологическую настройку и выдаём гарантийный паспорт."
  }
] as const;


const indications = [
  "Отсутствие одного или нескольких зубов в эстетической зоне",
  "Полная адентия, необходимость несъёмной конструкции",
  "Невозможность установки мостов из-за отсутствия опор",
  "Неудобство съёмных протезов, нижний протез на имплантах",
  "Атрофия костной ткани — показания к одноэтапной имплантации",
  "Периодонтит и корни зубов, не подлежащих лечению"
] as const;

const contraindications = [
  "Декомпенсированные системные заболевания",
  "Острые воспалительные процессы в полости рта",
  "Беременность и период лактации (временные ограничения)",
  "Онкологические заболевания в активной фазе",
  "Нарушения свертываемости крови без коррекции",
  "Несоблюдение гигиены и рекомендаций врача"
] as const;

const reviewsSummary = [
  {
    title: "Реальные отзывы из Одинцово",
    text: "Запрос «имплантация зубов Одинцово отзывы» подтверждается историями пациентов: они отмечают безболезненность процедуры, внимательное отношение и понятный план восстановления."
  },
  {
    title: "Стабильные результаты",
    text: "Импланты приживаются без осложнений, а временные коронки устанавливаются в день операции, что соответствует ожиданиям по запросу «имплантация зубов в Одинцово цены отзывы»."
  },
  {
    title: "Комфортная реабилитация",
    text: "После имплантации в Одинцове пациенты отмечают минимальный отёк; врачи на связи 24/7 и дают подробные инструкции по уходу."
  }
] as const;

const faqItems = [
  {
    question: "Сколько стоит имплантация зубов в Одинцово в клинике «Альтамед-С»?",
    answer:
      "Стоимость зависит от выбранной системы имплантов и объёма подготовки. Базовая цена начинается от 55 000 ₽ за имплант с установкой. Окончательный план лечения формируется после обследования и фиксируется в договоре."
  },
  {
    question: "Выполняете ли вы одномоментную имплантацию?",
    answer:
      "Да, наши имплантологи проводят одномоментную имплантацию, когда в день удаления устанавливается имплант. Методика показана при достаточном объёме костной ткани и позволяет сократить сроки лечения."
  },
  {
    question: "Сколько времени занимает приживление импланта?",
    answer:
      "Средние сроки остеоинтеграции составляют 2–4 месяца на нижней челюсти и 3–6 месяцев на верхней. При использовании систем Straumann или Nobel Biocare период может сократиться до 6–8 недель."
  },
  {
    question: "Есть ли гарантия на импланты?",
    answer:
      "Мы предоставляем гарантию производителя на имплант (до пожизненной) и клиническую гарантию на работу врача. При соблюдении рекомендаций срок службы импланта измеряется десятилетиями."
  }
] as const;

export default async function ImplantationPage() {
  const liveServices = await loadImplantationPriceServices();
  const rows: ImplantationServiceRow[] = liveServices.map((item, i) => ({
    key: `${String(item.serviceId ?? item.id ?? item.code ?? i)}-${String(item.categoryId ?? "")}`,
    name: item.name,
    priceLabel: formatImplantationPriceLabel(item),
  }));
  return (
    <div className="flex flex-col min-h-full bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    href="/services"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2"
                  >
                    Услуги
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    Имплантация зубов
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Имплантация зубов в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Современные имплантационные системы, одномоментная имплантация и гарантированный результат под контролем опытных стоматологов в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/yslugi/implant.webp" 
                alt="Имплантация зубов" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Имплантация в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает полный комплекс имплантации зубов в Одинцово — от
                диагностики и подготовки до протезирования и гарантийного сопровождения. Мы применяем
                передовые методики, цифровые технологии и учитываем гнатологические особенности, чтобы
                вернуть пациенту улыбку и уверенность.
              </p>
              <p>
                Врач-имплантолог составляет персональный план лечения, учитывая особенности прикуса,
                состояние кости и пожелания пациента. У нас можно установить импланты по классической
                схеме или выбрать одномоментную имплантацию, когда новый имплант ставят сразу после
                удаления зуба.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость имплантации в Одинцово
                фиксируется заранее, а пациенты получают подробную смету с поэтапным планом лечения.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персонализированный протокол имплантации с учётом прикуса, состояния кости и эстетики улыбки.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Подготовку и сопровождение у команды узких специалистов: имплантолога, ортопеда, гнатолога и гигиениста.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Цифровое планирование операции, проверка посадки импланта по 3D-модели и пошаговый фотоотчёт.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Контрольный график визитов после имплантации, рекомендации по уходу и профилактике осложнений.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества имплантации в «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Имплантация зубов в Одинцово: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              Стоматология «Альтамед-С» — клиника, где имплантация в Одинцове проводится по международным
              протоколам. Мы принимаем пациентов из Одинцово и всего Одинцовского городского округа, поэтому
              запрос «одинцово имплантация область» полностью закрывает наши услуги.
            </p>
            <p>
              Прайс ниже отвечает на популярные поисковые запросы Wordstat: «имплантация зубов в Одинцово цены»,
              «имплантация зубов в Одинцово цены отзывы», «Одинцово имплантация цена». Мы регулярно обновляем
              данные, чтобы стоимость имплантации одинцово оставалась прозрачной и понятной.
            </p>
            <p>
              Наши пациенты отмечают, что «имплантация зубов Одинцово отзывы» в точности описывают результат:
              аккуратная работа хирургической команды и детальное сопровождение. Если вы ищете стоматологию,
              где «стоматология имплантация Одинцово» — это не просто слоган, а комплексная услуга, записывайтесь
              на консультацию имплантолога или ознакомьтесь с другими направлениями на{" "}
              <Link href="/services/dentistry" className="text-emerald-600 hover:text-emerald-700 underline">
                странице стоматологии
              </Link>
              .
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Имплантация одинцово включает классические протоколы и одномоментные решения для тех, кому важно восстановить зубы за короткий срок.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Имплантация зубов в одинцове с учётом прикуса и эстетики гарантирует удобство и естественный результат.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Имплантация зубов в Одинцово цены отзывы — сочетание точной сметы и реального опыта пациентов, которыми мы делимся на консультациях.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Этапы имплантации зубов в Одинцово
              </h2>
              <div className="space-y-4">
                {stages.map((stage, index) => (
                  <div key={stage.title} className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#4A5568] text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="ml-4 text-lg font-semibold text-gray-900">{stage.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{stage.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Показания и противопоказания</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#4A5568] mb-2">Показания</h4>
                  <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                    {indications.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#4A5568] mb-2">Противопоказания</h4>
                  <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                    {contraindications.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="w-2 h-2 bg-[#E53E3E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Перед имплантацией наши врачи-имплантологи в Одинцово проводят расширенное обследование и, при
                необходимости, подготавливают ткани — лечат воспаления и укрепляют костную основу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-12 bg-white scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Цены на имплантацию зубов в Одинцово</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Стоимость имплантации в клинике «Альтамед-С» формируется индивидуально, но мы фиксируем цены в
            договоре, чтобы пациент точно понимал итоговую сумму.
          </p>
          <ImplantationFullPriceClient rows={rows} />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов об имплантации зубов в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsSummary.map((review) => (
              <div key={review.title} className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{review.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы об имплантации зубов в Одинцово
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                  <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                    {item.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Имплантация зубов в Одинцово — начните с бесплатного плана лечения
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость имплантации, подобрать
                подходящую систему имплантов и получить индивидуальный план с учётом ваших пожеланий.
              </p>
            </div>
            <Link
              href="https://online.altamed-c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Клиника «Альтамед-С» — имплантация зубов в Одинцово",
                url: "https://altamed-c.ru/services/implantation",
                image: "https://altamed-c.ru/images/yslugi/implant.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "312"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Имплантация зубов",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Имплантация зубов в Одинцово: одномоментная и классическая имплантация, современные системы имплантов, 3D-планирование, гарантия и положительные отзывы пациентов.",
                sameAs: [
                  "https://altamed-c.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

