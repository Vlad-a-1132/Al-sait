import { MetadataRoute } from 'next';
import { doctors } from '@/data/static-data';
import { IMPLANTOLOGY_DIRECTION_SLUGS } from '@/data/abramov/implantologyDirectionPages';
import { ORTHO_DIRECTION_SLUGS } from '@/data/goncharenko/orthoDirectionPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altamed-c.ru';
  const now = new Date();

  const make = (path: string, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  // Все пользовательские статические страницы (собраны из src/app/**/page.tsx)
  // Исключены: /search, /call-center, /admin/* и любые динамические [...] маршруты.
  const staticUserPaths: string[] = [
    '/',
    '/about',
    '/appointments',
    // Публичные статьи теперь доступны как /blog/<slug> (а /articles/<slug> — технический маршрут)
    '/blog/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto',
    '/blog/bol-vnizu-zhivota-u-zhenshchin-prichiny',
    '/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut',
    '/blog/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut',
    '/blog/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet',
    '/blog/endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie',
    '/blog/ginekolog-ili-ginekolog-endokrinolog',
    '/blog/kak-podgotovitsya-k-priyomu-ginekologa',
    '/blog/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov',
    '/blog/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie',
    '/blog/kriodestrukciya-sheyki-matki-kogda-primenyaetsya-i-chto-vazhno-znat',
    '/blog/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya',
    '/blog/narushenie-menstrualnogo-tsikla',
    '/blog/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit',
    '/blog/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya',
    '/blog/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya',
    '/blog/podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa',
    '/blog/polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura',
    '/blog/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut',
    '/blog/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya',
    '/blog/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury',
    '/blog/udalenie-kondilom-i-papillom-v-intimnoy-zone-kogda-obraschatsya-k-vrachu',
    '/blog/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie',
    '/blog/vaginit-simptomy-prichiny-i-kogda-nuzhna-konsultatsiya-ginekologa',
    '/blog/kak-prohodit-vedenie-beremennosti',
    '/blog/vnutrimatochnaya-spiral-ustanovka-i-udalenie',
    '/blog/vydeleniya-zud-zhzhenie-kogda-k-ginekologu',
    '/blog',
    '/contacts',
    '/diagnostics',
    '/doctor/abramov-implantolog',
    '/doctor/goncharenko-ortodont',
    '/doctors',
    '/ginekolog-v-odintsovo',
    '/ginekolog-v-odintsovo/akusher-ginekolog',
    '/ginekolog-v-odintsovo/priem-ginekologa',
    '/ginekolog-v-odintsovo/profilakticheskie-osmotry',
    '/ginekolog-v-odintsovo/vedenie-beremennosti',
    '/privacy-policy',
    '/promo',
    '/rehabilitation',
    '/schedule',
    '/services',
    '/services/airflow-prophylaxis-master',
    '/services/akusher-ginekolog-odintsovo',
    '/services/allergology',
    '/services/bioresonance',
    '/services/carboxytherapy',
    '/services/cardiology',
    '/services/ct',
    '/services/dentistry',
    '/services/dentistry/aesthetic',
    '/services/dentistry/braces',
    '/services/dentistry/cadcam',
    '/services/dentistry/caries',
    '/services/dentistry/constructions',
    '/services/dentistry/consultation',
    '/services/dentistry/ct',
    '/services/dentistry/deposits',
    '/services/dentistry/emergency',
    '/services/dentistry/extraction',
    '/services/dentistry/fixed-appliances',
    '/services/dentistry/general-diagnostics',
    '/services/dentistry/hygiene',
    '/services/dentistry/implantation',
    '/services/dentistry/orthodontic-maintenance',
    '/services/dentistry/orthodontics',
    '/services/dentistry/pediatric-dentistry',
    '/services/dentistry/periodontics',
    '/services/dentistry/plastic',
    '/services/dentistry/prosthetics',
    '/services/dentistry/prosthodontics',
    '/services/dentistry/removable-appliances',
    '/services/dentistry/strengthening',
    '/services/dentistry/surgery',
    '/services/dentistry/therapeutic',
    '/services/dentistry/xray',
    '/services/dentistry/xray-diagnostics',
    '/services/dermatology',
    '/services/dietetics',
    '/services/elgos-therapy',
    '/services/endocrinology',
    '/services/endoscopy',
    '/services/family-psychology',
    '/services/functional-diagnostics',
    '/services/gastroenterology',
    '/services/gnathology',
    '/services/gonkongskiy-gripp',
    '/services/hardware-diagnostics',
    '/services/hilt-laser',
    '/services/implantation',
    '/services/lab-tests',
    '/services/lab-tests/calculator',
    '/services/laser-cosmetology',
    '/services/lymph-e-massage',
    '/services/mammology',
    '/services/massage',
    '/services/neurology',
    '/services/ophthalmology',
    '/services/osteopathy',
    '/services/otolaryngology',
    '/services/pediatrics',
    '/services/physiotherapy',
    '/services/pregnancy-screening',
    '/services/priem-ginekologa-odintsovo',
    '/services/proctology',
    '/services/profilakticheskiy-osmotr-ginekologa-odintsovo',
    '/services/psychology',
    '/services/psychotherapy',
    '/services/rentgenology',
    '/services/shockwave-therapy',
    '/services/sis-magnetotherapy',
    '/services/surdology',
    '/services/surgery',
    '/services/tekar-therapy',
    '/services/therapy',
    '/services/traumatology',
    '/services/ultrasound',
    '/services/urology',
    '/services/vacuum-massage',
    '/services/vedenie-beremennosti-odintsovo',
    '/services/xray',
  ];

  const staticUserPages: MetadataRoute.Sitemap = staticUserPaths.map((p) => {
    if (p === '/') return make('/', 'daily', 1.0);
    if (p === '/services' || p === '/doctors') return make(p, 'weekly', 0.9);
    if (p === '/contacts' || p === '/appointments' || p === '/promo' || p === '/blog') return make(p, 'weekly', 0.8);
    if (p === '/schedule') return make(p, 'daily', 0.7);
    if (p.startsWith('/ginekolog-v-odintsovo')) return make(p, 'weekly', 0.9);
    if (p.startsWith('/blog/')) return make(p, 'monthly', 0.8);
    return make(p, 'monthly', 0.6);
  });
  
  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = staticUserPages;

  // Динамические страницы врачей
  const doctorPages: MetadataRoute.Sitemap = doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Динамические страницы направлений стоматологии (видит пользователь)
  const implantologyDirectionPages: MetadataRoute.Sitemap = IMPLANTOLOGY_DIRECTION_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/dentistry/implantology/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const orthodonticsDirectionPages: MetadataRoute.Sitemap = ORTHO_DIRECTION_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/dentistry/orthodontics/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...doctorPages,
    ...promoPages,
    ...implantologyDirectionPages,
    ...orthodonticsDirectionPages,
  ];
}

