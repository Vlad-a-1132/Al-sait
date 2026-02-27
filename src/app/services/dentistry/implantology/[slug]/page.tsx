import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import {
  IMPLANTOLOGY_DIRECTION_SLUGS,
  getImplantologyDirectionBySlug,
  getImplantologyDirectionCanonical,
} from "@/data/abramov/implantologyDirectionPages";
import { getImplantologyDirectionContent } from "@/data/abramov/implantologyDirectionContent";
import { getImplantologySeoContent } from "@/data/abramov/implantologyDirectionSeo";
import { ImplantologyPageContent } from "./ImplantologyPageContent";

type Props = { params: Promise<{ slug: string }> };

const IMPLANTOLOGY_IMAGES = {
  implantation: "/images/yslugi/implant.webp",
  "bone-grafting": "/images/services/task_01kjcgwmb5errt6v65h9kzs8g0_1772094423_img_1.webp",
  "sinus-lift": "/images/services/sinus.webp",
  "soft-tissue": "/images/services/plastika.webp",
  "immediate-implantation": "/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp",
  "prosthetics-on-implants": "/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp",
  "veneers-crowns": "/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp",
} as const;

export async function generateStaticParams() {
  return IMPLANTOLOGY_DIRECTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const direction = getImplantologyDirectionBySlug(slug);
  if (!direction) return { title: "Имплантология | Альтамед-С" };
  const title = `${direction.title} в Одинцово | Клиника «Альтамед-С»`;
  const description =
    direction.description.length > 160
      ? direction.description.slice(0, 157) + "..."
      : direction.description;
  const canonical = getImplantologyDirectionCanonical(slug);
  const imagePath = IMPLANTOLOGY_IMAGES[direction.id as keyof typeof IMPLANTOLOGY_IMAGES];
  return {
    title,
    description: `${description} Имплантация и хирургия в Одинцово. Запись в «Альтамед-С».`,
    alternates: { canonical },
    openGraph: {
      title: `${direction.title} — имплантология в Одинцово`,
      description,
      url: canonical,
      type: "article",
      images: imagePath
        ? [
            {
              url: `https://altamed-c.ru${imagePath}`,
              width: 1200,
              height: 630,
              alt: `${direction.title} в клинике Альтамед-С`,
            },
          ]
        : undefined,
    },
  };
}

export default async function ImplantologyDirectionPage({ params }: Props) {
  const { slug } = await params;
  const direction = getImplantologyDirectionBySlug(slug);
  if (!direction) notFound();

  const imageSrc = IMPLANTOLOGY_IMAGES[direction.id as keyof typeof IMPLANTOLOGY_IMAGES];
  const hasPriceList = direction.priceItems && direction.priceItems.length > 0;
  const content = getImplantologyDirectionContent(slug);
  const seoContent = getImplantologySeoContent(slug);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-cyan-600"
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
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-cyan-600 md:ml-2">
                    Услуги
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/services/dentistry" className="ml-1 text-sm font-medium text-gray-700 hover:text-cyan-600 md:ml-2">
                    Стоматология
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/services/implantation" className="ml-1 text-sm font-medium text-gray-700 hover:text-cyan-600 md:ml-2">
                    Имплантация
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

      <ImplantologyPageContent
        direction={direction}
        content={content}
        seoContent={seoContent}
        imageSrc={imageSrc}
        hasPriceList={!!hasPriceList}
      />

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <p className="text-sm text-gray-500">
            <Link href="/doctor/abramov-implantolog" className="text-cyan-600 hover:underline">
              Страница врача-имплантолога Абрамова Ю. Э.
            </Link>
            {" · "}
            <Link href="/services/implantation" className="text-cyan-600 hover:underline">
              Имплантация зубов в Одинцово
            </Link>
          </p>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
