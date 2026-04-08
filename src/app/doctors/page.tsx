'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';
import { doctors as defaultDoctors } from '../../data/static-data';

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');
}

export default function DoctorsPage() {
  const [searchName, setSearchName] = useState('');
  const [audienceFilter, setAudienceFilter] = useState<'all' | 'adults' | 'children'>('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [isSpecializationOpen, setIsSpecializationOpen] = useState(false);
  const [doctors, setDoctors] = useState(defaultDoctors);

  useEffect(() => {
    // Загрузка данных из localStorage
    const saved = localStorage.getItem('admin_doctors_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDoctors(parsed);
      } catch (e) {
        // Если ошибка парсинга, используем дефолтные данные
      }
    }
  }, []);

  // Get unique specializations
  const allSpecializations = useMemo(() => {
    const specs = new Set<string>();
    doctors.forEach(doctor => {
      if (doctor.specialization.includes(',')) {
        doctor.specialization.split(',').forEach(spec => specs.add(spec.trim()));
      } else {
        specs.add(doctor.specialization.trim());
      }
    });
    return Array.from(specs).sort();
  }, [doctors]);

  // Filter doctors
  const filteredDoctors = useMemo(() => {
    const filtered = doctors.filter(doctor => {
      // Name filter
      if (searchName && !doctor.name.toLowerCase().includes(searchName.toLowerCase())) {
        return false;
      }

      // Audience filter
      if (audienceFilter !== 'all') {
        const specializationLower = doctor.specialization.toLowerCase();
        const isChildDoctor = specializationLower.includes('детск') || 
                             specializationLower.includes('педиатр') ||
                             specializationLower.includes('детский');
        
        if (audienceFilter === 'children' && !isChildDoctor) {
          return false;
        }
        if (audienceFilter === 'adults' && isChildDoctor) {
          return false;
        }
      }

      // Specialization filter
      if (selectedSpecialization) {
        const doctorSpecs = doctor.specialization.includes(',') 
          ? doctor.specialization.split(',').map(s => s.trim())
          : [doctor.specialization.trim()];
        
        if (!doctorSpecs.includes(selectedSpecialization)) {
          return false;
        }
      }

      return true;
    });

    // Sort by name alphabetically
    return filtered.sort((a, b) => a.name.localeCompare(b.name, 'ru', { sensitivity: 'base' }));
  }, [doctors, searchName, audienceFilter, selectedSpecialization]);

  const clearFilters = () => {
    setSearchName('');
    setAudienceFilter('all');
    setSelectedSpecialization('');
    setIsSpecializationOpen(false);
  };

  const hasActiveFilters = searchName || audienceFilter !== 'all' || selectedSpecialization;

  return (
    <div className="flex flex-col min-h-full bg-gray-50">
      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Найти специалиста
          </h1>

          {/* Filter Container */}
          <div className="bg-gray-100 rounded-2xl p-4 md:p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Name Input */}
              <div className="flex-1 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Введите ФИО"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Audience Filter Buttons */}
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => setAudienceFilter('all')}
                  className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                    audienceFilter === 'all'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Все
                </button>
                <button
                  onClick={() => setAudienceFilter('adults')}
                  className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                    audienceFilter === 'adults'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Взрослые
                </button>
                <button
                  onClick={() => setAudienceFilter('children')}
                  className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                    audienceFilter === 'children'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Детские
                </button>
              </div>

              {/* Specialization Dropdown */}
              <div className="relative flex-1 w-full md:w-auto">
                <button
                  onClick={() => setIsSpecializationOpen(!isSpecializationOpen)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <span className={selectedSpecialization ? 'text-gray-900' : 'text-gray-400'}>
                    {selectedSpecialization || 'Выбрать специализацию'}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${isSpecializationOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isSpecializationOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsSpecializationOpen(false)}
                    />
                    <div className="absolute z-20 w-full mt-2 bg-white rounded-xl border border-gray-200 shadow-lg max-h-60 overflow-y-auto">
                      {allSpecializations.map((spec) => (
                        <button
                          key={spec}
                          onClick={() => {
                            setSelectedSpecialization(spec);
                            setIsSpecializationOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                            selectedSpecialization === spec ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700'
                          }`}
                        >
                          {spec}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Clear Button */}
              <button
                onClick={clearFilters}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
                title="Очистить фильтры"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Active Filter Tag */}
            {hasActiveFilters && (
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={clearFilters}
                  className="px-3 py-1.5 bg-gray-200 rounded-lg text-gray-700 text-sm flex items-center gap-2 hover:bg-gray-300 transition-colors"
                >
                  <span>сбросить фильтр</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredDoctors.map((doctor) => (
                <Link
                  key={doctor.id}
                  href={`/doctors/${(doctor as any).slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col cursor-pointer"
                >
                  {/* Doctor Photo - Large rectangular with rounded corners on left */}
                  <div className="flex items-start p-4 gap-4">
                    <div className="relative w-[134px] h-[150px] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                      {doctor.photo ? (
                        <Image
                          src={doctor.photo}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50">
                          <span className="text-lg font-bold text-emerald-700">{getInitials(doctor.name) || 'В'}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Name */}
                      <h2 className="text-base font-bold text-gray-900 mb-2 leading-tight">{doctor.name}</h2>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="px-4 mb-3">
                    {doctor.specialization.includes(',') ? (
                      <div className="flex flex-wrap gap-1">
                        {doctor.specialization.split(',').map((spec, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                            {spec.trim()}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                        {doctor.specialization}
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  <div className="px-4 mb-4 flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Одинцово
                  </div>

                  {/* Action Button - always at bottom */}
                  <div className="px-4 pb-4 mt-auto">
                    <div className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-colors text-sm">
                      Записаться онлайн
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Специалисты не найдены</h3>
              <p className="text-gray-600">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 