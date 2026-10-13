'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LAB_PROMOTION } from '@/data/lab-promotion';
import { categoryNames, LabItem, money, PAGE_SIZE, searchCatalog, STORAGE_KEY } from './catalog';
import { priceSourceLabel, remapLabSelection, type LabPriceInfo, type PricedCatalogResponse } from './price-reconciliation';
import { CBC_VARIANT_LABELS, DIRECTIONS, getTopics, groupEntries, LabDirection, QUICK_LABELS, quickSelection } from './navigation';
import s from './lab-preview.module.css';

type IconName = 'search' | 'arrow' | 'plus' | 'check' | 'bag' | 'close' | 'filter' | 'file' | 'phone' | 'pin' | 'spark' | 'drop';
function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    arrow: <path d="M4 12h15m-6-6 6 6-6 6"/>,
    plus: <path d="M12 5v14M5 12h14"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    bag: <><path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></>,
    close: <path d="m6 6 12 12M6 18 18 6"/>,
    filter: <><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></>,
    file: <><path d="M14 3H5v18h14V8l-5-5Z"/><path d="M14 3v5h5M8 12h8M8 16h5"/></>,
    phone: <path d="m5 3 4 1 1 5-3 2c2 3 3 4 6 6l2-3 5 1 1 4c-1 6-20-4-18-14l2-2Z"/>,
    pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    spark: <><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/></>,
    drop: <path d="M12 2s-7 8-7 13a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const opener = document.activeElement as HTMLElement | null;
    const scroll = window.scrollY;
    const body = document.body;
    const previous = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow };
    Object.assign(body.style, { position: 'fixed', top: `-${scroll}px`, width: '100%', overflow: 'hidden' });
    dialog?.showModal();
    return () => {
      dialog?.close();
      Object.assign(body.style, previous);
      const root = document.documentElement;
      const behavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, scroll);
      opener?.focus({ preventScroll: true });
      root.style.scrollBehavior = behavior;
    };
  }, []);
  return createPortal(<dialog ref={ref} className={s.dialog} aria-labelledby="lab-dialog-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className={s.dialogHeader}><div><span className={s.eyebrow}>АЛЬТАМЕД-С · АНАЛИЗЫ</span><h2 id="lab-dialog-title">{title}</h2></div><button className={s.iconButton} onClick={onClose} aria-label="Закрыть окно" autoFocus><Icon name="close"/></button></div>
    <div className={s.dialogContent}>{children}</div>
  </dialog>, document.body);
}

const faqs = [
  ['Как найти анализ из назначения?', 'Введите название, сокращение или код. Например, «ОАК», «ферритин», «ТТГ» или «витамин Д». Сверьте полное название: похожие исследования могут отличаться составом и методом.'],
  ['Входит ли забор материала в стоимость?', 'В каталоге указана стоимость исследования. Забор материала оплачивается отдельно. Его стоимость и необходимость уточнят в клинике по вашему списку. Скидка на анализы не распространяется на забор материала.'],
  ['Как подготовиться к сдаче?', 'Подготовка зависит от выбранного исследования. Воспользуйтесь памяткой клиники и уточните требования по полному названию анализа. Не меняйте назначенный приём лекарств самостоятельно.'],
  ['Можно ли сдать анализы ребёнку?', 'Условия приёма, возрастные ограничения и подготовку уточните заранее. Для родителей мы подготовили отдельную страницу об анализах детям.'],
  ['Когда и как я получу результаты?', 'Срок и способ получения результатов зависят от исследования. Их уточнят при оформлении вашего заказа.'],
];

