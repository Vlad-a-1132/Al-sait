import Image from 'next/image';
import Link from 'next/link';

const PHONE = '+7 (495) 255-44-50';
const PHONE_LINK = 'tel:+74952554450';

export type DirectionPageProps = {
  h1: string;
  description: string;
  breadcrumb: string;
  children: React.ReactNode;
  relatedLinks: { href: string; label: string }[];
  imageSrc?: string;
};

export function DirectionPageShell({ description, h1, breadcrumb, children, relatedLinks, imageSrc }: DirectionPageProps) {
  return (
    <main className="min-h-screen pt-20 md:pt-0">
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 py-8 sm:py-10 md:py-12">
          <nav className="text-sm text-gray-600 mb-4 sm:mb-6" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/ginekolog-v-odintsovo" className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{breadcrumb}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {h1}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться на приём
                </Link>
                <a href={PHONE_LINK} className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
            </div>
            {imageSrc && (
              <div className="relative order-first lg:order-none">
                <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                  <Image src={imageSrc} alt="" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 py-8 sm:py-12">
        {children}
      </div>

      <section className="py-8 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Связанные направления</h2>
          <div className="flex flex-wrap gap-4">
            {relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-emerald-600 hover:underline font-medium">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-emerald-50/50">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Записаться на приём</h2>
          <p className="text-gray-700 mb-6">
            Выберите удобное время и оставьте заявку — администратор подберёт врача и подтвердит запись.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition">
              Записаться онлайн
            </Link>
            <a href={PHONE_LINK} className="inline-flex justify-center px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition">
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
