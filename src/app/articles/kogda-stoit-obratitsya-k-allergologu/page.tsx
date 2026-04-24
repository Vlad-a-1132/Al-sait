import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Когда стоит обратиться к аллергологу: симптомы и ситуации | Альтамед-С',
  description:
    'Какие симптомы чаще приводят на консультацию к аллергологу, когда стоит записаться, что врач уточняет на приёме и как подготовиться к разговору.',
  openGraph: {
    title: 'Когда стоит обратиться к аллергологу | Альтамед-С',
    description:
      'Типичные симптомы и ситуации, когда консультация аллерголога помогает быстрее понять возможные причины и выбрать тактику.',
    url: 'https://altamed-c.ru/blog/kogda-stoit-obratitsya-k-allergologu',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/kogda-stoit-obratitsya-k-allergologu' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const ALLERGOLOGY_URL = '/services/allergology';
const DOCTOR_URL = '/doctors/lysenko-irina-vladimirovna';

const HERO_IMAGE = '/images/blog/Kogda%20stoit%20obratitsya%20k%20allergologu.webp';

export default function ArticleKogdaKAllergologu() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={ALLERGOLOGY_URL} className="hover:text-emerald-600">Аллерголог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Когда обращаться</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Когда стоит обратиться к аллергологу: симптомы и ситуации
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Аллергические реакции могут проявляться по‑разному: от сезонного насморка до кожного зуда или повторяющегося кашля.
                Важно понимать простую вещь: статья не ставит диагноз, но помогает заметить закономерности и вовремя обсудить симптомы с врачом.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Ниже — признаки и ситуации, когда консультация аллерголога особенно полезна, а также что стоит подготовить к приёму,
                чтобы разговор был предметным.
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
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">
                Консультация аллерголога · Ежедневно 8:00–21:00
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#symptoms" className="text-emerald-600 hover:underline py-1">Симптомы</a>
                <a href="#when-not-to-wait" className="text-emerald-600 hover:underline py-1">Когда не откладывать</a>
                <a href="#kids" className="text-emerald-600 hover:underline py-1">Дети</a>
                <a href="#visit" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Когда стоит обратиться к аллергологу"
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
          <section id="symptoms" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">С какими симптомами чаще обращаются</h2>
            <p className="mb-4">
              Аллергия не всегда выглядит как «классическая» крапивница. Поводом для консультации часто становятся повторяющиеся,
              похожие эпизоды, которые мешают жить или не укладываются в привычную картину простуды.
            </p>
            <ul>
              <li><strong>Насморк и заложенность</strong>, которые длятся неделями, усиливаются в определённых условиях (улица, пыль, животные, уборка).</li>
              <li><strong>Чихание, зуд в носу, слезотечение</strong>, особенно при сезонности или при контакте с раздражителем.</li>
              <li><strong>Кашель, ощущение «нехватки воздуха»</strong> или свисты при дыхании — не только при ОРВИ, но и повторяющиеся эпизоды.</li>
              <li><strong>Кожные проявления</strong>: зуд, сухость, покраснение, высыпания, повторяющаяся крапивница.</li>
              <li><strong>Реакции после еды или лекарств</strong>: неприятные ощущения, зуд, сыпь, отёк — даже если симптомы проходят.</li>
            </ul>
            <p className="mb-0">
              Если симптомы повторяются, полезно обсудить их с аллергологом и выстроить понятный план наблюдения и обследования.
              Подробнее о приёме и услугах — на странице <Link href={ALLERGOLOGY_URL}>аллерголога</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему “обычная простуда” иногда затягивается</h2>
            <p className="mb-4">
              При ОРВИ симптомы обычно меняются по дням: появляются и уходят, присоединяются боль в горле, температура, общая слабость.
              При аллергии чаще заметны повторяемость и связь с условиями: «каждую весну», «в квартире», «после уборки», «рядом с кошкой».
            </p>
            <p className="mb-0">
              Это не правило и не диагноз — пересечения бывают. Но такая логика помогает понять, что стоит не только лечить симптом,
              но и разобраться с причинами вместе со специалистом.
            </p>
          </section>

          <section id="when-not-to-wait" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда лучше не откладывать визит</h2>
            <div className="rounded-2xl p-6 bg-emerald-50/70 border border-emerald-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Записаться на консультацию стоит, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-emerald-600">●</span> симптомы мешают сну и привычной активности</div>
                <div className="flex items-center gap-2"><span className="text-emerald-600">●</span> эпизоды повторяются или “переходят” из сезона в сезон</div>
                <div className="flex items-center gap-2"><span className="text-emerald-600">●</span> есть свисты, одышка или длительный кашель</div>
                <div className="flex items-center gap-2"><span className="text-emerald-600">●</span> реакции возникают после еды/лекарств или контакта с раздражителем</div>
              </div>
            </div>
            <p className="mb-0">
              Если есть выраженный отёк лица/горла, затруднение дыхания или резко нарастающие симптомы — это повод действовать быстро
              и обращаться за неотложной помощью. В плановой ситуации — лучше обсудить симптомы на консультации и не заниматься самодиагностикой.
            </p>
          </section>

          <section id="kids" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда консультация полезна у детей</h2>
            <p className="mb-4">
              У детей аллергические проявления могут быть смазанными: длительный насморк без температуры, зуд кожи, повторяющиеся высыпания,
              кашель на фоне нагрузки или после ОРВИ. Консультация помогает спокойно разобрать, что действительно похоже на аллергию,
              а что требует других специалистов.
            </p>
            <p className="mb-0">
              Родителям обычно полезно заранее записать наблюдения (когда усиливается насморк, что меняется дома, как реагирует кожа).
              Для системной подготовки пригодится отдельный чек‑лист: <Link href="/blog/kak-podgotovitsya-k-priemu-allergologa">как подготовиться к приёму аллерголога</Link>.
            </p>
          </section>

          <section id="visit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что обычно уточняет аллерголог на приёме</h2>
            <p className="mb-4">
              Хорошая консультация начинается не с “угадывания аллергена”, а с разговора и структуры. Врач уточняет жалобы, длительность и динамику,
              возможные триггеры, домашние и рабочие условия, перенесённые заболевания, реакции на лекарства, семейный анамнез.
            </p>
            <p className="mb-4">
              По итогам обсуждения врач может предложить план: что наблюдать, какие обследования действительно уместны, и когда нужны аллергопробы.
              Про пробы — в отдельном материале: <Link href="/blog/allergoproby-kak-prohodyat-i-kogda-nuzhny">«Аллергопробы: как проходят и когда нужны»</Link>.
            </p>
            <p className="mb-0">
              Если хотите заранее понять, какие услуги и цены доступны — они собраны на странице <Link href={ALLERGOLOGY_URL}>аллергологии</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как может помочь раннее обращение</h2>
            <p className="mb-4">
              Когда симптомы повторяются, ранняя консультация полезна тем, что экономит время: вы быстрее понимаете, на что обращать внимание,
              какие факторы важны, и какие обследования действительно нужны, а какие можно не делать “на всякий случай”.
            </p>
            <p className="mb-0">
              Это особенно актуально при сезонных реакциях: чем раньше вы обсудите план на сезон, тем проще организовать наблюдение.
              Если у вас типичная сезонность — будет полезна статья <Link href="/blog/sezonnaya-allergiya-simptomy-i-kogda-zapisyvatsya">про сезонную аллергию</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Короткие вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Можно ли понять аллерген “по ощущениям”?',
                  a: 'Иногда закономерности заметны (например, сезонность), но “по ощущениям” легко ошибиться. Лучше обсудить историю симптомов с врачом и при необходимости выбрать обследование.',
                },
                {
                  q: 'Нужны ли аллергопробы всем?',
                  a: 'Нет. Решение зависит от ситуации: симптомов, их тяжести, сезонности и задач обследования. Врач объяснит, когда пробы уместны и какие есть ограничения.',
                },
                {
                  q: 'Если симптомы проходят сами, можно не идти?',
                  a: 'Если эпизоды повторяются и снижают качество жизни, консультация всё равно полезна: вы получите план действий и поймёте, на что смотреть дальше.',
                },
                {
                  q: 'К какому врачу записаться в Альтамед‑С?',
                  a: 'Записаться можно на консультацию аллерголога на странице аллергологии. При необходимости можно ознакомиться с врачом: И. В. Лысенко.',
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
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Запись на консультацию</h2>
            <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
              <p className="text-gray-800 mb-4">
                Если симптомы повторяются или мешают в повседневной жизни, можно записаться на консультацию аллерголога в Альтамед‑С.
                На странице направления — цены и список услуг: <Link href={ALLERGOLOGY_URL}>аллергология</Link>.
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
                <Link
                  href={DOCTOR_URL}
                  className="inline-flex justify-center px-5 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition"
                >
                  Врач аллерголог
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

