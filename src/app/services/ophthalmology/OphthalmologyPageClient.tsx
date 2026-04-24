'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export type OphthalmologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: OphthalmologyServiceRow[];
};

function normalizePriceForUi(s: OphthalmologyServiceRow): string {
  if (s.priceIsZero) return 'Цена по запросу';
  const raw = String(s.priceLabel ?? '').trim();
  if (!raw || raw === '—') return 'Цена по запросу';
  if (/^0\s*руб\.?$/i.test(raw)) return 'Цена по запросу';
  return raw;
}

export default function OphthalmologyPageClient({ serviceRows }: Props) {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Заболевания по алфавиту (оставляем как было)
  const eyeConditions = [
    { letter: 'А', conditions: ['Амблиопия', 'Анизокория', 'Астигматизм', 'Атрофия зрительного нерва'] },
    { letter: 'Б', conditions: ['Бельмо', 'Блефарит', 'Близорукость'] },
    { letter: 'В', conditions: ['Вирусный конъюктивит'] },
    { letter: 'Г', conditions: ['Гемианопсия', 'Герпес на глазу', 'Глазная мигрень', 'Глаукома'] },
    { letter: 'Д', conditions: ['Дакриоцистит', 'Дальнозоркость', 'Дальтонизм', 'Дерматит век', 'Деструкция стекловидного тела', 'Диабетическая ретинопатия'] },
    { letter: 'И', conditions: ['Иридоциклит'] },
    { letter: 'К', conditions: ['Катаракта', 'Кератит', 'Кератоконус', 'Колобома глаза', 'Конъюнктивит', 'Косоглазие', 'Куриная слепота'] },
    { letter: 'М', conditions: ['Мейбомит', 'Миопический астигматизм'] },
    { letter: 'Н', conditions: ['Непроходимость носослезного канала', 'Нистагм'] },
    { letter: 'О', conditions: ['Ожог глаза', 'Отслоение сетчатки'] },
    { letter: 'П', conditions: ['Пингвекула', 'Пресбиопия', 'Птеригиум', 'Птоз верхнего века'] },
    { letter: 'Р', conditions: ['Разрыв сетчатки глаза', 'Ретинопатия'] },
    { letter: 'С', conditions: ['Синдром Элерса-Данлоса', 'Синдром сухого глаза', 'Синдрома Горнера', 'Слепота'] },
    { letter: 'Т', conditions: ['Трахома'] },
    { letter: 'У', conditions: ['Увеит'] },
    { letter: 'Х', conditions: ['Халязион'] },
    { letter: 'Э', conditions: ['Экзофтальм', 'Энофтальм', 'Эпикантус', 'Эписклерит глаза'] },
    { letter: 'Я', conditions: ['Ячмень'] },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">
              Главная
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">
              Услуги
            </Link>
            <span>/</span>
            <span className="text-gray-900">Офтальмология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Офтальмология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний глаз у взрослых и детей в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/images allergoly/oftalmologia.webp"
                    alt="Диагностика заболеваний глаз"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Диагностика заболеваний глаз</div>
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
                <img src="/images/images allergoly/oftalmologia.webp" alt="Офтальмология в Одинцово" className="w-full h-full object-cover" />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Офтальмология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение заболеваний глаз</p>
                <Link
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Почему Альтамед-С*/}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед-С»?</h2>
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Лечение в соответствии с мировыми клиническими рекомендациями</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Комплексная оценка заболевания и прогноза лечения</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Современное диагностическое оборудование и собственная диагностическая лаборатория</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Высокий уровень сервиса и взвешенная ценовая политика</p>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">Лечение в соответствии с мировыми клиническими рекомендациями</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">Комплексная оценка заболевания и прогноза лечения</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">Современное диагностическое оборудование и собственная диагностическая лаборатория</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">Высокий уровень сервиса и взвешенная ценовая политика</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        {/* Services Section */}
        <section className="py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Услуги офтальмологии
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный спектр диагностических и лечебных процедур для здоровья глаз
              </p>
              <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять
                актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
                <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  +7 (495) 255-44-50
                </a>
                . Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
              </p>
            </div>

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
                        <tr key={s.key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}>
                          <td className="py-3.5 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                          <td className="py-3.5 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                            {normalizePriceForUi(s)}
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

        {/* Дальше контент страницы оставляем как в текущей версии (алфавит, инфо, FAQ и т.д.) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Заболевания глаз по алфавиту
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eyeConditions.map((group) => (
                <div key={group.letter} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="text-2xl font-bold text-emerald-600 mb-3">{group.letter}</div>
                  <div className="space-y-1 text-sm text-gray-700">
                    {group.conditions.map((c) => (
                      <div key={c}>{c}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
              <p className="text-lg text-gray-600">Ответы на популярные вопросы об офтальмологии</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('diseases')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Какие заболевания лечит врач-офтальмолог</h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['diseases'] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['diseases'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600">
                      Врач-офтальмолог занимается диагностикой и лечением заболеваний глаз и придаточного аппарата, а также подбором методов коррекции зрения.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('diagnostics')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Диагностика в офтальмологии</h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['diagnostics'] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['diagnostics'] && (
                  <div className="px-6 py-4 bg-white">
                    <ul className="text-gray-600 space-y-2">
                      <li>• Биомикроскопия глаза и офтальмоскопия</li>
                      <li>• Офтальмотонометрия</li>
                      <li>• Периметрия и авторефрактометрия</li>
                      <li>• Исследование аккомодации и другие методы по показаниям</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}

