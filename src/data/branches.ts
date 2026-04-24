export type Branch = {
  title: string;
  address: string;
  hours: string;
  mapLink: string;
};

export const CONTACT_PHONE = "+7 (495) 255-44-50";
export const CONTACT_PHONE_LINK = "tel:+74952554450";

/** Реальные адреса и ссылки (см. /contacts). */
export const ODINTSOVO_BRANCHES: Branch[] = [
  {
    title: "Клиника на бульваре Маршала Крылова",
    address:
      "143005, Московская обл., Одинцовский городской округ, г. Одинцово, бульвар Маршала Крылова, д. 23, пом. 1",
    hours: "Пн-Вс: 8:00–21:00",
    mapLink: "https://yandex.ru/maps/?rtext=~55.680564,37.291079&rtt=auto",
  },
  {
    title: "Клиника на Можайском шоссе",
    address:
      "143005, Московская обл., Одинцовский городской округ, г. Одинцово, Можайское шоссе, д. 141, пом. 4",
    hours: "Пн-Вс: 8:00–21:00",
    mapLink: "https://yandex.ru/maps/?rtext=~55.676321,37.306184&rtt=auto",
  },
];

