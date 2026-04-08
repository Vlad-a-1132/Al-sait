// Статические данные для замены API маршрутов

export const doctors = [
  { id: 1, name: "Хомулло Валерия Викторовна", slug: "khomullo-valeria-viktorovna", specialization: "УЗИ", experience: 10, photo: "/images/doctors/Khomullo Valeria Viktorovna Odintsovo Altamed-s YZI.webp", description: "Специалист по ультразвуковой диагностике" },
  { id: 2, name: "Балян Мария Маисовна", slug: "balyan-maria-maisovna", specialization: "Отоларинголог, Сурдолог", experience: 15, photo: "/images/doctors/balyan-maria-maisovna.webp", description: "Врач-оториноларинголог, сурдолог. Врач высшей квалификационной категории" },
  { id: 3, name: "Емельянова Анна Игоревна", slug: "emelyanova-anna-igorevna", specialization: "Косметолог, Дерматовенеролог", experience: 12, photo: "/images/doctors/Emelyanova Anna Igorevna.webp", description: "Врач-косметолог, дерматовенеролог. Сертифицированный специалист по косметологии и эстетической медицине" },
  { id: 4, name: "Крошкин Александр Дмитриевич", slug: "kroshkin-aleksandr-dmitrievich", specialization: "Стоматолог-ортопед, Стоматология", experience: 18, photo: "/images/doctors/Kroshkin Alexander Dmitrievich.webp", description: "Врач стоматолог-ортопед. Стаж с 2006 года. Специализируется на восстановлении и протезировании зубов" },
  { id: 5, name: "Унтилова Маргарита Павловна", slug: "untilova-margarita-pavlovna", specialization: "Рентгенолог", experience: 28, photo: "/images/doctors/Untilova Margarita Pavlovna.webp", description: "Врач рентгенолог. Стаж с 1996 года" },
  { id: 6, name: "Панова Ольга Юрьевна", slug: "panova-olga-yurievna", specialization: "Гинеколог, Гинеколог-сексолог, УЗД", experience: 25, photo: "/images/doctors/Panova Olga Yurievna.webp", description: "Врач акушер-гинеколог, гинеколог-сексолог, врач УЗД. Кандидат медицинских наук. Стаж работы 25 лет" },
  { id: 7, name: "Дмитриев Алексей Олегович", slug: "dmitriev-alexey-olegovich", specialization: "Невролог, Мануальный терапевт, Рефлексотерапевт", experience: 21, photo: "/images/doctors/Dmitriev Alexey Olegovich.webp", description: "Врач невролог, мануальный терапевт, рефлексотерапевт. Кандидат медицинских наук. Стаж работы с 2003г." },
  { id: 8, name: "Ростовцева Эмилия Вениаминовна", slug: "rostovtseva-emilia-veniaminovna", specialization: "Кардиолог", experience: 43, photo: "/images/doctors/Rostovtseva Emilia Veniaminovna.webp", description: "Врач-кардиолог. Врачебный стаж с 1981 года. Заслуженный врач Российской Федерации" },
  { id: 9, name: "Прикуле Елена Юрьевна", slug: "prikule-elena-yuryevna", specialization: "Стоматолог-терапевт", photo: "/images/doctors/Prikule Elena Yuryevna.webp", description: "Врач стоматолог-терапевт" },
  { id: 10, name: "Иванникова Любовь Андреевна", slug: "ivannikova-lyubov-andreevna", specialization: "Стоматолог-терапевт, Микроскопист", experience: 10, photo: "/images/doctors/Ivannikova Lyubov Andreevna.webp", description: "Стоматолог-терапевт. Стаж с 2014 года" },
  { id: 11, name: "Белянко Игорь Эдуардович", slug: "belyanko-igor-eduardovich", specialization: "Кардиолог, Кардиохирург", experience: 33, photo: "/images/doctors/Belyanko Igor Eduardovich.webp", description: "Врач-кардиохирург высшей квалификационной категории. Кандидат медицинских наук. Стаж работы: с 1991 года" },
  { id: 12, name: "Полетаева Мария Рашитовна", slug: "oletayeva-maria-rashitovna", specialization: "Ортодонт, Стоматология", experience: 22, photo: "/images/doctors/Oletayeva Maria Rashitovna.webp", description: "Врач-ортодонт. Стаж работы: с 2002 года" },
  { id: 13, name: "Богомолова Светлана Сергеевна", slug: "bogomolova-svetlana-sergeevna", specialization: "Стоматолог детский, Стоматология", experience: 22, photo: "/images/doctors/Bogomolova Svetlana Sergeevna.webp", description: "Врач-стоматолог детский. Кандидат медицинских наук. Опыт работы: с 2002 года. Работает в клинике с 2006 года" },
  { id: 14, name: "Костина Валентина Яковлевна", slug: "kostina-valentina-yakovlevna", specialization: "Гастроэнтеролог, Диетолог", experience: 39, photo: "/images/doctors/Kostina Valentina Yakovlevna.webp", description: "Врач гастроэнтеролог-диетолог. Врачебный стаж с 1985 г. Врач высшей категории" },
  { id: 15, name: "Громов Евгений Викторович", slug: "gromov-evgeny-viktorovich", specialization: "Уролог-андролог", experience: 22, photo: "/images/doctors/Gromov Evgeny Viktorovich.webp", description: "Врач-уролог. Окончил университет с отличием. Стаж работы: с 2002 года" },
  { id: 16, name: "Иванченко Светлана Викторовна", slug: "ivanchenko-svetlana-viktorovna", specialization: "Эндокринолог, Детский эндокринолог", experience: 47, photo: "/images/doctors/Ivanchenko Svetlana Viktorovna.webp", description: "Врач-эндокринолог, детский эндокринолог высшей квалификационной категории. Стаж работы: с 1977 года" },
  { id: 17, name: "Ютанин Сергей Николаевич", slug: "yutanin-sergey-nikolaevich", specialization: "Хирург, Маммолог", experience: 48, photo: "/images/doctors/Yutanin Sergey Nikolaevich.webp", description: "Хирург, маммолог. Заслуженный врач России. Врач хирург высшей категории. Медицинский стаж с 1976 года" },
  { id: 18, name: "Казакова Маргарита Витальевна", slug: "kazakova-margarita-vitalievna", specialization: "Физиотерапевт", experience: 30, photo: "/images/doctors/Kazakova Margarita Vitalievna.webp", description: "Врач-физиотерапевт высшей квалификационной категории. Врач по лечебной физкультуре высшей квалификационной категории. Стаж работы: с 1994 года" },
  { id: 19, name: "Павлова Людмила Леонидовна", slug: "pavlova-lyudmila-leonidovna", specialization: "УЗИ", experience: 38, photo: "/images/doctors/Pavlova Lyudmila Leonidovna.webp", description: "Врач УЗИ. Врачебный стаж с 1986 г." },
  { id: 20, name: "Кузьминых Надежда Валентиновна", slug: "kuzminykh-nadezhda-valentinovna", specialization: "УЗИ", experience: 45, photo: "/images/doctors/Kuzminykh Nadezhda Valentinovna.webp", description: "Врач-диагност. Врач-диагност с 1986 года, квалифицирована в области гастроэнтерологии, уронефрологии, акушерстве и гинекологии, заболевания сердца и сосудов. Стаж работы: с 1979 года" },
  { id: 21, name: "Есакова Мария Александровна", slug: "esakova-maria-alexandrovna", specialization: "УЗИ", experience: 35, photo: "/images/doctors/Esakova Maria Alexandrovna.webp", description: "Врач УЗИ. Высшая квалификационная категория. Общий медицинский стаж – с 2002 года, по специальности – 15 лет" },
  { id: 23, name: "Максимова Инна Ивановна", slug: "maksimova-inna-ivanovna", specialization: "Биорезонансная терапия, Терапевт", experience: 42, photo: "/images/doctors/Maksimova Inna Ivanovna.webp", description: "Терапевт, специалист по биорезонансной терапии. Стаж работы: с 1982 года" },
  { id: 24, name: "Рубцова Ольга Юрьевна", slug: "rubtsova-olga-yurievna", specialization: "Стоматолог-хирург, Имплантолог, Стоматолог-терапевт, Стоматолог", experience: 23, photo: "/images/doctors/Rubtsova Olga Yurievna.webp", description: "Стоматолог-хирург, имплантолог, стоматолог-терапевт. Стаж работы: с 2001 года. В 2011 году награждена орденом «Лучший стоматолог»" },
  { id: 25, name: "Рубцов Роман Владимирович", slug: "rubtsov-roman-vladimirovich", specialization: "Стоматолог-ортопед, Стоматология", experience: 24, photo: "/images/doctors/Rubtsov Roman Vladimirovich.webp", description: "Стоматолог-ортопед. Стаж работы: с 2000 года" },
  { id: 26, name: "Кириллова Елена Владимировна", slug: "kirillova-elena-vladimirovna", specialization: "Стоматолог детский, Ортодонт, Стоматология", experience: 20, photo: "/images/doctors/Kirillova Elena Vladimirovna.webp", description: "Врач-стоматолог детский. Кандидат медицинских наук" },
  { id: 27, name: "Ярулова Вероника Юрьевна", slug: "yarulova-veronika-yuryevna", specialization: "Стоматолог-терапевт, Микроскопист", experience: 22, photo: "/images/doctors/Yarulova Veronika Yuryevna.webp", description: "Стоматолог-терапевт. Стаж работы с 2002 года. С января 2009 года по сегодняшний день врач-стоматолог терапевт в «Альтамед-С»" },
  { id: 29, name: "Лория Ольга Викторовна", slug: "loria-olga-viktorovna", specialization: "Педиатр", experience: 23, photo: "/images/doctors/Loria Olga Viktorovna.webp", description: "Педиатр. Стаж работы: с 2001 года. Врач высшей квалификационной категории по специальности «Инфекционные болезни». Ведет прием детей от 0 до 18 лет" },
  { id: 30, name: "Яблокова Инна Валерьевна", slug: "yablokova-inna-valerievna", specialization: "Офтальмолог", experience: 31, photo: "/images/doctors/Yablokova Inna Valerievna.webp", description: "Врач-офтальмолог высшей квалификационной категории. Стаж работы с 1993 года. Имеет богатый опыт работы с детьми от 0 до 14 лет и взрослыми" },
  { id: 31, name: "Рыжов Иван Николаевич", slug: "ryzhov-ivan-nikolaevich", specialization: "Отоларинголог", experience: 51, photo: "/images/doctors/Ryzhov Ivan Nikolaevich.webp", description: "Врач отоларинголог. Заслуженный врач России. Высококвалифицированный врач-оториноларинголог. Врачебный стаж с 1973 года. Имеет высшую квалификационную категорию с 1990 г." },
  { id: 32, name: "Иванова Ольга Юрьевна", slug: "ivanova-olga-yurievna", specialization: "Отоларинголог-сурдолог", experience: 42, photo: "/images/doctors/Ivanova Olga Yurievna.webp", description: "Врач сурдолог-оториноларинголог высшей квалификационной категории. Стаж работы с 1982 года. Является членом общества аудологов России" },
  { id: 33, name: "Гончаренко Елена Борисовна", slug: "goncharenko-elena-borisovna", specialization: "Ортодонт, Гнатолог, Стоматолог", experience: 27, photo: "/images/doctors/Goncharenko Elena Borisovna.webp", description: "Врач-ортодонт, гнатолог высшей квалификационной категории. Стаж работы: более 25 лет" },
  { id: 34, name: "Притула Александр Васильевич", slug: "pritula-aleksandr-vasilievich", specialization: "Невролог", experience: 40, photo: "/images/doctors/Pritula Alexander Vasilievich.webp", description: "Невролог. Стаж работы: с 1984 года" },
  { id: 35, name: "Пак Лариса Константиновна", slug: "pak-larisa-konstantinovna", specialization: "Невролог, Иглорефлексотерапевт, Фитотерапевт", experience: 35, photo: "/images/doctors/Pak Larisa Konstantinovna.webp", description: "Врач-невролог высшей категории. Стаж 35 лет. Иглорефлексотерапевт, фитотерапевт." },
  { id: 36, name: "Дутчак Елизавета Альбертовна", slug: "dutchak-elizaveta-albertovna", specialization: "Медсестра физиокабинета", experience: 24, photo: "/images/doctors/Dutchak Elizaveta Albertovna.webp", description: "Медсестра высшей квалификационной категории по физиотерапии и массажу. 19 лет стажа по специальности. Ведет прием детей (от 3 лет) и взрослых" },
  { id: 37, name: "Стаченкова Светлана Валериевна", slug: "stachenkova-svetlana-valerievna", specialization: "Остеопатия", experience: 29, photo: "/images/doctors/Stachenkova Svetlana Valerievna.webp", description: "Врач-педиатр, врач остеопат. Кандидат медицинских наук. Стаж работы: с 1995 года. Опыт практической работы с детьми в качестве педиатра и мануального терапевта более 20 лет" },
  { id: 38, name: "Белоус Олег Анатольевич", slug: "belous-oleg-anatolyevich", specialization: "Остеопатия", experience: 40, photo: "/images/doctors/Belous Oleg Anatolyevich.webp", description: "Врач-невролог высшей квалификационной категории. Врач остеопат высшей квалификационной категории. Член Российской ассоциации остеопатов. Доктор Остеопатии Европы. Стаж работы: с 1984 года" },
  { id: 39, name: "Громова Елена Анатольевна", slug: "gromova-elena-anatolyevna", specialization: "Маммолог", experience: 44, photo: "/images/doctors/Gromova Elena Anatolyevna.webp", description: "Врач онколог-маммолог высшей квалификационной категории. Стаж работы: с 1980 года. С 1992 года работает врачом онкологом и занимается маммологией" },
  { id: 40, name: "Костьо Елена Владимировна", slug: "kostyo-elena-vladimirovna", specialization: "Косметолог-массажист", experience: 10, photo: "/images/doctors/Kostyo Elena Vladimirovna.webp", description: "Косметолог-массажист. Медсестра физиокабинета. Имеет большой опыт по проведению любого вида массажа: медицинский массаж, антицеллюлитный массаж, коррекция фигуры" },
  { id: 41, name: "Русинович Валерий Михайлович", slug: "rusinovich-valery-mikhailovich", specialization: "Колопроктолог", experience: 42, photo: "/images/doctors/Rusinovich Valery Mikhailovich.webp", description: "Врач-колопроктолог высшей квалификационной категории. Кандидат медицинских наук. Стаж работы: с 1982 года" },
  { id: 42, name: "Никулина Елена Ивановна", slug: "nikulina-elena-ivanovna", specialization: "Детский массажист", experience: 31, photo: "/images/doctors/Nikulina Elena Ivanovna.webp", description: "Детский массажист и медицинская сестра по физиотерапии. Окончила московский медицинский колледж при Правительстве РФ в 1993 г." },
  { id: 43, name: "Понедельченко Надежда Ивановна", slug: "ponedelchenko-nadezhda-ivanovna", specialization: "Дерматокосметолог, Дерматолог лечение", experience: 32, photo: "/images/doctors/Ponedelchenko Nadezhda Ivanovna.webp", description: "Врач-дерматокосметолог. Стаж работы: с 1992 года. Окончила РУДН по специальности «Лечебное дело»" },
  { id: 44, name: "Полуэктова Оксана Николаевна", slug: "poluektova-oksana-nikolaevna", specialization: "Дерматовенеролог, Дерматолог лечение", experience: 40, photo: "/images/doctors/Poluektova Oksana Nikolaevna.webp", description: "Врач-дерматовенеролог высшей квалификационной категории. Стаж работы: с 1984 года. Ведет прием в качестве дерматолога: взрослого и детского" },
  { id: 45, name: "Перегудова Нина Алексеевна", slug: "peregudova-nina-alekseevna", specialization: "Гинеколог", experience: 43, photo: "/images/doctors/Peregudova Nina Alekseevna.webp", description: "Врач акушер-гинеколог высшей квалификационной категории. Стаж работы с 1981 года" },
  { id: 46, name: "Бригадирова Елена Михайловна", slug: "brigadirova-elena-mikhailovna", specialization: "Гинеколог", experience: 34, photo: "/images/doctors/Brigadirova Elena Mikhailovna.webp", description: "Врач акушер-гинеколог первой квалификационной категории. Стаж работы с 1990 года. С 2006 г. по настоящее время работает в ООО «Альтамед-С»" },
  { id: 47, name: "Будко Елена Анатольевна", slug: "budko-elena-anatolyevna", specialization: "Гастроэнтеролог", experience: 26, photo: "/images/doctors/Budko Elena Anatolyevna.webp", description: "Кандидат медицинских наук. Ведет прием детей (с 2 лет) и взрослого населения, семейный гастроэнтеролог" },
  { id: 48, name: "Лысенко Ирина Владимировна", slug: "lysenko-irina-vladimirovna", specialization: "Аллерголог", experience: 42, photo: "/images/doctors/Lysenko Irina Vladimirovna.webp", description: "Врач аллерголог-иммунолог первой квалификационной категории. Стаж работы: с 1982 года. С 2004 года в медицинском центре «Альтамед-С»" },
  { id: 49, name: "Неклюдов Владимир Юрьевич", slug: "neklyudov-vladimir-yuryevich", specialization: "Травматолог-ортопед", experience: 39, photo: "/images/doctors/Neklyudov Vladimir Yuryevich.webp", description: "Врач травматолог-ортопед. Врачебный стаж с 1985 г" },
  { id: 50, name: "Абрамов Юно Эриильевич", slug: "abramov-yuno-eriilevich", specialization: "Стоматолог-хирург, Имплантолог, Стоматолог", experience: 6, photo: "/images/doctors/Abramov Yuno Eriilevich.webp", description: "Стоматолог-хирург, имплантолог. Окончил с отличием Первый московский государственный медицинский университет им. И.М.Сеченова" },
  { id: 51, name: "Рыжов Андрей Иванович", slug: "ryzhov-andrey-ivanovich", specialization: "Отоларинголог", experience: 23, photo: "/images/doctors/Ryzhov Andrey Ivanovich.webp", description: "Врач оториноларинголог. Стаж с 2001 года" },
  { id: 52, name: "Чернова Алла Валерьевна", slug: "chernova-alla-valerievna", specialization: "Стоматолог", experience: 15, photo: "/images/doctors/Chernova Alla Valerievna.webp", description: "Врач стоматолог-терапевт. Окончила Рязанский государственный университет имени акад. И. П. Павлова по специальности «Врач- стоматолог»" },
  { id: 53, name: "Исаева Екатерина Николаевна", slug: "isaeva-ekaterina-nikolaevna", specialization: "Гигиенист стоматологический, Стоматология профилактическая", experience: 6, photo: "/images/doctors/isaeva-ekaterina-nikolaevna.jpg", description: "Квалифицированный гигиенист в области профилактики заболеваний полости рта и поддержания здоровья зубов и десен. Профессиональная гигиена, подбор средств ухода. Стаж с 2019 года." },
  { id: 54, name: "Молостов Александр Венедиктович", slug: "molostov-aleksandr-venedikhtovich", specialization: "Кардиолог", photo: "", description: "Врач-кардиолог" }
];

export const services = [
  {
    id: 1,
    name: "Терапия",
    description: "Общая терапевтическая помощь",
    price: "от 2000 руб."
  },
  {
    id: 2,
    name: "Кардиология",
    description: "Диагностика и лечение сердечно-сосудистых заболеваний",
    price: "от 3000 руб."
  },
  {
    id: 3,
    name: "Неврология",
    description: "Лечение заболеваний нервной системы",
    price: "от 2500 руб."
  },
  {
    id: 4,
    name: "Хирургия",
    description: "Хирургические операции различной сложности",
    price: "от 15000 руб."
  },
  {
    id: 5,
    name: "Гинекология",
    description: "Женское здоровье и репродуктивная медицина",
    price: "от 2200 руб."
  },
  {
    id: 6,
    name: "Урология",
    description: "Диагностика и лечение урологических заболеваний",
    price: "от 2800 руб."
  }
];

export type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
};

export const articles: Article[] = [
  // Статьи №1 и №2 удалены по запросу — страницы /blog/1 и /blog/2 больше не должны существовать
];

export const categories = [
  { id: 1, name: "Терапия" },
  { id: 2, name: "Хирургия" },
  { id: 3, name: "Диагностика" },
  { id: 4, name: "Профилактика" }
]; 