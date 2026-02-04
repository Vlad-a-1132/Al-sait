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

interface DoctorPageFullContentProps {
  doctor: Doctor;
  doctorName: string;
  defaultSchedule: DoctorSchedule;
  defaultDetails: DoctorDetails | null;
  specialization: string;
}

export default function DoctorPageFullContent({ 
  doctor, 
  doctorName, 
  defaultSchedule, 
  defaultDetails, 
  specialization 
}: DoctorPageFullContentProps) {
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
                      м. «Одинцово»
                    </p>
                    <p className="text-sm text-gray-600">
                      «Альтамед-С» на ул. Можайское шоссе, д. 2
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Specialization Section */}
      <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Специализация
        </h2>
        {doctorDetails && (
          <div className="text-gray-700 space-y-4">
            <div>
              {doctorDetails.category && (
                <h3 className="font-semibold text-lg mb-2">{doctorDetails.category}</h3>
              )}
              {doctorDetails.patientAge && (
                <p className="mb-3 text-emerald-700 font-medium">{doctorDetails.patientAge}</p>
              )}
              {doctorDetails.note && (
                <div className="mb-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                  <p className="text-amber-800 font-medium">{doctorDetails.note}</p>
                </div>
              )}
              {doctorDetails.mainDirections && doctorDetails.mainDirections.length > 0 && (
                <>
                  <p className="mb-3">
                    Основные направления работы:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {doctorDetails.mainDirections.map((direction: string, index: number) => (
                      <li key={index}>{direction}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {doctorDetails.methods && doctorDetails.methods.length > 0 && (
              <div className="mt-4">
                <p className="mb-3 font-medium">
                  {doctor.name === 'Балян Мария Маисовна' 
                    ? 'Владеет всеми современными амбулаторными методами диагностики и лечения ЛОР-больных:'
                    : 'Методы лечения:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {doctorDetails.methods.map((method: string, index: number) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {!doctorDetails && (
          <div className="text-gray-700 space-y-3">
            <p className="mb-3">
              {doctor.name} в качестве врача УЗИ осуществляет диагностику таких заболеваний как:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Заболевания органов брюшной полости;</li>
              <li>Патология мочеполовой системы;</li>
              <li>Заболевания щитовидной железы;</li>
              <li>Патология молочных желез;</li>
              <li>Заболевания сосудов;</li>
              <li>Врожденные пороки развития плода;</li>
              <li>Состояние органов малого таза;</li>
              <li>Патология предстательной железы;</li>
              <li>Заболевания сердца и сосудов.</li>
            </ul>
            <p className="mt-4 mb-3 font-medium">Выполняет:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>УЗИ всех органов и систем;</li>
              <li>УЗИ во время беременности;</li>
              <li>Допплерографию сосудов;</li>
              <li>Эхокардиографию;</li>
              <li>УЗИ с контрастным усилением;</li>
              <li>Контрольные исследования;</li>
              <li>Скрининговые исследования.</li>
            </ul>
          </div>
        )}
      </section>

      {/* Certificates Section */}
      {((doctorDetails && doctorDetails.accreditation && doctorDetails.accreditation.length > 0) || 
         (doctorDetails && doctorDetails.certificates && doctorDetails.certificates && doctorDetails.certificates.length > 0) ||
         (doctorDetails && doctorDetails.accreditationDocument)) && (
        <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          {doctorDetails && doctorDetails.accreditationDocument && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Аккредитация
              </h2>
              <a
                href={doctorDetails.accreditationDocument}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-6"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Скачать документ об аккредитации (PDF)
              </a>
            </>
          )}
          {doctorDetails && doctorDetails.accreditation && doctorDetails.accreditation.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Аккредитация
              </h2>
              <div className="space-y-4 mb-6">
                {doctorDetails.accreditation.map((acc: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-gray-700">
                      <p className="mb-2">
                        <span className="font-medium">{acc.number}</span> {acc.date}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Специальность:</span> {acc.specialty}
                      </p>
                      <p className="text-sm text-gray-600">
                        {acc.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {doctorDetails && doctorDetails.certificates && doctorDetails.certificates.length > 0 && (
            <>
              <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${doctorDetails.accreditation && doctorDetails.accreditation.length > 0 ? 'mt-8' : ''}`}>
                Сертификаты
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {doctorDetails.certificates.map((cert: string, index: number) => (
                  <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <Image
                      src={cert}
                      alt={`Сертификат ${index + 1}`}
                      fill
                      className="object-contain cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          {doctorDetails && doctorDetails.achievements && Array.isArray(doctorDetails.achievements) && doctorDetails.achievements.length > 0 && (
            <>
              <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${(doctorDetails.accreditation && doctorDetails.accreditation.length > 0) || (doctorDetails.certificates && doctorDetails.certificates.length > 0) ? 'mt-8' : ''}`}>
                Грамоты и награды
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {doctorDetails.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <Image
                      src={achievement}
                      alt={`Грамота ${index + 1}`}
                      fill
                      className="object-contain cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      )}
      {(!doctorDetails || (!doctorDetails.accreditation && (!doctorDetails.certificates || doctorDetails.certificates.length === 0) && !doctorDetails.accreditationDocument)) && (
        <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Аккредитация
          </h2>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Сертификат:</span> Сертификат по ультразвуковой диагностике. Действует до: 20.07.2026
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Additional Information Section */}
      <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Дополнительная информация о враче
        </h2>
        {doctorDetails ? (
          <div className="space-y-6">
            {/* Education */}
            {doctorDetails.education && doctorDetails.education.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Образование</h3>
                <div className="space-y-2">
                  {doctorDetails.education.map((edu: string, index: number) => (
                    <p key={index} className="text-gray-700">{edu}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Experience */}
            {doctorDetails.experience && (
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Опыт работы</h3>
                <p className="text-gray-700">{doctorDetails.experience}</p>
              </div>
            )}

            {/* Achievements */}
            {doctorDetails.qualifications && doctorDetails.qualifications.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Профессиональное развитие и достижения</h3>
                <div className="space-y-2">
                  {doctorDetails.qualifications.map((qual: string, index: number) => (
                    <p key={index} className="text-gray-700">{qual}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Achievements */}
            {doctorDetails.achievements && typeof doctorDetails.achievements === 'string' && (
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Профессиональные достижения</h3>
                <p className="text-gray-700">{doctorDetails.achievements}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {/* Education Accordion */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Образование</h3>
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Experience Accordion */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Опыт работы</h3>
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Achievements Accordion */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Профессиональное развитие и достижения</h3>
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Reviews Section */}
      <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Отзывы наших пациентов</h2>
        
        <div className="prose max-w-none space-y-6">
          <p className="text-gray-700 text-lg">
            Нам очень важно Ваше мнение о качестве нашей работы! Ваши отзывы помогают нам становиться лучше и улучшать сервис для всех пациентов.
          </p>
          
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Оставьте отзыв в Яндекс.Картах</h3>
            <p className="text-gray-700 mb-4">
              Нам важно знать, что Вы думаете о нашей клинике. Ваш отзыв поможет другим пациентам узнать о качестве наших услуг.
            </p>
            <p className="text-gray-700 mb-4 font-medium">
              Как оставить отзыв:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Откройте страницу нашей клиники в Яндекс.Картах</li>
              <li>Нажмите на кнопку "Оставить отзыв" (см. скриншот ниже)</li>
              <li>Оцените нашу работу и напишите Ваш отзыв</li>
              <li className="font-medium text-emerald-700">
                <strong>Это очень важно:</strong> укажите ФИО врача, дату приема и услугу, которую Вы получили. Мы будем очень благодарны за такую подробность!
              </li>
              <li>Нажмите "Опубликовать"</li>
            </ol>
          </div>

          <div className="mt-6">
            <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/documents/Screenshot_1749.png"
                alt="Инструкция: как оставить отзыв в Яндекс.Картах"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 text-center mt-2">
              Нажмите на кнопку "Оставить отзыв" (выделена на скриншоте)
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://yandex.ru/search/?text=%D0%B0%D0%BB%D1%8C%D1%82%D0%B0%D0%BC%D0%B5%D0%B4+%D1%81+%D0%BE%D0%B4%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D0%BE&lr=121257&src=suggest_Pers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-emerald-500 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Оставить отзыв в Яндекс.Картах
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Почему мы просим отзывы?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Это помогает нам расти</h4>
                  <p className="text-gray-600 text-sm">Ваша обратная связь показывает, что работает хорошо, а что можно улучшить</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Мы ценим Ваше время</h4>
                  <p className="text-gray-600 text-sm">Ваш отзыв помогает другим пациентам выбрать качественную медицинскую помощь</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Мы стремимся к совершенству</h4>
                  <p className="text-gray-600 text-sm">Каждый отзыв мотивирует нас становиться еще лучше</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Мы читаем все отзывы</h4>
                  <p className="text-gray-600 text-sm">Каждый отзыв внимательно изучается, чтобы улучшить наш сервис</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              <strong>Спасибо за Ваше доверие!</strong>
            </p>
            <p className="text-gray-600">
              Мы очень ценим наших пациентов и всегда готовы помочь Вам и Вашим близким сохранить здоровье. Ваши отзывы помогают нам становиться лучше день ото дня.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <div className="mt-8">
        <AppointmentForm />
      </div>
    </div>
  );
}


