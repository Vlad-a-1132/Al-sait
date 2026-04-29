/** Справочный список заболеваний по алфавиту (используется на странице дерматологии). */
export default function DermatologyAlphabetSection() {
  return (
    <section className="py-12 bg-gray-50" aria-labelledby="derm-alphabet-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h2 id="derm-alphabet-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Кожные заболевания по алфавиту
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Атопический дерматит</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Бородавки</div>
              <div>Буллезный эпидермолиз</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Вросший ноготь</div>
              <div>Выпадение волос</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Гемангиома</div>
              <div>Герпес (вирус герпеса 1, 2 типа)</div>
              <div>Гипергидроз (потливость)</div>
              <div>Гипергидроз стоп</div>
              <div>Гиперкератоз</div>
              <div>Гиперкератоз ногтей</div>
              <div>Гипертрихоз</div>
              <div>Грибок ногтей</div>
              <div>Грибок ногтей (онихомикоз)</div>
              <div>Грибок стоп</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ж</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Жирные волосы</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">И</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Инсектная аллергия (на укусы насекомых)</div>
              <div>Ихтиоз</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">К</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Кандидоз</div>
              <div>Кератома</div>
              <div>Кератомикоз</div>
              <div>Кондиломы</div>
              <div>Контагиозный моллюск</div>
              <div>Контактный дерматит</div>
              <div>Крапивница</div>
              <div>Купероз</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Лекарственная аллергия</div>
              <div>Лишай</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Мозоль</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Н</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Натоптыши</div>
              <div>Невусы (родинки)</div>
              <div>Нейродермит</div>
              <div>Нейрофиброматоз</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">О</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Ониходистрофия</div>
              <div>Онихолизис</div>
              <div>Опоясывающий лишай (герпес)</div>
              <div>Опрелости под грудью</div>
              <div>Отрубевидный лишай</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Панникулит</div>
              <div>Папилломо-вирусная инфекция</div>
              <div>Папилломы</div>
              <div>Паронихия</div>
              <div>Паховая эпидермофития</div>
              <div>Педикулез</div>
              <div>Перхоть</div>
              <div>Пигментация кожи</div>
              <div>Пигментные пятна</div>
              <div>Пиодермия</div>
              <div>Подошвенные бородавки</div>
              <div>Потеря тонуса и упругости кожи</div>
              <div>Потница</div>
              <div>Прыщи</div>
              <div>Псориаз</div>
              <div>Псориатический артрит</div>
              <div>Пузырчатка</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-emerald-600 mb-4">Р</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Розацеа</div>
              <div>Розовый лишай</div>
              <div>Рубцы и приобретенные дефекты</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">С</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Себорейный дерматит</div>
              <div>Себорея</div>
              <div>Себорея кожи головы</div>
              <div>Стрептодермия у взрослых</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Трещины стоп</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">У</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Угревая болезнь</div>
              <div>Угри</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ф</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Фавус</div>
              <div>Фолликулит</div>
              <div>Фурункул</div>
              <div>Фурункулез</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ч</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Чесотка</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Экзема</div>
            </div>
            <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Я</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Ячмень</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
