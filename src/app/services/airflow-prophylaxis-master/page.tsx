import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const technologies = [
  {
    title: "AIRFLOW®",
    description:
      "Наконечник AIRFLOW® в сочетании с порошком PLUS эффективно устраняет биоплёнку, пигментированные участки и мягкие зубные отложения. Применение порошка AIRFLOW PLUS делает ненужным использование традиционных ручных инструментов. Отпадает необходимость в резиновых чашечках, щётках и абразивных пастах."
  },
  {
    title: "PERIOFLOW®",
    description:
      "Наконечник PERIOFLOW® в комплексе с порошком PLUS бережно и полностью устраняет поддесневую биоплёнку, прочищает глубокие пародонтальные карманы глубиной от 4 до 9 мм и зоны вокруг имплантатов. Он оптимален для первичной и поддерживающей пародонтальной терапии, а также для предупреждения развития мукозита и периимлантита. Благодаря компактной форме насадки PERIOFLOW обеспечивается безболезненный доступ к пародонтальным карманам, композитным реставрациям и имплантатам без потребности в снятии коронок или разборке ортодонтических конструкций."
  },
  {
    title: "PIEZON® NO PAIN",
    description:
      "Насадка PIEZON® NO PAIN PS даёт возможность полностью безболезненно для пациента устранить остаточные наддесневые и поддесневые зубные отложения."
  }
] as const;

const advantages = [
  {
    title: "Три технологии в одном аппарате",
    description:
      "AIRFLOW® Prophylaxis Master интегрирует три инновационные технологии для всесторонней профессиональной гигиены полости рта."
  },
  {
    title: "100% удаление биоплёнки",
    description:
      "Гарантирует полное устранение биоплёнки, пигментированных участков и зубных отложений без применения ручных инструментов."
  },
  {
    title: "Безболезненная процедура",
    description:
      "Уникальная система подогрева воды даёт возможность настраивать температуру, обеспечивая максимальный комфорт даже для пациентов с повышенной чувствительностью зубов."
  },
  {
    title: "Идеально для детей",
    description:
      "Безболезненный и комфортный процесс делает AIRFLOW® Prophylaxis Master оптимальным выбором для профессиональной гигиены у детей."
  },
  {
    title: "Работа с пародонтальными карманами",
    description:
      "PERIOFLOW® результативно прочищает глубокие пародонтальные карманы от 4 до 9 мм без потребности в хирургическом вмешательстве."
  },
  {
    title: "Безопасность для имплантатов",
    description:
      "Применим для очистки зон вокруг имплантатов без опасности повреждения конструкций."
  }
] as const;

const indications = [
  "Профессиональная гигиена полости рта",
  "Удаление зубного налёта и пигментаций",
  "Профилактика кариеса и заболеваний пародонта",
  "Поддерживающая пародонтальная терапия",
  "Очистка пародонтальных карманов",
  "Гигиена вокруг имплантатов",
  "Профилактика мукозита и периимлантита",
  "Очистка композитных реставраций",
  "Профгигиена у детей",
  "Гигиена для пациентов с повышенной чувствительностью зубов"
] as const;


