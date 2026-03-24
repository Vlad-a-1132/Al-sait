import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DirectionPageShell } from '../_direction-page';

export const metadata: Metadata = {
  title: 'Планирование и ведение беременности в Одинцово — УЗИ, анализы | Альтамед-С',
  description: 'Планирование и ведение беременности в Одинцово. Подготовка к зачатию, УЗИ плода, анализы, наблюдение на всех сроках. Клиника Альтамед-С.',
  robots: { index: false, follow: false },
};

const RELATED = [
  { href: '/ginekolog-v-odintsovo', label: 'Гинеколог в Одинцово' },
  { href: '/ginekolog-v-odintsovo/akusher-ginekolog', label: 'Акушер-гинеколог' },
  { href: '/ginekolog-v-odintsovo/priem-ginekologa', label: 'Приём гинеколога' },
  { href: '/ginekolog-v-odintsovo/profilakticheskie-osmotry', label: 'Профилактические осмотры' },
];

export default function VedenieBeremennostiPage() {
  return (
    <DirectionPageShell
      h1="Планирование и ведение беременности — подготовка к зачатию, УЗИ, анализы"
      description="Подготовка к зачатию, обследования и ведение беременности в Одинцово. УЗИ по триместрам, анализы, консультации акушера-гинеколога. Запись в Альтамед-С."
      breadcrumb="Планирование и ведение беременности"
      relatedLinks={RELATED}
      imageSrc="/images/images allergoly/ginokologia.webp"
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Планирование беременности</h2>
          <p className="text-gray-700 mb-4">
            Подготовка к зачатию включает консультацию акушера-гинеколога, осмотр, анализы (инфекции, гормоны, общий и биохимический анализ крови), УЗИ органов малого таза. Рекомендуется приём фолиевой кислоты за 1–3 месяца до зачатия.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Консультация и осмотр</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Анализы на инфекции</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> УЗИ органов малого таза</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Гормоны при необходимости</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ведение беременности</h2>
          <p className="text-gray-700 mb-4">
            Наблюдение на всех сроках: приёмы по графику, УЗИ в I, II и III триместрах, допплерометрия, анализы. Врач контролирует состояние матери и плода, даёт рекомендации, при необходимости направляет к смежным специалистам.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">I триместр</h3>
              <p className="text-gray-600 text-sm">УЗИ до 10 недель, постановка на учёт, скрининг.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">II триместр</h3>
              <p className="text-gray-600 text-sm">УЗИ 10–16 недель, допплерометрия, биохимический скрининг.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">III триместр</h3>
              <p className="text-gray-600 text-sm">УЗИ, допплерометрия плода, подготовка к родам.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Цены</h2>
          <p className="text-gray-700 mb-4">
            Приём беременной первичный — от 3 150 ₽, повторный — от 2 630 ₽. Ведение беременности — от 2 630 ₽ за приём. УЗИ плода I триместр — от 1 890 ₽, II–III — от 2 210 ₽. <Link href="/ginekolog-v-odintsovo#tseny" className="text-emerald-600 hover:underline">Полный прайс</Link>.
          </p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </section>

        <section>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Врачи</h2>
              <p className="text-gray-700 mb-4">Ведение беременности ведут акушеры-гинекологи со стажем до 43 лет. Запись — онлайн или по телефону.</p>
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
