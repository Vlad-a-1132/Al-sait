"use client";

import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import { useDoctorData, DoctorSchedule, DoctorDetails } from "./DoctorPageClient";

interface Doctor {
  id: number;
  name: string;
  slug: string;
  specialization: string;
  experience?: number;
  photo: string;
  description: string;
}

interface DoctorPageContentProps {
  doctor: Doctor;
  doctorName: string;
  defaultSchedule: DoctorSchedule;
  defaultDetails: DoctorDetails | null;
  specialization: string;
}

export default function DoctorPageContent({ 
  doctor, 
  doctorName, 
  defaultSchedule, 
  defaultDetails, 
  specialization 
}: DoctorPageContentProps) {
  const { schedule, details: doctorDetails } = useDoctorData(doctorName, defaultSchedule, defaultDetails);
  const hasSchedule = Object.keys(schedule).length > 0;
  const currentSpecialization = doctorDetails?.specialization || specialization;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Doctor Profile */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Doctor Photo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="w-full max-w-[280px] md:w-48 h-[360px] md:h-64 relative rounded-2xl overflow-hidden">
                <Image
                  src={doctor.photo}
                  alt={`${currentSpecialization} ${doctor.name} в клинике Альтамед-СОдинцово`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {currentSpecialization} {doctor.name} в Одинцово
              </h1>
              <div className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {doctor.specialization}
              </div>
              {(doctorDetails && doctorDetails.experience) || (doctor.experience !== undefined && doctor.experience !== null) ? (
                <p className="text-gray-600 mb-4">
                  {doctorDetails && doctorDetails.experience 
                    ? doctorDetails.experience 
                    : doctor.experience !== undefined && doctor.experience !== null
                      ? `Стаж: ${doctor.experience} ${doctor.experience === 1 ? 'год' : doctor.experience < 5 ? 'года' : 'лет'}`
                      : ''}
                </p>
              ) : null}
              <a href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-orange-500 hover:to-orange-700 transition-all font-medium w-full md:w-auto text-center">
                Записаться
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Schedule or Addresses */}
        <div className="lg:w-96 bg-gray-100 rounded-2xl p-6">
          {hasSchedule ? (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Расписание приема:
              </h2>
              <div className="bg-white rounded-xl p-4">
                <div className="space-y-2">
                  {schedule.Monday && (
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Понедельник</span>
                      <span className="text-emerald-700 font-semibold">
                        {schedule.Monday.start} - {schedule.Monday.end}
                      </span>
                    </div>
                  )}
                  {schedule.Tuesday && (
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Вторник</span>
                      <span className="text-emerald-700 font-semibold">
                        {schedule.Tuesday.start} - {schedule.Tuesday.end}
                      </span>
                    </div>
                  )}
                  {schedule.Wednesday && (
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Среда</span>
                      <span className="text-emerald-700 font-semibold">
                        {schedule.Wednesday.start} - {schedule.Wednesday.end}
                      </span>
                    </div>
                  )}
                  {schedule.Thursday && (
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Четверг</span>
                      <span className="text-emerald-700 font-semibold">
                        {schedule.Thursday.start} - {schedule.Thursday.end}
                      </span>
                    </div>
                  )}
                  {schedule.Friday && (
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Пятница</span>
                      <span className="text-emerald-700 font-semibold">
                        {schedule.Friday.start} - {schedule.Friday.end}
                      </span>
                    </div>
                  )}
                  {schedule.Saturday && (
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Суббота</span>
                      <span className="text-emerald-700 font-semibold">
                        {schedule.Saturday.start} - {schedule.Saturday.end}
                      </span>
                    </div>
                  )}
                  {schedule.Sunday && (
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700 font-medium">Воскресенье</span>
                      <span className="text-emerald-700 font-semibold">
                        {schedule.Sunday.start} - {schedule.Sunday.end}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Ведет прием по адресам:
              </h2>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-gray-900">М</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">
                      {doctorName === 'Исаева Екатерина Николаевна' ? 'ул. Крылова, 23' : 'м. «Одинцово»'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {doctorName === 'Исаева Екатерина Николаевна' ? '«Альтамед-С» на ул. Крылова, 23' : '«Альтамед-С» на ул. Можайское шоссе, д. 2'}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Rest of the content will be passed as children or we can continue here */}
      {/* For now, I'll create a separate component for the rest */}
    </div>
  );
}


