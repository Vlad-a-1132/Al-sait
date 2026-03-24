import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DirectionPageShell } from '../_direction-page';

export const metadata: Metadata = {
  title: 'Профилактический осмотр гинеколога в Одинцово — раннее выявление | Альтамед-С',
  description: 'Профилактические осмотры у гинеколога в Одинцово. Регулярный осмотр, раннее выявление заболеваний, мазки на онкоцитологию. Запись в Альтамед-С.',
  robots: { index: false, follow: false },
};

const RELATED = [
  { href: '/ginekolog-v-odintsovo', label: 'Гинеколог в Одинцово' },
  { href: '/ginekolog-v-odintsovo/priem-ginekologa', label: 'Приём гинеколога' },
  { href: '/ginekolog-v-odintsovo/akusher-ginekolog', label: 'Акушер-гинеколог' },
  { href: '/ginekolog-v-odintsovo/vedenie-beremennosti', label: 'Планирование и ведение беременности' },
];

export default function ProfilakticheskieOsmotryPage() {
  return (
    <DirectionPageShell
      h1="Профилактические осмотры — регулярный осмотр, раннее выявление"
      description="Профилактический осмотр гинеколога раз в год — это возможность вовремя обнаружить заболевания на ранней стадии. Осмотр, мазки, УЗИ по показаниям. Запись в Альтамед-С в Одинцово."
      breadcrumb="Профилактические осмотры"
      relatedLinks={RELATED}
      imageSrc="/images/images allergoly/ginokologia.webp"
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Зачем проходить профилактический осмотр</h2>
          <p className="text-gray-700 mb-4">
            Регулярный осмотр гинеколога (рекомендуется раз в год) позволяет выявить заболевания до появления симптомов. Многие патологии шейки матки, воспалительные процессы и гормональные нарушения на ранних стадиях успешно лечатся.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Осмотр в зеркалах</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Мазок на онкоцитологию</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Взятие мазков на флору</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Кольпоскопия по показаниям</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> УЗИ органов малого таза</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Обсуждение контрацепции</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Когда записаться</h2>
          <p className="text-gray-700 mb-4">
            Планировать профилактический осмотр лучше на 5–12 день цикла (после окончания менструации). В этот период мазки и осмотр наиболее информативны. Если цикл нерегулярный или наступила менопауза, можно записаться в любое удобное время.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Цены</h2>
          <p className="text-gray-700 mb-4">
            Первичный приём — от 3 780 ₽. Взятие мазков — от 530 ₽. Полный список цен на <Link href="/ginekolog-v-odintsovo#tseny" className="text-emerald-600 hover:underline">странице гинекологии</Link>.
          </p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </section>

        <section>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Удобная запись</h2>
              <p className="text-gray-700 mb-4">Записаться на профилактический осмотр можно онлайн или по телефону. Клиника работает ежедневно с 8:00 до 21:00 в обоих филиалах в Одинцово.</p>
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition">
                Записаться на приём
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
