import { directions } from "./directions";
import type { DirectionId } from "./directions";

/** Слаги страниц направлений имплантологии (совпадают с id направлений). */
export const IMPLANTOLOGY_DIRECTION_SLUGS: DirectionId[] = [
  "implantation",
  "bone-grafting",
  "sinus-lift",
  "soft-tissue",
  "immediate-implantation",
  "prosthetics-on-implants",
  "veneers-crowns",
];

export function getImplantologyDirectionBySlug(slug: string) {
  if (!IMPLANTOLOGY_DIRECTION_SLUGS.includes(slug as DirectionId)) return null;
  return directions.find((d) => d.id === slug) ?? null;
}

/** Изображения для страниц направлений (как на странице врача). */
export const IMPLANTOLOGY_DIRECTION_IMAGE: Record<DirectionId, string> = {
  implantation: "/images/yslugi/implant.webp",
  "bone-grafting": "/images/services/task_01kjcgwmb5errt6v65h9kzs8g0_1772094423_img_1.webp",
  "sinus-lift": "/images/services/sinus.webp",
  "soft-tissue": "/images/services/plastika.webp",
  "immediate-implantation": "/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp",
  "prosthetics-on-implants": "/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp",
  "veneers-crowns": "/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp",
};

const BASE_URL = "https://altamed-c.ru/services/dentistry/implantology";

export function getImplantologyDirectionCanonical(slug: string) {
  return `${BASE_URL}/${slug}`;
}
