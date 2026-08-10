import PediatricOsteopathyPageClient from "./PediatricOsteopathyPageClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Можно ли записать новорождённого?", acceptedAnswer: { "@type": "Answer", text: "Да, в клинике принимают детей с рождения. Формат консультации врач определяет после педиатрической оценки и осмотра." } },
    { "@type": "Question", name: "Родитель присутствует на приёме?", acceptedAnswer: { "@type": "Answer", text: "Да. Родитель находится рядом, помогает ребёнку адаптироваться и участвует в беседе с врачом." } },
    { "@type": "Question", name: "Что взять с собой?", acceptedAnswer: { "@type": "Answer", text: "Возьмите выписки, результаты уже выполненных обследований, заключения врачей и список лекарств." } },
    { "@type": "Question", name: "Сколько длится консультация?", acceptedAnswer: { "@type": "Answer", text: "Для детей от 0 до 14 лет доступны форматы 30 и 60 минут. Продолжительность уточняется при записи." } },
  ],
};

export default function PediatricOsteopathyPage() {
  return (
    <>
      <PediatricOsteopathyPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
