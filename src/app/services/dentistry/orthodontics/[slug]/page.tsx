import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import {
  ORTHO_DIRECTION_SLUGS,
  getOrthoDirectionBySlug,
  ORTHO_DIRECTION_IMAGE,
  getOrthoDirectionCanonical,
} from "@/data/goncharenko/orthoDirectionPages";
import { getOrthoDirectionContent } from "@/data/goncharenko/orthoDirectionContent";
import { OrthoPageContent } from "./OrthoPageContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ORTHO_DIRECTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const direction = getOrthoDirectionBySlug(slug);
  if (!direction) return { title: "Ортодонтия | Альтамед-С" };
  const title = `${direction.title} в Одинцово | Клиника «Альтамед-С»`;
  const description =
    direction.description.length > 160
      ? direction.description.slice(0, 157) + "..."
      : direction.description;
  const canonical = getOrthoDirectionCanonical(slug);
  const imagePath = ORTHO_DIRECTION_IMAGE[direction.id];
  return {
    title,
    description: `${description} Ортодонтия в Одинцово. Запись к врачу-ортодонту в «Альтамед-С».`,
    alternates: { canonical },
    openGraph: {
      title: `${direction.title} — ортодонтия в Одинцово`,
      description,
      url: canonical,
      type: "article",
      images: imagePath
        ? [{ url: `https://altamed-c.ru${imagePath}`, width: 1200, height: 630, alt: `${direction.title} в клинике Альтамед-С` }]
        : undefined,
    },
  };
}

export default async function OrthoDirectionPage({ params }: Props) {
  const { slug } = await params;
  const direction = getOrthoDirectionBySlug(slug);
  if (!direction) notFound();

  const imageSrc = ORTHO_DIRECTION_IMAGE[direction.id];
  const hasPriceList = direction.priceItems && direction.priceItems.length > 0;
  const content = getOrthoDirectionContent(slug);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600"
                >
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">
                    Услуги
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/services/dentistry" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">
                    Стоматология
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/services/dentistry/orthodontics" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">
                    Ортодонтия
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{direction.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <OrthoPageContent
        direction={direction}
        content={content}
        imageSrc={imageSrc}
        hasPriceList={!!hasPriceList}
      />

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <p className="text-sm text-gray-500">
            <Link href="/doctor/goncharenko-ortodont" className="text-emerald-600 hover:underline">
              Страница врача-ортодонта Гончаренко Е. Б.
            </Link>
            {" · "}
            <Link href="/services/dentistry/orthodontics" className="text-emerald-600 hover:underline">
              Ортодонтия в Одинцово
            </Link>
          </p>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
