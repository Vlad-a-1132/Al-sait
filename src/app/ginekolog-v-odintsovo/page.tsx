'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctors } from '@/data/static-data';

const WHY_CARDS = [
  { icon: 'clock', title: 'Ежедневно\n08:00–21:00', desc: 'С утра до вечера, в выходные и праздники' },
  { icon: 'star', title: 'Рейтинг\n4,8', desc: 'Высокие оценки на ПроДокторов и в Яндексе' },
  { icon: 'building', title: '2 филиала\nв Одинцово', desc: 'Можно выбрать удобный адрес приёма' },
  { icon: 'award', title: 'Стаж до\n43 лет', desc: 'Опытные врачи-гинекологи Альтамед-С' },
];

const PHONE = '+7 (495) 255-44-50';
const PHONE_LINK = 'tel:+74952554450';
const GYNECOLOGISTS_RAW = doctors.filter(
  (d) =>
    d.specialization?.toLowerCase().includes('гинеколог') ||
    d.specialization?.toLowerCase().includes('акушер')
);

const DOCTOR_EXTRA = {
  'panova-olga-yurievna': {
    competencies: ['кольпоскопия', 'планирование беременности', 'гинеколог-сексолог', 'УЗИ'],
    branch: 'оба филиала',
  },
  'peregudova-nina-alekseevna': {
    competencies: ['ведение беременности', 'воспалительные заболевания', 'заболевания шейки матки'],
    branch: 'оба филиала',
  },
  'brigadirova-elena-mikhailovna': {
    competencies: ['профилактические осмотры', 'подбор контрацепции', 'подростковая гинекология'],
    branch: 'оба филиала',
  },
};

const ANCHORS = [
  { id: 'tseny', label: 'Цены' },
  { id: 'vrachi', label: 'Врачи' },
  { id: 'napravleniya', label: 'Направления' },
  { id: 'adresa', label: 'Адреса' },
  { id: 'faq', label: 'FAQ' },
];

const TRUST_FACTS = [
  '3 врача-гинеколога в Одинцово',
  'стаж до 43 лет',
  '2 филиала в городе',
  'приём взрослых и подростков',
];

const DIRECTIONS = [
  { title: 'Приём гинеколога', short: 'Консультация, осмотр, диагностика', url: '/services/priem-ginekologa-odintsovo', image: '/images/blog/task_01kmevvzkgedjsr3sqhp1tbp7j_1774320514_img_1.webp' },
  { title: 'Акушер-гинеколог', short: 'Планирование, беременность, наблюдение', url: '/services/akusher-ginekolog-odintsovo', image: '/images/blog/task_01kmevwgw4fjf8d6qepyfbdfnm_1774320530_img_0.webp' },
  { title: 'Планирование и ведение беременности', short: 'Подготовка к зачатию, УЗИ, анализы', url: '/services/vedenie-beremennosti-odintsovo', image: '/images/blog/Screenshot_1559.png' },
  { title: 'Профилактические осмотры', short: 'Регулярный осмотр, раннее выявление', url: '/services/profilakticheskiy-osmotr-ginekologa-odintsovo', image: '/images/blog/task_01kmewx9vpem3tg59gafhbr63m_1774321601_img_1.webp' },
];

