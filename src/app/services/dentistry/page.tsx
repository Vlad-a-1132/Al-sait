"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AppointmentForm from '@/components/AppointmentForm';

type Service = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  category?: string;
  hasSubmenu?: boolean;
};

export default function DentistryPage() {
  // Стоматологические услуги для блока "Основные услуги стоматологических клиник"
  const dentistryServices = ['implantation', 'caries-treatment', 'dentistry-consultation', 'dentistry-pediatric', 'dentistry-surgery', 'dentistry-prosthodontist', 'dentistry-orthodontist', 'periodontics', 'dentistry-hygiene', 'airflow-prophylaxis-master', 'dentistry-extraction', 'dentistry-emergency', 'dentistry-plastic', 'dentistry-aesthetic', 'dentistry-prosthetics', 'dentistry-cadcam', 'dentistry-constructions', 'dentistry-deposits', 'dentistry-braces', 'dentistry-removable-appliances', 'dentistry-fixed-appliances', 'dentistry-orthodontic-maintenance', 'dentistry-strengthening', 'dentistry-xray', 'dentistry-ct'];

  const medicalServices: Service[] = [
    {
      id: 'implantation',
      title: 'Имплантация',
      description: 'Имплантация зубов в Одинцово',
    },
    {
      id: 'caries-treatment',
      title: 'Лечение кариеса',
      description: 'Современное лечение кариеса и его осложнений',
    },
    {
      id: 'dentistry-consultation',
      title: 'Консультация стоматолога',
      description: 'Прием и консультация врача-стоматолога в Одинцово',
    },
    {
      id: 'dentistry-pediatric',
      title: 'Детский стоматолог',
      description: 'Лечение зубов у детей в Одинцово',
    },
    {
      id: 'dentistry-surgery',
      title: 'Стоматолог-хирург',
      description: 'Удаление зубов, имплантация, челюстно-лицевая хирургия',
    },
    {
      id: 'dentistry-prosthodontist',
      title: 'Стоматолог-ортопед',
      description: 'Протезирование зубов, коронки, виниры в Одинцово',
    },
    {
      id: 'dentistry-orthodontist',
      title: 'Стоматолог-ортодонт',
      description: 'Исправление прикуса, брекеты, элайнеры в Одинцово',
    },
    {
      id: 'periodontics',
      title: 'Пародонтолог',
      description: 'Лечение заболеваний пародонта и десен',
    },
    {
      id: 'dentistry-hygiene',
      title: 'Гигиена полости рта',
      description: 'Профессиональная чистка зубов в Одинцово',
    },
    {
      id: 'airflow-prophylaxis-master',
      title: 'AIRFLOW Prophylaxis Master',
      description: 'Профессиональная гигиена по протоколу GBT',
    },
    {
      id: 'dentistry-extraction',
      title: 'Удаление зубов',
      description: 'Простое и сложное удаление зубов в Одинцово',
    },
    {
      id: 'dentistry-emergency',
      title: 'Экстренная хирургия',
      description: 'Экстренная и гнойная хирургия в Одинцово',
    },
    {
      id: 'dentistry-plastic',
      title: 'Пластическая хирургия',
      description: 'Пластика мягких тканей в Одинцово',
    },
    {
      id: 'dentistry-aesthetic',
      title: 'Эстетическая стоматология',
      description: 'Отбеливание и эстетика зубов в Одинцово',
    },
    {
      id: 'dentistry-prosthetics',
      title: 'Протезирование зубов',
      description: 'Протезирование на имплантатах, коронки, протезы в Одинцово',
    },
    {
      id: 'dentistry-cadcam',
      title: 'CAD/CAM-технологии',
      description: 'Керамические вкладки, виниры, коронки CAD/CAM в Одинцово',
    },
    {
      id: 'dentistry-constructions',
      title: 'Стоматологические конструкции',
      description: 'Изготовление и ремонт протезов, коронок в Одинцово',
    },
    {
      id: 'dentistry-deposits',
      title: 'Удаление зубных отложений',
      description: 'Снятие налета и камня в Одинцово',
    },
    {
      id: 'dentistry-braces',
      title: 'Брекет-системы',
      description: 'Металлические, керамические, сапфировые брекеты в Одинцово',
    },
    {
      id: 'dentistry-removable-appliances',
      title: 'Съемные аппараты',
      description: 'Элайнеры, каппы для исправления прикуса в Одинцово',
    },
    {
      id: 'dentistry-fixed-appliances',
      title: 'Несъемные аппараты',
      description: 'Ретейнеры, аппарат Forsus в Одинцово',
    },
    {
      id: 'dentistry-orthodontic-maintenance',
      title: 'Обслуживание ортодонтических аппаратов',
      description: 'Ремонт брекетов, замена дуг, лигатур в Одинцово',
    },
    {
      id: 'dentistry-strengthening',
      title: 'Укрепление тканей зуба',
      description: 'Фторирование и защита эмали в Одинцово',
    },
    {
      id: 'dentistry-xray',
      title: 'Рентгенология',
      description: 'Рентген-диагностика в стоматологии',
    },
    {
      id: 'dentistry-ct',
      title: 'КТ',
      description: 'Компьютерная томография челюстно-лицевой области',
    },
  ];

  const dentistryData = dentistryServices
    .map(id => medicalServices.find(service => service.id === id))
    .filter((service): service is Service => service !== undefined);
  

  // Add JSON-LD structured data
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Стоматология Альтамед-СОдинцово",
      "description": "Профессиональная стоматология в Одинцово. Лечение кариеса, имплантация зубов, протезирование, отбеливание, детская стоматология. Современное оборудование, опытные врачи.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Одинцово",
        "addressRegion": "Московская область",
        "streetAddress": "бульвар Маршала Крылова, д.23, пом.I",
        "postalCode": "143005"
      },
      "telephone": "+7 (495) 255-44-50",
      "url": "https://altamed-c.ru/services/dentistry",
      "priceRange": "$$",
      "medicalSpecialty": [
        "Терапевтическая стоматология",
        "Хирургическая стоматология",
        "Ортопедическая стоматология",
        "Ортодонтия",
        "Детская стоматология",
        "Пародонтология",
        "Имплантация зубов"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Одинцово"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'dentistry-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('dentistry-jsonld');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-full bg-white">

      {/* SEO Hero Section */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Стоматология в Одинцово — профессиональное лечение зубов в клинике «Альтамед-с»
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6">
              Современная стоматология в Одинцово с полным спектром услуг: лечение кариеса, имплантация зубов, протезирование, ортодонтия, детская стоматология, пародонтология. Опытные врачи, современное оборудование, доступные цены.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white px-4 py-2 rounded-full shadow-md">✓ Лечение без боли</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-md">✓ Современное оборудование</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-md">✓ Опытные врачи</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-md">✓ Доступные цены</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Стоматологические услуги в Одинцово — полный спектр услуг для здоровья зубов
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Клиника «Альтамед-с» в Одинцово предлагает широкий спектр стоматологических услуг для взрослых и детей. 
              Наша стоматология в Одинцово оснащена современным оборудованием и использует передовые методы лечения. 
              Мы специализируемся на терапевтической стоматологии, хирургии, протезировании, имплантации, ортодонтии и детской стоматологии.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              В стоматологии Одинцово мы применяем безболезненные методы лечения с использованием современной анестезии. 
              Наши врачи регулярно повышают квалификацию и используют только проверенные материалы мировых производителей. 
              Лечение зубов в Одинцово в нашей клинике — это комфорт, качество и доступные цены.
            </p>
          </div>
        </div>
      </section>

      {/* Блоки категорий услуг */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Основные услуги стоматологических клиник
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {dentistryData.map((service) => (
              service.id === 'dentistry-consultation' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/consultation"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/dc792999-799a-442d-b88d-d1e7eadaae11 1.webp"
                    alt="Консультация стоматолога"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
              ) : service.id === 'caries-treatment' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/caries"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5855rne17bddh7ks55a0ze_1764334299_img_1.webp"
                    alt="Лечение кариеса"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
              ) : service.id === 'implantation' ? (
            <Link 
                  key={service.id}
                  href="/services/implantation"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/yslugi/implant.webp"
                    alt="Имплантация"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400	group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
              ) : service.id === 'periodontics' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/periodontics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/image (1) 2.webp"
                    alt="Пародонтология"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              ) : service.id === 'dentistry-hygiene' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/hygiene"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp"
                    alt="Гигиена полости рта"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : service.id === 'airflow-prophylaxis-master' ? (
                <Link
                  key={service.id}
                  href="/services/airflow-prophylaxis-master"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden relative"
                >
                  <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-md z-10 animate-pulse">
                    NEW
                  </span>
                  <img
                    src="/images/yslugi/air flow.webp"
                    alt="AIRFLOW Prophylaxis Master"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : service.id === 'dentistry-aesthetic' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/aesthetic"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/stad.webp"
                    alt="Эстетическая стоматология"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'dentistry-deposits' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/deposits"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5h4ze2ek2vjpgzt0wnmcvh_1764343713_img_0.webp"
                    alt="Удаление зубных отложений"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              ) : service.id === 'dentistry-strengthening' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/strengthening"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/ftorirovanie2.jpg"
                    alt="Укрепление тканей зуба"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : service.id === 'dentistry-surgery' ? (
            <Link 
                  key={service.id}
              href="/services/dentistry/surgery"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/stom surgeon.webp"
                    alt="Стоматолог-хирург"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'dentistry-extraction' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/extraction"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/zeb.webp"
                    alt="Удаление зубов"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              ) : service.id === 'dentistry-emergency' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/emergency"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/fdfs.webp"
                    alt="Экстренная хирургия"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : service.id === 'dentistry-plastic' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/plastic"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/fdfs.webp"
                    alt="Пластическая хирургия"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'dentistry-prosthodontist' ? (
                <Link
                  key={service.id}
              href="/services/dentistry/prosthodontics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb59j9wbe6ma7c4wg6n4yecp_1764335787_img_0.webp"
                    alt="Стоматолог-ортопед"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'dentistry-prosthetics' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/prosthetics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp"
                    alt="Протезирование зубов"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              ) : service.id === 'dentistry-cadcam' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/cadcam"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/cad.webp"
                    alt="CAD/CAM-технологии"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : service.id === 'dentistry-constructions' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/constructions"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp"
                    alt="Стоматологические конструкции"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'dentistry-orthodontist' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/orthodontics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp"
                    alt="Стоматолог-ортодонт"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              ) : service.id === 'dentistry-braces' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/braces"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp"
                    alt="Брекет-системы"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : service.id === 'dentistry-removable-appliances' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/removable-appliances"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5hmq28fn0stdqj9ta6kefj_1764344227_img_0.webp"
                    alt="Съемные аппараты"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'dentistry-fixed-appliances' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/fixed-appliances"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5hy6cmevwbv12bpx0npyvx_1764344538_img_1.webp"
                    alt="Несъемные аппараты"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              ) : service.id === 'dentistry-orthodontic-maintenance' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/orthodontic-maintenance"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp"
                    alt="Обслуживание ортодонтических аппаратов"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : service.id === 'dentistry-pediatric' ? (
            <Link 
                  key={service.id}
                  href="/services/dentistry/pediatric-dentistry"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp"
                    alt="Детский стоматолог"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'dentistry-xray' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/xray-diagnostics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/Rentgenografiya.webp"
                    alt="Рентгенология"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              ) : service.id === 'dentistry-ct' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/ct"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/kt stomatologu.webp"
                    alt="КТ"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
              </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
              ) : null
            ))}
          </div>
        </div>
      </section>

      {/* Почему «Альтамед-С»? */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему «Альтамед-С»?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Современное оборудование</h3>
                <p className="text-gray-600 text-sm">Лучшие технологии для точной диагностики и комфортного лечения</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Опытные врачи</h3>
                <p className="text-gray-600 text-sm">Специалисты с многолетним опытом и регулярным повышением квалификации</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Безболезненное лечение</h3>
                <p className="text-gray-600 text-sm">Современная анестезия обеспечивает комфорт во время лечения</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Доступные цены</h3>
                <p className="text-gray-600 text-sm">Прозрачное ценообразование и оптимальное соотношение цены и качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему важно лечить зубы своевременно */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Почему важно лечить зубы своевременно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">1</span>
                  Предотвращение осложнений
                </h3>
                <p className="text-gray-600">
                  Запущенный кариес может перерасти в пульпит и периодонтит, требующие более сложного и дорогостоящего лечения.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">2</span>
                  Сохранение зубов
                </h3>
                <p className="text-gray-600">
                  Своевременное лечение позволяет сохранить собственные зубы и избежать необходимости протезирования или имплантации.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">3</span>
                  Экономия средств
                </h3>
                <p className="text-gray-600">
                  Лечение на ранней стадии обходится значительно дешевле, чем устранение осложнений и восстановление утраченных зубов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">4</span>
                  Здоровье организма
                </h3>
                <p className="text-gray-600">
                  Больные зубы влияют на работу органов ЖКТ, сердечно-сосудистой системы и могут стать источником хронических инфекций.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Какие симптомы требуют обращения к стоматологу */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Какие симптомы требуют обращения к стоматологу
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "😣", title: "Зубная боль", desc: "Любой дискомфорт в зубах или деснах" },
                { icon: "🦷", title: "Кровоточивость десен", desc: "Особенно во время чистки зубов" },
                { icon: "🌑", title: "Потемнение эмали", desc: "Появление пятен или кариозных полостей" },
                { icon: "🤢", title: "Неприятный запах", desc: "Стойкий запах изо рта" },
                { icon: "🦷", title: "Подвижность зубов", desc: "Расшатывание зубов" },
                { icon: "😬", title: "Повышенная чувствительность", desc: "Реакция на холодное, горячее, кислое" },
                { icon: "💔", title: "Сколы и трещины", desc: "Механические повреждения зубов" },
                { icon: "😰", title: "Отек десен", desc: "Припухлость и воспаление" },
                { icon: "😷", title: "Язвочки во рту", desc: "Поражения слизистой оболочки" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Как проходит прием у стоматолога в Одинцово */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Как проходит прием у стоматолога в «Альтамед-С»
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Запись на прием</h3>
                <p className="text-sm text-gray-600">Вы выбираете удобное время онлайн или по телефону</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Осмотр и диагностика</h3>
                <p className="text-sm text-gray-600">Врач проводит осмотр, делает снимки при необходимости</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Составление плана</h3>
                <p className="text-sm text-gray-600">Доктор объясняет диагноз и предлагает варианты лечения</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Лечение</h3>
                <p className="text-sm text-gray-600">Проводится качественное и безболезненное лечение</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Как часто нужно посещать стоматолога?",
                  a: "Рекомендуется посещать стоматолога для профилактического осмотра и профессиональной чистки дважды в год. Это позволяет выявить проблемы на ранней стадии и предотвратить развитие серьезных заболеваний."
                },
                {
                  q: "Больно ли лечить зубы с анестезией?",
                  a: "Современная местная анестезия полностью исключает болевые ощущения во время лечения. Пациент чувствует только легкое давление от инструментов. При необходимости возможна седация для особо тревожных пациентов."
                },
                {
                  q: "Сколько прослужат имплантаты?",
                  a: "При правильном уходе и соблюдении рекомендаций врача дентальные имплантаты могут служить всю жизнь. Их долговечность значительно выше, чем у мостовидных протезов или съемных конструкций."
                },
                {
                  q: "Можно ли лечить зубы детям без наркоза?",
                  a: "В большинстве случаев для детской стоматологии достаточно местной анестезии. Наркоз применяется только при сложных случаях, для гиперактивных детей или при большом объеме работы. Мы используем безопасные препараты для детей."
                },
                {
                  q: "Как долго служит коронка на зуб?",
                  a: "Срок службы коронки зависит от материала и качества изготовления. Металлокерамические коронки служат 10-15 лет, циркониевые - 15-20 лет и более. При правильном уходе коронка может прослужить дольше."
                },
                {
                  q: "Что делать при острой зубной боли?",
                  a: "При острой боли нужно как можно скорее обратиться к стоматологу. До визита можно принять обезболивающее (ибупрофен, парацетамол). Не прикладывайте тепло к больному месту, это может усугубить воспаление."
                },
                {
                  q: "Можно ли отбелить чувствительные зубы?",
                  a: "Да, существует несколько методов отбеливания для чувствительных зубов, включая кабинетное отбеливание с применением специальных препаратов, домашнее отбеливание под контролем врача или альтернативные методы."
                },
                {
                  q: "Нужно ли удалять зубы мудрости?",
                  a: "Не всегда. Зубы мудрости удаляют только при наличии показаний: неправильном прорезывании, недостатке места, воспалительных процессах, риске повреждения соседних зубов. Решение принимается врачом после осмотра и рентгена."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4">
                    <h3 className="font-semibold text-gray-800">{faq.q}</h3>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Основные направления стоматологии */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Основные направления стоматологии в клинике «Альтамед-с» Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Терапевтическая стоматология</h3>
              <p className="text-gray-700 mb-4">
                Лечение кариеса, пульпита и периодонтита в Одинцово. Современные методы эндодонтического лечения с использованием микроскопа и современных материалов.
              </p>
              <Link href="/services/dentistry/therapeutic" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Подробнее →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Хирургическая стоматология</h3>
              <p className="text-gray-700 mb-4">
                Удаление зубов любой сложности, включая зубы мудрости, в Одинцово. Лечение воспалений, кист, резекция верхушки корня.
              </p>
              <Link href="/services/dentistry/surgery" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Подробнее →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Имплантация зубов</h3>
              <p className="text-gray-700 mb-4">
                Восстановление утраченных зубов с помощью дентальных имплантатов в Одинцово. Современные системы имплантации, гарантия качества.
              </p>
              <Link href="/services/dentistry/implantation" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Подробнее →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ортопедическая стоматология</h3>
              <p className="text-gray-700 mb-4">
                Протезирование зубов в Одинцово: коронки, мосты, виниры, съемные протезы. Восстановление жевательной функции и эстетики улыбки.
              </p>
              <Link href="/services/dentistry/prosthodontics" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Подробнее →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ортодонтия</h3>
              <p className="text-gray-700 mb-4">
                Исправление прикуса в Одинцово с помощью брекет-систем и элайнеров. Лечение для детей и взрослых, современные методы ортодонтии.
              </p>
              <Link href="/services/dentistry/orthodontics" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Подробнее →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Детская стоматология</h3>
              <p className="text-gray-700 mb-4">
                Лечение зубов у детей в Одинцово. Безболезненное лечение, адаптация, профилактика. Доброжелательный подход к маленьким пациентам.
              </p>
              <Link href="/services/dentistry/pediatric-dentistry" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Подробнее →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Преимущества стоматологии в Одинцово */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Преимущества стоматологии «Альтамед-с» в Одинцово
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Стоматология в Одинцово в клинике «Альтамед-с» предлагает комплексный подход к лечению зубов. 
              Наша стоматология оснащена современным диагностическим оборудованием, включая цифровые рентген-аппараты, 
              компьютерную томографию и интраоральные камеры для точной диагностики.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Лечение зубов в Одинцово проводится с использованием современных материалов ведущих мировых производителей: 
              Германии, США, Швейцарии. Наши врачи регулярно проходят обучение и повышение квалификации, 
              участвуют в международных конференциях и семинарах по стоматологии.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Стоматология Одинцово в «Альтамед-с» — это индивидуальный подход к каждому пациенту, 
              составление детального плана лечения, использование безболезненных методов анестезии и 
              гарантия качества выполненных работ. Мы заботимся о комфорте пациентов и создаем 
              приятную атмосферу в клинике.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Современное оборудование</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Цифровая рентгенография и компьютерная томография
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Микроскопы для эндодонтического лечения
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Аппараты для профессиональной гигиены
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Современные системы для отбеливания
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Качество и гарантии</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гарантия на все виды работ
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование сертифицированных материалов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Соблюдение всех стандартов стерилизации
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярный контроль качества
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Запись на прием */}
      <AppointmentForm />
    </div>
  );
}
