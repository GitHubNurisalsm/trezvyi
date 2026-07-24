import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { ContactActions } from "@/components/contact-actions";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { soberDriverFaq } from "@/lib/faq";
import { primaryService } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const pageTitle = "Трезвый водитель в Бишкеке 24/7";
const pageDescription =
  "Закажите трезвого водителя в Бишкеке: водитель приедет к вам и доставит вас домой на вашем автомобиле. Работаем круглосуточно, стоимость от 800 сом.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/trezvyi-voditel-bishkek" },
  openGraph: {
    type: "website",
    url: "/trezvyi-voditel-bishkek",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    images: [
      {
        url: primaryService.image,
        width: 1024,
        height: 1024,
        alt: "Услуга трезвого водителя в Бишкеке",
      },
    ],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/trezvyi-voditel-bishkek/#service`,
      name: "Трезвый водитель в Бишкеке",
      description: pageDescription,
      url: `${siteConfig.url}/trezvyi-voditel-bishkek`,
      serviceType: "Трезвый водитель",
      areaServed: { "@type": "City", name: siteConfig.city },
      provider: { "@id": `${siteConfig.url}/#business` },
      offers: {
        "@type": "Offer",
        price: "800",
        priceCurrency: "KGS",
        description: "Стоимость от 800 сом; итоговая цена согласовывается до поездки.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: soberDriverFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function SoberDriverPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f5f3ed] pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <section className="px-4 pb-10 pt-4 text-white md:px-8 md:pb-16 md:pt-6">
        <div className="surface-noise mx-auto max-w-7xl rounded-[2rem] bg-[#171a17] px-6 py-10 md:rounded-[2.75rem] md:px-12 md:py-14 lg:px-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/75 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="text-sm font-black text-[#63e587]">Выездная услуга · 24/7</p>
              <h1 className="display-font text-balance mt-4 text-5xl font-black leading-[0.95] md:text-7xl">Трезвый водитель в Бишкеке</h1>
              <p className="text-pretty mt-6 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">
                Водитель приедет по указанному адресу и безопасно доставит вас до места назначения на вашем автомобиле.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/12 bg-white/7 p-6 text-white backdrop-blur">
              <p className="text-sm font-black text-[#63e587]">Стоимость</p>
              <p className="display-font mt-2 text-4xl font-black">от 800 сом</p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">Итоговую цену согласуем до начала поездки.</p>
              <div className="mt-6"><ContactActions /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black text-[#238d43]">Когда пригодится</p>
            <h2 className="display-font text-balance mt-3 text-4xl font-black leading-none text-[#171a17] md:text-6xl">Ваш автомобиль останется с вами</h2>
            <p className="text-pretty mt-5 text-lg leading-relaxed text-[#171a17]/58">
              Услуга подходит, когда вы приехали на личном автомобиле, но не хотите или не можете продолжать поездку за рулём. Водитель управляет автомобилем клиента и доставляет его вместе с владельцем по согласованному маршруту.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              "Поездка домой после мероприятия",
              "Ночной или предварительный заказ",
              "Перегон автомобиля по Бишкеку",
              "Выезд в ближайший пригород по согласованию",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 text-lg font-bold text-[#171a17] shadow-[0_10px_28px_rgba(23,26,23,0.04)]">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#238d43]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#e9e7df] px-6 py-10 md:rounded-[2.75rem] md:px-12 md:py-14">
          <p className="text-sm font-black text-[#238d43]">Порядок заказа</p>
          <h2 className="display-font mt-3 text-4xl font-black leading-none text-[#171a17] md:text-6xl">Три шага до поездки</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Свяжитесь с нами", "Позвоните или напишите в WhatsApp."],
              ["2", "Сообщите маршрут", "Назовите адрес подачи и место назначения."],
              ["3", "Подтвердите заказ", "Согласуйте стоимость и ожидайте водителя."],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-3xl bg-[#f5f3ed] p-6">
                <span className="display-font text-4xl font-black text-[#238d43]">{number}</span>
                <h3 className="mt-5 text-xl font-black text-[#171a17]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#171a17]/58">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
