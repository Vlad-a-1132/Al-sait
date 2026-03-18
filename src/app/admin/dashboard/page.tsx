"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

interface DoctorScheduleData {
  name: string;
  specialty: string;
  schedule: DoctorSchedule;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'schedule'>('schedule');
  const [selectedBranch, setSelectedBranch] = useState<'branch1' | 'branch2' | 'branch3' | 'branch4'>('branch1');
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    // Проверка аутентификации
    const isAuthenticated = localStorage.getItem('admin_authenticated');
    if (isAuthenticated !== 'true') {
      router.push('/admin/login');
      return;
    }

    // Проверка времени сессии (24 часа)
    const loginTime = localStorage.getItem('admin_login_time');
    if (loginTime) {
      const timeDiff = Date.now() - parseInt(loginTime);
      const hoursDiff = timeDiff / (1000 * 60 * 60);
      if (hoursDiff > 24) {
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_login_time');
        router.push('/admin/login');
      }
    }
  }, [router]);

  // Загрузка данных расписания из localStorage после монтирования
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_schedule_data');
      if (saved) {
        try {
          setScheduleData(JSON.parse(saved));
        } catch (e) {
          console.error('Error parsing schedule data:', e);
        }
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_login_time');
    router.push('/admin/login');
  };

  const showSavedMessage = () => {
    setSavedMessage('Изменения сохранены!');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  // Загрузка расписания из localStorage или использование дефолтных данных
  const loadScheduleData = (): { [key: string]: DoctorScheduleData[] } => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_schedule_data');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {};
  };

  const [scheduleData, setScheduleData] = useState<{ [key: string]: DoctorScheduleData[] }>({});

  const branchNames = {
    branch1: 'бульвар Маршала Крылова, д. 23',
    branch2: 'Можайское шоссе, д. 141',
    branch3: 'Стоматология',
    branch4: 'Лабораторные исследования'
  };

  const defaultBranch1Doctors: DoctorScheduleData[] = [
    { name: "Балян Мария Маисовна", specialty: "Отоларинголог, Сурдолог", schedule: { Wednesday: { start: "17:30", end: "20:00" }, Friday: { start: "17:30", end: "20:00" }, Sunday: { start: "10:00", end: "14:00" } } },
    { name: "Белоус Олег Анатольевич", specialty: "Остеопат", schedule: { Tuesday: { start: "08:00", end: "19:00" }, Wednesday: { start: "08:00", end: "19:00" }, Thursday: { start: "08:00", end: "19:00" }, Saturday: { start: "08:00", end: "19:00" }, Sunday: { start: "08:00", end: "19:00" } } },
    { name: "Доброток Альбина Витальевна", specialty: "Педиатр", schedule: { Tuesday: { start: "18:40", end: "20:00" }, Sunday: { start: "10:00", end: "14:00" } } },
    { name: "Дячук Ольга Владимировна", specialty: "Психолог", schedule: { Tuesday: { start: "12:00", end: "16:00" } } },
    { name: "Емельянова Анна Игоревна", specialty: "Косметолог, Дерматовенеролог", schedule: { Thursday: { start: "09:00", end: "15:00" } } },
    { name: "Есакова Мария Александровна", specialty: "УЗИ", schedule: { Wednesday: { start: "17:00", end: "20:00" }, Saturday: { start: "08:00", end: "14:00" }, Sunday: { start: "08:00", end: "14:00" } } },
    { name: "Иванова Ольга Юрьевна", specialty: "Отоларинголог", schedule: { Monday: { start: "10:00", end: "19:00" }, Tuesday: { start: "10:00", end: "19:00" }, Thursday: { start: "10:00", end: "19:00" }, Saturday: { start: "10:00", end: "17:00" } } },
    { name: "Иванченко Светлана Викторовна", specialty: "Эндокринолог", schedule: { Tuesday: { start: "11:15", end: "19:30" }, Saturday: { start: "09:15", end: "18:00" } } },
    { name: "Костьо Елена Владимировна", specialty: "Косметолог-массажист", schedule: { Monday: { start: "15:00", end: "20:00" }, Tuesday: { start: "10:00", end: "20:00" }, Wednesday: { start: "15:00", end: "20:00" }, Thursday: { start: "15:00", end: "20:00" }, Sunday: { start: "13:30", end: "20:00" } } },
    { name: "Никулина Елена Ивановна", specialty: "Детский массажист", schedule: { Thursday: { start: "10:00", end: "20:00" }, Friday: { start: "10:00", end: "20:00" }, Saturday: { start: "10:00", end: "13:30" } } },
    { name: "Павлова Людмила Леонидовна", specialty: "УЗИ", schedule: { Tuesday: { start: "09:00", end: "13:00" } } },
    { name: "Понедельченко Надежда Ивановна", specialty: "Дерматокосметолог", schedule: { Tuesday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "17:00" } } },
    { name: "Полуэктова Оксана Николаевна", specialty: "Дерматовенеролог", schedule: { Monday: { start: "16:00", end: "20:00" }, Thursday: { start: "16:00", end: "20:00" }, Saturday: { start: "16:00", end: "20:00" } } },
    { name: "Ростовцева Эмилия Вениаминовна", specialty: "Кардиолог", schedule: { Monday: { start: "09:00", end: "15:00" }, Wednesday: { start: "09:00", end: "15:00" }, Friday: { start: "09:00", end: "15:00" } } },
    { name: "Хомулло Валерия Викторовна", specialty: "Врач УЗИ", schedule: { Tuesday: { start: "16:00", end: "20:00" }, Wednesday: { start: "08:30", end: "15:00" } } },
    { name: "Яблокова Инна Валерьевна", specialty: "Офтальмолог", schedule: { Monday: { start: "14:00", end: "19:00" }, Tuesday: { start: "14:00", end: "19:00" }, Wednesday: { start: "14:00", end: "19:00" }, Thursday: { start: "14:00", end: "19:00" }, Saturday: { start: "10:00", end: "16:00" } } }
  ];

  const defaultBranch2Doctors: DoctorScheduleData[] = [
    { name: "Абдулаев", specialty: "Специалист", schedule: { Monday: { start: "10:00", end: "18:00" }, Tuesday: { start: "10:00", end: "18:00" }, Saturday: { start: "10:00", end: "18:00" }, Sunday: { start: "10:00", end: "18:00" } } },
    { name: "Белянко Игорь Эдуардович", specialty: "Кардиолог", schedule: { Monday: { start: "08:00", end: "15:00" }, Tuesday: { start: "08:00", end: "15:00" }, Thursday: { start: "08:00", end: "15:00" }, Friday: { start: "08:00", end: "15:00" }, Saturday: { start: "08:00", end: "19:20" } } },
    { name: "Бригадирова Елена Михайловна", specialty: "Гинеколог", schedule: { Monday: { start: "09:00", end: "14:30" }, Wednesday: { start: "09:00", end: "15:30" }, Friday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "16:00" } } },
    { name: "Будко Елена Анатольевна", specialty: "Гастроэнтеролог", schedule: { Monday: { start: "09:00", end: "19:00" }, Wednesday: { start: "09:00", end: "19:00" }, Thursday: { start: "09:00", end: "14:00" }, Sunday: { start: "09:00", end: "19:00" } } },
    { name: "Громов Евгений Викторович", specialty: "Уролог-андролог", schedule: { Monday: { start: "16:00", end: "21:00" }, Tuesday: { start: "16:00", end: "21:00" }, Wednesday: { start: "10:00", end: "14:00" }, Thursday: { start: "16:00", end: "21:00" }, Friday: { start: "09:00", end: "12:30" } } },
    { name: "Глуцкая", specialty: "Специалист", schedule: { Tuesday: { start: "16:00", end: "19:00" }, Friday: { start: "16:00", end: "19:00" } } },
    { name: "Громова Елена Анатольевна", specialty: "Маммолог", schedule: { Wednesday: { start: "17:00", end: "20:00" }, Friday: { start: "17:00", end: "20:00" } } },
    { name: "Дмитриев Алексей Олегович", specialty: "Невролог", schedule: { Tuesday: { start: "08:30", end: "19:00" }, Thursday: { start: "16:00", end: "19:00" }, Friday: { start: "08:00", end: "14:00" }, Sunday: { start: "08:00", end: "17:30" } } },
    { name: "Дутчак Елизавета Альбертовна", specialty: "Медсестра физиокабинета", schedule: { Monday: { start: "09:00", end: "14:00" }, Tuesday: { start: "16:00", end: "20:00" }, Wednesday: { start: "09:00", end: "14:00" }, Thursday: { start: "16:00", end: "20:00" }, Friday: { start: "16:00", end: "20:00" }, Sunday: { start: "09:00", end: "15:00" } } },
    { name: "Казакова Маргарита Витальевна", specialty: "Физиотерапевт", schedule: { Monday: { start: "16:30", end: "20:00" }, Wednesday: { start: "16:30", end: "20:00" }, Saturday: { start: "09:00", end: "15:00" } } },
    { name: "Костина Валентина Яковлевна", specialty: "Гастроэнтеролог", schedule: { Tuesday: { start: "08:30", end: "13:00" }, Thursday: { start: "08:30", end: "20:00" }, Friday: { start: "08:30", end: "13:00" }, Saturday: { start: "08:30", end: "14:00" } } },
    { name: "Кузьминых Надежда Валентиновна", specialty: "УЗИ", schedule: { Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "15:00", end: "20:00" }, Sunday: { start: "09:00", end: "20:00" } } },
    { name: "Лория Ольга Викторовна", specialty: "Педиатр", schedule: { Monday: { start: "14:00", end: "18:00" }, Wednesday: { start: "16:00", end: "20:00" }, Friday: { start: "10:00", end: "14:00" }, Saturday: { start: "09:00", end: "13:00" } } },
    { name: "Лысенко Ирина Владимировна", specialty: "Аллерголог", schedule: { Wednesday: { start: "09:00", end: "14:00" }, Sunday: { start: "09:00", end: "16:00" } } },
    { name: "Максимова Инна Ивановна", specialty: "Терапевт", schedule: { Monday: { start: "18:00", end: "20:00" }, Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "13:00" } } },
    { name: "Неклюдов Владимир Юрьевич", specialty: "Хирург", schedule: { Saturday: { start: "09:00", end: "14:00" } } },
    { name: "Пак Лариса Константиновна", specialty: "Невролог", schedule: { Wednesday: { start: "17:00", end: "20:00" }, Friday: { start: "17:00", end: "20:00" } } },
    { name: "Павлова Людмила Леонидовна", specialty: "УЗИ", schedule: { Monday: { start: "09:00", end: "20:00" }, Wednesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "13:00" }, Saturday: { start: "08:00", end: "20:00" } } },
    { name: "Панова Ольга Юрьевна", specialty: "Акушер-гинеколог", schedule: { Monday: { start: "08:00", end: "15:00" }, Wednesday: { start: "14:00", end: "20:00" }, Thursday: { start: "08:00", end: "15:00" }, Sunday: { start: "14:00", end: "19:00" } } },
    { name: "Перегудова Нина Алексеевна", specialty: "Гинеколог", schedule: { Monday: { start: "15:00", end: "20:00" }, Tuesday: { start: "10:00", end: "15:00" }, Saturday: { start: "10:00", end: "19:00" }, Sunday: { start: "10:00", end: "18:00" } } },
    { name: "Притула Александр Васильевич", specialty: "Невролог", schedule: { Monday: { start: "14:00", end: "20:00" }, Wednesday: { start: "13:30", end: "20:00" }, Saturday: { start: "14:00", end: "20:00" } } },
    { name: "Рагимханов Фарид Султанович", specialty: "Уролог", schedule: { Tuesday: { start: "10:00", end: "13:00" }, Friday: { start: "15:00", end: "20:00" }, Saturday: { start: "10:00", end: "13:00" } } },
    { name: "Русинович Валерий Михайлович", specialty: "Колопроктолог", schedule: { Tuesday: { start: "16:00", end: "20:00" } } },
    { name: "Рыжов Андрей Иванович", specialty: "Оториноларинголог", schedule: { Tuesday: { start: "17:00", end: "20:00" } } },
    { name: "Рыжов Иван Николаевич", specialty: "Отоларинголог", schedule: { Monday: { start: "15:00", end: "20:00" }, Wednesday: { start: "15:00", end: "20:00" }, Friday: { start: "15:00", end: "20:00" }, Saturday: { start: "09:00", end: "16:00" }, Sunday: { start: "09:00", end: "16:00" } } },
    { name: "Унтилова Маргарита Павловна", specialty: "Рентген", schedule: { Monday: { start: "09:00", end: "18:00" }, Tuesday: { start: "09:00", end: "18:00" }, Wednesday: { start: "09:00", end: "18:00" }, Thursday: { start: "09:00", end: "18:00" }, Friday: { start: "09:00", end: "18:00" }, Saturday: { start: "09:00", end: "16:00" }, Sunday: { start: "09:00", end: "16:00" } } },
    { name: "Унтилова Маргарита Павловна", specialty: "Компьютерная томография", schedule: { Monday: { start: "09:30", end: "19:30" }, Tuesday: { start: "09:30", end: "19:30" }, Wednesday: { start: "09:30", end: "19:30" }, Thursday: { start: "09:30", end: "19:30" }, Friday: { start: "09:30", end: "19:30" }, Saturday: { start: "09:30", end: "19:30" }, Sunday: { start: "09:30", end: "19:30" } } },
    { name: "Ютанин Сергей Николаевич", specialty: "Хирург", schedule: { Monday: { start: "08:00", end: "14:00" }, Tuesday: { start: "09:00", end: "14:00" }, Wednesday: { start: "09:00", end: "14:00" }, Thursday: { start: "09:00", end: "15:00" }, Sunday: { start: "09:00", end: "14:00" } } }
  ];

  const defaultBranch3Doctors: DoctorScheduleData[] = [
    { name: "Абрамов Юно Эриильевич", specialty: "Стоматолог-хирург", schedule: { Wednesday: { start: "10:00", end: "14:00" }, Sunday: { start: "10:00", end: "14:00" } } },
    { name: "Богомолова Светлана Сергеевна", specialty: "Стоматолог детский", schedule: { Monday: { start: "10:00", end: "17:00" }, Wednesday: { start: "10:00", end: "17:00" } } },
    { name: "Гончаренко Елена Борисовна", specialty: "Ортодонт", schedule: { Tuesday: { start: "12:00", end: "18:00" } } },
    { name: "Иванникова Любовь Андреевна", specialty: "Стоматолог", schedule: { Monday: { start: "09:00", end: "17:30" }, Wednesday: { start: "09:00", end: "17:30" }, Friday: { start: "09:00", end: "17:30" } } },
    { name: "Исаева Екатерина Николаевна", specialty: "Гигиенист стоматологический", schedule: { Monday: { start: "15:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Saturday: { start: "09:00", end: "20:00" } } },
    { name: "Кириллова Елена Владимировна", specialty: "Стоматолог детский", schedule: { Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Sunday: { start: "09:00", end: "19:00" } } },
    { name: "Крошкин Александр Дмитриевич", specialty: "Стоматолог-ортопед", schedule: { Wednesday: { start: "11:00", end: "20:00" }, Sunday: { start: "15:30", end: "20:00" } } },
    { name: "Полетаева (Ужегова) Мария Рашитовна", specialty: "Ортодонт", schedule: { Thursday: { start: "11:00", end: "20:00" }, Sunday: { start: "11:00", end: "20:00" } } },
    { name: "Прикуле Елена Юрьевна", specialty: "Стоматолог-терапевт", schedule: { Monday: { start: "09:00", end: "15:00" }, Thursday: { start: "09:00", end: "20:00" }, Saturday: { start: "09:00", end: "20:00" } } },
    { name: "Рубцов Роман Владимирович", specialty: "Стоматолог-ортопед", schedule: { Tuesday: { start: "09:00", end: "20:00" }, Thursday: { start: "09:00", end: "20:00" }, Friday: { start: "09:00", end: "20:00" }, Saturday: { start: "09:00", end: "20:00" } } },
    { name: "Рубцова Ольга Юрьевна", specialty: "Стоматолог-хирург", schedule: { Tuesday: { start: "09:00", end: "19:00" }, Thursday: { start: "09:00", end: "19:00" }, Friday: { start: "09:00", end: "19:00" }, Saturday: { start: "09:00", end: "19:00" } } },
    { name: "Чернова Алла Валерьевна", specialty: "Стоматолог", schedule: { Tuesday: { start: "09:00", end: "17:00" }, Wednesday: { start: "14:30", end: "20:00" } } },
    { name: "Ярулова Вероника Юрьевна", specialty: "Стоматолог", schedule: { Wednesday: { start: "09:00", end: "18:30" }, Saturday: { start: "09:00", end: "18:30" } } }
  ];

  const defaultBranch4Doctors: DoctorScheduleData[] = [
    { name: "Лаборатория", specialty: "Лаборатория", schedule: { Monday: { start: "08:00", end: "20:00" }, Tuesday: { start: "08:00", end: "20:00" }, Wednesday: { start: "08:00", end: "20:00" }, Thursday: { start: "08:00", end: "20:00" }, Friday: { start: "08:00", end: "20:00" }, Saturday: { start: "08:00", end: "20:00" }, Sunday: { start: "08:00", end: "18:00" } } }
  ];

  const getCurrentDoctors = (): DoctorScheduleData[] => {
    const branchKey = selectedBranch;
    
    // Получаем дефолтные данные для текущей ветки
    let defaultDoctors: DoctorScheduleData[] = [];
    switch (branchKey) {
      case 'branch1': defaultDoctors = defaultBranch1Doctors; break;
      case 'branch2': defaultDoctors = defaultBranch2Doctors; break;
      case 'branch3': defaultDoctors = defaultBranch3Doctors; break;
      case 'branch4': defaultDoctors = defaultBranch4Doctors; break;
      default: return [];
    }
    
    // Если есть сохраненные данные, объединяем их с дефолтными
    if (scheduleData[branchKey] && scheduleData[branchKey].length > 0) {
      const savedDoctors = scheduleData[branchKey];
      const savedMap = new Map(savedDoctors.map((doc: DoctorScheduleData) => [doc.name, doc]));
      
      // Создаем массив, где дефолтные данные обновляются сохраненными, если они есть
      const merged = defaultDoctors.map((defaultDoc) => {
        const savedDoc = savedMap.get(defaultDoc.name);
        return savedDoc || defaultDoc;
      });
      
      // Добавляем врачей из сохраненных данных, которых нет в дефолтных
      savedDoctors.forEach((savedDoc: DoctorScheduleData) => {
        if (!defaultDoctors.find((doc) => doc.name === savedDoc.name)) {
          merged.push(savedDoc);
        }
      });
      
      return merged;
    }
    
    // Если сохраненных данных нет, возвращаем дефолтные
    return defaultDoctors;
  };

  const [currentDoctors, setCurrentDoctors] = useState<DoctorScheduleData[]>(getCurrentDoctors());

  useEffect(() => {
    setCurrentDoctors(getCurrentDoctors());
  }, [selectedBranch, scheduleData]);

  const saveSchedule = () => {
    const newData = { ...scheduleData };
    newData[selectedBranch] = currentDoctors;
    setScheduleData(newData);
    localStorage.setItem('admin_schedule_data', JSON.stringify(newData));
    // Триггерим событие для обновления других вкладок
    window.dispatchEvent(new Event('storage'));
    showSavedMessage();
  };

  const updateDoctorSchedule = (index: number, day: keyof DoctorSchedule, start: string, end: string) => {
    const updated = [...currentDoctors];
    if (start && end) {
      updated[index].schedule[day] = { start, end };
    } else {
      delete updated[index].schedule[day];
    }
    setCurrentDoctors(updated);
  };

  const updateDoctorName = (index: number, name: string) => {
    const updated = [...currentDoctors];
    updated[index].name = name;
    setCurrentDoctors(updated);
  };

  const updateDoctorSpecialty = (index: number, specialty: string) => {
    const updated = [...currentDoctors];
    updated[index].specialty = specialty;
    setCurrentDoctors(updated);
  };

  const addDoctor = () => {
    setCurrentDoctors([...currentDoctors, { name: "", specialty: "", schedule: {} }]);
  };

  const removeDoctor = (index: number) => {
    if (confirm('Вы уверены, что хотите удалить этого врача?')) {
      setCurrentDoctors(currentDoctors.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Админ-панель</h1>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                На сайт
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                activeTab === 'schedule'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Расписание врачей
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {savedMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            {savedMessage}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Редактирование расписания</h2>
              
              {/* Branch Selector */}
              <div className="mb-6 flex flex-wrap gap-2">
                {Object.entries(branchNames).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedBranch(key as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedBranch === key
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {/* Doctors List */}
              <div className="space-y-4">
                {currentDoctors.map((doctor, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Имя врача</label>
                        <input
                          type="text"
                          value={doctor.name}
                          onChange={(e) => updateDoctorName(index, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Специальность</label>
                        <input
                          type="text"
                          value={doctor.specialty}
                          onChange={(e) => updateDoctorSpecialty(index, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                      {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const).map((day) => {
                        const dayLabels: { [key: string]: string } = {
                          Monday: 'Пн',
                          Tuesday: 'Вт',
                          Wednesday: 'Ср',
                          Thursday: 'Чт',
                          Friday: 'Пт',
                          Saturday: 'Сб',
                          Sunday: 'Вс'
                        };
                        const dayData = doctor.schedule[day];
                        return (
                          <div key={day} className="border border-gray-200 rounded p-2">
                            <div className="text-xs font-medium text-gray-700 mb-1">{dayLabels[day]}</div>
                            <div className="mb-1">
                              <label className="text-xs text-gray-600 block mb-0.5">Начало</label>
                              <input
                                type="time"
                                value={dayData?.start || ''}
                                onChange={(e) => {
                                  const start = e.target.value;
                                  const end = dayData?.end || start;
                                  updateDoctorSchedule(index, day, start, end);
                                }}
                                className="w-full text-xs px-1 py-1 border border-gray-300 rounded"
                              />
                            </div>
                            <div className="mb-1">
                              <label className="text-xs text-gray-600 block mb-0.5">Конец</label>
                              <input
                                type="time"
                                value={dayData?.end || ''}
                                onChange={(e) => {
                                  const end = e.target.value;
                                  const start = dayData?.start || end;
                                  updateDoctorSchedule(index, day, start, end);
                                }}
                                className="w-full text-xs px-1 py-1 border border-gray-300 rounded"
                              />
                            </div>
                            {dayData && (
                              <button
                                onClick={() => updateDoctorSchedule(index, day, '', '')}
                                className="mt-1 text-xs text-red-600 hover:text-red-800 w-full"
                              >
                                Удалить
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => removeDoctor(index)}
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                      Удалить врача
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={addDoctor}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  + Добавить врача
                </button>
                <button
                  onClick={saveSchedule}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Сохранить изменения
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

