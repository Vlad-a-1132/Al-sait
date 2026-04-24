/**
 * Allergology blog articles list (public URLs are /blog/*, physical routes are /articles/*).
 * Keep it consistent with how the blog index is generated.
 */
export const ALLERGOLOGY_ARTICLES_LIST = [
  {
    direction: 'allergology',
    title: 'Когда стоит обратиться к аллергологу',
    desc: 'Типичные симптомы и ситуации, когда консультация помогает быстрее понять причину и подобрать план действий.',
    url: '/blog/kogda-stoit-obratitsya-k-allergologu',
    image: '/images/blog/Kogda%20stoit%20obratitsya%20k%20allergologu.webp',
  },
  {
    direction: 'allergology',
    title: 'Аллергопробы: как проходят и когда нужны',
    desc: 'Что такое кожные тесты, как обычно проходит процедура, нужна ли подготовка и какие бывают ограничения.',
    url: '/blog/allergoproby-kak-prohodyat-i-kogda-nuzhny',
    image: '/images/blog/Allergoproby%20kak%20prokhodyat%20i%20kogda%20nuzhny.webp',
  },
  {
    direction: 'allergology',
    title: 'Сезонная аллергия: симптомы и когда записываться',
    desc: 'Поллиноз простыми словами: на что обращать внимание, когда стоит обсудить аллергию и что подготовить к приёму.',
    url: '/blog/sezonnaya-allergiya-simptomy-i-kogda-zapisyvatsya',
    image: '/images/blog/Sezonnaya%20allergiya%20simptomy%20i%20kogda%20zapisyvatsya.webp',
  },
  {
    direction: 'allergology',
    title: 'Аллергия у детей: с какими симптомами обращаться',
    desc: 'Как родителям ориентироваться в симптомах, что важно наблюдать дома и что взять на консультацию.',
    url: '/blog/allergiya-u-detej-s-kakimi-simptomami-obrashchatsya',
    image: '/images/blog/Allergiya%20u%20detey%20s%20kakimi%20simptomami%20obrashchatsya.webp',
  },
  {
    direction: 'allergology',
    title: 'Как подготовиться к приёму аллерголога',
    desc: 'Какие наблюдения и документы помогут сделать консультацию более предметной и полезной.',
    url: '/blog/kak-podgotovitsya-k-priemu-allergologa',
    image: '/images/blog/Kak%20podgotovitsya%20k%20priyemu%20allergologa.webp',
  },
] as const;

