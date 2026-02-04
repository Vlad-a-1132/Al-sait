"use client";

import { useEffect, useState } from 'react';

export interface DoctorSchedule {
  Monday?: { start: string; end: string };
  Tuesday?: { start: string; end: string };
  Wednesday?: { start: string; end: string };
  Thursday?: { start: string; end: string };
  Friday?: { start: string; end: string };
  Saturday?: { start: string; end: string };
  Sunday?: { start: string; end: string };
}

export interface DoctorDetails {
  specialization?: string;
  category?: string;
  education?: string[];
  qualifications?: string[];
  accreditation?: Array<{
    number: string;
    date: string;
    specialty: string;
    institution: string;
  }>;
  experience?: string;
  mainDirections?: string[];
  methods?: string[];
  schedule?: DoctorSchedule;
  patientAge?: string;
  note?: string;
  certificates?: string[];
  achievements?: string[];
  /** Ссылка на документ об аккредитации (PDF и т.д.) для скачивания */
  accreditationDocument?: string;
}

interface DoctorPageClientProps {
  doctorName: string;
  defaultSchedule: DoctorSchedule;
  defaultDetails: DoctorDetails | null;
  children: React.ReactNode;
}

export function useDoctorData(doctorName: string, defaultSchedule: DoctorSchedule, defaultDetails: DoctorDetails | null) {
  // Просто возвращаем дефолтные данные без загрузки из localStorage
  return { schedule: defaultSchedule, details: defaultDetails };
}

export default function DoctorPageClient({ doctorName, defaultSchedule, defaultDetails, children }: DoctorPageClientProps) {
  const { schedule, details } = useDoctorData(doctorName, defaultSchedule, defaultDetails);
  
  // Передаем данные через контекст или просто возвращаем children
  // Но лучше использовать хук напрямую в дочерних компонентах
  return <>{children}</>;
}

