import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { formatDieteticsPriceLabel, loadDieteticsPriceServices } from "./load-dietetics-services";

const WORDSTAT_KEYWORDS: string[] = [
  "диетолог одинцово",
  "диетолог в одинцове",
  "консультация диетолога одинцово",
  "диетолог одинцово цена",
  "врач диетолог одинцово",
  "диетолог для похудения одинцово",
  "лечебное питание одинцово",
  "составление рациона одинцово",
  "диетолог клиника одинцово",
  "запись к диетологу одинцово"
];

export const metadata: Metadata = {
  title: "Диетолог в Одинцово | Консультация, снижение веса, лечебное питание — «Альтамед-С»",
  description:
    "Врач-диетолог в Одинцово: первичная и повторная консультация, индивидуальный рацион, снижение веса, лечебное питание при заболеваниях ЖКТ, диабете и аллергии. Запись онлайн.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dietetics"
  },
  openGraph: {
    title: "Диетолог в Одинцово — консультация и план питания | «Альтамед-С»",
    description:
      "Консультация диетолога в Одинцово: снижение веса, лечебные диеты, составление рациона при заболеваниях. Опытные специалисты, понятные рекомендации, поддержка на каждом этапе.",
    url: "https://altamed-c.ru/services/dietetics",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/yslugi/Gastroenterology.webp",
        width: 1200,
        height: 630,
        alt: "Консультация диетолога в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

const advantages = [
  {
    title: "Врачи-диетологи с медицинским образованием",
    description:
      "Специалисты с высшим медицинским образованием и сертификацией по диетологии составляют рационы с учётом анализов, диагнозов и образа жизни — не «модные диеты», а научно обоснованное питание."
  },
  {
    title: "Индивидуальный подход",
    description:
      "План питания формируется после опроса, при необходимости — с учётом результатов анализов и заключений гастроэнтеролога, эндокринолога и аллерголога для безопасного и устойчивого результата."
  },
  {
    title: "Снижение веса без стресса",
    description:
      "Рацион подбирается так, чтобы вы не голодали: достаточный объём клетчатки, белка и правильные жиры помогают сохранять сытость и энергию при дефиците калорий."
  },
  {
    title: "Лечебное питание при заболеваниях",
    description:
      "Коррекция питания при гастрите, панкреатите, диабете, подагре, пищевой непереносимости и аллергии — в соответствии с клиническими рекомендациями и назначениями лечащего врача."
  },
  {
    title: "Прозрачные цены",
    description:
      "Стоимость консультации и программ питания фиксируется до начала работы — вы знаете, во что обойдётся сопровождение диетолога в Одинцово."
  },
  {
    title: "Поддержка и контроль",
    description:
      "Повторные приёмы и корректировка рациона по ходу лечения помогают удержать результат и адаптировать питание под изменение целей и состояния здоровья."
  }
] as const;

const stages = [
  {
    title: "Первичная консультация и сбор анамнеза",
    text: "Диетолог в Одинцово уточняет цели (снижение веса, лечебное питание, набор массы), привычки питания, аллергии, хронические заболевания и при необходимости направляет на анализы."
  },
  {
    title: "Обследование и анализы (при необходимости)",
    text: "Для точного плана могут понадобиться анализы крови (глюкоза, липиды, ферменты, витамины) и заключения узких специалистов — мы подскажем, что сдать и у кого наблюдаться."
  },
  {
    title: "Составление индивидуального рациона",
    text: "Вы получаете персональный план питания: список продуктов, примерное меню на день/неделю, режим приёмов пищи и рекомендации по приготовлению с учётом вашего образа жизни."
  },
  {
    title: "Повторные приёмы и корректировка",
    text: "На контрольных визитах диетолог оценивает динамику, корректирует калорийность и состав рациона, даёт советы по удержанию веса и формированию привычек."
  }
] as const;

function toUiPrice(label: string, priceIsZero: boolean): string {
  if (priceIsZero) return "Цена по запросу";
  const raw = String(label ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

const indications = [
  "Избыточная масса тела и ожирение — снижение веса под контролем врача",
  "Заболевания ЖКТ — гастрит, панкреатит, холецистит, СРК, целиакия",
  "Сахарный диабет и предиабет — коррекция углеводов и гликемической нагрузки",
  "Подагра, гиперурикемия — ограничение пуринов и подбор продуктов",
  "Пищевая непереносимость и аллергия — исключающие и элиминационные диеты",
  "Беременность и грудное вскармливание — сбалансированный рацион без дефицитов",
  "Спорт и активный образ жизни — питание для набора массы или «сушки» без вреда здоровью"
] as const;

const contraindications = [
  "Острые состояния (инфекции, обострения), требующие стационара",
  "Тяжёлые психические расстройства с отказом от сотрудничества",
  "Отсутствие мотивации и готовности менять привычки (результат будет нестабильным)"
] as const;

const reviewsSummary = [
  {
    title: "Реальные отзывы пациентов из Одинцово",
    text: "Пациенты отмечают, что диетолог в Одинцово в «Альтамед-С» не предлагает жёстких голодовок, а подбирает сытный и разнообразный рацион, который легко соблюдать в повседневной жизни."
  },
  {
    title: "Устойчивое снижение веса",
    text: "Те, кто ищет «диетолог для похудения Одинцово», получают пошаговый план и поддержку: корректировка меню по обратной связи и контроль анализов при необходимости."
  },
  {
    title: "Лечебное питание с учётом диагноза",
    text: "При гастрите, диабете и аллергии врачи составляют рацион в соответствии с клиническими рекомендациями и в связке с вашим лечащим врачом — безопасно и эффективно."
  }
] as const;

const faqItems = [
  {
    question: "Сколько стоит консультация диетолога в Одинцово в «Альтамед-С»?",
    answer:
      "Первичный приём врача-диетолога — от 3 500 ₽, повторный — от 2 800 ₽. Составление меню на 7 дней — от 4 200 ₽, на 14 дней — от 6 500 ₽. Комплексные программы (консультации + рацион + сопровождение) — от 12 000 ₽. Точную стоимость уточняйте в регистратуре или по телефону +7 (495) 255-44-50."
  },
  {
    question: "Чем диетолог отличается от нутрициолога?",
    answer:
      "Диетолог — врач с высшим медицинским образованием и специализацией по диетологии. Он может назначать лечебное питание при заболеваниях, учитывать анализы и диагнозы. Нутрициолог работает с питанием здоровых людей и не заменяет врача. В «Альтамед-С» приём ведут именно врачи-диетологи."
  },
  {
    question: "Нужны ли анализы перед консультацией диетолога?",
    answer:
      "Не обязательны для первой встречи. Диетолог соберёт анамнез и при необходимости порекомендует сдать анализы (глюкоза, липиды, гормоны щитовидной железы, витамины) для более точного плана питания. При наличии хронических заболеваний желательно иметь заключения узких специалистов."
  },
  {
    question: "Как записаться к диетологу в Одинцово?",
    answer:
      "Запись возможна через форму на сайте, по телефону контакт-центра +7 (495) 255-44-50 или через сервис онлайн-записи. Клиника «Альтамед-С» находится в Одинцово; мы принимаем пациентов из Одинцово и Одинцовского городского округа."
  }
] as const;

export default async function DieteticsPage() {
  const services = await loadDieteticsPriceServices();
  const serviceRows = services.map((s, index) => ({
    key: `${String(s.serviceId ?? s.id ?? s.code ?? s.name)}|${String(s.categoryId ?? "")}|${index}`,
    name: s.name,
    priceLabel: formatDieteticsPriceLabel(s),
    priceIsZero: s.priceIsZero === true,
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
                    Диетолог
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
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Диетолог в клинике «Альтамед-С»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Консультации по питанию, снижение веса и лечебные диеты в Одинцово: индивидуальный рацион, поддержка и контроль под руководством врачей-диетологов
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/yslugi/Gastroenterology.webp"
                alt="Консультация диетолога в Одинцово"
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
              <h2 className="text-3xl font-bold text-gray-900">Диетолог в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает консультации врача-диетолога в Одинцово — для снижения веса, лечебного питания при заболеваниях ЖКТ, диабете, подагре и пищевой непереносимости. Мы не предлагаем «чудо-диеты», а составляем индивидуальный рацион на основе анализов, диагнозов и ваших целей.
              </p>
              <p>
                Запросы «диетолог Одинцово», «консультация диетолога Одинцово» и «диетолог для похудения Одинцово» — это как раз про нас: первичный и повторный приёмы, составление меню на 7 и 14 дней, комплексные программы с сопровождением. Врач учитывает образ жизни, аллергии и хронические болезни, чтобы питание было не только эффективным, но и безопасным.
              </p>
              <p>
                Цены на приём диетолога в Одинцово прозрачны — стоимость консультации и программ фиксируется до начала работы. Уточнить актуальный прайс можно в регистратуре или по телефону контакт-центра.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, обращаясь к диетологу в «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персональный план питания с учётом целей, анализов и рекомендаций других врачей.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Лечебное питание при гастрите, панкреатите, диабете, подагре и аллергии — в рамках клинических рекомендаций.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Реалистичное меню на каждый день: сытно, разнообразно и без жёстких запретов, которые невозможно соблюдать долго.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Повторные приёмы для корректировки рациона и закрепления результата.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества консультации диетолога в «Альтамед-С»</h2>
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
            Диетолог в Одинцово: цены и отзывы
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              «Диетолог Одинцово цена» и «диетолог клиника Одинцово» — частые запросы жителей города и области. В «Альтамед-С» приём ведут врачи-диетологи с медицинским образованием: первичная консультация, составление рациона и программы снижения веса с сопровождением. Прайс ниже даёт ориентир по стоимости; актуальные цены уточняйте в регистратуре или по телефону +7 (495) 255-44-50.
            </p>
            <p>
              Отзывы пациентов подтверждают: диетолог в Одинцово в нашей клинике помогает не только снизить вес, но и наладить питание при заболеваниях — без голодовок и нереалистичных ограничений. Если вы ищете «запись к диетологу Одинцово» или «лечебное питание Одинцово», записывайтесь на консультацию через сайт или по телефону.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Консультация диетолога одинцово подходит тем, кто хочет снизить вес с учётом здоровья и привычек.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Составление рациона одинцово — это индивидуальное меню на 7 или 14 дней с учётом калорийности и баланса БЖУ.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Врач диетолог одинцово работает в связке с гастроэнтерологом и эндокринологом при необходимости — комплексный подход к здоровью.
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
                Как проходит приём диетолога в Одинцово
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Когда обращаться к диетологу</h3>
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
                  <h4 className="text-lg font-semibold text-[#4A5568] mb-2">Ограничения</h4>
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
                Перед началом программы снижения веса или лечебного питания диетолог может порекомендовать обследование и консультации узких специалистов — для безопасности и максимального эффекта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Цены на приём диетолога в Одинцово</h2>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl">
            Стоимость консультации и программ питания в «Альтамед-С» фиксируется до начала работы. Указанные цены не являются офертой; актуальный прайс уточняйте в регистратуре или по телефону{" "}
            <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
                <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
              </div>
              <div className="overflow-y-auto max-h-[480px] sm:max-h-[480px]">
                <table className="w-full text-sm sm:text-base table-fixed">
                  <thead className="sticky top-0 z-10 bg-gray-100">
                    <tr>
                      <th className="text-left py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">Услуга</th>
                      <th className="text-right py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceRows.map((s, i) => (
                      <tr key={s.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
                        <td className="py-3.5 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                        <td className="py-3.5 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                          {toUiPrice(s.priceLabel, s.priceIsZero)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm order-1 lg:order-2">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 relative">
                <Image
                  src="/images/promo/task_01kmc5pqv4egd8vgfksjjp1zzd_1774230180_img_1.webp"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="text-gray-700 text-sm mb-1">Заполните форму</p>
              <h3 className="font-bold text-lg text-gray-900 text-center mb-1">«Записаться в клинику»</h3>
              <p className="text-gray-600 text-sm text-center mb-4">чтобы выбрать время приема и уточнить стоимость услуги.</p>
              <p className="text-gray-700 text-sm mb-4">Администратор подберёт врача и удобное время</p>
              <Link
                href="https://online.altamed-c.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium text-sm mb-1 hover:underline"
              >
                Записаться онлайн
              </Link>
              <a href="tel:+74952554450" className="text-gray-700 text-sm mb-6 hover:underline">
                +7 (495) 255-44-50
              </a>
              <Link
                href="https://online.altamed-c.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700"
              >
                Записаться в клинику
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы о диетологе в Одинцово
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
            Частые вопросы о диетологе в Одинцово
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
                Диетолог в Одинцово — запишитесь на консультацию
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на приём к врачу-диетологу в «Альтамед-С», чтобы обсудить цели, получить индивидуальный план питания и уточнить стоимость программ. Мы работаем с снижением веса, лечебным питанием и составлением рациона для всей семьи.
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
                name: "Клиника «Альтамед-С» — диетолог в Одинцово",
                url: "https://altamed-c.ru/services/dietetics",
                image: "https://altamed-c.ru/images/yslugi/Gastroenterology.webp",
                medicalSpecialty: "Nutrition",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 255-44-50",
                priceRange: "₽₽",
                serviceType: "Консультация диетолога, лечебное питание, снижение веса",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Консультация диетолога в Одинцово: снижение веса, лечебное питание при заболеваниях ЖКТ, диабете и аллергии, составление индивидуального рациона. Врачи-диетологи, прозрачные цены, запись онлайн.",
                sameAs: [
                  "https://altamed-c.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>
    </div>
  );
}
