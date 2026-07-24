import Image from "next/image";
import { Clock3, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="w-full px-4 pb-10 pt-4 md:px-8 md:pb-16 md:pt-6">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2rem] bg-[#171a17] shadow-[0_24px_70px_rgba(23,26,23,0.16)] md:min-h-[650px] md:grid-cols-[1.03fr_0.97fr] md:rounded-[2.75rem]">
        <div className="surface-noise flex flex-col justify-center px-6 py-10 text-white sm:px-9 md:px-12 md:py-14 lg:px-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-bold text-white/90">
            <Clock3 className="h-4 w-4 text-[#63e587]" />
            Работаем круглосуточно
          </div>
          <h1 className="display-font text-balance mt-7 max-w-2xl text-[clamp(3.1rem,8vw,6.8rem)] font-black leading-[0.88] text-white">
            Доедьте домой безопасно
          </h1>
          <p className="text-pretty mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/72 md:text-xl">
            Трезвый водитель приедет к вам и сядет за руль вашего автомобиля.
          </p>
          <div className="mt-7 flex items-end gap-3">
            <span className="text-sm font-bold text-white/55">по Бишкеку</span>
            <span className="display-font text-4xl font-black text-[#63e587]">от 800 сом</span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="tap-action inline-flex min-h-[72px] items-center justify-center gap-3 rounded-[1.35rem] bg-[#42d36b] px-5 text-xl font-black text-[#101510] shadow-[0_12px_30px_rgba(66,211,107,0.16)]"
            >
              <Phone className="h-6 w-6" strokeWidth={2.8} />
              Позвонить сейчас
            </a>
            <a
              href={getWhatsAppLink("Здравствуйте! Нужен трезвый водитель.")}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-action inline-flex min-h-[72px] items-center justify-center gap-3 rounded-[1.35rem] border border-white/14 bg-white/10 px-5 text-lg font-black text-white hover:bg-white/15"
            >
              <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
              Написать
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold text-white/48">Назовите адрес подачи — остальное уточним по телефону.</p>
        </div>

        <div className="relative min-h-[340px] md:min-h-full">
          <Image
            src="/images/driver.jpg"
            alt="Трезвый водитель за рулём автомобиля клиента"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171a17]/70 via-transparent to-transparent md:bg-gradient-to-r md:from-[#171a17]/25 md:to-transparent" />
          <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-2 text-white md:inset-x-7 md:bottom-7">
            <div className="rounded-2xl border border-white/20 bg-[#171a17]/78 p-4 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">Где</p>
              <p className="mt-1 text-base font-black">Бишкек и пригород</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-[#171a17]/78 p-4 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">Как</p>
              <p className="mt-1 text-base font-black">На вашей машине</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