const GYNECOLOGY_SERVICES_FLAT: { code: number; name: string; price: string }[] = (() => {
  const cats: { category: string; services: { name: string; price: string }[] }[] = [
    { category: 'Популярные услуги', services: [{ name: 'Приём акушера-гинеколога первичный', price: '3 780' }, { name: 'Приём акушера-гинеколога повторный', price: '2 840' }, { name: 'Приём беременной первичный', price: '3 150' }, { name: 'Ведение беременности', price: 'от 2 630' }, { name: 'Взятие мазков', price: '530' }, { name: 'УЗИ при беременности', price: 'от 1 890' }] },
    { category: 'Диагностика', services: [{ name: 'Пайпель-биопсия эндометрия', price: '5 150 руб.' }, { name: 'Контрастная эхогистеросальпингоскопия', price: '9 660 руб.' }, { name: 'Биопсия шейки матки ножевая', price: '2 940 руб.' }, { name: 'Комплекс исследований для диагностики злокачественных новообразований эндометрия', price: '4 520 руб.' }, { name: 'Кольпоскопия', price: '1 890 руб.' }, { name: 'Кольпоскопия расширенная', price: '2 100 руб.' }, { name: 'Получение цервикального мазка', price: '530 руб.' }, { name: 'Получение влагалищного мазка', price: '530 руб.' }, { name: 'Получение соскоба с шейки матки', price: '530 руб.' }, { name: 'Получение соскоба с вульвы', price: '530 руб.' }, { name: 'Сбор акушерско-гинекологического анамнеза и жалоб', price: '740 руб.' }] },
    { category: 'Лечение и процедуры', services: [{ name: 'Хирургическое лечение заболеваний шейки матки', price: 'от 8 930' }, { name: 'Криодеструкция шейки матки', price: '5 990 руб.' }, { name: 'Удаление полипа женских половых органов', price: '7 350 руб.' }, { name: 'Удаление новообразования влагалища', price: '5 990 руб.' }, { name: 'Удаление новообразования малой половой губы', price: '1 680 руб.' }, { name: 'Удаление внутриматочной спирали', price: '7 350 руб.' }, { name: 'Хирургическое лечение заболеваний шейки матки с использованием различных энергий', price: '8 930 руб.' }, { name: 'Влагалищная биопсия радиоволновая', price: '7 350 руб.' }, { name: 'Биопсия шейки матки радиоволновая', price: '8 300 руб.' }, { name: 'Биопсия шейки матки радиоволновая конусовидная', price: '12 600 руб.' }, { name: 'Биопсия вульвы радиоволновая', price: '3 890 руб.' }, { name: 'Радиоволновое удаление остроконечных кондилом, папиллом, полипов влагалища до 3 ед', price: '7 350 руб.' }, { name: 'Удаление остроконечных кондилом 1 ед', price: '530 руб.' }, { name: 'Удаление остроконечных папиллом, полипов, кондилом до 3 ед', price: '2 520 руб.' }, { name: 'Введение внутриматочной спирали', price: '7 350 руб.' }, { name: 'Введение акушерского разгружающего поддерживающего кольца/пессария', price: '1 470 руб.' }, { name: 'Извлечение акушерского разгружающего поддерживающего кольца/пессария', price: '950 руб.' }, { name: 'Введение лекарственных препаратов интравагинально', price: '530 руб.' }, { name: 'Введение лекарственных препаратов интравагинально для лечения патологии шейки матки', price: '2 310 руб.' }, { name: 'Подкожное введение лекарственных препаратов в гинекологии (без стоимости препаратов)', price: '2 100 руб.' }, { name: 'Инстилляция полости матки', price: '840 руб.' }, { name: 'Тампонирование лечебное влагалища', price: '840 руб.' }, { name: 'Раздельное диагностическое выскабливание цервикального канала', price: '7 350 руб.' }, { name: 'Зондирование матки', price: '950 руб.' }, { name: 'Введение, извлечение влагалищного поддерживающего кольца (пессария)', price: '840 руб.' }, { name: 'Подбор влагалищного поддерживающего кольца (пессария)', price: '3 570 руб.' }, { name: 'Манометрия силы мышц тазового дна (перинеометрия)', price: '1 050 руб.' }, { name: 'Постановка пиявок (1 процедура без пиявок)', price: '2 520 руб.' }, { name: 'Гинекологический массаж 1 процедура (30 минут)', price: '3 150 руб.' }, { name: 'Тейпирование мышц (1 зона)', price: '2 000 руб.' }, { name: 'Плазмолифтинг (введение аутологичной плазмы) 1 пробирка', price: '4 620 руб.' }, { name: 'Школа тренировки мышц тазового дна (1 занятие)', price: '3 570 руб.' }, { name: 'Определение концентрации водородных ионов (рН) отделяемого слизистой влагалища', price: '420 руб.' }, { name: 'Воздействие лечебной грязью вагинально или ректально', price: '1 260 руб.' }, { name: 'Расширение шеечного канала', price: '1 680 руб.' }, { name: 'Удаление инородного тела из влагалища', price: '2 420 руб.' }, { name: 'Снятие швов с шейки матки', price: '1 680 руб.' }, { name: 'Назначение лекарственных препаратов при заболеваниях женских половых органов', price: '2 420 руб.' }, { name: 'Бимануальное ректоабдоминальное исследование', price: '2 420 руб.' }, { name: 'Аппликационная анестезия', price: '840 руб.' }, { name: 'Инфильтрационная анестезия', price: '950 руб.' }, { name: 'Комплексная услуга по медикаментозному прерыванию беременности', price: '16 280 руб.' }, { name: 'Комплексная услуга по медикаментозному прерыванию беременности (препарат пр-во Франция)', price: '21 420 руб.' }, { name: 'Микроспринцевание (ирригация) влагалища', price: '840 руб.' }] },
    { category: 'Беременность', services: [{ name: 'Приём беременной первичный', price: '3 150 руб.' }, { name: 'Приём беременной повторный', price: '2 630 руб.' }, { name: 'Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. беременной первичный', price: '4 310 руб.' }, { name: 'Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. беременной повторный', price: '3 780 руб.' }, { name: 'Ведение беременности', price: 'от 2 630' }, { name: 'Ультразвуковое исследование плода в I триместре беременности (до 10 недель)', price: '1 890 руб.' }, { name: 'Ультразвуковое исследование плода во II триместре (диагностика пороков развития, 10–16 нед)', price: '2 210 руб.' }, { name: 'Ультразвуковое исследование плода в III триместре (диагностика пороков развития, более 16 нед)', price: '2 420 руб.' }, { name: 'Ультразвуковая допплерометрия плода при беременности более 16 недель', price: '2 630 руб.' }, { name: 'Допплерометрия (многоплодная беременность)', price: '3 780 руб.' }] },
    { category: 'Консультации и приемы', services: [{ name: 'Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. первичный', price: '4 100 руб.' }, { name: 'Прием (осмотр, консультация) врача-акушера-гинеколога, к.м.н. по сексологическим вопросам у женщин', price: '6 200 руб.' }, { name: 'Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. повторный', price: '3 150 руб.' }, { name: 'Прием (осмотр, консультация) врача-акушера-гинеколога первичный', price: '3 780 руб.' }, { name: 'Прием (осмотр, консультация) врача-акушера-гинеколога повторный', price: '2 840 руб.' }, { name: 'Лечение эндометриоза', price: 'по запросу' }, { name: 'Лечение вагинита', price: 'по запросу' }] },
  ];
  const out: { code: number; name: string; price: string }[] = [];
  let code = 16400;
  cats.forEach((cat) => {
    cat.services.forEach((s) => {
      out.push({ code, name: s.name, price: s.price });
      code += 1;
    });
  });
  return out;
})();

