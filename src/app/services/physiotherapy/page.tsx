"use client";

import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export default function PhysiotherapyPage() {
  const prices: Array<{ name: string; price: number }> = [
    { name: "Осмотр (консультация) врача-физиотерапевта", price: 2630 },
    { name: "Интерференцтерапия при заболеваниях кожи и подкожно-жировой клетчатки", price: 1260 },
    { name: "Миоэлектростимуляция", price: 1260 },
    { name: "Воздействие магнитными полями при костной патологии", price: 1260 },
    { name: "Электрофорез лекарственных препаратов при патологии полости рта и зубов", price: 1370 },
    { name: "Магнитотерапия при патологии полости рта и зубов", price: 1260 },
    { name: "Дарсонвализация при патологии полости рта", price: 1260 },
    { name: "Воздействие магнитными полями при патологии полости рта и зубов", price: 1260 },
    { name: "Электрофорез лекарственных препаратов при заболеваниях верхних дыхательных путей", price: 1370 },
    { name: "Электрофорез лекарственных препаратов эндоназальный", price: 1370 },
    { name: "Дарсонвализация при заболеваниях верхних дыхательных путей", price: 1260 },
    { name: "Аэрозольтерапия при заболеваниях верхних дыхательных путей", price: 1260 },
    { name: "Электрофорез лекарственных препаратов при патологии легких", price: 1370 },
    { name: "Электроаэрозольвоздействие при заболеваниях нижних дыхательных путей", price: 1260 },
    { name: "Аэрозольтерапия при заболеваниях нижних дыхательных путей", price: 1260 },
    { name: "Воздействие с помощью галакамеры при заболеваниях нижних дыхательных путей", price: 1260 },
    { name: "Дарсонвализация местная при заболеваниях крупных кровеносных сосудов", price: 1260 },
    { name: "Электрофорез лекарственных препаратов при нарушениях микроциркуляции", price: 1370 },
    { name: "Электрофорез лекарственных препаратов при заболеваниях желудка и двенадцатиперстной кишки", price: 1370 },
    { name: "Переменное магнитное поле при заболеваниях женских половых органов", price: 1260 },
    { name: "Электрофорез лекарственных препаратов при заболеваниях женских половых органов", price: 1370 },
    { name: "Электрофорез лекарственных препаратов при заболеваниях мужских половых органов", price: 1370 },
    { name: "Электрофорез лекарственных препаратов при заболеваниях желез внутренней секреции", price: 1370 },
    { name: "Чрескожная электронейростимуляция при заболеваниях периферической нервной системы", price: 1260 },
    { name: "Гальванотерапия при заболеваниях периферической нервной системы", price: 1260 },
    { name: "Токи Бернара при заболеваниях периферической нервной системы", price: 1260 },
    { name: "Электрофорез лекарственных препаратов при заболеваниях периферической нервной системы", price: 1370 },
    { name: "Воздействие синусоидальными модулированными токами (СМТ-терапия) при заболеваниях периферической нервной системы", price: 1260 },
    { name: "Воздействие магнитными полями при заболеваниях периферической нервной системы", price: 1260 },
    { name: "Воздействие высокочастотными электромагнитными полями (на аппарате ТЕКАР)", price: 1890 },
    { name: "Многофункциональная электростимуляция скелетных мышц", price: 1260 },
    { name: "Электростимуляция периферических двигательных нервов и скелетных мышц", price: 1260 },
    { name: "Внутриушной электрофорез лекарственных препаратов при заболеваниях органа слуха", price: 1370 },
    { name: "Дарсонвализация органа слуха", price: 1260 },
    { name: "Электрофорез лекарственных препаратов при заболеваниях органа зрения", price: 1370 },
    { name: "Низкочастотная магнитотерапия на орган зрения", price: 1050 },
    { name: "Гальванотерапия при заболеваниях органа зрения", price: 1260 },
    { name: "Электростимуляция мочеточников при заболеваниях почек и мочевыделительного тракта", price: 1260 },
    { name: "Электростимуляция мочевого пузыря", price: 1260 },
    { name: "Введение лекарственных препаратов методом электрофореза при неуточненных заболеваниях", price: 1370 },
    { name: "Диадинамотерапия (ДДТ)", price: 1260 },
    { name: "Воздействие синусоидальными модулированными токами (СМТ)", price: 1260 },
    { name: "Воздействие интерференционными токами", price: 1260 },
    { name: "Баровоздействие - прессотерапия конечностей, пневмокомпрессия", price: 1580 },
    { name: "Воздействие электрическим полем ультравысокой частоты (ЭП УВЧ)", price: 1370 },
    { name: "Воздействие переменным магнитным полем (ПеМП)", price: 1260 },
    { name: "Воздействие магнитными полями при заболеваниях мышц", price: 1260 },
    { name: "Электрофорез импульсными токами", price: 1370 },
    { name: "Электрофорез диадинамическими токами (ДDТ-форез)", price: 1370 },
    { name: "Электрофорез синусоидальными модулированными токами (СМТ-форез)", price: 1370 },
    { name: "Общая магнитотерапия", price: 1260 },
    { name: "Лазерофорез", price: 1260 },
    { name: "Аэрозольтерапия", price: 1260 },
    { name: "Электростимуляция лицевого и/или тройничного нерва, мимических и/или жевательных мышц", price: 1260 },
    { name: "Воздействие магнитными полями Высокоинтенсивная магнитотерапия (SIS)", price: 1890 },
    { name: "Ультрафонофорез лекарственный", price: 1370 },
    { name: "Воздействие переменным электростатическим полем (на аппарате ЭЛГОС)", price: 1260 },
    { name: "Магнитофорез", price: 1370 },
    { name: "Ультразвуковое лечение кожи", price: 1260 },
    { name: "Ультрафонофорез лекарственный кожи", price: 1370 },
    { name: "Воздействие низкоинтенсивным лазерным излучением при заболеваниях мышц", price: 1260 },
    { name: "Ультрафонофорез лекарственный при заболеваниях мышц", price: 1370 },
    { name: "Воздействие ультразвуком при заболеваниях суставов", price: 1260 },
    { name: "Ультрафонофорез лекарственный при заболеваниях суставов", price: 1370 },
    { name: "Воздействие низкоинтенсивным лазерным излучением при заболеваниях суставов", price: 1260 },
    { name: "Ультрафиолетовое облучение при заболеваниях суставов", price: 1050 },
    { name: "Лазерная физиотерапия челюстно-лицевой области", price: 1260 },
    { name: "Ультрафиолетовое облучение ротоглотки", price: 1050 },
    { name: "Воздействие лазерным низкоинтенсивным излучением на область десен", price: 1260 },
    { name: "Воздействие ультразвуком при заболеваниях верхних дыхательных путей", price: 1260 },
    { name: "Воздействие лазерным низкоинтенсивным излучением на область зева", price: 1260 },
    { name: "Воздействие лазерным низкоинтенсивным излучением эндоназально", price: 1260 },
    { name: "Ультрафонофорез лекарственный при заболеваниях верхних дыхательных путей", price: 1370 },
    { name: "Воздействие коротким ультрафиолетовым светом при заболеваниях верхних дыхательных путей", price: 1050 },
    { name: "Воздействие низкоинтенсивным лазерным излучением при заболеваниях верхних дыхательных путей", price: 1260 },
    { name: "Лазеротерапия при заболеваниях женских половых органов", price: 1370 },
    { name: "Воздействие низкоинтенсивным лазерным излучением вагинально", price: 1370 },
    { name: "Воздействие низкоинтенсивным лазерным излучением при заболеваниях периферической нервной системы", price: 1370 },
    { name: "Воздействие ультразвуковое при заболеваниях периферической нервной системы", price: 1370 },
    { name: "Лекарственный ультрафонофорез при заболеваниях периферической нервной системы", price: 1370 },
    { name: "Светолечение коротким ультрафиолетовым излучением наружного уха", price: 1050 },
    { name: "Ультрафиолетовое облучение (местное) при заболеваниях глаза и его придаточных пазух", price: 1050 },
    { name: "Воздействие ультразвуковое при заболеваниях органов зрения", price: 1050 },
    { name: "Ультрафонофорез препаратов при заболеваниях органов зрения", price: 1370 },
    { name: "Воздействие ультразвуковое при заболеваниях почек и мочевыделительного тракта", price: 1370 },
    { name: "Воздействие коротким ультрафиолетовым излучением (КУФ)", price: 1050 },
    { name: "Воздействие поляризованным светом", price: 1260 },
    { name: "Высокоинтенсивная лазеротерапия (1зона)", price: 3150 },
    { name: "Высокоинтенсивная лазеротерапия (2 зоны) High Intensity Laser Therapy (HILT)", price: 5040 },
  ];

  const indications = [
    "опорно-двигательного аппарата и его повреждениях",
    "сердечно-сосудистой системы",
    "желудочно-кишечного тракта",
    "нервной системы",
    "ЛОР и органов дыхания",
    "челюстно-лицевой области",
    "моче-половой системы",
    "кожи",
    "эндокринной системы и др.",
  ];

  const bemerIndications = [
    "острые и хронические воспалительные заболевания любой локализации;",
    "острая и хроническая боль;",
    "отеки;",
    "состояния после операций, травм, переломов;",
    "заболевания позвоночника и суставов;",
    "различные обменные нарушения;",
    "вегетососудистая дистония;",
    "ослабление иммунитета.",
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Banner */}
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-[20px] overflow-hidden h-[180px] md:h-[320px]">
            <Image
              src="/images/yslugi/fizio.webp"
              alt="Физиотерапия"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10">
              <h1 className="text-2xl md:text-4xl font-bold">Физиотерапия в Одинцово</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Физиотерапия в общем комплексе лечебно-восстановительных мероприятий занимает важное место и является его неотъемлемой частью, находя всё более широкое применение при заболеваниях:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4 ml-4">
            {indications.map((indication, idx) => (
              <li key={idx}>{indication}</li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Физиотерапия способствует быстрейшему разрешению патологического процесса, заживлению тканей, активному восстановлению функций и работоспособности.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В медицинском центре Альтамед-С в Одинцово применяются разнообразные методы физиотерапии:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4 ml-4">
            <li>Электролечение всеми видами токов от аппаратов «Ionoson-Expert», «Галатея» и «Элфор Проф», фонофорез лекарственных веществ</li>
            <li>Дарсонвализация</li>
            <li>Ультрозвуковая терапия (ультрафонофорез)</li>
            <li>Магнитотерапия системой «Бемер 3000»</li>
            <li>Вакуумный массаж аппаратом «Физиовак-эксперт»</li>
            <li>Лазеро- и магнитолазеротерапия аппаратом «матрикс»</li>
            <li>Аэрозольтерапия галоингалятором «Галонеб»</li>
            <li>Ингаляции тепловлажные, лекарственные</li>
            <li>Низкочастотная электростатическая терапия (глубокая осцилляция)</li>
            <li>КУФ-терапия</li>
            <li>теплолечение (парафиновые аппликации)</li>
            <li>УВЧ-терапия</li>
            <li>цветотерапия аппаратом «Биоптрон»</li>
            <li>ручной массаж</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            С учётом индивидуальных и возрастных особенностей, переносимости физических факторов, наличия сопутствующих заболеваний, и при отсутствии противопоказаний физиотерапевт медицинского центра Альтамед-С в Одинцово назначит вам эффективное лечение.
          </p>
        </div>
      </section>

      {/* Additional physiotherapy procedures */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Дополнительные процедуры физиотерапии
          </h2>
          
          {/* Мобильная версия */}
          <div className="md:hidden space-y-4">
            <Link href="/services/lymph-e-massage" className="bg-[#DAF2FF] rounded-[20px] p-4 h-[140px] flex relative overflow-hidden">
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-bold">Пневмомассажер Лимфа-Э</h3>
                <button className="bg-white text-black rounded-full px-6 py-2 w-fit text-sm">
                  Подробнее
                </button>
              </div>
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <Link href="/services/elgos-therapy" className="bg-[#FFD9E0] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Аппарат глубокой осцилляции «ЭЛГОС»</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/tekar-therapy" className="bg-[#FADFFF] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Текар-терапия</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/hilt-laser" className="bg-[#DBF0E9] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Высокоинтенсивный лазер HILT</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/sis-magnetotherapy" className="bg-[#FFF6C1] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Высокоинтенсивная магнитотерапия (SIS)</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
            </div>
          </div>
          
          {/* Десктопная версия */}
          <div className="hidden md:flex flex-col lg:flex-row gap-6 justify-center max-w-[1300px] mx-auto px-4 lg:px-0">
            {/* Левый большой блок */}
            <Link href="/services/lymph-e-massage" className="bg-[#DAF2FF] rounded-[20px] w-full lg:w-[593px] h-[300px] md:h-[374px] flex flex-shrink-0 relative overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col justify-between z-10 w-full lg:w-[60%]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Пневмомассажер Лимфа-Э</h3>
                </div>
                
                <button className="bg-white text-black rounded-full px-8 py-2 w-fit">
                  Подробнее
                </button>
              </div>
              
              <div className="hidden lg:block absolute bottom-0 right-0 h-full w-[100%]">
                <Image 
                  src="/images/yslugi/Pneumatic massager Lymfa-E.webp" 
                  alt="Пневмомассажер Лимфа-Э" 
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            
            {/* Правая колонка с 4 блоками */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              {/* Верхний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 1 */}
                <Link href="/services/elgos-therapy" className="bg-[#FFD9E0] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
                    <Image 
                      src="/images/yslugi/Deep oscillation d2evice.webp" 
                      alt="Аппарат глубокой осцилляции ЭЛГОС" 
                      width={120} 
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Аппарат глубокой осцилляции «ЭЛГОС»</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
                
                {/* Блок 2 */}
                <Link href="/services/tekar-therapy" className="bg-[#FADFFF] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image 
                      src="/images/yslugi/Tekar therapy.webp" 
                      alt="Текар-терапия" 
                      width={180} 
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Текар-терапия</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
              </div>
              
              {/* Нижний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 3 */}
                <Link href="/services/hilt-laser" className="bg-[#DBF0E9] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image 
                      src="/images/yslugi/High Intensity Laser HILT.webp" 
                      alt="Высокоинтенсивный лазер HILT" 
                      width={280} 
                      height={140}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1">
                      Высокоинтенсивный<br />лазер HILT
                    </h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
                
                {/* Блок 4 */}
                <Link href="/services/sis-magnetotherapy" className="bg-[#FFF6C1] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image
                      src="/images/yslugi/High Intensity Magnetic Therapy (SIS).webp" 
                      alt="Высокоинтенсивная магнитотерапия SIS" 
                      width={185} 
                      height={140}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">
                      Высокоинтенсивная магнитотерапия (SIS)
                    </h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEMER Therapy */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">БЕМЕР-терапия</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Уникальная система для низкоинтенсивной магнитотерапии BEMER из Германии применяется в медицинском центре Альтамед-С в Одинцово.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Особенность методики:</h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Создаваемое прибором магнитное поле имитирует электромагнитные колебания, присущие здоровым органам и клеткам человека, создавая самые благоприятные условия для выздоровления.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Показаниями для лечения служат:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4 ml-4">
            {bemerIndications.map((indication, idx) => (
              <li key={idx}>{indication}</li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Особенно рекомендована терапия для ослабленных, часто болеющих пациентов. Для детей, беременных женщин и пожилых людей.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            При этом:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4 ml-4">
            <li>фактор невозможно передозировать;</li>
            <li>отсутствует привыкание;</li>
            <li>генерализованно активируются защитные силы организма;</li>
            <li>применяется в любом периоде болезни и у всех возрастных групп.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            БЕМЕР-терапия ориентирована на энергетическое поддержание организма, его естественных механизмов регулирования и самоисцеления, предусмотренных самой природой, с тем, чтобы они могли выполнять свои задачи.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            БЕМЕР-терапия помогает организму бороться с нарушениями и устраняет их.
          </p>
        </div>
      </section>

      {/* Image block with electrodes */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-[20px] overflow-hidden bg-gray-100">
            <Image
              src="/images/yslugi/fizio.webp"
              alt="Процедура физиотерапии"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Цены</h3>
          <p className="text-sm text-gray-500 mb-4 max-w-3xl">
            Обратите внимание: цены на услуги могут меняться. Рекомендуем уточнять актуальную стоимость в регистратуре или по телефону{' '}
            <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные цены не являются офертой.
          </p>
          <div className="overflow-x-auto bg-white rounded-[20px] border border-gray-100 shadow-sm">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Наименование</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Цена, руб.</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">{row.price.toLocaleString("ru-RU")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}

