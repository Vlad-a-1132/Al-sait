import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LAB_ROOT, LAB_UPDATED, hubStudies, labHub, labImage, labStudy } from '@/data/lab-seo';
import { getLabCatalog } from '@/lib/lab-catalog';
import { categoryNames, money } from '@/app/lab-tests-preview/catalog';
import { priceSourceLabel } from '@/app/lab-tests-preview/price-reconciliation';
import { LabArticles, LabBranches, LabSubdirections, StudyPriceRows, studyItems } from '@/components/lab/LabSections';
import { AddLabTest, LabCall } from '@/components/lab/LabActions';
import s from '@/components/lab/lab.module.css';
export const dynamic = 'force-dynamic';
type Props = { params: { slug: string }; searchParams: { page?: string } };
export function generateMetadata({ params, searchParams }: Props): Metadata {
  const entry = labStudy(params.slug) || labHub(params.slug);
  if (!entry) return {};
  const page = Number(searchParams.page || 1);
  const suffix = Number.isSafeInteger(page) && page > 1 ? ` — страница ${page}` : '';
  const url = `https://altamed-c.ru${LAB_ROOT}/${entry.slug}${suffix ? `?page=${page}` : ''}`;
  const title = `${entry.name} в Одинцово: цена и подготовка${suffix} | Альтамед-С`;
  return { title, description:entry.lead, alternates:{canonical:url}, openGraph:{title,description:entry.lead,url,images:[`https://altamed-c.ru${labImage(entry.image)}`]}, twitter:{card:'summary_large_image',title,description:entry.lead,images:[`https://altamed-c.ru${labImage(entry.image)}`]} };
}
export default async function LabLanding({ params, searchParams }: Props) {
  const study = labStudy(params.slug); const hub = labHub(params.slug); const entry = study || hub;
  if (!entry) notFound();
  const data = await getLabCatalog();
  const page = Number(searchParams.page || 1);
  if (!Number.isSafeInteger(page) || page < 1 || (study && page > 1)) notFound();
  const currentHub = study ? labHub(study.hub) : hub;
  const choices = study ? studyItems(study,data) : [];
  const prices = choices.filter(item => item.priceStatus === 'matched' && item.price > 0).map(item => item.price);
  const categoryItems = hub?.catalogCategory ? data.items.filter(item => categoryNames[item.category] === hub.catalogCategory).sort((a,b)=>a.name.localeCompare(b.name,'ru')) : [];
  const pages = Math.max(1,Math.ceil(categoryItems.length / 12));
  if (page > pages) notFound();
  const faq = study ? [
    {q:study.question,a:study.answer},
    {q:'Как подготовиться к исследованию?',a:study.preparation},
    {q:'Входит ли забор материала в цену?',a:'На странице указана стоимость самого исследования. Забор оплачивается отдельно; итоговую сумму и возможную скидку подтвердят при оформлении.'},
    {q:'Когда будет готов результат?',a:'Срок зависит от конкретного исследования и условий доставки образца. Уточните его до посещения по коду выбранной позиции.'},
    {q:'Как получить и обсудить результат?',a:'Способ получения полного бланка согласуйте при оформлении. Сохраните файл с единицами и интервалами и передайте назначившему врачу; отдельная цифра или отметка об отклонении не заменяет интерпретацию.'},
    {q:'Как сдать анализ в Одинцово?',a:'Добавьте точный вариант в список и позвоните в Альтамед-С: +7 (495) 255-44-50. Администратор поможет согласовать филиал, время и подготовку.'},
  ] : [
    {q:'Нужно сдавать все исследования раздела?',a:hub!.select},
    {q:'Как понять итоговую стоимость?',a:'Соберите назначенные исследования в калькуляторе. Стоимость забора материала и применимость скидок уточняются отдельно.'},
    {q:'Можно ли прийти без предварительной записи?',a:'Это зависит от биоматериала и процедуры взятия. Перед посещением уточните доступность исследования, филиал и часы забора.'},
    {q:'Где посмотреть подготовку?',a:'На отдельных страницах исследований и в статьях раздела. Индивидуальные условия по вашему списку подтвердит клиника.'},
  ];
  const canonical = `https://altamed-c.ru${LAB_ROOT}/${entry.slug}${page > 1 ? `?page=${page}` : ''}`;
  const breadcrumbs = [{name:'Главная',url:'https://altamed-c.ru'},{name:'Анализы',url:`https://altamed-c.ru${LAB_ROOT}`},...(study && currentHub ? [{name:currentHub.name,url:`https://altamed-c.ru${LAB_ROOT}/${currentHub.slug}`}] : []),{name:entry.name,url:canonical}];
  const jsonLd = {'@context':'https://schema.org','@graph':[
    {'@type':'WebPage',name:entry.name,url:canonical,dateModified:LAB_UPDATED,description:entry.lead},
    {'@type':'BreadcrumbList',itemListElement:breadcrumbs.map((item,index)=>({'@type':'ListItem',position:index+1,name:item.name,item:item.url}))},
    ...(study ? [{'@type':'Service',name:study.name,serviceType:'Лабораторное исследование',areaServed:{'@type':'City',name:'Одинцово'},provider:{'@type':'MedicalClinic',name:'Альтамед-С',url:'https://altamed-c.ru',telephone:'+74952554450'},offers:choices.filter(item=>item.priceStatus==='matched'&&item.price>0).map(item=>({'@type':'Offer',name:item.name,price:item.price,priceCurrency:'RUB',url:canonical,description:'Стоимость исследования без забора материала и скидок'}))}] : []),
  ]};
  return <main className={s.page}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/><div className={s.wrap}>
    <nav className={s.crumbs} aria-label="Хлебные крошки"><Link href="/">Главная</Link><span>/</span><Link href={LAB_ROOT}>Анализы</Link>{study && currentHub && <><span>/</span><Link href={`${LAB_ROOT}/${currentHub.slug}`}>{currentHub.name}</Link></>}<span>/</span><span>{entry.name}</span></nav>
    <section className={s.hero}><div><span className={s.eyebrow}>ЛАБОРАТОРНАЯ ДИАГНОСТИКА · ОДИНЦОВО</span><h1>{entry.name}<br/>в Одинцово{page>1 && <span> — страница {page}</span>}</h1><p className={s.lead}>{entry.lead}</p>{study && <div className={s.facts}><div>Исследование<strong>{prices.length ? `${choices.length > 1 ? 'от ' : ''}${money(Math.min(...prices))}` : 'Уточнить цену'}</strong></div><div>Биоматериал<strong style={{fontSize:16,maxWidth:220}}>{study.material || 'Венозная кровь'}</strong></div></div>}<p className={s.note}>{study && 'Без забора материала. Срок готовности уточните при записи. '}Б-р Маршала Крылова, 23 · Можайское шоссе, 141</p><div className={s.actions}><a href={study ? '#lab-prices' : '#lab-results'} className={s.button}>{study ? 'Выбрать исследование' : 'Посмотреть анализы'}<span>↓</span></a><LabCall/></div></div><div className={s.visual}><Image src={labImage(entry.image)} alt={`Иллюстрация к исследованию: ${entry.name.toLowerCase()}`} fill priority sizes="(max-width:640px) 100vw, 45vw"/><span className={s.caption}>ТЕМАТИЧЕСКАЯ ИЛЛЮСТРАЦИЯ</span></div></section>
    <nav className={s.nav} aria-label="На этой странице"><a href={study?'#lab-prices':'#lab-results'}>Исследования и цены</a><a href="#lab-about">Что важно знать</a><a href="#lab-faq">Вопросы</a><a href="#lab-addresses">Где сдать</a></nav>
    {study ? <><StudyPriceRows study={study} data={data}/><section id="lab-about" className={`${s.section} ${s.split}`}><div><span className={s.eyebrow}>ПОНЯТНО ОБ ИССЛЕДОВАНИИ</span><h2>Что показывает анализ</h2><p>{study.explains}</p><h3>Не перепутать при выборе</h3><p>{study.distinction}</p></div><div className={s.panel}><span className={s.eyebrow}>ПЕРЕД ПОСЕЩЕНИЕМ</span><h2>Подготовка</h2><p>{study.preparation}</p><ol><li>Сверьте полное название и код в назначении.</li><li>Уточните филиал, часы забора и индивидуальные условия.</li><li>Сохраните результат вместе с единицами измерения и интервалами лаборатории.</li></ol><Link className={s.textLink} href={`/blog/${study.articles[0]}`}>Памятки и подготовка →</Link></div></section><section className={s.section}><h2>Связанные исследования</h2><p>Ссылки помогают разобраться в назначении. Это не рекомендация сдавать всё вместе.</p><div className={s.links}>{study.related.map(slug=>{const related=labStudy(slug);return related?<Link key={slug} href={`${LAB_ROOT}/${slug}`} prefetch={false}>{related.name} →</Link>:null;})}{currentHub && <Link href={`${LAB_ROOT}/${currentHub.slug}`} prefetch={false}>Всё направление →</Link>}</div></section></> : <>
      <section className={`${s.section} ${s.split}`} id="lab-about"><div><h2>Как выбрать нужное исследование</h2>{hub!.paragraphs.map(text=><p key={text}>{text}</p>)}</div><div className={s.panel}><span className={s.eyebrow}>ТОЧНО ПО НАЗНАЧЕНИЮ</span><h2>Без лишних позиций</h2><p>{hub!.select}</p><Link href={hub!.doctor.href} className={s.textLink}>{hub!.doctor.name}: консультация →</Link></div></section>
      <section className={s.section} id="lab-results"><h2>Исследования и цены</h2><div className={s.rows}>{hubStudies(hub!.slug).map(item=>{const values=studyItems(item,data).filter(row=>row.priceStatus==='matched'&&row.price>0).map(row=>row.price);return <Link className={s.row} key={item.slug} href={`${LAB_ROOT}/${item.slug}`} prefetch={false}><div><h3>{item.name}</h3><p>Подготовка, варианты и ответы на вопросы →</p></div><strong>{values.length?`${item.codes.length>1?'от ':''}${money(Math.min(...values))}`:'Уточнить цену'}</strong></Link>;})}</div>
      {categoryItems.length > 0 && <><h3 style={{margin:'28px 0 16px'}}>Каталог направления</h3><div className={s.rows}>{categoryItems.slice((page-1)*12,page*12).map(item=><div className={s.row} key={item.key}><div><small>Код {item.code}</small><h3>{item.name}</h3></div><div className={s.priceAside}><strong>{item.priceStatus==='matched'&&item.price>0?money(item.price):'Уточнить цену'}</strong><AddLabTest itemKey={item.key} name={item.name}/></div></div>)}</div><nav className={s.pagination} aria-label="Страницы каталога">{page>1&&<Link prefetch={false} href={`${LAB_ROOT}/${hub!.slug}${page>2?`?page=${page-1}`:''}#lab-results`}>← Предыдущая</Link>}<span>{page} / {pages}</span>{page<pages&&<Link prefetch={false} href={`${LAB_ROOT}/${hub!.slug}?page=${page+1}#lab-results`}>Следующие 12 →</Link>}</nav></>}
      <p className={s.note}>{priceSourceLabel(data.prices)} Без забора материала и скидок.</p><Link className={s.textLink} href={`${LAB_ROOT}/calculator#lab-catalog`} prefetch={false}>Искать по всему каталогу →</Link></section>
    </>}
    {hub && <LabSubdirections slug={hub.slug}/>}
    {hub?.parent && <p className={s.section}><Link className={s.textLink} prefetch={false} href={`${LAB_ROOT}/${hub.parent}`}>← {labHub(hub.parent)?.name}</Link></p>}
    <LabArticles slugs={entry.articles}/>
    {study && currentHub && <section className={`${s.section} ${s.visitPanel}`}><div><span className={s.eyebrow}>ПОСЛЕ ИССЛЕДОВАНИЯ</span><h2>Результат — в контексте вашего здоровья</h2><p>Сохраните полный бланк и обсудите его с назначившим специалистом. Если нужна консультация, выберите профильное направление.</p></div><Link className={s.textLink} href={currentHub.doctor.href} prefetch={false}>{currentHub.doctor.name} →</Link></section>}
    <section id="lab-faq" className={s.section}><span className={s.eyebrow}>ЕЩЁ НЕМНОГО ЯСНОСТИ</span><h2>Частые вопросы</h2><div className={s.faq}>{faq.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section><LabBranches/><p className={s.note}>Информация помогает подготовиться к исследованию и не заменяет интерпретацию результатов врачом.</p>
  </div></main>;
}