const DIAGNOSTICS = [
  'гинекологический осмотр',
  'кольпоскопия',
  'УЗИ органов малого таза',
  'лабораторная диагностика',
  'мазки и анализы',
  'диагностика воспалительных заболеваний',
  'контроль лечения',
  'профилактические обследования',
];

const QUESTION_GROUPS = [
  { title: 'Боли и дискомфорт', items: ['боли внизу живота', 'дискомфорт, зуд, жжение', 'необычные выделения'] },
  { title: 'Цикл и гормоны', items: ['нарушения менструального цикла', 'гормональные нарушения', 'симптомы, требующие консультации гинеколога-эндокринолога'] },
  { title: 'Планирование беременности', items: ['подготовка к беременности', 'наблюдение во время беременности'] },
  { title: 'Профилактика', items: ['профилактический осмотр', 'подбор контрацепции'] },
  { title: 'Другое', items: ['воспалительные заболевания', 'вопросы подростковой гинекологии'] },
];

const WHY_CHOOSE = [
  '3 врача-гинеколога в Одинцово',
  'стаж специалистов до 43 лет',
  '2 филиала в городе',
  'диагностика и анализы в одной клинике',
  'приём взрослых и подростков',
  'запись онлайн и по телефону ежедневно',
];

const FAQ_ITEMS = [
  { q: 'Когда нужно записаться к гинекологу?', a: 'При болях, нарушениях цикла, дискомфорте, необычных выделениях, а также для профилактического осмотра и планирования беременности.' },
  { q: 'Как подготовиться к приёму гинеколога?', a: 'Обычно особой подготовки не требуется. За 1–2 дня до визита лучше воздержаться от половых контактов и использования местных препаратов. Приём возможен в любой день цикла, кроме дней менструации.' },
  { q: 'Можно ли записаться на профилактический осмотр?', a: 'Да, профилактический осмотр — одно из основных направлений. Рекомендуется проходить его не реже раза в год.' },
  { q: 'В каких филиалах принимает гинеколог в Одинцово?', a: 'Гинекологи ведут приём в обоих филиалах: на бульваре Маршала Крылова (д. 23) и на Можайском шоссе (д. 141).' },
  { q: 'Можно ли сразу пройти УЗИ и анализы?', a: 'Да, в клинике можно сдать анализы и пройти УЗИ в день приёма. Врач при необходимости назначит обследования, и многие из них доступны в том же медцентре.' },
  { q: 'Какой врач нужен: гинеколог, акушер-гинеколог или гинеколог-эндокринолог?', a: 'Для общего осмотра и большинства вопросов подойдёт приём гинеколога. Акушер-гинеколог — при планировании или ведении беременности. Гинеколог-эндокринолог — при нарушениях цикла, гормональных проблемах, симптомах менопаузы.' },
  { q: 'Можно ли записаться к акушеру-гинекологу?', a: 'Да, в клинике доступны консультации по вопросам репродуктивного здоровья, подготовки и ведения беременности.' },
  { q: 'Есть ли детский гинеколог?', a: 'Да, в клинике можно записаться на консультацию по вопросам детской и подростковой гинекологии.' },
  { q: 'Сколько стоит приём гинеколога в Одинцово?', a: 'Стоимость зависит от типа консультации и объёма обследования. Первичный приём — от 3 780 ₽. Актуальные цены указаны на странице и уточняются при записи.' },
];

