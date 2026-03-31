import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function OsteopathyPage() {
  const prices: Array<{ code: string; name: string; price: number }> = [
    { code: "B01.069.001", name: "Прием (осмотр, консультация) врача остеопата первичный", price: 7000 },
    { code: "B01.069.002", name: "Прием (осмотр, консультация) врача остеопата повторный", price: 5000 },
    { code: "B01.069.003", name: "Прием (осмотр, консультация) врача остеопата повторный (дети до 14 лет)", price: 4500 },
    { code: "B01.069.004", name: "Прием врача остеопата детского (дети от 0 до 14 лет) 60 мин", price: 6500 },
    { code: "B01.069.005", name: "Прием врача остеопата детского (дети от 0 до 14 лет) 30 мин", price: 3250 },
  ];

  const indications = [
    { column: 1, text: "нарушение осанки;" },
    { column: 1, text: "частые простуды, отиты и гаймориты;" },
    { column: 2, text: "головные боли, утомляемость;" },
    { column: 2, text: "необходимость восстановить организм после перенесенных инфекционных заболеваний, травм, операций;" },
    { column: 3, text: "боли в животе;" },
    { column: 3, text: "нарушение сна." },
  ];

  const conditions = [
    "Болезни позвоночника и суставов (остеохондроз, спондилоартроз, артрозы), в том числу и межпозвонковые грыжи;",
    "Сколиозы;",
    "Мышечные боли;",
    "Вертебро-висцеральные боли (боли в области сердца, грудной клетки, живота);",
    "Вертебрально-базиллярная недостаточность (головокружение, головные боли, шаткость походки);",
    "Артериальная гипертензия;",
    "Расстройства сна;",
    "Плоскостопие, косолапость, «косточки» и пяточные шпоры на стопах;",
    "Неправильная форма ног (Х-образные, О-образные ноги);",
    "Коррекция костей таза после родов;",
    "Нарушения развития у детей, расстройства поведения, речи, зрениянарушения прикуса, боли в височно-нижнечелюстном суставе;",
    "ЛОР-заболевания (частые риниты, синуситы, нарушения слуха).",
  ];

  const column1Items = indications.filter(item => item.column === 1);
  const column2Items = indications.filter(item => item.column === 2);
  const column3Items = indications.filter(item => item.column === 3);

  return (
    <div className="flex flex-col bg-white">
      {/* Title without banner */}
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black">Остеопатия в Одинцово — лечение в медицинском центре Альтамед-С</h1>
        </div>
      </section>

      {/* Two-column intro with image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/yslugi/Osteopathy.webp"
                  alt="Остеопатия"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Лечение у остеопата в Одинцово</h2>
              <p>
                В медицинском центре Альтамед-С в Одинцово опытные врачи-остеопаты помогают восстановить баланс организма и справиться с функциональными нарушениями. Организм человека — это уникальная саморегулирующаяся система, способная поддерживать здоровье и противостоять болезням. Однако современные факторы окружающей среды часто нарушают этот баланс, приводя к различным патологическим состояниям.
              </p>
              <p>
                Остеопаты центра Альтамед-С в Одинцово направляют свои усилия на поиск истинных причин нарушений и восстановление естественного равновесия в организме пациента.
              </p>
              <p>
                Для проведения точной остеопатической диагностики наши врачи годами развивают повышенную чувствительность рук. Это позволяет выявлять нарушения на самых ранних стадиях и корректировать их, предотвращая развитие осложнений. Раннее начало лечения значительно повышает его эффективность. В Европе остеопатия практикуется более 100 лет, и осмотр новорожденных врачом-остеопатом уже стал стандартом профилактической медицины.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for contacting */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Когда стоит обратиться к остеопату в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              {column1Items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {column2Items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {column3Items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Что такое остеопатия и как она работает</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Основная концепция остеопатии — организм это единое целое, где структура и функция взаимосвязаны. Специалисты медицинского центра Альтамед-С в Одинцово подходят к лечению комплексно, учитывая все аспекты здоровья пациента.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            По данным ведущих мировых специалистов, в Западной Европе 70% населения с функциональными нарушениями обращаются именно к остеопату. Медицинский центр Альтамед-С в Одинцово предлагает современный подход к диагностике и лечению без медикаментов.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            При функциональных нарушениях классическое обследование часто не выявляет патологий, хотя пациент страдает от болей в спине, головной боли, болезненных менструаций и других симптомов. В таких случаях назначают медикаменты, но жалобы остаются. Остеопатия помогает найти истинную причину проблемы. Важно понимать, что нелеченные функциональные нарушения со временем переходят в органические. Поэтому остеопатия является эффективной профилактической медициной в центре Альтамед-С в Одинцово.
          </p>
        </div>
      </section>

      {/* How osteopathy views disease */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Как остеопатия рассматривает заболевание или повреждение, называя его первичным поражением?</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В теле все ткани и органы находятся в строго определенном, эволюционно заложенном движении относительно друг друга. По каким-то причинам возникает нарушение подвижности в теле, фиксация, а это приводит к поражению структуры.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Например: падаем на спину — травма печени, она становится отечной и опускается, нарушается пищеварение. Через пару лет справа периартрит плечевого сустава, плохое настроение, раздражительность, а началось все с простого падения. Начинаем лечить плечо, появляется язва желудка, и все больше болеем. Остеопатия предлагает простое решение важной проблемы. Остеопатия — это отдельная медицина и имеет остеопатическую диагностику и диагностическое лечение.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Остеопатия — мануальная медицина. Остеопатическая диагностика мануальная, т. е. пальпация особо чувствительными руками.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Диагностические остеопатические тесты — тесты на подвижность ткани или органа, если подвижности нет, значит нарушена структура.
          </p>
        </div>
      </section>

      {/* Osteopathic Treatment */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Остеопатическое лечение в Одинцово</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Остеопатическое лечение в медицинском центре Альтамед-С в Одинцово направлено на восстановление ограниченной подвижности. В отличие от мануальной терапии, которая фокусируется на локальных проблемах, остеопат проводит комплексный осмотр всего тела, чтобы выявить первопричину заболевания.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Главное преимущество остеопатии — практически полное отсутствие противопоказаний. Метод эффективен даже у пациентов с онкологическими заболеваниями, помогая уменьшить страдания и улучшить качество жизни.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Особенно эффективна остеопатия в лечении новорожденных в Одинцово: родовые травмы, ДЦП, гипервозбудимость, срыгивание, рвота и другие нарушения успешно корректируются нашими специалистами.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            У детей дошкольного и школьного возраста остеопаты центра Альтамед-Спомогают справиться с трудностями обучения: недостаточность внимания, гиперактивность, утомляемость. Часто проблемы с обучением связаны не с интеллектом, а с нарушением работы глазных мышц и зрения. Чем раньше показать ребенка остеопату в Одинцово, тем эффективнее будет коррекция.
          </p>
        </div>
      </section>

      {/* On appointment with an osteopath */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Что делает врач-остеопат на приеме в Альтамед-С</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            На консультации в медицинском центре Альтамед-С в Одинцово врач-остеопат проводит комплексную мануальную диагностику, коррекцию позвоночника, краниальную терапию, висцеральную мануальную терапию и мышечную релаксацию при следующих заболеваниях:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4">
            {conditions.map((condition, idx) => (
              <li key={idx}>{condition}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Osteopathy and orthodontic patient treatment */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Остеопатия и лечение ортодонтических пациентов</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В настоящее время особенно актуальным является привлечение врача остеопата к лечению ортодонтических пациентов, введение в практику врачей — ортодонтов остеопатического воззрения на обследование и лечение детей с нарушением прикуса, так как ортодонтическое лечение без устранения остеопатических повреждений черепа и коррекции позвоночника и осанки малоэффективно, не дает стойких результатов, а зачастую фиксирует имеющиеся у ребенка патологические изменения черепа и связанные с ним нарушения осанки, усугубляя при этом дополнительные клинические проявления в форме головных болей, нарушений височно-нижнечелюстного сустава, быстрой утомляемости, слабости, ЛОР — патологии, нарушений со стороны желудочно-кишечного тракта.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            До начала ортодонтического лечения врач — остеопат определяет изменения осанки, изменения со стороны таза, разнодлинность ног, асимметрию лица, положение и подвижность костей черепа, работу височно-нижнечелюстного сустава и жевательных мышц, проводит коррекцию патологических изменений в течение нескольких сеансов. Даются рекомендации по формированию нового прикуса (жевание твердой пищи, массаж жевательных мышц).
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Затем врач-ортодонт подбирает корректирующие ортодонтические приспособления (пластины, брекеты), дает рекомендации по их ношению. Ортодонтический аппарат, изготовленный после проведенного остеопатического лечения черепа и позвоночника, не фиксирует повреждения, а поддерживает достигнутый в результате проведенного лечения эффект. Во время ортодонтического лечения врач — остеопат проводит коррекцию черепа и осанки 1 раз в 3–4 недели, обязательно после каждого изменения ортодонтических приспособлений (смена или изменение формы пластин, подтяжка брекетов).
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Сочетание совместной работы врача-ортодонта и врача-остеопата позволяет повысить качество проводимого лечения, увеличивает продолжительность достигнутых результатов, значительно снижает сроки ношения ортодонтических приспособлений.
          </p>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Цены</h3>
          <p className="text-sm text-gray-500 mb-4 max-w-3xl">
            Обратите внимание: цены на услуги могут меняться. Рекомендуем уточнять актуальную стоимость в регистратуре или по телефону{' '}
            <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные цены не являются офертой.
          </p>
          <div className="overflow-x-auto bg-white rounded-[20px] border border-gray-100 shadow-sm">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Код</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Наименование</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Цена, руб.</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row, i) => (
                  <tr key={row.code} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm text-gray-600 font-mono">{row.code}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">{row.price.toLocaleString("ru-RU")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}

