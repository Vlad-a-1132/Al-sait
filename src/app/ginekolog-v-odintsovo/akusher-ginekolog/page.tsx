import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DirectionPageShell } from '../_direction-page';

export const metadata: Metadata = {
  title: 'Акушер-гинеколог в Одинцово — планирование, беременность, наблюдение | Альтамед-С',
  description: 'Акушер-гинеколог в Одинцово: планирование беременности, ведение беременности, послеродовое наблюдение. Консультации и приём в клинике Альтамед-С.',
  robots: { index: false, follow: false },
};

const RELATED = [
  { href: '/ginekolog-v-odintsovo', label: 'Гинеколог в Одинцово' },
  { href: '/ginekolog-v-odintsovo/priem-ginekologa', label: 'Приём гинеколога' },
  { href: '/ginekolog-v-odintsovo/vedenie-beremennosti', label: 'Планирование и ведение беременности' },
  { href: '/ginekolog-v-odintsovo/profilakticheskie-osmotry', label: 'Профилактические осмотры' },
];

export default function AkusherGinekologPage() {
  return (
    <DirectionPageShell
      h1="Акушер-гинеколог — планирование, беременность, наблюдение"
      description="Консультации акушера-гинеколога по планированию и ведению беременности. Подготовка к зачатию, обследования, УЗИ, анализы. Наблюдение во время беременности и после родов."
      breadcrumb="Акушер-гинеколог"
      relatedLinks={RELATED}
      imageSrc="/images/images allergoly/ginokologia.webp"
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Чем занимается акушер-гинеколог</h2>
          <p className="text-gray-700 mb-4">
            Акушер-гинеколог — специалист, который ведёт женщин на этапах планирования беременности, вынашивания и послеродового периода. В отличие от гинеколога общего профиля, он фокусируется на репродуктивном здоровье и течении беременности.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Планирование беременности</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Ведение беременности</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> УЗИ плода</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Наблюдение после родов</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Подготовка к ЭКО</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Когда записаться</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Планирование беременности</h3>
              <p className="text-gray-600 text-sm">Подготовка к зачатию, обследования, фолиевая кислота, исключение инфекций и хронических заболеваний.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Уже беременны</h3>
              <p className="text-gray-600 text-sm">Ведение беременности, УЗИ по триместрам, анализы, контроль состояния матери и плода.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">После родов</h3>
              <p className="text-gray-600 text-sm">Послеродовый осмотр, восстановление, подбор контрацепции, вопросы лактации.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Проблемы с зачатием</h3>
              <p className="text-gray-600 text-sm">Диагностика бесплодия, подготовка к ЭКО, консультации по репродуктивному здоровью.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Цены</h2>
          <p className="text-gray-700 mb-4">
            Приём беременной первичный — от 3 150 ₽, повторный — от 2 630 ₽. Ведение беременности — от 2 630 ₽ за приём. УЗИ плода — от 1 890 ₽. <Link href="/ginekolog-v-odintsovo#tseny" className="text-emerald-600 hover:underline">Полный прайс</Link>.
          </p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </section>

        <section>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Врачи-акушеры-гинекологи</h2>
              <p className="text-gray-700 mb-4">В Альтамед-С ведут приём опытные акушеры-гинекологи со стажем до 43 лет. Можно записаться к специалисту на удобное время в любом из двух филиалов.</p>
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