const VIDEO_ITEMS = [
  { id: 'JlM9tv0zJ_cZzQ', title: 'Видео от врачей Альтамед-С', url: 'https://disk.yandex.ru/i/JlM9tv0zJ_cZzQ', direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/JlM9tv0zJ_cZzQ', thumbnail: '/images/blog/prev1vid.png' },
  { id: 'zcppdLEoP5x5TA', title: 'Профилактика онкологии женских половых органов', url: 'https://disk.yandex.ru/i/zcppdLEoP5x5TA', direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/zcppdLEoP5x5TA', thumbnail: '/images/blog/prev2vid.png' },
  { id: '0JSoRE2oYAs2vA', title: 'Профилактика рака молочной железы', url: 'https://disk.yandex.ru/i/0JSoRE2oYAs2vA', direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/0JSoRE2oYAs2vA', thumbnail: '/images/blog/prev3vid.png' },
  { id: 'OqP2kvCSU4ZJgA', title: 'Видео гинекология', url: 'https://disk.yandex.ru/i/OqP2kvCSU4ZJgA', direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/OqP2kvCSU4ZJgA', thumbnail: '/images/blog/prev4vid.png' },
];

const ADDRESSES = [
  { title: 'Клиника на бульваре Маршала Крылова', address: '143005, г. Одинцово, бульвар Маршала Крылова, д. 23, пом. I', mapLink: 'https://yandex.ru/maps/?rtext=~55.680564,37.291079&rtt=auto', hours: 'Пн-Вс: 8:00–21:00' },
  { title: 'Клиника на Можайском шоссе', address: '143005, г. Одинцово, ул. Можайское шоссе, д. 141, пом. 4', mapLink: 'https://yandex.ru/maps/?rtext=~55.676321,37.306184&rtt=auto', hours: 'Пн-Вс: 8:00–21:00' },
];

const FALLBACK_THUMBNAIL = '/images/gino/Screenshot_1556.png';

function VideoThumbnail({ src, title }: { src: string; title: string }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <Image
      src={currentSrc}
      alt={title}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      unoptimized
      onError={() => setCurrentSrc(FALLBACK_THUMBNAIL)}
    />
  );
}

function TrustIcon({ name }: { name: string }) {
  const Svg = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  );
  return <Svg className="w-6 h-6 text-emerald-600 flex-shrink-0" />;
}

function WhyCardIcon({ name }: { name: string }) {
  const cls = 'w-7 h-7 text-emerald-600 flex-shrink-0';
  if (name === 'clock') return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );
  if (name === 'star') return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
  );
  if (name === 'clinic') return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  );
  if (name === 'building') return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  );
  if (name === 'award') return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
  );
  return null;
}

