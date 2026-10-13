import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор анализов — поиск по названию и коду | Альтамед-С",
  description: "Большой каталог лабораторных исследований Альтамед-С: поиск по названию и коду, категории, выбранный список и предварительный расчёт.",
  alternates: { canonical: "https://altamed-c.ru/services/lab-tests/calculator" },
  openGraph: { title: 'Калькулятор анализов в Одинцово', url: 'https://altamed-c.ru/services/lab-tests/calculator', images: ['https://altamed-c.ru/images/lab-seo/biochemistry.webp'] },
  twitter: { card: 'summary_large_image', title: 'Калькулятор анализов в Одинцово', images: ['https://altamed-c.ru/images/lab-seo/biochemistry.webp'] },
};

export default function LabCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
