import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

type ScheduleSlot = {
  start: string;
  end: string;
};

type Doctor = {
  name: string;
  slug?: string;
  specialization: string;
  specializations?: string[];
  schedule?: Record<string, ScheduleSlot | undefined>;
};

type Service = {
  source: string;
  category: string;
  code: string;
  name: string;
  price: number;
};

type Promotion = {
  id: number;
  title: string;
  description: string;
  href: string;
  category: string;
  shortTitle: string;
  shortOffer: string;
  shortNote?: string;
  keywords: string[];
};

type Knowledge = {
  clinic: {
    name: string;
    phone: string;
    email: string;
    hours: string;
    addresses: string[];
  };
  doctors: Doctor[];
  services: Service[];
};

const DATA_FILE = path.join(process.cwd(), "data", "chat-knowledge.json");

const DAYS = [
  { key: "Monday", label: "Пн", words: ["понедельник", "пн"] },
  { key: "Tuesday", label: "Вт", words: ["вторник", "вт"] },
  { key: "Wednesday", label: "Ср", words: ["среда", "среду", "ср"] },
  { key: "Thursday", label: "Чт", words: ["четверг", "чт"] },
  { key: "Friday", label: "Пт", words: ["пятница", "пятницу", "пт"] },
  { key: "Saturday", label: "Сб", words: ["суббота", "субботу", "сб"] },
  { key: "Sunday", label: "Вс", words: ["воскресенье", "вс"] },
] as const;

const STOP_WORDS = new Set([
  "где",
  "как",
  "когда",
  "какие",
  "какой",
  "какая",
  "для",
  "можно",
  "нужно",
  "надо",
  "есть",
  "подскажите",
  "скажите",
  "цена",
  "цены",
  "стоимость",
  "стоит",
  "сколько",
  "расписание",
  "график",
  "врач",
  "врача",
  "врачи",
  "услуга",
  "услуги",
  "анализ",
  "анализы",
  "прием",
  "приём",
  "консультация",
  "альтамед",
  "altamed",
]);

const PROMOTION_GENERIC_WORDS = new Set([
  "акция",
  "акции",
  "акций",
  "акцию",
  "скидка",
  "скидки",
  "скидку",
  "скидок",
  "для",
  "есть",
  "на",
  "по",
  "спецпредложение",
  "спецпредложения",
]);

const SHORT_QUERY_TOKENS = new Set(["кт", "узи", "лор", "оак"]);

const APPOINTMENT_SPECIALTIES = [
  {
    category: "ПЕДИАТР",
    label: "педиатра",
    stems: ["педиатр", "педиат", "педиатор", "педеатр"],
    exclude: [],
  },
  {
    category: "ГИНЕКОЛОГ",
    label: "акушера-гинеколога",
    stems: ["гинеколог", "гинекол", "гинеклог", "гениколог", "генеколог"],
    exclude: ["беремен", "сексолог"],
  },
  {
    category: "ТЕРАПЕВТ",
    label: "терапевта",
    stems: ["терапевт", "терапефт", "терап"],
    exclude: [],
  },
  {
    category: "КАРДИОЛОГ",
    label: "кардиолога",
    stems: ["кардиолог", "кардиол", "кардеолог"],
    exclude: [],
  },
  {
    category: "НЕВРОЛОГ",
    label: "невролога",
    stems: ["невролог", "неврол", "неврлог"],
    exclude: [],
  },
  {
    category: "ОТОРИНОЛАРИНГОЛОГ/СУРДОЛОГ-ОТОРИНОЛАРИНГОЛОГ",
    label: "ЛОР-врача",
    stems: ["лор", "отоларинголог", "оториноларинголог", "ухо горло нос"],
    exclude: [],
  },
];