import { GYNEC_ARTICLES_LIST } from '@/data/gynec-articles-images';

export default function TestGinoPage() {
  const [activeBranch, setActiveBranch] = useState(0);
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const [showMoreArticles, setShowMoreArticles] = useState(false);
  return (<main className="min-h-screen pt-0">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Гинеколог в Одинцово — приём, диагностика и лечение в Альтамед-С
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Приём взрослых и подростков. Консультации гинеколога, акушера-гинеколога. Диагностика, УЗИ, анализы и запись в удобное время.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться на приём
                </Link>
                <a href={PHONE_LINK} className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Первичный приём — от 3 780 ₽</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {ANCHORS.map((a) => (
                  <a key={a.id} href={`#${a.id}`} className="text-emerald-600 hover:underline py-1">{a.label}</a>
                ))}
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/images allergoly/ginokologia.webp" alt="Гинеколог в Одинцово — Альтамед-С" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px" quality={92} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 sm:left-0 sm:right-auto sm:w-64 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-sm">
                  <div><span className="text-amber-500 font-bold">4.8</span> рейтинг</div>
                  <div>3 врача-гинеколога</div>
                  <div>2 филиала</div>
                  <div className="text-emerald-600 font-medium">Приём на неделе</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему обращаются в Альтамед-С */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Почему обращаются в Альтамед-С</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {WHY_CARDS.map((c) => (
              <div key={c.title} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl bg-slate-100/70 min-h-[100px] sm:min-h-[120px]">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <WhyCardIcon name={c.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 leading-snug mb-0.5 sm:mb-1 whitespace-pre-line">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug line-clamp-2 sm:line-clamp-none">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* С какими вопросами обращаются */}
        <section className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">С какими вопросами обращаются к гинекологу</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {QUESTION_GROUPS.map((g) => (
                <div key={g.title} className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-2">{g.title}</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {g.items.map((i) => (
                      <li key={i}>· {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Цены — таблица + CTA карточка */}
        <section id="tseny" className="py-8 sm:py-12 scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Цены на приём гинеколога в Одинцово</h2>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                <div className="overflow-y-auto max-h-[480px] sm:max-h-[480px]">
                  <table className="w-full text-sm sm:text-base table-fixed">
                    <thead className="sticky top-0 z-10 bg-gray-100">
                      <tr>
                        <th className="text-left py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">Услуга</th>
                        <th className="text-right py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      {GYNECOLOGY_SERVICES_FLAT.map((s, i) => (
                        <tr key={s.code} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}>
                          <td className="py-3.5 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                          <td className="py-3.5 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">{s.price.includes('запрос') ? s.price : `${s.price.replace(/ руб\.?$/, '')} ₽`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm order-1 lg:order-2">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 relative">
                  <Image src="/images/promo/task_01kmc5pqv4egd8vgfksjjp1zzd_1774230180_img_1.webp" alt="" fill className="object-contain" sizes="128px" />
                </div>
                <p className="text-gray-700 text-sm mb-1">Заполните форму</p>
                <h3 className="font-bold text-lg text-gray-900 text-center mb-1">«Записаться в клинику»</h3>
                <p className="text-gray-600 text-sm text-center mb-4">чтобы выбрать время приема и уточнить стоимость услуги.</p>
                <p className="text-gray-700 text-sm mb-4">Администратор подберёт врача и удобное время</p>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium text-sm mb-1 hover:underline">
                  Записаться онлайн
                </Link>
                <a href={PHONE_LINK} className="text-gray-700 text-sm mb-6 hover:underline">{PHONE}</a>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700">
                  Записаться в клинику
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Врачи — главный визуальный якорь */}
        <section id="vrachi" className="py-12 bg-gray-50/50 scroll-mt-8">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Врачи-гинекологи в Одинцово</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GYNECOLOGISTS_RAW.map((d) => {
                const extra = (DOCTOR_EXTRA as Record<string, { competencies: string[]; branch: string }>)[d.slug];
                return (
                  <div key={d.id} className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-100 ring-4 ring-white shadow-md">
                        <Image src={d.photo} alt={d.name} fill className="object-cover object-center" sizes="112px" quality={92} />
                      </div>
                      <h3 className="mt-5 font-bold text-lg text-gray-900">{d.name}</h3>
                      <p className="mt-1 text-gray-600 text-sm leading-snug">{d.specialization}</p>
                      <p className="mt-1.5 text-gray-500 text-sm">Стаж {d.experience} лет · {extra?.branch || 'оба филиала'}</p>
                      <p className="mt-4 text-emerald-600 font-semibold">Консультация от 3 780 ₽</p>
                      <div className="mt-5 flex gap-3 w-full">
                        <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition text-center">
                          Записаться
                        </Link>
                        <Link href={`/doctors/${d.slug}`} className="py-3 px-5 text-gray-600 text-sm font-medium rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition text-center">
                          О враче
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-gray-600 mt-8 text-center text-sm">
              В клинике ведут приём врачи разных профилей — можно записаться к гинекологу, акушеру-гинекологу или специалисту по детской гинекологии.
            </p>
          </div>
        </section>

        {/* Направления — сервисные карточки */}
        <section id="napravleniya" className="py-12 scroll-mt-8">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Приём по основным направлениям</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIRECTIONS.map((d) => (
                <div key={d.title} className="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition bg-white">
                  {'image' in d && d.image ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image src={d.image} alt={d.title} fill className="object-cover group-hover:scale-105 transition duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center m-6 mb-0 group-hover:bg-emerald-200 transition">
                      <TrustIcon name="heart" />
                    </div>
                  )}
                  <div className="p-6 pt-4">
                    <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{d.short}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link href={d.url} className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-emerald-600 border border-emerald-600 rounded-xl hover:bg-emerald-50 transition">
                        Подробнее
                      </Link>
                      <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition">
                        Записаться
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Диагностика и процедуры */}
        <section id="uslugi" className="py-12 bg-gray-50/50 scroll-mt-8">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Диагностика и гинекологические процедуры в клинике</h2>
                <p className="text-gray-700 mb-4">В Альтамед-С можно пройти не только консультацию гинеколога, но и необходимые обследования в рамках одного медцентра.</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
                  {DIAGNOSTICS.map((d) => (
                    <li key={d} className="flex items-center gap-2"><span className="text-emerald-600">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image src="/images/gino/Altamed-С Odintsovo6.webp" alt="Диагностика в клинике" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 600px" quality={92} />
              </div>
            </div>
          </div>
        </section>

        {/* Филиалы — галерея, бейджи, адрес */}
        <section id="adresa" className="py-12 scroll-mt-8">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Филиалы в Одинцово</h2>
              <div className="flex gap-2">
                {ADDRESSES.map((addr, i) => (
                  <button key={addr.title} onClick={() => setActiveBranch(i)} className={`px-5 py-2.5 font-medium rounded-full text-sm transition ${activeBranch === i ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    {addr.title === 'Клиника на бульваре Маршала Крылова' ? 'Альтамед-С, бульвар Крылова' : addr.title === 'Клиника на Можайском шоссе' ? 'Альтамед-С, Можайское шоссе' : addr.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 mb-3">
                  <Image src="/images/gino/Altamed-С Odintsovo.webp" alt={ADDRESSES[activeBranch].title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="flex gap-2">
                  {[
                    '/images/gino/Altamed-С Odintsovo1.webp',
                    '/images/gino/Altamed-С Odintsovo.webp',
                    '/images/gino/Altamed-C home.webp',
                  ].map((src, i) => (
                    <div key={i} className="relative aspect-video flex-1 rounded-lg overflow-hidden bg-gray-100 min-w-0">
                      <Image src={src} alt="" fill className="object-cover" sizes="150px" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">{ADDRESSES[activeBranch].title === 'Клиника на бульваре Маршала Крылова' ? 'Альтамед-С в Одинцово, бульвар Крылова' : 'Альтамед-С в Одинцово, Можайское шоссе'}</h3>
                <div className="flex flex-wrap gap-4 mb-4 items-center">
                  <a
                    href={activeBranch === 1 ? 'https://prodoctorov.ru/odincovo/lpu/50390-medicinskiy-centr-altamed-s-na-mozhayskom-shosse/' : 'https://prodoctorov.ru/odincovo/lpu/34908-altamed-s/#rating'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image src="/images/promo/task_01kmc6qtnaefv8pe5k4ej7q4yz_1774231268_img_0.webp" alt="Нас рекомендуют — ПроДокторов" width={180} height={220} className="object-contain w-24 h-auto sm:w-40 sm:h-auto" />
                  </a>
                  <a href="https://yandex.ru/maps/?text=Альтамед-С+Одинцово" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">4,8</span>
                        <span className="text-amber-400 text-sm">★★★★★</span>
                      </div>
                      <span className="text-xs text-gray-500 block">Рейтинг организации в Яндексе</span>
                    </div>
                  </a>
                </div>
                <p className="font-medium text-gray-900 mb-2">Оказывается помощь по следующим направлениям:</p>
                <p className="text-gray-600 text-sm mb-3">гинекология, акушерство, ведение беременности, детская гинекология, гинеколог-эндокринолог, УЗИ, лабораторная диагностика, кольпоскопия и другие процедуры.</p>
                <p className="text-gray-600 text-sm mb-4">Массаж, больничные листы, УЗИ-диагностика — в одном медцентре. Подробнее об услугах — <Link href="#tseny" className="text-emerald-600 hover:underline">раздел «Цены» ниже</Link>.</p>
                <p className="font-medium text-gray-900 mb-2">Режим работы:</p>
                <p className="text-gray-600 text-sm mb-4">{ADDRESSES[activeBranch].hours}</p>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  <div>
                    <p className="text-gray-800 font-medium">{ADDRESSES[activeBranch].address}</p>
                    <a href={ADDRESSES[activeBranch].mapLink} target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-sm font-medium hover:underline mt-1 inline-block">
                      Смотреть на карте →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Видео с врачами */}
        <section className="py-8 sm:py-12 bg-gray-50/50">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Видео по гинекологии</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {VIDEO_ITEMS.map((v) => (
                <button key={v.id} type="button" onClick={() => setOpenVideo(v.id)} className="text-left rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition group">
                  <div className="relative aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                    {v.thumbnail ? (
                      <VideoThumbnail src={v.thumbnail} title={v.title} />
                    ) : null}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                    <div className="relative w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition z-[1]">
                      <svg className="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Модальное окно видео */}
        {openVideo && (() => {
          const v = VIDEO_ITEMS.find((x) => x.id === openVideo);
          if (!v) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setOpenVideo(null)} role="presentation">
              <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl" onClick={(e) => e.stopPropagation()} role="presentation">
                <button type="button" onClick={() => setOpenVideo(null)} className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <div className="aspect-video bg-black">
                  <video key={v.id} src={v.direct} controls className="w-full h-full" playsInline>
                    Ваш браузер не поддерживает воспроизведение видео. <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">Открыть на Яндекс Диске</a>
                  </video>
                </div>
                <div className="p-4 bg-gray-900">
                  <p className="font-medium text-white">{v.title}</p>
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-400 hover:underline mt-1 inline-block">Открыть на Яндекс Диске</a>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Почему выбирают — с фото */}
        <section className="py-12 bg-gray-50/50">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
                <Image src="/images/images allergoly/ginokologia.webp" alt="Приём в Альтамед-С" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Почему обращаются в Альтамед-С</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {WHY_CHOOSE.map((w) => (
                    <div key={w} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">✓</span>
                      <span className="text-gray-700">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Как проходит приём */}
        <section className="py-8 sm:py-12">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Как проходит приём гинеколога</h2>
            <p className="text-gray-700 mb-4">Первичный приём обычно включает:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['сбор жалоб и анамнеза', 'уточнение симптомов и состояния', 'осмотр', 'назначение УЗИ и анализов при необходимости', 'рекомендации по лечению и наблюдению'].map((s) => (
                <div key={s} className="flex gap-3 p-4 rounded-xl bg-gray-50">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-700">{s}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">Консультация проходит деликатно, спокойно и понятно для пациентки.</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Часто задаваемые вопросы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {FAQ_ITEMS.map((f) => (
                <div key={f.q} className="p-5 rounded-xl bg-white border border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* СТАТЬИ */}
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Статьи</h2>
            <div id="statyi" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scroll-mt-24">
              {(showMoreArticles ? GYNEC_ARTICLES_LIST : GYNEC_ARTICLES_LIST.slice(0, 4)).map((a) => (
                <Link key={a.url} href={a.url} className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md overflow-hidden transition">
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image src={a.image} alt="" fill className="object-cover group-hover:scale-105 transition duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide leading-snug line-clamp-2">{a.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{a.desc}</p>
                    <span className="w-full py-2.5 px-4 text-center border-2 border-teal-700 text-teal-700 font-medium text-sm rounded-lg hover:bg-teal-50 transition">
                      Читать подробнее
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {!showMoreArticles && GYNEC_ARTICLES_LIST.length > 4 && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowMoreArticles(true)}
                  className="px-6 py-3 border-2 border-teal-700 text-teal-700 font-medium rounded-xl hover:bg-teal-50 transition"
                >
                  Показать ещё
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="py-8 sm:py-12 pb-24 md:pb-12">
          <div className="max-w-[1400px] mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Запишитесь на приём к гинекологу в Одинцово</h2>
            <p className="text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Оставьте заявку на сайте или позвоните в клинику. Администратор поможет выбрать специалиста, удобное время и подскажет стоимость.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-900/20 min-h-[44px] flex items-center justify-center">
                Записаться онлайн
              </Link>
              <a href={PHONE_LINK} className="px-6 sm:px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 min-h-[44px] flex items-center justify-center">
                Позвонить
              </a>
            </div>
          </div>
        </section>

    </main>);
}
