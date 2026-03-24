import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DirectionPageShell } from '../_direction-page';

export const metadata: Metadata = {
  title: 'Приём гинеколога в Одинцово — консультация, осмотр, диагностика | Альтамед-С',
  description: 'Приём гинеколога в Одинцово: консультация, осмотр, диагностика. Опытные врачи, УЗИ и анализы в одной клинике. Запись на приём онлайн и по телефону.',
  robots: { index: false, follow: false },
};

const RELATED = [
  { href: '/ginekolog-v-odintsovo', label: 'Гинеколог в Одинцово' },
  { href: '/ginekolog-v-odintsovo/akusher-ginekolog', label: 'Акушер-гинеколог' },
  { href: '/ginekolog-v-odintsovo/vedenie-beremennosti', label: 'Планирование и ведение беременности' },
  { href: '/ginekolog-v-odintsovo/profilakticheskie-osmotry', label: 'Профилактические осмотры' },
];

export default function PriemGinekologaPage() {
  return (
    <DirectionPageShell
      h1="Приём гинеколога — консультация, осмотр, диагностика"
      description="Первичный и повторный приём гинеколога в Одинцово. Осмотр, сбор анамнеза, назначение анализов и УЗИ. Диагностика воспалительных заболеваний, подбор контрацепции, решение вопросов репродуктивного здоровья."
      breadcrumb="Приём гинеколога"
      relatedLinks={RELATED}
      imageSrc="/images/images allergoly/ginokologia.webp"
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Что входит в приём</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Консультация и осмотр</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Сбор жалоб и анамнеза</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Гинекологический осмотр</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Кольпоскопия при необходимости</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Назначение анализов и УЗИ</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Подбор лечения и контрацепции</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Когда обратиться к гинекологу</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Боли и дискомфорт</h3>
              <p className="text-gray-600 text-sm">Боли внизу живота, зуд, жжение, необычные выделения, дискомфорт при половом акте.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Нарушения цикла</h3>
              <p className="text-gray-600 text-sm">Нерегулярные месячные, обильные или скудные кровотечения, межменструальные выделения.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Планирование и профилактика</h3>
              <p className="text-gray-600 text-sm">Подготовка к беременности, подбор контрацепции, профилактический осмотр.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Воспалительные заболевания</h3>
              <p className="text-gray-600 text-sm">Инфекции, воспаления, заболевания шейки матки — диагностика и лечение.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Цены</h2>
          <p className="text-gray-700 mb-4">
            Первичный приём акушера-гинеколога — от 3 780 ₽, повторный — от 2 840 ₽. Полный прайс смотрите на странице <Link href="/ginekolog-v-odintsovo#tseny" className="text-emerald-600 hover:underline">Гинеколог в Одинцово</Link>.
          </p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </section>

        <section>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Врачи-гинекологи</h2>
              <p className="text-gray-700 mb-4">В клинике ведут приём три врача-гинеколога со стажем до 43 лет. Можно записаться к любому специалисту в удобное время.</p>
              <Link href="/ginekolog-v-odintsovo#vrachi" className="text-emerald-600 hover:underline font-medium">
                Выбрать врача →
              </Link>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image src="/images/gino/Altamed-С Odintsovo6.webp" alt="Клиника Альтамед-С" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 600px" quality={90} />
            </div>
          </div>
        </section>
      </div>
    </DirectionPageShell>
  );
}
