import Image from "next/image";
import { Check, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

const facts = ["24/7", "от 800 сом", "Бишкек и пригород"] as const;

export function HeroSection() {
  return (
    <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.92fr] md:items-center lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm font-bold text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Работаем круглосуточно
          </div>

          <h1 className="text-balance mt-5 max-w-2xl text-[2.7rem] font-black leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            Трезвый водитель в Бишкеке
          </h1>
          <p className="text-pretty mt-5 max-w-xl text-lg leading-7 text-slate-600 md:text-xl md:leading-8">
            Приедем по указанному адресу и отвезём вас домой на вашем автомобиле.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="tap-action inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-green-500 px-5 text-lg font-black text-slate-950 shadow-[0_10px_28px_rgba(34,197,94,0.18)] hover:bg-green-400"
            >
              <Phone className="h-6 w-6" strokeWidth={2.5} />
              Позвонить
            </a>
            <a
              href={getWhatsAppLink("Здравствуйте! Нужен трезвый водитель.")}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-action inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-extrabold text-slate-900 hover:bg-slate-50"
            >
              <MessageCircle className="h-6 w-6 text-green-600" strokeWidth={2.3} />
              WhatsApp
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-slate-600">
            {facts.map((fact) => (
              <li key={fact} className="inline-flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
          <Image
            src="/images/driver.jpg"
            alt="Трезвый водитель за рулём автомобиля клиента"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur-sm">
            <p className="text-sm font-extrabold text-slate-950">Водитель сядет за руль вашей машины</p>
            <p className="mt-1 text-sm text-slate-600">Стоимость согласуем до начала поездки.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
