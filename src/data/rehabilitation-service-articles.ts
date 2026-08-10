const OZONE_IMAGE = "/images/yslugi/ozone-therapy.webp";
const OSTEOPATHY_IMAGE = "/images/yslugi/Osteopathy.webp";
const PEDIATRIC_IMAGE = "/images/yslugi/Pediatrician.webp";

export const REHABILITATION_SERVICE_ARTICLES = [
  {
    title: "Озонотерапия: как проходит процедура и что спросить у врача",
    desc: "Этапы внутривенной инфузии, подготовка, вопросы безопасности и границы метода без рекламных обещаний.",
    url: "/blog/ozonoterapiya-kak-prohodit-protsedura",
    image: OZONE_IMAGE,
  },
  {
    title: "Остеопатический приём: как подготовиться и чего ожидать",
    desc: "Документы, этапы осмотра, вопросы врачу и признаки, при которых нужен другой специалист.",
    url: "/blog/osteopaticheskiy-priem-kak-podgotovitsya",
    image: OSTEOPATHY_IMAGE,
  },
  {
    title: "Детский остеопат: как проходит первый приём",
    desc: "Памятка родителям: подготовка ребёнка, границы метода и ситуации для срочного обращения к педиатру.",
    url: "/blog/detskiy-osteopat-kak-prohodit-priem",
    image: PEDIATRIC_IMAGE,
  },
] as const;
