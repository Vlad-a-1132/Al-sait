import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

type InfoCard = { title: string; text: string };
type RelatedLink = { title: string; href: string; text: string };
type ArticleLink = { title: string; href: string; text: string };
type Faq = { question: string; answer: string };

type Doctor = {
  name: string;
  specialty: string;
  experience: string;
  href: string;
  image: string;
};

export type ServiceLandingPageProps = {
  canonicalPath: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  heroBullets: string[];
  importantNote: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  reasonTitle: string;
  reasons: InfoCard[];
  processTitle: string;
  process: string[];
  preparation: string[];
  safetyTitle: string;
  safety: string[];
  faq: Faq[];
  relatedServices: RelatedLink[];
  articles: ArticleLink[];
  doctor?: Doctor;
};

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

export default function ServiceLandingPage(props: ServiceLandingPageProps) {
  const pageUrl = `https://altamed-c.ru${props.canonicalPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        name: props.title,
        description: props.summary,
        url: pageUrl,
        image: `https://altamed-c.ru${props.image}`,
        procedureType: "https://schema.org/TherapeuticProcedure",
      },
      {
        "@type": "FAQPage",
        mainEntity: props.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-gray-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50/50">
        <div className="mx-auto px-4 sm:px-6 py-5" style={{ maxWidth: "83rem" }}>
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-700">Главная</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/services" className="hover:text-emerald-700">Услуги</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span aria-current="page" className="text-gray-900">{props.eyebrow}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-12 items-center pb-10 sm:pb-14">
            <div>
              <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
                {props.eyebrow}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">{props.title}</h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">{props.summary}</p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-7">
                {props.heroBullets.map((item) => (
                  <li key={item} className="flex gap-2 text-sm sm:text-base text-gray-700">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition">
                  Записаться онлайн
                </a>
                <a href={PHONE_LINK} className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-emerald-600 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50 transition">
                  +7 (495) 255-44-50
                </a>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 shadow-xl ring-1 ring-black/5">
              <Image src={props.image} alt={props.imageAlt} fill priority className={props.imageClassName ?? "object-cover"} sizes="(max-width: 1024px) 100vw, 620px" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 text-amber-950 leading-relaxed">
            <strong className="block mb-1">Важно</strong>
            {props.importantNote}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">{props.aboutTitle}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {props.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div className="rounded-3xl bg-gray-50 border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-5">Что взять с собой</h2>
              <ul className="space-y-3 text-gray-700">
                {props.preparation.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-emerald-600">●</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-7">{props.reasonTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {props.reasons.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-7">{props.processTitle}</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.process.map((item, index) => (
              <li key={item} className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">{index + 1}</div>
                <p className="text-gray-800 leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {props.doctor ? (
        <section className="py-10 sm:py-14 bg-emerald-950 text-white">
          <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
            <div className="grid md:grid-cols-[190px_1fr] gap-7 items-center">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/10">
                <Image src={props.doctor.image} alt={props.doctor.name} fill className="object-cover" sizes="190px" />
              </div>
              <div>
                <p className="text-emerald-200 font-semibold mb-2">Врач направления</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{props.doctor.name}</h2>
                <p className="text-emerald-50 mb-1">{props.doctor.specialty}</p>
                <p className="text-emerald-100/80 mb-5">{props.doctor.experience}</p>
                <Link href={props.doctor.href} className="inline-flex min-h-[46px] items-center rounded-xl bg-white px-5 py-3 font-semibold text-emerald-900 hover:bg-emerald-50 transition">
                  Образование и опыт врача
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-10 sm:py-14">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
          <div className="grid lg:grid-cols-2 gap-7">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">{props.safetyTitle}</h2>
              <ul className="space-y-3 text-gray-700">
                {props.safety.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-rose-500">●</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">Частые вопросы</h2>
              <div className="space-y-3">
                {props.faq.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-emerald-200 open:bg-emerald-50/30">
                    <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                      {item.question}<span aria-hidden className="text-emerald-700 group-open:rotate-45 transition">＋</span>
                    </summary>
                    <p className="pt-3 text-gray-600 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-7">Связанные услуги</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {props.relatedServices.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-emerald-300 hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.text}</p>
                <span className="font-semibold text-emerald-700">Перейти к услуге →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "83rem" }}>
          <div className="flex items-end justify-between gap-4 mb-7">
            <div><h2 className="text-2xl sm:text-3xl font-bold">Полезные материалы</h2><p className="text-gray-600 mt-2">Статьи также доступны в тематическом разделе блога.</p></div>
            <Link href="/blog/topics/rehabilitation" className="hidden sm:inline font-semibold text-emerald-700 hover:underline">Все материалы</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {props.articles.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:bg-emerald-50/30 transition">
                <div className="text-xs uppercase tracking-wide font-semibold text-emerald-700 mb-2">Статья</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm doctorImage={props.doctor?.image} doctorAlt={props.doctor?.name ?? props.eyebrow} />
    </main>
  );
}