export default function LabPreview() {
  const [items, setItems] = useState<LabItem[]>([]);
  const [priceInfo, setPriceInfo] = useState<LabPriceInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('popular');
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [selection, setSelection] = useState<string[]>([]);
  const [restored, setRestored] = useState(false);
  const [modal, setModal] = useState<'basket' | 'categories' | null>(null);
  const [detail, setDetail] = useState<LabItem | null>(null);
  const [variants, setVariants] = useState<{ title: string; items: LabItem[] } | null>(null);
  const [notice, setNotice] = useState('');
  const [copied, setCopied] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const catalogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setFailed(false);
    fetch('/lab-tests-preview/catalog-data', { signal: controller.signal, cache: 'no-store' })
      .then(response => { if (!response.ok) throw new Error('catalog'); return response.json(); })
      .then((data: PricedCatalogResponse) => {
        if (!Array.isArray(data.items) || !data.prices || data.items.some(item =>
          !Number.isFinite(item.price) || item.price < 0 ||
          [item.code, item.name, item.key, item.category, item.search].some(value => typeof value !== 'string')
        )) throw new Error('catalog format');
        setItems(data.items); setPriceInfo(data.prices);
      })
      .catch(error => { if (error.name !== 'AbortError') setFailed(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [attempt]);

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(saved)) setSelection(saved.filter((key): key is string => typeof key === 'string'));
    } catch { /* Storage is optional in private browsing. */ }
    setRestored(true);
  }, []);
  useEffect(() => {
    if (restored) { try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(selection)); } catch { /* Selection still works in memory. */ } }
  }, [selection, restored]);
  useEffect(() => {
    if (!restored || !items.length) return;
    setSelection(current => {
      const mapped = remapLabSelection(current, items);
      return mapped.length === current.length && mapped.every((key, index) => key === current[index]) ? current : mapped;
    });
  }, [items, restored]);

  const categories = useMemo(() => Object.keys(categoryNames).filter(name => items.some(item => item.category === name)), [items]);
  const direction = DIRECTIONS.find(group => group.id === category.split(':')[1]);
  const topic = direction && getTopics(direction).find(group => group.id === category.split(':')[2]);
  const overview = !query.trim() && (category === 'directions' || (Boolean(direction) && !topic));
  const isQuick = !query.trim() && category === 'popular';
  const isFullCatalog = !query.trim() && (category === 'all' || categories.includes(category));
  const selected = useMemo(() => items.filter(item => selection.includes(item.key)), [items, selection]);
  const total = selected.reduce((sum, item) => sum + Math.max(0, item.price), 0);
  const unknownPrice = selected.some(item => item.price <= 0);
  const priceSource = priceSourceLabel(priceInfo);
  const totalLabel = total > 0 ? `${money(total)}${unknownPrice ? ' + …' : ''}` : unknownPrice ? 'Уточняется' : money(0);
  const results = useMemo(() => {
    if (query.trim()) return searchCatalog(items, query);
    if (category === 'popular') return quickSelection(items);
    const currentDirection = DIRECTIONS.find(group => group.id === category.split(':')[1]);
    const currentTopic = currentDirection && getTopics(currentDirection).find(group => group.id === category.split(':')[2]);
    if (currentTopic) return items.filter(currentTopic.match);
    if (category === 'directions' || currentDirection) return [];
    if (category === 'all') return [...items].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    return items.filter(item => item.category === category);
  }, [items, query, category]);
  const entries = useMemo(() => groupEntries(results, query), [results, query]);

  function toggle(item: LabItem) {
    const exists = selection.includes(item.key);
    setSelection(current => exists ? current.filter(key => key !== item.key) : [...current, item.key]);
    setNotice(`${item.name}: ${exists ? 'удалено из списка' : 'добавлено в список'}`);
    setCopied(false);
  }
  function changeCategory(next: string, scroll = false) {
    setCategory(next); setQuery(''); setLimit(PAGE_SIZE); setModal(null);
    if (scroll) requestAnimationFrame(() => catalogRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
  }
  function quickSearch(value: string) { setQuery(value); setLimit(PAGE_SIZE); searchRef.current?.focus({ preventScroll: true }); }

  async function copyList() {
    const text = `Альтамед-С · список анализов\n\n${selected.map((item, index) => `${index + 1}. ${item.name} · ${item.code} · ${item.price > 0 ? money(item.price) : 'цена уточняется'}`).join('\n')}\n\n${unknownPrice ? 'Сумма по известным ценам' : 'Исследования'}: ${total > 0 ? money(total) : unknownPrice ? 'уточняется' : money(0)}${unknownPrice && total > 0 ? ' + позиции с уточняемой ценой' : ''}.\n${priceSource}\nЗабор материала и скидки в сумму не включены.`;
    try { await navigator.clipboard.writeText(text); setCopied(true); }
    catch { setNotice('Браузер не разрешил копирование. Можно выделить текст списка вручную.'); }
  }

  const categoryButtons = <div className={s.categoryList}>
    <button aria-pressed={!query && category === 'all'} onClick={() => changeCategory('all', true)}><span>Все исследования</span><Icon name="arrow" size={17}/></button>
    <div className={s.categoryDivider}/>
    {categories.map(name => <button key={name} aria-pressed={!query && category === name} onClick={() => changeCategory(name, true)}><span>{categoryNames[name]}</span><Icon name="arrow" size={17}/></button>)}
  </div>;

  const directionCards = (groups: LabDirection[]) => <div className={s.directionGrid}>{groups.map(group => <button key={group.id} onClick={() => changeCategory(`direction:${group.id}`, true)} className={s.directionCard}><span className={s.directionIcon}><Icon name={group.symbol} size={21}/></span><span><strong>{group.title}</strong><small>{group.hint}</small></span><Icon name="arrow" size={17}/></button>)}</div>;
  const catalogTitle = query.trim() ? 'Результаты поиска' : isQuick ? 'Найти нужное быстрее' : category === 'directions' ? 'Выберите направление' : topic?.title || direction?.title || (category === 'all' ? 'Полный каталог' : categoryNames[category]);

  const basketContent = (full: boolean) => <>
    <div className={s.basketTitle}><div><span className={s.eyebrow}>НИЧЕГО НЕ ЗАБУДЕТСЯ</span><h2>Мой список <span>{selected.length}</span></h2></div><Icon name="bag" size={25}/></div>
    {selected.length === 0 ? <div className={s.emptyBasket}><span className={s.basketDrawing}><Icon name="file" size={38}/></span><h3>Начнём с первого анализа?</h3><p>Нажмите «+» рядом с исследованием. Мы соберём всё в один список.</p><span className={s.emptyHint}>Без регистрации</span></div> : <>
      <ul className={`${s.basketItems} ${full ? s.basketItemsFull : ''}`}>{selected.map(item => <li key={item.key}><div><span>{item.name}</span><strong>{item.price > 0 ? money(item.price) : 'Уточнить цену'}</strong></div><button aria-label={`Удалить: ${item.name}`} onClick={() => toggle(item)} className={s.remove}><Icon name="close" size={16}/></button></li>)}</ul>
      <div className={s.total}><span>{unknownPrice ? 'По известным ценам' : 'Исследования'}</span><strong>{totalLabel}</strong></div>
      <p className={s.priceNote}>{priceSource} Забор материала и скидки не включены.{unknownPrice && ' В списке есть исследования без подтверждённой цены.'}</p>
      <button className={s.primaryButton} onClick={() => full ? copyList() : setModal('basket')}>{full ? (copied ? 'Список скопирован' : 'Скопировать список') : 'Посмотреть список'}<Icon name={copied && full ? 'check' : 'arrow'}/></button>
      {full && <a className={s.outlineButton} href="tel:+74952554450"><Icon name="phone" size={17}/>Уточнить и записаться</a>}
      <button className={s.clearButton} onClick={() => { setSelection([]); setCopied(false); setNotice('Список очищен'); }}>Очистить список</button>
    </>}
    <div className={s.savedNote}><Icon name="check" size={15}/><span>Выбор сохраняется в этой вкладке</span></div>
  </>;

  return <div className={s.page}>
    <div className={s.container}>
      <div className={s.topline}><nav aria-label="Хлебные крошки"><Link href="/">Главная</Link><span>/</span><Link href="/services">Услуги</Link><span>/</span><span>Анализы</span></nav><span className={s.previewBadge}>Концепт · тестовая страница</span></div>

      <section className={s.hero} aria-labelledby="lab-title">
        <div className={s.heroCopy}><p className={s.eyebrow}><span className={s.liveDot}/>ЛАБОРАТОРНАЯ ДИАГНОСТИКА · ОДИНЦОВО</p><h1 id="lab-title">Анализы.<br/><span>Всё начинается<br className={s.desktopBreak}/> с ясности.</span></h1><p className={s.heroDescription}>Найдите нужное исследование, узнайте стоимость<br className={s.desktopBreak}/> и соберите свой список — в одном месте.</p><div className={s.heroLinks}><a href="#lab-catalog">Перейти к анализам <Icon name="arrow" size={18}/></a><a href="#lab-preparation">Как подготовиться</a></div></div>
        <div className={s.heroVisual}><Image src="/images/lab-preview/lab-editorial.webp" alt="Иллюстрация: лабораторные пробирки в стеклянном штативе" fill priority sizes="(max-width: 767px) 45vw, 45vw" className={s.heroImage}/><div className={s.photoCaption}><span className={s.photoCaptionIcon}><Icon name="drop" size={20}/></span><div><strong>От одного анализа<br/>до полного списка</strong><span>По вашему назначению</span></div></div><span className={s.visualLabel}>ТОЧНОСТЬ В ДЕТАЛЯХ</span></div>
      </section>

      <section className={s.searchSection} aria-label="Поиск исследований">
        <div className={s.searchBox}><Icon name="search" size={25}/><label className={s.srOnly} htmlFor="lab-search">Найти анализ по названию или коду</label><input ref={searchRef} id="lab-search" type="search" autoComplete="off" value={query} onChange={event => { setQuery(event.target.value); setLimit(PAGE_SIZE); }} onKeyDown={event => { if (event.key === 'Enter') catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} placeholder="Какой анализ вы ищете?"/><span className={s.searchHint}>Название, сокращение или код</span>{query && <button aria-label="Очистить поиск" onClick={() => { setQuery(''); setLimit(PAGE_SIZE); searchRef.current?.focus(); }} className={s.iconButton}><Icon name="close"/></button>}<button className={s.searchSubmit} onClick={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Найти <Icon name="arrow" size={18}/></button></div>
        <div className={s.quickSearch}><span>Например:</span>{['Общий анализ крови', 'Ферритин', 'ТТГ', 'Витамин Д'].map(term => <button key={term} onClick={() => quickSearch(term)}>{term}</button>)}</div>
      </section>

      <Link href={LAB_PROMOTION.href} className={s.promotion}><div className={s.promoHeading}><span className={s.promoIcon}><Icon name="spark" size={22}/></span><div><strong>Забота о себе — с приятной скидкой</strong><span>{LAB_PROMOTION.period}</span></div></div><div className={s.discount}><strong>−20<span>%</span></strong><span>Пн · Ср · Пт</span></div><div className={s.discount}><strong>−25<span>%</span></strong><span>Воскресенье</span></div><div className={s.promoDetails}><span>Без скидки на забор материала</span><span>Условия акции <Icon name="arrow" size={17}/></span></div></Link>

      <section ref={catalogRef} id="lab-catalog" className={s.catalog} aria-labelledby="catalog-heading">
        <div className={s.results}>
          <nav className={s.catalogModes} aria-label="Способ выбора анализов">
            <button aria-pressed={isQuick || Boolean(query.trim())} onClick={() => { changeCategory('popular'); searchRef.current?.focus({ preventScroll: true }); }}><Icon name="search" size={17}/>Быстрый выбор</button>
            <button aria-pressed={overview || Boolean(topic && !query.trim())} onClick={() => changeCategory('directions')}><Icon name="filter" size={17}/>По разделам</button>
            <button aria-pressed={isFullCatalog} onClick={() => changeCategory('all')}><Icon name="file" size={17}/>Весь каталог</button>
          </nav>
          {direction && !query.trim() && <nav className={s.catalogBreadcrumb} aria-label="Навигация по исследованиям"><button onClick={() => changeCategory('directions')}>Все направления</button><span>/</span>{topic ? <><button onClick={() => changeCategory(`direction:${direction.id}`)}>{direction.title}</button><span>/</span><span>{topic.title}</span></> : <span>{direction.title}</span>}</nav>}
          <div className={s.resultHeading}><div><span className={s.eyebrow}>{query.trim() ? 'ИЩЕМ ВО ВСЕХ РАЗДЕЛАХ' : isQuick ? 'ЗНАКОМЫЕ НАЗВАНИЯ · ПРОСТОЙ ВЫБОР' : 'ШАГ ЗА ШАГОМ К НУЖНОМУ АНАЛИЗУ'}</span><h2 id="catalog-heading">{catalogTitle}</h2></div>{query.trim() && <span className={s.resultCount} aria-live="polite">Найдено: {results.length}</span>}</div>
          <p className={s.resultIntro}>{query.trim() ? `По запросу «${query}». Сверьте точное название с назначением.` : isQuick ? 'Быстрые ссылки на знакомые исследования. Это не готовый набор: выбирайте только то, что нужно вам.' : overview ? 'Сначала выберите тему — затем покажем нужные исследования.' : 'Выберите конкретное исследование и добавьте его в свой список.'}</p>
          {isFullCatalog && <div className={s.directoryFilter}><label htmlFor="full-catalog-category">Раздел каталога</label><select id="full-catalog-category" value={category} onChange={event => changeCategory(event.target.value)}><option value="all">Все направления</option>{categories.map(name => <option key={name} value={name}>{categoryNames[name]}</option>)}</select></div>}
          {loading ? <div aria-label="Загружаем исследования" className={s.skeletons}>{[1, 2, 3, 4].map(i => <div key={i}/>)}</div> : failed ? <div className={s.emptyResults}><h3>Не получилось загрузить каталог</h3><p>Ваш сохранённый список не удалён. Попробуйте ещё раз.</p><button className={s.outlineButton} onClick={() => setAttempt(value => value + 1)}>Загрузить повторно</button></div> : overview ? <>
            {direction ? <div className={s.topicGrid}>{getTopics(direction).filter(item => items.some(item.match)).map(item => <button key={item.id} className={s.topicCard} onClick={() => changeCategory(`topic:${direction.id}:${item.id}`, true)}><strong>{item.title}</strong><span>{item.hint}</span><Icon name="arrow" size={18}/></button>)}</div> : directionCards(DIRECTIONS)}
            <button className={s.otherDirections} onClick={() => setModal('categories')}>Другие направления и полный каталог<Icon name="arrow" size={17}/></button>
          </> : <>
            <div className={`${s.catalogDisclaimer} ${priceInfo?.source === 'file' || priceInfo?.source === 'unavailable' ? s.priceWarning : ''}`}><span>{priceSource} Забор материала и скидки не включены.</span>{priceInfo?.source !== 'network' && priceInfo?.source !== 'memory' && <button onClick={() => setAttempt(value => value + 1)}>Обновить цены</button>}</div>
            {!results.length ? <div className={s.emptyResults}><Icon name="search" size={32}/><h3>Попробуем другое название?</h3><p>По запросу «{query}» ничего не нашлось. Введите часть названия или код из назначения.</p><button className={s.outlineButton} onClick={() => changeCategory('all')}>Открыть все исследования</button><a href="tel:+74952554450">Или поможем по телефону</a></div> : <div className={`${s.testList} ${isQuick ? s.quickGrid : ''}`}>{entries.slice(0, limit).map(entry => {
              if (entry.kind === 'variants') {
                const chosen = entry.items.filter(item => selection.includes(item.key)).length;
                const prices = entry.items.map(item => item.price).filter(price => price > 0);
                return <article key={entry.key} className={`${s.testCard} ${chosen ? s.testCardAdded : ''} ${s.variantCard}`}><div className={s.testInfo}><button className={s.testName} onClick={() => setVariants(entry)}>{entry.title}</button><span className={s.testCategory}>{chosen ? `В списке: ${chosen}` : 'С формулой или без · разные виды биоматериала'}</span></div><div className={s.testAction}><strong>{prices.length ? `от ${money(Math.min(...prices))}` : 'Уточнить цену'}</strong><button className={s.chooseVariant} onClick={() => setVariants(entry)}>Выбрать вариант<Icon name="arrow" size={16}/></button></div></article>;
              }
              const item = entry.item;
              const added = selection.includes(item.key);
              const label = isQuick ? QUICK_LABELS[item.code] : undefined;
              return <article key={entry.key} className={`${s.testCard} ${added ? s.testCardAdded : ''}`}><div className={s.testInfo}><button className={s.testName} onClick={() => setDetail(item)}>{label?.title || item.name}</button><span className={s.testCategory}>{label?.hint || (isQuick ? 'Посмотреть исследование' : `Код ${item.code}`)}</span></div><div className={s.testAction}><strong>{item.price > 0 ? money(item.price) : 'Уточнить'}</strong><button className={s.addButton} aria-label={`${added ? 'Удалить из списка' : 'Добавить в список'}: ${item.name}`} aria-pressed={added} onClick={() => toggle(item)}><Icon name={added ? 'check' : 'plus'}/></button></div></article>;
            })}</div>}
            {entries.length > limit && <button className={s.showMore} onClick={() => setLimit(current => current + PAGE_SIZE)}>Показать ещё {Math.min(PAGE_SIZE, entries.length - limit)}<Icon name="plus" size={18}/></button>}
            <p className={s.catalogFootnote}>Цена указана за исследование. Точный состав и стоимость заказа подтвердит администратор.</p>
          </>}
          {isQuick && !loading && !failed && <section className={s.browseDirections} aria-labelledby="directions-heading"><div className={s.directionHeading}><div><span className={s.eyebrow}>НЕ НАШЛИ В БЫСТРОМ ВЫБОРЕ?</span><h3 id="directions-heading">Посмотрите по направлениям</h3></div></div>{directionCards(DIRECTIONS)}<button className={s.otherDirections} onClick={() => setModal('categories')}>Другие направления<Icon name="arrow" size={17}/></button></section>}
          <div className={s.catalogHelp}><Icon name="phone" size={20}/><div><strong>Поможем разобраться в назначении</strong><span>Если сложно найти точное название — позвоните нам.</span></div><a href="tel:+74952554450">+7 (495) 255-44-50</a></div>
        </div>
        <aside className={s.basketAside}><div className={s.basket}>{basketContent(false)}</div><div className={s.noPrescription}><Icon name="spark" size={20}/><p>Не знаете, какие анализы нужны?</p><Link href="/services/therapy">Начните с консультации <Icon name="arrow" size={16}/></Link></div></aside>
      </section>

      <section id="lab-preparation" className={s.preparation} aria-labelledby="preparation-heading"><div className={s.preparationPhoto}><Image src="/images/lab-preview/lab-care.webp" alt="Иллюстрация: медицинский специалист беседует с пациенткой перед исследованием" fill sizes="(max-width: 767px) 100vw, 38vw"/><span>Сначала — внимание к вам.</span></div><div className={s.preparationCopy}><span className={s.eyebrow}>ПЕРЕД ВИЗИТОМ</span><h2 id="preparation-heading">Хорошая подготовка.<br/><span>Спокойный визит.</span></h2><p>У каждого исследования свои правила. Собрали главное, чтобы вам было проще подготовиться.</p><div className={s.preparationSteps}><div><span>01</span><div><h3>Сверьте названия</h3><p>Возьмите назначение врача и сохраните выбранные анализы.</p></div></div><div><span>02</span><div><h3>Уточните подготовку</h3><p>Проверьте требования к конкретному исследованию в памятке или по телефону.</p></div></div><div><span>03</span><div><h3>Выберите удобное посещение</h3><p>Уточните адрес, часы забора и необходимость предварительной записи.</p></div></div></div><a href="/images/documents/pamyatki-dlya-pacientov-osnovnye-pravila-podgotovki-k-laboratornym-issledovaniyam.pdf" target="_blank" rel="noopener noreferrer" className={s.documentLink}><Icon name="file"/>Памятка по подготовке <span>PDF ↗</span></a></div></section>

      <section className={s.serviceLinks}><Link href="/services/lab-tests/analizy-rebenku"><span className={s.eyebrow}>ДЛЯ РОДИТЕЛЕЙ</span><h3>Если анализы<br/>нужны ребёнку</h3><p>Подготовка и особенности посещения</p><span className={s.roundArrow}><Icon name="arrow"/></span></Link><Link href="/contacts"><span className={s.eyebrow}>РЯДОМ С ВАМИ</span><h3>Альтамед-С<br/>в Одинцово</h3><p>Адреса, контакты и схема проезда</p><span className={s.roundArrow}><Icon name="pin"/></span></Link></section>

      <section className={s.faq} aria-labelledby="faq-title"><div><span className={s.eyebrow}>ЕЩЁ НЕМНОГО ЯСНОСТИ</span><h2 id="faq-title">Вы спрашиваете.<br/><span>Мы отвечаем.</span></h2><a href="tel:+74952554450">Остался вопрос? Позвоните нам <Icon name="arrow" size={18}/></a></div><div className={s.faqList}>{faqs.map(([question, answer], i) => <details key={question}><summary><span className={s.faqNumber}>0{i + 1}</span>{question}<Icon name="plus" size={18}/></summary><p>{answer}</p></details>)}</div></section>
      <div className={s.closing}><div><span className={s.eyebrow}>ВАШ СЛЕДУЮЩИЙ ШАГ</span><h2>Меньше поиска.<br/>Больше заботы о себе.</h2></div><a href="#lab-catalog">Выбрать исследования <Icon name="arrow"/></a></div>
      <p className={s.previewNote}>Демонстрационный вариант. Основная страница не изменена. Иллюстрации созданы для концепта и не являются фотографиями клиники. В этом макете нет отправки заявок.</p>
    </div>
    {selected.length > 0 && <button className={s.mobileBasket} onClick={() => setModal('basket')}><span><Icon name="bag" size={19}/><span>Мой список <b>{selected.length}</b></span></span><strong>{totalLabel}<Icon name="arrow" size={19}/></strong></button>}
    <span className={s.srOnly} role="status">{notice}</span>
    {modal && <Modal title={modal === 'basket' ? 'Выбранные исследования' : 'Каталог исследований'} onClose={() => setModal(null)}>{modal === 'categories' ? categoryButtons : basketContent(true)}</Modal>}
    {variants && <Modal title={variants.title} onClose={() => setVariants(null)}><p className={s.variantIntro}>Выберите вариант из назначения. Исследования отличаются биоматериалом и составом — мы ничего не добавляем автоматически.</p><div className={s.variantOptions}>{variants.items.map(item => {
      const label = CBC_VARIANT_LABELS[item.code];
      const added = selection.includes(item.key);
      return <div key={item.key} className={`${s.variantOption} ${added ? s.variantOptionAdded : ''}`}><h3>{label?.title || item.name}</h3><p>{label?.description}</p><details><summary>Полное название и код</summary><p>{item.name}</p><span>{item.code}</span></details><div><strong>{item.price > 0 ? money(item.price) : 'Уточнить цену'}</strong><button className={s.variantAdd} aria-pressed={added} aria-label={`${added ? 'Удалить из списка' : 'Добавить в список'}: ${item.name}`} onClick={() => toggle(item)}>{added ? 'Добавлено' : 'Добавить'}<Icon name={added ? 'check' : 'plus'} size={17}/></button></div></div>;
    })}</div><p className={s.priceNote}>{priceSource} Без забора материала и скидок.</p><button className={s.outlineButton} onClick={() => setVariants(null)}>Вернуться к анализам</button></Modal>}
    {detail && <Modal title={detail.name} onClose={() => setDetail(null)}><div className={s.detailMeta}><span>{detail.code}</span><strong>{detail.price > 0 ? money(detail.price) : 'Цена уточняется'}</strong></div><p className={s.detailCategory}>{detail.category}</p><div className={s.detailNote}><h3>Проверьте название в назначении</h3><p>Состав исследования, подготовку, биоматериал и срок готовности уточните в клинике. В тестовом каталоге эти сведения ещё не подключены.</p></div><button className={s.primaryButton} onClick={() => toggle(detail)}>{selection.includes(detail.key) ? 'Удалить из списка' : 'Добавить в мой список'}<Icon name={selection.includes(detail.key) ? 'check' : 'plus'}/></button><a className={s.outlineButton} href="tel:+74952554450"><Icon name="phone" size={17}/>Уточнить исследование</a></Modal>}
  </div>;
}
