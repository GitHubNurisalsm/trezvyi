export type Service = {
  title: string;
  shortTitle: string;
  description: string;
  price: string;
  image: string;
  message: string;
  featured?: boolean;
  href?: string;
};

export const services: Service[] = [
  {
    title: "Трезвый водитель",
    shortTitle: "Город",
    description:
      "Водитель приедет по указанному адресу и доставит вас на вашем автомобиле.",
    price: "от 800 сом",
    image: "/images/driver.jpg",
    message: "Здравствуйте! Я хочу вызвать трезвого водителя.",
    featured: true,
    href: "/trezvyi-voditel-bishkek",
  },
  {
    title: "Доставка бензина",
    shortTitle: "Доставка бензина",
    description: "Привезём топливо туда, где остановился автомобиль.",
    price: "от 400 сом",
    image: "/images/fuel.jpg",
    message: "Здравствуйте! Мне нужна доставка бензина.",
  },
  {
    title: "Подкачка колёс",
    shortTitle: "Подкачка колёс",
    description: "Поможем подкачать колесо и продолжить поездку.",
    price: "от 400 сом",
    image: "/images/tire-pump.jpg",
    message: "Здравствуйте! Мне нужна подкачка колеса.",
  },
  {
    title: "Запуск автомобиля",
    shortTitle: "Запуск автомобиля",
    description: "Поможем запустить автомобиль, если разрядился аккумулятор.",
    price: "от 500 сом",
    image: "/images/jump-start.jpg",
    message: "Здравствуйте! Мне нужна помощь с запуском автомобиля.",
  },
  {
    title: "Буксировка",
    shortTitle: "Буксировка",
    description: "Организуем аккуратную буксировку автомобиля.",
    price: "от 1500 сом",
    image: "/images/tow.jpg",
    message: "Здравствуйте! Мне нужна буксировка автомобиля.",
  },
];

export const primaryService = services[0];
