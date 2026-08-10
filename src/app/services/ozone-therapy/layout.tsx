import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Озонотерапия в Одинцово — внутривенная инфузия | Альтамед-С",
  description: "Внутривенное капельное введение озонированного физиологического раствора в Одинцово по назначению врача. Подготовка, этапы и ограничения.",
  alternates: { canonical: "https://altamed-c.ru/services/ozone-therapy" },
  openGraph: {
    title: "Озонотерапия в Одинцово | Альтамед-С",
    description: "Подробно о внутривенном введении озонированного физиологического раствора, подготовке и ограничениях.",
    url: "https://altamed-c.ru/services/ozone-therapy",
    siteName: "Альтамед-С",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "https://altamed-c.ru/images/yslugi/ozone-therapy.webp", alt: "Внутривенная инфузия в клинике" }],
  },
};

export default function OzoneTherapyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
