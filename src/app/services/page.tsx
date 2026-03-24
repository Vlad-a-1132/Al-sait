"use client";

import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';
import DentalPromoBanner from '@/components/DentalPromoBanner';

export default function ServicesPage() {
  
  // Все медицинские услуги из меню
  const medicalServices = [
    {
      id: 'allergology',
      title: 'Аллергология',
      description: 'Диагностика и лечение аллергических заболеваний',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'gastroenterology',
      title: 'Гастроэнтерология',
      description: 'Лечение заболеваний желудочно-кишечного тракта',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'dietetics',
      title: 'Диетолог',
      description: 'Консультации по питанию, снижение веса и лечебные диеты в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'gynecology',
      title: 'Гинекология',
      description: 'Женское здоровье и репродуктивная медицина',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dermatology',
      title: 'Дерматология',
      description: 'Лечение заболеваний кожи, волос и ногтей',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'cardiology',
      title: 'Кардиология',
      description: 'Диагностика и лечение заболеваний сердца',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'laser-cosmetology',
      title: 'Лазерная косметология',
      description: 'Современные методы омоложения и коррекции',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'rentgenology',
      title: 'Рентгенология',
      description: 'Цифровая рентгенодиагностика',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.866 0-7 1.343-7 3v8c0 1.657 3.134 3 7 3s7-1.343 7-3v-8c0-1.657-3.134-3-7-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11V8c0-1.657 3.134-3 7-3s7 1.343 7 3v3" />
        </svg>
      ),
      category: 'diagnostics',
      hasSubmenu: true
    },
    {
      id: 'caries-treatment',
      title: 'Лечение кариеса',
      description: 'Современное лечение кариеса и его осложнений',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14m6-14v14M5 9h14M5 15h14" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'implantation',
      title: 'Имплантация',
      description: 'Имплантация зубов в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'periodontics',
      title: 'Пародонтолог',
      description: 'Лечение заболеваний пародонта и десен',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9s4 4 8 4 8-4 8-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20h6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c-1.657 0-3-1.79-3-4s1.343-4 3-4 3 1.79 3 4-1.343 4-3 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-xray',
      title: 'Рентгенология',
      description: 'Рентген-диагностика в стоматологии',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.866 0-7 1.343-7 3v8c0 1.657 3.134 3 7 3s7-1.343 7-3v-8c0-1.657-3.134-3-7-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11V8c0-1.657 3.134-3 7-3s7 1.343 7 3v3" />
        </svg>
      ),
      category: 'diagnostics',
      hasSubmenu: true
    },
    {
      id: 'dentistry-ct',
      title: 'КТ',
      description: 'Компьютерная томография челюстно-лицевой области',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      category: 'diagnostics',
      hasSubmenu: true
    },
    {
      id: 'dentistry-consultation',
      title: 'Консультация стоматолога',
      description: 'Прием и консультация врача-стоматолога в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-hygiene',
      title: 'Гигиена полости рта',
      description: 'Профессиональная чистка зубов в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'airflow-prophylaxis-master',
      title: 'AIRFLOW Prophylaxis Master',
      description: 'Профессиональная гигиена по протоколу GBT',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'dentistry-aesthetic',
      title: 'Эстетическая стоматология',
      description: 'Отбеливание и эстетика зубов в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-deposits',
      title: 'Удаление зубных отложений',
      description: 'Снятие налета и камня в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-strengthening',
      title: 'Укрепление тканей зуба',
      description: 'Фторирование и защита эмали в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-surgery',
      title: 'Стоматолог-хирург',
      description: 'Удаление зубов, имплантация, челюстно-лицевая хирургия',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-extraction',
      title: 'Удаление зубов',
      description: 'Простое и сложное удаление зубов в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-emergency',
      title: 'Экстренная хирургия',
      description: 'Экстренная и гнойная хирургия в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-plastic',
      title: 'Пластическая хирургия',
      description: 'Пластика мягких тканей в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-prosthodontist',
      title: 'Стоматолог-ортопед',
      description: 'Протезирование зубов, коронки, виниры в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-prosthetics',
      title: 'Протезирование зубов',
      description: 'Протезирование на имплантатах, коронки, протезы в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-cadcam',
      title: 'CAD/CAM-технологии',
      description: 'Керамические вкладки, виниры, коронки CAD/CAM в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-constructions',
      title: 'Стоматологические конструкции',
      description: 'Изготовление и ремонт протезов, коронок в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-orthodontist',
      title: 'Стоматолог-ортодонт',
      description: 'Исправление прикуса, брекеты, элайнеры в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-braces',
      title: 'Брекет-системы',
      description: 'Металлические, керамические, сапфировые брекеты в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-removable-appliances',
      title: 'Съемные аппараты',
      description: 'Элайнеры, каппы для исправления прикуса в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-fixed-appliances',
      title: 'Несъемные аппараты',
      description: 'Ретейнеры, аппарат Forsus в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-orthodontic-maintenance',
      title: 'Обслуживание ортодонтических аппаратов',
      description: 'Ремонт брекетов, замена дуг, лигатур в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-pediatric',
      title: 'Детский стоматолог',
      description: 'Лечение зубов у детей в Одинцово',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'gnathology',
      title: 'Гнатология',
      description: 'Гнатологическая диагностика и лечение ВНЧС',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'mammology',
      title: 'Маммология',
      description: 'Диагностика и лечение заболеваний молочных желез',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'neurology',
      title: 'Неврология',
      description: 'Лечение заболеваний нервной системы',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'otolaryngology',
      title: 'Отоларингология',
      description: 'Лечение заболеваний уха, горла и носа',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5-5 5-5h5v5z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'ophthalmology',
      title: 'Офтальмология',
      description: 'Диагностика и лечение заболеваний глаз',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'pediatrics',
      title: 'Педиатрия',
      description: 'Медицинская помощь детям',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'proctology',
      title: 'Проктология',
      description: 'Лечение заболеваний прямой кишки',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'surdology',
      title: 'Сурдология',
      description: 'Диагностика и лечение нарушений слуха',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5-5 5-5h5v5z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'dentistry',
      title: 'Стоматология',
      description: 'Лечение и профилактика стоматологических заболеваний',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'therapy',
      title: 'Терапия',
      description: 'Общая терапия и внутренние болезни',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'traumatology',
      title: 'Травматология',
      description: 'Лечение травм и повреждений опорно-двигательного аппарата',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'urology',
      title: 'Урология',
      description: 'Лечение заболеваний мочеполовой системы',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'surgery',
      title: 'Хирургия',
      description: 'Хирургические вмешательства',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v6" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'endocrinology',
      title: 'Эндокринология',
      description: 'Лечение заболеваний эндокринной системы',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'gonkongskiy-gripp',
      title: 'Гонконгский грипп',
      description: 'Диагностика и лечение гонконгского гриппа H3N2',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    // Диагностические услуги
    // Дополнительные услуги
    {
      id: 'psychology',
      title: 'Психология',
      description: 'Психологическая помощь',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'psychotherapy',
      title: 'Психотерапия',
      description: 'Психотерапевтическое лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'carboxytherapy',
      title: 'Карбокситерапия',
      description: 'Лечение углекислым газом',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'osteopathy',
      title: 'Остеопатия',
      description: 'Остеопатическое лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: true
    },
    {
      id: 'physiotherapy',
      title: 'Физиотерапия',
      description: 'Физиотерапевтическое лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: true
    },
    {
      id: 'family-psychology',
      title: 'Семейная психология',
      description: 'Семейное психологическое консультирование',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'massage',
      title: 'Массаж',
      description: 'Лечебный массаж',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'vacuum-massage',
      title: 'Вакуумный массаж',
      description: 'Вакуумно-массажная терапия',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'bioresonance',
      title: 'Биорезонансная терапия',
      description: 'Биорезонансное лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'shockwave-therapy',
      title: 'Ударно-волновая терапия',
      description: 'УВТ лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: true
    }
  ];

  // Первый контейнер - основные услуги
  const firstContainerServices = [
    'allergology', 'gastroenterology', 'dietetics', 'gynecology', 'dermatology',
    'cardiology', 'laser-cosmetology', 'rentgenology', 'gnathology', 'mammology', 'neurology',
    'otolaryngology', 'ophthalmology', 'pediatrics',
    'proctology', 'surdology', 'therapy', 'traumatology',
    'urology', 'surgery', 'endocrinology', 'gonkongskiy-gripp'
  ];

  // Реабилитация - отдельная категория
  const rehabilitationServices = [
    'psychology', 'psychotherapy', 'carboxytherapy', 'osteopathy',
    'physiotherapy', 'family-psychology', 'massage', 'vacuum-massage',
    'bioresonance', 'shockwave-therapy'
  ];

  // Стоматология - отдельная категория
  const dentistryServices = ['implantation', 'caries-treatment', 'dentistry-consultation', 'dentistry-pediatric', 'dentistry-surgery', 'dentistry-prosthodontist', 'dentistry-orthodontist', 'periodontics', 'dentistry-hygiene', 'airflow-prophylaxis-master', 'dentistry-extraction', 'dentistry-emergency', 'dentistry-plastic', 'dentistry-aesthetic', 'dentistry-prosthetics', 'dentistry-cadcam', 'dentistry-constructions', 'dentistry-deposits', 'dentistry-braces', 'dentistry-removable-appliances', 'dentistry-fixed-appliances', 'dentistry-orthodontic-maintenance', 'dentistry-strengthening', 'dentistry-xray', 'dentistry-ct'];

  // Первый контейнер услуг
  const firstContainerData = medicalServices.filter(service => 
    firstContainerServices.includes(service.id)
  );

  // Реабилитация
  const rehabilitationData = medicalServices.filter(service => 
    rehabilitationServices.includes(service.id)
  );

  // Стоматология
  const dentistryData = dentistryServices.map(id => 
    medicalServices.find(service => service.id === id)
  ).filter((service): service is typeof medicalServices[0] => service !== undefined);

  // Второй контейнер - остальные услуги
  const secondContainerData = medicalServices.filter(service => 
    !firstContainerServices.includes(service.id) &&
    !rehabilitationServices.includes(service.id) &&
    !dentistryServices.includes(service.id) &&
    service.id !== 'dentistry'
  );

  return (
    <div className="flex flex-col min-h-full bg-white overflow-x-hidden">
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DentalPromoBanner />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {firstContainerData.map((service) => (
              service.id === 'allergology' ? (
                <Link key={service.id} href="/services/allergology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/allergoly.webp" 
                      alt="Аллергология" 
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
        ) : service.id === 'gastroenterology' ? (
                <Link key={service.id} href="/services/gastroenterology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Gastroenterology.webp" 
                      alt="Гастроэнтерология" 
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
                ) : service.id === 'dietetics' ? (
                <Link key={service.id} href="/services/dietetics" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img
                      src="/images/yslugi/Gastroenterology.webp"
                      alt="Диетолог"
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
                ) : service.id === 'gynecology' ? (
                <Link key={service.id} href="/ginekolog-v-odintsovo" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Gynecology.webp" 
                      alt="Гинекология" 
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
                ) : service.id === 'dermatology' ? (
                <Link key={service.id} href="/services/dermatology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Dermatology.webp" 
                      alt="Дерматология" 
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
                ) : service.id === 'cardiology' ? (
                <Link key={service.id} href="/services/cardiology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Cardiology.webp" 
                      alt="Кардиология" 
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
                ) : service.id === 'laser-cosmetology' ? (
                <Link key={service.id} href="/services/laser-cosmetology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/laser cosmetology 1.webp" 
                      alt="Лазерная косметология" 
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
                <Link key={service.id} href="/services/implantation" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'rentgenology' ? (
                <Link key={service.id} href="/services/rentgenology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/rentgen.webp" 
                      alt="Рентгенология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="hidden md:block text-xs text-gray-500 mt-1">
                        {service.description}
                      </p>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'gnathology' ? (
                <Link key={service.id} href="/services/gnathology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/gnatologia.webp" 
                      alt="Гнатология" 
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
                ) : service.id === 'mammology' ? (
                <Link key={service.id} href="/services/mammology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/mammalogy.webp" 
                      alt="Маммология" 
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
                ) : service.id === 'neurology' ? (
                <Link key={service.id} href="/services/neurology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/images allergoly/nevrolog.webp" 
                      alt="Неврология" 
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
              ) : service.id === 'otolaryngology' ? (
                <Link key={service.id} href="/services/otolaryngology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Otolaryngology.webp" 
                      alt="Отоларингология" 
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
                ) : service.id === 'ophthalmology' ? (
                <Link key={service.id} href="/services/ophthalmology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Ophthalmology.webp" 
                      alt="Офтальмология" 
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
                ) : service.id === 'pediatrics' ? (
                <Link key={service.id} href="/services/pediatrics" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Pediatrician.webp" 
                      alt="Педиатрия" 
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
                ) : service.id === 'proctology' ? (
                <Link key={service.id} href="/services/proctology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Proctology.webp" 
                      alt="Проктология" 
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
                ) : service.id === 'surdology' ? (
                <Link key={service.id} href="/services/surdology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Audiology.webp" 
                      alt="Сурдология" 
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
                ) : service.id === 'therapy' ? (
                <Link key={service.id} href="/services/therapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/terapiay 1.webp" 
                      alt="Терапия" 
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
                ) : service.id === 'traumatology' ? (
                <Link key={service.id} href="/services/traumatology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/travmatolog.webp" 
                      alt="Травматология" 
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
                ) : service.id === 'urology' ? (
                <Link key={service.id} href="/services/urology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/yrolog.webp" 
                      alt="Урология" 
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
                ) : service.id === 'surgery' ? (
                <Link key={service.id} href="/services/surgery" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/hirurg.webp" 
                      alt="Хирургия" 
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
                ) : service.id === 'endocrinology' ? (
                <Link key={service.id} href="/services/endocrinology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/endokrinjlog.webp" 
                      alt="Эндокринология" 
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
                ) : service.id === 'gonkongskiy-gripp' ? (
                <Link key={service.id} href="/services/gonkongskiy-gripp" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/h3n2.webp" 
                      alt="Гонконгский грипп" 
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
                ) : service.id === 'dentistry' ? (
                <Link key={service.id} href="/services/dentistry" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/yrolog.webp" 
                      alt="Стоматология" 
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
                ) : (
                <Link key={service.id} href={`/services/${service.id}`} className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <div className="w-16 md:w-20 h-full bg-white rounded-l-[20px] flex items-center justify-center">
                    <div className="group-hover:text-emerald-600 transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Акции */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Акции
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Кольпоскопия в подарок при первичном приёме акушера-гинеколога */}
            <Link href="/promo/promo-5" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/yslugi/Colposcopy.webp" 
                  alt="Кольпоскопия" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[100px] md:h-[118px] bg-emerald-500 flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">Кольпоскопия в подарок</h3>
                <div className="md:hidden">
                  <button className="bg-white text-emerald-500 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидка для пенсионеров 10% на все услуги кроме стоматологии */}
            <Link href="/promo/promo-3" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/yslugi/pensia 1.webp" 
                  alt="Скидка для пенсионеров" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[118px] bg-[#c49a68] flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">Скидка для пенсионеров 10%</h3>
                <div className="md:hidden">
                  <button className="bg-white text-[#c49a68] rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-[#c49a68]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидки на компьютерную томографию */}
            <Link href="/promo/promo-1" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/yslugi/KT.webp" 
                  alt="Компьютерная томография" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[118px] bg-[#69a0bd] flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">Скидки на КТ!</h3>
                <div className="md:hidden">
                  <button className="bg-white text-[#69a0bd] rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-[#69a0bd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидки на анализы */}
            <Link href="/promo/promo-4" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/slides/3-analizy.webp" 
                  alt="Скидки на анализы" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[118px] bg-orange-500 flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">СКИДКИ НА АНАЛИЗЫ</h3>
                <div className="md:hidden">
                  <button className="bg-white text-orange-500 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Диагностические услуги */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Диагностические услуги
          </h2>
          
          {/* Первый ряд - большие карточки с изображениями */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {/* Аппаратная диагностика */}
            <Link href="/services/hardware-diagnostics" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Hardware diagnostics.webp" 
                    alt="Аппаратная диагностика" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Аппаратная диагностика
                  </h3>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Лабораторные анализы */}
            <Link href="/services/lab-tests" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Laboratory tests.webp" 
                    alt="Лабораторные анализы" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Лабораторные анализы
                  </h3>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Скрининг при беременности */}
            <Link href="/services/pregnancy-screening" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/services/Screenshot_1835.png" 
                    alt="Скрининг при беременности" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Скрининг при беременности
                  </h3>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Второй ряд - маленькие карточки */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-4">
            {/* УЗИ */}
            <Link href="/services/ultrasound" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  УЗИ
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            

            {/* КТ */}
            <Link href="/services/ct" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  КТ
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Эндоскопия */}
            <Link href="/services/endoscopy" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Эндоскопия
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Рентген */}
            <Link href="/services/xray" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Рентген
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Функциональная диагностика */}
            <Link href="/services/functional-diagnostics" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Функциональная диагностика
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Стоматология */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Стоматология
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

      {/* Реабилитация */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Реабилитация
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {rehabilitationData.map((service) => (
              service.id === 'carboxytherapy' ? (
                <Link key={service.id} href="/services/carboxytherapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Carboxytherapy.webp" 
                    alt="Карбокситерапия" 
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
              ) : service.id === 'osteopathy' ? (
                <Link key={service.id} href="/services/osteopathy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Osteopathy.webp" 
                    alt="Остеопатия" 
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
              ) : service.id === 'physiotherapy' ? (
                <Link key={service.id} href="/services/physiotherapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/fizio.webp" 
                    alt="Физиотерапия" 
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
              ) : service.id === 'psychotherapy' ? (
                <Link key={service.id} href="/services/psychotherapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Психотерапия" 
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
              ) : service.id === 'psychology' ? (
                <Link key={service.id} href="/services/psychology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/famili.webp" 
                    alt="Психология" 
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
              ) : service.id === 'family-psychology' ? (
                <Link key={service.id} href="/services/family-psychology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/famili.webp" 
                    alt="Семейная психология" 
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
              ) : service.id === 'massage' ? (
                <Link key={service.id} href="/services/massage" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/massaj.webp" 
                    alt="Массаж" 
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
              ) : service.id === 'vacuum-massage' ? (
                <Link key={service.id} href="/services/vacuum-massage" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/vakum.webp" 
                    alt="Вакуумный массаж" 
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
              ) : service.id === 'bioresonance' ? (
                <Link key={service.id} href="/services/bioresonance" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Биорезонансная терапия" 
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
              ) : service.id === 'shockwave-therapy' ? (
                <Link key={service.id} href="/services/shockwave-therapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Ударно-волновая терапия" 
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
              ) : (
                <div
                  key={service.id}
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-2 md:p-4"
                >
                  <div className="flex items-center space-x-2 md:space-x-3 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                      <div className="group-hover:text-emerald-600 transition-colors duration-300 scale-75 md:scale-100">
                        {service.icon}
                      </div>
                      </div>
                      <div className="flex-1">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Additional physiotherapy procedures */}
      <section className="py-8 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Дополнительные процедуры физиотерапии
          </h2>
          
          {/* Мобильная версия */}
          <div className="md:hidden space-y-4">
            <Link href="/services/lymph-e-massage" className="bg-[#DAF2FF] rounded-[20px] p-4 h-[140px] flex relative overflow-hidden">
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-bold">Пневмомассажер Лимфа-Э</h3>
                <button className="bg-white text-black rounded-full px-6 py-2 w-fit text-sm">
                  Подробнее
                </button>
              </div>
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <Link href="/services/elgos-therapy" className="bg-[#FFD9E0] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Аппарат глубокой осцилляции «ЭЛГОС»</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/tekar-therapy" className="bg-[#FADFFF] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Текар-терапия</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/hilt-laser" className="bg-[#DBF0E9] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Высокоинтенсивный лазер HILT</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/sis-magnetotherapy" className="bg-[#FFF6C1] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Высокоинтенсивная магнитотерапия (SIS)</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
            </div>
          </div>
          
          {/* Десктопная версия */}
          <div className="hidden md:flex flex-col lg:flex-row gap-6 max-w-full mx-auto">
            {/* Левый большой блок */}
            <Link href="/services/lymph-e-massage" className="bg-[#DAF2FF] rounded-[20px] w-full lg:w-[593px] lg:max-w-[593px] h-[300px] md:h-[374px] flex flex-shrink-0 relative overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col justify-between z-10 w-full lg:w-[60%]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Пневмомассажер Лимфа-Э</h3>
                </div>
                
                <button className="bg-white text-black rounded-full px-8 py-2 w-fit">
                  Подробнее
                </button>
              </div>
              
              <div className="hidden lg:block absolute bottom-0 right-0 h-full w-[40%]">
                <Image 
                  src="/images/yslugi/Pneumatic massager Lymfa-E.webp" 
                  alt="Пневмомассажер Лимфа-Э" 
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            
            {/* Правая колонка с 4 блоками */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1 min-w-0 max-w-full">
              {/* Верхний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 1 */}
                <Link href="/services/elgos-therapy" className="bg-[#FFD9E0] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
                    <Image 
                      src="/images/yslugi/Deep oscillation d2evice.webp" 
                      alt="Аппарат глубокой осцилляции ЭЛГОС" 
                      width={120} 
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Аппарат глубокой осцилляции «ЭЛГОС»</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
                
                {/* Блок 2 */}
                <Link href="/services/tekar-therapy" className="bg-[#FADFFF] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image 
                      src="/images/yslugi/Tekar therapy.webp" 
                      alt="Текар-терапия" 
                      width={180} 
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Текар-терапия</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
              </div>
              
              {/* Нижний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 3 */}
                <Link href="/services/hilt-laser" className="bg-[#DBF0E9] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image 
                      src="/images/yslugi/High Intensity Laser HILT.webp" 
                      alt="Высокоинтенсивный лазер HILT" 
                      width={280} 
                      height={140}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1">
                      Высокоинтенсивный<br />лазер HILT
                    </h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
                
                {/* Блок 4 */}
                <Link href="/services/sis-magnetotherapy" className="bg-[#FFF6C1] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image
                      src="/images/yslugi/High Intensity Magnetic Therapy (SIS).webp" 
                      alt="Высокоинтенсивная магнитотерапия SIS" 
                      width={185} 
                      height={140}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">
                      Высокоинтенсивная магнитотерапия (SIS)
                    </h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Второй контейнер услуг */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {secondContainerData.map((service) => (
              service.id === 'urology' ? (
                <Link key={service.id} href="/services/urology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Урология" 
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
              ) : service.id === 'surgery' ? (
                <Link key={service.id} href="/services/surgery" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/hirurg.webp" 
                    alt="Хирургия" 
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
              ) : service.id === 'endocrinology' ? (
                <Link key={service.id} href="/services/endocrinology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/endokrinjlog.webp" 
                    alt="Эндокринология" 
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
              ) : service.id === 'gonkongskiy-gripp' ? (
                <Link key={service.id} href="/services/gonkongskiy-gripp" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/h3n2.webp" 
                    alt="Гонконгский грипп" 
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
              ) : (
                <div
                  key={service.id}
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-2 md:p-4"
                >
                  <div className="flex items-center space-x-2 md:space-x-3 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                      <div className="group-hover:text-emerald-600 transition-colors duration-300 scale-75 md:scale-100">
                        {service.icon}
                      </div>
                      </div>
                      <div className="flex-1">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
} 