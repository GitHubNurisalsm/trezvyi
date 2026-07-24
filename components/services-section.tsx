import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "./ui/button";

export function ServicesSection() {
  const featuredService = services.find((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 md:gap-10">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#15803d]">Услуги 24/7</p>
          <h2 className="mt-3 text-3xl font-black text-black md:text-5xl">Помощь водителям в Бишкеке</h2>
          <p className="mt-4 text-lg leading-relaxed text-black/70">Стоимость согласовываем до начала поездки или выезда.</p>
        </div>
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
              <Link href={featuredService.href ?? "/"}>
                <h3 className="text-3xl font-black tracking-tight md:text-5xl lg:text-6xl">
                  {featuredService.title}
                </h3>
              </Link>
              <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold">
                {featuredService.price}
              </p>
              <Button asChild className="mt-5 min-h-12 w-full max-w-xs bg-[#22C55E] text-black" size="lg">
                <a href={getWhatsAppLink(featuredService.message)} target="_blank" rel="noopener noreferrer">
                  Заказать в WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}

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
                <a href={`tel:${siteConfig.phone}`}>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
                    {service.title}
                  </h3>
                </a>
                <p className="mt-3 text-lg md:text-xl lg:text-2xl font-extrabold">
                  {service.price}
                </p>
                <Button asChild className="mt-4 min-h-11 w-full max-w-xs bg-[#22C55E] text-black" size="lg">
                  <a href={getWhatsAppLink(service.message)} target="_blank" rel="noopener noreferrer">
                    Заказать в WhatsApp
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
