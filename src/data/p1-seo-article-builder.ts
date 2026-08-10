import type { PrioritySeoArticle } from "@/data/priority-seo-articles";

export type P1ArticleSeed = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  direction: PrioritySeoArticle["direction"];
  image: string;
  imageAlt: string;
  topic: string;
  lead: string;
  answer: string;
  causes: string;
  consult: string;
  diagnostics: string;
  serviceHref: string;
  serviceLabel: string;
  heroCaption: string;
  note: string[];
  prepare: string[];
  scenarios: Array<{ title: string; text: string; accent: string }>;
  faq: Array<{ question: string; answer: string }>;
  related: Array<{ title: string; href: string }>;
};

export function makeP1Article(seed: P1ArticleSeed): [string, PrioritySeoArticle] {
  const article: PrioritySeoArticle = {
    title: seed.title,
    description: seed.description,
    h1: seed.h1,
    category: seed.category,
    direction: seed.direction,
    readingTime: "8–10 минут",
    image: seed.image,
    imageAlt: seed.imageAlt,
    intro: [
      seed.lead,
      `Разбираем запрос «${seed.topic}» без самодиагностики: что полезно отметить, как проходит консультация и какой следующий шаг может предложить врач.`,
    ],
    answer: seed.answer,
    summaryTitle: `Главное о жалобе «${seed.topic}»`,
    heroChips: seed.scenarios.map((item) => item.title),
    heroCaption: seed.heroCaption,
    primaryCtaLabel: "Записаться онлайн",
    secondaryCtaLabel: seed.serviceLabel,
    overviewSteps: [
      { title: "Собираем контекст", text: `Когда появилась жалоба «${seed.topic}», как меняется и что уже предпринимали.` },
      { title: "Проводим осмотр", text: seed.consult },
      { title: "Выбираем маршрут", text: "Обследование или лечение обсуждаются после оценки ситуации, а не по универсальной схеме." },
    ],
    scenariosTitle: `Как может проявляться ${seed.topic}`,
    scenariosLead: "Одинаковое название жалобы может скрывать разные ситуации. Сценарии помогают точнее описать врачу динамику и сопутствующие признаки.",
    scenarios: seed.scenarios,
    serviceHref: seed.serviceHref,
    serviceLabel: seed.serviceLabel,
    sections: [
      {
        id: "chto-otmetit",
        title: "Что полезно отметить до консультации",
        paragraphs: [
          `Для врача важна не только сама жалоба «${seed.topic}», но и её начало, длительность, повторяемость и связь с нагрузкой, временем суток или другими обстоятельствами.`,
          "Короткая хронология помогает быстрее отделить случайный эпизод от устойчивой проблемы и выбрать осмысленный диагностический маршрут.",
        ],
        points: seed.note,
      },
      {
        id: "vozmozhnye-prichiny",
        title: "Почему одной жалобы недостаточно для вывода",
        paragraphs: [
          seed.causes,
          "Похожие ощущения могут возникать по разным причинам, поэтому статья не заменяет осмотр. Задача консультации — связать жалобу с объективными признаками и не назначать лишнее.",
        ],
      },
      {
        id: "kak-prohodit-priem",
        title: "Как проходит профильная консультация",
        paragraphs: [
          seed.consult,
          "После осмотра врач объясняет рабочую версию понятным языком и обсуждает следующий шаг. Если нужен другой специалист, пациент получает направление, а не набор несвязанных рекомендаций.",
        ],
      },
      {
        id: "diagnostika",
        title: "Какие обследования могут понадобиться",
        paragraphs: [
          seed.diagnostics,
          "Проходить максимальный набор исследований заранее обычно не требуется: метод выбирают под конкретный вопрос после беседы и осмотра.",
        ],
      },
      {
        id: "podgotovka",
        title: "Как сделать первый визит полезнее",
        paragraphs: [
          "Специальная подготовка чаще всего не нужна. Полезнее собрать уже имеющиеся сведения и ничего не скрывать косметикой, обезболивающими или случайными процедурами прямо перед осмотром, если это не назначено врачом.",
        ],
        points: seed.prepare,
      },
      {
        id: "v-altamed",
        title: `${seed.serviceLabel}: маршрут в Альтамед-С`,
        paragraphs: [
          `В Альтамед-С можно начать с профильной консультации по направлению «${seed.category}». Врач сопоставит жалобы, осмотр и уже выполненные исследования, после чего объяснит возможные варианты дальнейших действий.`,
          "Запись доступна онлайн. При оформлении визита назовите основную жалобу и возраст пациента — это поможет выбрать подходящего специалиста и формат консультации.",
        ],
      },
    ],
    faqTitle: `Частые вопросы: ${seed.topic}`,
    faq: [
      ...seed.faq,
      { question: "Нужно ли проходить обследования заранее?", answer: "Не обязательно. Возьмите уже выполненные исследования, а новые врач подберёт после уточнения задачи." },
      { question: "Что взять на приём?", answer: "Предыдущие заключения, результаты исследований, список лекарств и короткую хронологию симптома." },
    ],
    finalCtaTitle: `Разобраться с жалобой «${seed.topic}» на консультации`,
    finalCtaText: `Выберите удобное время онлайн. При записи назовите жалобу «${seed.topic}» — администратор поможет подобрать профильного специалиста.`,
    related: seed.related,
    sources: [],
  };

  return [seed.slug, article];
}

export function makeP1Articles(seeds: P1ArticleSeed[]): Record<string, PrioritySeoArticle> {
  return Object.fromEntries(seeds.map(makeP1Article));
}
