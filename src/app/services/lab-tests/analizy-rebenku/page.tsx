import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LabArticles, LabBranches } from '@/components/lab/LabSections';
import { LabCall } from '@/components/lab/LabActions';
import s from '@/components/lab/lab.module.css';
export const metadata: Metadata = {
 title:'Анализы ребёнку в Одинцово — подготовка и запись | Альтамед-С',
 description:'Как подготовить ребёнка к анализам, выбрать вариант общего анализа крови, собрать мочу и согласовать посещение Альтамед-С в Одинцово.',
 alternates:{canonical:'https://altamed-c.ru/services/lab-tests/analizy-rebenku'},
 openGraph:{title:'Анализы ребёнку в Одинцово',url:'https://altamed-c.ru/services/lab-tests/analizy-rebenku',images:['https://altamed-c.ru/images/lab-seo/children.webp']},
 twitter:{card:'summary_large_image',images:['https://altamed-c.ru/images/lab-seo/children.webp']},
};
const faq = [
 ['С какого возраста принимают детей?','Возрастные условия зависят от исследования и способа взятия материала. Назовите возраст ребёнка и точные анализы администратору до посещения.'],
 ['Ребёнку нужно голодать перед анализом?','Правила зависят от возраста и назначенных тестов. Для младенцев нельзя автоматически использовать взрослые интервалы голодания: заранее согласуйте кормление и время сдачи.'],
 ['Кровь возьмут из пальца или из вены?','Это определяется исследованием и клинической ситуацией. В каталоге варианты ОАК разделены по материалу; сверьте назначение, а способ забора обсудите с клиникой.'],
 ['Можно принести мочу или кал из дома?','Для некоторых исследований — да, по согласованной инструкции. Уточните контейнер, способ сбора и время доставки.'],
 ['Когда будут результаты?','Срок и способ получения сообщат по конкретному списку. Если результат нужен к консультации, уточните это при записи.'],
];
export default function ChildLabTestsPage(){
 return <main className={s.page}><div className={s.wrap}><nav className={s.crumbs} aria-label="Хлебные крошки"><Link href="/">Главная</Link><span>/</span><Link href="/services/lab-tests">Анализы</Link><span>/</span><span>Детям</span></nav>
 <section className={s.hero}><div><span className={s.eyebrow}>СПОКОЙНЫЙ ПЛАН ДЛЯ РОДИТЕЛЕЙ</span><h1>Анализы ребёнку<br/>в Одинцово</h1><p className={s.lead}>Нужное исследование, понятная подготовка и немного больше спокойствия. Поможем сверить назначение и согласовать посещение.</p><div className={s.actions}><Link className={s.button} href="/services/lab-tests/calculator#lab-catalog">Найти анализы →</Link><LabCall/></div><p className={s.note}>Возраст, способ забора, филиал и время уточняются по назначенным исследованиям.</p></div><div className={s.visual}><Image src="/images/lab-seo/children.webp" alt="Иллюстрация: игрушка и подготовленные вещи ребёнка перед визитом" fill priority sizes="(max-width:640px) 100vw, 45vw"/><span className={s.caption}>ТЕМАТИЧЕСКАЯ ИЛЛЮСТРАЦИЯ</span></div></section>
 <section className={s.section}><span className={s.eyebrow}>УЖЕ ЕСТЬ НАЗНАЧЕНИЕ?</span><h2>Начните с точного названия</h2><p>Не все варианты общего анализа крови одинаковы. Проверьте, нужна ли лейкоцитарная формула и какой указан биоматериал. Не добавляйте похожие позиции одновременно без назначения.</p><div className={s.links}><Link href="/services/lab-tests/obshchiy-analiz-krovi">ОАК: варианты и цены →</Link><Link href="/services/lab-tests/obshchiy-analiz-mochi">Общий анализ мочи →</Link><Link href="/services/lab-tests/koprogramma">Копрограмма →</Link><Link href="/services/lab-tests/ferritin">Ферритин →</Link></div></section>
 <section className={`${s.section} ${s.split}`}><div><h2>Подготовка начинается дома</h2><p>Скажите коротко и честно, что будет происходить. Ребёнок может выбрать игрушку или книгу для ожидания; обещать полное отсутствие ощущений не нужно.</p><p>Возьмите документы, назначение и одежду с удобным доступом к руке. Предупредите сотрудника о прошлом обмороке, сильном страхе или особенностях, которые важно учесть.</p><Link className={s.textLink} href="/blog/podgotovit-rebenka-k-analizu-krovi">Подробная памятка для родителей →</Link></div><div className={s.panel}><span className={s.eyebrow}>ПИТАНИЕ И ЛЕКАРСТВА</span><h2>По возрасту и задаче</h2><p>Уточните условия кормления, питья и приёма постоянных лекарств. Подготовка младенца отличается от подготовки школьника или взрослого.</p><p>Если назначения пока нет, педиатр поможет определить необходимые исследования и объяснит, какой результат нужен для дальнейшего решения.</p><Link className={s.textLink} href="/services/pediatrics">Консультация педиатра →</Link></div></section>
 <LabArticles slugs={['podgotovit-rebenka-k-analizu-krovi','oak-s-formuloy-i-bez','kak-sobrat-mochu','kak-sobrat-kal-na-analiz']}/>
 <section className={s.section}><h2>Вопросы родителей</h2><div className={s.faq}>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section><LabBranches/></div></main>;
}
