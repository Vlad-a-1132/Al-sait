import type { PrioritySeoArticle, SeoArticleSection } from './priority-seo-articles';
import { LAB_ROOT, LAB_UPDATED, labImage } from './lab-seo';
export const section = (id: string, title: string, paragraphs: string[], points?: string[]): SeoArticleSection => ({id,title,paragraphs,points});
type ArticleInput = { h1:string; description:string; image:string; service:string; serviceLabel:string; intro:string; answer:string; sections:SeoArticleSection[]; faq:[string,string][]; related:[string,string][]; sources:string[] };
export function article(input: ArticleInput): PrioritySeoArticle {
  const words = [input.intro,input.answer,...input.sections.flatMap(s=>[s.title,...s.paragraphs,...(s.points || [])])].join(' ').split(/\s+/).length;
  return {
    title:`${input.h1} | Альтамед-С`,h1:input.h1,description:input.description,
    direction:'lab-tests',category:'Анализы',dateModified:LAB_UPDATED,readingTime:`${Math.max(3,Math.ceil(words/160))} мин.`,image:labImage(input.image),imageAlt:`Тематическая иллюстрация: ${input.h1.toLowerCase()}`,
    intro:[input.intro],answer:input.answer,summaryTitle:'Главное по делу',heroCaption:'Лабораторная диагностика · Одинцово',heroChips:['Подготовка','Понятные различия','Вопросы врачу'],
    serviceHref:input.service.startsWith('/')?input.service:`${LAB_ROOT}/${input.service}`,serviceLabel:input.serviceLabel,secondaryCtaLabel:input.serviceLabel,
    overviewSteps:[{title:'Проверьте назначение',text:'Полное название и биоматериал важнее похожей аббревиатуры.'},{title:'Подготовьтесь заранее',text:'Согласуйте условия именно для вашего списка исследований.'},{title:'Сохраните результат',text:'Передайте врачу полный бланк, а не отдельные цифры.'}],
    sections:input.sections,faq:input.faq.map(([question,answer])=>({question,answer})),related:input.related.map(([title,href])=>({title,href})),
    sources:input.sources.map(href=>({title:'Медицинская справочная информация',href})),
    finalCtaTitle:'Найдите нужный анализ в Альтамед-С',finalCtaText:'Названия, варианты и стоимость исследований собраны в каталоге. При записи уточните подготовку и удобный филиал в Одинцово.',
  };
}