const PROMOTIONS: Promotion[] = [
  {
    id: 1,
    category: "diagnostics",
    href: "/promo/promo-1",
    title: "Скидки на компьютерную томографию",
    description: "КТ: понедельник, среда, пятница - 20%, суббота - 25%",
    shortTitle: "КТ",
    shortOffer: "-20% в пн/ср/пт, -25% в сб",
    shortNote: "компьютерная томография",
    keywords: ["кт", "томограф", "компьютерн", "диагност"],
  },
  {
    id: 2,
    category: "diagnostics",
    href: "/promo/promo-2",
    title: "Комплексное УЗИ для женщин",
    description: "УЗИ малого таза, молочных желез и щитовидной железы - 5 200 ₽ вместо 6 200 ₽",
    shortTitle: "УЗИ для женщин",
    shortOffer: "5 200 ₽ вместо 6 200 ₽",
    shortNote: "малый таз + молочные железы + щитовидная железа",
    keywords: ["узи", "ультразвук", "женщ", "гинек", "молочн", "щитовид", "малого таза"],
  },
  {
    id: 3,
    category: "consultations",
    href: "/promo/promo-3",
    title: "Скидки для пенсионеров и многодетных",
    description: "10% на все услуги, кроме стоматологии",
    shortTitle: "Пенсионерам и многодетным",
    shortOffer: "-10%",
    shortNote: "на услуги, кроме стоматологии",
    keywords: ["пенсион", "многодет", "льгот", "консультац", "прием"],
  },
  {
    id: 4,
    category: "diagnostics",
    href: "/promo/promo-4",
    title: "Скидки на анализы",
    description: "Понедельник, среда, пятница - 10%, воскресенье - 15%",
    shortTitle: "Анализы",
    shortOffer: "-10% в пн/ср/пт, -15% в вс",
    shortNote: "забор крови с 8:00 до 12:00",
    keywords: ["анализ", "кров", "моч", "лаборатор", "исследован"],
  },
  {
    id: 5,
    category: "consultations",
    href: "/promo/promo-5",
    title: "Кольпоскопия в подарок",
    description: "При первичном приеме акушера-гинеколога кольпоскопия бесплатно",
    shortTitle: "Гинеколог",
    shortOffer: "кольпоскопия в подарок",
    shortNote: "при первичном приеме",
    keywords: ["гинек", "кольпоскоп", "женск", "первичн", "прием"],
  },
  {
    id: 6,
    category: "massage",
    href: "/promo/promo-6",
    title: "Скидка 30% на общий массаж медицинский",
    description: "Общий массаж медицинский - 3 430 ₽ вместо 4 200 ₽",
    shortTitle: "Общий массаж",
    shortOffer: "3 430 ₽ вместо 4 200 ₽",
    shortNote: "медицинский массаж",
    keywords: ["массаж", "масаж", "спин", "ше", "общий"],
  },
  {
    id: 7,
    category: "consultations",
    href: "/promo/promo-7",
    title: "День пенсионера",
    description: "Понедельник и пятница - специальные скидки до 25%",
    shortTitle: "День пенсионера",
    shortOffer: "до -25%",
    shortNote: "понедельник и пятница",
    keywords: ["пенсион", "пожил", "льгот", "понедельник", "пятниц"],
  },
];

const GENERAL_PROMOTION_ORDER = [4, 3, 7, 6, 1, 2, 5];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/масаж/g, "массаж")
    .replace(/геник/g, "гинек")
    .replace(/генек/g, "гинек")
    .replace(/гинеклог/g, "гинеколог")
    .replace(/педиатор/g, "педиатр")
    .replace(/педеатр/g, "педиатр")
    .replace(/обший/g, "общий")
    .replace(/кроф/g, "кров")
    .replace(/скоко/g, "сколько")
    .replace(/[^\p{L}\p{N}.]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string) {
  return normalize(value)
    .split(" ")
    .filter((token) => (token.length > 2 || SHORT_QUERY_TOKENS.has(token)) && !STOP_WORDS.has(token));
}

function tokenVariants(token: string) {
  const variants = new Set([token]);
  const endings = ["ого", "его", "ому", "ему", "ами", "ями", "ами", "ах", "ях", "ов", "ев", "ой", "ей", "ая", "яя", "ое", "ее", "ые", "ие", "ом", "ем", "ам", "ям", "а", "я", "у", "ю", "ы", "и", "е"];

  for (const ending of endings) {
    if (token.endsWith(ending) && token.length - ending.length >= 4) {
      variants.add(token.slice(0, -ending.length));
    }
  }

  return Array.from(variants);
}

