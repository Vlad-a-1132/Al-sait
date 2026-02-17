"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from '@/components/AppointmentForm';

export default function SurgeryPage() {
  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Услуги хирургии по прайсу (коды и цены актуальны)
  const surgeryServices = [
    {
      category: "Консультации хирурга",
      services: [
        { code: "B01.057.001", name: "Прием (осмотр, консультация) врача-хирурга первичный", price: "3 360 руб." },
        { code: "B01.057.002", name: "Прием (осмотр, консультация) врача-хирурга повторный", price: "3 150 руб." },
      ]
    },
    {
      category: "Биопсии и взятие материала",
      services: [
        { code: "A11.01.001", name: "Биопсия кожи", price: "3 050 руб." },
        { code: "A11.01.005", name: "Биопсия узелков, тофусов", price: "3 360 руб." },
        { code: "A11.01.006", name: "Получение материала для бактериологического исследования пунктата (биоптата) пролежня", price: "420 руб." },
        { code: "A11.01.007", name: "Биопсия тканей пролежня", price: "1 890 руб." },
        { code: "A11.01.008", name: "Пункция пролежня", price: "840 руб." },
        { code: "A11.01.009", name: "Соскоб кожи", price: "530 руб." },
        { code: "A11.01.010", name: "Инъекционное введение лекарственных препаратов в очаг поражения кожи", price: "950 руб." },
        { code: "A11.01.014", name: "Накожное применение лекарственных препаратов", price: "950 руб." },
        { code: "A11.01.016", name: "Получение мазка-отпечатка с поверхности кожи", price: "420 руб." },
        { code: "A11.01.017", name: "Пункция гнойного очага", price: "950 руб." },
        { code: "A11.01.018", name: "Взятие образца биологического материала из очагов поражения на патологический грибок", price: "420 руб." },
        { code: "A11.01.019", name: "Получение соскоба с эрозивно-язвенных элементов кожи и слизистых оболочек", price: "530 руб." },
        { code: "A11.02.001", name: "Биопсия мышцы", price: "5 150 руб." },
        { code: "A11.02.002", name: "Внутримышечное введение лекарственных препаратов", price: "530 руб." },
        { code: "A11.04.005", name: "Пункция синовиальной сумки сустава", price: "4 620 руб." },
        { code: "A11.04.005.001", name: "Пункция синовиальной сумки сустава под контролем ультразвукового исследования", price: "4 310 руб." },
        { code: "A11.04.006", name: "Околосуставное введение лекарственных препаратов", price: "2 730 руб." },
        { code: "A11.06.001", name: "Получение цитологического препарата лимфатического узла", price: "2 630 руб." },
        { code: "A11.06.001.001", name: "Пункция лимфатического узла под контролем ультразвукового исследования", price: "3 360 руб." },
        { code: "A11.06.002", name: "Биопсия лимфатического узла", price: "3 360 руб." },
        { code: "A11.06.002.001", name: "Биопсия лимфатического узла под контролем ультразвукового исследования", price: "4 620 руб." },
        { code: "A11.09.003", name: "Пункция плевральной полости", price: "6 830 руб." },
        { code: "A11.09.003.001", name: "Внутриплевральное введение лекарственных препаратов", price: "7 670 руб." },
        { code: "A11.09.003.002", name: "Пункция плевральной полости под контролем ультразвукового исследования", price: "8 720 руб." },
        { code: "A11.20.010.002", name: "Биопсия новообразования молочной железы аспирационная вакуумная под контролем рентгенографического исследования", price: "3 360 руб." },
        { code: "A11.20.010.003", name: "Пункция новообразования молочной железы прицельная пункционная под контролем ультразвукового исследования", price: "4 310 руб." },
        { code: "A11.20.023", name: "Получение отделяемого из соска молочной железы", price: "420 руб." },
        { code: "A11.22.001", name: "Биопсия щитовидной или паращитовидной железы", price: "1 890 руб." },
        { code: "A11.22.001.001", name: "Биопсия щитовидной или паращитовидной железы под контролем ультразвукового исследования", price: "4 830 руб." },
        { code: "A11.22.002", name: "Пункция щитовидной или паращитовидной железы", price: "1 890 руб." },
        { code: "A11.22.002.001", name: "Пункция щитовидной или паращитовидной железы под контролем ультразвукового исследования", price: "4 830 руб." },
        { code: "A11.30.013", name: "Биопсия опухолей, опухолеподобных образований мягких тканей", price: "2 630 руб." },
        { code: "A11.30.014", name: "Трепанбиопсия опухолей наружных локализаций, лимфатических узлов под визуальным контролем", price: "4 200 руб." },
        { code: "A11.30.024", name: "Пункция мягких тканей", price: "2 100 руб." },
        { code: "A11.30.024.001", name: "Пункция мягких тканей под контролем ультразвукового исследования", price: "3 050 руб." },
        { code: "A11.30.025", name: "Замена удлинителя катетера для перитонеального диализа", price: "840 руб." },
      ]
    },
    {
      category: "Уход и пособия",
      services: [
        { code: "A14.08.002", name: "Пособие при трахеостоме", price: "1 580 руб." },
        { code: "A14.08.003", name: "Уход за назогастральным зондом, носовыми канюлями и катетером", price: "1 050 руб." },
        { code: "A14.12.001", name: "Уход за сосудистым катетером", price: "1 580 руб." },
        { code: "A14.12.004", name: "Уход за перитонеальным катетером", price: "1 580 руб." },
        { code: "A14.16.001", name: "Пособие при гастростомах", price: "1 050 руб." },
        { code: "A14.16.002", name: "Уход за назогастральным зондом", price: "1 050 руб." },
        { code: "A14.17.001", name: "Пособие при илеостоме", price: "1 470 руб." },
        { code: "A14.17.002", name: "Уход за интестинальным зондом", price: "1 050 руб." },
        { code: "A14.17.004", name: "Обучение уходу за илеостомой", price: "1 470 руб." },
        { code: "A14.18.003", name: "Обучение уходу за колостомой", price: "2 630 руб." },
        { code: "A14.19.003", name: "Постановка газоотводной трубки", price: "530 руб." },
        { code: "A14.19.004", name: "Удаление копролита", price: "9 030 руб." },
      ]
    },
    {
      category: "Наложение повязок",
      services: [
        { code: "A15.01.001", name: "Наложение повязки при нарушении целостности кожных покровов", price: "1 890 руб." },
        { code: "A15.01.001.001", name: "Наложение повязки при ожогах", price: "1 890 руб." },
        { code: "A15.01.002", name: "Наложение повязки при гнойных заболеваниях кожи и подкожной клетчатки", price: "2 520 руб." },
        { code: "A15.01.003", name: "Наложение повязки при операции в челюстно-лицевой области", price: "1 890 руб." },
        { code: "A15.02.001", name: "Наложение повязки при заболеваниях мышц", price: "2 730 руб." },
        { code: "A15.03.001", name: "Наложение повязки при переломах костей", price: "2 730 руб." },
        { code: "A15.03.002", name: "Наложение иммобилизационной повязки при переломах костей", price: "3 150 руб." },
        { code: "A15.03.007", name: "Наложение шины при переломах", price: "2 630 руб." },
        { code: "A15.03.009", name: "Наложение повязки при операциях на костях", price: "1 580 руб." },
        { code: "A15.03.010", name: "Снятие гипсовой повязки (лонгеты)", price: "1 580 руб." },
        { code: "A15.03.010.001", name: "Снятие циркулярной гипсовой повязки", price: "2 730 руб." },
        { code: "A15.04.001", name: "Наложение повязки при вывихах (подвывихах) суставов", price: "2 730 руб." },
        { code: "A15.04.002", name: "Наложение иммобилизационной повязки при вывихах (подвывихах) суставов", price: "3 150 руб." },
        { code: "A15.04.003", name: "Наложение повязки при операциях на суставах", price: "1 580 руб." },
        { code: "A15.06.001", name: "Наложение повязки при нарушении целостности лимфатической системы", price: "1 580 руб." },
        { code: "A15.09.001", name: "Наложение окклюзионной повязки на грудную клетку", price: "1 890 руб." },
        { code: "A15.12.001", name: "Наложение повязки при повреждении (ранении) сосудов", price: "1 580 руб." },
        { code: "A15.12.002", name: "Эластическая компрессия нижних конечностей", price: "840 руб." },
        { code: "A15.12.002.001", name: "Прерывистая пневмокомпрессия нижних конечностей", price: "2 100 руб." },
        { code: "A15.12.003", name: "Эластическая компрессия верхних конечностей", price: "840 руб." },
        { code: "A15.19.001", name: "Наложение повязки при операциях на прямой кишке", price: "3 360 руб." },
        { code: "A15.20.001", name: "Наложение повязки при операциях на женских половых органах и органах малого таза", price: "3 360 руб." },
        { code: "A15.21.001", name: "Наложение повязки при операциях на наружных мужских половых органах", price: "3 360 руб." },
        { code: "A15.22.001", name: "Наложение повязки при операциях на железах внутренней секреции", price: "3 360 руб." },
        { code: "A15.30.001", name: "Наложение повязки при полостных операциях органов брюшной полости", price: "3 360 руб." },
        { code: "A15.30.002", name: "Наложение повязки при полостных операциях органов грудной полости", price: "3 360 руб." },
        { code: "A15.30.002.001", name: "Наложение повязки после торакостомии", price: "3 360 руб." },
        { code: "A15.30.003", name: "Пособие по наложению бандажа и/или фиксирующих устройств при бедренной грыже", price: "1 890 руб." },
        { code: "A15.30.004", name: "Пособие по наложению бандажа при пупочной грыже", price: "1 890 руб." },
        { code: "A15.30.006", name: "Наложение повязки при пролежнях III и/или IV степеней тяжести", price: "1 890 руб." },
        { code: "A15.30.008", name: "Наложение повязки при операциях на органах шеи", price: "1 890 руб." },
        { code: "A15.30.010", name: "Наложение повязки при термических и химических ожогах", price: "1 890 руб." },
      ]
    },
    {
      category: "Хирургические манипуляции и иссечения",
      services: [
        { code: "A16.01.001", name: "Удаление поверхностно расположенного инородного тела", price: "2 630 руб." },
        { code: "A16.01.002", name: "Вскрытие панариция", price: "5 990 руб." },
        { code: "A16.01.003", name: "Некрэктомия", price: "3 780 руб." },
        { code: "A16.01.003.002", name: "Некрэктомия гнойно-некротического очага стопы (голени)", price: "5 150 руб." },
        { code: "A16.01.004.01", name: "Хирургическая обработка раны или инфицированной ткани", price: "2 630 руб." },
        { code: "A16.01.005", name: "Иссечение поражения кожи", price: "3 780 руб." },
        { code: "A16.01.005.005", name: "Широкое иссечение новообразования кожи с реконструктивно-пластическим компонентом", price: "7 670 руб." },
        { code: "A16.01.006", name: "Иссечение поражения подкожно-жировой клетчатки", price: "4 200 руб." },
        { code: "A16.01.008", name: "Сшивание кожи и подкожной клетчатки", price: "3 360 руб." },
        { code: "A16.01.008.001", name: "Наложение вторичных швов", price: "5 150 руб." },
        { code: "A16.01.009", name: "Ушивание открытой раны (без кожной пересадки)", price: "3 360 руб." },
        { code: "A16.01.010.002", name: "Пластика раны местными тканями", price: "5 150 руб." },
        { code: "A16.01.011", name: "Вскрытие фурункула (карбункула)", price: "3 360 руб." },
        { code: "A16.01.012", name: "Вскрытие и дренирование флегмоны (абсцесса)", price: "4 310 руб." },
        { code: "A16.01.012.001", name: "Вскрытие флегмоны (абсцесса) стопы (голени)", price: "5 150 руб." },
        { code: "A16.01.015", name: "Удаление телеангиоэктазий", price: "5 150 руб." },
        { code: "A16.01.016", name: "Удаление атеромы", price: "4 200 руб." },
        { code: "A16.01.017", name: "Удаление доброкачественных новообразований кожи", price: "3 360 руб." },
        { code: "A16.01.017.001", name: "Удаление доброкачественных новообразований кожи методом электрокоагуляции", price: "1 890 руб." },
        { code: "A16.01.018", name: "Удаление доброкачественных новообразований подкожно-жировой клетчатки", price: "4 200 руб." },
        { code: "A16.01.019.01", name: "Вскрытие инфильтрата (угревого элемента) кожи и подкожно-жировой клетчатки", price: "3 360 руб." },
        { code: "A16.01.020", name: "Удаление контагиозных моллюсков", price: "2 630 руб." },
        { code: "A16.01.021", name: "Удаление татуировки", price: "7 670 руб." },
        { code: "A16.01.023", name: "Иссечение рубцов кожи", price: "5 250 руб." },
        { code: "A16.01.023.001", name: "Иссечение рубцов передней брюшной стенки", price: "6 830 руб." },
        { code: "A16.01.023.002", name: "Иссечение келлоидных рубцов кисти", price: "5 150 руб." },
        { code: "A16.01.027", name: "Удаление ногтевых пластинок", price: "3 360 руб." },
        { code: "A16.01.027.001", name: "Удаление ногтевой пластинки с клиновидной резекцией матрикса", price: "5 780 руб." },
        { code: "A16.01.027.002", name: "Удаление ногтевой пластинки при помощи лазера", price: "5 150 руб." },
        { code: "A16.01.028", name: "Удаление мозоли", price: "4 100 руб." },
        { code: "A16.01.029", name: "Некротомия", price: "2 100 руб." },
        { code: "A16.30.069", name: "Снятие послеоперационных швов", price: "2 000 руб." },
      ]
    },
    {
      category: "Анестезия",
      services: [
        { code: "B01.003.004.001", name: "Местная анестезия", price: "840 руб." },
        { code: "B01.003.004.002.01", name: "Проводниковая анестезия", price: "1 470 руб." },
        { code: "B01.003.004.004", name: "Аппликационная анестезия", price: "950 руб." },
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-800">Хирургия</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Хирургия в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современные хирургические методы лечения в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/yslugi/hirurg.webp"
                    alt="Хирургия"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Хирургия</div>
                <Link 
                  href="https://online.altamed-c.ru/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Десктопная версия */}
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <Image
                  src="/images/yslugi/hirurg.webp"
                  alt="Хирургия"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Information Block */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[30px] overflow-hidden shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg">
                  <Image
                    src="/images/yslugi/hirurg.webp"
                    alt="Хирург"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Консультация врача-хирурга в Одинцово
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Опытные хирурги нашей клиники оказывают полный спектр хирургических услуг: от консультаций и диагностики до оперативных вмешательств различной сложности. Мы используем современное оборудование и передовые методики лечения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему Альтамед-С*/}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему «Альтамед-С»?
          </h2>
          {/* Мобильная версия - вертикальный список */}
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>
          {/* Десктопная версия - сетка */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
            Хирург в Одинцово - услуги диагностики и лечения
          </h2>
          <p className="text-gray-600 text-sm mb-6 text-center max-w-2xl mx-auto">
            Цены носят справочный характер. Актуальную стоимость уточняйте в регистратуре или по телефону{' '}
            <a href="tel:+74952554450" className="text-emerald-600 hover:underline font-medium">+7 (495) 255-44-50</a>.
          </p>
          <div className="space-y-12" itemScope itemType="https://schema.org/ItemList">
            {surgeryServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-200">
                  <h3 className="text-xl font-semibold text-emerald-800">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service) => (
                      <article
                        key={service.code}
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                        itemScope
                        itemType="https://schema.org/MedicalProcedure"
                      >
                        <h4 className="font-medium text-gray-900 mb-2 text-sm leading-relaxed" itemProp="name">
                          {service.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-600 font-semibold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <span itemProp="price">{service.price}</span>
                            <span itemProp="priceCurrency" content="RUB" className="sr-only">RUB</span>
                          </span>
                        <Link 
                          href="https://online.altamed-c.ru/" 
                          target="_blank"
                          rel="noopener noreferrer"
                            className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
                          >
                            Записаться
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons for consultation */}
      <section className="py-16 bg-white" aria-labelledby="reasons-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Поводы обращения к врачу-хирургу
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">боли в области живота, груди, конечностей;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">травмы и ранения;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">наличие новообразований на коже;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">воспалительные процессы;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">гнойные заболевания (фурункулы, абсцессы);</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">проблемы с заживлением ран;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">грыжи различной локализации;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изменения в области рубцов;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">нарушения функции суставов;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">необходимость удаления новообразований;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">проблемы с швами после операций;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">необходимость биопсии тканей;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}

