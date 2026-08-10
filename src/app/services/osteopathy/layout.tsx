import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Остеопат в Одинцово — приём взрослых и детей | Альтамед-С",
  description: "Приём врача-остеопата в Одинцово: осмотр, индивидуальный подбор ручных техник, отдельный маршрут для детей. Запись в Альтамед-С.",
  alternates: { canonical: "https://altamed-c.ru/services/osteopathy" },
  openGraph: {
    title: "Остеопат в Одинцово — приём взрослых и детей | Альтамед-С",
    description: "Как проходит приём остеопата, как подготовиться и когда сначала нужен профильный врач.",
    url: "https://altamed-c.ru/services/osteopathy",
    siteName: "Альтамед-С",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "https://altamed-c.ru/images/yslugi/Osteopathy.webp", alt: "Приём остеопата" }],
  },
};

export default function OsteopathyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
