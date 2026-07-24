import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { services } from "@/lib/services";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function ServicesSection() {
  const otherServices = services.filter((service) => !service.featured);

  return (
    <section className="w-full px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-black text-[#238d43]">Если проблема с машиной</p>
            <h2 className="display-font text-balance mt-3 text-4xl font-black leading-none text-[#171a17] md:text-6xl">Поможем в дороге</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[#171a17]/58 md:justify-self-end">
            Дополнительные услуги работают по тому же номеру. Стоимость уточняем до выезда.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {otherServices.map((service) => (
            <article
              key={service.title}
              className="group grid min-h-[220px] grid-cols-[0.92fr_1.08fr] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_32px_rgba(23,26,23,0.055)]"
            >
              <div className="relative min-h-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 45vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="text-pretty text-lg font-black leading-tight text-[#171a17] sm:text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#171a17]/55">{service.description}</p>
                <p className="mt-3 text-base font-black text-[#238d43]">{service.price}</p>
                <a
                  href={getWhatsAppLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-action mt-auto inline-flex min-h-11 items-center justify-between rounded-xl bg-[#edf8ef] px-4 text-sm font-black text-[#196f34]"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Заказать
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
