import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор анализов — поиск по названию и коду | Альтамед-С",
  description: "Большой каталог лабораторных исследований Альтамед-С: поиск по названию и коду, категории, выбранный список и предварительный расчёт.",
  alternates: { canonical: "https://altamed-c.ru/services/lab-tests/calculator" },
};

export default function LabCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