async function loadKnowledge(): Promise<Knowledge> {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function hasAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

function hasToken(text: string, token: string) {
  return text.split(" ").includes(token);
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

function formatPromotionLine(promotion: Promotion) {
  return `• ${promotion.title} — ${promotion.description}. Подробнее: ${promotion.href}`;
}

function formatPromotionSummaryLine(promotion: Promotion) {
  const note = promotion.shortNote ? ` (${promotion.shortNote})` : "";
  return `• ${promotion.shortTitle}: ${promotion.shortOffer}${note}`;
}

function getGeneralPromotions() {
  return GENERAL_PROMOTION_ORDER.map((id) =>
    PROMOTIONS.find((promotion) => promotion.id === id)
  ).filter((promotion): promotion is Promotion => Boolean(promotion));
}

function formatPromotionDetailLine(promotion: Promotion) {
  const note = promotion.shortNote ? ` (${promotion.shortNote})` : "";
  return `• ${promotion.shortTitle}: ${promotion.shortOffer}${note}. Подробнее: ${promotion.href}`;
}

function scorePromotion(promotion: Promotion, tokens: string[], messageNormalized: string) {
  const haystack = normalize(
    `${promotion.title} ${promotion.description} ${promotion.category} ${promotion.keywords.join(" ")}`
  );
  let score = 0;

  for (const keyword of promotion.keywords) {
    const normalizedKeyword = normalize(keyword);
    if (normalizedKeyword && messageNormalized.includes(normalizedKeyword)) {
      score += 12;
    }
  }

  for (const token of tokens) {
    if (PROMOTION_GENERIC_WORDS.has(token)) {
      continue;
    }

    for (const variant of tokenVariants(token)) {
      if (haystack.includes(variant)) {
        score += 4;
      }
    }
  }

  return score;
}

function findRelatedPromotions(messageNormalized: string, limit = 2) {
  const tokens = tokenize(messageNormalized);
  return PROMOTIONS.map((promotion) => ({
    promotion,
    score: scorePromotion(promotion, tokens, messageNormalized),
  }))
    .filter((item) => item.score > 0)
    .filter(
      (item) =>
        !(item.promotion.id === 3 && (messageNormalized.includes("стомат") || messageNormalized.includes("зуб")))
    )
    .sort((a, b) => b.score - a.score || a.promotion.id - b.promotion.id)
    .slice(0, limit)
    .map((item) => item.promotion);
}

function uniquePromotions(promotions: Array<Promotion | undefined>, limit = 2) {
  const usedIds = new Set<number>();
  const result: Promotion[] = [];

  for (const promotion of promotions) {
    if (!promotion || usedIds.has(promotion.id)) {
      continue;
    }

    usedIds.add(promotion.id);
    result.push(promotion);

    if (result.length >= limit) {
      break;
    }
  }

  return result;
}

function formatPromotionsBlock(promotions: Promotion[]) {
  if (promotions.length === 0) {
    return "";
  }

  const heading =
    promotions.length === 1
      ? "Также на сайте есть подходящая акция:"
      : "Также на сайте есть подходящие акции:";

  return `\n\n${heading}\n${promotions
    .map(formatPromotionDetailLine)
    .join("\n")}\nУсловия акции администратор уточнит перед записью.`;
}

function findServiceRelatedPromotions(messageNormalized: string, _services: Service[]) {
  const query = messageNormalized;
  const isDentalQuery = hasAny(query, [
    "стомат",
    "зуб",
    "челюст",
    "кариес",
    "брекет",
    "имплант",
    "ортодонт",
  ]);

  return uniquePromotions([
    query.includes("массаж") ? PROMOTIONS.find((promotion) => promotion.id === 6) : undefined,
    !isDentalQuery &&
    (query.includes("анализ") ||
      query.includes("кров") ||
      query.includes("моч") ||
      query.includes("лаборатор"))
      ? PROMOTIONS.find((promotion) => promotion.id === 4)
      : undefined,
    isCtRequest(query)
      ? PROMOTIONS.find((promotion) => promotion.id === 1)
      : undefined,
    isUltrasoundRequest(query) &&
    hasAny(query, ["малого таза", "женщ", "молочн", "щитовид"])
      ? PROMOTIONS.find((promotion) => promotion.id === 2)
      : undefined,
    query.includes("гинек") || query.includes("кольпоскоп")
      ? PROMOTIONS.find((promotion) => promotion.id === 5)
      : undefined,
    ...(hasAny(query, ["пенсион", "многодет", "льгот"]) && !isDentalQuery
      ? PROMOTIONS.filter((promotion) => promotion.id === 3 || promotion.id === 7)
      : []),
  ]);
}

function answerPromotions(messageNormalized: string) {
  const relatedPromotions = findRelatedPromotions(messageNormalized, 5);
  const isDentalPromoRequest = hasAny(messageNormalized, ["стомат", "зуб", "брек", "имплант", "ортодонт"]);

  if (isDentalPromoRequest && relatedPromotions.length === 0) {
    return [
      "Отдельной общей скидки на стоматологию в списке акций не нашла.",
      "На странице акций есть стоматологические баннеры:",
      "• Имплантация и лечение — запись к стоматологу-хирургу/имплантологу: /doctor/abramov-implantolog",
      "• Ортодонтия — брекеты и элайнеры, запись к ортодонту: /doctor/goncharenko-ortodont",
      "",
      "Перед записью администратор уточнит условия и стоимость.",
    ].join("\n");
  }

  const promotions = relatedPromotions.length > 0 ? relatedPromotions : getGeneralPromotions();
  const isGenericPromoRequest = relatedPromotions.length === 0;

  if (isGenericPromoRequest) {
    return [
      "Акции сейчас:",
      ...promotions.map(formatPromotionSummaryLine),
      "",
      "Можно спросить точнее: «акция на анализы», «скидка на массаж», «акции для пенсионеров», «акция на КТ».",
      "Все условия: /promo",
      "Перед записью администратор подтвердит, действует ли акция на выбранную услугу.",
    ].join("\n");
  }

  return `Подходящие акции:\n${promotions
    .map(formatPromotionDetailLine)
    .join("\n")}\n\nВсе условия: /promo\nПеред записью администратор подтвердит, действует ли акция на выбранную услугу.`;
}

function includesAnyStem(text: string, stems: string[]) {
  return stems.some((stem) => text.includes(stem));
}

function isBloodCountRequest(text: string) {
  return (
    text.includes("оак") ||
    ((text.includes("общ") || text.includes("обш")) &&
      text.includes("анализ") &&
      text.includes("кров"))
  );
}

function isDriverLicenseMedicalRequest(text: string) {
  const hasDriverLicenseContext =
    text.includes("прав") ||
    text.includes("водител") ||
    text.includes("водительск");
  const hasMedicalContext =
    text.includes("анализ") ||
    text.includes("справк") ||
    text.includes("комисс") ||
    text.includes("медкомисс") ||
    text.includes("медосмотр");

  return hasDriverLicenseContext && hasMedicalContext;
}

function isCtRequest(text: string) {
  return hasToken(text, "кт") || text.includes("томограф");
}

function isUltrasoundRequest(text: string) {
  return hasToken(text, "узи") || text.includes("ультразву");
}

function bookingClarification(knowledge: Knowledge) {
  return `Свободное время и цены для записи лучше уточнить по телефону ${knowledge.clinic.phone}. Напишите имя и контакты, и наш администратор с вами свяжется.`;
}

function answerDriverLicenseMedicalRequest(knowledge: Knowledge) {
  return [
    "По справке или медкомиссии для водительских прав набор обследований зависит от категории и требований.",
    "Отдельную услугу «анализы на права» в прайсе я не нашла, поэтому не буду подбирать случайные позиции.",
    `Лучше уточнить у администратора по телефону ${knowledge.clinic.phone}. Напишите имя и контакты, и наш администратор с вами свяжется.`,
  ].join("\n");
}

function findAppointmentSpecialty(messageNormalized: string) {
  const hasAppointmentWords = hasAny(messageNormalized, [
    "прием",
    "приём",
    "консультац",
    "запис",
    "стоимость",
    "сколько",
    "цена",
    "стоит",
  ]);

  if (!hasAppointmentWords) {
    return undefined;
  }

  return APPOINTMENT_SPECIALTIES.find((specialty) =>
    includesAnyStem(messageNormalized, specialty.stems)
  );
}

function formatAppointmentPriceAnswer(knowledge: Knowledge, messageNormalized: string) {
  const specialty = findAppointmentSpecialty(messageNormalized);
  if (!specialty) {
    return undefined;
  }

  const services = knowledge.services.filter((service) => {
    const category = normalize(service.category);
    const name = normalize(service.name);
    const excludes = messageNormalized.includes("беремен") ? [] : specialty.exclude;

    return (
      category === normalize(specialty.category) &&
      name.includes("прием") &&
      excludes.every((word) => !name.includes(word))
    );
  });

  const findService = (predicate: (name: string) => boolean) =>
    services.find((service) => predicate(normalize(service.name)));

  const primary = findService(
    (name) => name.includes("первичный") && !name.includes("к.м.н")
  );
  const repeat = findService(
    (name) => name.includes("повторный") && !name.includes("к.м.н")
  );
  const candidatePrimary = findService(
    (name) => name.includes("первичный") && name.includes("к.м.н")
  );
  const candidateRepeat = findService(
    (name) => name.includes("повторный") && name.includes("к.м.н")
  );

  const lines = [
    primary ? `• Первичный прием ${specialty.label} — ${formatPrice(primary.price)}` : "",
    repeat ? `• Повторный прием ${specialty.label} — ${formatPrice(repeat.price)}` : "",
    candidatePrimary
      ? `• Первичный прием ${specialty.label} к.м.н. — ${formatPrice(candidatePrimary.price)}`
      : "",
    candidateRepeat
      ? `• Повторный прием ${specialty.label} к.м.н. — ${formatPrice(candidateRepeat.price)}`
      : "",
  ].filter(Boolean);

  if (lines.length === 0) {
    return undefined;
  }

  const relatedPromotions = uniquePromotions([
    specialty.category === "ГИНЕКОЛОГ" ? PROMOTIONS.find((promotion) => promotion.id === 5) : undefined,
    ...(hasAny(messageNormalized, ["пенсион", "многодет", "льгот"])
      ? PROMOTIONS.filter((promotion) => promotion.id === 3 || promotion.id === 7)
      : []),
  ]);

  return `По прайсу:\n${lines.join(
    "\n"
  )}${formatPromotionsBlock(
    relatedPromotions
  )}\n\n${bookingClarification(knowledge)}`;
}

function formatMassagePriceAnswer(knowledge: Knowledge, messageNormalized: string) {
  if (!messageNormalized.includes("массаж")) {
    return undefined;
  }

  const massageServices = knowledge.services.filter(
    (service) => normalize(service.category) === "массаж"
  );

  const preferredNames = [
    "общий массаж медицинский",
    "массаж спины медицинский",
    "массаж шеи медицинский",
    "массаж воротниковой области",
    "массаж ног медицинский",
    "массаж и гимнастика у детей раннего возраста",
  ];

  const hasDetail = hasAny(messageNormalized, [
    "спин",
    "ше",
    "ворот",
    "ног",
    "дет",
    "лиц",
    "голов",
    "живот",
    "пояс",
    "сустав",
  ]);
  const detailStems = [
    "спин",
    "ше",
    "ворот",
    "ног",
    "дет",
    "лиц",
    "голов",
    "живот",
    "пояс",
    "сустав",
  ].filter((stem) => messageNormalized.includes(stem));
  const detailServices =
    detailStems.length > 0
      ? massageServices.filter((service) => {
          const name = normalize(service.name);
          return detailStems.some((stem) => name.includes(stem));
        })
      : massageServices;

  const matches = hasDetail
    ? detailServices
        .map((service) => ({
          service,
          score: scoreService(service, tokenize(messageNormalized), messageNormalized),
        }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || a.service.price - b.service.price)
        .slice(0, 6)
        .map((item) => item.service)
    : preferredNames
        .map((preferredName) =>
          massageServices.find((service) => normalize(service.name) === preferredName)
        )
        .filter((service): service is Service => Boolean(service));

  if (matches.length === 0) {
    return undefined;
  }

  const lines = matches.map((service) => `• ${service.name} — ${formatPrice(service.price)}`);
  const relatedPromotions = uniquePromotions([
    PROMOTIONS.find((promotion) => promotion.id === 6),
  ]);

  return `По массажу нашла такие цены:\n${lines.join(
    "\n"
  )}${formatPromotionsBlock(
    relatedPromotions
  )}\n\nЕсли нужен конкретный вид, напишите например: «массаж спины», «массаж шеи», «детский массаж».`;
}

function getRequestedDay(message: string) {
  const normalized = normalize(message);

  if (normalized.includes("сегодня")) {
    const dayIndex = new Date().getDay();
    const normalizedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    return DAYS[normalizedIndex];
  }

  if (normalized.includes("завтра")) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const dayIndex = date.getDay();
    const normalizedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    return DAYS[normalizedIndex];
  }

  return DAYS.find((day) =>
    day.words.some((word) => (word.length <= 2 ? hasToken(normalized, word) : normalized.includes(word)))
  );
}

function formatDoctorSchedule(doctor: Doctor, requestedDay?: (typeof DAYS)[number]) {
  const schedule = doctor.schedule || {};
  const days = requestedDay ? [requestedDay] : DAYS;
  const slots = days
    .map((day) => {
      const slot = schedule[day.key];
      return slot ? `${day.label}: ${slot.start}-${slot.end}` : "";
    })
    .filter(Boolean);

  return slots.length > 0 ? slots.join(", ") : "расписание сейчас не указано";
}

function scoreDoctor(doctor: Doctor, tokens: string[], message: string) {
  const name = normalize(doctor.name);
  const specialization = normalize(
    [doctor.specialization, ...(doctor.specializations || [])].join(" ")
  );
  const haystack = `${name} ${specialization}`;
  const phrase = normalize(message);
  let score = 0;

  if (phrase.length > 3 && haystack.includes(phrase)) {
    score += 12;
  }

  if (hasToken(phrase, "лор") && (specialization.includes("отоларинголог") || specialization.includes("лор"))) {
    score += 20;
  }

  for (const token of tokens) {
    for (const variant of tokenVariants(token)) {
      if (token.length <= 3) {
        if (hasToken(name, variant)) score += 5;
      } else if (name.includes(variant)) {
        score += 5;
      }
      if (token.length <= 3) {
        if (hasToken(specialization, variant)) score += 4;
        if (hasToken(haystack, variant)) score += 2;
      } else {
        if (specialization.includes(variant)) score += 4;
        if (haystack.includes(variant)) score += 2;
      }
    }
  }

  return score;
}

function hasDoctorMatch(knowledge: Knowledge, message: string) {
  const tokens = tokenize(message);
  return knowledge.doctors.some((doctor) => scoreDoctor(doctor, tokens, message) > 0);
}

function scoreService(service: Service, tokens: string[], message: string) {
  const name = normalize(service.name);
  const category = normalize(service.category);
  const code = normalize(service.code);
  const haystack = `${name} ${category} ${code}`;
  const phrase = normalize(message);
  let score = 0;

  if (phrase.length > 3 && haystack.includes(phrase)) {
    score += 20;
  }

  if (
    (phrase.includes("общий анализ крови") || phrase.includes("оак")) &&
    name.includes("клинический анализ крови")
  ) {
    score += 30;
  }

  if (
    isCtRequest(phrase) &&
    (hasToken(name, "кт") || name.includes("томограф") || category.includes("томограф"))
  ) {
    score += 35;
  }

  if (phrase.includes("ортодонт") && name.includes("врача ортодонта")) {
    score += name.includes("анализ") ? 25 : 45;
  }

  if (phrase.includes("удал") && phrase.includes("зуб")) {
    if (name.includes("удаление зуб")) score += 50;
    if (category.includes("удаление зуб")) score += 25;
    if (name.includes("отлож")) score -= 20;
  }

  for (const token of tokens) {
    for (const variant of tokenVariants(token)) {
      if (code === variant) score += 20;
      if (name.includes(variant)) score += 6;
      if (category.includes(variant)) score += 3;
      if (haystack.includes(variant)) score += 1;
    }
  }

  return score;
}

function answerContacts(knowledge: Knowledge) {
  return [
    `${knowledge.clinic.name} работает ${knowledge.clinic.hours}.`,
    `Телефон: ${knowledge.clinic.phone}.`,
    `Адреса: ${knowledge.clinic.addresses.join("; ")}.`,
  ].join("\n");
}

function answerSpecialties(knowledge: Knowledge) {
  const specialties = Array.from(
    new Set(
      knowledge.doctors.flatMap((doctor) =>
        doctor.specializations?.length ? doctor.specializations : [doctor.specialization]
      )
    )
  )
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "ru"));

  return `Основные специальности: ${specialties.slice(0, 28).join(", ")}.`;
}

