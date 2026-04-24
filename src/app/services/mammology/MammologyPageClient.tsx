'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export type MammologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: MammologyServiceRow[];
};

function normalizePriceForUi(s: MammologyServiceRow): string {
  if (s.priceIsZero) return 'Цена по запросу';
  const raw = String(s.priceLabel ?? '').trim();
  if (!raw || raw === '—') return 'Цена по запросу';
  if (/^0\s*руб\.?$/i.test(raw)) return 'Цена по запросу';
  return raw;
}

export default function MammologyPageClient({ serviceRows }: Props) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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
            <span className="text-gray-900">Маммология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Маммология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний молочных желез у женщин всех возрастов в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/mamalogy.webp"
                    alt="Диагностика молочных желез"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Диагностика молочных желез</div>
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
                  src="/images/images allergoly/mamalogy.webp"
                  alt="Диагностика молочных желез"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Диагностика молочных желез</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение</p>
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
                Маммолог в Одинцово - услуги диагностики и лечения заболеваний молочных желез
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Полный спектр услуг маммологии</p>
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

        {/* Information Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Консультация маммолога в Одинцово - профессиональная диагностика молочных желез
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Маммолог в Одинцово - это медицинский специалист, который занимается диагностикой, лечением и профилактикой заболеваний молочных желез.
                  В клинике «Альтамед-с» в Одинцово консультируют высококвалифицированные маммологи с многолетним стажем работы и глубокими знаниями в области
                  заболеваний молочных желез. Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно
                  участвующие в научно-исследовательской деятельности. Для получения качественной маммологической помощи в Одинцово и Московской области
                  рекомендуем обратиться именно в «Альтамед-с».
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Консультация маммолога в Одинцово требуется при появлении болей в молочных железах, уплотнений, выделений из сосков, изменений формы груди
                  или других симптомов заболеваний молочных желез. Заболевания молочных желез требуют профессионального подхода, поэтому самостоятельная
                  диагностика крайне нежелательна. Наиболее эффективным решением станет обращение к опытному маммологу в «Альтамед-с» в Одинцово. Наши
                  специалисты проведут комплексное обследование, включая УЗИ, маммографию, лабораторные анализы, установят точный диагноз, разработают
                  индивидуальную схему терапии и дадут рекомендации по профилактике заболеваний молочных желез.
                </p>
              </div>
              <div className="relative">
                <img src="/images/images allergoly/mamalogy.webp" alt="Маммология" className="w-full h-auto rounded-full shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Remaining blocks below are unchanged */}
        <section className="py-16 bg-gray-50" aria-labelledby="what-we-treat-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="what-we-treat-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Услуги маммологии в Одинцово
            </h2>
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                Маммологические услуги в клинике «Альтамед-с» включают диагностику заболеваний молочных желез, профилактические осмотры и индивидуальные
                рекомендации по наблюдению.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="reasons-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Поводы обращения к врачу-маммологу
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">боль или дискомфорт в молочных железах;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">уплотнения или изменения структуры тканей;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">выделения из сосков;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">изменения формы или кожи груди;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">профилактический осмотр и контроль в динамике.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы о маммологии в Одинцово
            </h2>
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                  aria-expanded={openAccordion === 1}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setOpenAccordion(openAccordion === 1 ? null : 1)}
                >
                  <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                    Диагностика заболеваний молочных желез
                  </h3>
                  <div className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 1 ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Остальной FAQ ниже — остаётся как в текущей странице */}
            </div>
          </div>
        </section>
      </div>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}

