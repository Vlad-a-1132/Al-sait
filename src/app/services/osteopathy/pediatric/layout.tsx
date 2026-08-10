import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Детский остеопат в Одинцово — приём детей 0–14 лет | Альтамед-С",
  description: "Детский остеопат в Одинцово: приём детей с рождения до 14 лет врачом-педиатром и остеопатом. Возрастные особенности, подготовка и онлайн-запись.",
  alternates: { canonical: "https://altamed-c.ru/services/osteopathy/pediatric" },
  openGraph: {
    title: "Детский остеопат в Одинцово | Альтамед-С",
    description: "Приём детей с рождения до 14 лет врачом-педиатром и остеопатом. Как проходит консультация и что взять родителям.",
    url: "https://altamed-c.ru/services/osteopathy/pediatric",
    siteName: "Альтамед-С",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "https://altamed-c.ru/images/yslugi/Pediatrician.webp", alt: "Приём детского врача" }],
  },
};

export default function PediatricOsteopathyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
