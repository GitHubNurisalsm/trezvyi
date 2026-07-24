import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { services } from "@/lib/services";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function ServicesSection() {
  const roadServices = services.filter((service) => !service.featured);

  return (
    <section className="px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold text-green-700">Дополнительная помощь</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-4xl">Помощь в дороге</h2>
          </div>
          <p className="max-w-xl leading-6 text-slate-600">Все услуги доступны по тому же номеру. Цену уточняем до выезда.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {roadServices.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-slate-950">{service.title}</h3>
                  <p className="shrink-0 rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-xl font-black tracking-[-0.025em] text-green-700 sm:text-2xl">{service.price}</p>
                </div>
                <p className="mt-3 leading-6 text-slate-600">{service.description}</p>
                <a
                  href={getWhatsAppLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-action mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  <MessageCircle className="h-5 w-5" />
                  Заказать в WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