export default function AirflowProphylaxisMasterPage() {
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
                    AIRFLOW Prophylaxis Master
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
                AIRFLOW® Prophylaxis Master — профессиональная гигиена по протоколу GBT в Одинцово
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Швейцарское оборудование для полного устранения биоплёнки, пигментированных участков и зубных отложений. 
                Безболезненный процесс для взрослых и детей в клинике «Альтамед-С» в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/yslugi/air flow.webp" 
                alt="AIRFLOW Prophylaxis Master" 
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
              <h2 className="text-3xl font-bold text-gray-900">Профессиональная гигиена по протоколу GBT</h2>
              <p>
                Профессиональную гигиену по протоколу GBT можно выполнить, применяя специализированное оборудование. 
                Речь идёт об аппарате AIRFLOW® Prophylaxis Master. В данном материале мы подробно расскажем о его возможностях.
              </p>
              <p>
                AIRFLOW® Prophylaxis Master – оригинальное швейцарское оборудование для выполнения профессиональной 
                гигиены полости рта и полного устранения биоплёнки. Это инновационное решение для терапии кариеса, 
                предупреждения болезней пародонта и поддерживающего лечения.
              </p>
              <p>
                Он интегрирует возможность применения сразу трёх технологий: AIRFLOW®, PERIOFLOW® и PIEZON® NO PAIN.
              </p>
              <p>
                Ранее для выполнения подобных процедур требовалось различное оборудование и инструментарий. С появлением 
                AIRFLOW® Prophylaxis Master все эти манипуляции можно выполнить на одном устройстве, и что особенно важно, 
                в максимально комфортных для пациента условиях.
              </p>
              <p>
                На уровень комфорта процедуры влияет уникальная система подогрева воды, дающая возможность 
                настраивать и контролировать её температуру. AIRFLOW® Prophylaxis Master – это оптимальный выбор 
                для профессиональной гигиены у детей и пациентов с повышенной чувствительностью зубов.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Профессиональную гигиену по актуальному протоколу GBT с применением оригинального швейцарского оборудования.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Безболезненный процесс благодаря системе подогрева воды и настраиваемой температуре.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Всестороннее устранение биоплёнки, пигментированных участков и зубных отложений без применения ручных инструментов.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Прочистку пародонтальных карманов и зон вокруг имплантатов без опасности повреждения конструкций.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Примеры работ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] overflow-hidden shadow-md border border-gray-100">
              <img 
                src="/images/yslugi/1primer.webp" 
                alt="Пример работы AIRFLOW Prophylaxis Master" 
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-[20px] overflow-hidden shadow-md border border-gray-100">
              <img 
                src="/images/yslugi/2primer.webp" 
                alt="Пример работы AIRFLOW Prophylaxis Master" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Три технологии в одном аппарате</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div key={tech.title} className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества AIRFLOW® Prophylaxis Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Показания к применению</h2>
              <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
                <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                  {indications.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Особенности процедуры</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Профессиональная гигиена с применением AIRFLOW® Prophylaxis Master выполняется 
                  без использования ручных инструментов, что обеспечивает повышенный комфорт и минимальную травматичность.
                </p>
                <p>
                  Уникальная система подогрева воды даёт возможность настраивать температуру, гарантируя максимальный 
                  комфорт даже для пациентов с повышенной чувствительностью зубов.
                </p>
                <p>
                  Процедура оптимальна для детей, поскольку проходит безболезненно и не создаёт дискомфортных ощущений.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Советы врача после профгигиены на аппарате AIRFLOW Prophylaxis Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Избегайте окрашивающих продуктов в течение 2–3 часов</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                После процедуры эмаль становится более склонной к окрашиванию. В этот период важно отказаться от употребления чая, кофе, свеклы, ягод, красного вина, соков с красителями и курения. Это способствует сохранению чистоты и естественного цвета зубов после чистки.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Не используйте отбеливающие зубные пасты 2–3 дня</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Данные пасты включают абразивные вещества, способные увеличить чувствительность зубов после устранения налёта и камня. Предпочтительнее применять мягкие пасты с нейтральной формулой или разработанные для чувствительных зубов.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">При чувствительности используйте реминерализующие средства</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Если после процедуры возникла чувствительность к холодному, горячему или кислому, используйте гели и пасты с фтором, кальцием или гидроксиапатитом. Они способствуют восстановлению минерального баланса эмали и уменьшению неприятных ощущений.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Используйте мягкую щетку и чистите зубы аккуратно</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Мягкая зубная щётка не повреждает эмаль и дёсны после процедуры. Чистите зубы круговыми движениями без интенсивного нажима, в особенности в пришеечной области и межзубных промежутках.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Соблюдайте ежедневную гигиену полости рта</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Профессиональная чистка не заменяет систематический домашний уход. Чистите зубы утром и вечером, применяйте зубную нить или ирригатор для межзубных пространств, полощите рот после приёма пищи. Это способствует сохранению результата процедуры на длительный срок.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Повторяйте процедуру не реже 1 раза в 6 месяцев</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Даже при качественном домашнем уходе со временем формируется зубной налёт и камень. Систематическая гигиена у стоматолога предупреждает воспаления дёсен, кариес и поддерживает здоровье всей полости рта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ответы на популярные вопросы</h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  В чём разница между аппаратной чисткой AIRFLOW и самостоятельной чисткой зубов?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Домашний уход за зубами способен справиться исключительно с поверхностными мягкими отложениями. Аппаратная обработка на AIRFLOW Prophylaxis Master демонстрирует существенно более высокую результативность. Благодаря специальной методике комбинированной подачи жидкости, газовой смеси и тонкодисперсного абразива оборудование качественно ликвидирует не только видимые отложения, но и пигментированные зоны, а также скопления в поддесневой области. Подобного результата нельзя получить при ручной обработке, даже при задействовании электрощёток и водных ирригаторов. Оборудование справляется с самыми проблемными участками, что имеет особую важность для предотвращения стоматологических патологий.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Подходит ли процедура на AIRFLOW пациентам с чувствительными зубами?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Безусловно, обработка на AIRFLOW абсолютно безвредна для людей с гиперчувствительностью зубов. В оборудовании задействован слабоабразивный состав на базе эритритола, который деликатно воздействует на зубную поверхность, не причиняя вреда защитному слою. Дополнительно, возможность изменения температурного режима жидкости и силы воздушного потока обеспечивает комфортное проведение манипуляции. При выявлении излишней чувствительности зубного ряда доктор в состоянии скорректировать рабочие настройки оборудования, полностью убрав любые неприятные проявления.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Справляется ли AIRFLOW с удалением зубного камня?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Оборудование AIRFLOW качественно ликвидирует мягкие и пигментированные зубные отложения, включая те, что находятся в поддесневой зоне. Но для ликвидации минерализованных зубных отложений (конкрементов) в процессе одного гигиенического сеанса дополнительно применяется интегрированный в комплекс ультразвуковой инструмент PIEZON. Это даёт шанс целиком убрать и мягкие, и твёрдые зубные отложения, применяя единый аппарат. В итоге манипуляция выходит предельно щадящей и продуктивной.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Разрешена ли чистка на аппарате пациентам с брекетами или имплантами?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Да, обработка на AIRFLOW рекомендована людям с ортодонтическими системами, дентальными имплантами, винирами и искусственными коронками. Оборудование даёт шанс без риска прочистить поверхности ортодонтических элементов и участки вблизи имплантатов, где особенно интенсивно накапливаются зубные отложения. Это имеет значение для предупреждения воспалительных процессов в дёснах и нарушений в тканях, окружающих имплант. Профильные наконечники оборудования и возможность изменения напора гарантируют предельно осторожный и безвредный процесс.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Разрешена ли чистка на аппарате детям и беременным женщинам?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Да, обработка на AIRFLOW допустима для детей (обычно с шестилетнего возраста) и женщин в период беременности. Оборудование безвредно, не провоцирует термического повреждения тканей и не оказывает общего влияния на организм. Для детского возраста применяются облегчённые режимы и менее агрессивный абразивный состав. У беременных нередко усиливается формирование зубных отложений и развивается воспалительная реакция в дёснах, поэтому деликатная аппаратная обработка способствует снижению вероятности осложнений и нормализации общего состояния ротовой полости.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какова продолжительность процедуры на AIRFLOW и как часто её нужно проходить?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Сеанс аппаратной обработки на AIRFLOW продолжается обычно от получаса до часа, что определяется объёмом зубных отложений и количеством зубных единиц. Специалисты советуют проходить подобную обработку раз в шесть месяцев. Но при предрасположенности к формированию зубных конкрементов, воспалительным явлениям в дёснах или при использовании ортодонтических систем доктор может посоветовать проходить обработку с периодичностью каждые три-четыре месяца. Постоянное применение оборудования способствует сохранению здоровья зубов и продлению эксплуатационного периода пломбировочных материалов, протезных конструкций и имплантатов.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Необходима ли аппаратная чистка перед стоматологическим лечением?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Да, выполнение аппаратной обработки ротовой полости представляет собой существенный подготовительный момент перед стоматологической терапией. Без ликвидации зубных отложений и конкрементов доктору трудно определить реальное состояние зубных единиц и дёсенных тканей. Зачастую кариозные дефекты маскируются под пигментированными отложениями, а воспалительные явления в дёснах препятствуют выполнению лечебных действий. Обработка расширяет визуальный доступ к зубам, уменьшает микробную обсеменённость и создаёт асептические условия для терапевтических манипуляций. Особенно существенно выполнить обработку перед такими процедурами, как устранение кариеса, фиксация пломбировочных материалов, ортопедическое лечение, эндодонтическая терапия или подготовительные мероприятия к имплантации. Это даёт шанс не только улучшить диагностическую точность, но и повысить результативность, долговечность и безопасность стоматологической терапии.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какое значение имеет аппаратная гигиена для ортодонтического лечения?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Аппаратная обработка зубов обладает критической важностью на этапе подготовки к ортодонтической коррекции. Накопление зубных отложений и конкрементов на зубных поверхностях способно снизить качество крепления брекет-систем или прозрачных элайнеров, а также увеличить риск развития воспалительных процессов в дёснах после фиксации аппаратуры. Обработка на AIRFLOW даёт возможность бережно и полноценно прочистить все зубные поверхности, в том числе контактные зоны между зубами и прикорневую область, что имеет особую значимость на этапе подготовки к ортодонтической коррекции. В процессе активной коррекции посредством брекет-систем или элайнеров обработку советуют проходить с определённой периодичностью — каждые три-четыре месяца. Это даёт возможность мониторить состояние зубов, своевременно обнаруживать патологические изменения и предотвращать нежелательные последствия, например, потерю минералов эмалью или воспалительные процессы в пародонтальных тканях.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Разрешена ли аппаратная гигиена при воспалении дёсен или их кровоточивости?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Аппаратная обработка на AIRFLOW не просто допустима, но и крайне важна при воспалительных явлениях в дёснах и их кровоточивости. Зачастую источником этих проявлений служит накопление зубных отложений и поддесневых конкрементов, которые невозможно ликвидировать в домашних условиях. Терапия воспалительных процессов в дёснах стартует с ликвидации инфекционного очага, что неосуществимо без аппаратной обработки зубов. Оборудование даёт шанс деликатно прочистить зоны под дёснами, уменьшить микробную обсеменённость и смягчить течение воспалительной реакции. После манипуляции кровоточивость, как правило, снижается или полностью исчезает. Но важно осознавать: обработка представляет собой только начальную стадию, и последующая терапия дёсен может подразумевать противовоспалительные медикаменты, ополаскивающие растворы или дополнительные манипуляции, назначенные доктором.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Почему домашняя чистка зубов не может заменить аппаратную гигиену?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Ручной уход за зубами представляет собой необходимую ежедневную манипуляцию, однако он не способен заменить аппаратную обработку. Даже при корректной методике очистки, применении водных ирригаторов и флоссов невозможно целиком ликвидировать отложения в сложнодоступных зонах — в контактных участках между зубами, вдоль дёсенного края, на язычной стороне зубных рядов. В указанных местах постепенно формируются зубные конкременты, которые прочно сцепляются с зубными поверхностями. Исключительно аппаратная обработка — к примеру, на AIRFLOW Prophylaxis Master — даёт возможность целиком ликвидировать все отложения, отшлифовать зубные поверхности и нормализовать микробный состав ротовой полости. Это имеет особую важность для предупреждения кариозных поражений, воспалительных процессов в дёснах и прочих стоматологических патологий.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Зачем нужна гигиена молочных зубов, если они всё равно сменятся?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Временные зубы играют существенную роль в становлении окклюзии, росте челюстных структур и формировании речевой функции у ребёнка. Их состояние непосредственно сказывается на состоянии зачатков постоянных зубных единиц. При пренебрежении уходом за временными зубами отложения и кариозные поражения способны спровоцировать раннее выпадение зубов, что нарушит физиологическое прорезывание постоянных зубных единиц. Помимо этого, инфекционный процесс из кариозно изменённых временных зубов может распространяться на прилегающие структуры и зачатки, провоцируя воспалительные реакции и осложнения. Систематическая аппаратная обработка зубов в детском возрасте способствует ликвидации отложений, предупреждению кариозных поражений и приучению ребёнка к правильному уходу. Внимание к временным зубам представляет собой вложение в здоровье постоянных зубных единиц в перспективе.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Связана ли чистота зубов с запахом изо рта?
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
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Безусловно, состояние зубов имеет прямую связь с качеством дыхания. Основной источник зловонного дыхания — это пищевые остатки и микроорганизмы, которые накапливаются в отложениях на зубных поверхностях, языке и в контактных зонах между зубами. В процессе разложения указанных остатков формируются серосодержащие вещества с отталкивающим ароматом. Даже при систематической очистке зубов отложения в сложнодоступных зонах постепенно становятся причиной зловонного дыхания. Аппаратная обработка зубов даёт шанс ликвидировать все бактериальные источники, включая поддесневые конкременты и пигментированные отложения. Это заметно улучшает качество дыхания и формирует чувство чистоты, которое сохраняется более продолжительное время по сравнению с ручной очисткой зубов.
              </div>
            </details>
          </div>
        </div>
      </section>


      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Запишитесь на профессиональную гигиену по протоколу GBT
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Квалифицированные гигиенисты клиники «Альтамед-С» выполнят процедуру профессиональной гигиены с применением 
                аппарата AIRFLOW® Prophylaxis Master. Безболезненно, комфортно и результативно.
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
                name: "Клиника «Альтамед-С» — AIRFLOW Prophylaxis Master в Одинцово",
                url: "https://altamed-c.ru/services/airflow-prophylaxis-master",
                image: "https://altamed-c.ru/images/yslugi/air flow.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "156"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Профессиональная гигиена полости рта",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Профессиональная гигиена полости рта по протоколу GBT с использованием швейцарского аппарата AIRFLOW® Prophylaxis Master. Безболезненная процедура для взрослых и детей в Одинцово.",
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

