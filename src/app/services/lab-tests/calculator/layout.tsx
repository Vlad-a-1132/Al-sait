import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор анализов - Рассчитать стоимость анализов | Альтамед-СОдинцово',
  description: 'Калькулятор анализов - рассчитайте стоимость лабораторных анализов онлайн. Выберите нужные анализы и узнайте общую стоимость. Удобный инструмент для планирования обследования в медицинском центре Альтамед-С в Одинцово.',
  keywords: [
    'калькулятор анализов Одинцово',
    'рассчитать стоимость анализов Одинцово',
    'цена анализов Одинцово',
    'стоимость лабораторных анализов Одинцово',
    'калькулятор стоимости анализов',
    'Московская область калькулятор анализов',
    'Одинцовский район стоимость анализов'
  ],
  openGraph: {
    title: 'Калькулятор анализов - Рассчитать стоимость анализов | Альтамед-с',
    description: 'Калькулятор анализов - рассчитайте стоимость лабораторных анализов онлайн. Выберите нужные анализы и узнайте общую стоимость.',
    url: 'https://altamed-c.ru/services/lab-tests/calculator',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/lab-tests/calculator',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

