export const whatsappNumber = "996507777961";

export const oneClickServices = [
  {
    title: "Заказать водителя",
    description: "Быстрый выезд трезвого водителя по Бишкеку и пригороду.",
    message: "Здравствуйте! Я хочу вызвать водителя.",
  },
  {
    title: "Доставка бензина",
    description: "Привезем топливо туда, где вы остановились.",
    message: "Здравствуйте! Мне нужна услуга доставки бензина.",
  },
  {
    title: "Подкачка колеса",
    description: "Поможем подкачать колесо и быстро продолжить путь.",
    message: "Здравствуйте! Мне нужна услуга подкачки колеса.",
  },
  {
    title: "Прикурить авто",
    description: "Поможем запустить автомобиль, если сел аккумулятор.",
    message: "Здравствуйте! Мне нужна услуга прикурить авто.",
  },
  {
    title: "Буксировка",
    description: "Организуем аккуратную и безопасную буксировку автомобиля.",
    message: "Здравствуйте! Мне нужна услуга буксировки автомобиля.",
  },
] as const;

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