function answerLabTypes(knowledge: Knowledge) {
  const categories = Array.from(
    new Set(
      knowledge.services
        .filter((service) => service.source.includes("Лабораторные"))
        .map((service) => service.category)
        .filter(Boolean)
    )
  );

  return `По лабораторным исследованиям есть такие разделы: ${categories
    .slice(0, 18)
    .join(", ")}. Напишите название анализа, и я подберу цену.`;
}

function answerDoctors(knowledge: Knowledge, message: string) {
  const tokens = tokenize(message);
  const normalized = normalize(message);
  const requestedDay = getRequestedDay(message);
  const genericDayRequest =
    Boolean(requestedDay) &&
    hasAny(normalized, ["какие врачи", "врачи есть", "кто работает", "кто принимает"]);

  if (genericDayRequest && requestedDay) {
    const doctorsForDay = knowledge.doctors
      .filter((doctor) => Boolean(doctor.schedule?.[requestedDay.key]))
      .slice(0, 12);

    if (doctorsForDay.length > 0) {
      const lines = doctorsForDay.map((doctor) => {
        const slot = doctor.schedule?.[requestedDay.key];
        return `• ${doctor.name} — ${doctor.specialization}. ${requestedDay.label}: ${slot?.start}-${slot?.end}`;
      });

      return `В расписании на ${requestedDay.label} есть:\n${lines.join(
        "\n"
      )}\n\n${bookingClarification(knowledge)}`;
    }
  }

  const scoredDoctors = knowledge.doctors
    .map((doctor) => ({ doctor, score: scoreDoctor(doctor, tokens, message) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
  const exactTherapistMatches = normalized.includes("терапевт")
    ? scoredDoctors.filter(({ doctor }) => {
        const specialization = normalize(
          [doctor.specialization, ...(doctor.specializations || [])].join(" ")
        );
        return (
          hasToken(specialization, "терапевт") &&
          !hasAny(specialization, ["стоматолог", "мануальн", "физиотерапевт", "рефлексотерапевт"])
        );
      })
    : [];
  const matches = (exactTherapistMatches.length > 0 ? exactTherapistMatches : scoredDoctors).slice(0, 5);

  if (matches.length === 0) {
    return "Не нашла врача по этому запросу. Напишите фамилию или специальность, например: гинеколог, ЛОР, кардиолог, УЗИ.";
  }

  const lines = matches.map(({ doctor }) => {
    const schedule = formatDoctorSchedule(doctor, requestedDay);
    return `• ${doctor.name} — ${doctor.specialization}. ${schedule}`;
  });

  return `${requestedDay ? `Расписание на ${requestedDay.label}:\n` : ""}${lines.join(
    "\n"
  )}\n\n${bookingClarification(knowledge)}`;
}

function answerConsultation(knowledge: Knowledge, messageNormalized: string) {
  const routes = [
    {
      words: ["горл", "ухо", "уши", "нос", "насморк", "гаймор", "тонзил", "пробк", "храп"],
      answer: "С такими жалобами обычно начинают с ЛОР-врача. Если есть высокая температура или сильная боль, лучше не затягивать с очным приемом.",
    },
    {
      words: ["кашель", "температур", "простуд", "орви", "слабость"],
      answer: "Можно начать с терапевта, а для ребенка — с педиатра. Врач после осмотра решит, нужны ли анализы или ЛОР.",
    },
    {
      words: ["давлен", "сердц", "пульс", "аритм", "груд"],
      answer: "По таким жалобам обычно обращаются к кардиологу. При сильной боли в груди, одышке или резкой слабости лучше обращаться за срочной помощью.",
    },
    {
      words: ["спин", "шея", "голов", "мигрен", "онемен", "мураш", "нерв"],
      answer: "С такими симптомами часто обращаются к неврологу. Если боль острая или есть слабость в руке/ноге, лучше не откладывать очный прием.",
    },
    {
      words: ["живот", "желуд", "изжог", "тошнот", "кишеч", "запор", "диаре"],
      answer: "Можно обратиться к гастроэнтерологу или терапевту. Врач подскажет, какие анализы или УЗИ нужны именно в вашей ситуации.",
    },
    {
      words: ["сып", "кожа", "пятн", "акне", "прыщ", "родин", "зуд"],
      answer: "С кожными жалобами обычно записываются к дерматологу.",
    },
    {
      words: ["щитовид"],
      answer: "По щитовидной железе обычно начинают с эндокринолога. Часто дополнительно смотрят ТТГ и УЗИ щитовидной железы, но точный набор обследований определяет врач.",
    },
    {
      words: ["зуб", "десн", "кариес", "брекет", "имплант"],
      answer: "По зубам лучше записаться к стоматологу. Если вопрос по прикусу или брекетам — к ортодонту.",
    },
    {
      words: ["беремен", "месяч", "цикл", "выделен", "гинек", "женск"],
      answer: "По таким вопросам обычно обращаются к акушеру-гинекологу.",
    },
    {
      words: ["ребен", "ребенок", "детск", "малыш"],
      answer: "Для ребенка лучше начать с педиатра. Он решит, нужен ли узкий специалист или анализы.",
    },
  ];

  const route = routes.find((item) => item.words.some((word) => messageNormalized.includes(word)));
  if (!route) {
    return undefined;
  }

  return `${route.answer}\n\nЯ не ставлю диагноз онлайн, но могу подсказать расписание врача или стоимость приема. ${bookingClarification(knowledge)}`;
}

function answerServices(knowledge: Knowledge, message: string) {
  const tokens = tokenize(message);
  const messageNormalized = normalize(message);

  if (tokens.length === 0) {
    return "Напишите название услуги или анализа, например: общий анализ крови, УЗИ брюшной полости, прием гинеколога, чистка зубов.";
  }

  if (isDriverLicenseMedicalRequest(messageNormalized)) {
    return answerDriverLicenseMedicalRequest(knowledge);
  }

  const appointmentAnswer = formatAppointmentPriceAnswer(knowledge, messageNormalized);
  if (appointmentAnswer) {
    return appointmentAnswer;
  }

  const massageAnswer = formatMassagePriceAnswer(knowledge, messageNormalized);
  if (massageAnswer) {
    return massageAnswer;
  }

  const scoredMatches = knowledge.services
    .map((service) => ({ service, score: scoreService(service, tokens, message) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.service.price - b.service.price);
  const directBloodMatches =
    isBloodCountRequest(messageNormalized)
      ? scoredMatches.filter(({ service }) => {
          const serviceName = normalize(service.name);
          return serviceName.includes("клинический анализ крови") && !serviceName.includes("включает");
        })
      : [];
  const directCtMatches =
    isCtRequest(messageNormalized)
      ? scoredMatches.filter(({ service }) => {
          const serviceName = normalize(service.name);
          const category = normalize(service.category);
          return isCtRequest(serviceName) || category.includes("томограф");
        })
      : [];
  const directUltrasoundMatches =
    isUltrasoundRequest(messageNormalized)
      ? scoredMatches.filter(({ service }) => {
          const serviceName = normalize(service.name);
          const category = normalize(service.category);
          return isUltrasoundRequest(serviceName) || isUltrasoundRequest(category);
        })
      : [];
  const filteredMatches =
    directBloodMatches.length > 0
      ? directBloodMatches
      : directCtMatches.length > 0
      ? directCtMatches
      : directUltrasoundMatches.length > 0
      ? directUltrasoundMatches
      : scoredMatches;
  const bestScore = filteredMatches[0]?.score || 0;
  const matches = filteredMatches
    .filter((item) => item.score >= Math.max(3, bestScore - 18))
    .slice(0, 6);

  if (matches.length === 0) {
    return "Не нашла цену по этому запросу. Попробуйте написать название услуги точнее или укажите раздел: анализы, стоматология, УЗИ, прием врача.";
  }

  const lines = matches.map(({ service }) => {
    return `• ${service.name} — ${formatPrice(service.price)}`;
  });

  return `Нашла по прайсу:\n${lines.join(
    "\n"
  )}${formatPromotionsBlock(
    findServiceRelatedPromotions(
      messageNormalized,
      matches.map(({ service }) => service)
    )
  )}\n\n${bookingClarification(knowledge)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { reply: "Напишите вопрос по расписанию, врачу, услуге или анализу." },
        { status: 200 }
      );
    }

    const knowledge = await loadKnowledge();
    const normalized = normalize(message);
    const promotionIntent = hasAny(normalized, [
      "акци",
      "скид",
      "спецпредлож",
      "подарок",
      "выгод",
      "льгот",
    ]);
    const priceIntent = hasAny(normalized, [
      "цена",
      "цены",
      "стоимость",
      "стоит",
      "сколько",
      "прайс",
      "анализ",
      "услуга",
      "стомат",
      "узи",
      "кт",
      "кров",
      "массаж",
      "чистк",
      "удал",
      "брекет",
      "имплант",
      "ортодонт",
      "рентген",
      "экг",
      "холтер",
    ]);
    const scheduleIntent = hasAny(normalized, [
      "распис",
      "график",
      "работает врач",
      "работает",
      "принимает",
      "врач",
      "доктор",
      "специалист",
    ]);

    if (hasAny(normalized, ["прив", "прев", "здравств", "добрый", "доброе"])) {
      return NextResponse.json({
        reply:
          "Здравствуйте! Я помогу с расписанием врачей, режимом работы, ценами услуг, лабораторными исследованиями и акциями. Напишите, что нужно найти.",
      });
    }

    if (hasAny(normalized, ["адрес", "телефон", "контак", "режим", "время работы", "часы"])) {
      return NextResponse.json({ reply: answerContacts(knowledge) });
    }

    if (hasAny(normalized, ["администратор", "админа", "оператор", "перезвон", "свяж", "позвон"])) {
      return NextResponse.json({
        reply: `Напишите имя и контакты, и наш администратор с вами свяжется. Также можно позвонить по телефону ${knowledge.clinic.phone}.`,
      });
    }

    if (hasAny(normalized, ["специальност", "направлен"])) {
      return NextResponse.json({ reply: answerSpecialties(knowledge) });
    }

    if (hasAny(normalized, ["типы анализ", "виды анализ", "разделы анализ"])) {
      return NextResponse.json({ reply: answerLabTypes(knowledge) });
    }

    if (promotionIntent) {
      return NextResponse.json({ reply: answerPromotions(normalized) });
    }

    if (findAppointmentSpecialty(normalized)) {
      return NextResponse.json({ reply: answerServices(knowledge, message) });
    }

    if (priceIntent && !scheduleIntent) {
      return NextResponse.json({ reply: answerServices(knowledge, message) });
    }

    const consultationAnswer = answerConsultation(knowledge, normalized);
    if (consultationAnswer) {
      return NextResponse.json({ reply: consultationAnswer });
    }

    if (hasAny(normalized, ["запис", "запись"])) {
      return NextResponse.json({
        reply: "Могу оставить заявку администратору. Напишите, к кому или на какую услугу записать.",
      });
    }

    if (scheduleIntent) {
      return NextResponse.json({ reply: answerDoctors(knowledge, message) });
    }

    if (priceIntent) {
      return NextResponse.json({ reply: answerServices(knowledge, message) });
    }

    if (hasDoctorMatch(knowledge, message)) {
      return NextResponse.json({ reply: answerDoctors(knowledge, message) });
    }

    return NextResponse.json({
      reply:
        "Я могу подсказать расписание врачей, специальности, режим работы, цены и акции. Например: «расписание гинеколога», «сколько стоит общий анализ крови», «какие есть акции».",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Не удалось обработать вопрос. Попробуйте еще раз или позвоните +7 (495) 255-44-50." },
      { status: 500 }
    );
  }
}
