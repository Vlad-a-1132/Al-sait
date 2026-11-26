'use client';

import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import styles from './WinterOzoneBanner.module.css';

type IconKind = 'energy' | 'shield' | 'liver' | 'brain' | 'drop' | 'bag' | 'clipboard' | 'puzzle' | 'leaf';

function MenuIcon({ kind }: { kind: IconKind }) {
  const paths: Record<IconKind, ReactNode> = {
    energy: <path d="M21 2 6 18h10l-3 12L28 13H18Z" />,
    shield: <><path d="M17 3 5 7v9c0 7 12 14 12 14s12-7 12-14V7Z" /><path d="M14 10h6v5h5v6h-5v5h-6v-5H9v-6h5Z" /></>,
    liver: <><path d="M3 19C4 9 14 6 29 7c2 7-1 12-9 13l-5 8-4-1 2-9c-5 5-9 6-10 1Z" /><path d="m15 8-2 10m3 0 6-2" /></>,
    brain: <><path d="M16 7c-2-6-8-4-8 0-5-1-8 5-4 8-5 3-3 10 2 10 0 5 7 6 10 2m2-20c2-6 8-4 8 0 5-1 8 5 4 8 5 3 3 10-2 10 0 5-7 6-10 2M17 4v25" /><path d="M8 9c-2 4 3 4 3 7m-6 2 5 2m1-15 1 6m-2 12 4 1m12-15c2 4-3 4-3 7m6 2-5 2m-1-15-1 6m2 12-4 1" /></>,
    drop: <><path d="M17 2S4 16 4 22a13 13 0 0026 0C30 16 17 2 17 2Z" /><path d="M17 16v12m-6-6h12" /></>,
    bag: <><rect x="8" y="6" width="20" height="22" rx="3" /><path d="M13 6V3h10v3M12 17h12M18 28v5m-5-19h10M13 21h6" /></>,
    clipboard: <><path d="M12 6H7v25h23V6h-5" /><rect x="12" y="3" width="13" height="7" rx="2" /><path d="m11 17 2 2 4-5m3 4h6m-15 7 2 2 4-5m3 4h6" /></>,
    puzzle: <path d="M5 6h8c-2-7 10-7 8 0h8v8c7-2 7 10 0 8v8h-8c2-7-10-7-8 0H5v-8c7 2 7-10 0-8Z" />,
    leaf: <><path d="M5 26C-2 9 13 6 30 3c0 17-6 28-20 24M5 32l18-21" /></>,
  };
  return <svg viewBox="0 0 34 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

const menu = [
  { kind: 'energy' as const, title: 'Энерджи', brief: 'Энергия и работоспособность', description: 'Поддержка энергии и работоспособности', color: '#f5de83' },
  { kind: 'shield' as const, title: 'Иммуно Актив', brief: 'Поддержка защитных сил', description: 'Поддержка защитных сил организма в сезон простуд', color: '#b6d9b0' },
  { kind: 'liver' as const, title: 'Поддержка печени', brief: 'При повышенной нагрузке', description: 'Берегая ваш главный «фильтр» в период повышенной нагрузки, в том числе и в праздники', color: '#edc1a6' },
  { kind: 'brain' as const, title: 'Питание для мозга', brief: 'Концентрация и активность', description: 'Поддержка концентрации и умственной активности при высоких нагрузках', color: '#d6b9e6' },
  { kind: 'drop' as const, title: 'Специальные схемы', brief: 'В том числе при диабете', description: 'В том числе для пациентов с сахарным диабетом', color: '#b9e3df' },
];
const facts = [
  { kind: 'bag' as const, text: 'В виде капельниц', mobile: 'Капельницы', description: 'Коктейли проводятся в виде капельниц.' },
  { kind: 'clipboard' as const, text: 'Схема — индивидуально', mobile: 'Подбор схемы', description: 'Состав и схема подбираются индивидуально.' },
  { kind: 'puzzle' as const, text: 'Комбинации рецептов', mobile: 'Комбинации рецептов', description: 'Возможна комбинация авторских рецептов.' },
  { kind: 'leaf' as const, text: 'Варианты поддержки', mobile: 'Варианты поддержки', description: 'При необходимости подберём другой вариант поддержки.' },
];

export default function WinterOzoneBanner() {
  return (
    <div className={styles.banner} data-winter-ozone-banner>
      <div className={styles.frame} aria-hidden="true" />
      <div className={styles.bokeh} aria-hidden="true" />
      <div className={styles.paper}>
        <p className={styles.title}>Зимнее<br />барное меню</p>
        <p className={styles.subtitle}>гастро-феи</p>
      </div>
      <div className={styles.ribbon}><p>Авторские<span>озоновые коктейли</span></p></div>
      <p className={styles.season}><span className={styles.seasonOrb} aria-hidden="true">O<sub>3</sub></span>Сезон<span>озонотерапии</span></p>
      <ul className={styles.menu} aria-label="Зимнее меню озонотерапии">
        {menu.map(item => <li key={item.kind} title={item.description} aria-label={`${item.title}. ${item.description}`} style={{ '--menu-color': item.color } as CSSProperties}>
          <span className={styles.menuIcon}><MenuIcon kind={item.kind} /></span>
          <div><span className={styles.menuName}>{item.title}</span><span className={styles.menuDescription}>{item.brief}</span></div>
        </li>)}
      </ul>
      <div className={styles.facts} aria-label="Как подбираются процедуры">
        {facts.map(fact => <div key={fact.kind} title={fact.description} aria-label={fact.description}><MenuIcon kind={fact.kind} /><p><span className={styles.desktopFact}>{fact.text}</span><span className={styles.mobileFact}>{fact.mobile}</span></p></div>)}
      </div>
      <div className={styles.magic} aria-hidden="true">
        <svg viewBox="0 0 200 190" fill="none"><g stroke="#f7dfac" strokeWidth="1"><path d="M93 171C45 131 12 87 22 42 57 33 105 92 93 171ZM98 170C119 89 159 22 187 7 214 80 158 154 98 170Z" /><path d="M95 170C50 118 2 143 3 88 42 74 80 115 95 170Zm4 0c54-58 101-47 94-92-38-3-69 38-94 92Z" /><path d="M96 162 31 52m66 105L175 22m-78 140L12 98m85 66 87-75" strokeOpacity=".5" /></g></svg>
      </div>
      <div className={styles.glassStage} aria-hidden="true">
        <Image src="/images/seasonal/ozone-cocktails-photoreal.webp" alt="" fill priority unoptimized sizes="(max-width: 767px) 45vw, 250px" />
        {Array.from({ length: 4 }, (_, zone) => <div key={zone} className={`${styles.bubbleZone} ${styles[`zone${zone}`]}`}>
          {Array.from({ length: 7 }, (_, i) => <i key={i} style={{ left: `${12 + (i * 17) % 75}%`, '--bubble-delay': `${(i * .7 + zone) * -1}s`, '--bubble-duration': `${3 + i % 3}s` } as CSSProperties} />)}
        </div>)}
      </div>
      <div className={styles.sparkles} aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <span key={i} style={{ left: `${62 + i * 17 % 33}%`, top: `${8 + i * 23 % 69}%`, '--spark-delay': `${i * -.8}s` } as CSSProperties}>✧</span>)}</div>
    </div>
  );
}
