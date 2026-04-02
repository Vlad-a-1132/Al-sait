import type { DirectionId } from "./directions";
import { directions } from "./directions";
import { reviewsGoncharenko, reviewsGoncharenkoSources } from "./reviews";
import { faqGeneral } from "./faq";

export type { DirectionId };
export { directions, reviewsGoncharenko, faqGeneral };
export type { DirectionData } from "./directions";

export interface CaseItem {
  id: string;
  directionId: DirectionId;
  title: string;
  tag?: string;
}

export const casesGoncharenko: CaseItem[] = [
  { id: "1", directionId: "bite-correction", title: "Исправление скученности брекетами", tag: "Брекеты" },
  { id: "2", directionId: "braces", title: "Керамические брекеты", tag: "Керамика" },
  { id: "3", directionId: "aligners", title: "Элайнеры", tag: "Элайнеры" },
  { id: "4", directionId: "children-ortho", title: "Пластинка у ребёнка", tag: "Дети" },
  { id: "5", directionId: "jaw-defects", title: "Подготовка к протезированию", tag: "Челюсть" },
];

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

export const doctorGoncharenko: DoctorCore = {
  slug: "goncharenko-ortodont",
  clinicName: "Альтамед-С",
  fullName: "Гончаренко Елена Борисовна",
  specialization: "Врач-ортодонт высшей квалификационной категории",
  tagline: "Ортодонтия",
  experienceYears: 27,
  rating: 5,
  photoSrc: "/images/doctors/Goncharenko Elena Borisovna (2)-Photoroom 1.png",
  chips: [
    { label: "Врач-ортодонт", color: "cyan" },
    { label: "металл / керамика, брекеты", color: "gray" },
  ],
  ctas: {
    primary: { label: "Записаться на приём", href: "https://online.altamed-c.ru/" },
    secondary: { label: "Выбрать направление", href: "#directions" },
  },
  trustBadges: [
    { label: "Стаж более 25 лет", short: "25 лет" },
    { label: "Высшая категория", short: "Высшая" },
    { label: "Клиника Альтамед-С", short: "Альтамед-С" },
    { label: "Дети и взрослые", short: "Дети и взрослые" },
  ],
};

export interface PageDataBundle {
  doctor: DoctorCore;
  directions: typeof directions;
  cases: CaseItem[];
  reviews: typeof reviewsGoncharenko;
  faq: typeof faqGeneral;
  priceCta: { label: string; href: string };
  reviewsSources?: { url: string; label: string }[];
  directionPageBasePath?: string;
}

export function getGoncharenkoBundle(): PageDataBundle {
  return {
    doctor: doctorGoncharenko,
    directions,
    cases: casesGoncharenko,
    reviews: reviewsGoncharenko,
    faq: faqGeneral,
    priceCta: { label: "Посмотреть услуги ортодонтии", href: "/services/dentistry/orthodontics" },
    reviewsSources: reviewsGoncharenkoSources,
    directionPageBasePath: "/services/dentistry/orthodontics",
  };
}
