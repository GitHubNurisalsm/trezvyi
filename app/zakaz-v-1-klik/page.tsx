import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { primaryService, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Заказать трезвого водителя в Бишкеке",
  description: "Закажите трезвого водителя или помощь на дороге в Бишкеке по телефону или через WhatsApp. Работаем круглосуточно.",
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
    <main id="main-content" className="min-h-screen bg-slate-50 pb-24 md:pb-0">
      <Header />
      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="tap-action inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 hover:bg-slate-50">
            <ArrowLeft className="h-4 w-4" /> На главную
          </Link>

          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-extrabold text-green-700">Заказ без регистрации</p>
            <h1 className="text-balance mt-2 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">Выберите нужную услугу</h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">Нажмите на звонок или WhatsApp. Никаких форм заполнять не нужно.</p>
          </div>

          <article className="mt-8 grid overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.07)] lg:grid-cols-[1fr_0.82fr]">
            <div className="p-6 md:p-8">
              <span className="text-sm font-extrabold text-green-700">Главная услуга</span>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-slate-950">Трезвый водитель</h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">{primaryService.description}</p>
              <p className="mt-4 text-xl font-black text-green-700">{primaryService.price}</p>
            </div>
            <div className="grid gap-3 bg-green-50 p-5 md:p-6">
              <a href={`tel:${siteConfig.phone}`} className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 text-base font-black text-slate-950 hover:bg-green-400">
                <Phone className="h-5 w-5" /> Позвонить
              </a>
              <a href={getWhatsAppLink(primaryService.message)} target="_blank" rel="noopener noreferrer" className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-base font-extrabold text-slate-900 hover:bg-slate-50">
                <MessageCircle className="h-5 w-5 text-green-600" /> WhatsApp
              </a>
            </div>
          </article>

          <div className="mt-12">
            <h2 className="text-2xl font-black tracking-[-0.025em] text-slate-950">Другая помощь в дороге</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {roadServices.map((service) => (
                <a key={service.title} href={getWhatsAppLink(service.message)} target="_blank" rel="noopener noreferrer" className="tap-action flex min-h-[96px] items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-green-300 hover:bg-green-50/40">
                  <span>
                    <span className="block text-lg font-extrabold text-slate-950">{service.title}</span>
                    <span className="mt-1 block text-sm font-bold text-green-700">{service.price}</span>
                  </span>
                  <MessageCircle className="h-6 w-6 shrink-0 text-green-600" />
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
