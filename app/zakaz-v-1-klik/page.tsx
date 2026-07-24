import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { primaryService, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Заказать трезвого водителя в Бишкеке",
  description:
    "Закажите трезвого водителя или помощь на дороге в Бишкеке по телефону или через WhatsApp. Работаем круглосуточно.",
  alternates: { canonical: "/zakaz-v-1-klik" },
  openGraph: {
    url: "/zakaz-v-1-klik",
    title: "Заказать трезвого водителя в Бишкеке",
    description: "Быстрый заказ трезвого водителя по телефону или через WhatsApp.",
  },
};

export default function OneClickOrderPage() {
  const roadServices = services.filter((service) => !service.featured);

  return (
    <main id="main-content" className="min-h-screen bg-[#f5f3ed] pb-24 md:pb-0">
      <Header />

      <section className="px-4 pb-14 pt-5 md:px-8 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="tap-action inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-black text-[#171a17]"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>

          <div className="surface-noise mt-5 overflow-hidden rounded-[2rem] bg-[#171a17] px-6 py-9 text-white md:rounded-[2.75rem] md:px-12 md:py-12">
            <p className="text-sm font-black text-[#63e587]">Заказ без регистрации</p>
            <h1 className="display-font text-balance mt-3 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">Что вам нужно?</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">Выберите один вариант. Никаких форм — сразу звонок или готовое сообщение.</p>
          </div>

          <article className="mt-5 grid overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_48px_rgba(23,26,23,0.07)] md:grid-cols-[1fr_0.85fr]">
            <div className="p-6 md:p-10">
              <span className="inline-flex rounded-xl bg-[#dff7e5] px-3 py-2 text-sm font-black text-[#196f34]">Главная услуга</span>
              <h2 className="display-font text-balance mt-5 text-4xl font-black leading-none text-[#171a17] md:text-5xl">Нужен трезвый водитель?</h2>
              <p className="text-pretty mt-4 max-w-xl text-lg leading-relaxed text-[#171a17]/58">{primaryService.description}</p>
              <p className="mt-5 text-2xl font-black text-[#238d43]">{primaryService.price}</p>
            </div>
            <div className="grid gap-3 bg-[#edf8ef] p-5 md:p-8">
              <a
                href={`tel:${siteConfig.phone}`}
                className="tap-action inline-flex min-h-[76px] items-center justify-center gap-3 rounded-2xl bg-[#42d36b] px-5 text-xl font-black text-[#101510]"
              >
                <Phone className="h-6 w-6" strokeWidth={2.7} />
                Позвонить сейчас
              </a>
              <a
                href={getWhatsAppLink(primaryService.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-action inline-flex min-h-[68px] items-center justify-center gap-3 rounded-2xl bg-white px-5 text-lg font-black text-[#171a17]"
              >
                <MessageCircle className="h-6 w-6" />
                Написать в WhatsApp
              </a>
            </div>
          </article>

          <div className="mt-12 grid gap-5 md:grid-cols-[0.62fr_1.38fr]">
            <div>
              <p className="text-sm font-black text-[#238d43]">Другая помощь</p>
              <h2 className="display-font mt-3 text-4xl font-black leading-none text-[#171a17] md:text-5xl">Выберите услугу</h2>
            </div>
            <div className="grid gap-3">
              {roadServices.map((service, index) => (
                <a
                  key={service.title}
                  href={getWhatsAppLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-action group grid min-h-[92px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.4rem] bg-white px-5 py-4 shadow-[0_10px_28px_rgba(23,26,23,0.04)] md:px-6"
                >
                  <span className="display-font inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf8ef] text-lg font-black text-[#196f34]">{index + 1}</span>
                  <span>
                    <span className="block text-lg font-black text-[#171a17]">{service.title}</span>
                    <span className="mt-1 block text-sm font-bold text-[#238d43]">{service.price}</span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-[#171a17]/35 transition group-hover:text-[#238d43]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileActionBar />
    </main>
  );
}
