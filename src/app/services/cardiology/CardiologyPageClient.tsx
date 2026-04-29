'use client';

import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export type CardiologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

function normalizePriceForUi(s: CardiologyServiceRow): string {
  if (s.priceIsZero) return 'Цена по запросу';
  const raw = String(s.priceLabel ?? '').trim();
  if (!raw || raw === '—') return 'Цена по запросу';
  if (/^0\s*руб\.?$/i.test(raw)) return 'Цена по запросу';
  return raw;
}

export function CardiologyPricesSection({ serviceRows }: { serviceRows: CardiologyServiceRow[] }) {
  return (
    <section className="py-16 bg-gray-50 scroll-mt-20" aria-labelledby="services-heading" id="cardio-prices">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-4 text-center ml-0 md:ml-4 lg:ml-8">
          Кардиология в Одинцово — стоимость услуг
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-2">
          Консультации кардиолога, ЭКГ, Холтер и другие позиции ветки «Кардиолог» из актуального прайса.
        </p>
        <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed text-center mb-8">
          Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную
          стоимость в регистратуре или по телефону контакт-центра{' '}
          <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">
            +7 (495) 255-44-50
          </a>
          . Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
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
            <p className="text-gray-600 text-sm text-center mb-4">чтобы выбрать время приёма и уточнить стоимость услуги.</p>
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
  );
}

/** Заболевания по алфавиту — тяжёлый справочный блок внизу страницы. */
export function CardiologyAlphabetConditionsSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100 scroll-mt-20" aria-labelledby="cardio-alphabet-heading" id="cardio-alphabet">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h2 id="cardio-alphabet-heading" className="text-2xl font-bold text-gray-800 mb-4">
          Заболевания по алфавиту
        </h2>
        <p className="text-gray-600 text-sm mb-8 max-w-3xl">
          Ниже — ориентировочный перечень направлений, с которыми к нам обращаются. Точный диагноз и план лечения определяет врач после осмотра и
          обследований.
        </p>

        <div className="space-y-6 text-gray-700 mb-8">
          <p>
            Врачи-кардиологи «Альтамед‑С» в Одинцово ведут пациентов с широким спектром сердечно-сосудистых заболеваний: болезнями сосудов сердца, артерий и
            вен, нарушениями ритма и проводимости, гипертонией и последствиями ишемии.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
            <div className="space-y-1 text-sm">
              <div>Антифосфолипидный синдром</div>
              <div>Аортальный стеноз</div>
              <div>Аритмия сердца</div>
              <div>Артериальная гипертензия</div>
              <div>Атеросклероз</div>
              <div>Атриовентрикулярная блокада</div>
              <div>Атриовентрикулярная реципрокная тахикардия (АВРТ)</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
            <div className="space-y-1 text-sm">
              <div>Блокада сердца</div>
              <div>Брадикардия</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
            <div className="space-y-1 text-sm">
              <div>Вегетососудистая дистония</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">Г</div>
            <div className="space-y-1 text-sm">
              <div>Гипертензия</div>
              <div>Гипертонический криз</div>
              <div>Гипертония</div>
              <div>Гипертрофия миокарда</div>
              <div>Гиперхолестеринемия</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">И</div>
            <div className="space-y-1 text-sm">
              <div>Инфаркт миокарда</div>
              <div>Ишемическая болезнь сердца</div>
              <div>Ишемический инсульт</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">К</div>
            <div className="space-y-1 text-sm">
              <div>Кардиалгия</div>
              <div>Кардиомиопатия</div>
              <div>Кардиосклероз</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
            <div className="space-y-1 text-sm">
              <div>Мерцательная аритмия</div>
              <div>Миокардиодистрофия</div>
              <div>Миокардит</div>
              <div>Митральная недостаточность</div>
              <div>Митральный стеноз</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">Н</div>
            <div className="space-y-1 text-sm">
              <div>Нарушения проводимости сердца</div>
              <div>Нарушения ритма сердца</div>
              <div>Нарушения сердечного ритма</div>
              <div>Недостаточность аортального клапана</div>
              <div>Недостаточность кровообращения</div>
              <div>Нейроциркуляторная дистония</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
            <div className="space-y-1 text-sm">
              <div>Пароксизмальная тахикардия</div>
              <div>Патологические нарушения функций сердечно-сосудистой системы в постинфарктном и постинсультном периоде</div>
              <div>Перикардит</div>
              <div>Порок сердца</div>
              <div>Постинфарктный кардиосклероз</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Р</div>
            <div className="space-y-1 text-sm">
              <div>Ревмокардит</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">С</div>
            <div className="space-y-1 text-sm">
              <div>Сердечная астма</div>
              <div>Сердечная недостаточность</div>
              <div>Синдром Вольфа-Паркинсона-Уайта (WPW)</div>
              <div>Синдром Марфана</div>
              <div>Синдром обструктивного апноэ сна (COAC)</div>
              <div>Синдром предвозбуждения желудочков (СПВЖ)</div>
              <div>Синусовая тахикардия</div>
              <div>Сосудистые кризы</div>
              <div>Стеноз артерий</div>
              <div>Стеноз висцеральных артерий</div>
              <div>Стеноз коронарных артерий</div>
              <div>Стенокардия (грудная жаба)</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
            <div className="space-y-1 text-sm">
              <div>Тахикардия</div>
              <div>Трепетание предсердий</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ф</div>
            <div className="space-y-1 text-sm">
              <div>Фиброз</div>
              <div>Фиброзная дисплазия</div>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
            <div className="space-y-1 text-sm">
              <div>Экстрасистолия</div>
              <div>Экстрасистолия сердца</div>
              <div>Эндокардит</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CardiologyPageClient() {
  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      <AppointmentForm />
    </div>
  );
}
