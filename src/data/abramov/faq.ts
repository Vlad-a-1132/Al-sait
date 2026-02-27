import type { DirectionId } from "./directions";

export interface FaqItem {
  id: string;
  directionId?: DirectionId;
  q: string;
  a: string;
}

export const faqGeneral: FaqItem[] = [
  { id: "gen1", q: "Как записаться на приём?", a: "По телефону клиники или через форму записи на сайте." },
  { id: "gen2", q: "Используется ли обезболивание?", a: "Да. Все процедуры проводятся с анестезией. При необходимости возможна седация." },
  { id: "gen3", q: "Какие сроки лечения?", a: "Зависят от направления: от одного визита до нескольких месяцев. Точный план — после консультации." },
];
