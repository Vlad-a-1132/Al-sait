export const CLINIC_MAP_BRANCHES = [
  {
    id: 'mozhayskoye',
    number: 1,
    street: 'Можайское',
    building: 'шоссе, 141',
    houseNumber: '141',
    address: 'Можайское шоссе, 141',
    yandexUrl: 'https://yandex.ru/maps/org/altamed_s/90394177412/',
    latitude: 55.685103,
    longitude: 37.298444,
    x: 411.12,
    y: 358.83,
  },
  {
    id: 'krylova',
    number: 2,
    street: 'М. Крылова',
    building: 'бульвар, 23',
    houseNumber: '23',
    address: 'бульвар Маршала Крылова, 23',
    yandexUrl: 'https://yandex.ru/maps/org/altamed_s/1158069292/',
    latitude: 55.687515,
    longitude: 37.29997,
    x: 489.6,
    y: 139.55,
  },
] as const;
// Coordinates and organization links checked against the Yandex clinic cards on 26 November 2026.
// x/y use the same Mercator projection and bounds as public/images/maps/odintsovo-clinics.svg.
