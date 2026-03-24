import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Эндометриоз: симптомы, когда обращаться и как проходит лечение | Альтамед-С',
  description: 'Эндометриоз — заболевание, при котором ткань эндометрия разрастается за пределами матки. Симптомы, диагностика, когда нужна консультация гинеколога и как проходит лечение.',
  openGraph: {
    title: 'Эндометриоз: симптомы и лечение | Альтамед-С',
    description: 'Эндометриоз — симптомы, диагностика, когда обращаться к гинекологу и как проходит лечение.',
    url: 'https://altamed-c.ru/articles/endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleEndometrioz() {
  return (
    <article className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Эндометриоз</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Эндометриоз: симптомы, когда обращаться и как проходит лечение
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Эндометриоз — заболевание, при котором ткань, похожая на эндометрий (внутреннюю оболочку матки), появляется за её пределами: в мышце матки, на яичниках, брюшине, реже — в других органах. Ткань реагирует на гормоны цикла и может вызывать боли, образование кист и бесплодие.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие симптомы бывают при эндометриозе, когда нужно обратиться к гинекологу, как проходит диагностика и лечение.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться онлайн
                </a>
                <a href={PHONE_LINK} className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Первичный приём — от 3 780 ₽ · Ежедневно 8:00–21:00</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#simptomy" className="text-emerald-600 hover:underline py-1">Симптомы</a>
                <a href="#srochno" className="text-emerald-600 hover:underline py-1">Когда срочно</a>
                <a href="#kak-prohodit" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#obrashchatsya" className="text-emerald-600 hover:underline py-1">Когда обращаться</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie'] ?? '/images/images allergoly/ginokologia.webp'} alt="Эндометриоз" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 sm:left-0 sm:right-auto sm:w-64 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-sm">
                  <div><span className="text-amber-500 font-bold">4.8</span> рейтинг</div>
                  <div>3 врача-гинеколога</div>
                  <div>2 филиала</div>
                  <div className="text-emerald-600 font-medium">Приём на неделе</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
          {/* Инфографика: Типичная картина и когда к врачу */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Типичная картина и когда обращаться</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Типичные симптомы</h3>
                    <p className="text-gray-700 text-sm mb-0">Боли при месячных, при половом акте, при дефекации/мочеиспускании. Обильные менструации, хронические тазовые боли. Иногда протекает почти бессимптомно.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Когда к врачу</h3>
                    <p className="text-gray-700 text-sm mb-0">Месячные стали болезненными, боли не снимаются обезболивающими; боли при половом акте; бесплодие; планирование беременности.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rose callout: Когда срочно */}
          <section id="srochno" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться срочно</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Эндометриоз может давать острые состояния:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> разрыв эндометриоидной кисты</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> перекрут кисты яичника</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> острая боль внизу живота с температурой</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> внезапная слабость, головокружение</div>
              </div>
              <p className="text-gray-700 text-sm mt-3 mb-0">При таких симптомах обратитесь в клинику или вызывайте скорую.</p>
            </div>
          </section>

          <section id="simptomy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Симптомы эндометриоза</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Боли при месячных</strong> — сильные, не снимаются обычными обезболивающими, могут нарастать с годами;</li>
              <li><strong>Боли при половом акте</strong> — диспареуния;</li>
              <li><strong>Боли при дефекации или мочеиспускании</strong> — особенно во время менструации;</li>
              <li><strong>Обильные и длительные месячные</strong>;</li>
              <li><strong>Бесплодие</strong> — эндометриоз часто сопровождается спайками и нарушением функции яичников и труб;</li>
              <li><strong>Хронические тазовые боли</strong> вне менструации.</li>
            </ul>
            <p className="mb-4">
              Иногда эндометриоз протекает почти без симптомов и обнаруживается при обследовании по поводу бесплодия или кисты яичника.
            </p>
          </section>

          {/* Инфографика: Как проходит консультация */}
          <section id="kak-prohodit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит консультация</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Сбор жалоб и анамнеза', 'Осмотр гинеколога', 'УЗИ органов малого таза', 'При необходимости — МРТ, лапароскопия', 'Назначение терапии или плана лечения'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Подготовка — инфографика */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка к визиту</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'Вспомнить, когда появились симптомы',
                'Взять результаты УЗИ и МРТ (если есть)',
                'Записать вопросы о лечении',
                'Уточнить планы на беременность',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700">Подробнее — <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.</p>
          </section>

          <section id="obrashchatsya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться</h2>
            <p className="mb-4">
              Обратитесь к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>, если месячные стали болезненными, боли не снимаются обычными препаратами, есть боли при половом акте, при дефекации или мочеиспускании во время месячных. При планировании беременности и длительном ненаступлении зачатия — тоже повод для обследования.
            </p>
            <p className="mb-4">
              Подробнее о том, когда стоит записаться к гинекологу — в статье <Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">«Когда нужно записаться к гинекологу: 10 симптомов»</Link>. О болях внизу живота — в статье <Link href="/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny">«Боль внизу живота у женщин»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Диагностика</h2>
            <p className="mb-4">
              Осмотр гинеколога, УЗИ органов малого таза (в т.ч. эндометриоидные кисты яичников — «шоколадные» кисты), при необходимости — МРТ. Золотой стандарт диагностики — лапароскопия с биопсией, но её назначают при наличии показаний (кисты, бесплодие, неэффективность консервативного лечения).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит лечение</h2>
            <p className="mb-4">
              Тактика зависит от возраста, симптомов и планов на беременность. Консервативное лечение — гормональная терапия (КОК, гестагены, агонисты ГнРГ и др.) для подавления активности очагов. При кистах, выраженных болях, бесплодии — хирургическое лечение (лапароскопия). Часто сочетают оба подхода.
            </p>
            <p className="mb-4">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят консультации по эндометриозу и назначение терапии. Хирургическое лечение при необходимости выполняют в условиях стационара.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы об эндометриозе</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Эндометриоз и беременность — совместимы?</dt>
                <dd className="text-gray-700 mb-0">Да. Эндометриоз может снижать фертильность, но многие женщины с этим диагнозом беременеют самостоятельно или после лечения. Тактику подбирает врач индивидуально.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли вылечить эндометриоз полностью?</dt>
                <dd className="text-gray-700 mb-0">Полное излечение не всегда возможно, но симптомы можно контролировать. Гормональная терапия и при необходимости хирургия позволяют уменьшить боли и улучшить качество жизни.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Консультация по эндометриозу в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться на приём к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link> при подозрении на эндометриоз. Врач проведёт осмотр, при необходимости назначит УЗИ и лечение.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700">
                Записаться на приём
              </a>
              <a href={PHONE_LINK} className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50">
                +7 (495) 255-44-50
              </a>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Полезные материалы</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Направления</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href={GYNEC_HUB_URL}>Гинеколог в Одинцово</Link></li>
                  <li><Link href={GYNEC_SERVICES.priem}>Приём гинеколога</Link></li>
                  <li><Link href={GYNEC_SERVICES.vedenie}>Ведение беременности</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny">Боль внизу живота у женщин</Link></li>
                  <li><Link href="/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit">Пайпель-биопсия эндометрия</Link></li>
                  <li><Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                  <li><Link href="/articles/narushenie-menstrualnogo-tsikla">Нарушение менструального цикла</Link></li>
                  <li><Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">Когда нужно записаться к гинекологу</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
