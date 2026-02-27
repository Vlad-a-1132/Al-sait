import { directions } from "./directions";
import type { DirectionId } from "./directions";

/** Слаги страниц направлений ортодонтии (совпадают с id направлений). */
export const ORTHO_DIRECTION_SLUGS: DirectionId[] = [
  "bite-correction",
  "gnathology-vnjc",
  "jaw-defects",
  "braces",
  "aligners",
  "children-ortho",
  "retention",
];

export function getOrthoDirectionBySlug(slug: string) {
  if (!ORTHO_DIRECTION_SLUGS.includes(slug as DirectionId)) return null;
  return directions.find((d) => d.id === slug) ?? null;
}

/** Изображения для страниц направлений (как на странице врача #details). */
export const ORTHO_DIRECTION_IMAGE: Record<DirectionId, string> = {
  "bite-correction": "/images/services/task_01kjedhsx1fr0r6jshty3weha3_1772158013_img_1.webp",
  "gnathology-vnjc": "/images/services/task_01kjee10vbfzft0p4jwc1jhhy9_1772158514_img_0.webp",
  "jaw-defects": "/images/services/task_01kjeeh8ave6yvj14anr34q620_1772159046_img_0.webp",
  braces: "/images/services/task_01kjef6tahe3fb2acdv7jvkhpn_1772159752_img_0.webp",
  aligners: "/images/services/task_01kjefcfecevgathas0khxayzn_1772159936_img_1.webp",
  "children-ortho": "/images/services/task_01kjefj215evg92prh3rbbcnfk_1772160119_img_1.webp",
  retention: "/images/services/task_01kjefpfnkep6vwvme4h9ydfbt_1772160257_img_0.webp",
};

const BASE_URL = "https://altamed-c.ru/services/dentistry/orthodontics";

export function getOrthoDirectionCanonical(slug: string) {
  return `${BASE_URL}/${slug}`;
}
