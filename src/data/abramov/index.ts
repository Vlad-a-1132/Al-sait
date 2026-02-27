import type { DirectionId } from "./directions";
import { directions } from "./directions";
import { casesAbramov } from "./cases";
import { reviewsAbramov, reviewsAbramovSourceUrl } from "./reviews";
import { faqGeneral } from "./faq";

export type { DirectionId };
export { directions, casesAbramov, reviewsAbramov, faqGeneral };

export interface DoctorCore {
  slug: string;
  clinicName: string;
  fullName: string;
  specialization: string;
  tagline: string;
  experienceYears: number;
  rating: number;
  photoSrc: string;
  chips: { label: string; color: "cyan" | "mint" | "gray" }[];
  ctas: { primary: { label: string; href: string }; secondary: { label: string; href: string } };
  trustBadges: { label: string; short?: string }[];
}

export const doctorAbramov: DoctorCore = {
  slug: "abramov-implantolog",
  clinicName: "Альтамед-С",
  fullName: "Абрамов Юно Эриильевич",
  specialization: "Стоматолог-хирург, имплантолог",
  tagline: "Хирургия и имплантация зубов",
  experienceYears: 7,
  rating: 4.9,
  photoSrc: "/images/promo/Abramov Yuno Eriilevich 1.webp",
  chips: [
    { label: "Стоматолог-хирург", color: "cyan" },
    { label: "Имплантолог", color: "mint" },
    { label: "импланты, протезирование", color: "gray" },
  ],
  ctas: {
    primary: { label: "Записаться на приём", href: "/appointments" },
    secondary: { label: "Выбрать направление", href: "#directions" },
  },
  trustBadges: [
    { label: "Стаж 7 лет", short: "7 лет" },
    { label: "Рейтинг 4.9", short: "4.9" },
    { label: "Клиника Альтамед-С", short: "Альтамед-С" },
    { label: "Под ключ, без боли", short: "Без боли" },
  ],
};

export interface PageDataBundle {
  doctor: DoctorCore;
  directions: typeof directions;
  cases: typeof casesAbramov;
  reviews: typeof reviewsAbramov;
  faq: typeof faqGeneral;
  priceCta: { label: string; href: string };
  reviewsSource?: { url: string; label: string };
  directionPageBasePath?: string;
}

export function getAbramovBundle(): PageDataBundle {
  return {
    doctor: doctorAbramov,
    directions,
    cases: casesAbramov,
    reviews: reviewsAbramov,
    faq: faqGeneral,
    priceCta: { label: "Посмотреть полный прайс", href: "/services/implantation#prices" },
    reviewsSource: { url: reviewsAbramovSourceUrl, label: "ПроДокторов" },
    directionPageBasePath: "/services/dentistry/implantology",
  };
}

export type { DirectionData } from "./directions";
