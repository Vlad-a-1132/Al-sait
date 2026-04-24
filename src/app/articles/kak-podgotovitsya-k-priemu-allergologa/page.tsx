import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Как подготовиться к приёму аллерголога: что записать и что взять с собой | Альтамед-С',
  description:
    'Практичный чек‑лист: какие наблюдения помогут аллергологу, как подготовить список симптомов и триггеров, какие документы и результаты обследований взять на приём.',
  openGraph: {
    title: 'Как подготовиться к приёму аллерголога | Альтамед-С',
    description:
      'Что записать про симптомы и триггеры, какие документы взять и какие вопросы подготовить, чтобы консультация была предметной.',
    url: 'https://altamed-c.ru/blog/kak-podgotovitsya-k-priemu-allergologa',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/kak-podgotovitsya-k-priemu-allergologa' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const ALLERGOLOGY_URL = '/services/allergology';

const HERO_IMAGE = '/images/blog/Kak%20podgotovitsya%20k%20priyemu%20allergologa.webp';

export default function ArticleKakPodgotovitsyaKAllergologu() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={ALLERGOLOGY_URL} className="hover:text-emerald-600">Аллерголог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Подготовка к приёму</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Как подготовиться к приёму аллерголога
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                У аллерголога многое решают детали: когда появились симптомы, что их усиливает, как меняется состояние дома и на улице.
                Хорошая новость — вам не нужно “разобраться во всём самому”. Достаточно подготовить понятные наблюдения и документы.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Ниже — практичный чек‑лист, который помогает сделать консультацию более предметной: что записать заранее, что взять с собой и
                какие вопросы подготовить.
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
                <a href="#notes" className="text-emerald-600 hover:underline py-1">Наблюдения</a>
                <a href="#triggers" className="text-emerald-600 hover:underline py-1">Триггеры</a>
                <a href="#docs" className="text-emerald-600 hover:underline py-1">Документы</a>
                <a href="#questions" className="text-emerald-600 hover:underline py-1">Вопросы</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Как подготовиться к приёму аллерголога"
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
          <section id="notes" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">1) Что записать о симптомах</h2>
            <p className="mb-4">
              Лучше всего работает короткая структура. Не нужно писать “эссе” — достаточно 5–10 пунктов, которые помогут врачу быстрее понять картину.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <ul className="mb-0">
                <li><strong>Когда началось</strong> и как менялось (дни/недели/месяцы).</li>
                <li><strong>Какие симптомы</strong> (нос/глаза/кожа/кашель) и что беспокоит больше всего.</li>
                <li><strong>Как часто</strong> повторяются эпизоды и сколько длятся.</li>
                <li><strong>Есть ли сезонность</strong> (весна/лето/осень, отопительный сезон).</li>
                <li><strong>Что помогает</strong> и что не помогает (и какие препараты пробовали).</li>
              </ul>
            </div>
            <p className="mb-0">
              Если вы пока не уверены, когда вообще стоит обращаться, посмотрите статью
              <Link href="/blog/kogda-stoit-obratitsya-k-allergologu">«Когда стоит обратиться к аллергологу»</Link>.
            </p>
          </section>

          <section id="triggers" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2) Как отследить возможные триггеры (без “самодиагностики”)</h2>
            <p className="mb-4">
              Триггер — это не “аллерген, который вы точно нашли”, а условие, при котором симптомы чаще усиливаются. Наблюдения помогают врачу
              проверить гипотезу и решить, нужно ли обследование.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'Улица vs дом: где хуже',
                'Уборка, пыль, новые средства',
                'Контакт с животными',
                'Еда/лекарства — если есть связь',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Важно: не нужно самостоятельно отменять лекарства или резко менять питание “по спискам”. Без задач и критериев это часто не помогает,
              а иногда усложняет ситуацию.
            </p>
          </section>

          <section id="docs" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3) Какие документы и обследования взять</h2>
            <p className="mb-4">
              Если у вас есть прошлые результаты — берите. Это экономит время и помогает не повторять лишнее. Если результатов нет — это нормально,
              консультация всё равно будет полезной.
            </p>
            <ul>
              <li>Заключения врачей (если обращались ранее по этим симптомам).</li>
              <li>Результаты анализов/обследований, если выполнялись.</li>
              <li>Список препаратов, которые принимаете (включая “по необходимости”).</li>
              <li>Фото кожных проявлений в “пик”, если они бывают.</li>
            </ul>
            <p className="mb-0">
              Если врач сочтёт нужным, может обсудить обследования, включая аллергопробы. Отдельный материал по теме:
              <Link href="/blog/allergoproby-kak-prohodyat-i-kogda-nuzhny">«Аллергопробы: как проходят и когда нужны»</Link>.
            </p>
          </section>

          <section id="questions" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4) Какие вопросы можно подготовить заранее</h2>
            <p className="mb-4">
              Вопросы помогают не потеряться на приёме и получить понятный план. Примеры:
            </p>
            <ul>
              <li>На что похожи мои симптомы с точки зрения врача (какие версии рассматриваем)?</li>
              <li>Нужны ли обследования сейчас или достаточно наблюдения?</li>
              <li>Если нужны обследования — что именно и зачем?</li>
              <li>Какие признаки будут поводом обратиться раньше повторного визита?</li>
              <li>Какой план на сезон (если симптомы сезонные)?</li>
            </ul>
            <p className="mb-0">
              Про сезонные реакции можно заранее почитать материал <Link href="/blog/sezonnaya-allergiya-simptomy-i-kogda-zapisyvatsya">о сезонной аллергии</Link> —
              там есть примеры, что обсудить на приёме.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Нужно ли “перестать пить всё” перед приёмом?',
                  a: 'Нет. Не отменяйте препараты самостоятельно. Если перед обследованием будут ограничения, врач скажет, что и когда корректировать.',
                },
                {
                  q: 'Если симптомов нет в день приёма, консультация бессмысленна?',
                  a: 'Нет. История симптомов и наблюдения часто важнее “картинки сегодня”. Фото высыпаний и дневник помогают.',
                },
                {
                  q: 'Можно ли прийти с ребёнком без обследований?',
                  a: 'Да. Лучше начать с консультации и истории симптомов — этого обычно достаточно, чтобы понять следующий шаг.',
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
                Записаться к аллергологу можно онлайн или по телефону. Услуги и цены — на странице <Link href={ALLERGOLOGY_URL}>аллергологии</Link>.
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

