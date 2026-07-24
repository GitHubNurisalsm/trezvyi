import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ChevronRight, MessageCircle } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getWhatsAppLink, oneClickServices } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Заказать трезвого водителя в Бишкеке",
  description:
    "Закажите трезвого водителя или помощь на дороге в Бишкеке через WhatsApp. Работаем круглосуточно.",
  alternates: {
    canonical: "/zakaz-v-1-klik",
  },
  openGraph: {
    url: "/zakaz-v-1-klik",
    title: "Заказать трезвого водителя в Бишкеке",
    description:
      "Быстрый заказ трезвого водителя и помощи на дороге через WhatsApp.",
  },
};

export default function OneClickOrderPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f4f7f4_100%)]">
      <Header />

      <section className="w-full px-6 pb-16 pt-8 md:pb-24 md:pt-12 flex flex-col items-center justify-center">
        <div className="mx-auto flex max-w-6xl w-full flex-col gap-8">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-bold text-black transition hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад на главную
          </Link>

          <div className="overflow-hidden rounded-[2rem] border-4 border-black bg-black px-6 py-10 text-white md:px-10 md:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#86efac]">
              Заказ в 1 клик
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Выберите услугу
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              Нажмите кнопку внутри карточки, и откроется WhatsApp с готовым текстом.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {oneClickServices.map((service, index) => (
              <div
                key={service.title}
                className="flex min-h-[250px] flex-col justify-between rounded-[1.75rem] border-4 border-black bg-white p-6 transition duration-200 hover:-translate-y-1 hover:bg-[#f0fdf4]"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#dcfce7] text-lg font-black text-black">
                    {index + 1}
                  </div>
                  <h2 className="mt-5 text-2xl font-black text-black">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base font-medium leading-relaxed text-black/70">
                    {service.description}
                  </p>
                  <p className="mt-3 text-base font-black text-black">{service.price}</p>
                </div>

                <a
                  href={getWhatsAppLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex items-center justify-between rounded-2xl bg-[#22c55e] px-4 py-3 text-white transition hover:bg-[#16a34a]"
                >
                  <span className="inline-flex min-h-10 items-center gap-2 text-base font-extrabold">
                    <MessageCircle className="h-5 w-5" />
                    Открыть WhatsApp
                  </span>
                  <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
