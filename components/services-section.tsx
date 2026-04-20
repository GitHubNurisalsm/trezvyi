import Image from "next/image";
import { Button } from "./ui/button";

const services = [
  {
    title: "ТРЕЗВЫЙ ВОДИТЕЛЬ",
    price: "ОТ 800 С",
    image: "/images/driver.jpg",
    featured: true,
  },
  {
    title: "ДОСТАВКА БЕНЗИНА",
    price: "ОТ 400 С",
    image: "/images/fuel.jpg",
    featured: false,
  },
  {
    title: "ПОДКАЧКА КОЛЕС",
    price: "ОТ 400 С",
    image: "/images/tire-pump.jpg",
    featured: false,
  },
  {
    title: "ПРИКУРИТЬ АВТО",
    price: "ОТ 500 С",
    image: "/images/jump-start.jpg",
    featured: false,
  },
  {
    title: "БУКСИРОВКА",
    price: "ОТ 1500 С",
    image: "/images/tow.jpg",
    featured: false,
  },
];

export function ServicesSection() {
  const featuredService = services.find((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 md:gap-10">
        {/* Featured Card - Full Width */}
        {featuredService && (
          <div className="relative bg-neutral-100 rounded-2xl overflow-hidden border-4 border-black shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="relative aspect-[16/10] md:aspect-[16/9]">
              <Image
                src={featuredService.image}
                alt={featuredService.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
              <a href="tel:+996507777961" className="linkForNumber">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight" style={{fontSize:"22px"}}>
                  {featuredService.title}
                </h3>
              </a>
              <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold">
                {featuredService.price}
              </p>
              <Button asChild className="mt-4 bg-[#22C55E] text-black" size="lg" style={{width: '50%'}}>
                <a href="https://wa.me/996507777961" target="_blank" rel="noopener noreferrer">
                  Заказать
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Other Services - 1 column mobile, 2 columns desktop, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full">
          {otherServices.map((service) => (
            <div
              key={service.title}
              className="relative bg-neutral-100 rounded-2xl overflow-hidden border-4 border-black shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                <a href="tel:+996507777961" className="linkForNumber">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
                    {service.title}
                  </h3>
                </a>
                <p className="mt-3 text-lg md:text-xl lg:text-2xl font-extrabold">
                  {service.price}
                </p>
                <Button asChild className="mt-3 bg-[#22C55E] text-black" size="lg" style={{width: '50%'}}>
                  <a href="https://wa.me/996507777961" target="_blank" rel="noopener noreferrer">
                    Заказать
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
