"use client"

import React, { useState, useEffect } from "react";
import AppointmentForm from "@/components/AppointmentForm";

interface Schedule {
  start: string;
  end: string;
}

interface DoctorSchedule {
  Monday?: Schedule;
  Tuesday?: Schedule;
  Wednesday?: Schedule;
  Thursday?: Schedule;
  Friday?: Schedule;
  Saturday?: Schedule;
  Sunday?: Schedule;
}

interface DoctorScheduleRowProps {
  name: string;
  specialty: string;
  schedule: DoctorSchedule;
}

function DoctorCardMobile({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const days = [
    { key: 'Monday', label: 'Пн', data: schedule.Monday },
    { key: 'Tuesday', label: 'Вт', data: schedule.Tuesday },
    { key: 'Wednesday', label: 'Ср', data: schedule.Wednesday },
    { key: 'Thursday', label: 'Чт', data: schedule.Thursday },
    { key: 'Friday', label: 'Пт', data: schedule.Friday },
    { key: 'Saturday', label: 'Сб', data: schedule.Saturday },
    { key: 'Sunday', label: 'Вс', data: schedule.Sunday }
  ];

  const hasSchedule = days.some(day => day.data);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
      <div className="mb-3">
        <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
        <p className="text-gray-600 text-xs mt-1">{specialty}</p>
      </div>
      {hasSchedule && (
        <div className="grid grid-cols-2 gap-2">
          {days.map((day) => (
            day.data && (
              <div key={day.key} className="bg-amber-50 rounded-md px-3 py-2">
                <span className="font-semibold text-emerald-700 text-xs">{day.label}</span>
                <span className="block text-emerald-700 font-medium text-xs mt-0.5">
                  {day.data.start}–{day.data.end}
                </span>
              </div>
            )
          ))}
        </div>
      )}
      {!hasSchedule && (
        <p className="text-gray-400 text-xs">В данный момент расписание не доступно</p>
      )}
    </div>
  );
}

