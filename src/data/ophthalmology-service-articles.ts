/** Карточки для блока «Статьи» на странице офтальмологии; публичные URL — /blog/<slug> */
export type OphthalmologyServiceArticleCard = {
  title: string;
  desc: string;
  url: string;
  image: string;
};

const HERO = "/images/images allergoly/oftalmologia.webp";

export const OPHTHALMOLOGY_SERVICE_ARTICLES: OphthalmologyServiceArticleCard[] = [
  {
    title: "Когда стоит обратиться к офтальмологу",
    desc: "Плановые и срочные ситуации: что можно отследить дома, а когда лучше не откладывать визит.",
    url: "/blog/kogda-stoit-obratitsya-k-oftalmologu",
    image: HERO,
  },
  {
    title: "Сухость и усталость глаз: когда нужен врач",
    desc: "Экраны, линзы, кондиционер — как отличить бытовую усталость от состояния, которое стоит обсудить с врачом.",
    url: "/blog/suhost-i-ustalost-glaz-kogda-nuzhen-vrach",
    image: HERO,
  },
  {
    title: "Мушки и вспышки перед глазами: когда это опасно",
    desc: "Какие изменения в поле зрения считаются тревожными и почему важна своевременная оценка сетчатки.",
    url: "/blog/mushki-i-vspyshki-pered-glazami-kogda-eto-opasno",
    image: HERO,
  },
  {
    title: "Проверка зрения и подбор очков: как проходит приём",
    desc: "Что обычно делают на консультации, какие вопросы задают и как готовиться к подбору коррекции.",
    url: "/blog/proverka-zreniya-i-podbor-ochkov-kak-prohodit-priem",
    image: HERO,
  },
  {
    title: "Осмотр глаз при сахарном диабете",
    desc: "Зачем смотреть сетчатку при диабете, даже если зрение «нормальное», и как часто планировать контроль.",
    url: "/blog/osmotr-glaz-pri-sakharnom-diabete",
    image: HERO,
  },
  {
    title: "Внутриглазное давление: зачем его измеряют",
    desc: "Простыми словами о тонометрии, глаукоме и плановом наблюдении по показаниям врача.",
    url: "/blog/vnutriglaznoe-davlenie-zachem-ego-izmerjajut",
    image: HERO,
  },
  {
    title: "Контактные линзы: когда нужна консультация офтальмолога",
    desc: "Покраснение, дискомфорт, подбор режима ношения — когда стоит показать глаза специалисту.",
    url: "/blog/kontaktnye-linzy-kogda-nuzhna-konsultatsiya-oftalmologa",
    image: HERO,
  },
  {
    title: "Покраснение глаза: когда не стоит лечиться самостоятельно",
    desc: "Почему «капли соседки» могут маскировать симптомы и когда нужен осмотр на щели.",
    url: "/blog/pokrasnenie-glaza-kogda-ne-stoit-lechitsya-samostoyatelno",
    image: HERO,
  },
];
