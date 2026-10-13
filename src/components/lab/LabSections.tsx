import Image from 'next/image';
import Link from 'next/link';
import { LAB_HUBS, LAB_ROOT, LAB_STUDIES, childHubs, labImage, type LabStudy } from '@/data/lab-seo';
import { LAB_SEO_ARTICLES } from '@/data/lab-seo-articles';
import { priceCode, priceSourceLabel, type PricedCatalogResponse } from '@/app/lab-tests-preview/price-reconciliation';
import { money } from '@/app/lab-tests-preview/catalog';
import { AddLabTest, LabCall } from './LabActions';
import s from './lab.module.css';

export function studyItems(study: LabStudy, data: PricedCatalogResponse) {
  const codes = new Set(study.codes.map(priceCode));
  return data.items.filter(item => codes.has(priceCode(item.code)));
}
export function StudyPriceRows({ study, data }: { study: LabStudy; data: PricedCatalogResponse }) {
  return <section id="lab-prices" className={s.section}><span className={s.eyebrow}>ВЫБЕРИТЕ ТОЧНОЕ НАЗВАНИЕ</span><h2>Стоимость исследования</h2><div className={s.rows}>{studyItems(study, data).map(item => <div className={s.row} key={item.key}><div><small>Код {item.code}</small><h3>{item.name}</h3></div><div className={s.priceAside}><strong>{item.priceStatus === 'matched' && item.price > 0 ? money(item.price) : 'Уточнить цену'}</strong><AddLabTest itemKey={item.key} name={item.name}/></div></div>)}</div><p className={s.note}>{priceSourceLabel(data.prices)} Забор материала оплачивается отдельно. Скидки в сумму не включены. Окончательную стоимость и срок готовности подтвердит администратор.</p><Link className={s.textLink} href={`${LAB_ROOT}/calculator#lab-catalog`} prefetch={false}>Открыть мой список в калькуляторе →</Link></section>;
}
export function LabArticles({ slugs, title = 'Разобраться до визита' }: { slugs: string[]; title?: string }) {
  const articles = slugs.flatMap(slug => LAB_SEO_ARTICLES[slug] ? [{slug,...LAB_SEO_ARTICLES[slug]}] : []);
  return <section className={s.section}><span className={s.eyebrow}>ПОЛЕЗНО ЗНАТЬ</span><h2>{title}</h2><div className={s.cards}>{articles.map(article => <Link className={s.card} key={article.slug} href={`/blog/${article.slug}`} prefetch={false}><div className={s.cardImage}><Image src={article.image} alt={article.imageAlt || ''} fill sizes="(max-width: 640px) 45vw, 300px"/></div><div className={s.cardCopy}><h3>{article.h1}</h3><p>{article.description}</p></div></Link>)}</div><p><Link className={s.textLink} href="/blog/topics/lab-tests" prefetch={false}>Все статьи об анализах →</Link></p></section>;
}
export function LabBranches() {
  return <section className={`${s.section} ${s.branch}`} id="lab-addresses"><span className={s.eyebrow} style={{color:'#b6c8b2'}}>ОДИНЦОВО · АЛЬТАМЕД-С</span><h2>Выберите удобный адрес</h2><div className={s.branchGrid}><div><h3>Бульвар Маршала Крылова, 23</h3><p>Перед посещением уточните доступность нужного исследования и часы приёма биоматериала.</p></div><div><h3>Можайское шоссе, 141</h3><p>Согласуйте филиал, подготовку и необходимость записи для вашего списка анализов.</p></div></div><div className={s.actions}><LabCall>+7 (495) 255-44-50</LabCall><Link className={s.textLink} href="/contacts">Контакты и схема проезда →</Link></div><p className={s.note} style={{color:'#c3d5bc'}}>Часы забора и доставки образцов могут отличаться от часов работы медицинского центра.</p></section>;
}
export function LabDirectory({ data }: { data: PricedCatalogResponse }) {
  return <div className={s.directory}>
    <section className={s.section} id="lab-directions"><span className={s.eyebrow}>ОТ НАПРАВЛЕНИЯ К ТОЧНОМУ АНАЛИЗУ</span><h2>Нужное — без длинного поиска</h2>
      <div className={s.cards}>{LAB_HUBS.filter(hub=>!hub.parent).map(hub=><Link href={`${LAB_ROOT}/${hub.slug}`} prefetch={false} key={hub.slug} className={s.card}><div className={s.cardImage}><Image src={labImage(hub.image)} alt={`Иллюстрация: ${hub.name.toLowerCase()}`} fill sizes="(max-width: 640px) 45vw, 300px"/></div><div className={s.cardCopy}><h3>{hub.name}</h3><p>{hub.lead}</p></div></Link>)}</div>
      <h3 className={s.subheading}>Если нужно более точное направление</h3><div className={s.links}>{LAB_HUBS.filter(hub=>hub.parent).map(hub=><Link key={hub.slug} href={`${LAB_ROOT}/${hub.slug}`} prefetch={false}>{hub.name} →</Link>)}</div>
    </section>
    <section className={s.section}><span className={s.eyebrow}>СПРАВОЧНИК ИССЛЕДОВАНИЙ</span><h2>Цены, подготовка и понятные различия</h2><p>Раскройте нужное направление. Для поиска по всему прайсу используйте каталог выше.</p>
      <div className={s.studyGroups}>{LAB_HUBS.map(hub=>{
        const studies=LAB_STUDIES.filter(study=>study.hub===hub.slug);
        if(!studies.length) return null;
        return <details key={hub.slug}><summary>{hub.name}<span>{studies.length}</span></summary><ul className={s.listLinks}>{studies.map(study=>{
          const prices=studyItems(study,data).filter(item=>item.priceStatus==='matched'&&item.price>0).map(item=>item.price);
          return <li key={study.slug}><Link href={`${LAB_ROOT}/${study.slug}`} prefetch={false}>{study.name}<span>{prices.length?`${study.codes.length>1?'от ':''}${money(Math.min(...prices))}`:'Уточнить'}</span></Link></li>;
        })}</ul><Link className={s.textLink} href={`${LAB_ROOT}/${hub.slug}`} prefetch={false}>Перейти в раздел →</Link></details>;
      })}</div><p className={s.note}>{priceSourceLabel(data.prices)} Без забора материала и скидок. Варианты исследования смотрите на его странице.</p>
    </section>
    <LabArticles slugs={['podgotovka-k-analizu-krovi','lipidogramma-i-kholesterin','ferritin-transferrin-ozhss','podgotovit-rebenka-k-analizu-krovi']}/><LabBranches/>
  </div>;
}

export function LabSubdirections({ slug }: { slug: string }) {
  const hubs=childHubs(slug);
  if(!hubs.length) return null;
  return <section className={s.section}><span className={s.eyebrow}>УТОЧНИТЕ НАПРАВЛЕНИЕ</span><h2>От общего списка к вашей задаче</h2><div className={s.links}>{hubs.map(hub=><Link href={`${LAB_ROOT}/${hub.slug}`} key={hub.slug} prefetch={false}>{hub.name} →</Link>)}</div></section>;
}
