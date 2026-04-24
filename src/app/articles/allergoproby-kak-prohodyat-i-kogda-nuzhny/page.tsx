import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Аллергопробы: как проходят и когда нужны | Альтамед-С',
  description:
    'Что такое аллергопробы простыми словами, как обычно проходит процедура, нужна ли подготовка и почему решение о пробах принимает врач.',
  openGraph: {
    title: 'Аллергопробы: как проходят и когда нужны | Альтамед-С',
    description:
      'Разбираем, что такое кожные тесты, когда они могут быть полезны и какие ограничения бывают перед обследованием.',
    url: 'https://altamed-c.ru/blog/allergoproby-kak-prohodyat-i-kogda-nuzhny',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/allergoproby-kak-prohodyat-i-kogda-nuzhny' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const ALLERGOLOGY_URL = '/services/allergology';

const HERO_IMAGE = '/images/blog/Allergoproby%20kak%20prokhodyat%20i%20kogda%20nuzhny.webp';

export default function ArticleAllergoproby() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={ALLERGOLOGY_URL} className="hover:text-emerald-600">Аллерголог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Аллергопробы</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Аллергопробы: как проходят и когда нужны
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Аллергопробы часто воспринимают как “быстрый способ узнать, на что аллергия”. На практике это один из инструментов,
                который подходит не всем и не всегда. Важно, чтобы обследование отвечало на конкретный вопрос врача, а не делалось “на всякий случай”.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В статье рассказываем простыми словами, что такое кожные тесты, как обычно проходит процедура, что может входить в подготовку
                и почему решение о пробах принимает аллерголог после консультации.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <a
                  href={APPOINTMENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]"
                >
                  Записаться онлайн
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
                >
                  Позвонить в клинику
                </a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#what" className="text-emerald-600 hover:underline py-1">Что это</a>
                <a href="#when" className="text-emerald-600 hover:underline py-1">Когда назначают</a>
                <a href="#how" className="text-emerald-600 hover:underline py-1">Как проходит</a>
                <a href="#prep" className="text-emerald-600 hover:underline py-1">Подготовка</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Аллергопробы"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                  quality={92}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
          <section id="what" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Что такое аллергопробы простыми словами</h2>
            <p className="mb-4">
              Чаще всего под “аллергопробами” имеют в виду кожные тесты: на кожу наносят небольшие количества стандартных аллергенов и
              оценивают реакцию. Смысл — проверить, есть ли признаки сенсибилизации к конкретным аллергенам в контролируемых условиях.
            </p>
            <p className="mb-0">
              Важно: положительная проба не всегда означает, что именно этот аллерген вызывает ваши симптомы, а отрицательная проба не всегда
              “отменяет” жалобы. Поэтому результаты всегда интерпретируются вместе с историей симптомов.
            </p>
          </section>

          <section id="when" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда врач может рекомендовать обследование</h2>
            <p className="mb-4">
              Аллерголог обычно предлагает пробы, когда они действительно помогут ответить на вопрос: какие аллергены логично учитывать в плане
              профилактики или лечения, и есть ли смысл уточнять причины симптомов именно в аллергологическом направлении.
            </p>
            <ul>
              <li><strong>Сезонные симптомы</strong> (например, повторяющийся насморк/слезотечение в одно и то же время года).</li>
              <li><strong>Подозрение на бытовые триггеры</strong> (пыль, клещи домашней пыли, животные) при длительных жалобах.</li>
              <li><strong>Кожные проявления</strong>, когда важна оценка возможных аллергенов и сопутствующих факторов.</li>
              <li><strong>Уточнение причин</strong>, если симптомы повторяются и мешают жизни, а “простудная” версия не подтверждается.</li>
            </ul>
            <p className="mb-0">
              Если вы хотите начать с консультации и понять, какие обследования вообще уместны, смотрите страницу направления:
              <Link href={ALLERGOLOGY_URL}>аллергология</Link>.
            </p>
          </section>

          <section id="how" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как обычно проходит процедура</h2>
            <p className="mb-4">
              Конкретный протокол зависит от вида теста и показаний, но логика обычно такая: врач выбирает набор аллергенов, объясняет ограничения,
              выполняется тест, затем оценивается реакция в установленное время. После — обсуждение результата и плана дальнейших шагов.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {['Консультация и выбор аллергенов', 'Проведение теста', 'Оценка реакции', 'Интерпретация и план'].map((item, i) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">{i + 1}.</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Если вы сомневаетесь, нужен ли именно этот метод, это нормально. Задача аллерголога — объяснить, что даст обследование в вашей ситуации
              и какие есть альтернативы.
            </p>
          </section>

          <section id="prep" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Нужна ли подготовка и какие бывают ограничения</h2>
            <p className="mb-4">
              Подготовка зависит от того, какие препараты вы принимаете и какой тест планируется. Чаще всего ограничения связаны с тем,
              что некоторые лекарства могут повлиять на выраженность кожной реакции и исказить результат.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Практичные шаги перед консультацией:</p>
              <ul className="mb-0">
                <li>Запишите, какие симптомы есть и когда они усиливаются (сезонность, условия дома/на улице).</li>
                <li>Составьте список лекарств, которые принимаете сейчас или принимали недавно.</li>
                <li>Возьмите результаты прошлых обследований, если они есть.</li>
                <li>Не отменяйте препараты самостоятельно — обсудите ограничения с врачом заранее.</li>
              </ul>
            </div>
            <p className="mb-0">
              Если вы хотите подготовиться заранее и не упустить детали, пригодится чек‑лист:
              <Link href="/blog/kak-podgotovitsya-k-priemu-allergologa">как подготовиться к приёму аллерголога</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему “самому угадать аллерген” — плохая стратегия</h2>
            <p className="mb-4">
              Частая ошибка — резко менять быт и питание “по спискам из интернета”. Это может не дать эффекта и усложнить ситуацию:
              симптомы зависят не от одного фактора, а от сочетания условий (сезон, влажность, инфекции, раздражители).
            </p>
            <p className="mb-0">
              Более спокойный путь — обсудить историю симптомов, выстроить гипотезы и при необходимости выбрать обследование вместе с врачом.
              Если вы только начинаете разбираться, начните с статьи <Link href="/blog/kogda-stoit-obratitsya-k-allergologu">когда стоит обратиться к аллергологу</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Аллергопробы — это больно?',
                  a: 'Обычно ощущения минимальные. Конкретные детали лучше уточнить на консультации: всё зависит от выбранного вида теста.',
                },
                {
                  q: 'Можно ли делать пробы “просто чтобы знать”?',
                  a: 'Чаще полезнее начать с консультации. Обследование должно отвечать на конкретный вопрос и учитывает ваши симптомы.',
                },
                {
                  q: 'Нужно ли отменять антигистаминные перед пробами?',
                  a: 'Иногда — да, но сроки и правила зависят от препарата и вида теста. Не отменяйте ничего самостоятельно, обсудите это с врачом.',
                },
                {
                  q: 'Если проба положительная — это значит, что аллерген точно причина?',
                  a: 'Не всегда. Результат интерпретируют вместе с симптомами и обстоятельствами, иначе легко ошибиться.',
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl p-5 bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                  <p className="text-gray-700 mb-0">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-2">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Запись и следующий шаг</h2>
            <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
              <p className="text-gray-800 mb-4">
                Лучший первый шаг — консультация аллерголога: врач оценит симптомы и объяснит, нужны ли пробы именно вам.
                На странице направления — услуги и цены: <Link href={ALLERGOLOGY_URL}>аллергология</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={APPOINTMENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center px-5 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition"
                >
                  Записаться онлайн
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex justify-center px-5 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition"
                >
                  Позвонить в клинику
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