function DoctorScheduleRow({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const TimeCell = ({ daySchedule }: { daySchedule?: Schedule }) => {
    if (!daySchedule) {
      return <td className="px-3 py-3 text-center text-gray-300 text-sm">-</td>;
    }
    return (
      <td className="px-3 py-3 text-center bg-amber-50 text-emerald-700 font-medium text-sm rounded-md">
        {daySchedule.start}–{daySchedule.end}
      </td>
    );
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-emerald-50/30 transition-colors">
      <td className="px-4 py-3 text-left font-medium text-gray-900 text-sm">{name}</td>
      <td className="px-4 py-3 text-left text-gray-600 text-sm">{specialty}</td>
      <TimeCell daySchedule={schedule.Monday} />
      <TimeCell daySchedule={schedule.Tuesday} />
      <TimeCell daySchedule={schedule.Wednesday} />
      <TimeCell daySchedule={schedule.Thursday} />
      <TimeCell daySchedule={schedule.Friday} />
      <TimeCell daySchedule={schedule.Saturday} />
      <TimeCell daySchedule={schedule.Sunday} />
    </tr>
  );
}

export default function SchedulePage() {
  const [selectedBranch, setSelectedBranch] = useState('branch1');
  const [savedSchedule, setSavedSchedule] = useState<any>(null);
  const [hydrated, setHydrated] = useState(false);
  
  // Загрузка данных из localStorage с реактивностью
  useEffect(() => {
    const loadSavedSchedule = () => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('admin_schedule_data');
        if (saved) {
          try {
            return JSON.parse(saved);
          } catch (e) {
            return null;
          }
        }
      }
      return null;
    };
    
    setSavedSchedule(loadSavedSchedule());
    setHydrated(true);
    
    // Слушаем изменения в localStorage
    const handleStorageChange = () => {
      setSavedSchedule(loadSavedSchedule());
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Функция для объединения статических данных с данными из localStorage
  const mergeDoctorsData = (staticDoctors: any[], savedDoctors: any[] | null | undefined) => {
    if (!savedDoctors || !Array.isArray(savedDoctors)) {
      return staticDoctors;
    }
    
    const savedMap = new Map(savedDoctors.map((doc: any) => [doc.name, doc]));
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
    
    const merged = staticDoctors.map((staticDoc: any) => {
      const savedDoc = savedMap.get(staticDoc.name);
      if (!savedDoc) return staticDoc;
      // По дням: приоритет у сохранённых; если день не задан в saved — берём из статики
      const staticSched = staticDoc.schedule || {};
      const savedSched = savedDoc.schedule || {};
      const schedule: DoctorSchedule = {};
      days.forEach(day => {
        schedule[day] = savedSched[day] ?? staticSched[day];
      });
      return { ...savedDoc, schedule };
    });
    
    savedDoctors.forEach((savedDoc: any) => {
      if (!staticDoctors.find((doc: any) => doc.name === savedDoc.name)) {
        merged.push(savedDoc);
      }
    });
    
    return merged;
  };

  const branch1Doctors = [
    {
      name: "Балян Мария Маисовна",
      specialty: "Отоларинголог, Сурдолог",
      schedule: { Wednesday: { start: "17:30", end: "20:00" }, Friday: { start: "17:30", end: "20:00" }, Sunday: { start: "10:00", end: "14:00" } }
    },
    {
      name: "Белоус Олег Анатольевич",
      specialty: "Остеопат",
      schedule: { Tuesday: { start: "08:00", end: "19:00" }, Wednesday: { start: "08:00", end: "19:00" }, Thursday: { start: "08:00", end: "19:00" }, Saturday: { start: "08:00", end: "19:00" }, Sunday: { start: "08:00", end: "19:00" } }
    },
    {
      name: "Емельянова Анна Игоревна",
      specialty: "Косметолог, Дерматовенеролог",
      schedule: { Thursday: { start: "09:00", end: "15:00" } }
    },
    {
      name: "Есакова Мария Александровна",
      specialty: "УЗИ",
      schedule: { Wednesday: { start: "17:00", end: "20:00" }, Saturday: { start: "08:00", end: "14:00" }, Sunday: { start: "08:00", end: "14:00" } }
    },
    {
      name: "Иванова Ольга Юрьевна",
      specialty: "Отоларинголог",
      schedule: { Monday: { start: "10:00", end: "19:00" }, Tuesday: { start: "10:00", end: "19:00" }, Thursday: { start: "10:00", end: "19:00" }, Saturday: { start: "10:00", end: "17:00" } }
    },
    {
      name: "Иванченко Светлана Викторовна",
      specialty: "Эндокринолог",
      schedule: { Tuesday: { start: "11:15", end: "19:30" }, Saturday: { start: "09:15", end: "18:00" } }
    },
    {
      name: "Костьо Елена Владимировна",
      specialty: "Косметолог-массажист",
      schedule: { Monday: { start: "15:00", end: "20:00" }, Tuesday: { start: "10:00", end: "20:00" }, Wednesday: { start: "15:00", end: "20:00" }, Thursday: { start: "15:00", end: "20:00" }, Sunday: { start: "13:30", end: "20:00" } }
    },
    {
      name: "Никулина Елена Ивановна",
      specialty: "Детский массажист",
      schedule: { Thursday: { start: "10:00", end: "20:00" }, Friday: { start: "10:00", end: "20:00" }, Saturday: { start: "10:00", end: "13:30" } }
    },
    {
      name: "Павлова Людмила Леонидовна",
      specialty: "УЗИ",
      schedule: { Tuesday: { start: "09:00", end: "13:00" } }
    },
    {
      name: "Полуэктова Оксана Николаевна",
      specialty: "Дерматовенеролог",
      schedule: { Monday: { start: "16:00", end: "20:00" }, Thursday: { start: "16:00", end: "20:00" }, Saturday: { start: "16:00", end: "20:00" } }
    },
    {
      name: "Понедельченко Надежда Ивановна",
      specialty: "Дерматокосметолог",
      schedule: { Tuesday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "17:00" } }
    },
    {
      name: "Ростовцева Эмилия Вениаминовна",
      specialty: "Кардиолог",
      schedule: { Monday: { start: "09:00", end: "15:00" }, Wednesday: { start: "09:00", end: "15:00" }, Friday: { start: "09:00", end: "15:00" } }
    },
    {
      name: "Хомулло Валерия Викторовна",
      specialty: "Врач УЗИ",
      schedule: { Tuesday: { start: "16:00", end: "20:00" }, Wednesday: { start: "08:30", end: "15:00" } }
    },
    {
      name: "Яблокова Инна Валерьевна",
      specialty: "Офтальмолог",
      schedule: { Monday: { start: "14:00", end: "19:00" }, Tuesday: { start: "14:00", end: "19:00" }, Wednesday: { start: "14:00", end: "19:00" }, Thursday: { start: "14:00", end: "19:00" }, Saturday: { start: "10:00", end: "16:00" } }
    }
  ];

  const branch2Doctors = [
    {
      name: "Белянко Игорь Эдуардович",
      specialty: "Кардиолог",
      schedule: { Monday: { start: "08:00", end: "15:00" }, Tuesday: { start: "08:00", end: "15:00" }, Thursday: { start: "08:00", end: "15:00" }, Friday: { start: "08:00", end: "15:00" }, Saturday: { start: "08:00", end: "18:00" } }
    },
    {
      name: "Бригадирова Елена Михайловна",
      specialty: "Гинеколог",
      schedule: { Monday: { start: "09:00", end: "14:30" }, Wednesday: { start: "09:00", end: "15:30" }, Friday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "16:00" } }
    },
    {
      name: "Будко Елена Анатольевна",
      specialty: "Гастроэнтеролог",
      schedule: { Monday: { start: "09:00", end: "19:00" }, Wednesday: { start: "09:00", end: "19:00" }, Thursday: { start: "09:00", end: "14:00" }, Sunday: { start: "09:00", end: "19:00" } }
    },
    {
      name: "Громов Евгений Викторович",
      specialty: "Уролог-андролог",
      schedule: { Monday: { start: "16:00", end: "21:00" }, Tuesday: { start: "16:00", end: "21:00" }, Wednesday: { start: "10:00", end: "14:00" }, Thursday: { start: "16:00", end: "21:00" }, Friday: { start: "09:00", end: "12:30" } }
    },
    {
      name: "Глуцкая",
      specialty: "Специалист",
      schedule: { Tuesday: { start: "16:00", end: "19:00" }, Friday: { start: "16:00", end: "19:00" } }
    },
    {
      name: "Громова Елена Анатольевна",
      specialty: "Маммолог",
      schedule: { Wednesday: { start: "17:00", end: "20:00" }, Friday: { start: "17:00", end: "20:00" } }
    },
    {
      name: "Дмитриев Алексей Олегович",
      specialty: "Невролог",
      schedule: { Tuesday: { start: "08:30", end: "19:00" }, Thursday: { start: "16:00", end: "19:00" }, Friday: { start: "08:00", end: "14:00" }, Sunday: { start: "08:00", end: "17:30" } }
    },
    {
      name: "Дутчак Елизавета Альбертовна",
      specialty: "Медсестра физиокабинета",
      schedule: { Monday: { start: "09:00", end: "14:00" }, Tuesday: { start: "16:00", end: "20:00" }, Wednesday: { start: "09:00", end: "14:00" }, Thursday: { start: "16:00", end: "20:00" }, Friday: { start: "16:00", end: "20:00" }, Sunday: { start: "09:00", end: "15:00" } }
    },
    {
      name: "Казакова Маргарита Витальевна",
      specialty: "Физиотерапевт",
      schedule: { Monday: { start: "16:30", end: "20:00" }, Wednesday: { start: "16:30", end: "20:00" }, Saturday: { start: "09:00", end: "15:00" } }
    },
    {
      name: "Костина Валентина Яковлевна",
      specialty: "Гастроэнтеролог",
      schedule: { Tuesday: { start: "08:30", end: "13:00" }, Thursday: { start: "08:30", end: "20:00" }, Friday: { start: "08:30", end: "13:00" }, Saturday: { start: "08:30", end: "14:00" } }
    },
    {
      name: "Кузьминых Надежда Валентиновна",
      specialty: "УЗИ",
      schedule: { Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "15:00", end: "20:00" }, Sunday: { start: "09:00", end: "20:00" } }
    },
    {
      name: "Лория Ольга Викторовна",
      specialty: "Педиатр",
      schedule: { Monday: { start: "14:00", end: "18:00" }, Wednesday: { start: "16:00", end: "20:00" }, Friday: { start: "10:00", end: "14:00" }, Saturday: { start: "09:00", end: "13:00" } }
    },
    {
      name: "Лысенко Ирина Владимировна",
      specialty: "Аллерголог",
      schedule: { Wednesday: { start: "09:00", end: "14:00" }, Sunday: { start: "09:00", end: "16:00" } }
    },
    {
      name: "Максимова Инна Ивановна",
      specialty: "Терапевт",
      schedule: { Monday: { start: "18:00", end: "20:00" }, Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "13:00" } }
    },
    {
      name: "Неклюдов Владимир Юрьевич",
      specialty: "Хирург",
      schedule: { Saturday: { start: "09:00", end: "14:00" } }
    },
    {
      name: "Пак Лариса Константиновна",
      specialty: "Невролог",
      schedule: { Wednesday: { start: "17:00", end: "20:00" }, Friday: { start: "17:00", end: "20:00" } }
    },
    {
      name: "Павлова Людмила Леонидовна",
      specialty: "УЗИ",
      schedule: { Monday: { start: "09:00", end: "20:00" }, Wednesday: { start: "09:00", end: "20:00" }, Friday: { start: "09:00", end: "13:00" }, Saturday: { start: "09:00", end: "20:00" } }
    },
    {
      name: "Панова Ольга Юрьевна",
      specialty: "Акушер-гинеколог",
      schedule: { Monday: { start: "08:00", end: "15:00" }, Wednesday: { start: "14:00", end: "20:00" }, Thursday: { start: "08:00", end: "15:00" }, Sunday: { start: "14:00", end: "19:00" } }
    },
    {
      name: "Перегудова Нина Алексеевна",
      specialty: "Гинеколог",
      schedule: { Monday: { start: "15:00", end: "20:00" }, Tuesday: { start: "10:00", end: "15:00" }, Saturday: { start: "10:00", end: "19:00" }, Sunday: { start: "10:00", end: "18:00" } }
    },
    {
      name: "Притула Александр Васильевич",
      specialty: "Невролог",
      schedule: { Monday: { start: "14:00", end: "20:00" }, Wednesday: { start: "13:30", end: "20:00" }, Saturday: { start: "14:00", end: "20:00" } }
    },
    {
      name: "Рагимханов Фарид Султанович",
      specialty: "Уролог",
      schedule: { Tuesday: { start: "10:00", end: "13:00" }, Friday: { start: "15:00", end: "20:00" }, Saturday: { start: "10:00", end: "13:00" } }
    },
    {
      name: "Русинович Валерий Михайлович",
      specialty: "Колопроктолог",
      schedule: { Tuesday: { start: "16:00", end: "20:00" } }
    },
    {
      name: "Рыжов Андрей Иванович",
      specialty: "Оториноларинголог",
      schedule: { Tuesday: { start: "17:00", end: "20:00" } }
    },
    {
      name: "Рыжов Иван Николаевич",
      specialty: "Отоларинголог",
      schedule: { Monday: { start: "15:00", end: "20:00" }, Wednesday: { start: "15:00", end: "20:00" }, Friday: { start: "15:00", end: "20:00" }, Saturday: { start: "09:00", end: "16:00" }, Sunday: { start: "09:00", end: "16:00" } }
    },
    {
      name: "Унтилова Маргарита Павловна",
      specialty: "Рентген",
      schedule: { Monday: { start: "09:00", end: "18:00" }, Tuesday: { start: "09:00", end: "18:00" }, Wednesday: { start: "09:00", end: "18:00" }, Thursday: { start: "09:00", end: "18:00" }, Friday: { start: "09:00", end: "18:00" }, Saturday: { start: "09:00", end: "16:00" }, Sunday: { start: "09:00", end: "16:00" } }
    },
    {
      name: "Унтилова Маргарита Павловна",
      specialty: "Компьютерная томография",
      schedule: { Monday: { start: "09:30", end: "19:30" }, Tuesday: { start: "09:30", end: "19:30" }, Wednesday: { start: "09:30", end: "19:30" }, Thursday: { start: "09:30", end: "19:30" }, Friday: { start: "09:30", end: "19:30" }, Saturday: { start: "09:30", end: "19:30" }, Sunday: { start: "09:30", end: "19:30" } }
    },
    {
      name: "Ютанин Сергей Николаевич",
      specialty: "Хирург",
      schedule: { Monday: { start: "08:00", end: "14:00" }, Tuesday: { start: "09:00", end: "14:00" }, Wednesday: { start: "09:00", end: "14:00" }, Thursday: { start: "09:00", end: "15:00" }, Sunday: { start: "09:00", end: "14:00" } }
    }
  ];

  const branch3Doctors = [
    {
      name: "Абрамов Юно Эриильевич",
      specialty: "Стоматолог-хирург",
      schedule: { Wednesday: { start: "10:00", end: "14:00" }, Sunday: { start: "10:00", end: "14:00" } }
    },
    {
      name: "Богомолова Светлана Сергеевна",
      specialty: "Стоматолог детский",
      schedule: { Monday: { start: "10:00", end: "17:00" }, Wednesday: { start: "10:00", end: "17:00" } }
    },
    {
      name: "Гончаренко Елена Борисовна",
      specialty: "Ортодонт",
      schedule: { Tuesday: { start: "12:00", end: "18:00" } }
    },
    {
      name: "Иванникова Любовь Андреевна",
      specialty: "Стоматолог",
      schedule: { Monday: { start: "09:00", end: "17:30" }, Wednesday: { start: "09:00", end: "17:30" }, Friday: { start: "09:00", end: "17:30" } }
    },
    {
      name: "Исаева Екатерина Николаевна",
      specialty: "Гигиенист стоматологический",
      schedule: { Monday: { start: "15:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Saturday: { start: "09:00", end: "20:00" } }
    },
    {
      name: "Кириллова Елена Владимировна",
      specialty: "Стоматолог детский",
      schedule: { Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "19:00" } }
    },
    {
      name: "Крошкин Александр Дмитриевич",
      specialty: "Стоматолог-ортопед",
      schedule: { Wednesday: { start: "15:00", end: "20:00" }, Sunday: { start: "15:30", end: "20:00" } }
    },
    {
      name: "Полетаева (Ужегова) Мария Рашитовна",
      specialty: "Ортодонт",
      schedule: { Thursday: { start: "11:00", end: "20:00" }, Sunday: { start: "11:00", end: "20:00" } }
    },
    {
      name: "Прикуле Елена Юрьевна",
      specialty: "Стоматолог-терапевт",
      schedule: { Monday: { start: "09:00", end: "15:00" }, Thursday: { start: "09:00", end: "20:00" }, Saturday: { start: "09:00", end: "20:00" } }
    },
    {
      name: "Рубцов Роман Владимирович",
      specialty: "Стоматолог-ортопед",
      schedule: { Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Saturday: { start: "09:00", end: "20:00" } }
    },
    {
      name: "Рубцова Ольга Юрьевна",
      specialty: "Стоматолог-хирург",
      schedule: { Tuesday: { start: "09:00", end: "19:00" }, Thursday: { start: "09:00", end: "19:00" }, Friday: { start: "09:00", end: "19:00" }, Saturday: { start: "09:00", end: "19:00" } }
    },
    {
      name: "Чернова Алла Валерьевна",
      specialty: "Стоматолог",
      schedule: { Tuesday: { start: "09:00", end: "17:00" }, Wednesday: { start: "14:30", end: "20:00" } }
    },
    {
      name: "Ярулова Вероника Юрьевна",
      specialty: "Стоматолог",
      schedule: { Wednesday: { start: "09:00", end: "18:30" }, Saturday: { start: "09:00", end: "18:30" } }
    }
  ];

  const branch4Doctors = [
    {
      name: "Лаборатория",
      specialty: "Лаборатория",
      schedule: { 
        Monday: { start: "08:00", end: "20:00" }, 
        Tuesday: { start: "08:00", end: "20:00" }, 
        Wednesday: { start: "08:00", end: "20:00" }, 
        Thursday: { start: "08:00", end: "20:00" }, 
        Friday: { start: "08:00", end: "20:00" }, 
        Saturday: { start: "08:00", end: "20:00" }, 
        Sunday: { start: "08:00", end: "18:00" } 
      }
    }
  ];

  return (
    <div>
      {/* Header Block */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Side - Title and Description */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Расписание врачей
              </h1>
              <div className="w-16 h-1 bg-orange-500 mb-4"></div>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
                В медицинской клинике «Альтамед-С» принимают высококвалифицированные специалисты с богатой врачебной практикой за плечами. На данной странице сайта вы можете изучить график приема врачей, подобрать наиболее подходящее для себя время и записаться на прием.
              </p>
            </div>
            {/* Right Side - Button */}
            <div className="flex-shrink-0">
              <a href="/appointments" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-xl">
                Записаться на прием
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Расписание врачей */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Переключатель филиалов */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-6 border-b border-gray-200 pb-4">
              <button
                onClick={() => setSelectedBranch('branch1')}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all ${
                  selectedBranch === 'branch1'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="hidden md:inline">бульвар Маршала Крылова, д. 23</span>
                <span className="md:hidden">Маршала Крылова</span>
              </button>
              <button
                onClick={() => setSelectedBranch('branch2')}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all ${
                  selectedBranch === 'branch2'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="hidden md:inline">Можайское шоссе, д. 141</span>
                <span className="md:hidden">Можайское шоссе</span>
              </button>
              <button
                onClick={() => setSelectedBranch('branch3')}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all ${
                  selectedBranch === 'branch3'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="hidden md:inline">Стоматология</span>
                <span className="md:hidden">Стоматология</span>
              </button>
              <button
                onClick={() => setSelectedBranch('branch4')}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all ${
                  selectedBranch === 'branch4'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="hidden md:inline">Лабораторные исследования</span>
                <span className="md:hidden">Лаборатория</span>
              </button>
            </div>

            {(() => {
              if (!hydrated) {
                return (
                  <div className="py-10 text-center text-gray-500">
                    Загрузка расписания…
                  </div>
                );
              }

              const staticDoctors =
                selectedBranch === 'branch1' ? branch1Doctors :
                selectedBranch === 'branch2' ? branch2Doctors :
                selectedBranch === 'branch3' ? branch3Doctors :
                branch4Doctors;

              const saved = savedSchedule?.[selectedBranch];
              const doctors = mergeDoctorsData(staticDoctors, saved);

              return (
                <>
                  {/* Мобильная версия - карточки врачей */}
                  <div className="block md:hidden space-y-3">
                    {doctors.map((doctor: any, index: number) => (
                      <DoctorCardMobile key={index} {...doctor} />
                    ))}
                  </div>

                  {/* Десктоп версия - таблица */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                      <thead>
                        <tr className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
                          <th className="px-5 py-4 text-left font-bold text-gray-900 text-sm">Врач</th>
                          <th className="px-5 py-4 text-left font-bold text-gray-900 text-sm">Специальность</th>
                          <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Пн</th>
                          <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Вт</th>
                          <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Ср</th>
                          <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Чт</th>
                          <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Пт</th>
                          <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Сб</th>
                          <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Вс</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctors.map((doctor: any, index: number) => (
                          <DoctorScheduleRow key={index} {...doctor} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Information Blocks */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* First Block */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Результативность приема гарантируется!
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Вы можете уже сейчас осуществить запись на прием к врачу в Одинцово, а также на УЗИ и сдачу экспресс анализов. Мы принимаем не только взрослых, но и детей. В клинике работают опытные и грамотные педиатры.
              </p>
              <p>
                Большинство наших врачей имеют высшую категорию и являются кандидатами медицинских наук, поэтому вы можете с уверенностью доверить нам свое здоровье, а мы гарантируем скорейшее выздоровление!
              </p>
            </div>
          </div>

          {/* Second Block */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Запись к врачу в Одинцово: как выбрать специалиста и записаться к нему на прием
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Если вы не можете определиться, медицинская помощь какого именно специалиста вам требуется, свяжитесь с консультантами клиники по указанному пользуясь формой обратной связи. Компетентный сотрудник «Альтамед-С» вас выслушает, вникнет в проблему и запишет к нужному врачу онлайн.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
                Какие специалисты ведут прием в клинике «Альтамед-С»
              </h3>
              
              <p className="mb-4">
                У нас вы можете получить профессиональную консультацию ведущих специалистов, а именно:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>терапевта и остеопата;</li>
                <li>гинеколога и маммолога;</li>
                <li>кардиолога;</li>
                <li>хирурга;</li>
                <li>отоларинголога;</li>
                <li>эндокринолога;</li>
                <li>гастроэнтеролога;</li>
                <li>косметолога-массажиста, дерматокосметолога,</li>
                <li>психиатра-психотерапевта;</li>
                <li>офтальмолога и др.</li>
              </ul>
              
              <p>
                Кроме консультации, специалистами будет проведены необходимые диагностические мероприятия и назначено грамотное, эффективное лечение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}
