'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function OtolaryngologyPage() {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Услуги отоларингологии по прайсу (коды и цены актуальны)
  const otolaryngologyServices = [
    {
      category: 'Консультации ЛОР-врачей',
      services: [
        { code: 'B01.028.001', name: 'Прием (осмотр, консультация) врача-оториноларинголога первичный', price: '3470' },
        { code: 'B01.028.002', name: 'Прием (осмотр, консультация) врача-оториноларинголога повторный', price: '3260' },
        { code: 'B01.046.001', name: 'Прием (осмотр, консультация) врача сурдолога-оториноларинголога первичный', price: '4200' },
        { code: 'B01.046.002', name: 'Прием (осмотр, консультация) врача сурдолога-оториноларинголога повторный', price: '3470' },
        { code: 'B04.046.001', name: 'Диспансерный прием (осмотр, консультация) врача сурдолога-оториноларинголога', price: '3890' },
        { code: 'B04.046.002', name: 'Профилактический прием (осмотр, консультация) врача сурдолога-оториноларинголога', price: '3890' },
        { code: 'B04.028.001', name: 'Диспансерный прием (осмотр, консультация) врача-оториноларинголога', price: '3150' },
        { code: 'B04.028.002', name: 'Профилактический прием (осмотр, консультация) врача-оториноларинголога', price: '3150' }
      ]
    },
    {
      category: 'Инъекции и блокады',
      services: [
        { code: 'A11.07.011', name: 'Иньекционное введение лекарственных препаратов в челестно-лицевую область', price: '1790' },
        { code: 'A11.08.005', name: 'Внутриносовые блокады', price: '1790' },
        { code: 'A11.08.006', name: 'Глоточные блокады с введением лекарственных препаратов', price: '2420' },
        { code: 'A11.08.007', name: 'Заушные блокады с лекарственными препаратами', price: '2840' },
        { code: 'A11.08.019', name: 'Эндоларингеальное введение лекарственных препаратов', price: '2000' },
        { code: 'A11.25.002', name: 'Введение лекарственных препаратов в наружный слуховой проход', price: '950' },
        { code: 'A11.05.004', name: 'Введение лекарственных средств в барабанную полость', price: '2420' },
        { code: 'A11.07.022', name: 'Аппликация лекарственного препарата на слизистую оболочку полости рта', price: '1890' }
      ]
    },
    {
      category: 'Биопсии и заборы материала',
      services: [
        { code: 'A11.08.001', name: 'Биопсия слизистой оболочки гортани', price: '3150' },
        { code: 'A11.08.002', name: 'Биопсия слизистой оболочки полости носа', price: '3150' },
        { code: 'A11.08.003', name: 'Биопсия слизистой оболочки носоглотки', price: '2420' },
        { code: 'A11.08.004', name: 'Пункция околоносовых пазух', price: '4100' },
        { code: 'A11.08.008', name: 'Биопсия слизистой гортани', price: '3150' },
        { code: 'A11.08.010', name: 'Получение материала из верхних дыхательных путей', price: '1790' },
        { code: 'A11.08.010.001', name: 'Получение мазков со слизистой оболочки носоглотки', price: '1790' },
        { code: 'A11.08.010.002', name: 'Получение мазков со слизистой оболочки ротоглотки', price: '1790' },
        { code: 'A11.07.001', name: 'Биопсия слизистой полости рта', price: '2310' },
        { code: 'A11.07.002', name: 'Биопсия языка', price: '2310' },
        { code: 'A11.07.003', name: 'Биопсия миндалины, зева и аденоидов', price: '2630' },
        { code: 'A11.07.008', name: 'Пункция кисты полости рта', price: '2420' },
        { code: 'A11.25.001', name: 'Сбор паразитов или микроорганизмов из уха', price: '3150' },
        { code: 'A11.25.005', name: 'Получение отделяемого из наружного слухового прохода', price: '2000' },
        { code: 'A11.25.006', name: 'Взятие крови из мочки уха', price: '1790' }
      ]
    },
    {
      category: 'Промывания и инстилляции',
      services: [
        { code: 'A11.08.020', name: 'Анемизация слизистой носа', price: '840' },
        { code: 'A11.08.021', name: 'Промывка околоносовых пазух и носоглотки', price: '2310' },
        { code: 'A11.08.021.001', name: 'Промывка околоносовых пазух и носа методом вакуумного перемещения', price: '2420' },
        { code: 'A11.08.022', name: 'Катетеризация придаточных пазух носа', price: '2420' },
        { code: 'A11.08.023', name: 'Инстилляция лекарственных препаратов при заболевании верхних дыхательных путей', price: '1790' },
        { code: 'A16.08.016', name: 'Промывание лакун миндалин', price: '2000' },
        { code: 'A16.08.023', name: 'Промывание верхнечелюстной пазухи', price: '2420' },
        { code: 'A11.25.003', name: 'Промывание среднего уха', price: '3570' }
      ]
    },
    {
      category: 'Хирургические манипуляции',
      services: [
        { code: 'A16.08.006', name: 'Механическая остановка кровотечения (передняя и задняя тампонада носа)', price: '4100' },
        { code: 'A16.08.006.001', name: 'Передняя тампонада носа', price: '3150' },
        { code: 'A16.08.006.002', name: 'Задняя тампонада носа', price: '4100' },
        { code: 'A16.08.007', name: 'Удаление инородного тела глотки или гортани', price: '3050' },
        { code: 'A16.08.009', name: 'Удаление полипов носовых ходов', price: '5670' },
        { code: 'A16.08.010.001', name: 'Подслизистая вазотомия нижних носовых раковин', price: '3150' },
        { code: 'A16.08.011', name: 'Удаление инородного тела носа', price: '3050' },
        { code: 'A16.08.012', name: 'Вскрытие паратонзиллярного абсцесса', price: '4410' },
        { code: 'A16.08.014', name: 'Репозиция костей носа', price: '4620' },
        { code: 'A16.08.018', name: 'Вскрытие фурункула носа', price: '4830' },
        { code: 'A16.08.054', name: 'Удаление новообразования глотки', price: '5670' },
        { code: 'A16.08.054.001', name: 'Удаление новообразования глотки Эндоларингеальное', price: '3150' },
        { code: 'A16.08.055', name: 'Иссечение синехий и атрезий носа', price: '3150' }
      ]
    },
    {
      category: 'Манипуляции с ушами',
      services: [
        { code: 'A16.25.001', name: 'Дренирование фурункула наружного уха', price: '4940' },
        { code: 'A16.25.002', name: 'Кюретаж наружного уха', price: '3360' },
        { code: 'A16.25.003', name: 'Первичная хирургическая обработка раны наружного уха', price: '3890' },
        { code: 'A16.25.004', name: 'Наложения швов на ушную раковину и наружный слуховой проход', price: '3890' },
        { code: 'A16.25.005', name: 'Сшивание наружного уха', price: '4830' },
        { code: 'A16.25.007', name: 'Удаление ушной серы', price: '1790' },
        { code: 'A16.25.008', name: 'Удаление инородного тела из слухового отверстия', price: '3050' },
        { code: 'A16.25.011', name: 'Миринготомия', price: '4830' },
        { code: 'A16.25.012', name: 'Продувание слуховой трубы', price: '1370' },
        { code: 'A16.25.015', name: 'Первичная хирургическая обработка раны уха', price: '4100' },
        { code: 'A16.25.036', name: 'Катетеризация слуховой трубы', price: '1000' },
        { code: 'A16.25.036.001', name: 'Катетеризация слуховой трубы с введением лекарственных препаратов', price: '2630' },
        { code: 'A16.25.040', name: 'Иссечение тканей наружного уха', price: '3890' },
        { code: 'A16.25.042', name: 'Удаление доброкачественного новообразования наружного слухового прохода', price: '4940' }
      ]
    },
    {
      category: 'Диагностические исследования',
      services: [
        { code: 'A02.25.001', name: 'Осмотр органа слуха (отоскопия)', price: '1790' },
        { code: 'A02.25.001.001', name: 'Видеоотоскопия', price: '2420' },
        { code: 'A02.25.001.002', name: 'Осмотр барабанной перепонки с использованием микроскопа', price: '840' },
        { code: 'A02.08.001', name: 'Осмотр верхних дыхательных путей с использованием дополнительных источников света, шпателя и зеркал', price: '2000' },
        { code: 'A02.08.002', name: 'Исследование дыхательной и обонятельной функции (ольфактометрия)', price: '2420' },
        { code: 'A02.08.003', name: 'Стоматофарингоскопия', price: '1790' },
        { code: 'A03.08.001', name: 'Ларингоскопия', price: '2000' },
        { code: 'A03.08.001.001', name: 'Видеоларингоскопия', price: '2420' },
        { code: 'A03.08.001.002', name: 'Ларингоскопия с использованием стробоскопа', price: '4830' },
        { code: 'A03.08.002', name: 'Фарингоскопия', price: '1790' },
        { code: 'A03.08.002.001', name: 'Эпифарингоскопия', price: '2000' },
        { code: 'A03.08.002.002', name: 'Эпифарингоскопия видеоэндоскопическая', price: '2420' },
        { code: 'A03.08.004', name: 'Риноскопия', price: '1790' },
        { code: 'A03.08.004.001', name: 'Эндоскопическая эндоназальная ревизия полости носа, носоглотки', price: '2420' },
        { code: 'A03.08.004.002', name: 'Видеориноскопия', price: '2420' },
        { code: 'A03.08.004.003', name: 'Задняя риноскопия', price: '1790' },
        { code: 'A03.08.005', name: 'Фиброларингоскопия', price: '2420' },
        { code: 'A03.08.005.003', name: 'Микроларингоскопия', price: '2420' },
        { code: 'A03.08.006', name: 'Синусоскопия', price: '2420' },
        { code: 'A03.08.007', name: 'Эпифаринголарингоскопия', price: '3150' },
        { code: 'A03.25.001', name: 'Вестибулометрия', price: '2420' },
        { code: 'A03.25.002', name: 'Проведение калорической пробы', price: '4100' },
        { code: 'A03.25.003', name: 'Исследование органов слуха с помощью камертона', price: '1790' },
        { code: 'A03.25.004', name: 'Определение проходимости евстахиевой трубы', price: '1790' },
        { code: 'A03.25.005', name: 'Отоэндоскопия', price: '1790' }
      ]
    },
    {
      category: 'УЗИ и пункции',
      services: [
        { code: 'A04.08.001', name: 'Ультразвуковое исследование околоносовых пазух', price: '1370' },
        { code: 'A04.08.002', name: 'Ультразвуковое исследование гортани', price: '2100' },
        { code: 'A11.03.002', name: 'Пункция синусов', price: '2420' }
      ]
    },
    {
      category: 'Исследования слуха',
      services: [
        { code: 'A05.25.002', name: 'Исследование вызванной отоакустической эмиссии', price: '3150' },
        { code: 'A12.25.001', name: 'Тональная аудиометрия', price: '2100' },
        { code: 'A12.25.004', name: 'Исследование слуха у новорожденного с помощью отоакустической эмиссии', price: '3150' },
        { code: 'A12.25.005', name: 'Импедансометрия', price: '2420' },
        { code: 'A12.25.006', name: 'Исследование функций слуховой трубы', price: '2420' },
        { code: 'A12.25.007', name: 'Тимпанометрия', price: '2100' },
        { code: 'A12.08.002', name: 'Исследование барофункции уха и придаточных пазух носа', price: '2630' }
      ]
    },
    {
      category: 'Физиотерапия и массаж',
      services: [
        { code: 'A21.25.001', name: 'Рефлексотерапия при заболеваниях органа слуха', price: '3150' },
        { code: 'A21.25.002', name: 'Массаж барабанных перепонок', price: '2520' },
        { code: 'A22.08.001', name: 'Ультразвуковая дезинтеграция нижних носовых раковин', price: '2520' }
      ]
    },
    {
      category: 'Сбор анамнеза и осмотры',
      services: [
        { code: 'A01.25.001', name: 'Сбор анамнеза и жалоб при патологии органа слуха', price: '1790' },
        { code: 'A01.25.002', name: 'Визуальное исследование при патологии органа слуха', price: '1680' },
        { code: 'A01.25.003', name: 'Пальпация при патологии органа слуха', price: '790' },
        { code: 'A01.25.004', name: 'Перкуссия при патологии органа слуха', price: '790' },
        { code: 'A01.27.001', name: 'Сбор анамнеза и жалоб при патологии органа обоняния', price: '1790' },
        { code: 'A01.27.002', name: 'Визуальное исследование при патологии органа обоняния', price: '1680' },
        { code: 'A01.27.003', name: 'Пальпация при патологии органа обоняния', price: '790' },
        { code: 'A01.27.004', name: 'Перкуссия при патологии органа обоняния', price: '790' },
        { code: 'A01.07.001', name: 'Сбор анамнеза и жалоб при патологии полости рта', price: '1790' },
        { code: 'A01.07.002', name: 'Визуальное исследование при патологии полости рта', price: '1680' },
        { code: 'A01.07.003', name: 'Пальпация органов полости рта', price: '790' },
        { code: 'A01.07.004', name: 'Перкуссия при патологии полости рта', price: '790' },
        { code: 'A01.08.001', name: 'Сбор анамнеза и жалоб при заболеваниях верхних дыхательных путей', price: '1790' },
        { code: 'A01.08.002', name: 'Визуальное исследование верхних дыхательных путей', price: '1680' },
        { code: 'A01.08.003', name: 'Пальпация при заболеваниях верхних дыхательных путей', price: '740' },
        { code: 'A01.08.004', name: 'Перкуссия при заболеваниях верхних дыхательных путей', price: '740' }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">
                    Услуги
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Отоларингология</span>
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
                Отоларингология в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Диагностика и лечение заболеваний уха, горла и носа у взрослых и детей в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/images allergoly/otolaryngologia.webp" 
                alt="Отоларингология" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Почему Альтамед-С*/}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед-С»?</h2>
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium text-left pt-2">Лечение в соответствии с мировыми клиническими рекомендациями</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium text-left pt-2">Комплексная оценка заболевания и прогноза лечения</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium text-left pt-2">Современное диагностическое оборудование и собственная диагностическая лаборатория</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium text-left pt-2">Высокий уровень сервиса и взвешенная ценовая политика</p></div>
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium">Лечение в соответствии с мировыми клиническими рекомендациями</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium">Комплексная оценка заболевания и прогноза лечения</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium">Современное диагностическое оборудование и собственная диагностическая лаборатория</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium">Высокий уровень сервиса и взвешенная ценовая политика</p></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги отоларингологии
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр диагностических и лечебных процедур для заболеваний ЛОР-органов
            </p>
            <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
              <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
            </p>
          </div>

          <div className="space-y-8">
            {otolaryngologyServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service) => (
                      <div 
                        key={service.code}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                              {service.name}
                            </h4>
                            <div className="text-emerald-600 font-semibold text-lg">
                              {service.price} ₽
                            </div>
                          </div>
                          <Link 
                            href="#appointment"
                            className="ml-3 bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700 transition-colors duration-300 flex-shrink-0"
                          >
                            Записаться
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Отоларинголог в Одинцово - услуги диагностики и лечения ЛОР-органов
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                В клинике «Альтамед-с» ведут прием опытные отоларингологи, которые занимаются диагностикой и лечением заболеваний уха, горла и носа у взрослых и детей. Мы используем современное оборудование и передовые методики для обеспечения качественной медицинской помощи.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наши специалисты проводят комплексное обследование ЛОР-органов, включая эндоскопические исследования, аудиометрию, рентгенографию околоносовых пазух и другие диагностические процедуры. Лечение осуществляется как консервативными, так и хирургическими методами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#appointment"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 text-center"
                >
                  Записаться на прием
                </Link>
                <Link 
                  href="tel:+74951234567"
                  className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-300 text-center"
                >
                  Позвонить
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/images allergoly/otolaryngologia.webp" 
                alt="Отоларингология" 
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы об отоларингологии
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExpanded('diagnosis')}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Диагностика ЛОР-заболеваний</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['diagnosis'] ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems['diagnosis'] && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    В клинике «Альтамед-с» проводится комплексная диагностика заболеваний ЛОР-органов с использованием современного оборудования. Врачи-отоларингологи используют различные методы диагностики для точной постановки диагноза и назначения эффективного лечения.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Эндоскопические исследования полости носа, гортани и уха</li>
                    <li>• Аудиометрия и тимпанометрия для оценки слуха</li>
                    <li>• Рентгенография и КТ околоносовых пазух</li>
                    <li>• Лабораторные исследования мазков и биопсийного материала</li>
                    <li>• Функциональные пробы для оценки вестибулярного аппарата</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExpanded('treatment')}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Лечение ЛОР-заболеваний</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['treatment'] ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems['treatment'] && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    Лечение ЛОР-заболеваний в «Альтамед-с» проводится с использованием консервативных и хирургических методов. Наши врачи подбирают индивидуальную схему лечения для каждого пациента, учитывая особенности течения заболевания и общее состояние здоровья.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Медикаментозная терапия с применением современных препаратов</li>
                    <li>• Физиотерапевтические процедуры и массаж</li>
                    <li>• Малоинвазивные хирургические вмешательства</li>
                    <li>• Промывания и инстилляции лекарственных препаратов</li>
                    <li>• Реабилитационные программы после операций</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExpanded('prevention')}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Профилактика ЛОР-заболеваний</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['prevention'] ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems['prevention'] && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    Профилактика ЛОР-заболеваний включает комплекс мероприятий, направленных на укрепление иммунитета и предотвращение развития воспалительных процессов в органах дыхания и слуха.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Регулярное закаливание и укрепление иммунитета</li>
                    <li>• Соблюдение правил личной гигиены</li>
                    <li>• Избегание переохлаждения и сквозняков</li>
                    <li>• Своевременное лечение острых респираторных инфекций</li>
                    <li>• Профилактические осмотры у ЛОР-врача</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}
