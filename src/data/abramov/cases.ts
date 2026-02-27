import type { DirectionId } from "./directions";

export interface CaseItem {
  id: string;
  directionId: DirectionId;
  title: string;
  tag?: string;
}

export const casesAbramov: CaseItem[] = [
  { id: "1", directionId: "implantation", title: "Имплантация All-on-4", tag: "All-on-4" },
  { id: "2", directionId: "implantation", title: "Имплантация All-on-6", tag: "All-on-6" },
  { id: "3", directionId: "implantation", title: "Одиночный имплант", tag: "1 зуб" },
  { id: "4", directionId: "immediate-implantation", title: "Одномоментная имплантация", tag: "В один визит" },
  { id: "5", directionId: "prosthetics-on-implants", title: "Коронки на имплантах", tag: "Протез" },
  { id: "6", directionId: "veneers-crowns", title: "Виниры и коронки", tag: "Эстетика" },
  { id: "7", directionId: "bone-grafting", title: "Костная пластика", tag: "Кость" },
  { id: "8", directionId: "sinus-lift", title: "Синус-лифтинг", tag: "Верхняя челюсть" },
];
