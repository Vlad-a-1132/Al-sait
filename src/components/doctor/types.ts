/** Shared types for any doctor page (Abramov, Goncharenko, etc.) */

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

export interface DirectionData {
  id: string;
  shortTitle: string;
  subtitle?: string;
  title: string;
  description: string;
  badges?: { label: string }[];
  indications: string[];
  whatYouGet: string[];
  steps: { title: string; text: string }[];
  safety: string[];
  faq: { q: string; a: string }[];
  cta: { primaryLabel: string; primaryHref: string };
  priceBlock?: { from?: string; note?: string };
  /** Конкретные позиции прайса (код услуги, название, цена). */
  priceItems?: { code?: string; name: string; price: string }[];
  /** Текст перед списком цен (например про индивидуальный расчёт). */
  priceBlockIntro?: string;
  /** Текст после списка цен (призыв уточнить цену на приёме). */
  priceBlockOutro?: string;
}

export interface PageDataBundle {
  doctor: DoctorCore;
  directions: DirectionData[];
  cases: Array<{ id: string; directionId: string; title: string; tag?: string }>;
  reviews: Array<{ id: string; directionId?: string; name: string; rating: number; text: string }>;
  faq: Array<{ id: string; q: string; a: string }>;
  priceCta: { label: string; href: string };
  /** Ссылка на внешний источник отзывов (например ПроДокторов). */
  reviewsSource?: { url: string; label: string };
  /** Несколько сервисов с отзывами (НаПоправку, Яндекс, 32top и т.д.). */
  reviewsSources?: { url: string; label: string }[];
  /** Базовый путь для страниц направлений (например /services/dentistry/orthodontics). Если задан, «Подробнее» ведёт на страницу направления. */
  directionPageBasePath?: string;
}
