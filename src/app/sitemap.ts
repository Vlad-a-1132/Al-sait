import { MetadataRoute } from 'next';
import { doctors } from '@/data/static-data';
import { articles } from '@/data/static-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altamed-c.ru';
  
  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/appointments`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diagnostics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rehabilitation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/promo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ginekolog-v-odintsovo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // SEO-статьи по гинекологии
  const articlePages: MetadataRoute.Sitemap = [
    'kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov',
    'kak-podgotovitsya-k-priyomu-ginekologa',
    'bol-vnizu-zhivota-u-zhenshchin-prichiny',
    'narushenie-menstrualnogo-tsikla',
    'vydeleniya-zud-zhzhenie-kogda-k-ginekologu',
    'chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut',
    'vedenie-beremennosti-v-odintsovo',
    'ginekolog-ili-ginekolog-endokrinolog',
    'vnutrimatochnaya-spiral-ustanovka-i-udalenie',
    'chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut',
    'pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit',
    'biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto',
    'uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie',
    'dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet',
    'pervyy-priem-beremennoy-kak-prohodit-konsultatsiya',
    'podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya',
    'kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie',
    'endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie',
    'vaginit-simptomy-prichiny-i-kogda-nuzhna-konsultatsiya-ginekologa',
    'polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura',
    'lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya',
    'kriodestrukciya-sheyki-matki-kogda-primenyaetsya-i-chto-vazhno-znat',
    'radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury',
    'udalenie-kondilom-i-papillom-v-intimnoy-zone-kogda-obraschatsya-k-vrachu',
    'podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa',
    'poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut',
    'profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya',
  ].map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Страницы услуг
  const servicePages: MetadataRoute.Sitemap = [
    '/services/allergology',
    '/services/cardiology',
    '/services/dermatology',
    '/services/gastroenterology',
    '/services/neurology',
    '/services/otolaryngology',
    '/services/ophthalmology',
    '/services/pediatrics',
    '/services/proctology',
    '/services/surdology',
    '/services/endocrinology',
    '/services/endoscopy',
    '/services/xray',
    '/services/ultrasound',
    '/services/physiotherapy',
    '/services/osteopathy',
    '/services/mammology',
    '/services/laser-cosmetology',
    '/services/dentistry',
    '/services/dentistry/caries',
    '/services/dentistry/periodontics',
    '/services/dentistry/implantation',
    '/services/dentistry/prosthodontics',
    '/services/dentistry/orthodontics',
    '/services/dentistry/pediatric-dentistry',
    '/services/dentistry/therapeutic',
    '/services/dentistry/surgery',
    '/services/dentistry/general-diagnostics',
    '/services/dentistry/xray',
    '/services/dentistry/xray-diagnostics',
    '/services/dentistry/ct',
    '/services/hardware-diagnostics',
    '/services/functional-diagnostics',
    '/services/urology',
    '/services/therapy',
    '/services/surgery',
    '/services/traumatology',
    '/services/psychology',
    '/services/psychotherapy',
    '/services/family-psychology',
    '/services/lab-tests',
    '/services/lab-tests/calculator',
    '/services/massage',
    '/services/pregnancy-screening',
    '/services/shockwave-therapy',
    '/services/ct',
    '/services/bioresonance',
    '/services/vacuum-massage',
    '/services/lymph-e-massage',
    '/services/carboxytherapy',
    '/services/elgos-therapy',
    '/services/hilt-laser',
    '/services/tekar-therapy',
    '/services/sis-magnetotherapy',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Динамические страницы врачей
  const doctorPages: MetadataRoute.Sitemap = doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Динамические страницы блога
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Динамические страницы акций
  const promoPages: MetadataRoute.Sitemap = [
    { id: 1, slug: 'promo-1' },
    { id: 2, slug: 'promo-2' },
    { id: 3, slug: 'promo-3' },
    { id: 4, slug: 'promo-4' },
    { id: 5, slug: 'promo-5' },
  ].map((promo) => ({
    url: `${baseUrl}/promo/${promo.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...articlePages,
    ...servicePages,
    ...doctorPages,
    ...blogPages,
    ...promoPages,
  ];
}

