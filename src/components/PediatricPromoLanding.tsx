import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import type { PediatricPromotion } from "@/data/pediatric-promotions";

const CheckIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m7 12.5 3.2 3.2L17.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PediatricPromoLanding({ promo }: { promo: PediatricPromotion }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf9] text-slate-950">
      <section className="border-b border-emerald-950/5 bg-white py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          <Link href="/" className="transition-colors hover:text-emerald-700">Медицинский центр</Link>
          <span aria-hidden="true">/</span>
          <Link href="/promo" className="transition-colors hover:text-emerald-700">Акции</Link>
          <span aria-hidden="true">/</span>
          <span className="line-clamp-1 font-medium text-emerald-700">{promo.title}</span>
        </div>
      </section>

      <section className="relative isolate bg-[#092f2a] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(16,185,129,.18),transparent_65%)]" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-emerald-300/25 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur">
              {promo.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.7rem]">
              {promo.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85 sm:text-xl">
              {promo.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {promo.price && (
                <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur">
                  <div className="text-3xl font-bold tracking-tight">{promo.price}</div>
                  <div className="mt-1 text-sm text-emerald-100/75">{promo.priceCaption}</div>
                </div>
              )}
              <a
                href="#appointment"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#ff7a1a] px-7 py-4 font-bold text-white shadow-[0_18px_45px_rgba(255,122,26,.28)] transition hover:-translate-y-0.5 hover:bg-[#f36d0c]"
              >
                Записаться по акции
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.2rem] bg-emerald-300/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.55rem]">
                <Image
                  src={promo.image}
                  alt={promo.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-1 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-700">О программе</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Забота без лишних визитов</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{promo.lead}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {promo.details.map((item, index) => (
                <article key={item.title} className="group rounded-[1.6rem] border border-slate-200 bg-[#fbfdfc] p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">{index + 1}</div>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf7f2] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-700">Состав предложения</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{promo.includedTitle}</h2>
          </div>

          {promo.packages ? (
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {promo.packages.map((item, index) => (
                <article key={item.title} className="relative overflow-hidden rounded-[1.8rem] border border-emerald-200 bg-white p-7 shadow-lg shadow-emerald-950/5 sm:p-8">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-50" />
                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-md">
                        <span className="text-sm font-bold text-emerald-700">Вариант {index + 1}</span>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight">{item.title}</h3>
                        {item.audience && <p className="mt-2 font-semibold text-emerald-700">{item.audience}</p>}
                      </div>
                      <div className="rounded-2xl bg-[#092f2a] px-5 py-3 text-2xl font-bold text-white">{item.price}</div>
                    </div>
                    <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
                    <ul className="mt-6 space-y-3">
                      {item.included.map((point) => (
                        <li key={point} className="flex gap-3 text-slate-700">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon className="h-4 w-4" /></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {promo.included.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-emerald-200/80 bg-white p-5 shadow-sm">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon className="h-4 w-4" /></span>
                  <span className="leading-7 text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-700">Как воспользоваться</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Три понятных шага</h2>
              <p className="mt-5 leading-7 text-slate-600">Сообщите при записи название акции — администратор подскажет подготовку и поможет выстроить визиты в правильной последовательности.</p>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {promo.steps.map((step, index) => (
                <li key={step.title} className="rounded-[1.6rem] bg-slate-50 p-6">
                  <div className="text-4xl font-bold text-emerald-200">0{index + 1}</div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#092f2a] py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.68fr_1.32fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">Ответы перед записью</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Частые вопросы</h2>
            <p className="mt-5 leading-7 text-emerald-50/70">Если остались вопросы по возрасту, подготовке или последовательности визитов, уточните их у администратора.</p>
          </div>
          <div className="space-y-3">
            {promo.faq.map((item, index) => (
              <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/5 px-5 py-4 open:bg-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <span>{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-open:rotate-90"><ArrowIcon /></span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-emerald-50/75">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Полезные разделы</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {promo.related.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800">
                <span>{item.title}</span><ArrowIcon />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="appointment" className="scroll-mt-24">
        <AppointmentForm />
      </div>
    </main>
  );
}
